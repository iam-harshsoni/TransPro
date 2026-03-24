import "./chunk-GOMI4DH3.js";

// src/app/features/trips/trip.routes.ts
var tripRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-PD7LOFDO.js").then((m) => m.TripListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-CRXRCJNV.js").then((m) => m.TripFormComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-OJYW2PPG.js").then((m) => m.TripDetailComponent)
  }
];
export {
  tripRoutes
};
//# sourceMappingURL=chunk-KCBFM3FB.js.map
