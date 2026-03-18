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
import { TruckService } from '../../services/truck.service';
import { Router } from '@angular/router';
import { Truck } from '../../models/truck.model';

@Component({
	selector: 'app-truck-list',
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
	],
	providers: [ConfirmationService, MessageService],
	templateUrl: './truck-list.component.html',
	styleUrl: './truck-list.component.scss',
})
export class TruckListComponent {

	private truckService = inject(TruckService);
	private messageService = inject(MessageService);
	private router = inject(Router);

	private searchTimeout: any;

	trucks = signal<Truck[]>([]);
	// isLoading = signal<boolean>(true);

	totalRecords: number = 0;
	pageSize: number = 10;
	currentPage: number = 1;
	searchValue: string = '';

	loadTrucks(
		page: number,
		size: number,
		search: string
	): void {
		// this.isLoading.set(true);

		this.truckService.getPaginated(page, size, search).subscribe({
			next: (response) => {
				this.trucks.set(response.data.data);
				this.totalRecords = response.data.totalCount;
				// this.isLoading.set(false);
			},
			error: () => {
				this.messageService.add({
					severity: 'error',
					summary: 'Error',
					detail: 'Failed to laod containers'
				});
				// this.isLoading.set(false);
			}
		})
	}

	onLazyLoad(event: TableLazyLoadEvent): void {
		const page = Math.floor((event.first ?? 0) / (event.rows ?? 10)) + 1;
		const size = event.rows ?? 10;

		this.pageSize = size;
		this.currentPage = page;
		this.loadTrucks(page, size, this.searchValue);
	}

	onSearch(even: Event): void {
		const value = (even.target as HTMLInputElement).value;
		this.searchValue = value;

		clearTimeout(this.searchTimeout);
		this.searchTimeout = setTimeout(() => {
			this.loadTrucks(1, this.pageSize, value);
		}, 400);
	}

	navigateToCreate(): void {
		this.router.navigate(['/trucks/create']);
	}

	navigateToEdit(truck: Truck): void {
		this.router.navigate(['/trucks/edit', truck.id]);
	}

	getCapacityLabel(capacity: number): string {
		return `${capacity} T`;
	}

	getCapacitySeverity(capacity: number): 'info' | 'warn' | 'danger' {
		if (capacity >= 20) return 'danger';
		if (capacity <= 20) return 'warn';
		return 'info';
	}

	getSeverity(isAvailable: boolean): 'success' | 'danger' {
		return isAvailable ? 'success' : 'danger';
	}

}
