import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AuthResponse, LoginRequest, StoredAuth } from '../../features/auth/models/auth.model';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../shared/models/apiResponse.model';

const TOKEN_KEY = 'transpro_auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

	private http = inject(HttpClient);
	private router = inject(Router);
	private apiUrl = `${environment.apiUrl}/auth`;

	/* Signal that tracks whether user is currently logged in.
		Any component can read this — no need to check localStorage every time.
		Initialized by reading from localStorage on app startup.
	 */
	isAuthenticated = signal<boolean>(this.hasValidToken());
	
	// Signal for current user info — available everywhere without prop drilling
	currentUser = signal<{ fullName: string, role: string } | null>(this.getStoredUsed());
	
	//Login
	
	login(request: LoginRequest, 
		onSuccess: () => void,
 		onError: (message: string) => void,
	): void {

		this.http
			.post<ApiResponse<AuthResponse>>(`${this.apiUrl}/login`, request)
			.subscribe({
				next: (response) => {
					if (response.success) {
						this.storeTokens(response.data);
						this.isAuthenticated.set(true);
						this.currentUser.set({
							fullName: response.data.fullName,
							role: response.data.role
						});
						onSuccess();
					} else {
						onError(response.message ?? 'Login Failed');
					}
				},
				error: (err) => {
					const msg = err.error?.message ?? 'Invalid email or password';
					onError(msg);
				}
			});
	}

	// Referesh Token
	//Used by interceptor — takes callbacks instead of returning Observable
	refresh(
		onSuccess: (newToken: string) => void,
		onFailure: () => void
	): void {
		const stored = this.getStoredAuth();

		if (!stored?.refreshToken) {
			onFailure();
			return;
		}

		this.http
			.post<ApiResponse<AuthResponse>>(`${this.apiUrl}/refresh`, {
				refreshToken: stored.refreshToken
			})
			.subscribe({
				next: (response) => {
					if (response.success) {
						this.storeTokens(response.data);
						this.isAuthenticated.set(true);
						this.currentUser.set({
							fullName: response.data.fullName,
							role: response.data.role
						});
						onSuccess(response.data.accessToken);					
					} else {
						onFailure();
					}
				},
				error: () => {
					onFailure();
				}
			});
	}

	// Logout
	logout(): void {
		const stored = this.getStoredAuth();

		// Fire and forget — revoke refresh token on server
		if (stored?.refreshToken) {
			this.http
				.post(`${this.apiUrl}/logout`, { refreshToken: stored.refreshToken }).subscribe();
		}

		this.clearToken();
		this.isAuthenticated.set(false);
		this.currentUser.set(null);
		this.router.navigate(['/login']);
	}

	// Token Accessors
	getAccessToken(): string | null {
		return this.getStoredAuth()?.accessToken ?? null;
	}

	hasValidToken(): boolean {
		const stored = this.getStoredAuth();
		if (!stored) return false;
		return Date.now() < stored.expiresAt;
	}

	// Private Storage Helpers
	private storeTokens(data: AuthResponse): void {
		const stored: StoredAuth = {
			accessToken : data.accessToken,
			refreshToken: data.refreshToken,
			fullName    : data.fullName,
			role        : data.role,
			expiresAt   : Date.now() + (data.expiresIn * 1000)
		};
		localStorage.setItem(TOKEN_KEY, JSON.stringify(stored));
	}

	private getStoredAuth(): StoredAuth | null {
		const raw = localStorage.getItem(TOKEN_KEY);
		if (!raw) return null;

		try {
			return JSON.parse(raw) as StoredAuth;
		} catch {
			return null;
		}
	}

	private getStoredUsed(): { fullName: string; role: string } | null {
		const stored = this.getStoredAuth();
		if (!stored) return null;
		return { fullName: stored.fullName, role: stored.role }
	}

	private clearToken(): void {
		localStorage.removeItem(TOKEN_KEY);
	}
}
