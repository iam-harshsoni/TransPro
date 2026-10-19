import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InvoiceNoFilter, PartyFilter, VesselwiseSummary} from '../../models/vesselwisesummary.model';
import { VesselwisesummaryService } from '../../services/vesselwisesummary.service';
import { DatePickerModule } from 'primeng/datepicker';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule,} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { CustomerService } from '../../../../customers/services/customer.service';
import { catchError, debounceTime, distinctUntilChanged, map, of, Subject, switchMap} from 'rxjs';
import { CustomerOption } from '../../../../customers/models/customer.model';
import { Tooltip } from 'primeng/tooltip';

@Component({
    selector: 'app-vesselwisesummary-report',
    imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    ToolbarModule,
    DatePickerModule,
    TagModule,
    MultiSelectModule,
    FormsModule,
    Tooltip
],
    providers  : [MessageService],
    templateUrl: './vesselwisesummary-report.component.html',
    styleUrl   : './vesselwisesummary-report.component.scss',
})

export class VesselwisesummaryReportComponent implements OnInit {
    private vesselwiseSummaryService = inject(VesselwisesummaryService);
    private customerService          = inject(CustomerService);
    private messageService           = inject(MessageService);
    private fb                       = inject(FormBuilder);

    private customerSearch$ = new Subject<string>();
    private invoiceNo$ = new Subject<string>();

    vesselwiseSummary = signal<VesselwiseSummary[]>([]);
    customers         = signal<CustomerOption[]>([]);
    invoiceNos        = signal<InvoiceNoFilter[]>([]);
    isLoading         = true;
    exporting         = false;

    //parties    = signal<PartyFilter[]>([]);
    // invoiceNos = signal<InvoiceNoFilter[]>([]);

    form: FormGroup = this.fb.group({
        fromDate          : new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        toDate            : new Date(),
        selectedCustomerIds  : this.fb.control<number[]>([]),
        selectedInvoiceNos: this.fb.control<number[]>([]),
    });

    totalRecords: number = 0;
    pageSize    : number = 10;
    currentPage : number = 1;
    first       : number = 0;
    searchValue : string = '';

    private searchTimeout: any;

    ngOnInit(): void {
        this.loadFilters();
    }

    loadVesselwiseSummary(
    page      : number,
    size      : number,
    fromDate  : Date,
    toDate    : Date,
    search    : string,
    partyIds  : number[],
    invoiceNos: number[],
    )         : void {
        this.vesselwiseSummaryService
            .getPaginated(page, size, fromDate, toDate, search, partyIds, invoiceNos)
            .subscribe({
                next: (res) => {
                    this.vesselwiseSummary.set(res.data.summary.data);
                    this.totalRecords = res.data.summary.totalCount;

                      // this.parties.set(res.data.filters.partyFilterResponses);
                    // this.invoiceNos.set(res.data.filters.invoiceNoFilterResponses);

                    this.isLoading = false;
                },
                error: (err) => {
                    this.messageService.add({
                        severity: 'error',
                        summary : 'Error',
                        detail  : 'Failed to load summary',
                    });
                    this.isLoading = false;
                },
            });
        this.isLoading = true;
    }

    onLazyLoad(event: TableLazyLoadEvent): void {
          // || instead of ?? so that 0 also falls back to the default
        const size  = event.rows || this.pageSize || 10;
        const first = event.first ?? 0;
        const page  = Math.floor(first / size) + 1;

        this.pageSize    = size;
        this.first       = first;
        this.currentPage = page;

        const { fromDate, toDate, selectedCustomerIds, selectedInvoiceNos } = this.form.getRawValue();
        this.loadVesselwiseSummary(
            page,
            size,
            fromDate,
            toDate,
            this.searchValue,
            selectedCustomerIds,
            selectedInvoiceNos,
        );
    }

    onSearch(event: Event): void {
        const { fromDate, toDate, selectedCustomerIds, selectedInvoiceNos } = this.form.getRawValue();

        const value            = (event.target as HTMLInputElement).value;
              this.searchValue = value;

        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            this.loadVesselwiseSummary(
                1,
                this.pageSize,
                fromDate,
                toDate,
                this.searchValue,
                selectedCustomerIds,
                selectedInvoiceNos,
            );
        }, 400);
    }

    onSubmit(): void {
        const { fromDate, toDate, selectedCustomerIds, selectedInvoiceNos } = this.form.getRawValue();

        this.currentPage = 1;

        this.loadVesselwiseSummary(
            1,
            this.pageSize,
            fromDate,
            toDate,
            this.searchValue,
            selectedCustomerIds,
            selectedInvoiceNos,
        );
    }

    onReset(): void {
        this.form.reset({
            fromDate          : new Date(new Date().getFullYear(), new Date().getMonth(), 1),   // 2026, Sept, 1
            toDate            : new Date(),                                                     // current date.
            selectedCustomerIds  : [],
            selectedInvoiceNos: [],
        });

        this.searchValue = '';
        this.currentPage = 1;

        const { fromDate, toDate, selectedCustomerIds, selectedInvoiceNos } = this.form.getRawValue();
        this.loadVesselwiseSummary(
            1,
            this.pageSize,
            fromDate,
            toDate,
            '',
            selectedCustomerIds,
            selectedInvoiceNos,
        );
    }

    //Filters
    loadFilters() {
        this.customerFilter();
        this.invoiceNoFilter();
    }

    onCustomerSearch(event: any) {
        this.customerSearch$.next(event.filter ?? '');
    }

    onInvoiceNoSearch(event: any) {
        this.invoiceNo$.next(event.filter ?? '');
    }

    private customerFilter() {
        this.customerService.searchOptions('').subscribe({
            next: (res) => this.customers.set(res),
            error: () => this.customers.set([])
        });
        
        this.customerSearch$.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap(search => {
                const term = search.trim();

                return this.customerService.searchOptions(term.length < 2 ? '' : term).pipe(
                    catchError(() => of([] as CustomerOption[]))
                );
            })
        ).subscribe(customers => {
            const selectedIds = this.form.value.selectedCustomerIds ?? [];
            const selected = this.customers().filter(x=> selectedIds.includes(x.id));
            const others = customers.filter(x=> ! selectedIds.includes(x.id));

            this.customers.set([...selected, ...others]);
        });
    }

    private invoiceNoFilter() {
         this.vesselwiseSummaryService.searchInvoiceNo("").subscribe({
            next: (res) => {
                this.invoiceNos.set(res);
            },
            error: () => {
                this.invoiceNos.set([]);
            }
        });
        
        this.invoiceNo$.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap(search => {
                const term = search.trim();

                return this.vesselwiseSummaryService.searchInvoiceNo(term.length < 2 ? '' : term).pipe(
                    catchError(() => of([] as InvoiceNoFilter[]))
                );
            })
        ).subscribe(invoice  => {
            const selectedIds = this.form.value.selectedInvoiceNos ?? [];
            const selected    = this.invoiceNos().filter(i => selectedIds.includes(i.id));
            const others      = invoice.filter(i => !selectedIds.includes(i.id));

            this.invoiceNos.set([...selected, ...others]);
        });
    }

    exportExcel(): void {
        const { fromDate, toDate, selectedCustomerIds } = this.form.getRawValue();

        console.log(selectedCustomerIds);

        this.vesselwiseSummaryService.exportVesselwiseSummary(fromDate, toDate, selectedCustomerIds).subscribe({
            next: blob => {
                const url        = URL.createObjectURL(blob);
                const a          = document.createElement('a');
                      a.href     = url;
                      a.download = 'VesselwiseSummary.xlsx';
                a.click();
                URL.revokeObjectURL(url);
            },
            error: (err) => {
                console.error('Excel export failed', err);
            },
        });
    }
}
