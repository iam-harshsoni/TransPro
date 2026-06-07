import "./chunk-GOMI4DH3.js";

// src/app/features/trips/trip.routes.ts
var tripRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-BUPDGQ5Q.js").then((m) => m.TripListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-FLDEKSAN.js").then((m) => m.TripFormComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-QJBWT7A6.js").then((m) => m.TripDetailComponent)
  }
];
export {
  tripRoutes
};
//# sourceMappingURL=chunk-PMOPQP6U.js.map
