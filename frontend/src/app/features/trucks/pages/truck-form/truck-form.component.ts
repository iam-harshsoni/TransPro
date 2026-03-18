import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TruckService } from '../../services/truck.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
    selector: 'app-truck-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        ToastModule,
        ToggleSwitchModule,
        InputNumberModule
    ],
    providers: [MessageService],
    templateUrl: './truck-form.component.html',
    styleUrl: './truck-form.component.scss',
})
export class TruckFormComponent implements OnInit {

    private fb = inject(FormBuilder);
    private truckService = inject(TruckService);
    private router = inject(Router);

    private route = inject(ActivatedRoute);
    private messageService = inject(MessageService);

    isEditMode = signal<boolean>(false);
    isSaving = signal<boolean>(false);
    isLoading = signal<boolean>(false);
    truckId = signal<number | null>(null);

    form: FormGroup = this.fb.group({
        plateNumber: ['', [Validators.required, Validators.maxLength(20)]],
        model: ['', [Validators.required, Validators.maxLength(100)]],
        capacity: [null, [Validators.required, Validators.min(1)]],
        isAvailable: [true],
    });

    ngOnInit(): void {
        const idParam = this.route.snapshot.paramMap.get('id');

        if (idParam) {
            this.isEditMode.set(true);
            this.truckId.set(Number(idParam));
            this.loadTrucks(Number(idParam));
        }
    }

    loadTrucks(id: number): void {
        this.isLoading.set(true);

        this.truckService.getById(id).subscribe({
            next: (request) => {
                this.form.patchValue({
                    plateNumber: request.data.plateNumber,
                    model: request.data.model,
                    capacity: request.data.capacity,
                    isAvailable: request.data.isAvailable
                });
                this.isLoading.set(false);
            },
            error: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to load trucks'
                });
                this.isLoading.set(false);
            }
        });
    }

    onSubmit(): void {
        this.form.markAsTouched();
        if (this.form.invalid) return;

        const request$ = this.isEditMode()
            ? this.truckService.update(this.truckId()!, this.form.value)
            : this.truckService.create(this.form.value);

        request$.subscribe({
            next: () => {
                this.messageService.add({
                    severity: 'success',
                    summary: this.isEditMode() ? 'Updated' : 'Created',
                    detail: `Truck ${this.isEditMode() ? 'Updated' : 'Created'}`
                });
                this.isSaving.set(false);
                setTimeout(() => this.router.navigate(['/trucks']), (1500));
            },
            error: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: `Failed to ${this.isEditMode() ? 'update' : 'create'} truck`
                });
                this.isSaving.set(false);
            }
        });
    }

    onCancel(): void {
        this.router.navigate(['/trucks']);
    }

    isInvalid(field: string): boolean {
        const control = this.form.get(field);
        return !!(control?.invalid && control?.touched);
    }
}
