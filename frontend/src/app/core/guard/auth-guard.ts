import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// Synchronous guard — no async needed
// hasValidToken() reads from localStorage — instant, no API call
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router      = inject(Router);

  if (authService.hasValidToken()) {
    return true;
  }

  // Save where user was trying to go
  // After login they will be redirected back here
  router.navigate(['/login'], {
    queryParams: { returnUrl: state.url }
  });

  return false;
};