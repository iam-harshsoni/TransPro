import {
    HttpInterceptorFn,
    HttpRequest,
    HttpHandlerFn,
    HttpErrorResponse,
    HttpEvent
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

/*Track whether a refresh is already in progress. 
This prevents multiple simultaneous requests from each
triggering their own refresh call. Global variable — shared across all interceptor invocations.*/
let isRefreshing = false;

/* Queue of callbacks waiting for the refresh to complete.
   When refresh succeeds — all queued requests retry with the new token.
   When refresh fails — all queued requests fail. */
let refreshQueue: Array<{
    resolve: (token: string) => void;
    reject: (err: any) => void;
}> = [];

// Notify all queued requests of the refresh result
function resolveQueue(token: string): void {
    refreshQueue.forEach(cb => cb.resolve(token));
    refreshQueue = [];
}

function rejectQueue(err: any): void {
    refreshQueue.forEach(cb => cb.reject(err));
    refreshQueue = [];
}

export const authInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {

    const authService = inject(AuthService);

    // Attach access token to request
    const token   = authService.getAccessToken();
    const authReq = attachToken(req, token);

    return new Observable(observer => {
        next(authReq).subscribe({
            next    : (event) => observer.next(event),
            complete: () => observer.complete(),
            error   : (error) => {

                // Only intercept 401 errors
                if (!(error instanceof HttpErrorResponse) || error.status !== 401) {
                    observer.error(error);
                    return;
                }

                // Never try to refresh for auth endpoints — prevents infinite loop
                if (req.url.includes('/auth/refresh') || req.url.includes('/auth/login')) {
                    authService.logout();
                    observer.error(error);
                    return;
                }

                // If already refreshing — queue this request
                // It will retry once the ongoing refresh completes
                if (isRefreshing) {
                    const waitForRefresh = new Promise<string>((resolve, reject) => {
                        refreshQueue.push({ resolve, reject });
                    });

                    waitForRefresh
                        .then(newToken => {
                            // Refresh succeeded — retry with new token
                            next(attachToken(req, newToken)).subscribe({
                                next    : (event) => observer.next(event),
                                complete: () => observer.complete(),
                                error   : (err) => observer.error(err)
                            });
                        })
                        .catch(err => observer.error(err));

                    return;
                }

                // First request to get a 401 — start the refresh process
                isRefreshing = true;

                authService.refresh(
                    (newToken) => {
                        // Refresh succeeded
                        isRefreshing = false;
                        resolveQueue(newToken);

                        // Retry the original failed request with new token
                        next(attachToken(req, newToken)).subscribe({
                            next    : (event) => observer.next(event),
                            complete: () => observer.complete(),
                            error   : (err) => observer.error(err)
                        });
                    },
                    () => {
                        // Refresh failed — clear queue and force logout
                        isRefreshing = false;
                        rejectQueue(new Error('Refresh failed'));
                        authService.logout();
                        observer.error(error);
                    }
                );
            }
        });
    });
};

// Clones request and attaches Authorization header
function attachToken(req: HttpRequest<unknown>, token: string | null): HttpRequest<unknown> {
    if (!token) return req;

    return req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
    });
}