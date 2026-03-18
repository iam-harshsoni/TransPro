import "./chunk-GOMI4DH3.js";

// src/app/features/customers/customers.routes.ts
var customerRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-JODN4AM7.js").then((m) => m.CustomerListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-A4FGMNH2.js").then((m) => m.CustomerFormComponent)
  },
  {
    path: "edit/:id",
    // :id is a route parameter — like [HttpGet("{id}")] in C#
    loadComponent: () => import("./chunk-A4FGMNH2.js").then((m) => m.CustomerFormComponent)
  }
];
export {
  customerRoutes
};
//# sourceMappingURL=chunk-RSGMKSV2.js.map
