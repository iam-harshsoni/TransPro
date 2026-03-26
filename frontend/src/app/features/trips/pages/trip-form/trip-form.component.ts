import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { TripService } from '../../services/trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../customers/services/customer.service';
import { DriverService } from '../../../drivers/services/driver.service';
import { TruckService } from '../../../trucks/services/truck.service';
import { RouteService } from '../../../routes/services/route.service';
import { ContainerService } from '../../../containers/services/container.service';
import { AutoCompleteModule } from 'primeng/autocomplete';

interface AutocompleteOption {
	label: string;
	value: number;
}

@Component({
	selector: 'app-trip-form',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ButtonModule,
		ToastModule,
		DatePickerModule,
		// TextareaModule,
		AutoCompleteModule,
	],
	providers: [MessageService],
	templateUrl: './trip-form.component.html',
	styleUrl: './trip-form.component.scss',
})
export class TripFormComponent {

	private tripService = inject(TripService);
	private router = inject(Router);
	private route = inject(ActivatedRoute);
	private fb = inject(FormBuilder);
	private customerService = inject(CustomerService);
	private driverService = inject(DriverService);
	private truckService = inject(TruckService);
	private routeService = inject(RouteService);
	private containerService = inject(ContainerService);
	private messageService = inject(MessageService);

	private readonly MIN_CHARS = 3;
	private readonly DEBOUNCE_MS = 50;

	private customerTimer: any = null;
	private driverTimer: any = null;
	private truckTimer: any = null;
	private routeTimer: any = null;
	private containerTimer: any = null;

	isSaving = signal<boolean>(false);

	customerLoading = signal<boolean>(false);
	driverLoading = signal<boolean>(false);
	truckLoading = signal<boolean>(false);
	routeLoading = signal<boolean>(false);
	containerLoading = signal<boolean>(false);

	/* ── Filtered suggestion lists
			These are what PrimeNG p-autocomplete renders as the dropdown.
			Updated on every keystroke by the search methods below. */
	customerSuggestions: AutocompleteOption[] = [];
	driverSuggestions: AutocompleteOption[] = [];
	truckSuggestions: AutocompleteOption[] = [];
	routeSuggestions: AutocompleteOption[] = [];
	containerSuggestions: AutocompleteOption[] = [];

	selectedCustomer: number | null = null;
	selectedDriver: number | null = null;
	selectedTruck: number | null = null;
	selectedRoute: number | null = null;
	selectedContainers: number[] = [];

	touched = {
		customer: false,
		driver: false,
		truck: false,
		route: false,
		containers: false,
	};

	minDepartureDate: Date = new Date();

	form: FormGroup = this.fb.group({
		departureDate: [null, Validators.required],
		notes: ['']
	});

	searchCustomers(event: { query: string }): void {
		const query = event.query.trim();

		clearTimeout(this.customerTimer);

		if (query.length < this.MIN_CHARS) {
			this.customerSuggestions = [];
			this.customerLoading.set(false);
			return;
		}

		this.customerTimer = setTimeout(() => {
			this.customerLoading.set(true);

			this.customerService.search(query).subscribe({
				next: (response) => {
					this.customerSuggestions = response.data.data.map(c => ({
						label: `${c.fullName}`,
						value: c.id
					}));
					this.customerLoading.set(false);
				},
				error: (err) => {
					this.customerSuggestions = [];
					this.customerLoading.set(false);
				}
			})
		}, this.DEBOUNCE_MS);
	}

	searchDrivers(event: { query: string }): void {
		const query = event.query.trim();

		clearTimeout(this.driverTimer);

		if (query.length < this.MIN_CHARS) {
			this.driverSuggestions = [];
			this.driverLoading.set(false);
			return;
		}

		this.driverTimer = setTimeout(() => {
			this.driverLoading.set(true);

			this.driverService.search(query).subscribe({
				next: (response) => {
					this.driverSuggestions = response.data.data
						.filter(d => d.isAvailable)
						.map(d => ({
							label: `${d.fullName} - (${d.licenseNumber})`,
							value: d.id
						}));
					this.driverLoading.set(false);
				},
				error: (err) => {
					this.driverSuggestions = [];
					this.driverLoading.set(false);
				}
			})
		}, this.DEBOUNCE_MS);
	}

	searchTrucks(event: { query: string }): void {
		const query = event.query.trim();

		clearTimeout(this.truckTimer);

		if (query.length < this.MIN_CHARS) {
			this.truckSuggestions = [];
			this.truckLoading.set(false);
			return;
		}

		this.truckTimer = setTimeout(() => {
			this.truckLoading.set(true);

			this.truckService.search(query).subscribe({
				next: (response) => {
					this.truckSuggestions = response.data.data
						.filter(t => t.isAvailable)
						.map(t => ({
							label: `${t.plateNumber} - (${t.model}) (${t.capacity})T`,
							value: t.id
						}));
					this.truckLoading.set(false);
				},
				error: (err) => {
					this.truckSuggestions = [];
					this.truckLoading.set(false);
				}
			})
		}, this.DEBOUNCE_MS);
	}

	searchContainers(event: { query: string }): void {
		const query = event.query.trim();

		clearTimeout(this.containerTimer);

		if (query.length < this.MIN_CHARS) {
			this.containerSuggestions = [];
			this.containerLoading.set(false);
			return;
		}

		this.containerTimer = setTimeout(() => {
			this.containerLoading.set(true);

			this.containerService.search(query).subscribe({
				next: (response) => {

					// Exclude already selected containers from the suggestions
					const selectedIds = new Set(this.selectedContainers);

					this.containerSuggestions = response.data.data
						.filter(c => c.isAvailable && !selectedIds.has(c.id))
						.map(c => ({
							label: `${c.containerNumber} — ${c.type} (${c.weightCapacity}T)`,
							value: c.id
						}));
					this.containerLoading.set(false);
				},
				error: (err) => {
					this.containerSuggestions = [];
					this.containerLoading.set(false);
				}
			})
		}, this.DEBOUNCE_MS);
	}

	searchRoutes(event: { query: string }): void {
		const query = event.query.trim();

		clearTimeout(this.routeTimer);

		if (query.length < this.MIN_CHARS) {
			this.routeSuggestions = [];
			this.routeLoading.set(false);
			return;
		}

		this.routeTimer = setTimeout(() => {
			this.routeLoading.set(true);

			this.routeService.search(query).subscribe({
				next: (response) => {
					this.routeSuggestions = response.data.data.map(r => ({
						label: `${r.origin} → ${r.destination} (${r.distanceKm}km)`,
						value: r.id
					}));
					this.routeLoading.set(false);
				},
				error: (err) => {
					this.routeSuggestions = [];
					this.routeLoading.set(false);
				}
			})
		}, this.DEBOUNCE_MS);
	}

	//Validation
	isFieldInvalid(field: keyof typeof this.touched): boolean {
		switch (field) {
			case 'customer': return this.touched.customer && !this.selectedCustomer;
			case 'driver': return this.touched.driver && !this.selectedDriver;
			case 'truck': return this.touched.truck && !this.selectedTruck;
			case 'route': return this.touched.route && !this.selectedRoute;
			case 'containers': return this.touched.containers && this.selectedContainers.length === 0;
			default: return false;
		}
	}

	private markAllTouched(): void {
		Object.keys(this.touched).forEach(key => {
			this.touched[key as keyof typeof this.touched] = true;
		});
		this.form.markAllAsTouched();
	}

	private isFormValid(): boolean {
		return !!this.selectedCustomer
			&& !!this.selectedDriver
			&& !!this.selectedTruck
			&& !!this.selectedRoute
			&& this.selectedContainers.length > 0
			&& !!this.form.get('departureDate')?.value
			&& this.form.valid;
	}

	onSubmit(): void {
		console.log('selectedContainers raw:', this.selectedContainers);
		this.markAllTouched();

		if (!this.isFormValid()) return;

		this.isSaving.set(true);

		const dto = {
			customerId: this.selectedCustomer!,
			driverId: this.selectedDriver!,
			truckId: this.selectedTruck!,
			routeId: this.selectedRoute!,
			containerIds: this.selectedContainers,
			departureDate: (this.form.value.departureDate as Date).toISOString(),
			notes: this.form.value.notes ?? '',
		};

		console.log(dto);

		this.tripService.create(dto).subscribe({
			next: (response) => {
				this.messageService.add({
					severity: 'success',
					summary: 'Created',
					detail: response.message ?? 'Trip created successfully'
				});
				this.isSaving.set(false);
				setTimeout(() => this.router.navigate(['/trips', response.data.id]), 1500);
			},
			error: (err) => {
				this.messageService.add({
					severity: 'error',
					summary: 'Error',
					detail: err.error?.message ?? 'Failed to create trip',
					life: 6000
				});
				this.isSaving.set(false);
			}
		});
	}

	onCancel(): void {
		this.router.navigate(['/trips']);
	}
}
