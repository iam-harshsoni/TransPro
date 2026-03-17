// Feature-level routes file.
// This keeps customer routes isolated from the main app routes.
// The main app.routes.ts will simply load this file lazily.
// Same concept as area routing in ASP.NET Core MVC.

import { Routes } from '@angular/router';

export const customerRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/customer-list/customer-list.component')
                .then(m => m.CustomerListComponent)
    },
    {
        path: 'create',
        loadComponent: () =>
            import('./pages/customer-form/customer-form.component')
                .then(m => m.CustomerFormComponent)
    },
    {
        path: 'edit/:id',   // :id is a route parameter — like [HttpGet("{id}")] in C#
        loadComponent: () =>
            import('./pages/customer-form/customer-form.component')
                .then(m => m.CustomerFormComponent)
    }
];