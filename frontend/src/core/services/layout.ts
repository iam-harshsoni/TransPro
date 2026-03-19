import { Injectable, signal } from '@angular/core';

/* A service in Angular = a class that holds shared logic or state.
    Same concept as your C# service classes in the backend.
    The difference: Angular services are singletons by default (providedIn: 'root')
    meaning one instance exists for the entire app lifetime.*/

@Injectable({
  providedIn: 'root'  // registered globally — like AddSingleton() in ASP.NET Core
})

export class LayoutService {

  /*  signal() is Angular 21's modern way to hold reactive state.
      When this value changes, every component reading it automatically updates.
      Think of it like a live variable that the UI watches.*/

  sidebarCollapsed = signal<boolean>(false);
  sidebarOpen = signal<boolean>(false);

  toggle(): void {
    // update() takes current value and returns new value
    // v => !v means: if true return false, if false return true
    // On mobile — toggle overlay open/close
    if (window.innerWidth <= 768) {
      this.sidebarOpen.update(v => !v);
    } else {
      // On desktop — collapse to icon-only
      this.sidebarCollapsed.update(v => !v);
    }
  }

  closeMobileSidebar(): void {
    this.sidebarOpen.set(false);
  }

  /*  Why not just use a boolean variable in the component?
     If you stored `sidebarCollapsed` inside `ShellComponent`, the `TopbarComponent` could not read it because they are sibling components, not parent-child. A service acts as a shared store accessible to any component.
  */

}