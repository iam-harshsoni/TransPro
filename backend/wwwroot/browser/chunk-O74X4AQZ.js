import {
  RouteService
} from "./chunk-HUNBBSGK.js";
import {
  SelectModule
} from "./chunk-KDKLZREL.js";
import "./chunk-AEYWZSNI.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-QT2PH3AY.js";
import "./chunk-3PKWPBB4.js";
import "./chunk-FN7QHWDI.js";
import "./chunk-5LDHMQOW.js";
import {
  ToggleSwitchModule
} from "./chunk-QBCYL52F.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-WHVTFN2L.js";
import {
  Toast,
  ToastModule
} from "./chunk-RJSKT7PE.js";
import "./chunk-U7IY62MS.js";
import {
  ActivatedRoute,
  Button,
  ButtonModule,
  CommonModule,
  MessageService,
  Router
} from "./chunk-MM7SKLVI.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-FOYF73X5.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/routes/pages/route-form/route-form.component.ts
function RouteFormComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Origin is required. ");
  }
}
function RouteFormComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275conditionalCreate(1, RouteFormComponent_Conditional_27_Conditional_1_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.form.get("origin")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
  }
}
function RouteFormComponent_Conditional_34_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Destination is required. ");
  }
}
function RouteFormComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275conditionalCreate(1, RouteFormComponent_Conditional_34_Conditional_1_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.form.get("destination")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
  }
}
function RouteFormComponent_Conditional_41_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Distance is required. ");
  }
}
function RouteFormComponent_Conditional_41_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Distance must be at least 0.1 km. ");
  }
}
function RouteFormComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275conditionalCreate(1, RouteFormComponent_Conditional_41_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, RouteFormComponent_Conditional_41_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.form.get("distanceKm")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.form.get("distanceKm")) == null ? null : tmp_2_0.hasError("min")) ? 2 : -1);
  }
}
function RouteFormComponent_Conditional_48_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Estimated hours is required. ");
  }
}
function RouteFormComponent_Conditional_48_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Must be at least 0.1 hours. ");
  }
}
function RouteFormComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275conditionalCreate(1, RouteFormComponent_Conditional_48_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, RouteFormComponent_Conditional_48_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.form.get("estimatedHours")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.form.get("estimatedHours")) == null ? null : tmp_2_0.hasError("min")) ? 2 : -1);
  }
}
var RouteFormComponent = class _RouteFormComponent {
  fb = inject(FormBuilder);
  routesService = inject(RouteService);
  messageService = inject(MessageService);
  activatedRoute = inject(ActivatedRoute);
  //ActivatedRoute gives us the :id from the URL
  router = inject(Router);
  //Signals
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isSaving = signal(false, ...ngDevMode ? [{ debugName: "isSaving" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditMode = signal(false, ...ngDevMode ? [{ debugName: "isEditMode" }] : (
    /* istanbul ignore next */
    []
  ));
  routeId = signal(null, ...ngDevMode ? [{ debugName: "routeId" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.group({
    origin: ["", [Validators.required, Validators.maxLength(100)]],
    destination: ["", [Validators.required, Validators.maxLength(100)]],
    // distanceKm — decimal number, min 0.1 km
    distanceKm: [null, [Validators.required, Validators.min(0.1)]],
    // estimatedHours — decimal e.g. 2.5 = 2 hours 30 minutes
    estimatedHours: [null, [Validators.required, Validators.min(0.1)]]
  });
  ngOnInit() {
    const idParam = this.activatedRoute.snapshot.paramMap.get("id");
    if (idParam) {
      this.isEditMode.set(true);
      this.routeId.set(Number(idParam));
      this.loadRoutes(Number(idParam));
    }
  }
  loadRoutes(id) {
    this.routesService.getById(id).subscribe({
      next: (request) => {
        this.form.patchValue({
          origin: request.data.origin,
          destination: request.data.destination,
          distanceKm: request.data.distanceKm,
          estimatedHours: request.data.estimatedHours
        });
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load route"
        });
        this.isLoading.set(false);
      }
    });
  }
  onSubmit() {
    this.form.markAsTouched();
    if (this.form.invalid)
      return;
    this.isSaving.set(true);
    const request$ = this.isEditMode() ? this.routesService.update(this.routeId(), this.form.value) : this.routesService.create(this.form.value);
    request$.subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: this.isEditMode() ? "Updated" : "Created",
          detail: `Route ${this.isEditMode() ? "updated" : "created"} successfully`
        });
        this.isSaving.set(false);
        setTimeout(() => this.router.navigate(["/routes"]), 1500);
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: `Failed to ${this.isEditMode() ? "update" : "create"} route`
        });
        this.isSaving.set(false);
      }
    });
  }
  onCancel() {
    this.router.navigate(["/routes"]);
  }
  isInvalid(field) {
    const control = this.form.get(field);
    return !!(control?.invalid && control?.touched);
  }
  static \u0275fac = function RouteFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouteFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RouteFormComponent, selectors: [["app-route-form"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 54, vars: 24, consts: [[1, "page-header"], [1, "breadcrumb-trail"], [1, "pi", "pi-angle-right"], [1, "breadcrumb-link", 3, "click"], [1, "page-title"], [1, "form-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "form-section-title"], [1, "form-grid-2"], [1, "form-field"], [1, "form-label"], [1, "required-star"], ["pInputText", "", "formControlName", "origin", "placeholder", "e.g. Mumbai"], [1, "error-msg"], ["pInputText", "", "formControlName", "destination", "placeholder", "e.g. Delhi"], ["formControlName", "distanceKm", "suffix", " km", "placeholder", "Enter distance", "styleClass", "w-full", 3, "min", "minFractionDigits", "maxFractionDigits"], ["formControlName", "estimatedHours", "suffix", " hrs", "placeholder", "e.g. 2.5 for 2h 30m", "styleClass", "w-full", 3, "min", "minFractionDigits", "maxFractionDigits"], [1, "form-hint"], [1, "form-actions"], ["label", "Cancel", "severity", "secondary", 3, "onClick", "outlined"], ["icon", "pi pi-check", "type", "submit", 3, "label", "loading"]], template: function RouteFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      \u0275\u0275text(3, " Home ");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275elementStart(5, "a", 3);
      \u0275\u0275listener("click", function RouteFormComponent_Template_a_click_5_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(6, "Routes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "i", 2);
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5)(13, "div", 6)(14, "span", 7);
      \u0275\u0275text(15, "Route Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 8)(17, "form", 9);
      \u0275\u0275listener("ngSubmit", function RouteFormComponent_Template_form_ngSubmit_17_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(18, "div", 10);
      \u0275\u0275text(19, "Route Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 11)(21, "div", 12)(22, "label", 13);
      \u0275\u0275text(23, " Origin ");
      \u0275\u0275elementStart(24, "span", 14);
      \u0275\u0275text(25, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "input", 15);
      \u0275\u0275conditionalCreate(27, RouteFormComponent_Conditional_27_Template, 2, 1, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 12)(29, "label", 13);
      \u0275\u0275text(30, " Destination ");
      \u0275\u0275elementStart(31, "span", 14);
      \u0275\u0275text(32, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(33, "input", 17);
      \u0275\u0275conditionalCreate(34, RouteFormComponent_Conditional_34_Template, 2, 1, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 12)(36, "label", 13);
      \u0275\u0275text(37, " Distance (km) ");
      \u0275\u0275elementStart(38, "span", 14);
      \u0275\u0275text(39, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(40, "p-inputnumber", 18);
      \u0275\u0275conditionalCreate(41, RouteFormComponent_Conditional_41_Template, 3, 2, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 12)(43, "label", 13);
      \u0275\u0275text(44, " Estimated Duration (hours) ");
      \u0275\u0275elementStart(45, "span", 14);
      \u0275\u0275text(46, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(47, "p-inputnumber", 19);
      \u0275\u0275conditionalCreate(48, RouteFormComponent_Conditional_48_Template, 3, 2, "small", 16);
      \u0275\u0275elementStart(49, "small", 20);
      \u0275\u0275text(50, " Enter decimal hours \u2014 e.g. 1.5 = 1 hour 30 minutes ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "div", 21)(52, "p-button", 22);
      \u0275\u0275listener("onClick", function RouteFormComponent_Template_p_button_onClick_52_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "p-button", 23);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.isEditMode() ? "Edit Route" : "New Route");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode() ? "Edit Route" : "New Route");
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("input-error", ctx.isInvalid("origin"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("origin") ? 27 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("input-error", ctx.isInvalid("destination"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("destination") ? 34 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("input-error", ctx.isInvalid("distanceKm"));
      \u0275\u0275property("min", 0.1)("minFractionDigits", 1)("maxFractionDigits", 2);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("distanceKm") ? 41 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("input-error", ctx.isInvalid("estimatedHours"));
      \u0275\u0275property("min", 0.1)("minFractionDigits", 1)("maxFractionDigits", 2);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("estimatedHours") ? 48 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.isEditMode() ? "Update Route" : "Create Route")("loading", ctx.isSaving());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    InputTextModule,
    InputText,
    ButtonModule,
    Button,
    ToastModule,
    Toast,
    ToggleSwitchModule,
    SelectModule,
    InputNumberModule,
    InputNumber
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteFormComponent, [{
    type: Component,
    args: [{ selector: "app-route-form", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      InputTextModule,
      ButtonModule,
      ToastModule,
      ToggleSwitchModule,
      SelectModule,
      InputNumberModule
    ], providers: [MessageService], template: `<p-toast />

<div class="page-header">
    <div class="breadcrumb-trail">
        Home <i class="pi pi-angle-right"></i>
        <a class="breadcrumb-link" (click)="onCancel()">Routes</a>
        <i class="pi pi-angle-right"></i>
        <span>{{ isEditMode() ? 'Edit Route' : 'New Route' }}</span>
    </div>
    <div class="page-title">{{ isEditMode() ? 'Edit Route' : 'New Route' }}</div>
</div>

<div class="form-card">
    <div class="card-header">
        <span class="card-title">Route Information</span>
    </div>

    <div class="card-body">
        <form [formGroup]="form" (ngSubmit)="onSubmit()">

            <div class="form-section-title">Route Details</div>

            <div class="form-grid-2">
                <div class="form-field">
                    <label class="form-label">
                        Origin <span class="required-star">*</span>
                    </label>
                    <input pInputText formControlName="origin" placeholder="e.g. Mumbai"
                        [class.input-error]="isInvalid('origin')" />
                    @if (isInvalid('origin')) {
                    <small class="error-msg">
                        @if (form.get('origin')?.hasError('required')) {
                        Origin is required.
                        }
                    </small>
                    }
                </div>

                <div class="form-field">
                    <label class="form-label">
                        Destination <span class="required-star">*</span>
                    </label>
                    <input pInputText formControlName="destination" placeholder="e.g. Delhi"
                        [class.input-error]="isInvalid('destination')" />
                    @if (isInvalid('destination')) {
                    <small class="error-msg">
                        @if (form.get('destination')?.hasError('required')) {
                        Destination is required.
                        }
                    </small>
                    }
                </div>

                <div class="form-field">
                    <label class="form-label">
                        Distance (km) <span class="required-star">*</span>
                    </label>

                    <p-inputnumber formControlName="distanceKm" [min]="0.1" [minFractionDigits]="1"
                        [maxFractionDigits]="2" suffix=" km" placeholder="Enter distance"
                        [class.input-error]="isInvalid('distanceKm')" styleClass="w-full" />
                    @if (isInvalid('distanceKm')) {
                    <small class="error-msg">
                        @if (form.get('distanceKm')?.hasError('required')) {
                        Distance is required.
                        }
                        @if (form.get('distanceKm')?.hasError('min')) {
                        Distance must be at least 0.1 km.
                        }
                    </small>
                    }
                </div>

                <div class="form-field">
                    <label class="form-label">
                        Estimated Duration (hours) <span class="required-star">*</span>
                    </label>

                    <p-inputnumber formControlName="estimatedHours" [min]="0.1" [minFractionDigits]="1"
                        [maxFractionDigits]="2" suffix=" hrs" placeholder="e.g. 2.5 for 2h 30m"
                        [class.input-error]="isInvalid('estimatedHours')" styleClass="w-full" />
                    @if (isInvalid('estimatedHours')) {
                    <small class="error-msg">
                        @if (form.get('estimatedHours')?.hasError('required')) {
                        Estimated hours is required.
                        }
                        @if (form.get('estimatedHours')?.hasError('min')) {
                        Must be at least 0.1 hours.
                        }
                    </small>
                    }
                    <small class="form-hint">
                        Enter decimal hours \u2014 e.g. 1.5 = 1 hour 30 minutes
                    </small>
                </div>

            </div>

            <div class="form-actions">
                <p-button label="Cancel" severity="secondary" [outlined]="true" (onClick)="onCancel()" />
                <p-button [label]="isEditMode() ? 'Update Route' : 'Create Route'" icon="pi pi-check" type="submit"
                    [loading]="isSaving()" />
            </div>

        </form>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RouteFormComponent, { className: "RouteFormComponent", filePath: "src/app/features/routes/pages/route-form/route-form.component.ts", lineNumber: 32 });
})();
export {
  RouteFormComponent
};
//# sourceMappingURL=chunk-O74X4AQZ.js.map
