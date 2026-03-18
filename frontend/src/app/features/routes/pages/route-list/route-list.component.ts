import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RouteService } from '../../services/route.service';
import { Router } from '@angular/router';
import { AppRoute } from '../../models/route.model';

@Component({
	selector: 'app-route-list',
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
	providers: [MessageService],
	templateUrl: './route-list.component.html',
	styleUrl: './route-list.component.scss',
})
export class RouteListComponent {

	private routeService = inject(RouteService);
	private messageService = inject(MessageService);
	private router = inject(Router);
	private searchTimeout: any;

	isLoading = signal<boolean>(false);
	appRoutes = signal<AppRoute[]>([]);

	totalRecords: number = 0;
	pageSize: number = 10;
	currentPage: number = 1;
	searchValue: string = '';

	loadRoutes(page: number, size: number, search: string): void {
		this.isLoading.set(true);

		this.routeService.getPaginated(page, size, search).subscribe({
			next: (response) => {
				this.appRoutes.set(response.data.data);
				this.totalRecords = response.data.totalCount;
				this.isLoading.set(false);
			},
			error: () => {
				this.messageService.add({
					severity: 'error',
					summary: 'Error',
					detail: 'Failed to laod containers'
				});
				this.isLoading.set(false);
			}
		})
	}

	onLazyLoad(event: TableLazyLoadEvent): void {
		const page = Math.floor((event.first ?? 0) / (event.rows ?? 10)) + 1;
		const size = event.rows ?? 10;

		this.pageSize = size;
		this.currentPage = page;
		this.loadRoutes(page, size, this.searchValue);
	}

	onSearch(even: Event): void {
		const value = (even.target as HTMLInputElement).value;
		this.searchValue = value;

		clearTimeout(this.searchTimeout);
		this.searchTimeout = setTimeout(() => {
			this.loadRoutes(1, this.pageSize, value);
		}, 400);
	}

	formatDistance(km: number): string {
		return `${km} km`;
	}

	formatHours(hours: number): string {
		const h = Math.floor(hours);
		const m = Math.round((hours - h) * 60);
		return `${h}h ${m.toString().padStart(2, '0')}m`;
	}

	getDistanceSeverity(km: number): 'success' | 'info' | 'warn' | 'danger' {
		if (km <= 100) return 'success';
		if (km <= 300) return 'info';
		if (km <= 600) return 'warn';
		return 'danger';
	}

	navigateToCreate(): void {
		this.router.navigate(['/routes/create']);
	}

	navigateToEdit(route: AppRoute): void {
		this.router.navigate(['/routes/edit', route.id]);
	}
}
