import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment.development";
import { Observable, retry } from "rxjs";
import { ApiResponse } from "../../../shared/models/apiResponse.model";
import { PaginatedResponse } from "../../../shared/models/paginated-response.model";
import { AppRoute, CreateAppRouteDto, UpdateAppRouteDto } from "../models/route.model";

@Injectable({
    providedIn: 'root'
})

export class RouteService {
    private http = inject(HttpClient);
    private apiUrl = `${environment.apiUrl}/trans-route`;

    getPaginated(
        pageNumber: number,
        pageSize: number,
        search: string = ''): Observable<ApiResponse<PaginatedResponse<AppRoute>>> {

        let params = new HttpParams()
            .set('pageNumber', pageNumber)
            .set('pageSize', pageSize);

        if (search) {
            params = params.set('search', search);
        }

        return this.http.get<ApiResponse<PaginatedResponse<AppRoute>>>(this.apiUrl, { params });
    }

    getById(id: number): Observable<ApiResponse<AppRoute>> {
        return this.http.get<ApiResponse<AppRoute>>(`${this.apiUrl}/${id}`);
    }

    create(dto: CreateAppRouteDto): Observable<AppRoute> {
        return this.http.post<AppRoute>(this.apiUrl, dto);
    }

    update(id: number, dto: UpdateAppRouteDto): Observable<AppRoute> {
        return this.http.put<AppRoute>(`${this.apiUrl}/${id}`, dto);
    }
}