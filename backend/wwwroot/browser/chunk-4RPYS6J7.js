import "./chunk-GOMI4DH3.js";

// src/app/features/containers/containers.routes.ts
var containerRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-4SFMPTLY.js").then((m) => m.ContainerListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-5LNLIR4Z.js").then((m) => m.ContainerFormComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-5LNLIR4Z.js").then((m) => m.ContainerFormComponent)
  }
];
export {
  containerRoutes
};
//# sourceMappingURL=chunk-4RPYS6J7.js.map
