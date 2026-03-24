import "./chunk-GOMI4DH3.js";

// src/app/features/trucks/truck.routes.ts
var truckRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-KEOXXIFJ.js").then((m) => m.TruckListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-OT2JMKV2.js").then((m) => m.TruckFormComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-OT2JMKV2.js").then((m) => m.TruckFormComponent)
  }
];
export {
  truckRoutes
};
//# sourceMappingURL=chunk-KNC2KSBF.js.map
