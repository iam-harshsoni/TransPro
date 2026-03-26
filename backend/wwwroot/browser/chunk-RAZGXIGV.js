import "./chunk-GOMI4DH3.js";

// src/app/features/trips/trip.routes.ts
var tripRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-WCZHUQDC.js").then((m) => m.TripListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-DIWJVIZI.js").then((m) => m.TripFormComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-QJG6AXVK.js").then((m) => m.TripDetailComponent)
  }
];
export {
  tripRoutes
};
//# sourceMappingURL=chunk-RAZGXIGV.js.map
