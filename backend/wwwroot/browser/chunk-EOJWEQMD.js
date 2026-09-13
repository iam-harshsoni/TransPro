import "./chunk-GOMI4DH3.js";

// src/app/features/trucks/truck.routes.ts
var truckRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-UXX3COQL.js").then((m) => m.TruckListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-J4DILLUG.js").then((m) => m.TruckFormComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-J4DILLUG.js").then((m) => m.TruckFormComponent)
  }
];
export {
  truckRoutes
};
//# sourceMappingURL=chunk-EOJWEQMD.js.map
