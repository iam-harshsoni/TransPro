import { HttpClient, HttpParams }              from '@angular/common/http';
import { inject, Injectable }                  from '@angular/core';
import { environment }                         from '../../../../../environments/environment';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import { ApiResponse }                         from '../../../../shared/models/apiResponse.model';
import { InvoiceNoFilter, VesselwiseSummaryReport }             from '../models/vesselwisesummary.model';
import { FormatDatePipe }                      from '../../../../pipes/format-date-pipe';

  @Injectable({
   providedIn: 'root',
  })
  export class VesselwisesummaryService {
   private http       = inject(HttpClient);
   private formatDate = inject(FormatDatePipe);
   private apiUrl     = `${environment.apiUrl}/reports/stevedoring/vesselwise-summary`;

  	getPaginated(
        pageNumber : number,
        pageSize   : number,
        fromDate   : Date,
        toDate     : Date,
        search?    : string,
        partyIds?  : number[],
        invoiceNos?: number[]): Observable<ApiResponse<VesselwiseSummaryReport>> {
            const body = {
                pageNumber,
                pageSize,
                search,
                fromDate  : fromDate ? this.formatDate.transform(fromDate): null,
                toDate    : toDate ? this.formatDate.transform(toDate)    : null,
                partyIds  : partyIds,
                invoiceNos: invoiceNos
            }
            
            return this.http.post<ApiResponse<VesselwiseSummaryReport>>(this.apiUrl, body);
    }

    searchInvoiceNo(query:string) : Observable<InvoiceNoFilter[]> {
        let params = new HttpParams()
            .set('search', query)
            .set('pageSize', '50');
        
        return this.http.get<InvoiceNoFilter[]>(`${this.apiUrl}/search-invoiceno`, {params});
    }

    exportVesselwiseSummary(fromDate: Date | null, toDate: Date | null, customerIds: number[]): Observable<Blob> {
        const body = {
            fromDate: fromDate ? this.formatDate.transform(fromDate) : null,
            toDate  : toDate ? this.formatDate.transform(toDate) : null,
            partyIds: customerIds,
        };

        return this.http.post(`${this.apiUrl}/export`, body, {
            responseType: 'blob'
        });
      }
  }
