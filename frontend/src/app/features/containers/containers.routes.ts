import { Routes } from "@angular/router";

export const containerRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/container-list/container-list.component')
                .then(m => m.ContainerListComponent)
    },
    {
        path: 'create',
        loadComponent: () =>
            import('./pages/container-form/container-form.component')
                .then(m => m.ContainerFormComponent)
    },
    {
        path: 'edit/:id',
        loadComponent: () =>
            import('./pages/container-form/container-form.component')
                .then(m => m.ContainerFormComponent)
    }
];