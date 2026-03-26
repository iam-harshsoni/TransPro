import {
  environment
} from "./chunk-U7IY62MS.js";
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

// src/app/features/trips/services/trip.service.ts
var TripService = class _TripService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/trips`;
  statusMap = {
    "Planned": 1,
    "InTransit": 2,
    "Completed": 3,
    "Cancelled": 4
  };
  getPaginated(params) {
    let httpParams = new HttpParams();
    if (params.pageNumber)
      httpParams = httpParams.set("pageNumber", params.pageNumber.toString());
    if (params.pageSize)
      httpParams = httpParams.set("pageSize", params.pageSize.toString());
    if (params.search)
      httpParams = httpParams.set("search", params.search);
    if (params.status)
      httpParams = httpParams.set("status", params.status);
    if (params.customerId)
      httpParams = httpParams.set("customerId", params.customerId.toString());
    if (params.driverId)
      httpParams = httpParams.set("driverId", params.driverId.toString());
    if (params.fromDate)
      httpParams = httpParams.set("fromDate", params.fromDate);
    if (params.toDate)
      httpParams = httpParams.set("toDate", params.toDate);
    return this.http.get(this.apiUrl, { params: httpParams });
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(dto) {
    return this.http.post(this.apiUrl, dto);
  }
  updateStatus(id, dto) {
    return this.http.patch(`${this.apiUrl}/${id}/status`, { newStatus: this.statusMap[dto.newStatus] });
  }
  //Cancel is a dedicated endpoint in your backend
  cancel(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, {});
  }
  static \u0275fac = function TripService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TripService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TripService, factory: _TripService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  TripService
};
//# sourceMappingURL=chunk-P4GJG2W5.js.map
