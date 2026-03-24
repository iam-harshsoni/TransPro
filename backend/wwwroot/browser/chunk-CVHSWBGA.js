import "./chunk-GOMI4DH3.js";

// src/app/features/drivers/drivers.routes.ts
var driverRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-PYP6K3M3.js").then((m) => m.DriverListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-NA64RIRX.js").then((m) => m.DriverFormComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-NA64RIRX.js").then((m) => m.DriverFormComponent)
  }
];
export {
  driverRoutes
};
//# sourceMappingURL=chunk-CVHSWBGA.js.map
