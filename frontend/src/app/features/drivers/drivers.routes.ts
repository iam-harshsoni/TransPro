import { Routes } from "@angular/router";

export const driverRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/driver-list/driver-list.component')
                .then(m => m.DriverListComponent)
    },
    {
        path: 'create',
        loadComponent: () =>
            import('./pages/driver-form/driver-form.component')
                .then(m => m.DriverFormComponent)
    },
    {
        path: 'edit/:id',
        loadComponent: () =>
            import('./pages/driver-form/driver-form.component')
                .then(m => m.DriverFormComponent)
    }
];