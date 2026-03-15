import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { LayoutService } from '../../../core/services/layout';

interface NavItem {
	label: string;
	icon: string;
	route: string;
}

interface NavGroup {
	groupLabel: string;
	items: NavItem[];
}

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [RouterLink, RouterLinkActive, CommonModule, TooltipModule],
	templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

	/* navGroups is an array of grouped navigation items.
		Each group has a label (MAIN, MASTER DATA, OPERATIONS)
		and an array of items (label, icon, route).

		In the template we use Angular's @for loop — same as foreach in C#
		routerLinkActive="active" automatically adds the "active" CSS class
		when the current URL matches that nav item's route.

		pTooltip is from PrimeNG — shows a tooltip on hover.
		We only show it when sidebar is collapsed so user knows what the icon means. */

	layout = inject(LayoutService);

	navGroups: NavGroup[] = [
		{
			groupLabel: 'MAIN',
			items: [
				{ label: 'Dashboard', icon: 'pi pi-home', route: '/dashboard' }
			]
		},
		{
			groupLabel: 'MASTER DATA',
			items: [
				{ label: 'Customers', icon: 'pi pi-users', route: '/customers' },
				{ label: 'Drivers', icon: 'pi pi-id-card', route: '/drivers' },
				{ label: 'Trucks', icon: 'pi pi-truck', route: '/trucks' },
				{ label: 'Containers', icon: 'pi pi-box', route: '/containers' },
				{ label: 'Routes', icon: 'pi pi-map', route: '/routes' },
			]
		},
		{
			groupLabel: 'OPERATIONS',
			items: [
				{ label: 'Trips', icon: 'pi pi-send', route: '/trips' },
			]
		}
	];
}