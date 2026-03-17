import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, isActive, Router } from '@angular/router';

@Component({
	selector: 'app-customer-form',
	imports: [
		CommonModule,
		ReactiveFormsModule,
		InputTextModule,
		ButtonModule,
		ToastModule,
		ToggleSwitchModule
	],
	providers: [MessageService],
	templateUrl: './customer-form.component.html',
	styleUrl: './customer-form.component.scss',
})
export class CustomerFormComponent {

	private fb = inject(FormBuilder);
	private customerService = inject(CustomerService);
	private router = inject(Router);

	private route = inject(ActivatedRoute);
	private messageService = inject(MessageService);

	// Signals for component state
	isEditMode = signal<boolean>(false);
	isLoading = signal<boolean>(false);
	isSaving = signal<boolean>(false);
	customerId = signal<number | null>(null);

	form: FormGroup = this.fb.group({
		fullName: ['', [Validators.required, Validators.maxLength(100)]],
		email: ['', [Validators.required, Validators.email]],
		phone: ['', [Validators.required, Validators.maxLength(20)]],
		address: ['', [Validators.required, Validators.maxLength(250)]],
		isActive: [true],
	});

	ngOnInit(): void {
		const idParam = this.route.snapshot.paramMap.get('id');

		if (idParam) {
			this.isEditMode.set(true);
			this.customerId.set(Number(idParam));
			this.loadCustomer(Number(idParam));
		}
	}

	private loadCustomer(id: number): void {
		this.isLoading.set(false);

		this.customerService.getById(id).subscribe({
			next: (customer) => {
				this.form.patchValue({
					fullName: customer.data.fullName,
					email   : customer.data.email,
					phone   : customer.data.phone,
					address : customer.data.address,
					isActive: customer.data.isActive,
				});
				this.isLoading.set(false);
			},
			error: () => {
				this.messageService.add({
					severity: 'error',
					summary : 'Error',
					detail  : 'Failed to load customer'
				});
				this.isLoading.set(false);
			}
		});
	}

	onSubmit(): void {
		this.form.markAllAsTouched();

		if (this.form.invalid) return;

		this.isSaving.set(true);

		if (this.isEditMode()) {
			this.customerService.update(this.customerId()!, this.form.value).subscribe({
				next: () => {
					this.messageService.add({
						severity: 'success',
						summary: 'Updated',
						detail: 'Customer updated successfully'
					});
					this.isSaving.set(false);
					setTimeout(() => this.router.navigate(['/customers']), 1500)
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
			this.customerService.create(this.form.value).subscribe({
				next: () => {
					this.messageService.add({
						severity: 'success',
						summary: 'Updated',
						detail: 'Customer created successfully'
					});
					this.isSaving.set(false);
					setTimeout(() => this.router.navigate(['/customers']), 1500)
				},
				error: () => {
					this.messageService.add({
						severity: 'error',
						summary: 'Error',
						detail: 'Failed to create customer'
					});
					this.isSaving.set(false);
				}
			});
		}
	}

	onCancel(): void {
		this.router.navigate(['/customers']);
	}

	isInvalid(field: string): boolean {
		const control = this.form.get(field);
		return !!(control?.invalid && control?.touched);
	}
}
