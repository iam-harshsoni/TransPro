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

// src/app/features/routes/services/route.service.ts
var RouteService = class _RouteService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/trans-route`;
  getPaginated(pageNumber, pageSize, search = "") {
    let params = new HttpParams().set("pageNumber", pageNumber).set("pageSize", pageSize);
    if (search) {
      params = params.set("search", search);
    }
    return this.http.get(this.apiUrl, { params });
  }
  search(query) {
    const params = new HttpParams().set("search", query).set("pageNumber", "1").set("pageSize", "20");
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
  static \u0275fac = function RouteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouteService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RouteService, factory: _RouteService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  RouteService
};
//# sourceMappingURL=chunk-PQVHB6CP.js.map
