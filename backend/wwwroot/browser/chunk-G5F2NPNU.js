import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-FOYF73X5.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/dashboard/dashboard.component.ts
var DashboardComponent = class _DashboardComponent {
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 8, vars: 0, consts: [[1, "page-header"], [1, "breadcrumb-trail"], [1, "pi", "pi-angle-right"], [1, "page-title"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, " Home ");
      \u0275\u0275domElement(3, "i", 2);
      \u0275\u0275domElementStart(4, "span");
      \u0275\u0275text(5, "Dashboard");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 3);
      \u0275\u0275text(7, "Dashboard");
      \u0275\u0275domElementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [], template: '<div class="page-header">\r\n    <div class="breadcrumb-trail">\r\n        Home <i class="pi pi-angle-right"></i>\r\n        <span>Dashboard</span>\r\n    </div>\r\n    <div class="page-title">Dashboard</div>\r\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 9 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-G5F2NPNU.js.map
