import {
  environment
} from "./chunk-VXGQDH4M.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-MM7SKLVI.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-FOYF73X5.js";

// src/app/features/customers/services/customer.service.ts
var CustomerService = class _CustomerService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/customers`;
  /*  Observable<Customer[]> is Angular's async type.
      Think of it like Task<List<Customer>> in C#.
      The component subscribes to this and gets the data when it arrives.*/
  // getAll(): Observable<ApiResponse<{ data: Customer[] }>> {
  //     return this.http.get<ApiResponse<{ data: Customer[] }>>(this.apiUrl);
  // }
  getPaginated(pageNumber, pageSize, search = "") {
    let params = new HttpParams().set("pageNumber", pageNumber.toString()).set("pageSize", pageSize.toString());
    if (search) {
      params = params.set("search", search);
    }
    return this.http.get(this.apiUrl, { params });
  }
  search(query) {
    const params = new HttpParams().set("search", query).set("pageNumber", "1").set("pageSize", "10");
    return this.http.get(this.apiUrl, { params });
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(dto) {
    return this.http.post(this.apiUrl, dto);
  }
  update(id, dto) {
    return this.http.put(`${this.apiUrl}/${id}`, dto);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function CustomerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomerService, factory: _CustomerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  CustomerService
};
//# sourceMappingURL=chunk-Z6GFCSWP.js.map
