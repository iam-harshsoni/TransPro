import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'formatDate',
  standalone: true
})
export class FormatDatePipe implements PipeTransform {

  private datePipe = new DatePipe('en-US');

  transform(value: Date | string | null | undefined): string {
    if (!value) {
      return '';
    }

    return this.datePipe.transform(value, 'yyyy-MM-dd') ?? '';
  }
}
