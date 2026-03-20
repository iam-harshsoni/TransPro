import "./chunk-GOMI4DH3.js";

// src/app/features/trucks/truck.routes.ts
var truckRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-VKCAZJDU.js").then((m) => m.TruckListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-4JQK5MOJ.js").then((m) => m.TruckFormComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-4JQK5MOJ.js").then((m) => m.TruckFormComponent)
  }
];
export {
  truckRoutes
};
//# sourceMappingURL=chunk-IKQYQZNK.js.map
