import { Routes } from "@angular/router";

export const truckRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/truck-list/truck-list.component')
                .then(m => m.TruckListComponent)
    },
    {
        path: 'create',
        loadComponent: () =>
            import('./pages/truck-form/truck-form.component')
                .then(m => m.TruckFormComponent)
    },
    {
        path: 'edit/:id',
        loadComponent: () =>
            import('./pages/truck-form/truck-form.component')
                .then(m => m.TruckFormComponent)
    }
];