import "./chunk-GOMI4DH3.js";

// src/app/features/containers/containers.routes.ts
var containerRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-WN5NWIYI.js").then((m) => m.ContainerListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-P5JZSGC5.js").then((m) => m.ContainerFormComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-P5JZSGC5.js").then((m) => m.ContainerFormComponent)
  }
];
export {
  containerRoutes
};
//# sourceMappingURL=chunk-DO5I4UCR.js.map
