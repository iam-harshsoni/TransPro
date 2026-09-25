import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { VesselwiseSummaries } from '../../models/vesselwisesummary.model';
import { VesselwisesummaryService } from '../../services/vesselwisesummary.service';
import { DatePickerModule } from 'primeng/datepicker';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';

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
		TagModule
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

	vesselwiseSummary = signal<VesselwiseSummaries[]>([]);
	isLoading = true;

	form: FormGroup = this.fb.group({
		fromDate: 
			new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				1
			),

		toDate: new Date(),
	});

	totalRecords: number  = 0;
	pageSize     : number = 10;
	currentPage  : number = 1;
	first = 0;
	searchValue  : string = '';

	private searchTimeout: any;

	loadVesselwiseSummary(page: number, size: number, fromDate : Date, toDate: Date, search : string) : void {
		this.isLoading = false;

		this.vesselwiseSummaryService.getPaginated(page, size, fromDate, toDate, search).subscribe({
			next: (res) => {
				this.vesselwiseSummary.set(res.data.data);
				this.totalRecords = res.data.totalCount;
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

		const { fromDate, toDate } = this.form.getRawValue();
		this.loadVesselwiseSummary(page, size, fromDate, toDate, this.searchValue);
	}

	onSearch(event: Event) : void {
		
	}

	onSubmit() : void {
		const { fromDate, toDate } = this.form.getRawValue();

		this.currentPage = 1;

		this.loadVesselwiseSummary(1, this.pageSize, fromDate, toDate, this.searchValue);
	}

	onReset() : void {
		this.form.patchValue({
			fromDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				1
			),
			toDate: new Date()
		});

		this.searchValue = '';
		this.currentPage = 1;

		const { fromDate, toDate } = this.form.getRawValue();

		this.loadVesselwiseSummary(
			1,
			this.pageSize,
			fromDate,
			toDate,
			''
		);
	}

}
