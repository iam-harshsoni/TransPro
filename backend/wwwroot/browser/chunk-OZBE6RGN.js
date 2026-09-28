import "./chunk-GOMI4DH3.js";

// src/app/features/containers/containers.routes.ts
var containerRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-LEZ6WX26.js").then((m) => m.ContainerListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-VL4YPH45.js").then((m) => m.ContainerFormComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-VL4YPH45.js").then((m) => m.ContainerFormComponent)
  }
];
export {
  containerRoutes
};
//# sourceMappingURL=chunk-OZBE6RGN.js.map
