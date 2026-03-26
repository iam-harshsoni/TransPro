import "./chunk-GOMI4DH3.js";

// src/app/features/customers/customers.routes.ts
var customerRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-RHHFRWGA.js").then((m) => m.CustomerListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-Z6E2UBYG.js").then((m) => m.CustomerFormComponent)
  },
  {
    path: "edit/:id",
    // :id is a route parameter — like [HttpGet("{id}")] in C#
    loadComponent: () => import("./chunk-Z6E2UBYG.js").then((m) => m.CustomerFormComponent)
  }
];
export {
  customerRoutes
};
//# sourceMappingURL=chunk-D2SBGN3N.js.map
