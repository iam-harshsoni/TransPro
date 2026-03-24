import { CommonModule } from '@angular/common';
import { Component, Inject, inject, OnInit, signal } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { TripService } from '../../services/trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDetail, TripStatus } from '../../models/trip.model';

@Component({
	selector: 'app-trip-detail',
	standalone: true,
	imports: [
		CommonModule,
		ButtonModule,
		TagModule,
		ToastModule,
		ConfirmDialogModule,
		TooltipModule,
	],
	providers: [MessageService, ConfirmationService],
	templateUrl: './trip-detail.component.html',
	styleUrl: './trip-detail.component.scss',
})
export class TripDetailComponent implements OnInit {

	private tripService         = inject(TripService);
	private route               = inject(ActivatedRoute);
	private router              = inject(Router);
	private messageService      = inject(MessageService);
	private confirmationService = inject(ConfirmationService);

	trip       = signal<TripDetail | null>(null);
	isLoading  = signal<boolean>(false);
	isUpdating = signal<boolean>(false);

	ngOnInit(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		if (id) this.loadTrip(id);
	}

	loadTrip(id: number) : void {
		this.isLoading.set(true);

		this.tripService.getById(id).subscribe({
			next: (response) => {
				this.trip.set(response.data);
				this.isLoading.set(false);
			},
			error: (err) => {
				this.messageService.add({
					severity: 'error',
					summary : 'Error',
					detail  : 'Failed to load trip details'
				});
				this.isLoading.set(false);
			}
		});
	}

	// Determines which status transitions are available
  	// based on current trip status
	getAvailableTransitions(): TripStatus[] {
		const current = this.trip()?.status;
		switch (current) {
			case 'Planned'  : return ['InTransit', 'Cancelled'];
			case 'InTransit': return ['Completed', 'Cancelled'];
			     default    : return[];
		}
	}

	 updateStatus(newStatus: TripStatus): void {
		const trip = this.trip();
		if (!trip) return;

		const label = newStatus === 'InTransit' ? 'In Transit' : newStatus;

		this.confirmationService.confirm({
		message: `Are you sure you want to mark this trip as
					<strong>${label}</strong>?`,
		header: 'Confirm Status Update',
		icon: 'pi pi-question-circle',
		rejectButtonProps: { label: 'No', severity: 'secondary', variant: 'text' },
		acceptButtonProps: { label: 'Yes, Update', severity: 'info' },
		accept: () => {
			this.isUpdating.set(true);
			console.log(newStatus);
			this.tripService.updateStatus(trip.id, { newStatus }).subscribe({
			next: (response) => {
				this.trip.set(response.data);
				this.messageService.add({
				severity: 'success',
				summary: 'Updated',
				detail: response.message ?? `Trip marked as ${label}`,
				life: 3000
				});
				this.isUpdating.set(false);
			},
			error: (err) => {
				this.messageService.add({
				severity: 'error',
				summary: 'Error',
				detail: err.error?.message ?? 'Failed to update status',
				life: 5000
				});
				this.isUpdating.set(false);
			}
			});
		}
		});
	}

	getStatusSeverity(status: string): 'info' | 'warn' | 'success' | 'danger' | 'secondary' {
		switch (status) {
			case 'Planned'  : return 'info';
			case 'InTransit': return 'warn';
			case 'Completed': return 'success';
			case 'Cancelled': return 'danger';
			     default    : return 'secondary';
   		}
  	}

	getStatusLabel(status: string): string {
		return status === 'InTransit' ? 'In Transit' : status;
	}

	goBack(): void {
		this.router.navigate(['/trips']);
	}
}
