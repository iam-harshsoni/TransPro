import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InvoiceNoFilter, PartyFilter, VesselwiseSummary, VesselwiseSummaryReport } from '../../models/vesselwisesummary.model';
import { VesselwisesummaryService } from '../../services/vesselwisesummary.service';
import { DatePickerModule } from 'primeng/datepicker';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';

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
    FormsModule
],
	providers: [MessageService],
	templateUrl: './vesselwisesummary-report.component.html',
	styleUrl: './vesselwisesummary-report.component.scss',
})
export class VesselwisesummaryReportComponent {

	private vesselwiseSummaryService = inject(VesselwisesummaryService);
	private router = inject(Router);
	private messageService = inject(MessageService);
	private fb = inject(FormBuilder);

	vesselwiseSummary = signal<VesselwiseSummary[]>([]);
	isLoading = true;
	
	parties    = signal<PartyFilter[]>([]);
	invoiceNos = signal<InvoiceNoFilter[]>([]);

	form: FormGroup = this.fb.group({
		fromDate: 
			new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				1
			),

		toDate: new Date(),
		selectedPartyIds: this.fb.control<number[]>([]),
		selectedInvoiceNos: this.fb.control<number[]>([])
	});

	totalRecords: number  = 0;
	pageSize     : number = 10;
	currentPage  : number = 1;
	first = 0;
	searchValue  : string = '';

	private searchTimeout: any;

	loadVesselwiseSummary(page: number, size: number, fromDate : Date, toDate: Date, search : string, partyIds: number[], invoiceNos: number[]) : void {
		this.vesselwiseSummaryService.getPaginated(page, size, fromDate, toDate, search, partyIds, invoiceNos).subscribe({
			next: (res) => {
				this.vesselwiseSummary.set(res.data.summary.data);
				this.totalRecords = res.data.summary.totalCount;
				this.parties.set(res.data.filters.partyFilterResponses);
				this.invoiceNos.set(res.data.filters.invoiceNoFilterResponses);
				
				this.isLoading = false;
			},
			error: (err) => {
				this.messageService.add({
					severity: 'error',
					summary: 'Error',
					detail: 'Failed to load summary'
				});
				this.isLoading = false;
			}
		})
		this.isLoading = true;
	}

	onLazyLoad(event: TableLazyLoadEvent): void {
		// || instead of ?? so that 0 also falls back to the default
		const size = event.rows || this.pageSize || 10;
		const first = event.first ?? 0;
		const page = Math.floor(first / size) + 1;

		this.pageSize = size;
		this.first = first;
		this.currentPage = page;

		const { fromDate, toDate, selectedPartyIds, selectedInvoiceNos } = this.form.getRawValue();
		this.loadVesselwiseSummary(page, size, fromDate, toDate, this.searchValue, selectedPartyIds, selectedInvoiceNos);
	}

	onSearch(event: Event) : void {
		const { fromDate, toDate, selectedPartyIds, selectedInvoiceNos } = this.form.getRawValue();

		const value = (event.target as HTMLInputElement).value;
		this.searchValue = value;

		clearTimeout(this.searchTimeout);
		this.searchTimeout = setTimeout(() => {
			this.loadVesselwiseSummary(1, this.pageSize, fromDate, toDate, this.searchValue, selectedPartyIds, selectedInvoiceNos);
		}, 400);
	}

	onSubmit() : void {
		const { fromDate, toDate, selectedPartyIds, selectedInvoiceNos } = this.form.getRawValue();

		this.currentPage = 1;
		
		this.loadVesselwiseSummary(1, this.pageSize, fromDate, toDate, this.searchValue, selectedPartyIds, selectedInvoiceNos);
	}

	onReset() : void {
		this.form.reset({
			fromDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),  // 2026, Sept, 1
			toDate: new Date(), // current date.
			selectedPartyIds: [],
			selectedInvoiceNos: []
		});

		this.searchValue = '';
		this.currentPage = 1;

		const { fromDate, toDate, selectedPartyIds, selectedInvoiceNo } = this.form.getRawValue();
		this.loadVesselwiseSummary(1, this.pageSize, fromDate, toDate,'', selectedPartyIds, selectedInvoiceNo);
	}
}
