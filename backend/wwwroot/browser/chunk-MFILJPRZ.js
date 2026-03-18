import {
  ToggleSwitch,
  ToggleSwitchModule
} from "./chunk-MBGFM2UD.js";
import {
  DriverService
} from "./chunk-APWD6BC4.js";
import "./chunk-E3RJNTKN.js";
import {
  Button,
  ButtonModule,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Toast,
  ToastModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-X7K774KH.js";
import {
  ActivatedRoute,
  CommonModule,
  MessageService,
  Router
} from "./chunk-F6YHHGKC.js";
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZCRCH54Z.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/drivers/pages/driver-form/driver-form.component.ts
function DriverFormComponent_Conditional_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Full Name is required. ");
  }
}
function DriverFormComponent_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Max 100 characters. ");
  }
}
function DriverFormComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 14);
    \u0275\u0275conditionalCreate(1, DriverFormComponent_Conditional_24_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, DriverFormComponent_Conditional_24_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.form.get("fullName")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.form.get("fullName")) == null ? null : tmp_2_0.hasError("maxlength")) ? 2 : -1);
  }
}
function DriverFormComponent_Conditional_31_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " License Number is required. ");
  }
}
function DriverFormComponent_Conditional_31_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Max 100 characters. ");
  }
}
function DriverFormComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 14);
    \u0275\u0275conditionalCreate(1, DriverFormComponent_Conditional_31_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, DriverFormComponent_Conditional_31_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.form.get("licenseNumber")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.form.get("licenseNumber")) == null ? null : tmp_2_0.hasError("maxlength")) ? 2 : -1);
  }
}
function DriverFormComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 14);
    \u0275\u0275text(1, "Phone is required.");
    \u0275\u0275elementEnd();
  }
}
var DriverFormComponent = class _DriverFormComponent {
  fb = inject(FormBuilder);
  driverService = inject(DriverService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  messageService = inject(MessageService);
  // signals
  isEditMode = signal(false, ...ngDevMode ? [{ debugName: "isEditMode" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isSaving = signal(false, ...ngDevMode ? [{ debugName: "isSaving" }] : (
    /* istanbul ignore next */
    []
  ));
  driverId = signal(null, ...ngDevMode ? [{ debugName: "driverId" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.group({
    fullName: ["", [Validators.required, Validators.maxLength(100)]],
    licenseNumber: ["", [Validators.required, Validators.maxLength(100)]],
    phone: ["", [Validators.required, Validators.maxLength(20)]],
    isAvailable: [true]
  });
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get("id");
    if (idParam) {
      this.isEditMode.set(true);
      this.driverId.set(Number(idParam));
      this.loadDriver(Number(idParam));
    }
  }
  loadDriver(id) {
    this.isLoading.set(true);
    this.driverService.getById(id).subscribe({
      next: (driver) => {
        this.form.patchValue({
          fullName: driver.data.fullName,
          licenseNumber: driver.data.licenseNumber,
          phone: driver.data.phone,
          isAvailable: driver.data.isAvailable
        });
        this.isLoading.set(false);
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load driver"
        });
        this.isLoading.set(false);
      }
    });
  }
  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid)
      return;
    this.isSaving.set(true);
    if (this.isEditMode()) {
      this.driverService.update(this.driverId(), this.form.value).subscribe({
        next: () => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            detail: "Driver updated successfully"
          });
          this.isSaving.set(false);
          setTimeout(() => this.router.navigate(["/drivers"]), 1500);
        },
        error: () => {
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail: "Failed to update customer"
          });
          this.isSaving.set(false);
        }
      });
    } else {
      this.driverService.create(this.form.value).subscribe({
        next: () => {
          this.messageService.add({
            severity: "success",
            summary: "Created",
            detail: "Driver updated successfully"
          });
          this.isSaving.set(false);
          setTimeout(() => this.router.navigate(["/driver"]), 1500);
        },
        error: () => {
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail: "Failed to update driver"
          });
          this.isSaving.set(false);
        }
      });
    }
  }
  onCancel() {
    this.router.navigate(["/drivers"]);
  }
  isInvalid(field) {
    const control = this.form.get(field);
    return !!(control?.invalid && control?.touched);
  }
  static \u0275fac = function DriverFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverFormComponent, selectors: [["app-driver-form"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 49, vars: 16, consts: [[1, "page-header"], [1, "breadcrumb-trail"], [1, "pi", "pi-angle-right"], [1, "page-title"], [1, "form-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "form-grid-2"], [1, "form-field"], [1, "form-label"], [1, "required-star"], ["pInputText", "", "formControlName", "fullName", "placeholder", "Enter driver full name"], [1, "error-msg"], ["pInputText", "", "formControlName", "licenseNumber", "placeholder", "Enter driver full name"], ["pInputText", "", "formControlName", "phone", "placeholder", "Enter phone number"], [1, "toggle-row"], ["formControlName", "isAvailable"], [1, "toggle-label"], [1, "form-actions"], ["label", "Cancel", "severity", "secondary", 3, "onClick", "outlined"], ["icon", "pi pi-check", "type", "submit", 3, "label", "loading"]], template: function DriverFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      \u0275\u0275text(3, " Home ");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Driver ");
      \u0275\u0275element(6, "i", 2);
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 3);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 4)(12, "div", 5)(13, "span", 6);
      \u0275\u0275text(14, "Driver Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 7)(16, "form", 8);
      \u0275\u0275listener("ngSubmit", function DriverFormComponent_Template_form_ngSubmit_16_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "label", 11);
      \u0275\u0275text(20, " Driver Name ");
      \u0275\u0275elementStart(21, "span", 12);
      \u0275\u0275text(22, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "input", 13);
      \u0275\u0275conditionalCreate(24, DriverFormComponent_Conditional_24_Template, 3, 2, "small", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 10)(26, "label", 11);
      \u0275\u0275text(27, " License Number ");
      \u0275\u0275elementStart(28, "span", 12);
      \u0275\u0275text(29, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "input", 15);
      \u0275\u0275conditionalCreate(31, DriverFormComponent_Conditional_31_Template, 3, 2, "small", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 10)(33, "label", 11);
      \u0275\u0275text(34, " Phone ");
      \u0275\u0275elementStart(35, "span", 12);
      \u0275\u0275text(36, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(37, "input", 16);
      \u0275\u0275conditionalCreate(38, DriverFormComponent_Conditional_38_Template, 2, 0, "small", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 10)(40, "label", 11);
      \u0275\u0275text(41, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 17);
      \u0275\u0275element(43, "p-toggleswitch", 18);
      \u0275\u0275elementStart(44, "span", 19);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(46, "div", 20)(47, "p-button", 21);
      \u0275\u0275listener("onClick", function DriverFormComponent_Template_p_button_onClick_47_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "p-button", 22);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_9_0;
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.isEditMode() ? "Edit Driver" : "New Driver");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode() ? "Edit Driver" : "New Driver");
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("input-error", ctx.isInvalid("fullName"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("fullName") ? 24 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("input-error", ctx.isInvalid("licenseNumber"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("licenseNumber") ? 31 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("input-error", ctx.isInvalid("phone"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("phone") ? 38 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ((tmp_9_0 = ctx.form.get("isAvailable")) == null ? null : tmp_9_0.value) ? "Available" : "Occupied", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.isEditMode() ? "Update Driver" : "Create Driver")("loading", ctx.isSaving());
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
    ToggleSwitch
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverFormComponent, [{
    type: Component,
    args: [{ selector: "app-driver-form", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      InputTextModule,
      ButtonModule,
      ToastModule,
      ToggleSwitchModule
    ], providers: [MessageService], template: `<p-toast />

<div class="page-header">
    <div class="breadcrumb-trail">
        Home <i class="pi pi-angle-right"></i>
        Driver <i class="pi pi-angle-right"></i>
        <span>{{ isEditMode() ? 'Edit Driver' : 'New Driver' }}</span>
    </div>
    <!-- Ternary operator in template: condition ? valueIfTrue : valueIfFalse -->
    <div class="page-title">{{ isEditMode() ? 'Edit Driver' : 'New Driver' }}</div>
</div>

<div class="form-card">
    <div class="card-header">
        <span class="card-title">Driver Information</span>
    </div>

    <div class="card-body">
        <form [formGroup]="form" (ngSubmit)="onSubmit()">

            <div class="form-grid-2">

                <!-- Name Field -->
                <div class="form-field">
                    <label class="form-label">
                        Driver Name <span class="required-star">*</span>
                    </label>

                    <input pInputText formControlName="fullName" placeholder="Enter driver full name"
                        [class.input-error]="isInvalid('fullName')" />

                    @if (isInvalid('fullName')) {
                    <small class="error-msg">
                        @if (form.get('fullName')?.hasError('required')) { Full Name is required. }
                        @if (form.get('fullName')?.hasError('maxlength')) { Max 100 characters. }
                    </small>
                    }
                </div>

                <!-- License Number Field -->
                <div class="form-field">
                    <label class="form-label">
                        License Number <span class="required-star">*</span>
                    </label>

                    <input pInputText formControlName="licenseNumber" placeholder="Enter driver full name"
                        [class.input-error]="isInvalid('licenseNumber')" />

                    @if (isInvalid('licenseNumber')) {
                    <small class="error-msg">
                        @if (form.get('licenseNumber')?.hasError('required')) { License Number is required. }
                        @if (form.get('licenseNumber')?.hasError('maxlength')) { Max 100 characters. }
                    </small>
                    }
                </div>


                <!-- Phone Field -->
                <div class="form-field">
                    <label class="form-label">
                        Phone <span class="required-star">*</span>
                    </label>
                    <input pInputText formControlName="phone" placeholder="Enter phone number"
                        [class.input-error]="isInvalid('phone')" />
                    @if (isInvalid('phone')) {
                    <small class="error-msg">Phone is required.</small>
                    }
                </div>

                <!-- Available Toggle -->
                <div class="form-field">
                    <label class="form-label">Status</label>
                    <div class="toggle-row">
                        <p-toggleswitch formControlName="isAvailable" />
                        <span class="toggle-label">
                            {{ form.get('isAvailable')?.value ? 'Available' : 'Occupied' }}
                        </span>
                    </div>
                </div>

            </div>

            <!-- Form Actions -->
            <div class="form-actions">
                <p-button label="Cancel" severity="secondary" [outlined]="true" (onClick)="onCancel()" />
                <p-button [label]="isEditMode() ? 'Update Driver' : 'Create Driver'" icon="pi pi-check" type="submit"
                    [loading]="isSaving()" />
            </div>
        </form>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverFormComponent, { className: "DriverFormComponent", filePath: "src/app/features/drivers/pages/driver-form/driver-form.component.ts", lineNumber: 28 });
})();
export {
  DriverFormComponent
};
//# sourceMappingURL=chunk-MFILJPRZ.js.map
