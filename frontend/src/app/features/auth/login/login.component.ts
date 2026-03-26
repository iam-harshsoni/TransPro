import { Component, inject, signal } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { MessageService } from 'primeng/api';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    PasswordModule,
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  private authService    = inject(AuthService);
  private router         = inject(Router);
  private route          = inject(ActivatedRoute);
  private messageService = inject(MessageService);
  private fb             = inject(FormBuilder);

  isLoading = signal<boolean>(false);

  form: FormGroup = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

	onSubmit(): void {
	this.form.markAllAsTouched();
	if (this.form.invalid) return;

	this.isLoading.set(true);

	// returnUrl lives here in the component — not passed to service
	const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/dashboard';

	this.authService.login(
		{ email: this.form.value.email, password: this.form.value.password },
		() => {
		this.isLoading.set(false);
		this.router.navigateByUrl(returnUrl);
		},
		(message: string) => {
		this.isLoading.set(false);
		this.messageService.add({
			severity: 'error',
			summary:  'Login Failed',
			detail:   message,
			life:     4000
		});
		}
	);
	}

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control?.invalid && control?.touched);
  }
}