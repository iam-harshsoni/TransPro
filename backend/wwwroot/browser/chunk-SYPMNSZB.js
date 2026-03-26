import {
  ToggleSwitch,
  ToggleSwitchModule
} from "./chunk-QBCYL52F.js";
import {
  DriverService
} from "./chunk-YJCLVRCI.js";
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
import "./chunk-VXGQDH4M.js";
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FOYF73X5.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/drivers/pages/driver-form/driver-form.component.ts
function DriverFormComponent_Conditional_25_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Full Name is required. ");
  }
}
function DriverFormComponent_Conditional_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Max 100 characters. ");
  }
}
function DriverFormComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275conditionalCreate(1, DriverFormComponent_Conditional_25_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, DriverFormComponent_Conditional_25_Conditional_2_Template, 1, 0);
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
function DriverFormComponent_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " License Number is required. ");
  }
}
function DriverFormComponent_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Max 100 characters. ");
  }
}
function DriverFormComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275conditionalCreate(1, DriverFormComponent_Conditional_32_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, DriverFormComponent_Conditional_32_Conditional_2_Template, 1, 0);
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
function DriverFormComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, "Phone is required.");
    \u0275\u0275elementEnd();
  }
}
function DriverFormComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, " Availability ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 22)(3, "div", 23)(4, "div", 24)(5, "span", 25);
    \u0275\u0275text(6, "Driver Availability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 26);
    \u0275\u0275text(8, " Toggle whether this driver is available for new trip assignments. Cannot be marked available if driver has an active trip in transit. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 27);
    \u0275\u0275element(10, "p-toggleswitch", 28);
    \u0275\u0275elementStart(11, "span", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275classProp("status-available", (tmp_1_0 = ctx_r0.form.get("isAvailable")) == null ? null : tmp_1_0.value)("status-unavailable", !((tmp_2_0 = ctx_r0.form.get("isAvailable")) == null ? null : tmp_2_0.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r0.form.get("isAvailable")) == null ? null : tmp_3_0.value) ? "Available" : "Unavailable", " ");
  }
}
var DriverFormComponent = class _DriverFormComponent {
  fb = inject(FormBuilder);
  driverService = inject(DriverService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  messageService = inject(MessageService);
  originalAvailability = true;
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
        this.originalAvailability = driver.data.isAvailable;
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
    const formValue = this.form.value;
    const dto = {
      fullName: formValue.fullName,
      licenseNumber: formValue.licenseNumber,
      phone: formValue.phone
    };
    const currentAvailability = formValue.isAvailable;
    const availabilityChanged = this.isEditMode() && currentAvailability !== this.originalAvailability;
    if (this.isEditMode()) {
      this.driverService.update(this.driverId(), formValue).subscribe({
        next: () => {
          if (availabilityChanged) {
            this.driverService.toggleAvailability(this.driverId()).subscribe({
              next: (response) => {
                this.messageService.add({
                  severity: "success",
                  summary: "Updated",
                  detail: "Driver updated successfully"
                });
                this.isSaving.set(false);
                setTimeout(() => this.router.navigate(["/drivers"]), 1500);
              },
              error: (err) => {
                const errorMsg = err.error?.message ?? "Driver updated but availability could not be changed";
                this.messageService.add({
                  severity: "warn",
                  summary: "Partially Saved",
                  detail: errorMsg,
                  life: 6e3
                });
                this.isSaving.set(false);
                setTimeout(() => this.router.navigate(["/drivers"]), 2e3);
              }
            });
          } else {
            this.messageService.add({
              severity: "success",
              summary: "Updated",
              detail: "Driver updated successfully"
            });
            this.isSaving.set(false);
            setTimeout(() => this.router.navigate(["/drivers"]), 1500);
          }
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverFormComponent, selectors: [["app-driver-form"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 44, vars: 16, consts: [[1, "page-header"], [1, "breadcrumb-trail"], [1, "pi", "pi-angle-right"], [1, "breadcrumb-link", 3, "click"], [1, "page-title"], [1, "form-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "form-grid-2"], [1, "form-field"], [1, "form-label"], [1, "required-star"], ["pInputText", "", "formControlName", "fullName", "placeholder", "Enter driver full name"], [1, "error-msg"], ["pInputText", "", "formControlName", "licenseNumber", "placeholder", "Enter driver full name"], ["pInputText", "", "formControlName", "phone", "placeholder", "Enter phone number"], [1, "form-actions"], ["label", "Cancel", "severity", "secondary", 3, "onClick", "outlined"], ["icon", "pi pi-check", "type", "submit", 3, "label", "loading"], [1, "form-section-title", 2, "margin-top", "1.5rem"], [1, "availability-form-section"], [1, "availability-toggle-row"], [1, "availability-info"], [1, "availability-title"], [1, "availability-desc"], [1, "availability-control"], ["formControlName", "isAvailable"], [1, "availability-status-label"]], template: function DriverFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      \u0275\u0275text(3, " Home ");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275elementStart(5, "a", 3);
      \u0275\u0275listener("click", function DriverFormComponent_Template_a_click_5_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(6, "Driver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "i", 2);
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5)(13, "div", 6)(14, "span", 7);
      \u0275\u0275text(15, "Driver Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 8)(17, "form", 9);
      \u0275\u0275listener("ngSubmit", function DriverFormComponent_Template_form_ngSubmit_17_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(18, "div", 10)(19, "div", 11)(20, "label", 12);
      \u0275\u0275text(21, " Driver Name ");
      \u0275\u0275elementStart(22, "span", 13);
      \u0275\u0275text(23, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(24, "input", 14);
      \u0275\u0275conditionalCreate(25, DriverFormComponent_Conditional_25_Template, 3, 2, "small", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 11)(27, "label", 12);
      \u0275\u0275text(28, " License Number ");
      \u0275\u0275elementStart(29, "span", 13);
      \u0275\u0275text(30, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(31, "input", 16);
      \u0275\u0275conditionalCreate(32, DriverFormComponent_Conditional_32_Template, 3, 2, "small", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 11)(34, "label", 12);
      \u0275\u0275text(35, " Phone ");
      \u0275\u0275elementStart(36, "span", 13);
      \u0275\u0275text(37, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(38, "input", 17);
      \u0275\u0275conditionalCreate(39, DriverFormComponent_Conditional_39_Template, 2, 0, "small", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(40, DriverFormComponent_Conditional_40_Template, 13, 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 18)(42, "p-button", 19);
      \u0275\u0275listener("onClick", function DriverFormComponent_Template_p_button_onClick_42_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "p-button", 20);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.isEditMode() ? "Edit Driver" : "New Driver");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode() ? "Edit Driver" : "New Driver");
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("input-error", ctx.isInvalid("fullName"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("fullName") ? 25 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("input-error", ctx.isInvalid("licenseNumber"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("licenseNumber") ? 32 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("input-error", ctx.isInvalid("phone"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("phone") ? 39 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEditMode() ? 40 : -1);
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
        <a class="breadcrumb-link" (click)="onCancel()">Driver</a>
        <i class="pi pi-angle-right"></i>
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

                @if(isEditMode()) {
                <div class="form-section-title" style="margin-top: 1.5rem">
                    Availability
                </div>

                <div class="availability-form-section">
                    <div class="availability-toggle-row">
                        <div class="availability-info">
                            <span class="availability-title">Driver Availability</span>
                            <span class="availability-desc">
                                Toggle whether this driver is available for new trip assignments.
                                Cannot be marked available if driver has an active trip in transit.
                            </span>
                        </div>

                        <div class="availability-control">
                            <p-toggleswitch formControlName="isAvailable" />
                            <span class="availability-status-label"
                                [class.status-available]="form.get('isAvailable')?.value"
                                [class.status-unavailable]="!form.get('isAvailable')?.value">
                                {{ form.get('isAvailable')?.value ? 'Available' : 'Unavailable' }}
                            </span>
                        </div>
                    </div>
                </div>
                }
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverFormComponent, { className: "DriverFormComponent", filePath: "src/app/features/drivers/pages/driver-form/driver-form.component.ts", lineNumber: 29 });
})();
export {
  DriverFormComponent
};
//# sourceMappingURL=chunk-SYPMNSZB.js.map
