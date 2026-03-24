import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { Router } from '@angular/router';
import { TripService } from '../../services/trip.service';
import { SelectModule } from 'primeng/select';
import { TripSummary } from '../../models/trip.model';

@Component({
	selector: 'app-trip-list',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		TableModule,
		ButtonModule,
		InputTextModule,
		TagModule,
		ConfirmDialogModule,
		ToastModule,
		IconFieldModule,
		InputIconModule,
		ToolbarModule,
		TooltipModule,
		SelectModule,
	],
	providers: [MessageService, ConfirmationService],
	templateUrl: './trip-list.component.html',
	styleUrl: './trip-list.component.scss',
})
export class TripListComponent {

	private tripService = inject(TripService);
	private messageService = inject(MessageService);
	private confirmationService = inject(ConfirmationService)
	private router = inject(Router);
	private searchTimeout: any;

	trips: TripSummary[] = [];

	isLoading = signal<boolean>(false);
	totalRecords = 0;
	pageSize = 10;
	currentPage = 1;

	searchValue: number = 0;
	selectedStatus: string = '';

	// Status options for the filter dropdown
	// Matches your backend TripStatus enum values exactly
	statusOptions = [
		{ label: 'All Statuses', value: '' },
		{ label: 'Planned', value: 'Planned' },
		{ label: 'In Transit', value: 'InTransit' },
		{ label: 'Completed', value: 'Completed' },
		{ label: 'Cancelled', value: 'Cancelled' },
	];

	loadTrips(page: number, size: number, search: number = 0): void {
		this.isLoading.set(true);

		this.tripService.getPaginated({
			pageNumber: page,
			pageSize: size,
			search: search,
			status: this.selectedStatus || undefined,
		}).subscribe({
			next: (response) => {
				this.trips = response.data.data;
				this.totalRecords = response.data.totalCount;
				this.isLoading.set(false);
			},
			error: () => {
				this.messageService.add({
					severity: 'error',
					summary: 'Error',
					detail: 'Failed to load trips'
				});
				this.isLoading.set(false);
			}
		});
	}

	onLazyLoad(event: TableLazyLoadEvent): void {
		const page = Math.floor((event.first ?? 0) / (event.rows ?? 10)) + 1;
		const size = event.rows ?? 10;
		this.pageSize = size;
		this.currentPage = page;
		this.loadTrips(page, size);
	}

	onSearch(even: Event): void {
		const value = (even.target as HTMLInputElement).value;
		this.searchValue = Number(value);

		clearTimeout(this.searchTimeout);
		this.searchTimeout = setTimeout(() => {
			this.loadTrips(1, this.pageSize, Number(value));
		}, 400);
	}

	// When user changes status filter — reload from page 1
	onStatusFilter(): void {
		this.currentPage = 1;
		this.loadTrips(1, this.pageSize);
	}

	getStatusSeverity(status: string): 'info' | 'warn' | 'success' | 'danger' | 'secondary' {
		switch (status) {
			case 'Planned': return 'info';
			case 'InTransit': return 'warn';
			case 'Completed': return 'success';
			case 'Cancelled': return 'danger';
			default: return 'secondary';
		}
	}

	getStatusLabel(status: string): string {
		return status === 'InTransit' ? 'In Transit' : status;
	}

	navigateToCreate(): void {
		this.router.navigate(['/trips/create']);
	}

	viewDetail(trip: TripSummary): void {
		this.router.navigate(['/trips', trip.id]);
	}

	confirmCancel(trip: TripSummary): void {
		// Only allow cancel for Planned or InTransit trips
		if (trip.status === 'Completed' || trip.status === 'Cancelled') {
			this.messageService.add({
				severity: 'warn',
				summary: 'Cannot Cancel',
				detail: `Trip is already ${trip.status.toLowerCase()}`
			});
			return;
		}

		this.confirmationService.confirm({
			message: `Are you sure you want to cancel trip
                <strong>#${trip.id}</strong>
                (${trip.origin} → ${trip.destination})?
                <br><br>
                All assigned resources will be released.`,
			header: 'Confirm Cancellation',
			icon: 'pi pi-exclamation-triangle',
			rejectButtonProps: { label: 'No', severity: 'secondary', variant: 'text' },
			acceptButtonProps: { label: 'Yes, Cancel Trip', severity: 'danger' },
			accept: () => {
				this.tripService.cancel(trip.id).subscribe({
					next: (response) => {
						this.loadTrips(this.currentPage, this.pageSize);
						this.messageService.add({
							severity: 'success',
							summary: 'Cancelled',
							detail: response.data,
							life: 3000
						});
					},
					error: (err) => {
						this.messageService.add({
							severity: 'error',
							summary: 'Error',
							detail: err.error?.message ?? 'Failed to cancel trip',
							life: 5000
						});
					}
				});
			}
		});
	}
}