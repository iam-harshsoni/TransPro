import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { RouteService } from '../../services/route.service';
import { ActivatedRoute, Router } from '@angular/router';
import { group } from '@primeng/themes/aura/avatar';

@Component({
	selector: 'app-route-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		InputTextModule,
		ButtonModule,
		ToastModule,
		ToggleSwitchModule,
		SelectModule,
		InputNumberModule
	],
	providers: [MessageService],
	templateUrl: './route-form.component.html',
	styleUrl: './route-form.component.scss',
})
export class RouteFormComponent implements OnInit {

	private fb = inject(FormBuilder);
	private routesService = inject(RouteService);
	private messageService = inject(MessageService);
	private activatedRoute = inject(ActivatedRoute);  //ActivatedRoute gives us the :id from the URL
	private router = inject(Router);

	//Signals
	isLoading = signal<boolean>(false);
	isSaving = signal<boolean>(false);
	isEditMode = signal<boolean>(false);
	routeId = signal<number | null>(null);

	form: FormGroup = this.fb.group({
		origin: ['', [Validators.required, Validators.maxLength(100)]],
		destination: ['', [Validators.required, Validators.maxLength(100)]],
		// distanceKm — decimal number, min 0.1 km
		distanceKm: [null, [Validators.required, Validators.min(0.1)]],
		// estimatedHours — decimal e.g. 2.5 = 2 hours 30 minutes
		estimatedHours: [null, [Validators.required, Validators.min(0.1)]],
	});

	ngOnInit(): void {
		const idParam = this.activatedRoute.snapshot.paramMap.get('id');

		if (idParam) {
			this.isEditMode.set(true);
			this.routeId.set(Number(idParam));
			this.loadRoutes(Number(idParam));
		}
	}

	loadRoutes(id: number): void {
		this.routesService.getById(id).subscribe({
			next: (request) => {
				this.form.patchValue({
					origin: request.data.origin,
					destination: request.data.destination,
					distanceKm: request.data.distanceKm,
					estimatedHours: request.data.estimatedHours,
				});
			},
			error: () => {
				this.messageService.add({
					severity: 'error',
					summary: 'Error',
					detail: 'Failed to load route'
				});
				this.isLoading.set(false);
			}
		})
	}

	onSubmit(): void {
		this.form.markAsTouched();
		if (this.form.invalid) return;

		this.isSaving.set(true);

		const request$ = this.isEditMode()
			? this.routesService.update(this.routeId()!, this.form.value)
			: this.routesService.create(this.form.value);

		request$.subscribe({
			next: () => {
				this.messageService.add({
					severity: 'success',
					summary: this.isEditMode() ? 'Updated' : 'Created',
					detail: `Route ${this.isEditMode() ? 'updated' : 'created'} successfully`
				});
				this.isSaving.set(false);
				setTimeout(() => this.router.navigate(['/routes']), 1500);
			},
			error: () => {
				this.messageService.add({
					severity: 'error',
					summary: 'Error',
					detail: `Failed to ${this.isEditMode() ? 'update' : 'create'} route`
				});
				this.isSaving.set(false);
			}
		});
	}

	onCancel(): void {
		this.router.navigate(['/routes']);
	}

	isInvalid(field: string): boolean {
		const control = this.form.get(field);
		return !!(control?.invalid && control?.touched);
	}
}
