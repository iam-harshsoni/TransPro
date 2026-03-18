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
import { ContainerService } from '../../services/container.service';
import { Router } from '@angular/router';
import { Container } from '../../models/container.model';

@Component({
	selector: 'app-container-list',
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
	templateUrl: './container-list.component.html',
	styleUrl: './container-list.component.scss',
	providers: [MessageService, ConfirmationService]
})
export class ContainerListComponent {

	private containerService = inject(ContainerService);
	private router = inject(Router);
	private messageService = inject(MessageService);

	containers = signal<Container[]>([]);
	isLoading = false;

	totalRecords: number = 0;
	pageSize: number = 10;
	currentPage: number = 1;
	searchValue: string = '';

	private searchTimeout: any;

	loadContainers(page: number, size: number, search: string): void {
		this.isLoading = true;

		this.containerService.getPaginated(page, size, search).subscribe({
			next: (response) => {
				this.containers.set(response.data.data);
				this.totalRecords = response.data.totalCount;
				this.isLoading = false;
			},
			error: () => {
				this.messageService.add({
					severity: 'error',
					summary: 'Error',
					detail: 'Failed to laod containers'
				});
				this.isLoading = false;
			}
		})
	}

	onLazyLoad(event: TableLazyLoadEvent): void {
		const page = Math.floor((event.first ?? 0) / (event.rows ?? 10)) + 1;
		const size = event.rows ?? 10;

		this.pageSize = size;
		this.currentPage = page;
		this.loadContainers(page, size, this.searchValue);
	}

	onSearch(even: Event): void {
		const value = (even.target as HTMLInputElement).value;
		this.searchValue = value;

		clearTimeout(this.searchTimeout);
		this.searchTimeout = setTimeout(() => {
			this.loadContainers(1, this.pageSize, value);
		}, 400);
	}

	navigateToCreate(): void {
		this.router.navigate(['/containers/create']);
	}

	navigateToEdit(container: Container): void {
		console.log('Container object:', container);
		this.router.navigate(['/containers/edit', container.id]);
	}

	// getSeverity maps isAvailable boolean to PrimeNG tag color
	getSeverity(isAvailable: boolean): 'success' | 'danger' {
		return isAvailable ? 'success' : 'danger';
	}
}
