import {
  HttpClient,
  HttpParams
} from "./chunk-GBERHHLY.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-RB7DCYUT.js";

// src/environments/environment.development.ts
var environment = {
  production: false,
  /* DEVELOPMENT*/
  // apiUrl: 'http://localhost:5070/api'
  // apiUrl: 'https://localhost:7247/api'
  /* PROD */
  apiUrl: "https://transpro-1.onrender.com/api"
};

// src/app/features/containers/services/container.service.ts
var ContainerService = class _ContainerService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/container`;
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
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function ContainerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContainerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContainerService, factory: _ContainerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContainerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ContainerService
};
//# sourceMappingURL=chunk-3KGWFBIR.js.map
