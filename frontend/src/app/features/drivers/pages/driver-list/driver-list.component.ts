import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule, Table, TableLazyLoadEvent } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Driver } from '../../models/driver.model';
import { DriverService } from '../../services/driver.service';

@Component({
	selector: 'app-driver-list',
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
	templateUrl: './driver-list.component.html',
})
export class DriverListComponent {

	private driverService = inject(DriverService);
	private router = inject(Router);
	private confirmationService = inject(ConfirmationService);
	private messageService = inject(MessageService);

	drivers = signal<Driver[]>([]);
	isLoading = true;

	totalRecords: number = 0;
	pageSize: number = 10;
	currentPage: number = 1;
	searchValue: string = '';

	private searchTimeout: any;

	loadDriver(page: number, size: number, search: string): void {
		this.isLoading = true;

		this.driverService.getPaginated(page, size, search).subscribe({
			next: (response) => {
				this.drivers.set(response.data.data);
				this.totalRecords = response.data.totalCount;
				this.isLoading = false;
			},
			error: () => {
				this.messageService.add({
					severity: 'error',
					summary: 'Error',
					detail: 'Failed to load drivers'
				});
				this.isLoading = false;
			}
		});
	}

	onLazyLoad(event: TableLazyLoadEvent): void {
		const page = Math.floor((event.first ?? 0) / (event.rows ?? 10)) + 1;
		const size = event.rows ?? 10;

		this.pageSize = size;
		this.currentPage = page;
		this.loadDriver(page, size, this.searchValue);
	}

	onSearch(event: Event): void {
		const value = (event.target as HTMLInputElement).value;
		this.searchValue = value;

		clearTimeout(this.searchTimeout);
		this.searchTimeout = setTimeout(() => {
			// Reset to page 1 when searching
			this.loadDriver(1, this.pageSize, value);
		}, 400);
	}

	navigateToCreate(): void {
		this.router.navigate(['/drivers/create']);
	}

	navigateToEdit(driver: Driver): void {
		this.router.navigate(['/drivers/edit', driver.id]);
	}

	// getSeverity maps isActive boolean to PrimeNG tag color
	getSeverity(isAvailable: boolean): 'success' | 'danger' {
		return isAvailable ? 'success' : 'danger';
	}
}
