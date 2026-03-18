import { CommonModule } from '@angular/common';
import { Component, inject, numberAttribute, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ContainerService } from '../../services/container.service';
import { ActivatedRoute, isActive, Router } from '@angular/router';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
	selector: 'app-container-form',
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
	templateUrl: './container-form.component.html',
	styleUrl: './container-form.component.scss',
})
export class ContainerFormComponent implements OnInit {

	private fb = inject(FormBuilder);
	private containerService = inject(ContainerService);
	private router = inject(Router);
	private route = inject(ActivatedRoute);
	private messageService = inject(MessageService);

	//Signals
	isEditMode = signal<boolean>(false);
	isLoading = signal<boolean>(false);
	isSaving = signal<boolean>(false);
	containerId = signal<number | null>(null);

	containerTypes = [
		{ label: 'Dry', value: 'Dry' },
		{ label: 'Refer', value: 'Refer' },
		{ label: 'Flat', value: 'Flat' },
	];

	form: FormGroup = this.fb.group({
		containerNumber: ['', [Validators.required, Validators.maxLength(100)]],
		type           : ['', [Validators.required, Validators.maxLength(100)]],
		weightCapacity : [null, [Validators.required, Validators.min(0.1)]],
		isAvailable    : [true],
	});

	ngOnInit() : void {
		const idParam = this.route.snapshot.paramMap.get('id');
		if (idParam) {
			this.isEditMode.set(true);
			this.containerId.set(Number(idParam));
			this.loadContainer(Number(idParam));
		}
	}

	private loadContainer(id: number): void {
		this.isLoading.set(true);

		this.containerService.getById(id).subscribe({
			next: (container) => {
				this.form.patchValue({
					containerNumber: container.data.containerNumber,
					type : container.data.type,
					weightCapacity : container.data.weightCapacity,
					isAvailable : container.data.isAvailable
				});
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
		})
	}

	onSubmit() : void {
		this.form.markAllAsTouched();
		if (this.form.invalid) return;

		this.isSaving.set(true);

		// Single request$ pattern — avoids duplicating subscribe logic
		// If edit mode → call update, else → call create
		// Both return Observable<Container> so subscribe works the same way
		const request$ = this.isEditMode() 
			? this.containerService.update(this.containerId()!, this.form.value)
			: this.containerService.create(this.form.value);

		request$.subscribe({
			next: () => {
				this.messageService.add({
					severity: 'success',
					summary : this.isEditMode() ? 'Updated': 'Created',
					detail  : `Container ${this.isEditMode() ? 'updated' : 'created'} successfully`
				});
				this.isSaving.set(false);
				setTimeout(() => this.router.navigate(['/containers']), 1500);
			},
			error: () => {
				this.messageService.add({
					severity: 'error',
					summary: 'Error',
					detail: 'Failed to update customer'
				});
				this.isSaving.set(false);
			}
		})
	}

	onCancel(): void {
		this.router.navigate(['/containers']);
	}

	isInvalid(field: string): boolean {
		const control = this.form.get(field);
		return !!(control?.invalid && control?.touched);
	}

}
