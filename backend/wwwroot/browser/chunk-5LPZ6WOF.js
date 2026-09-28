import "./chunk-GOMI4DH3.js";

// src/app/features/drivers/drivers.routes.ts
var driverRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-LL3GSE6W.js").then((m) => m.DriverListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-VFNLEEBB.js").then((m) => m.DriverFormComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-VFNLEEBB.js").then((m) => m.DriverFormComponent)
  }
];
export {
  driverRoutes
};
//# sourceMappingURL=chunk-5LPZ6WOF.js.map
