import { Routes } from "@angular/router";

export const routesRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/route-list/route-list.component')
                .then(m => m.RouteListComponent)
    },
    {
        path: 'create',
        loadComponent: () =>
            import('./pages/route-form/route-form.component')
                .then(m => m.RouteFormComponent)
    },
    {
        path: 'edit/:id',
        loadComponent: () =>
            import('./pages/route-form/route-form.component')
                .then(m => m.RouteFormComponent)
    }
];