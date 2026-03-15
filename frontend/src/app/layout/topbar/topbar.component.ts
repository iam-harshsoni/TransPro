import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from '../../../core/services/layout';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {
  layout = inject(LayoutService);

  /* @ViewChild gives us a direct reference to a DOM element.
      #searchInput in the HTML is a template reference variable.
      This is like finding an element by ID in JavaScript,
      but the Angular way — type-safe and clean. */
  
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  onSearchKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.searchInput.nativeElement.blur();
    }
  }
  
  focusSearch(): void {
    this.searchInput.nativeElement.focus(); // programmatically focuses the input
  }
}