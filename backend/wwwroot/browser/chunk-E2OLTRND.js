import {
  environment
} from "./chunk-U7IY62MS.js";
import {
  HttpClient,
  Router
} from "./chunk-MM7SKLVI.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-FOYF73X5.js";

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "transpro_auth";
var AuthService = class _AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  apiUrl = `${environment.apiUrl}/auth`;
  /* Signal that tracks whether user is currently logged in.
      Any component can read this — no need to check localStorage every time.
      Initialized by reading from localStorage on app startup.
   */
  isAuthenticated = signal(this.hasValidToken(), ...ngDevMode ? [{ debugName: "isAuthenticated" }] : (
    /* istanbul ignore next */
    []
  ));
  // Signal for current user info — available everywhere without prop drilling
  currentUser = signal(this.getStoredUsed(), ...ngDevMode ? [{ debugName: "currentUser" }] : (
    /* istanbul ignore next */
    []
  ));
  //Login
  login(request, onSuccess, onError) {
    this.http.post(`${this.apiUrl}/login`, request).subscribe({
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
          onError(response.message ?? "Login Failed");
        }
      },
      error: (err) => {
        const msg = err.error?.message ?? "Invalid email or password";
        onError(msg);
      }
    });
  }
  // Referesh Token
  //Used by interceptor — takes callbacks instead of returning Observable
  refresh(onSuccess, onFailure) {
    const stored = this.getStoredAuth();
    if (!stored?.refreshToken) {
      onFailure();
      return;
    }
    this.http.post(`${this.apiUrl}/refresh`, {
      refreshToken: stored.refreshToken
    }).subscribe({
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
  logout() {
    const stored = this.getStoredAuth();
    if (stored?.refreshToken) {
      this.http.post(`${this.apiUrl}/logout`, { refreshToken: stored.refreshToken }).subscribe();
    }
    this.clearToken();
    this.isAuthenticated.set(false);
    this.currentUser.set(null);
    this.router.navigate(["/login"]);
  }
  // Token Accessors
  getAccessToken() {
    return this.getStoredAuth()?.accessToken ?? null;
  }
  hasValidToken() {
    const stored = this.getStoredAuth();
    if (!stored)
      return false;
    return Date.now() < stored.expiresAt;
  }
  // Private Storage Helpers
  storeTokens(data) {
    const stored = {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      fullName: data.fullName,
      role: data.role,
      expiresAt: Date.now() + data.expiresIn * 1e3
    };
    localStorage.setItem(TOKEN_KEY, JSON.stringify(stored));
  }
  getStoredAuth() {
    const raw = localStorage.getItem(TOKEN_KEY);
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  getStoredUsed() {
    const stored = this.getStoredAuth();
    if (!stored)
      return null;
    return { fullName: stored.fullName, role: stored.role };
  }
  clearToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-E2OLTRND.js.map
