import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment.development";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponse } from "../../../shared/models/apiResponse.model";
import { PaginatedResponse } from "../../../shared/models/paginated-response.model";
import { CreateTruckDto, Truck } from "../models/truck.model";
import { UpdateContainerDto } from "../../containers/models/container.model";

@Injectable({
    providedIn: 'root'
})

export class TruckService {
    private http = inject(HttpClient);
    private apiUrl = `${environment.apiUrl}/truck`;

    getPaginated(
        pageNumber: number,
        pageSize: number,
        search: string = ''
    ): Observable<ApiResponse<PaginatedResponse<Truck>>> {

        let params = new HttpParams()
            .set('pageNumber', pageNumber)
            .set('pageSize', pageSize);

        if (search)
            params = params.set('search', search);

        return this.http.get<ApiResponse<PaginatedResponse<Truck>>>(this.apiUrl, { params });
    }

    getById(id: number): Observable<ApiResponse<Truck>> {
        return this.http.get<ApiResponse<Truck>>(`${this.apiUrl}/${id}`);
    }

    create(dto: CreateTruckDto): Observable<Truck> {
        return this.http.post<Truck>(this.apiUrl, dto);
    }

    update(id: number, dto: UpdateContainerDto): Observable<Truck> {
        return this.http.put<Truck>(`${this.apiUrl}/${id}`, dto);
    }
}