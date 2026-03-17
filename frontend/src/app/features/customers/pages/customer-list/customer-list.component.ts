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

import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
	selector: 'app-customer-list',
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
	templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {

	private customerService = inject(CustomerService);
	private router = inject(Router);
	private confirmationService = inject(ConfirmationService);
	private messageService = inject(MessageService);

	// Array (not signal) to match PrimeNG table's expected binding style
	customers = signal<Customer[]>([]);
	isLoading: boolean = false;

	// Pagination state — tracks current page info
	totalRecords: number = 0;   // total customers in database
	pageSize: number = 10;  // rows per page
	currentPage: number = 1;   // current page number
	searchValue: string = '';  // current search term

	private searchTimeout: any;

	ngOnInit(): void { }

	loadCustomers(page: number, size: number, search: string): void {
		this.isLoading = true;
		this.customerService.getPaginated(page, size, search).subscribe({
			next: (response) => {
				// response.data = the array of customers for this page
				// response.totalCount = total records in DB (used by paginator)
				//this.customers = response.data.data;
				this.customers.set(response.data.data);
				this.totalRecords = response.data.totalCount;
				this.isLoading = false;
			},
			error: () => {
				this.messageService.add({
					severity: 'error',
					summary: 'Error',
					detail: 'Failed to load customers'
				});
				this.isLoading = false;
			}
		});
	}

	// onLazyLoad fires every time the user changes page or rows per page.
	// PrimeNG passes a TableLazyLoadEvent with first (row index) and rows (page size).
	// We convert 'first' (row index) to a page number the API understands.
	onLazyLoad(event: TableLazyLoadEvent): void {
		const page = Math.floor((event.first ?? 0) / (event.rows ?? 10)) + 1;
		const size = event.rows ?? 10;
		this.pageSize = size;
		this.currentPage = page;
		this.loadCustomers(page, size, this.searchValue);
	}

	// onSearch fires on every keypress.
	// We debounce it — wait 400ms after user stops typing before calling API.
	// This prevents hammering the API with one request per character typed.
	onSearch(event: Event): void {
		const value = (event.target as HTMLInputElement).value;
		this.searchValue = value;

		clearTimeout(this.searchTimeout);
		this.searchTimeout = setTimeout(() => {
			// Reset to page 1 when searching
			this.loadCustomers(1, this.pageSize, value);
		}, 400);
	}

	navigateToCreate(): void {
		this.router.navigate(['/customers/create']);
	}

	navigateToEdit(customer: Customer): void {
		this.router.navigate(['/customers/edit', customer.id]);
	}

	confirmDelete(customer: Customer): void {
		this.confirmationService.confirm({
			message: `Are you sure you want to delete <strong>${customer.fullName}</strong>?`,
			header: 'Confirm Delete',
			icon: 'pi pi-exclamation-triangle',
			rejectButtonProps: {
				label: 'Cancel',
				severity: 'secondary',
				variant: 'text'
			},
			acceptButtonProps: {
				label: 'Delete',
				severity: 'danger'
			},
			accept: () => {
				this.customerService.delete(customer.id).subscribe({
					next: () => {
						// Remove from local array immediately — no need to re-fetch
						//this.customers = this.customers.filter(c => c.id !== customer.id);
						this.customers.update(list => list.filter(c => c.id !== customer.id));
						this.messageService.add({
							severity: 'success',
							summary: 'Deleted',
							detail: 'Customer deleted successfully',
							life: 3000
						});
					},
					error: () => {
						this.messageService.add({
							severity: 'error',
							summary: 'Error',
							detail: 'Failed to delete customer',
							life: 3000
						});
					}
				});
			}
		});
	}

	// getSeverity maps isActive boolean to PrimeNG tag color
	getSeverity(isActive: boolean): 'success' | 'danger' {
		return isActive ? 'success' : 'danger';
	}
}