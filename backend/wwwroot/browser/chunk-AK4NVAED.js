import "./chunk-GOMI4DH3.js";

// src/app/features/customers/customers.routes.ts
var customerRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-G2PZXNH6.js").then((m) => m.CustomerListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-JBEXAIJP.js").then((m) => m.CustomerFormComponent)
  },
  {
    path: "edit/:id",
    // :id is a route parameter — like [HttpGet("{id}")] in C#
    loadComponent: () => import("./chunk-JBEXAIJP.js").then((m) => m.CustomerFormComponent)
  }
];
export {
  customerRoutes
};
//# sourceMappingURL=chunk-AK4NVAED.js.map
