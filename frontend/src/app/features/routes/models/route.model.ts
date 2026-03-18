export interface AppRoute {
    id            : number;
    origin        : string;
    destination   : string;
    distanceKm    : number;
    estimatedHours: number;
}

export type CreateAppRouteDto = Omit<AppRoute, 'id'>;
export type UpdateAppRouteDto = Partial<AppRoute> & { id: number };