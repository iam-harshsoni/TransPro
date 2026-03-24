import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../shared/models/apiResponse.model';
import { PaginatedResponse } from '../../../shared/models/paginated-response.model';
import { CreateTripDto, TripDetail, TripQueryParams, TripSummary, UpdateTripStatusDto } from '../models/trip.model';

@Injectable({
	providedIn: 'root',
})
export class TripService {

	private http = inject(HttpClient);
	private apiUrl = `${environment.apiUrl}/trips`;

	private readonly statusMap: Record<string, number> = {
		'Planned':   1,
		'InTransit': 2,
		'Completed': 3,
		'Cancelled': 4
	};

	getPaginated(params: TripQueryParams): Observable<ApiResponse<PaginatedResponse<TripSummary>>> {
		let httpParams = new HttpParams();

		if (params.pageNumber) httpParams = httpParams.set('pageNumber', params.pageNumber.toString());
		if (params.pageSize) httpParams   = httpParams.set('pageSize', params.pageSize.toString());
		if (params.search) httpParams     = httpParams.set('search', params.search);
		if (params.status) httpParams     = httpParams.set('status', params.status);
		if (params.customerId) httpParams = httpParams.set('customerId', params.customerId.toString());
		if (params.driverId) httpParams   = httpParams.set('driverId', params.driverId.toString());
		if (params.fromDate) httpParams   = httpParams.set('fromDate', params.fromDate);
		if (params.toDate) httpParams     = httpParams.set('toDate', params.toDate);

		return this.http.get<ApiResponse<PaginatedResponse<TripSummary>>>(this.apiUrl, { params: httpParams });
	}

	getById(id: number): Observable<ApiResponse<TripDetail>> {
		return this.http.get<ApiResponse<TripDetail>>(`${this.apiUrl}/${id}`);
	}

	create(dto: CreateTripDto): Observable<ApiResponse<TripDetail>> {
		return this.http.post<ApiResponse<TripDetail>>(this.apiUrl, dto);
	}

	updateStatus(id: number, dto: UpdateTripStatusDto): Observable<ApiResponse<TripDetail>> {
		return this.http.patch<ApiResponse<TripDetail>>(`${this.apiUrl}/${id}/status`, { newStatus: this.statusMap[dto.newStatus] });
	}

	//Cancel is a dedicated endpoint in your backend
	cancel(id: number): Observable<ApiResponse<string>> {
		return this.http.delete<ApiResponse<string>>(`${this.apiUrl}/${id}`, {});
	}
}
