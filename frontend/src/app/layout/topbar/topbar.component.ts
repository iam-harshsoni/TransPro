import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { LayoutService } from '../../../core/services/layout';

// OverlayPanelModule REMOVED — not needed, not available in PrimeNG 21
// Our dropdown is built with plain HTML + Angular @if + CSS

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ButtonModule,
  ],
  providers: [ConfirmationService],
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {

  layout = inject(LayoutService);
  auth   = inject(AuthService);
  router = inject(Router);
  private confirmationService = inject(ConfirmationService);

  menuOpen = signal<boolean>(false);

  getInitials(): string {
    const name = this.auth.currentUser()?.fullName ?? 'A';
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  navigateToSettings(): void {
    this.closeMenu();
  }

  confirmLogout(): void {
    this.closeMenu();

    this.confirmationService.confirm({
      message: 'Are you sure you want to log out of TransPro?',
      header:  'Confirm Logout',
      icon:    'pi pi-sign-out',
      rejectButtonProps: {
        label:    'Cancel',
        severity: 'secondary',
        variant:  'text'
      },
      acceptButtonProps: {
        label:    'Yes, Logout',
        severity: 'danger'
      },
      accept: () => {
        this.auth.logout();
      }
    });
  }
}