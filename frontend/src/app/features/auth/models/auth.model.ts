export interface AuthResponse {
    accessToken : string;
    refreshToken: string;
    tokenType   : string;
    expiresIn   : number;
    fullName    : string;
    role        : string;
}

export interface LoginRequest {
    email   : string;
    password: string;
}

export interface RefreshTokenRequest {
    refreshToken: string;
}

// What we store in localStorage after login
export interface StoredAuth {
    accessToken : string;
    refreshToken: string;
    fullName    : string;
    role        : string;
    expiresAt   : number;
}