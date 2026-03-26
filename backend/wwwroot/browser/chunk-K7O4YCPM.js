import "./chunk-GOMI4DH3.js";

// src/app/features/trips/trip.routes.ts
var tripRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-MISTW3KH.js").then((m) => m.TripListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-CAOBEPR3.js").then((m) => m.TripFormComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-QJG6AXVK.js").then((m) => m.TripDetailComponent)
  }
];
export {
  tripRoutes
};
//# sourceMappingURL=chunk-K7O4YCPM.js.map
