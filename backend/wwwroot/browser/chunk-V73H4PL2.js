import "./chunk-GOMI4DH3.js";

// src/app/features/customers/customers.routes.ts
var customerRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-2EMJSNBG.js").then((m) => m.CustomerListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-APWZBIYB.js").then((m) => m.CustomerFormComponent)
  },
  {
    path: "edit/:id",
    // :id is a route parameter — like [HttpGet("{id}")] in C#
    loadComponent: () => import("./chunk-APWZBIYB.js").then((m) => m.CustomerFormComponent)
  }
];
export {
  customerRoutes
};
//# sourceMappingURL=chunk-V73H4PL2.js.map
