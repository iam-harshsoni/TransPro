/* Service

A service holds all the HTTP communication logic for a feature. 
Components never call HTTPClient directly - they always go through a service.
This is same speration you use in backend:
    Controller -> Service -> Repo
In Angular:
    Component -> Service -> HttpClient -> Asp.net Core API
*/

import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { CreateCustomerDto, Customer, UpdateCustomerDto } from "../models/customer.model";
import { ApiResponse } from "../../../shared/models/apiResponse.model";
import { PaginatedResponse } from "../../../shared/models/paginated-response.model";

/* @Injectable marks this class as something Angular can inject.
    providedIn: 'root' means one single instance exists for the whole app.
    Same as AddScoped() or AddSingleton() in ASP.NET Core. */

@Injectable({
    providedIn: 'root'
})

export class CustomerService {

    private http = inject(HttpClient);
    private apiUrl = `${environment.apiUrl}/customers`;

    /*  Observable<Customer[]> is Angular's async type.
        Think of it like Task<List<Customer>> in C#.
        The component subscribes to this and gets the data when it arrives.*/
    // getAll(): Observable<ApiResponse<{ data: Customer[] }>> {
    //     return this.http.get<ApiResponse<{ data: Customer[] }>>(this.apiUrl);
    // }

    getPaginated(
        pageNumber: number,
        pageSize: number,
        search: string = ''): Observable<ApiResponse<PaginatedResponse<Customer>>> {

        let params = new HttpParams()
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString());

        if (search) {
            params = params.set('search', search);
        }

        return this.http.get<ApiResponse<PaginatedResponse<Customer>>>(this.apiUrl, { params });
    }

    search(query: string) : Observable<ApiResponse<PaginatedResponse<Customer>>> {
        const params = new HttpParams()
            .set('search', query)
            .set('pageNumber', '1')
            .set('pageSize', '10');
        
        return this.http.get<ApiResponse<PaginatedResponse<Customer>>>(this.apiUrl, { params });
    }


    getById(id: number): Observable<ApiResponse<Customer>> {
        return this.http.get<ApiResponse<Customer>>(`${this.apiUrl}/${id}`);
    }

    create(dto: CreateCustomerDto): Observable<Customer> {
        // Second argument is the request body — Angular serializes it to JSON automatically
        return this.http.post<Customer>(this.apiUrl, dto);
    }

    update(id: number, dto: UpdateCustomerDto): Observable<Customer> {
        return this.http.put<Customer>(`${this.apiUrl}/${id}`, dto);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}