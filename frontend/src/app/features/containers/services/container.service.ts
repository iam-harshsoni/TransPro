import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment.development";
import { Observable } from "rxjs";
import { ApiResponse } from "../../../shared/models/apiResponse.model";
import { PaginatedResponse } from "../../../shared/models/paginated-response.model";
import { Container, CreateContainerDto, UpdateContainerDto } from "../models/container.model";

@Injectable({
    providedIn: 'root'
})

export class ContainerService {
    private http = inject(HttpClient);
    private apiUrl = `${environment.apiUrl}/container`;

    getPaginated(
        pageNumber: number,
        pageSize: number,
        search: string = ''): Observable<ApiResponse<PaginatedResponse<Container>>> {

        let params = new HttpParams()
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())

        if (search) {
            params = params.set('search', search);
        }

        return this.http.get<ApiResponse<PaginatedResponse<Container>>>(this.apiUrl, { params });
    }

    getById(id: number): Observable<ApiResponse<Container>> {
        return this.http.get<ApiResponse<Container>>(`${this.apiUrl}/${id}`);
    }

    create(dto: CreateContainerDto): Observable<Container> {
        return this.http.post<Container>(this.apiUrl, dto);
    }

    update(id: number, dto: UpdateContainerDto): Observable<Container> {
        return this.http.put<Container>(`${this.apiUrl}/${id}`, dto);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

}