import "./chunk-GOMI4DH3.js";

// src/app/features/trucks/truck.routes.ts
var truckRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-EKOVJGAT.js").then((m) => m.TruckListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-E5WJFIT5.js").then((m) => m.TruckFormComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-E5WJFIT5.js").then((m) => m.TruckFormComponent)
  }
];
export {
  truckRoutes
};
//# sourceMappingURL=chunk-BBORBAAE.js.map
