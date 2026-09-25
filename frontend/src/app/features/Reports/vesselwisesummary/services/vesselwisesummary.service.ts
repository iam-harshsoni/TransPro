import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../../shared/models/apiResponse.model';
import { PaginatedResponse } from '../../../../shared/models/paginated-response.model';
import { VesselwiseSummaries } from '../models/vesselwisesummary.model';
import { FormatDatePipe } from '../../../../pipes/format-date-pipe';

@Injectable({
	providedIn: 'root',
})
export class VesselwisesummaryService {
	private http = inject(HttpClient);
	private formatDate = inject(FormatDatePipe);
	private apiUrl = `${environment.apiUrl}/VesselwiseSummary`;

	getPaginated(
		pageNumber: number,
		pageSize: number,
		fromDate: Date,
		toDate: Date,
		search: string = ''): Observable<ApiResponse<PaginatedResponse<VesselwiseSummaries>>> {
		
		const body = {
			pageNumber,
			pageSize,
			search,
			fromDate: fromDate ? this.formatDate.transform(fromDate) : null,
			toDate: toDate ? this.formatDate.transform(toDate) : null
		}

		return this.http.post<ApiResponse<PaginatedResponse<VesselwiseSummaries>>>(this.apiUrl, body);
	}
}
