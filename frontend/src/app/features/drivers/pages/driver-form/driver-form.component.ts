import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DriverService } from '../../services/driver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../../models/driver.model';

@Component({
	selector: 'app-driver-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		InputTextModule,
		ButtonModule,
		ToastModule,
		ToggleSwitchModule
	],
	providers: [MessageService],
	templateUrl: './driver-form.component.html',
	styleUrl: './driver-form.component.scss',
})
export class DriverFormComponent implements OnInit {

	private fb = inject(FormBuilder);
	private driverService = inject(DriverService);
	private router = inject(Router);

	private route = inject(ActivatedRoute);
	private messageService = inject(MessageService);

	private originalAvailability: boolean = true;

	// signals
	isEditMode = signal<boolean>(false);
	isLoading = signal<boolean>(false);
	isSaving = signal<boolean>(false);
	driverId = signal<number | null>(null);

	form: FormGroup = this.fb.group({
		fullName: ['', [Validators.required, Validators.maxLength(100)]],
		licenseNumber: ['', [Validators.required, Validators.maxLength(100)]],
		phone: ['', [Validators.required, Validators.maxLength(20)]],
		isAvailable: [true],
	});

	ngOnInit(): void {
		const idParam = this.route.snapshot.paramMap.get('id');

		if (idParam) {
			this.isEditMode.set(true);
			this.driverId.set(Number(idParam));
			this.loadDriver(Number(idParam));
		}
	}

	private loadDriver(id: number): void {
		this.isLoading.set(true);

		this.driverService.getById(id).subscribe({
			next: (driver) => {
				this.form.patchValue({
					fullName: driver.data.fullName,
					licenseNumber: driver.data.licenseNumber,
					phone: driver.data.phone,
					isAvailable: driver.data.isAvailable
				});
				this.originalAvailability = driver.data.isAvailable;
				this.isLoading.set(false);
			},
			error: () => {
				this.messageService.add({
					severity: 'error',
					summary: 'Error',
					detail: 'Failed to load driver'
				});
				this.isLoading.set(false);
			}
		});
	}

	onSubmit(): void {
		this.form.markAllAsTouched();

		if (this.form.invalid) return;

		this.isSaving.set(true);

		const formValue = this.form.value;
		const dto = {
			fullName: formValue.fullName,
			licenseNumber: formValue.licenseNumber,
			phone: formValue.phone
		}

		const currentAvailability: boolean = formValue.isAvailable;

		const availabilityChanged = this.isEditMode() && currentAvailability !== this.originalAvailability;

		if (this.isEditMode()) {
			this.driverService.update(this.driverId()!, formValue).subscribe({
				next: () => {

					if (availabilityChanged) {
						this.driverService.toggleAvailability(this.driverId()!).subscribe({
							next: (response) => {
								this.messageService.add({
									severity: 'success',
									summary: 'Updated',
									detail: 'Driver updated successfully'
								});
								this.isSaving.set(false);
								setTimeout(() => this.router.navigate(['/drivers']), 1500);
							},
							error: (err) => {
								const errorMsg = err.error?.message
									?? 'Driver updated but availability could not be changed';

								this.messageService.add({
									severity: 'warn',
									summary: 'Partially Saved',
									detail: errorMsg,
									life: 6000
								});
								this.isSaving.set(false);

								setTimeout(() => this.router.navigate(['/drivers']), 2000)
							}
						});
					}
					else {
						this.messageService.add({
							severity: 'success',
							summary: 'Updated',
							detail: 'Driver updated successfully'
						});
						this.isSaving.set(false);
						setTimeout(() => this.router.navigate(['/drivers']), 1500)
					}
				},
				error: () => {
					this.messageService.add({
						severity: 'error',
						summary: 'Error',
						detail: 'Failed to update customer'
					});
					this.isSaving.set(false);
				}
			});
		} else {
			this.driverService.create(this.form.value).subscribe({
				next: () => {
					this.messageService.add({
						severity: 'success',
						summary: 'Created',
						detail: 'Driver updated successfully'
					});
					this.isSaving.set(false);
					setTimeout(() => this.router.navigate(['/driver']), 1500)
				},
				error: () => {
					this.messageService.add({
						severity: 'error',
						summary: 'Error',
						detail: 'Failed to update driver'
					});
					this.isSaving.set(false);
				}
			});
		}
	}

	onCancel(): void {
		this.router.navigate(['/drivers']);
	}

	isInvalid(field: string): boolean {
		const control = this.form.get(field);
		return !!(control?.invalid && control?.touched);
	}
}
