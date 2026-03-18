import "./chunk-GOMI4DH3.js";

// src/app/features/customers/customers.routes.ts
var customerRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-N6ZJBZML.js").then((m) => m.CustomerListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-JHZ7G7P4.js").then((m) => m.CustomerFormComponent)
  },
  {
    path: "edit/:id",
    // :id is a route parameter — like [HttpGet("{id}")] in C#
    loadComponent: () => import("./chunk-JHZ7G7P4.js").then((m) => m.CustomerFormComponent)
  }
];
export {
  customerRoutes
};
//# sourceMappingURL=chunk-YK7Y5FM3.js.map
