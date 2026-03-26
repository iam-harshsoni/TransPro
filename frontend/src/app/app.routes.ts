import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';
import { authGuard } from './core/guard/auth-guard';

export const routes: Routes = [
	{
		path: 'login',
		loadComponent: () =>
		import('./features/auth/login/login.component')
			.then(m => m.LoginComponent)
	},
	{	
		path: '',
		component: ShellComponent,
		canActivate: [authGuard],
		children: [
			{
				path: 'dashboard',				// matches localhost:4200/dashboard
				loadComponent: () =>
					import('./features/dashboard/dashboard.component')
						.then(m => m.DashboardComponent)

				/* loadComponent = lazy loading
					The dashboard code is only downloaded when user navigates there
					This keeps initial app load fast */
			},
			{
				path: 'customers',
				loadChildren: () =>
					import('./features/customers/customers.routes')
						.then(m => m.customerRoutes)
			},
			{
				path: 'drivers',
				loadChildren: () =>
					import('./features/drivers/drivers.routes')
						.then(m => m.driverRoutes)
			},
			{
				path: 'containers',
				loadChildren: () =>
					import('./features/containers/containers.routes')
						.then(m => m.containerRoutes)
			},
			{
				path: 'trucks',
				loadChildren: () =>
					import('./features/trucks/truck.routes')
						.then(m => m.truckRoutes)
			},
			{
				path: 'routes',
				loadChildren: () =>
					import('./features/routes/routes.routes')
						.then(m => m.routesRoutes)
			},
			{
				path: 'trips',
				loadChildren: () =>
					import('./features/trips/trip.routes')
						.then(m => m.tripRoutes)
			},
			{
				path: '',
				redirectTo: 'dashboard',		// localhost:4200/ redirects to /dashboard
				pathMatch: 'full'
			}
		]
	},

	// Catch-all — redirect unknown routes to dashboard
	{
		path: '**',
		redirectTo: '/dashboard'
	}	
];

/* Lazy loading explained:
Instead of loading all feature code upfront, Angular downloads each feature only when needed. Same concept as loading assemblies on demand in .NET.
*/