import "./chunk-GOMI4DH3.js";

// src/app/features/containers/containers.routes.ts
var containerRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-E7GLBEXA.js").then((m) => m.ContainerListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-JFNLBFG7.js").then((m) => m.ContainerFormComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-JFNLBFG7.js").then((m) => m.ContainerFormComponent)
  }
];
export {
  containerRoutes
};
//# sourceMappingURL=chunk-6LQBCM3R.js.map
