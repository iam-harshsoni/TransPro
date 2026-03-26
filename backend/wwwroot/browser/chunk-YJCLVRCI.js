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
  toggleAvailability(id) {
    return this.http.patch(`${this.apiUrl}/${id}/toggle-availability`, {});
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
//# sourceMappingURL=chunk-YJCLVRCI.js.map
