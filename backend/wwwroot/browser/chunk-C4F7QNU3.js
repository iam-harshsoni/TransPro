import {
  ContainerService
} from "./chunk-52WEYACT.js";
import {
  Select,
  SelectModule
} from "./chunk-YEOMDTB7.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-QXZ2OK4J.js";
import "./chunk-2ABF2E5E.js";
import {
  ToggleSwitch,
  ToggleSwitchModule
} from "./chunk-MBGFM2UD.js";
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

// src/app/features/containers/pages/container-form/container-form.component.ts
function ContainerFormComponent_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Container number is required. ");
  }
}
function ContainerFormComponent_Conditional_26_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Max 50 characters. ");
  }
}
function ContainerFormComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275conditionalCreate(1, ContainerFormComponent_Conditional_26_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, ContainerFormComponent_Conditional_26_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.form.get("containerNumber")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.form.get("containerNumber")) == null ? null : tmp_2_0.hasError("maxlength")) ? 2 : -1);
  }
}
function ContainerFormComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, "Container type is required.");
    \u0275\u0275elementEnd();
  }
}
function ContainerFormComponent_Conditional_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Weight capacity is required. ");
  }
}
function ContainerFormComponent_Conditional_40_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Must be greater than 0. ");
  }
}
function ContainerFormComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275conditionalCreate(1, ContainerFormComponent_Conditional_40_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, ContainerFormComponent_Conditional_40_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.form.get("weightCapacity")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.form.get("weightCapacity")) == null ? null : tmp_2_0.hasError("min")) ? 2 : -1);
  }
}
var ContainerFormComponent = class _ContainerFormComponent {
  fb = inject(FormBuilder);
  containerService = inject(ContainerService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  messageService = inject(MessageService);
  //Signals
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
  containerId = signal(null, ...ngDevMode ? [{ debugName: "containerId" }] : (
    /* istanbul ignore next */
    []
  ));
  containerTypes = [
    { label: "Dry", value: "Dry" },
    { label: "Refer", value: "Refer" },
    { label: "Flat", value: "Flat" }
  ];
  form = this.fb.group({
    containerNumber: ["", [Validators.required, Validators.maxLength(100)]],
    type: ["", [Validators.required, Validators.maxLength(100)]],
    weightCapacity: [null, [Validators.required, Validators.min(0.1)]],
    isAvailable: [true]
  });
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get("id");
    if (idParam) {
      this.isEditMode.set(true);
      this.containerId.set(Number(idParam));
      this.loadContainer(Number(idParam));
    }
  }
  loadContainer(id) {
    this.isLoading.set(true);
    this.containerService.getById(id).subscribe({
      next: (container) => {
        this.form.patchValue({
          containerNumber: container.data.containerNumber,
          type: container.data.type,
          weightCapacity: container.data.weightCapacity,
          isAvailable: container.data.isAvailable
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
    const request$ = this.isEditMode() ? this.containerService.update(this.containerId(), this.form.value) : this.containerService.create(this.form.value);
    request$.subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: this.isEditMode() ? "Updated" : "Created",
          detail: `Container ${this.isEditMode() ? "updated" : "created"} successfully`
        });
        this.isSaving.set(false);
        setTimeout(() => this.router.navigate(["/containers"]), 1500);
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: `Failed to ${this.isEditMode() ? "update" : "create"} container`
        });
        this.isSaving.set(false);
      }
    });
  }
  onCancel() {
    this.router.navigate(["/containers"]);
  }
  isInvalid(field) {
    const control = this.form.get(field);
    return !!(control?.invalid && control?.touched);
  }
  static \u0275fac = function ContainerFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContainerFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContainerFormComponent, selectors: [["app-container-form"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 53, vars: 20, consts: [[1, "page-header"], [1, "breadcrumb-trail"], [1, "pi", "pi-angle-right"], [1, "page-title"], [1, "form-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "form-section-title"], [1, "form-grid-2"], [1, "form-field"], [1, "form-label"], [1, "required-star"], ["pInputText", "", "formControlName", "containerNumber", "placeholder", "e.g. CMAU2906501"], [1, "error-msg"], ["formControlName", "type", "optionLabel", "label", "optionValue", "value", "placeholder", "Select container type", 3, "options"], ["formControlName", "weightCapacity", "placeholder", "e.g. 25.5", "styleClass", "w-full", 3, "min", "minFractionDigits", "maxFractionDigits"], [1, "toggle-row"], ["formControlName", "isAvailable"], [1, "toggle-label"], [1, "form-hint"], [1, "form-actions"], ["label", "Cancel", "severity", "secondary", 3, "onClick", "outlined"], ["icon", "pi pi-check", "type", "submit", 3, "label", "loading"]], template: function ContainerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      \u0275\u0275text(3, " Home ");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Containers ");
      \u0275\u0275element(6, "i", 2);
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 3);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 4)(12, "div", 5)(13, "span", 6);
      \u0275\u0275text(14, "Container Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 7)(16, "form", 8);
      \u0275\u0275listener("ngSubmit", function ContainerFormComponent_Template_form_ngSubmit_16_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(17, "div", 9);
      \u0275\u0275text(18, "Container Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 10)(20, "div", 11)(21, "label", 12);
      \u0275\u0275text(22, " Container Number ");
      \u0275\u0275elementStart(23, "span", 13);
      \u0275\u0275text(24, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(25, "input", 14);
      \u0275\u0275conditionalCreate(26, ContainerFormComponent_Conditional_26_Template, 3, 2, "small", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 11)(28, "label", 12);
      \u0275\u0275text(29, " Container Type ");
      \u0275\u0275elementStart(30, "span", 13);
      \u0275\u0275text(31, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(32, "p-select", 16);
      \u0275\u0275conditionalCreate(33, ContainerFormComponent_Conditional_33_Template, 2, 0, "small", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 11)(35, "label", 12);
      \u0275\u0275text(36, " Weight Capacity (tons) ");
      \u0275\u0275elementStart(37, "span", 13);
      \u0275\u0275text(38, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(39, "p-inputnumber", 17);
      \u0275\u0275conditionalCreate(40, ContainerFormComponent_Conditional_40_Template, 3, 2, "small", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 11)(42, "label", 12);
      \u0275\u0275text(43, "Availability");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 18);
      \u0275\u0275element(45, "p-toggleswitch", 19);
      \u0275\u0275elementStart(46, "span", 20);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "small", 21);
      \u0275\u0275text(49, " Mark as Available if this container is ready to be assigned to a trip. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 22)(51, "p-button", 23);
      \u0275\u0275listener("onClick", function ContainerFormComponent_Template_p_button_onClick_51_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "p-button", 24);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_13_0;
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.isEditMode() ? "Edit Container" : "New Container");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode() ? "Edit Container" : "New Container");
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("input-error", ctx.isInvalid("containerNumber"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("containerNumber") ? 26 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("input-error", ctx.isInvalid("type"));
      \u0275\u0275property("options", ctx.containerTypes);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("type") ? 33 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("input-error", ctx.isInvalid("weightCapacity"));
      \u0275\u0275property("min", 0.1)("minFractionDigits", 1)("maxFractionDigits", 2);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("weightCapacity") ? 40 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ((tmp_13_0 = ctx.form.get("isAvailable")) == null ? null : tmp_13_0.value) ? "Available" : "Occupied", " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.isEditMode() ? "Update Container" : "Create Container")("loading", ctx.isSaving());
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
    ToggleSwitch,
    SelectModule,
    Select,
    InputNumberModule,
    InputNumber
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContainerFormComponent, [{
    type: Component,
    args: [{ selector: "app-container-form", standalone: true, imports: [
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
        Containers <i class="pi pi-angle-right"></i>
        <span>{{ isEditMode() ? 'Edit Container' : 'New Container' }}</span>
    </div>
    <div class="page-title">{{ isEditMode() ? 'Edit Container' : 'New Container' }}</div>
</div>

<div class="form-card">
    <div class="card-header">
        <span class="card-title">Container Information</span>
    </div>

    <div class="card-body">
        <form [formGroup]="form" (ngSubmit)="onSubmit()">

            <div class="form-section-title">Container Details</div>

            <div class="form-grid-2">

                <!-- Container Number -->
                <div class="form-field">
                    <label class="form-label">
                        Container Number <span class="required-star">*</span>
                    </label>

                    <input pInputText formControlName="containerNumber" placeholder="e.g. CMAU2906501"
                        [class.input-error]="isInvalid('containerNumber')" />
                    @if (isInvalid('containerNumber')) {
                    <small class="error-msg">
                        @if (form.get('containerNumber')?.hasError('required')) {
                        Container number is required.
                        }
                        @if (form.get('containerNumber')?.hasError('maxlength')) {
                        Max 50 characters.
                        }
                    </small>
                    }
                </div>

                <!-- Type Dropdown -->
                <div class="form-field">
                    <label class="form-label">
                        Container Type <span class="required-star">*</span>
                    </label>
                    <!--
                        p-select is PrimeNG's dropdown component.
                        [options] = the array of options to show
                        optionLabel = which property to display as the label
                        optionValue = which property to use as the form value
                        placeholder = shown when nothing is selected
                    -->
                    <p-select formControlName="type" [options]="containerTypes" optionLabel="label" optionValue="value"
                        placeholder="Select container type" [class.input-error]="isInvalid('type')" />
                    @if (isInvalid('type')) {
                    <small class="error-msg">Container type is required.</small>
                    }
                </div>

                <!-- Weight Capacity -->
                <div class="form-field">
                    <label class="form-label">
                        Weight Capacity (tons) <span class="required-star">*</span>
                    </label>
                    <!--
                        p-inputnumber with [minFractionDigits] and [maxFractionDigits]
                        allows decimal values like 25.9 tons.
                        [min]="0.1" prevents entering zero or negative values.
                    -->
                    <p-inputnumber formControlName="weightCapacity" [min]="0.1" [minFractionDigits]="1"
                        [maxFractionDigits]="2" placeholder="e.g. 25.5" styleClass="w-full"
                        [class.input-error]="isInvalid('weightCapacity')" />
                    @if (isInvalid('weightCapacity')) {
                    <small class="error-msg">
                        @if (form.get('weightCapacity')?.hasError('required')) {
                        Weight capacity is required.
                        }
                        @if (form.get('weightCapacity')?.hasError('min')) {
                        Must be greater than 0.
                        }
                    </small>
                    }
                </div>

                <!-- Availability Toggle -->
                <div class="form-field">
                    <label class="form-label">Availability</label>
                    <div class="toggle-row">
                        <p-toggleswitch formControlName="isAvailable" />
                        <span class="toggle-label">
                            {{ form.get('isAvailable')?.value ? 'Available' : 'Occupied' }}
                        </span>
                    </div>
                    <small class="form-hint">
                        Mark as Available if this container is ready to be assigned to a trip.
                    </small>
                </div>

            </div>

            <div class="form-actions">
                <p-button label="Cancel" severity="secondary" [outlined]="true" (onClick)="onCancel()" />
                <p-button [label]="isEditMode() ? 'Update Container' : 'Create Container'" icon="pi pi-check"
                    type="submit" [loading]="isSaving()" />
            </div>

        </form>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContainerFormComponent, { className: "ContainerFormComponent", filePath: "src/app/features/containers/pages/container-form/container-form.component.ts", lineNumber: 31 });
})();
export {
  ContainerFormComponent
};
//# sourceMappingURL=chunk-C4F7QNU3.js.map
