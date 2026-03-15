import { Component, inject, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from '../topbar/topbar.component';
import { LayoutService } from '../../../core/services/layout';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  layout = inject(LayoutService);

  // Ctrl+K global shortcut — focuses search from anywhere
  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {

    /* window:keydown means this fires for ANY keypress anywhere in the app
        event.ctrlKey checks if Ctrl is held
        event.key === 'k' checks the actual key pressed */

    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault(); // stops browser's default Ctrl+K behavior
      const input = document.querySelector<HTMLInputElement>('.topbar-search input');
      input?.focus(); // programmatically focuses the search box
    }
  }
}