import {
  DatePipe
} from "./chunk-W2QCZGFP.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-FOYF73X5.js";

// src/app/pipes/format-date-pipe.ts
var FormatDatePipe = class _FormatDatePipe {
  datePipe = new DatePipe("en-US");
  transform(value) {
    if (!value) {
      return "";
    }
    return this.datePipe.transform(value, "yyyy-MM-dd") ?? "";
  }
  static \u0275fac = function FormatDatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormatDatePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "formatDate", type: _FormatDatePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormatDatePipe, [{
    type: Pipe,
    args: [{
      name: "formatDate",
      standalone: true
    }]
  }], null, null);
})();

export {
  FormatDatePipe
};
//# sourceMappingURL=chunk-HLBOBYPE.js.map
