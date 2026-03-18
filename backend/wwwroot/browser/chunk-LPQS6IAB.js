import "./chunk-GOMI4DH3.js";

// src/app/features/drivers/drivers.routes.ts
var driverRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-TTRQHO3W.js").then((m) => m.DriverListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-DOTPY7LT.js").then((m) => m.DriverFormComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-DOTPY7LT.js").then((m) => m.DriverFormComponent)
  }
];
export {
  driverRoutes
};
//# sourceMappingURL=chunk-LPQS6IAB.js.map
