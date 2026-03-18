import "./chunk-GOMI4DH3.js";

// src/app/features/drivers/drivers.routes.ts
var driverRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-A3IE66IW.js").then((m) => m.DriverListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-MFILJPRZ.js").then((m) => m.DriverFormComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-MFILJPRZ.js").then((m) => m.DriverFormComponent)
  }
];
export {
  driverRoutes
};
//# sourceMappingURL=chunk-ITBAJ7ME.js.map
