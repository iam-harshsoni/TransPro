import {
  environment
} from "./chunk-4EYY5C3L.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-F6YHHGKC.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-ZCRCH54Z.js";

// src/app/features/drivers/services/driver.service.ts
var DriverService = class _DriverService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/driver`;
  getPaginated(pageNumber, pageSize, search = "") {
    let params = new HttpParams().set("pageNumber", pageNumber.toString()).set("pageSize", pageSize.toString());
    if (search) {
      params = params.set("search", search);
    }
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
  static \u0275fac = function DriverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DriverService, factory: _DriverService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  DriverService
};
//# sourceMappingURL=chunk-OOZYZWI7.js.map
