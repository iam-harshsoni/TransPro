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

// src/app/features/trucks/services/truck.service.ts
var TruckService = class _TruckService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/truck`;
  getPaginated(pageNumber, pageSize, search = "") {
    let params = new HttpParams().set("pageNumber", pageNumber).set("pageSize", pageSize);
    if (search)
      params = params.set("search", search);
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
  static \u0275fac = function TruckService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TruckService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TruckService, factory: _TruckService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TruckService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  TruckService
};
//# sourceMappingURL=chunk-AQIU5GW5.js.map
