import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { ApiResponse } from "../../../shared/models/apiResponse.model";
import { PaginatedResponse } from "../../../shared/models/paginated-response.model";
import { CreateDriverDto, Driver } from "../models/driver.model";
import { UpdateCustomerDto } from "../../customers/models/customer.model";

@Injectable({
    providedIn: 'root'
})

export class DriverService {
    private http = inject(HttpClient);
    private apiUrl = `${environment.apiUrl}/driver`;

    getPaginated(
        pageNumber: number,
        pageSize: number,
        search: string = ''): Observable<ApiResponse<PaginatedResponse<Driver>>> {

        let params = new HttpParams()
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString());

        if (search) {
            params = params.set('search', search);
        }

        return this.http.get<ApiResponse<PaginatedResponse<Driver>>>(this.apiUrl, { params });
    }

    search(query: string) : Observable<ApiResponse<PaginatedResponse<Driver>>> {
        const params = new HttpParams()
            .set('search', query)
            .set('pageNumber', '1')
            .set('pageSize', '20');
        
        return this.http.get<ApiResponse<PaginatedResponse<Driver>>>(this.apiUrl, { params });
    }

    getById(id: number): Observable<ApiResponse<Driver>> {
        return this.http.get<ApiResponse<Driver>>(`${this.apiUrl}/${id}`);
    }

    create(dto: CreateDriverDto): Observable<Driver> {
        return this.http.post<Driver>(this.apiUrl, dto);
    }

    update(id: number, dto: UpdateCustomerDto): Observable<Driver> {
        return this.http.put<Driver>(`${this.apiUrl}/${id}`, dto);
    }

    toggleAvailability(id: number): Observable<ApiResponse<string>> {
        return this.http.patch<ApiResponse<string>>(`${this.apiUrl}/${id}/toggle-availability`, {});
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

}