import {
  CustomerService
} from "./chunk-MFJ4XGM3.js";
import {
  ToggleSwitch,
  ToggleSwitchModule
} from "./chunk-MBGFM2UD.js";
import "./chunk-4EYY5C3L.js";
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

// src/app/features/customers/pages/customer-form/customer-form.component.ts
function CustomerFormComponent_Conditional_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Full Name is required. ");
  }
}
function CustomerFormComponent_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Max 100 characters. ");
  }
}
function CustomerFormComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 14);
    \u0275\u0275conditionalCreate(1, CustomerFormComponent_Conditional_24_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, CustomerFormComponent_Conditional_24_Conditional_2_Template, 1, 0);
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
function CustomerFormComponent_Conditional_31_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Email is required. ");
  }
}
function CustomerFormComponent_Conditional_31_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter a valid email. ");
  }
}
function CustomerFormComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 14);
    \u0275\u0275conditionalCreate(1, CustomerFormComponent_Conditional_31_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, CustomerFormComponent_Conditional_31_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.form.get("email")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.form.get("email")) == null ? null : tmp_2_0.hasError("email")) ? 2 : -1);
  }
}
function CustomerFormComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 14);
    \u0275\u0275text(1, "Phone is required.");
    \u0275\u0275elementEnd();
  }
}
function CustomerFormComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 14);
    \u0275\u0275text(1, "Address is required.");
    \u0275\u0275elementEnd();
  }
}
var CustomerFormComponent = class _CustomerFormComponent {
  fb = inject(FormBuilder);
  customerService = inject(CustomerService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  messageService = inject(MessageService);
  // Signals for component state
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
  customerId = signal(null, ...ngDevMode ? [{ debugName: "customerId" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.group({
    fullName: ["", [Validators.required, Validators.maxLength(100)]],
    email: ["", [Validators.required, Validators.email]],
    phone: ["", [Validators.required, Validators.maxLength(20)]],
    address: ["", [Validators.required, Validators.maxLength(250)]],
    isActive: [true]
  });
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get("id");
    if (idParam) {
      this.isEditMode.set(true);
      this.customerId.set(Number(idParam));
      this.loadCustomer(Number(idParam));
    }
  }
  loadCustomer(id) {
    this.isLoading.set(false);
    this.customerService.getById(id).subscribe({
      next: (customer) => {
        this.form.patchValue({
          fullName: customer.data.fullName,
          email: customer.data.email,
          phone: customer.data.phone,
          address: customer.data.address,
          isActive: customer.data.isActive
        });
        this.isLoading.set(false);
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load customer"
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
      this.customerService.update(this.customerId(), this.form.value).subscribe({
        next: () => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            detail: "Customer updated successfully"
          });
          this.isSaving.set(false);
          setTimeout(() => this.router.navigate(["/customers"]), 1500);
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
      this.customerService.create(this.form.value).subscribe({
        next: () => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            detail: "Customer created successfully"
          });
          this.isSaving.set(false);
          setTimeout(() => this.router.navigate(["/customers"]), 1500);
        },
        error: () => {
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail: "Failed to create customer"
          });
          this.isSaving.set(false);
        }
      });
    }
  }
  onCancel() {
    this.router.navigate(["/customers"]);
  }
  isInvalid(field) {
    const control = this.form.get(field);
    return !!(control?.invalid && control?.touched);
  }
  static \u0275fac = function CustomerFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerFormComponent, selectors: [["app-customer-form"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 56, vars: 19, consts: [[1, "page-header"], [1, "breadcrumb-trail"], [1, "pi", "pi-angle-right"], [1, "page-title"], [1, "form-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "form-grid-2"], [1, "form-field"], [1, "form-label"], [1, "required-star"], ["pInputText", "", "formControlName", "fullName", "placeholder", "Enter customer full name"], [1, "error-msg"], ["pInputText", "", "formControlName", "email", "type", "email", "placeholder", "Enter email address"], ["pInputText", "", "formControlName", "phone", "placeholder", "Enter phone number"], [1, "form-field", "form-field-full"], ["pInputText", "", "formControlName", "address", "placeholder", "Enter full address"], [1, "toggle-row"], ["formControlName", "isActive"], [1, "toggle-label"], [1, "form-actions"], ["label", "Cancel", "severity", "secondary", 3, "onClick", "outlined"], ["icon", "pi pi-check", "type", "submit", 3, "label", "loading"]], template: function CustomerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      \u0275\u0275text(3, " Home ");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Customers ");
      \u0275\u0275element(6, "i", 2);
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 3);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 4)(12, "div", 5)(13, "span", 6);
      \u0275\u0275text(14, "Customer Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 7)(16, "form", 8);
      \u0275\u0275listener("ngSubmit", function CustomerFormComponent_Template_form_ngSubmit_16_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "label", 11);
      \u0275\u0275text(20, " Customer Name ");
      \u0275\u0275elementStart(21, "span", 12);
      \u0275\u0275text(22, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "input", 13);
      \u0275\u0275conditionalCreate(24, CustomerFormComponent_Conditional_24_Template, 3, 2, "small", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 10)(26, "label", 11);
      \u0275\u0275text(27, " Email Address ");
      \u0275\u0275elementStart(28, "span", 12);
      \u0275\u0275text(29, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "input", 15);
      \u0275\u0275conditionalCreate(31, CustomerFormComponent_Conditional_31_Template, 3, 2, "small", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 10)(33, "label", 11);
      \u0275\u0275text(34, " Phone ");
      \u0275\u0275elementStart(35, "span", 12);
      \u0275\u0275text(36, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(37, "input", 16);
      \u0275\u0275conditionalCreate(38, CustomerFormComponent_Conditional_38_Template, 2, 0, "small", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 17)(40, "label", 11);
      \u0275\u0275text(41, " Address ");
      \u0275\u0275elementStart(42, "span", 12);
      \u0275\u0275text(43, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(44, "input", 18);
      \u0275\u0275conditionalCreate(45, CustomerFormComponent_Conditional_45_Template, 2, 0, "small", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 10)(47, "label", 11);
      \u0275\u0275text(48, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 19);
      \u0275\u0275element(50, "p-toggleswitch", 20);
      \u0275\u0275elementStart(51, "span", 21);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 22)(54, "p-button", 23);
      \u0275\u0275listener("onClick", function CustomerFormComponent_Template_p_button_onClick_54_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "p-button", 24);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_11_0;
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.isEditMode() ? "Edit Customer" : "New Customer");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode() ? "Edit Customer" : "New Customer");
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("input-error", ctx.isInvalid("fullName"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("fullName") ? 24 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("input-error", ctx.isInvalid("email"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("email") ? 31 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("input-error", ctx.isInvalid("phone"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("phone") ? 38 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("input-error", ctx.isInvalid("address"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("address") ? 45 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ((tmp_11_0 = ctx.form.get("isActive")) == null ? null : tmp_11_0.value) ? "Active" : "Inactive", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.isEditMode() ? "Update Customer" : "Create Customer")("loading", ctx.isSaving());
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerFormComponent, [{
    type: Component,
    args: [{ selector: "app-customer-form", imports: [
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
        Customers <i class="pi pi-angle-right"></i>
        <span>{{ isEditMode() ? 'Edit Customer' : 'New Customer' }}</span>
    </div>
    <!-- Ternary operator in template: condition ? valueIfTrue : valueIfFalse -->
    <div class="page-title">{{ isEditMode() ? 'Edit Customer' : 'New Customer' }}</div>
</div>

<div class="form-card">
    <div class="card-header">
        <span class="card-title">Customer Information</span>
    </div>

    <div class="card-body">

        <!--
      [formGroup]="form" connects this HTML form to our TypeScript FormGroup.
      (ngSubmit) fires when form is submitted (Enter key or submit button).
      This replaces traditional HTML form submission entirely.
    -->
        <form [formGroup]="form" (ngSubmit)="onSubmit()">

            <div class="form-grid-2">

                <!-- Name Field -->
                <div class="form-field">
                    <label class="form-label">
                        Customer Name <span class="required-star">*</span>
                    </label>
                    <!--
            formControlName="name" links this input to the 'name' FormControl.
            [class.ng-invalid-touched] adds error styling when field is invalid.
            pInputText is PrimeNG's styled input directive.
          -->
                    <input pInputText formControlName="fullName" placeholder="Enter customer full name"
                        [class.input-error]="isInvalid('fullName')" />
                    <!-- Error messages \u2014 only visible when field is invalid and touched -->
                    @if (isInvalid('fullName')) {
                    <small class="error-msg">
                        @if (form.get('fullName')?.hasError('required')) { Full Name is required. }
                        @if (form.get('fullName')?.hasError('maxlength')) { Max 100 characters. }
                    </small>
                    }
                </div>

                <!-- Email Field -->
                <div class="form-field">
                    <label class="form-label">
                        Email Address <span class="required-star">*</span>
                    </label>
                    <input pInputText formControlName="email" type="email" placeholder="Enter email address"
                        [class.input-error]="isInvalid('email')" />
                    @if (isInvalid('email')) {
                    <small class="error-msg">
                        @if (form.get('email')?.hasError('required')) { Email is required. }
                        @if (form.get('email')?.hasError('email')) { Enter a valid email. }
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

                <!-- Address Field \u2014 spans full width -->
                <div class="form-field form-field-full">
                    <label class="form-label">
                        Address <span class="required-star">*</span>
                    </label>
                    <input pInputText formControlName="address" placeholder="Enter full address"
                        [class.input-error]="isInvalid('address')" />
                    @if (isInvalid('address')) {
                    <small class="error-msg">Address is required.</small>
                    }
                </div>

                <!-- Active Toggle -->
                <div class="form-field">
                    <label class="form-label">Status</label>
                    <div class="toggle-row">
                        <!--
              p-toggleswitch is PrimeNG's toggle component.
              formControlName links it to the isActive FormControl.
            -->
                        <p-toggleswitch formControlName="isActive" />
                        <span class="toggle-label">
                            {{ form.get('isActive')?.value ? 'Active' : 'Inactive' }}
                        </span>
                    </div>
                </div>

            </div>

            <!-- Form Actions -->
            <div class="form-actions">
                <p-button label="Cancel" severity="secondary" [outlined]="true" (onClick)="onCancel()" />
                <p-button [label]="isEditMode() ? 'Update Customer' : 'Create Customer'" icon="pi pi-check"
                    type="submit" [loading]="isSaving()" />
            </div>

        </form>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerFormComponent, { className: "CustomerFormComponent", filePath: "src/app/features/customers/pages/customer-form/customer-form.component.ts", lineNumber: 27 });
})();
export {
  CustomerFormComponent
};
//# sourceMappingURL=chunk-JHZ7G7P4.js.map
