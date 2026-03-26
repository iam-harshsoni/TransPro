import {
  TruckService
} from "./chunk-XA2KLOUQ.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-QT2PH3AY.js";
import "./chunk-5LDHMQOW.js";
import {
  ToggleSwitch,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FOYF73X5.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/trucks/pages/truck-form/truck-form.component.ts
function TruckFormComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Plate number is required. ");
  }
}
function TruckFormComponent_Conditional_27_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Max 20 characters. ");
  }
}
function TruckFormComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275conditionalCreate(1, TruckFormComponent_Conditional_27_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, TruckFormComponent_Conditional_27_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.form.get("plateNumber")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.form.get("plateNumber")) == null ? null : tmp_2_0.hasError("maxlength")) ? 2 : -1);
  }
}
function TruckFormComponent_Conditional_34_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Truck model is required. ");
  }
}
function TruckFormComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275conditionalCreate(1, TruckFormComponent_Conditional_34_Conditional_1_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.form.get("model")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
  }
}
function TruckFormComponent_Conditional_41_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Capacity is required. ");
  }
}
function TruckFormComponent_Conditional_41_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Capacity must be at least 1 tonne. ");
  }
}
function TruckFormComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275conditionalCreate(1, TruckFormComponent_Conditional_41_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, TruckFormComponent_Conditional_41_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.form.get("capacity")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.form.get("capacity")) == null ? null : tmp_2_0.hasError("min")) ? 2 : -1);
  }
}
function TruckFormComponent_Conditional_42_Template(rf, ctx) {
}
var TruckFormComponent = class _TruckFormComponent {
  fb = inject(FormBuilder);
  truckService = inject(TruckService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  messageService = inject(MessageService);
  originalAvailability = true;
  isEditMode = signal(false, ...ngDevMode ? [{ debugName: "isEditMode" }] : (
    /* istanbul ignore next */
    []
  ));
  isSaving = signal(false, ...ngDevMode ? [{ debugName: "isSaving" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  truckId = signal(null, ...ngDevMode ? [{ debugName: "truckId" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.group({
    plateNumber: ["", [Validators.required, Validators.maxLength(20)]],
    model: ["", [Validators.required, Validators.maxLength(100)]],
    capacity: [null, [Validators.required, Validators.min(1)]],
    isAvailable: [true]
  });
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get("id");
    if (idParam) {
      this.isEditMode.set(true);
      this.truckId.set(Number(idParam));
      this.loadTrucks(Number(idParam));
    }
  }
  loadTrucks(id) {
    this.isLoading.set(true);
    this.truckService.getById(id).subscribe({
      next: (request) => {
        this.form.patchValue({
          plateNumber: request.data.plateNumber,
          model: request.data.model,
          capacity: request.data.capacity,
          isAvailable: request.data.isAvailable
        });
        this.isLoading.set(false);
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load trucks"
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
    const formValue = this.form.value;
    const dto = {
      plateNumber: formValue.plateNumber,
      model: formValue.model,
      capacity: formValue.capacity
    };
    const currentAvailability = formValue.isAvailable;
    const availabilityChanged = this.isEditMode() && currentAvailability != this.originalAvailability;
    const request$ = this.isEditMode() ? this.truckService.update(this.truckId(), this.form.value) : this.truckService.create(this.form.value);
    request$.subscribe({
      next: () => {
        if (availabilityChanged) {
          this.truckService.toggleAvailability(this.truckId()).subscribe({
            next: (response) => {
              this.messageService.add({
                severity: "success",
                summary: "Updated",
                detail: "Truck updated successfully"
              });
              this.isSaving.set(false);
              setTimeout(() => this.router.navigate(["/trucks"]), 1500);
            },
            error: (err) => {
              const errorMsg = err.error?.message ?? "Truck updated but availability could not be changed";
              this.messageService.add({
                severity: "warn",
                summary: "Partially Saved",
                detail: errorMsg,
                life: 6e3
              });
              this.isSaving.set(false);
              setTimeout(() => this.router.navigate(["/trucks"]), 2e3);
            }
          });
        } else {
          this.messageService.add({
            severity: "success",
            summary: this.isEditMode() ? "Updated" : "Created",
            detail: `Truck ${this.isEditMode() ? "Updated" : "Created"}`
          });
          this.isSaving.set(false);
          setTimeout(() => this.router.navigate(["/trucks"]), 1500);
        }
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: `Failed to ${this.isEditMode() ? "update" : "create"} truck`
        });
        this.isSaving.set(false);
      }
    });
  }
  onCancel() {
    this.router.navigate(["/trucks"]);
  }
  isInvalid(field) {
    const control = this.form.get(field);
    return !!(control?.invalid && control?.touched);
  }
  static \u0275fac = function TruckFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TruckFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TruckFormComponent, selectors: [["app-truck-form"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 53, vars: 23, consts: [[1, "page-header"], [1, "breadcrumb-trail"], [1, "pi", "pi-angle-right"], [1, "breadcrumb-link", 3, "click"], [1, "page-title"], [1, "form-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "form-section-title"], [1, "form-grid-2"], [1, "form-field"], [1, "form-label"], [1, "required-star"], ["pInputText", "", "formControlName", "plateNumber", "placeholder", "e.g. GJ-01-AB-1234", 3, "input"], [1, "error-msg"], ["pInputText", "", "formControlName", "model", "placeholder", "e.g. Tata LPT 2518"], ["formControlName", "capacity", "suffix", " T", "placeholder", "Enter capacity in tonnes", "styleClass", "w-full", 3, "min", "max"], [1, "toggle-row"], ["formControlName", "isAvailable"], [1, "toggle-label"], [1, "form-actions"], ["label", "Cancel", "severity", "secondary", 3, "onClick", "outlined"], ["icon", "pi pi-check", "type", "submit", 3, "label", "loading"]], template: function TruckFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      \u0275\u0275text(3, " Home ");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275elementStart(5, "a", 3);
      \u0275\u0275listener("click", function TruckFormComponent_Template_a_click_5_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(6, "Trucks");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "i", 2);
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5)(13, "div", 6)(14, "span", 7);
      \u0275\u0275text(15, "Truck Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 8)(17, "form", 9);
      \u0275\u0275listener("ngSubmit", function TruckFormComponent_Template_form_ngSubmit_17_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(18, "div", 10);
      \u0275\u0275text(19, "Vehicle Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 11)(21, "div", 12)(22, "label", 13);
      \u0275\u0275text(23, " Plate Number ");
      \u0275\u0275elementStart(24, "span", 14);
      \u0275\u0275text(25, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "input", 15);
      \u0275\u0275listener("input", function TruckFormComponent_Template_input_input_26_listener($event) {
        let tmp_0_0;
        return (tmp_0_0 = ctx.form.get("plateNumber")) == null ? null : tmp_0_0.setValue($event.target.value.toUpperCase(), { emitEvent: false });
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(27, TruckFormComponent_Conditional_27_Template, 3, 2, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 12)(29, "label", 13);
      \u0275\u0275text(30, " Truck Model ");
      \u0275\u0275elementStart(31, "span", 14);
      \u0275\u0275text(32, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(33, "input", 17);
      \u0275\u0275conditionalCreate(34, TruckFormComponent_Conditional_34_Template, 2, 1, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 12)(36, "label", 13);
      \u0275\u0275text(37, " Capacity (Tonnes) ");
      \u0275\u0275elementStart(38, "span", 14);
      \u0275\u0275text(39, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(40, "p-inputnumber", 18);
      \u0275\u0275conditionalCreate(41, TruckFormComponent_Conditional_41_Template, 3, 2, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(42, TruckFormComponent_Conditional_42_Template, 0, 0);
      \u0275\u0275elementStart(43, "div", 12)(44, "label", 13);
      \u0275\u0275text(45, "Availability");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 19);
      \u0275\u0275element(47, "p-toggleswitch", 20);
      \u0275\u0275elementStart(48, "span", 21);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "div", 22)(51, "p-button", 23);
      \u0275\u0275listener("onClick", function TruckFormComponent_Template_p_button_onClick_51_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "p-button", 24);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_12_0;
      let tmp_13_0;
      let tmp_14_0;
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.isEditMode() ? "Edit Truck" : "New Truck");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode() ? "Edit Truck" : "New Truck");
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("input-error", ctx.isInvalid("plateNumber"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("plateNumber") ? 27 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("input-error", ctx.isInvalid("model"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("model") ? 34 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("input-error", ctx.isInvalid("capacity"));
      \u0275\u0275property("min", 1)("max", 100);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("capacity") ? 41 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEditMode() ? 42 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("status-available", (tmp_12_0 = ctx.form.get("isAvailable")) == null ? null : tmp_12_0.value)("status-unavailable", !((tmp_13_0 = ctx.form.get("isAvailable")) == null ? null : tmp_13_0.value));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ((tmp_14_0 = ctx.form.get("isAvailable")) == null ? null : tmp_14_0.value) ? "Available" : "Unavailable", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.isEditMode() ? "Update Truck" : "Add Truck")("loading", ctx.isSaving());
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
    InputNumberModule,
    InputNumber
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TruckFormComponent, [{
    type: Component,
    args: [{ selector: "app-truck-form", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      InputTextModule,
      ButtonModule,
      ToastModule,
      ToggleSwitchModule,
      InputNumberModule
    ], providers: [MessageService], template: `<p-toast />

<div class="page-header">
	<div class="breadcrumb-trail">
		Home <i class="pi pi-angle-right"></i>
		<a class="breadcrumb-link" (click)="onCancel()">Trucks</a>
		<i class="pi pi-angle-right"></i>
		<span>{{ isEditMode() ? 'Edit Truck' : 'New Truck' }}</span>
	</div>
	<div class="page-title">{{ isEditMode() ? 'Edit Truck' : 'New Truck' }}</div>
</div>

<div class="form-card">

	<div class="card-header">
		<span class="card-title">Truck Information</span>
	</div>

	<div class="card-body">
		<form [formGroup]="form" (ngSubmit)="onSubmit()">
			<div class="form-section-title">Vehicle Details</div>

			<div class="form-grid-2">

				<div class="form-field">
					<label class="form-label">
						Plate Number <span class="required-star">*</span>
					</label>
					<!--
						Plate number input \u2014 we convert to uppercase automatically
						using (input) event to keep it consistent.
					-->
					<input pInputText formControlName="plateNumber" placeholder="e.g. GJ-01-AB-1234"
						[class.input-error]="isInvalid('plateNumber')" (input)="form.get('plateNumber')?.setValue(
              $any($event.target).value.toUpperCase(),
              { emitEvent: false }
            )" />
					@if (isInvalid('plateNumber')) {
					<small class="error-msg">
						@if (form.get('plateNumber')?.hasError('required')) {
						Plate number is required.
						}
						@if (form.get('plateNumber')?.hasError('maxlength')) {
						Max 20 characters.
						}
					</small>
					}
				</div>

				<div class="form-field">
					<label class="form-label">
						Truck Model <span class="required-star">*</span>
					</label>
					<input pInputText formControlName="model" placeholder="e.g. Tata LPT 2518"
						[class.input-error]="isInvalid('model')" />
					@if (isInvalid('model')) {
					<small class="error-msg">
						@if (form.get('model')?.hasError('required')) {
						Truck model is required.
						}
					</small>
					}
				</div>

				<div class="form-field">
					<label class="form-label">
						Capacity (Tonnes) <span class="required-star">*</span>
					</label>
					<!--
						p-inputnumber for capacity.
						suffix=" T" shows "T" after the number \u2014 e.g. "15 T"
						[min]="1" prevents 0 or negative values.
					-->
					<p-inputnumber formControlName="capacity" [min]="1" [max]="100" suffix=" T"
						placeholder="Enter capacity in tonnes" [class.input-error]="isInvalid('capacity')"
						styleClass="w-full" />
					@if (isInvalid('capacity')) {
					<small class="error-msg">
						@if (form.get('capacity')?.hasError('required')) {
						Capacity is required.
						}
						@if (form.get('capacity')?.hasError('min')) {
						Capacity must be at least 1 tonne.
						}
					</small>
					}
				</div>

				@if(isEditMode()) {


				}

				<div class="form-field">
					<label class="form-label">Availability</label>
					<div class="toggle-row">
						<p-toggleswitch formControlName="isAvailable" />
						<span class="toggle-label" [class.status-available]="form.get('isAvailable')?.value"
							[class.status-unavailable]="!form.get('isAvailable')?.value">
							{{ form.get('isAvailable')?.value ? 'Available' : 'Unavailable' }}
						</span>
					</div>
				</div>

			</div>

			<div class="form-actions">
				<p-button label="Cancel" severity="secondary" [outlined]="true" (onClick)="onCancel()" />
				<p-button [label]="isEditMode() ? 'Update Truck' : 'Add Truck'" icon="pi pi-check" type="submit"
					[loading]="isSaving()" />
			</div>
		</form>
	</div>

</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TruckFormComponent, { className: "TruckFormComponent", filePath: "src/app/features/trucks/pages/truck-form/truck-form.component.ts", lineNumber: 29 });
})();
export {
  TruckFormComponent
};
//# sourceMappingURL=chunk-E5WJFIT5.js.map
