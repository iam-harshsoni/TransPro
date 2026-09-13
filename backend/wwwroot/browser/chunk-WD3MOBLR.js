import "./chunk-GOMI4DH3.js";

// src/app/features/trips/trip.routes.ts
var tripRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-BXPDJ36V.js").then((m) => m.TripListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-3M4G47UM.js").then((m) => m.TripFormComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-VDRAE4JP.js").then((m) => m.TripDetailComponent)
  }
];
export {
  tripRoutes
};
//# sourceMappingURL=chunk-WD3MOBLR.js.map
