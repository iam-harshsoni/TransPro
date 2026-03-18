import "./chunk-GOMI4DH3.js";

// src/app/features/trucks/truck.routes.ts
var truckRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-WTTWVOU2.js").then((m) => m.TruckListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-O4NSJXXG.js").then((m) => m.TruckFormComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-O4NSJXXG.js").then((m) => m.TruckFormComponent)
  }
];
export {
  truckRoutes
};
//# sourceMappingURL=chunk-PXXDATU7.js.map
