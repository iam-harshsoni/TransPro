import "./chunk-GOMI4DH3.js";

// src/app/features/drivers/drivers.routes.ts
var driverRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-S4GYOZDF.js").then((m) => m.DriverListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-SYPMNSZB.js").then((m) => m.DriverFormComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-SYPMNSZB.js").then((m) => m.DriverFormComponent)
  }
];
export {
  driverRoutes
};
//# sourceMappingURL=chunk-44XTDDPU.js.map
