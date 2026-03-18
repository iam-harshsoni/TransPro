import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  C,
  CommonModule,
  DomHandler,
  K,
  MessageService,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  P,
  PARENT_INSTANCE,
  PrimeTemplate,
  Qt,
  R,
  Rt,
  SharedModule,
  Tt,
  U,
  W,
  Zt,
  _t,
  f,
  getDOM,
  isPlatformBrowser,
  l,
  oe,
  qt,
  s,
  s2,
  te,
  v,
  w,
  z,
  zindexutils
} from "./chunk-F6YHHGKC.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  Version,
  ViewEncapsulation,
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  computed,
  contentChild,
  effect,
  forkJoin,
  forwardRef,
  from,
  inject,
  input,
  isPromise,
  isSubscribable,
  map,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  untracked,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZCRCH54Z.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/@angular/forms/fesm2022/forms.mjs
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  _renderer;
  _elementRef;
  onChange = (_) => {
  };
  onTouched = () => {
  };
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
  }
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static \u0275fac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseControlValueAccessor
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BuiltInControlValueAccessor_BaseFactory;
    return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BuiltInControlValueAccessor,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxControlValueAccessor_BaseFactory;
    return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxControlValueAccessor,
    selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
    hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.checked);
        })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($any($event.target).checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  _compositionMode;
  _composing = false;
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  _compositionStart() {
    this._composing = true;
  }
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static \u0275fac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DefaultValueAccessor,
    selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
    hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
          return ctx._handleInput($event.target.value);
        })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
          return ctx._compositionStart();
        })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
          return ctx._compositionEnd($event.target.value);
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      host: {
        "(input)": "_handleInput($any($event.target).value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "_compositionStart()",
        "(compositionend)": "_compositionEnd($any($event.target).value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
  if (value == null) {
    return null;
  } else if (Array.isArray(value) || typeof value === "string") {
    return value.length;
  } else if (value instanceof Set) {
    return value.size;
  }
  return null;
}
var NG_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  static min(min) {
    return minValidator(min);
  }
  static max(max) {
    return maxValidator(max);
  }
  static required(control) {
    return requiredValidator(control);
  }
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  static email(control) {
    return emailValidator(control);
  }
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  static nullValidator(control) {
    return nullValidator();
  }
  static compose(validators) {
    return compose(validators);
  }
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (control.value == null || min == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (control.value == null || max == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length === null || length === 0) {
      return null;
    }
    return length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length !== null && length > maxLength) {
      return {
        "maxlength": {
          "requiredLength": maxLength,
          "actualLength": length
        }
      };
    }
    return null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v3) => {
    if (!hasValidator(current, v3)) {
      current.push(v3);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v3) => !hasValidator(validators, v3));
}
var AbstractControlDirective = class {
  get value() {
    return this.control ? this.control.value : null;
  }
  get valid() {
    return this.control ? this.control.valid : null;
  }
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  get pending() {
    return this.control ? this.control.pending : null;
  }
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  get errors() {
    return this.control ? this.control.errors : null;
  }
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  get touched() {
    return this.control ? this.control.touched : null;
  }
  get status() {
    return this.control ? this.control.status : null;
  }
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  get path() {
    return null;
  }
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators = [];
  _rawAsyncValidators = [];
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  get validator() {
    return this._composedValidatorFn || null;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  _onDestroyCallbacks = [];
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  reset(value = void 0) {
    this.control?.reset(value);
  }
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  name;
  get formDirective() {
    return null;
  }
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  _parent = null;
  name = null;
  valueAccessor = null;
};
var AbstractControlStatus = class {
  _cd;
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatus,
    selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
    hostVars: 14,
    hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost,
      standalone: false
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatusGroup,
    selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["", "formArray", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
    hostVars: 16,
    hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]",
      host: __spreadProps(__spreadValues({}, ngControlStatusHost), {
        "[class.ng-submitted]": "isSubmitted"
      }),
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
var VERSION = /* @__PURE__ */ new Version("21.2.4");
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup or formArray directive. You'll want to add a formGroup/formArray
      directive and pass it an existing FormGroup/FormArray instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  const versionSubDomain = VERSION.major !== "0" ? `v${VERSION.major}.` : "";
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://${versionSubDomain}angular.dev/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  value;
  source;
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  pristine;
  source;
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  touched;
  source;
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  status;
  source;
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  _pendingDirty = false;
  _hasOwnPendingAsyncValidator = null;
  _pendingTouched = false;
  _onCollectionChange = () => {
  };
  _updateOn;
  _parent = null;
  _asyncValidationSubscription;
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators;
  _rawAsyncValidators;
  value;
  constructor(validators, asyncValidators) {
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  get parent() {
    return this._parent;
  }
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v3) {
    untracked(() => this.statusReactive.set(v3));
  }
  _status = computed(() => this.statusReactive(), ...ngDevMode ? [{
    debugName: "_status"
  }] : []);
  statusReactive = signal(void 0, ...ngDevMode ? [{
    debugName: "statusReactive"
  }] : []);
  get valid() {
    return this.status === VALID;
  }
  get invalid() {
    return this.status === INVALID;
  }
  get pending() {
    return this.status == PENDING;
  }
  get disabled() {
    return this.status === DISABLED;
  }
  get enabled() {
    return this.status !== DISABLED;
  }
  errors;
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v3) {
    untracked(() => this.pristineReactive.set(v3));
  }
  _pristine = computed(() => this.pristineReactive(), ...ngDevMode ? [{
    debugName: "_pristine"
  }] : []);
  pristineReactive = signal(true, ...ngDevMode ? [{
    debugName: "pristineReactive"
  }] : []);
  get dirty() {
    return !this.pristine;
  }
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v3) {
    untracked(() => this.touchedReactive.set(v3));
  }
  _touched = computed(() => this.touchedReactive(), ...ngDevMode ? [{
    debugName: "_touched"
  }] : []);
  touchedReactive = signal(false, ...ngDevMode ? [{
    debugName: "touchedReactive"
  }] : []);
  get untouched() {
    return !this.touched;
  }
  _events = new Subject();
  events = this._events.asObservable();
  valueChanges;
  statusChanges;
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  setValidators(validators) {
    this._assignValidators(validators);
  }
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  clearValidators() {
    this.validator = null;
  }
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (!opts.onlySelf) {
      this._parent?.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  markAllAsDirty(opts = {}) {
    this.markAsDirty({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsDirty(opts));
  }
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (!opts.onlySelf) {
      this._parent?._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (!opts.onlySelf) {
      this._parent?.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (!opts.onlySelf) {
      this._parent?._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (!opts.onlySelf) {
      this._parent?.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (!opts.onlySelf) {
      this._parent?.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent?._updatePristine({}, sourceControl);
      }
      this._parent?._updateTouched({}, sourceControl);
    }
  }
  setParent(parent) {
    this._parent = parent;
  }
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (!opts.onlySelf) {
      this._parent?.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false,
        shouldHaveEmitted: shouldHaveEmitted !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control?.errors ? control.errors[errorCode] : null;
  }
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (!opts.onlySelf) {
      this._parent?._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (!opts.onlySelf) {
      this._parent?._updateTouched(opts, changedControl);
    }
  }
  _onDisabledChange = [];
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  _parentMarkedDirty(onlySelf) {
    return !onlySelf && !!this._parent?.dirty && !this._parent._anyControlsDirty();
  }
  _find(name) {
    return null;
  }
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  _updateValue() {
    this.value = this._reduceValue();
  }
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", {
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  dir?.valueAccessor?.registerOnChange(noop);
  dir?.valueAccessor?.registerOnTouched(noop);
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v3) => {
    if (v3.constructor === DefaultValueAccessor) {
      defaultAccessor = v3;
    } else if (isBuiltInAccessor(v3)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v3;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v3;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$2 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this.submittedReactive);
  }
  _submitted = computed(() => this.submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "submittedReactive"
  }] : []);
  _directives = /* @__PURE__ */ new Set();
  form;
  ngSubmit = new EventEmitter();
  options;
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  get formDirective() {
    return this;
  }
  get control() {
    return this.form;
  }
  get path() {
    return [];
  }
  get controls() {
    return this.form.controls;
  }
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      container?.removeControl(dir.name);
      this._directives.delete(dir);
    });
  }
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      container?.removeControl?.(dir.name);
    });
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  setValue(value) {
    this.control.setValue(value);
  }
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static \u0275fac = function NgForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgForm,
    selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", "", 3, "formArray", ""], ["ng-form"], ["", "ngForm", ""]],
    hostBindings: function NgForm_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function NgForm_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      options: [0, "ngFormOptions", "options"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$2]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]):not([formArray]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$2],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  defaultValue = null;
  _onChange = [];
  _pendingValue;
  _pendingChange = false;
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    if (options.overwriteDefaultValue) {
      this.defaultValue = this.value;
    }
    this._pendingChange = false;
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  _updateValue() {
  }
  _anyControls(condition) {
    return false;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  _forEachChild(cb) {
  }
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  _parent;
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  ngOnDestroy() {
    this.formDirective?.removeFormGroup(this);
  }
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AbstractFormGroupDirective_BaseFactory;
    return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormGroupDirective,
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive,
    args: [{
      standalone: false
    }]
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  name = "";
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static \u0275fac = function NgModelGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModelGroup,
    selectors: [["", "ngModelGroup", ""]],
    inputs: {
      name: [0, "ngModelGroup", "name"]
    },
    exportAs: ["ngModelGroup"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  _changeDetectorRef;
  callSetDisabledState;
  control = new FormControl();
  static ngAcceptInputType_isDisabled;
  _registered = false;
  viewModel;
  name = "";
  isDisabled;
  model;
  options;
  update = new EventEmitter();
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    this.formDirective?.removeControl(this);
  }
  get path() {
    return this._getPath(this.name);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) {
      checkParentType$1(this._parent);
    }
    this._checkName();
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static \u0275fac = function NgModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModel,
    selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
    inputs: {
      name: "name",
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"],
      options: [0, "ngModelOptions", "options"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngModel"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType$1(parent) {
  if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) {
    throw formGroupNameException();
  } else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) {
    throw modelParentException();
  }
}
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static \u0275fac = function \u0275NgNoValidate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgNoValidate)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgNoValidate,
    selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
    hostAttrs: ["novalidate", ""],
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      },
      standalone: false
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NumberValueAccessor_BaseFactory;
    return function NumberValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NumberValueAccessor,
    selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
    hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  _accessors = [];
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static \u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  _registry;
  _injector;
  _state;
  _control;
  _fn;
  setDisabledStateFired = false;
  onChange = () => {
  };
  name;
  formControlName;
  value;
  callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
    optional: true
  }) ?? setDisabledStateDefault;
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
  }
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  ngOnDestroy() {
    this._registry.remove(this);
  }
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static \u0275fac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RadioControlValueAccessor,
    selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
    hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
          return ctx.onChange();
        })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      name: "name",
      formControlName: "formControlName",
      value: "value"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RangeValueAccessor_BaseFactory;
    return function RangeValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RangeValueAccessor,
    selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
    hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  push(control, options = {}) {
    if (Array.isArray(control)) {
      control.forEach((ctrl) => {
        this.controls.push(ctrl);
        this._registerControl(ctrl);
      });
    } else {
      this.controls.push(control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  get length() {
    return this.controls.length;
  }
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  _find(name) {
    return this.at(name) ?? null;
  }
};
var AbstractFormDirective = class _AbstractFormDirective extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this._submittedReactive);
  }
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  _submitted = computed(() => this._submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  _submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "_submittedReactive"
  }] : []);
  _oldForm;
  _onCollectionChange = () => this._updateDomValue();
  directives = [];
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnChanges(changes) {
    this.onChanges(changes);
  }
  ngOnDestroy() {
    this.onDestroy();
  }
  onChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  onDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  get formDirective() {
    return this;
  }
  get path() {
    return [];
  }
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    cleanUpControl(dir.control || null, dir, false);
    removeListItem$1(this.directives, dir);
  }
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0, options = {}) {
    this.form.reset(value, options);
    this._submittedReactive.set(false);
  }
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    const ctrl = this.form?.get(dir.path);
    if (ctrl) {
      const isControlUpdated = cleanUpFormContainer(ctrl, dir);
      if (isControlUpdated) {
        ctrl.updateValueAndValidity({
          emitEvent: false
        });
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    this._oldForm?._registerOnCollectionChange(() => {
    });
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static \u0275fac = function AbstractFormDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractFormDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormDirective,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormDirective, [{
    type: Directive
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], null);
})();
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayDirective)
};
var FormArrayDirective = class _FormArrayDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormArrayDirective_BaseFactory;
    return function FormArrayDirective_Factory(__ngFactoryType__) {
      return (\u0275FormArrayDirective_BaseFactory || (\u0275FormArrayDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormArrayDirective)))(__ngFactoryType__ || _FormArrayDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayDirective,
    selectors: [["", "formArray", ""]],
    hostBindings: function FormArrayDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormArrayDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormArrayDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formArray", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayDirective, [{
    type: Directive,
    args: [{
      selector: "[formArray]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formArray"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  _ngModelWarningConfig;
  callSetDisabledState;
  viewModel;
  form;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(previousForm, this, false);
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(this.form, this, false);
    }
  }
  get path() {
    return [];
  }
  get control() {
    return this.form;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static \u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlDirective,
    selectors: [["", "formControl", ""]],
    inputs: {
      form: [0, "formControl", "form"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static \u0275fac = function FormGroupName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupName,
    selectors: [["", "formGroupName", ""]],
    inputs: {
      name: [0, "formGroupName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  _parent;
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnInit() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
    this.formDirective.addFormArray(this);
  }
  ngOnDestroy() {
    this.formDirective?.removeFormArray(this);
  }
  get control() {
    return this.formDirective.getFormArray(this);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  static \u0275fac = function FormArrayName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayName,
    selectors: [["", "formArrayName", ""]],
    inputs: {
      name: [0, "formArrayName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  _ngModelWarningConfig;
  _added = false;
  viewModel;
  control;
  name = null;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  ngOnDestroy() {
    this.formDirective?.removeControl(this);
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _setUpControl() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkParentType(this._parent, this.name);
    }
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static \u0275fac = function FormControlName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlName,
    selectors: [["", "formControlName", ""]],
    inputs: {
      name: [0, "formControlName", "name"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType(parent, name) {
  if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) {
    throw ngModelGroupException();
  } else if (!(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName)) {
    throw controlParentException(name);
  }
}
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormGroupDirective_BaseFactory;
    return function FormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275FormGroupDirective_BaseFactory || (\u0275FormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormGroupDirective)))(__ngFactoryType__ || _FormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupDirective,
    selectors: [["", "formGroup", ""]],
    hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormGroupDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formGroup", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  appRefInjector = inject(ApplicationRef).injector;
  destroyRef = inject(DestroyRef);
  cdr = inject(ChangeDetectorRef);
  _queuedWrite = false;
  _writeValueAfterRender() {
    if (this._queuedWrite || this.appRefInjector.destroyed) {
      return;
    }
    this._queuedWrite = true;
    afterNextRender({
      write: () => {
        if (this.destroyRef.destroyed) {
          return;
        }
        this._queuedWrite = false;
        this.writeValue(this.value);
      }
    }, {
      injector: this.appRefInjector
    });
  }
  writeValue(value) {
    this.cdr.markForCheck();
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  _registerOption() {
    return (this._idCounter++).toString();
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectControlValueAccessor_BaseFactory;
    return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectControlValueAccessor,
    selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
    hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  _element;
  _renderer;
  _select;
  id;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select._writeValueAfterRender();
  }
  set value(value) {
    this._setElementValue(value);
    this._select?._writeValueAfterRender();
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  ngOnDestroy() {
    this._select?._optionMap.delete(this.id);
    this._select?._writeValueAfterRender();
  }
  static \u0275fac = function NgSelectOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgSelectOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v3) => this._getOptionId(v3));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectMultipleControlValueAccessor_BaseFactory;
    return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectMultipleControlValueAccessor,
    selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
    hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target);
        })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  _element;
  _renderer;
  _select;
  id;
  _value;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static \u0275fac = function \u0275NgSelectMultipleOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgSelectMultipleOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  _validator = nullValidator;
  _onChange;
  _enabled;
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input2 = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input2);
      this._validator = this._enabled ? this.createValidator(input2) : nullValidator;
      this._onChange?.();
    }
  }
  validate(control) {
    return this._validator(control);
  }
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  enabled(input2) {
    return input2 != null;
  }
  static \u0275fac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractValidatorDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractValidatorDirective,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  max;
  inputName = "max";
  normalizeInput = (input2) => toFloat(input2);
  createValidator = (max) => maxValidator(max);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxValidator_BaseFactory;
    return function MaxValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxValidator,
    selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
      }
    },
    inputs: {
      max: "max"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      },
      standalone: false
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  min;
  inputName = "min";
  normalizeInput = (input2) => toFloat(input2);
  createValidator = (min) => minValidator(min);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinValidator_BaseFactory;
    return function MinValidator_Factory(__ngFactoryType__) {
      return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinValidator,
    selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
      }
    },
    inputs: {
      min: "min"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      },
      standalone: false
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  required;
  inputName = "required";
  normalizeInput = booleanAttribute;
  createValidator = (input2) => requiredValidator;
  enabled(input2) {
    return input2;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RequiredValidator_BaseFactory;
    return function RequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RequiredValidator,
    selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
    hostVars: 1,
    hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    inputs: {
      required: "required"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  createValidator = (input2) => requiredTrueValidator;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxRequiredValidator_BaseFactory;
    return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxRequiredValidator,
    selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  email;
  inputName = "email";
  normalizeInput = booleanAttribute;
  createValidator = (input2) => emailValidator;
  enabled(input2) {
    return input2;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EmailValidator_BaseFactory;
    return function EmailValidator_Factory(__ngFactoryType__) {
      return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _EmailValidator,
    selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
    inputs: {
      email: "email"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR],
      standalone: false
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  minlength;
  inputName = "minlength";
  normalizeInput = (input2) => toInteger(input2);
  createValidator = (minlength) => minLengthValidator(minlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinLengthValidator_BaseFactory;
    return function MinLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinLengthValidator,
    selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
      }
    },
    inputs: {
      minlength: "minlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      },
      standalone: false
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  maxlength;
  inputName = "maxlength";
  normalizeInput = (input2) => toInteger(input2);
  createValidator = (maxlength) => maxLengthValidator(maxlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxLengthValidator_BaseFactory;
    return function MaxLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxLengthValidator,
    selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
      }
    },
    inputs: {
      maxlength: "maxlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      },
      standalone: false
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  pattern;
  inputName = "pattern";
  normalizeInput = (input2) => input2;
  createValidator = (input2) => patternValidator(input2);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PatternValidator_BaseFactory;
    return function PatternValidator_Factory(__ngFactoryType__) {
      return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PatternValidator,
    selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function PatternValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
      }
    },
    inputs: {
      pattern: "pattern"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      },
      standalone: false
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static \u0275fac = function \u0275InternalFormsSharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275InternalFormsSharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _\u0275InternalFormsSharedModule,
    declarations: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator],
    exports: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  useNonNullable = false;
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static \u0275fac = function FormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FormBuilder,
    factory: _FormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static \u0275fac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NonNullableFormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NonNullableFormBuilder,
    factory: () => (() => inject(FormBuilder).nonNullable)(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UntypedFormBuilder_BaseFactory;
    return function UntypedFormBuilder_Factory(__ngFactoryType__) {
      return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(__ngFactoryType__ || _UntypedFormBuilder);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UntypedFormBuilder,
    factory: _UntypedFormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FormsModule = class _FormsModule {
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function FormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FormsModule,
    declarations: [NgModel, NgModelGroup, NgForm],
    exports: [\u0275InternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactiveFormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ReactiveFormsModule,
    declarations: [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName],
    exports: [\u0275InternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus = class _AutoFocus extends BaseComponent {
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus = false;
  focused = false;
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  host = inject(ElementRef);
  onAfterContentChecked() {
    if (this.autofocus === false) {
      this.host.nativeElement.removeAttribute("autofocus");
    } else {
      this.host.nativeElement.setAttribute("autofocus", true);
    }
    if (!this.focused) {
      this.autoFocus();
    }
  }
  onAfterViewChecked() {
    if (!this.focused) {
      this.autoFocus();
    }
  }
  autoFocus() {
    if (isPlatformBrowser(this.platformId) && this.autofocus) {
      setTimeout(() => {
        const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
        if (focusableElements.length === 0) {
          this.host.nativeElement.focus();
        }
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
        this.focused = true;
      });
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AutoFocus_BaseFactory;
    return function AutoFocus_Factory(__ngFactoryType__) {
      return (\u0275AutoFocus_BaseFactory || (\u0275AutoFocus_BaseFactory = \u0275\u0275getInheritedFactory(_AutoFocus)))(__ngFactoryType__ || _AutoFocus);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AutoFocus,
    selectors: [["", "pAutoFocus", ""]],
    inputs: {
      autofocus: [0, "pAutoFocus", "autofocus"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
    type: Directive,
    args: [{
      selector: "[pAutoFocus]",
      standalone: true
    }]
  }], null, {
    autofocus: [{
      type: Input,
      args: ["pAutoFocus"]
    }]
  });
})();
var AutoFocusModule = class _AutoFocusModule {
  static \u0275fac = function AutoFocusModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoFocusModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AutoFocusModule,
    imports: [AutoFocus],
    exports: [AutoFocus]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
    type: NgModule,
    args: [{
      imports: [AutoFocus],
      exports: [AutoFocus]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/badge/index.mjs
var style = "\n    .p-badge {\n        display: inline-flex;\n        border-radius: dt('badge.border.radius');\n        align-items: center;\n        justify-content: center;\n        padding: dt('badge.padding');\n        background: dt('badge.primary.background');\n        color: dt('badge.primary.color');\n        font-size: dt('badge.font.size');\n        font-weight: dt('badge.font.weight');\n        min-width: dt('badge.min.width');\n        height: dt('badge.height');\n    }\n\n    .p-badge-dot {\n        width: dt('badge.dot.size');\n        min-width: dt('badge.dot.size');\n        height: dt('badge.dot.size');\n        border-radius: 50%;\n        padding: 0;\n    }\n\n    .p-badge-circle {\n        padding: 0;\n        border-radius: 50%;\n    }\n\n    .p-badge-secondary {\n        background: dt('badge.secondary.background');\n        color: dt('badge.secondary.color');\n    }\n\n    .p-badge-success {\n        background: dt('badge.success.background');\n        color: dt('badge.success.color');\n    }\n\n    .p-badge-info {\n        background: dt('badge.info.background');\n        color: dt('badge.info.color');\n    }\n\n    .p-badge-warn {\n        background: dt('badge.warn.background');\n        color: dt('badge.warn.color');\n    }\n\n    .p-badge-danger {\n        background: dt('badge.danger.background');\n        color: dt('badge.danger.color');\n    }\n\n    .p-badge-contrast {\n        background: dt('badge.contrast.background');\n        color: dt('badge.contrast.color');\n    }\n\n    .p-badge-sm {\n        font-size: dt('badge.sm.font.size');\n        min-width: dt('badge.sm.min.width');\n        height: dt('badge.sm.height');\n    }\n\n    .p-badge-lg {\n        font-size: dt('badge.lg.font.size');\n        min-width: dt('badge.lg.min.width');\n        height: dt('badge.lg.height');\n    }\n\n    .p-badge-xl {\n        font-size: dt('badge.xl.font.size');\n        min-width: dt('badge.xl.min.width');\n        height: dt('badge.xl.height');\n    }\n";

// node_modules/primeng/fesm2022/primeng-badge.mjs
var style2 = (
  /*css*/
  `
    ${style}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`
);
var classes = {
  root: ({
    instance
  }) => {
    const value = typeof instance.value === "function" ? instance.value() : instance.value;
    const size = typeof instance.size === "function" ? instance.size() : instance.size;
    const badgeSize = typeof instance.badgeSize === "function" ? instance.badgeSize() : instance.badgeSize;
    const severity = typeof instance.severity === "function" ? instance.severity() : instance.severity;
    return ["p-badge p-component", {
      "p-badge-circle": s(value) && String(value).length === 1,
      "p-badge-dot": l(value),
      "p-badge-sm": size === "small" || badgeSize === "small",
      "p-badge-lg": size === "large" || badgeSize === "large",
      "p-badge-xl": size === "xlarge" || badgeSize === "xlarge",
      "p-badge-info": severity === "info",
      "p-badge-success": severity === "success",
      "p-badge-warn": severity === "warn",
      "p-badge-danger": severity === "danger",
      "p-badge-secondary": severity === "secondary",
      "p-badge-contrast": severity === "contrast"
    }];
  }
};
var BadgeStyle = class _BadgeStyle extends BaseStyle {
  name = "badge";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BadgeStyle_BaseFactory;
    return function BadgeStyle_Factory(__ngFactoryType__) {
      return (\u0275BadgeStyle_BaseFactory || (\u0275BadgeStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BadgeStyle)))(__ngFactoryType__ || _BadgeStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BadgeStyle,
    factory: _BadgeStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeStyle, [{
    type: Injectable
  }], null, null);
})();
var BadgeClasses;
(function(BadgeClasses2) {
  BadgeClasses2["root"] = "p-badge";
})(BadgeClasses || (BadgeClasses = {}));
var BADGE_INSTANCE = new InjectionToken("BADGE_INSTANCE");
var BADGE_DIRECTIVE_INSTANCE = new InjectionToken("BADGE_DIRECTIVE_INSTANCE");
var BadgeDirective = class _BadgeDirective extends BaseComponent {
  $pcBadgeDirective = inject(BADGE_DIRECTIVE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  /**
   * Used to pass attributes to DOM elements inside the Badge component.
   * @defaultValue undefined
   * @deprecated use pBadgePT instead.
   * @group Props
   */
  ptBadgeDirective = input(...ngDevMode ? [void 0, {
    debugName: "ptBadgeDirective"
  }] : []);
  /**
   * Used to pass attributes to DOM elements inside the Badge component.
   * @defaultValue undefined
   * @group Props
   */
  pBadgePT = input(...ngDevMode ? [void 0, {
    debugName: "pBadgePT"
  }] : []);
  /**
   * Indicates whether the component should be rendered without styles.
   * @defaultValue undefined
   * @group Props
   */
  pBadgeUnstyled = input(...ngDevMode ? [void 0, {
    debugName: "pBadgeUnstyled"
  }] : []);
  /**
   * When specified, disables the component.
   * @group Props
   */
  disabled;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  badgeSize;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   * @deprecated use badgeSize instead.
   */
  set size(value) {
    this._size = value;
    console.log("size property is deprecated and will removed in v18, use badgeSize instead.");
  }
  get size() {
    return this._size;
  }
  _size;
  /**
   * Severity type of the badge.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the badge.
   * @group Props
   */
  value;
  /**
   * Inline style of the element.
   * @group Props
   */
  badgeStyle;
  /**
   * Class of the element.
   * @group Props
   */
  badgeStyleClass;
  id;
  badgeEl;
  _componentStyle = inject(BadgeStyle);
  get activeElement() {
    return this.el.nativeElement.nodeName.indexOf("-") != -1 ? this.el.nativeElement.firstChild : this.el.nativeElement;
  }
  get canUpdateBadge() {
    return s(this.id) && !this.disabled;
  }
  constructor() {
    super();
    effect(() => {
      const pt = this.ptBadgeDirective() || this.pBadgePT();
      pt && this.directivePT.set(pt);
    });
    effect(() => {
      this.pBadgeUnstyled() && this.directiveUnstyled.set(this.pBadgeUnstyled());
    });
  }
  onChanges(changes) {
    const {
      value,
      size,
      severity,
      disabled,
      badgeStyle,
      badgeStyleClass
    } = changes;
    if (disabled) {
      this.toggleDisableState();
    }
    if (!this.canUpdateBadge) {
      return;
    }
    if (severity) {
      this.setSeverity(severity.previousValue);
    }
    if (size) {
      this.setSizeClasses();
    }
    if (value) {
      this.setValue();
    }
    if (badgeStyle || badgeStyleClass) {
      this.applyStyles();
    }
  }
  onAfterViewInit() {
    this.id = s2("pn_id_") + "_badge";
    this.renderBadgeContent();
  }
  setValue(element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.value != null) {
      if (R(badge, "p-badge-dot")) {
        P(badge, "p-badge-dot");
      }
      if (this.value && String(this.value).length === 1) {
        W(badge, "p-badge-circle");
      } else {
        P(badge, "p-badge-circle");
      }
    } else {
      if (!R(badge, "p-badge-dot")) {
        W(badge, "p-badge-dot");
      }
      P(badge, "p-badge-circle");
    }
    badge.textContent = "";
    const badgeValue = this.value != null ? String(this.value) : "";
    this.renderer.appendChild(badge, this.document.createTextNode(badgeValue));
  }
  setSizeClasses(element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.badgeSize) {
      if (this.badgeSize === "large") {
        W(badge, "p-badge-lg");
        P(badge, "p-badge-xl");
      }
      if (this.badgeSize === "xlarge") {
        W(badge, "p-badge-xl");
        P(badge, "p-badge-lg");
      }
    } else if (this.size && !this.badgeSize) {
      if (this.size === "large") {
        W(badge, "p-badge-lg");
        P(badge, "p-badge-xl");
      }
      if (this.size === "xlarge") {
        W(badge, "p-badge-xl");
        P(badge, "p-badge-lg");
      }
    } else {
      P(badge, "p-badge-lg");
      P(badge, "p-badge-xl");
    }
  }
  renderBadgeContent() {
    if (this.disabled) {
      return;
    }
    const el = this.activeElement;
    const badge = U("span", {
      class: this.cx("root"),
      id: this.id,
      "p-bind": this.ptm("root")
    });
    this.setSeverity(null, badge);
    this.setSizeClasses(badge);
    this.setValue(badge);
    W(el, "p-overlay-badge");
    this.renderer.appendChild(el, badge);
    this.badgeEl = badge;
    this.applyStyles();
  }
  applyStyles() {
    if (this.badgeEl && this.badgeStyle && typeof this.badgeStyle === "object") {
      for (const [key, value] of Object.entries(this.badgeStyle)) {
        this.renderer.setStyle(this.badgeEl, key, value);
      }
    }
    if (this.badgeEl && this.badgeStyleClass) {
      this.badgeEl.classList.add(...this.badgeStyleClass.split(" "));
    }
  }
  setSeverity(oldSeverity, element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.severity) {
      W(badge, `p-badge-${this.severity}`);
    }
    if (oldSeverity) {
      P(badge, `p-badge-${oldSeverity}`);
    }
  }
  toggleDisableState() {
    if (!this.id) {
      return;
    }
    if (this.disabled) {
      const badge = this.activeElement?.querySelector(`#${this.id}`);
      if (badge) {
        this.renderer.removeChild(this.activeElement, badge);
      }
    } else {
      this.renderBadgeContent();
    }
  }
  static \u0275fac = function BadgeDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BadgeDirective,
    selectors: [["", "pBadge", ""]],
    inputs: {
      ptBadgeDirective: [1, "ptBadgeDirective"],
      pBadgePT: [1, "pBadgePT"],
      pBadgeUnstyled: [1, "pBadgeUnstyled"],
      disabled: [0, "badgeDisabled", "disabled"],
      badgeSize: "badgeSize",
      size: "size",
      severity: "severity",
      value: "value",
      badgeStyle: "badgeStyle",
      badgeStyleClass: "badgeStyleClass"
    },
    features: [\u0275\u0275ProvidersFeature([BadgeStyle, {
      provide: BADGE_DIRECTIVE_INSTANCE,
      useExisting: _BadgeDirective
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _BadgeDirective
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeDirective, [{
    type: Directive,
    args: [{
      selector: "[pBadge]",
      providers: [BadgeStyle, {
        provide: BADGE_DIRECTIVE_INSTANCE,
        useExisting: BadgeDirective
      }, {
        provide: PARENT_INSTANCE,
        useExisting: BadgeDirective
      }],
      standalone: true
    }]
  }], () => [], {
    ptBadgeDirective: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ptBadgeDirective",
        required: false
      }]
    }],
    pBadgePT: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pBadgePT",
        required: false
      }]
    }],
    pBadgeUnstyled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pBadgeUnstyled",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: ["badgeDisabled"]
    }],
    badgeSize: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    badgeStyle: [{
      type: Input
    }],
    badgeStyleClass: [{
      type: Input
    }]
  });
})();
var Badge = class _Badge extends BaseComponent {
  componentName = "Badge";
  $pcBadge = inject(BADGE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass = input(...ngDevMode ? [void 0, {
    debugName: "styleClass"
  }] : []);
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  badgeSize = input(...ngDevMode ? [void 0, {
    debugName: "badgeSize"
  }] : []);
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : []);
  /**
   * Severity type of the badge.
   * @group Props
   */
  severity = input(...ngDevMode ? [void 0, {
    debugName: "severity"
  }] : []);
  /**
   * Value to display inside the badge.
   * @group Props
   */
  value = input(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : []);
  /**
   * When specified, disables the component.
   * @group Props
   */
  badgeDisabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "badgeDisabled"
  } : {}), {
    transform: booleanAttribute
  }));
  _componentStyle = inject(BadgeStyle);
  get dataP() {
    return this.cn({
      circle: this.value() != null && String(this.value()).length === 1,
      empty: this.value() == null,
      disabled: this.badgeDisabled(),
      [this.severity()]: this.severity(),
      [this.size()]: this.size()
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Badge_BaseFactory;
    return function Badge_Factory(__ngFactoryType__) {
      return (\u0275Badge_BaseFactory || (\u0275Badge_BaseFactory = \u0275\u0275getInheritedFactory(_Badge)))(__ngFactoryType__ || _Badge);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Badge,
    selectors: [["p-badge"]],
    hostVars: 5,
    hostBindings: function Badge_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass()));
        \u0275\u0275styleProp("display", ctx.badgeDisabled() ? "none" : null);
      }
    },
    inputs: {
      styleClass: [1, "styleClass"],
      badgeSize: [1, "badgeSize"],
      size: [1, "size"],
      severity: [1, "severity"],
      value: [1, "value"],
      badgeDisabled: [1, "badgeDisabled"]
    },
    features: [\u0275\u0275ProvidersFeature([BadgeStyle, {
      provide: BADGE_INSTANCE,
      useExisting: _Badge
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Badge
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    template: function Badge_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0);
      }
      if (rf & 2) {
        \u0275\u0275textInterpolate(ctx.value());
      }
    },
    dependencies: [CommonModule, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Badge, [{
    type: Component,
    args: [{
      selector: "p-badge",
      template: `{{ value() }}`,
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [BadgeStyle, {
        provide: BADGE_INSTANCE,
        useExisting: Badge
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Badge
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass())",
        "[style.display]": 'badgeDisabled() ? "none" : null',
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "styleClass",
        required: false
      }]
    }],
    badgeSize: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "badgeSize",
        required: false
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    severity: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "severity",
        required: false
      }]
    }],
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }],
    badgeDisabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "badgeDisabled",
        required: false
      }]
    }]
  });
})();
var BadgeModule = class _BadgeModule {
  static \u0275fac = function BadgeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BadgeModule,
    imports: [Badge, BadgeDirective, SharedModule],
    exports: [Badge, BadgeDirective, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Badge, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
    type: NgModule,
    args: [{
      imports: [Badge, BadgeDirective, SharedModule],
      exports: [Badge, BadgeDirective, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-fluid.mjs
var _c0 = ["*"];
var classes2 = {
  root: "p-fluid"
};
var FluidStyle = class _FluidStyle extends BaseStyle {
  name = "fluid";
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FluidStyle_BaseFactory;
    return function FluidStyle_Factory(__ngFactoryType__) {
      return (\u0275FluidStyle_BaseFactory || (\u0275FluidStyle_BaseFactory = \u0275\u0275getInheritedFactory(_FluidStyle)))(__ngFactoryType__ || _FluidStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FluidStyle,
    factory: _FluidStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidStyle, [{
    type: Injectable
  }], null, null);
})();
var FluidClasses;
(function(FluidClasses2) {
  FluidClasses2["root"] = "p-fluid";
})(FluidClasses || (FluidClasses = {}));
var FLUID_INSTANCE = new InjectionToken("FLUID_INSTANCE");
var Fluid = class _Fluid extends BaseComponent {
  componentName = "Fluid";
  $pcFluid = inject(FLUID_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(FluidStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Fluid_BaseFactory;
    return function Fluid_Factory(__ngFactoryType__) {
      return (\u0275Fluid_BaseFactory || (\u0275Fluid_BaseFactory = \u0275\u0275getInheritedFactory(_Fluid)))(__ngFactoryType__ || _Fluid);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Fluid,
    selectors: [["p-fluid"]],
    hostVars: 2,
    hostBindings: function Fluid_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([FluidStyle, {
      provide: FLUID_INSTANCE,
      useExisting: _Fluid
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Fluid
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Fluid_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Fluid, [{
    type: Component,
    args: [{
      selector: "p-fluid",
      template: ` <ng-content></ng-content> `,
      standalone: true,
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [FluidStyle, {
        provide: FLUID_INSTANCE,
        useExisting: Fluid
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Fluid
      }],
      host: {
        "[class]": "cx('root')"
      },
      hostDirectives: [Bind]
    }]
  }], null, null);
})();
var FluidModule = class _FluidModule {
  static \u0275fac = function FluidModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FluidModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FluidModule,
    imports: [Fluid],
    exports: [Fluid]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Fluid]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidModule, [{
    type: NgModule,
    args: [{
      imports: [Fluid],
      exports: [Fluid]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-baseicon.mjs
var _c02 = ["*"];
var css = (
  /*css*/
  `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`
);
var BaseIconStyle = class _BaseIconStyle extends BaseStyle {
  name = "baseicon";
  css = css;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseIconStyle_BaseFactory;
    return function BaseIconStyle_Factory(__ngFactoryType__) {
      return (\u0275BaseIconStyle_BaseFactory || (\u0275BaseIconStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BaseIconStyle)))(__ngFactoryType__ || _BaseIconStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseIconStyle,
    factory: _BaseIconStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseIconStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BaseIconClasses;
(function(BaseIconClasses2) {
  BaseIconClasses2["root"] = "p-icon";
})(BaseIconClasses || (BaseIconClasses = {}));
var BaseIcon = class _BaseIcon extends BaseComponent {
  spin = false;
  _componentStyle = inject(BaseIconStyle);
  getClassNames() {
    return f("p-icon", {
      "p-icon-spin": this.spin
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseIcon_BaseFactory;
    return function BaseIcon_Factory(__ngFactoryType__) {
      return (\u0275BaseIcon_BaseFactory || (\u0275BaseIcon_BaseFactory = \u0275\u0275getInheritedFactory(_BaseIcon)))(__ngFactoryType__ || _BaseIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BaseIcon,
    selectors: [["ng-component"]],
    hostAttrs: ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
    hostVars: 2,
    hostBindings: function BaseIcon_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
      }
    },
    inputs: {
      spin: [2, "spin", "spin", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([BaseIconStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function BaseIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseIcon, [{
    type: Component,
    args: [{
      template: ` <ng-content></ng-content> `,
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [BaseIconStyle],
      host: {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "[class]": "getClassNames()"
      }
    }]
  }], null, {
    spin: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-check.mjs
var _c03 = ["data-p-icon", "check"];
var CheckIcon = class _CheckIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckIcon_BaseFactory;
    return function CheckIcon_Factory(__ngFactoryType__) {
      return (\u0275CheckIcon_BaseFactory || (\u0275CheckIcon_BaseFactory = \u0275\u0275getInheritedFactory(_CheckIcon)))(__ngFactoryType__ || _CheckIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CheckIcon,
    selectors: [["", "data-p-icon", "check"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c03,
    decls: 1,
    vars: 0,
    consts: [["d", "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z", "fill", "currentColor"]],
    template: function CheckIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="check"]',
      standalone: true,
      template: `
        <svg:path
            d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-exclamationtriangle.mjs
var _c04 = ["data-p-icon", "exclamation-triangle"];
var ExclamationTriangleIcon = class _ExclamationTriangleIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s2() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExclamationTriangleIcon_BaseFactory;
    return function ExclamationTriangleIcon_Factory(__ngFactoryType__) {
      return (\u0275ExclamationTriangleIcon_BaseFactory || (\u0275ExclamationTriangleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ExclamationTriangleIcon)))(__ngFactoryType__ || _ExclamationTriangleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ExclamationTriangleIcon,
    selectors: [["", "data-p-icon", "exclamation-triangle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c04,
    decls: 7,
    vars: 2,
    consts: [["d", "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z", "fill", "currentColor"], ["d", "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z", "fill", "currentColor"], ["d", "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function ExclamationTriangleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0)(2, "path", 1)(3, "path", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "defs")(5, "clipPath", 3);
        \u0275\u0275domElement(6, "rect", 4);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(5);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExclamationTriangleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="exclamation-triangle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z"
                fill="currentColor"
            />
            <svg:path
                d="M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z"
                fill="currentColor"
            />
            <svg:path
                d="M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-infocircle.mjs
var _c05 = ["data-p-icon", "info-circle"];
var InfoCircleIcon = class _InfoCircleIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s2() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InfoCircleIcon_BaseFactory;
    return function InfoCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275InfoCircleIcon_BaseFactory || (\u0275InfoCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_InfoCircleIcon)))(__ngFactoryType__ || _InfoCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InfoCircleIcon,
    selectors: [["", "data-p-icon", "info-circle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c05,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function InfoCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoCircleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="info-circle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-spinner.mjs
var _c06 = ["data-p-icon", "spinner"];
var SpinnerIcon = class _SpinnerIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s2() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SpinnerIcon_BaseFactory;
    return function SpinnerIcon_Factory(__ngFactoryType__) {
      return (\u0275SpinnerIcon_BaseFactory || (\u0275SpinnerIcon_BaseFactory = \u0275\u0275getInheritedFactory(_SpinnerIcon)))(__ngFactoryType__ || _SpinnerIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SpinnerIcon,
    selectors: [["", "data-p-icon", "spinner"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c06,
    decls: 5,
    vars: 2,
    consts: [["d", "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SpinnerIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="spinner"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-times.mjs
var _c07 = ["data-p-icon", "times"];
var TimesIcon = class _TimesIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesIcon_BaseFactory;
    return function TimesIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesIcon_BaseFactory || (\u0275TimesIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesIcon)))(__ngFactoryType__ || _TimesIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesIcon,
    selectors: [["", "data-p-icon", "times"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c07,
    decls: 1,
    vars: 0,
    consts: [["d", "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z", "fill", "currentColor"]],
    template: function TimesIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="times"]',
      standalone: true,
      template: `
        <svg:path
            d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-timescircle.mjs
var _c08 = ["data-p-icon", "times-circle"];
var TimesCircleIcon = class _TimesCircleIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s2() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesCircleIcon_BaseFactory;
    return function TimesCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesCircleIcon_BaseFactory || (\u0275TimesCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesCircleIcon)))(__ngFactoryType__ || _TimesCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesCircleIcon,
    selectors: [["", "data-p-icon", "times-circle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c08,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function TimesCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesCircleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="times-circle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/ripple/index.mjs
var style3 = "\n    .p-ink {\n        display: block;\n        position: absolute;\n        background: dt('ripple.background');\n        border-radius: 100%;\n        transform: scale(0);\n        pointer-events: none;\n    }\n\n    .p-ink-active {\n        animation: ripple 0.4s linear;\n    }\n\n    @keyframes ripple {\n        100% {\n            opacity: 0;\n            transform: scale(2.5);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-ripple.mjs
var style4 = (
  /*css*/
  `
    ${style3}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`
);
var classes3 = {
  root: "p-ink"
};
var RippleStyle = class _RippleStyle extends BaseStyle {
  name = "ripple";
  style = style4;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RippleStyle_BaseFactory;
    return function RippleStyle_Factory(__ngFactoryType__) {
      return (\u0275RippleStyle_BaseFactory || (\u0275RippleStyle_BaseFactory = \u0275\u0275getInheritedFactory(_RippleStyle)))(__ngFactoryType__ || _RippleStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RippleStyle,
    factory: _RippleStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleStyle, [{
    type: Injectable
  }], null, null);
})();
var RippleClasses;
(function(RippleClasses2) {
  RippleClasses2["root"] = "p-ink";
})(RippleClasses || (RippleClasses = {}));
var Ripple = class _Ripple extends BaseComponent {
  componentName = "Ripple";
  zone = inject(NgZone);
  _componentStyle = inject(RippleStyle);
  animationListener;
  mouseDownListener;
  timeout;
  constructor() {
    super();
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        if (this.config.ripple()) {
          this.zone.runOutsideAngular(() => {
            this.create();
            this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
          });
        } else {
          this.remove();
        }
      }
    });
  }
  onAfterViewInit() {
  }
  onMouseDown(event) {
    let ink = this.getInk();
    if (!ink || this.document.defaultView?.getComputedStyle(ink, null).display === "none") {
      return;
    }
    !this.$unstyled() && P(ink, "p-ink-active");
    ink.setAttribute("data-p-ink-active", "false");
    if (!Tt(ink) && !Rt(ink)) {
      let d = Math.max(v(this.el.nativeElement), C(this.el.nativeElement));
      ink.style.height = d + "px";
      ink.style.width = d + "px";
    }
    let offset = K(this.el.nativeElement);
    let x = event.pageX - offset.left + this.document.body.scrollTop - Rt(ink) / 2;
    let y = event.pageY - offset.top + this.document.body.scrollLeft - Tt(ink) / 2;
    this.renderer.setStyle(ink, "top", y + "px");
    this.renderer.setStyle(ink, "left", x + "px");
    !this.$unstyled() && W(ink, "p-ink-active");
    ink.setAttribute("data-p-ink-active", "true");
    this.timeout = setTimeout(() => {
      let ink2 = this.getInk();
      if (ink2) {
        !this.$unstyled() && P(ink2, "p-ink-active");
        ink2.setAttribute("data-p-ink-active", "false");
      }
    }, 401);
  }
  getInk() {
    const children = this.el.nativeElement.children;
    for (let i = 0; i < children.length; i++) {
      if (typeof children[i].className === "string" && children[i].className.indexOf("p-ink") !== -1) {
        return children[i];
      }
    }
    return null;
  }
  resetInk() {
    let ink = this.getInk();
    if (ink) {
      !this.$unstyled() && P(ink, "p-ink-active");
      ink.setAttribute("data-p-ink-active", "false");
    }
  }
  onAnimationEnd(event) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    !this.$unstyled() && P(event.currentTarget, "p-ink-active");
    event.currentTarget.setAttribute("data-p-ink-active", "false");
  }
  create() {
    let ink = this.renderer.createElement("span");
    this.renderer.addClass(ink, "p-ink");
    this.renderer.appendChild(this.el.nativeElement, ink);
    this.renderer.setAttribute(ink, "data-p-ink", "true");
    this.renderer.setAttribute(ink, "data-p-ink-active", "false");
    this.renderer.setAttribute(ink, "aria-hidden", "true");
    this.renderer.setAttribute(ink, "role", "presentation");
    if (!this.animationListener) {
      this.animationListener = this.renderer.listen(ink, "animationend", this.onAnimationEnd.bind(this));
    }
  }
  remove() {
    let ink = this.getInk();
    if (ink) {
      this.mouseDownListener && this.mouseDownListener();
      this.animationListener && this.animationListener();
      this.mouseDownListener = null;
      this.animationListener = null;
      Zt(ink);
    }
  }
  onDestroy() {
    if (this.config && this.config.ripple()) {
      this.remove();
    }
  }
  static \u0275fac = function Ripple_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Ripple)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Ripple,
    selectors: [["", "pRipple", ""]],
    hostAttrs: [1, "p-ripple"],
    features: [\u0275\u0275ProvidersFeature([RippleStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ripple, [{
    type: Directive,
    args: [{
      selector: "[pRipple]",
      host: {
        class: "p-ripple"
      },
      standalone: true,
      providers: [RippleStyle]
    }]
  }], () => [], null);
})();
var RippleModule = class _RippleModule {
  static \u0275fac = function RippleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RippleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RippleModule,
    imports: [Ripple],
    exports: [Ripple]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleModule, [{
    type: NgModule,
    args: [{
      imports: [Ripple],
      exports: [Ripple]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/button/index.mjs
var style5 = `
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;

// node_modules/primeng/fesm2022/primeng-button.mjs
var _c09 = ["content"];
var _c1 = ["loadingicon"];
var _c2 = ["icon"];
var _c3 = ["*"];
var _c4 = (a0, a1) => ({
  class: a0,
  pt: a1
});
function Button_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Button_ng_container_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), "pi-spin", ctx_r0.loadingIcon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.loadingIcon)));
    \u0275\u0275property("pBind", ctx_r0.ptm("loadingIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function Button_ng_container_3_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), ctx_r0.cx("spinnerIcon")));
    \u0275\u0275property("pBind", ctx_r0.ptm("loadingIcon"))("spin", true);
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function Button_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Button_ng_container_3_ng_container_1_span_1_Template, 1, 4, "span", 3)(2, Button_ng_container_3_ng_container_1__svg_svg_2_Template, 1, 5, "svg", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingIcon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.loadingIcon));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.loadingIcon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.loadingIcon)));
  }
}
function Button_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function Button_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Button_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function Button_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Button_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 2)(2, Button_ng_container_3_2_Template, 1, 1, null, 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIconTemplate && !ctx_r0._loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c4, ctx_r0.cx("loadingIcon"), ctx_r0.ptm("loadingIcon")));
  }
}
function Button_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.icon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.icon)));
    \u0275\u0275property("pBind", ctx_r0.ptm("icon"));
    \u0275\u0275attribute("data-p", ctx_r0.dataIconP);
  }
}
function Button_ng_container_4_2_ng_template_0_Template(rf, ctx) {
}
function Button_ng_container_4_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Button_ng_container_4_2_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r0.icon && (ctx_r0.iconTemplate || ctx_r0._iconTemplate));
  }
}
function Button_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Button_ng_container_4_span_1_Template, 1, 4, "span", 3)(2, Button_ng_container_4_2_Template, 1, 1, null, 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.icon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.icon)) && !ctx_r0.iconTemplate && !ctx_r0._iconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c4, ctx_r0.cx("icon"), ctx_r0.ptm("icon")));
  }
}
function Button_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("label"));
    \u0275\u0275property("pBind", ctx_r0.ptm("label"));
    \u0275\u0275attribute("aria-hidden", (ctx_r0.icon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.icon)) && !(ctx_r0.label || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.label)))("data-p", ctx_r0.dataLabelP);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.label));
  }
}
function Button_p_badge_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.badge || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.badge))("severity", ctx_r0.badgeSeverity || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.badgeSeverity))("pt", ctx_r0.ptm("pcBadge"))("unstyled", ctx_r0.unstyled());
  }
}
var classes4 = {
  root: ({
    instance
  }) => ["p-button p-component", {
    "p-button-icon-only": instance.hasIcon && !instance.label && !instance.buttonProps?.label && !instance.badge,
    "p-button-vertical": (instance.iconPos === "top" || instance.iconPos === "bottom") && instance.label,
    "p-button-loading": instance.loading || instance.buttonProps?.loading,
    "p-button-link": instance.link || instance.buttonProps?.link,
    [`p-button-${instance.severity || instance.buttonProps?.severity}`]: instance.severity || instance.buttonProps?.severity,
    "p-button-raised": instance.raised || instance.buttonProps?.raised,
    "p-button-rounded": instance.rounded || instance.buttonProps?.rounded,
    "p-button-text": instance.text || instance.variant === "text" || instance.buttonProps?.text || instance.buttonProps?.variant === "text",
    "p-button-outlined": instance.outlined || instance.variant === "outlined" || instance.buttonProps?.outlined || instance.buttonProps?.variant === "outlined",
    "p-button-sm": instance.size === "small" || instance.buttonProps?.size === "small",
    "p-button-lg": instance.size === "large" || instance.buttonProps?.size === "large",
    "p-button-plain": instance.plain || instance.buttonProps?.plain,
    "p-button-fluid": instance.hasFluid
  }],
  loadingIcon: "p-button-loading-icon",
  icon: ({
    instance
  }) => ["p-button-icon", {
    [`p-button-icon-${instance.iconPos || instance.buttonProps?.iconPos}`]: instance.label || instance.buttonProps?.label,
    "p-button-icon-left": (instance.iconPos === "left" || instance.buttonProps?.iconPos === "left") && instance.label || instance.buttonProps?.label,
    "p-button-icon-right": (instance.iconPos === "right" || instance.buttonProps?.iconPos === "right") && instance.label || instance.buttonProps?.label,
    "p-button-icon-top": (instance.iconPos === "top" || instance.buttonProps?.iconPos === "top") && instance.label || instance.buttonProps?.label,
    "p-button-icon-bottom": (instance.iconPos === "bottom" || instance.buttonProps?.iconPos === "bottom") && instance.label || instance.buttonProps?.label
  }, instance.icon, instance.buttonProps?.icon],
  spinnerIcon: ({
    instance
  }) => {
    return Object.entries(instance.cx("icon")).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, "p-button-loading-icon");
  },
  label: "p-button-label"
};
var ButtonStyle = class _ButtonStyle extends BaseStyle {
  name = "button";
  style = style5;
  classes = classes4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ButtonStyle_BaseFactory;
    return function ButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275ButtonStyle_BaseFactory || (\u0275ButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ButtonStyle)))(__ngFactoryType__ || _ButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ButtonStyle,
    factory: _ButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var ButtonClasses;
(function(ButtonClasses2) {
  ButtonClasses2["root"] = "p-button";
  ButtonClasses2["loadingIcon"] = "p-button-loading-icon";
  ButtonClasses2["icon"] = "p-button-icon";
  ButtonClasses2["label"] = "p-button-label";
})(ButtonClasses || (ButtonClasses = {}));
var BUTTON_INSTANCE = new InjectionToken("BUTTON_INSTANCE");
var BUTTON_DIRECTIVE_INSTANCE = new InjectionToken("BUTTON_DIRECTIVE_INSTANCE");
var BUTTON_LABEL_INSTANCE = new InjectionToken("BUTTON_LABEL_INSTANCE");
var BUTTON_ICON_INSTANCE = new InjectionToken("BUTTON_ICON_INSTANCE");
var INTERNAL_BUTTON_CLASSES = {
  button: "p-button",
  component: "p-component",
  iconOnly: "p-button-icon-only",
  disabled: "p-disabled",
  loading: "p-button-loading",
  labelOnly: "p-button-loading-label-only"
};
var ButtonLabel = class _ButtonLabel extends BaseComponent {
  componentName = "ButtonLabel";
  /**
   * Used to pass attributes to DOM elements inside the pButtonLabel.
   * @defaultValue undefined
   * @deprecated use pButtonLabelPT instead.
   * @group Props
   */
  ptButtonLabel = input(...ngDevMode ? [void 0, {
    debugName: "ptButtonLabel"
  }] : []);
  /**
   * Used to pass attributes to DOM elements inside the pButtonLabel.
   * @defaultValue undefined
   * @group Props
   */
  pButtonLabelPT = input(...ngDevMode ? [void 0, {
    debugName: "pButtonLabelPT"
  }] : []);
  /**
   * Indicates whether the component should be rendered without styles.
   * @defaultValue undefined
   * @group Props
   */
  pButtonLabelUnstyled = input(...ngDevMode ? [void 0, {
    debugName: "pButtonLabelUnstyled"
  }] : []);
  $pcButtonLabel = inject(BUTTON_LABEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  constructor() {
    super();
    effect(() => {
      const pt = this.ptButtonLabel() || this.pButtonLabelPT();
      pt && this.directivePT.set(pt);
    });
    effect(() => {
      this.pButtonLabelUnstyled() && this.directiveUnstyled.set(this.pButtonLabelUnstyled());
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = function ButtonLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonLabel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ButtonLabel,
    selectors: [["", "pButtonLabel", ""]],
    hostVars: 2,
    hostBindings: function ButtonLabel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-button-label", !ctx.$unstyled() && true);
      }
    },
    inputs: {
      ptButtonLabel: [1, "ptButtonLabel"],
      pButtonLabelPT: [1, "pButtonLabelPT"],
      pButtonLabelUnstyled: [1, "pButtonLabelUnstyled"]
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle, {
      provide: BUTTON_LABEL_INSTANCE,
      useExisting: _ButtonLabel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ButtonLabel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonLabel, [{
    type: Directive,
    args: [{
      selector: "[pButtonLabel]",
      providers: [ButtonStyle, {
        provide: BUTTON_LABEL_INSTANCE,
        useExisting: ButtonLabel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ButtonLabel
      }],
      standalone: true,
      host: {
        "[class.p-button-label]": "!$unstyled() && true"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    ptButtonLabel: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ptButtonLabel",
        required: false
      }]
    }],
    pButtonLabelPT: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pButtonLabelPT",
        required: false
      }]
    }],
    pButtonLabelUnstyled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pButtonLabelUnstyled",
        required: false
      }]
    }]
  });
})();
var ButtonIcon = class _ButtonIcon extends BaseComponent {
  componentName = "ButtonIcon";
  /**
   * Used to pass attributes to DOM elements inside the pButtonIcon.
   * @defaultValue undefined
   * @deprecated use pButtonIconPT instead.
   * @group Props
   */
  ptButtonIcon = input(...ngDevMode ? [void 0, {
    debugName: "ptButtonIcon"
  }] : []);
  /**
   * Used to pass attributes to DOM elements inside the pButtonIcon.
   * @defaultValue undefined
   * @group Props
   */
  pButtonIconPT = input(...ngDevMode ? [void 0, {
    debugName: "pButtonIconPT"
  }] : []);
  /**
   * Indicates whether the component should be rendered without styles.
   * @defaultValue undefined
   * @group Props
   */
  pButtonUnstyled = input(...ngDevMode ? [void 0, {
    debugName: "pButtonUnstyled"
  }] : []);
  $pcButtonIcon = inject(BUTTON_ICON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  constructor() {
    super();
    effect(() => {
      const pt = this.ptButtonIcon() || this.pButtonIconPT();
      pt && this.directivePT.set(pt);
    });
    effect(() => {
      this.pButtonUnstyled() && this.directiveUnstyled.set(this.pButtonUnstyled());
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = function ButtonIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonIcon)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ButtonIcon,
    selectors: [["", "pButtonIcon", ""]],
    hostVars: 2,
    hostBindings: function ButtonIcon_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-button-icon", !ctx.$unstyled() && true);
      }
    },
    inputs: {
      ptButtonIcon: [1, "ptButtonIcon"],
      pButtonIconPT: [1, "pButtonIconPT"],
      pButtonUnstyled: [1, "pButtonUnstyled"]
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle, {
      provide: BUTTON_ICON_INSTANCE,
      useExisting: _ButtonIcon
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ButtonIcon
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonIcon, [{
    type: Directive,
    args: [{
      selector: "[pButtonIcon]",
      providers: [ButtonStyle, {
        provide: BUTTON_ICON_INSTANCE,
        useExisting: ButtonIcon
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ButtonIcon
      }],
      standalone: true,
      host: {
        "[class.p-button-icon]": "!$unstyled() && true"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    ptButtonIcon: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ptButtonIcon",
        required: false
      }]
    }],
    pButtonIconPT: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pButtonIconPT",
        required: false
      }]
    }],
    pButtonUnstyled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pButtonUnstyled",
        required: false
      }]
    }]
  });
})();
var ButtonDirective = class _ButtonDirective extends BaseComponent {
  componentName = "Button";
  $pcButtonDirective = inject(BUTTON_DIRECTIVE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(ButtonStyle);
  /**
   * Used to pass attributes to DOM elements inside the Button component.
   * @defaultValue undefined
   * @deprecated use pButtonPT instead.
   * @group Props
   */
  ptButtonDirective = input(...ngDevMode ? [void 0, {
    debugName: "ptButtonDirective"
  }] : []);
  /**
   * Used to pass attributes to DOM elements inside the Button component.
   * @defaultValue undefined
   * @group Props
   */
  pButtonPT = input(...ngDevMode ? [void 0, {
    debugName: "pButtonPT"
  }] : []);
  /**
   * Indicates whether the component should be rendered without styles.
   * @defaultValue undefined
   * @group Props
   */
  pButtonUnstyled = input(...ngDevMode ? [void 0, {
    debugName: "pButtonUnstyled"
  }] : []);
  hostName = "";
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  constructor() {
    super();
    effect(() => {
      const pt = this.ptButtonDirective() || this.pButtonPT();
      pt && this.directivePT.set(pt);
    });
    effect(() => {
      this.pButtonUnstyled() && this.directiveUnstyled.set(this.pButtonUnstyled());
    });
    effect(() => {
      const unstyled = this.$unstyled();
      if (this.initialized && unstyled) {
        this.setStyleClass();
      }
    });
  }
  /**
   * Add a textual class to the button without a background initially.
   * @group Props
   */
  text = false;
  /**
   * Add a plain textual class to the button without a background initially.
   * @group Props
   */
  plain = false;
  /**
   * Add a shadow to indicate elevation.
   * @group Props
   */
  raised = false;
  /**
   * Defines the size of the button.
   * @group Props
   */
  size;
  /**
   * Add a border class without a background initially.
   * @group Props
   */
  outlined = false;
  /**
   * Add a circular border radius to the button.
   * @group Props
   */
  rounded = false;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fluid"
  } : {}), {
    transform: booleanAttribute
  }));
  iconSignal = contentChild(ButtonIcon, ...ngDevMode ? [{
    debugName: "iconSignal"
  }] : []);
  labelSignal = contentChild(ButtonLabel, ...ngDevMode ? [{
    debugName: "labelSignal"
  }] : []);
  isIconOnly = computed(() => !!(!this.labelSignal() && this.iconSignal()), ...ngDevMode ? [{
    debugName: "isIconOnly"
  }] : []);
  _label;
  _icon;
  _loading = false;
  _severity;
  _buttonProps;
  initialized;
  get htmlElement() {
    return this.el.nativeElement;
  }
  _internalClasses = Object.values(INTERNAL_BUTTON_CLASSES);
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  isTextButton = computed(() => !!(!this.iconSignal() && this.labelSignal() && this.text), ...ngDevMode ? [{
    debugName: "isTextButton"
  }] : []);
  /**
   * Text of the button.
   * @deprecated use pButtonLabel directive instead.
   * @group Props
   */
  get label() {
    return this._label;
  }
  set label(val) {
    this._label = val;
    if (this.initialized) {
      this.updateLabel();
      this.updateIcon();
      this.setStyleClass();
    }
  }
  /**
   * Name of the icon.
   * @deprecated use pButtonIcon directive instead
   * @group Props
   */
  get icon() {
    return this._icon;
  }
  set icon(val) {
    this._icon = val;
    if (this.initialized) {
      this.updateIcon();
      this.setStyleClass();
    }
  }
  /**
   * Whether the button is in loading state.
   * @group Props
   */
  get loading() {
    return this._loading;
  }
  set loading(val) {
    this._loading = val;
    if (this.initialized) {
      this.updateIcon();
      this.setStyleClass();
    }
  }
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @deprecated assign props directly to the button element.
   * @group Props
   */
  get buttonProps() {
    return this._buttonProps;
  }
  set buttonProps(val) {
    this._buttonProps = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k2, v3]) => this[`_${k2}`] !== v3 && (this[`_${k2}`] = v3));
    }
  }
  /**
   * Defines the style of the button.
   * @group Props
   */
  get severity() {
    return this._severity;
  }
  set severity(value) {
    this._severity = value;
    if (this.initialized) {
      this.setStyleClass();
    }
  }
  spinnerIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;
  onAfterViewInit() {
    !this.$unstyled() && W(this.htmlElement, this.getStyleClass().join(" "));
    if (isPlatformBrowser(this.platformId)) {
      this.createIcon();
      this.createLabel();
      this.initialized = true;
    }
  }
  getStyleClass() {
    const styleClass = [INTERNAL_BUTTON_CLASSES.button, INTERNAL_BUTTON_CLASSES.component];
    if (this.icon && !this.label && l(this.htmlElement.textContent)) {
      styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
    }
    if (this.loading) {
      styleClass.push(INTERNAL_BUTTON_CLASSES.disabled, INTERNAL_BUTTON_CLASSES.loading);
      if (!this.icon && this.label) {
        styleClass.push(INTERNAL_BUTTON_CLASSES.labelOnly);
      }
      if (this.icon && !this.label && !l(this.htmlElement.textContent)) {
        styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
      }
    }
    if (this.text) {
      styleClass.push("p-button-text");
    }
    if (this.severity) {
      styleClass.push(`p-button-${this.severity}`);
    }
    if (this.plain) {
      styleClass.push("p-button-plain");
    }
    if (this.raised) {
      styleClass.push("p-button-raised");
    }
    if (this.size) {
      styleClass.push(`p-button-${this.size}`);
    }
    if (this.outlined) {
      styleClass.push("p-button-outlined");
    }
    if (this.rounded) {
      styleClass.push("p-button-rounded");
    }
    if (this.size === "small") {
      styleClass.push("p-button-sm");
    }
    if (this.size === "large") {
      styleClass.push("p-button-lg");
    }
    if (this.hasFluid) {
      styleClass.push("p-button-fluid");
    }
    return this.$unstyled() ? [] : styleClass;
  }
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  setStyleClass() {
    const styleClass = this.getStyleClass();
    this.removeExistingSeverityClass();
    this.htmlElement.classList.remove(...this._internalClasses);
    this.htmlElement.classList.add(...styleClass);
  }
  removeExistingSeverityClass() {
    const severityArray = ["success", "info", "warn", "danger", "help", "primary", "secondary", "contrast"];
    const existingSeverityClass = this.htmlElement.classList.value.split(" ").find((cls) => severityArray.some((severity) => cls === `p-button-${severity}`));
    if (existingSeverityClass) {
      this.htmlElement.classList.remove(existingSeverityClass);
    }
  }
  createLabel() {
    const created = z(this.htmlElement, '[data-pc-section="buttonlabel"]');
    if (!created && this.label) {
      let labelElement = U("span", {
        class: this.cx("label"),
        "p-bind": this.ptm("buttonlabel"),
        "aria-hidden": this.icon && !this.label ? "true" : null
      });
      labelElement.appendChild(this.document.createTextNode(this.label));
      this.htmlElement.appendChild(labelElement);
    }
  }
  createIcon() {
    const created = z(this.htmlElement, '[data-pc-section="buttonicon"]');
    if (!created && (this.icon || this.loading)) {
      let iconPosClass = this.label && !this.$unstyled() ? "p-button-icon-" + this.iconPos : null;
      let iconClass = !this.$unstyled() && this.getIconClass();
      let iconElement = U("span", {
        class: this.cn(this.cx("icon"), iconPosClass, iconClass),
        "aria-hidden": "true",
        "p-bind": this.ptm("buttonicon")
      });
      if (!this.loadingIcon && this.loading) {
        iconElement.innerHTML = this.spinnerIcon;
      }
      this.htmlElement.insertBefore(iconElement, this.htmlElement.firstChild);
    }
  }
  updateLabel() {
    let labelElement = z(this.htmlElement, '[data-pc-section="buttonlabel"]');
    if (!this.label) {
      labelElement && this.htmlElement.removeChild(labelElement);
      return;
    }
    labelElement ? labelElement.textContent = this.label : this.createLabel();
  }
  updateIcon() {
    let iconElement = z(this.htmlElement, '[data-pc-section="buttonicon"]');
    let labelElement = z(this.htmlElement, '[data-pc-section="buttonlabel"]');
    if (this.loading && !this.loadingIcon && iconElement) {
      iconElement.innerHTML = this.spinnerIcon;
    } else if (iconElement?.innerHTML) {
      iconElement.innerHTML = "";
    }
    if (iconElement && !this.$unstyled()) {
      if (this.iconPos) {
        iconElement.className = "p-button-icon " + (labelElement ? "p-button-icon-" + this.iconPos : "") + " " + this.getIconClass();
      } else {
        iconElement.className = "p-button-icon " + this.getIconClass();
      }
    } else {
      this.createIcon();
    }
  }
  getIconClass() {
    return this.loading ? "p-button-loading-icon " + (this.loadingIcon ? this.loadingIcon : "p-icon") : this.icon || "p-hidden";
  }
  onDestroy() {
    this.initialized = false;
  }
  static \u0275fac = function ButtonDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ButtonDirective,
    selectors: [["", "pButton", ""]],
    contentQueries: function ButtonDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.iconSignal, ButtonIcon, 5)(dirIndex, ctx.labelSignal, ButtonLabel, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    hostVars: 4,
    hostBindings: function ButtonDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-button-icon-only", !ctx.$unstyled() && ctx.isIconOnly())("p-button-text", !ctx.$unstyled() && ctx.isTextButton());
      }
    },
    inputs: {
      ptButtonDirective: [1, "ptButtonDirective"],
      pButtonPT: [1, "pButtonPT"],
      pButtonUnstyled: [1, "pButtonUnstyled"],
      hostName: "hostName",
      text: [2, "text", "text", booleanAttribute],
      plain: [2, "plain", "plain", booleanAttribute],
      raised: [2, "raised", "raised", booleanAttribute],
      size: "size",
      outlined: [2, "outlined", "outlined", booleanAttribute],
      rounded: [2, "rounded", "rounded", booleanAttribute],
      iconPos: "iconPos",
      loadingIcon: "loadingIcon",
      fluid: [1, "fluid"],
      label: "label",
      icon: "icon",
      loading: "loading",
      buttonProps: "buttonProps",
      severity: "severity"
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle, {
      provide: BUTTON_DIRECTIVE_INSTANCE,
      useExisting: _ButtonDirective
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ButtonDirective
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[pButton]",
      standalone: true,
      providers: [ButtonStyle, {
        provide: BUTTON_DIRECTIVE_INSTANCE,
        useExisting: ButtonDirective
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ButtonDirective
      }],
      host: {
        "[class.p-button-icon-only]": "!$unstyled() && isIconOnly()",
        "[class.p-button-text]": " !$unstyled() && isTextButton()"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    ptButtonDirective: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ptButtonDirective",
        required: false
      }]
    }],
    pButtonPT: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pButtonPT",
        required: false
      }]
    }],
    pButtonUnstyled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pButtonUnstyled",
        required: false
      }]
    }],
    hostName: [{
      type: Input
    }],
    text: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    plain: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    raised: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    outlined: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    iconPos: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    iconSignal: [{
      type: ContentChild,
      args: [forwardRef(() => ButtonIcon), {
        isSignal: true
      }]
    }],
    labelSignal: [{
      type: ContentChild,
      args: [forwardRef(() => ButtonLabel), {
        isSignal: true
      }]
    }],
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    buttonProps: [{
      type: Input
    }],
    severity: [{
      type: Input
    }]
  });
})();
var Button = class _Button extends BaseComponent {
  componentName = "Button";
  hostName = "";
  $pcButton = inject(BUTTON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(ButtonStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  /**
   * Type of the button.
   * @group Props
   */
  type = "button";
  /**
   * Value of the badge.
   * @group Props
   */
  badge;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Add a shadow to indicate elevation.
   * @group Props
   */
  raised = false;
  /**
   * Add a circular border radius to the button.
   * @group Props
   */
  rounded = false;
  /**
   * Add a textual class to the button without a background initially.
   * @group Props
   */
  text = false;
  /**
   * Add a plain textual class to the button without a background initially.
   * @group Props
   */
  plain = false;
  /**
   * Add a border class without a background initially.
   * @group Props
   */
  outlined = false;
  /**
   * Add a link style to the button.
   * @group Props
   */
  link = false;
  /**
   * Add a tabindex to the button.
   * @group Props
   */
  tabindex;
  /**
   * Defines the size of the button.
   * @group Props
   */
  size;
  /**
   * Specifies the variant of the component.
   * @group Props
   */
  variant;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the badge.
   * @group Props
   * @deprecated use badgeSeverity instead.
   */
  badgeClass;
  /**
   * Severity type of the badge.
   * @group Props
   * @defaultValue secondary
   */
  badgeSeverity = "secondary";
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * Name of the icon.
   * @group Props
   */
  icon;
  /**
   * Text of the button.
   * @group Props
   */
  label;
  /**
   * Whether the button is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Defines the style of the button.
   * @group Props
   */
  severity;
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  buttonProps;
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fluid"
  } : {}), {
    transform: booleanAttribute
  }));
  /**
   * Callback to execute when button is clicked.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (click).
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to execute when button is focused.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (focus).
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to execute when button loses focus.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (blur).
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Custom content template.
   * @group Templates
   **/
  contentTemplate;
  /**
   * Custom loading icon template.
   * @group Templates
   **/
  loadingIconTemplate;
  /**
   * Custom icon template.
   * @group Templates
   **/
  iconTemplate;
  templates;
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  get hasIcon() {
    return this.icon || this.buttonProps?.icon || this.iconTemplate || this._iconTemplate || this.loadingIcon || this.loadingIconTemplate || this._loadingIconTemplate;
  }
  _contentTemplate;
  _iconTemplate;
  _loadingIconTemplate;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "loadingicon":
          this._loadingIconTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  get dataP() {
    return this.cn({
      [this.size]: this.size,
      "icon-only": this.hasIcon && !this.label && !this.badge,
      loading: this.loading,
      fluid: this.hasFluid,
      rounded: this.rounded,
      raised: this.raised,
      outlined: this.outlined || this.variant === "outlined",
      text: this.text || this.variant === "text",
      link: this.link,
      vertical: (this.iconPos === "top" || this.iconPos === "bottom") && this.label
    });
  }
  get dataIconP() {
    return this.cn({
      [this.iconPos]: this.iconPos,
      [this.size]: this.size
    });
  }
  get dataLabelP() {
    return this.cn({
      [this.size]: this.size,
      "icon-only": this.hasIcon && !this.label && !this.badge
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Button_BaseFactory;
    return function Button_Factory(__ngFactoryType__) {
      return (\u0275Button_BaseFactory || (\u0275Button_BaseFactory = \u0275\u0275getInheritedFactory(_Button)))(__ngFactoryType__ || _Button);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Button,
    selectors: [["p-button"]],
    contentQueries: function Button_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c09, 5)(dirIndex, _c1, 5)(dirIndex, _c2, 5)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.loadingIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    inputs: {
      hostName: "hostName",
      type: "type",
      badge: "badge",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      raised: [2, "raised", "raised", booleanAttribute],
      rounded: [2, "rounded", "rounded", booleanAttribute],
      text: [2, "text", "text", booleanAttribute],
      plain: [2, "plain", "plain", booleanAttribute],
      outlined: [2, "outlined", "outlined", booleanAttribute],
      link: [2, "link", "link", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      size: "size",
      variant: "variant",
      style: "style",
      styleClass: "styleClass",
      badgeClass: "badgeClass",
      badgeSeverity: "badgeSeverity",
      ariaLabel: "ariaLabel",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      iconPos: "iconPos",
      icon: "icon",
      label: "label",
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      severity: "severity",
      buttonProps: "buttonProps",
      fluid: [1, "fluid"]
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle, {
      provide: BUTTON_INSTANCE,
      useExisting: _Button
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Button
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c3,
    decls: 7,
    vars: 17,
    consts: [["pRipple", "", 3, "click", "focus", "blur", "ngStyle", "disabled", "pAutoFocus", "pBind"], [4, "ngTemplateOutlet"], [4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], [3, "value", "severity", "pt", "unstyled", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "spinner", 3, "class", "pBind", "spin", 4, "ngIf"], [3, "pBind"], ["data-p-icon", "spinner", 3, "pBind", "spin"], [3, "ngIf"], [3, "value", "severity", "pt", "unstyled"]],
    template: function Button_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function Button_Template_button_click_0_listener($event) {
          return ctx.onClick.emit($event);
        })("focus", function Button_Template_button_focus_0_listener($event) {
          return ctx.onFocus.emit($event);
        })("blur", function Button_Template_button_blur_0_listener($event) {
          return ctx.onBlur.emit($event);
        });
        \u0275\u0275projection(1);
        \u0275\u0275template(2, Button_ng_container_2_Template, 1, 0, "ng-container", 1)(3, Button_ng_container_3_Template, 3, 6, "ng-container", 2)(4, Button_ng_container_4_Template, 3, 6, "ng-container", 2)(5, Button_span_5_Template, 2, 6, "span", 3)(6, Button_p_badge_6_Template, 1, 4, "p-badge", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass, ctx.buttonProps == null ? null : ctx.buttonProps.styleClass));
        \u0275\u0275property("ngStyle", ctx.style || (ctx.buttonProps == null ? null : ctx.buttonProps.style))("disabled", ctx.disabled || ctx.loading || (ctx.buttonProps == null ? null : ctx.buttonProps.disabled))("pAutoFocus", ctx.autofocus || (ctx.buttonProps == null ? null : ctx.buttonProps.autofocus))("pBind", ctx.ptm("root"));
        \u0275\u0275attribute("type", ctx.type || (ctx.buttonProps == null ? null : ctx.buttonProps.type))("aria-label", ctx.ariaLabel || (ctx.buttonProps == null ? null : ctx.buttonProps.ariaLabel))("tabindex", ctx.tabindex || (ctx.buttonProps == null ? null : ctx.buttonProps.tabindex))("data-p", ctx.dataP)("data-p-disabled", ctx.disabled || ctx.loading || (ctx.buttonProps == null ? null : ctx.buttonProps.disabled))("data-p-severity", ctx.severity || (ctx.buttonProps == null ? null : ctx.buttonProps.severity));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading || (ctx.buttonProps == null ? null : ctx.buttonProps.loading));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !(ctx.loading || (ctx.buttonProps == null ? null : ctx.buttonProps.loading)));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.contentTemplate && !ctx._contentTemplate && (ctx.label || (ctx.buttonProps == null ? null : ctx.buttonProps.label)));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.contentTemplate && !ctx._contentTemplate && (ctx.badge || (ctx.buttonProps == null ? null : ctx.buttonProps.badge)));
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, Ripple, AutoFocus, SpinnerIcon, BadgeModule, Badge, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Button, [{
    type: Component,
    args: [{
      selector: "p-button",
      standalone: true,
      imports: [CommonModule, Ripple, AutoFocus, SpinnerIcon, BadgeModule, SharedModule, Bind],
      template: `
        <button
            [attr.type]="type || buttonProps?.type"
            [attr.aria-label]="ariaLabel || buttonProps?.ariaLabel"
            [ngStyle]="style || buttonProps?.style"
            [disabled]="disabled || loading || buttonProps?.disabled"
            [class]="cn(cx('root'), styleClass, buttonProps?.styleClass)"
            (click)="onClick.emit($event)"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            pRipple
            [attr.tabindex]="tabindex || buttonProps?.tabindex"
            [pAutoFocus]="autofocus || buttonProps?.autofocus"
            [pBind]="ptm('root')"
            [attr.data-p]="dataP"
            [attr.data-p-disabled]="disabled || loading || buttonProps?.disabled"
            [attr.data-p-severity]="severity || buttonProps?.severity"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            <ng-container *ngIf="loading || buttonProps?.loading">
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon || buttonProps?.loadingIcon" [class]="cn(cx('loadingIcon'), 'pi-spin', loadingIcon || buttonProps?.loadingIcon)" [pBind]="ptm('loadingIcon')" [attr.aria-hidden]="true"></span>
                    <svg data-p-icon="spinner" *ngIf="!(loadingIcon || buttonProps?.loadingIcon)" [class]="cn(cx('loadingIcon'), cx('spinnerIcon'))" [pBind]="ptm('loadingIcon')" [spin]="true" [attr.aria-hidden]="true" />
                </ng-container>
                <ng-template [ngIf]="loadingIconTemplate || _loadingIconTemplate" *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate; context: { class: cx('loadingIcon'), pt: ptm('loadingIcon') }"></ng-template>
            </ng-container>
            <ng-container *ngIf="!(loading || buttonProps?.loading)">
                <span *ngIf="(icon || buttonProps?.icon) && !iconTemplate && !_iconTemplate" [class]="cn(cx('icon'), icon || buttonProps?.icon)" [pBind]="ptm('icon')" [attr.data-p]="dataIconP"></span>
                <ng-template [ngIf]="!icon && (iconTemplate || _iconTemplate)" *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { class: cx('icon'), pt: ptm('icon') }"></ng-template>
            </ng-container>
            <span
                [class]="cx('label')"
                [attr.aria-hidden]="(icon || buttonProps?.icon) && !(label || buttonProps?.label)"
                *ngIf="!contentTemplate && !_contentTemplate && (label || buttonProps?.label)"
                [pBind]="ptm('label')"
                [attr.data-p]="dataLabelP"
                >{{ label || buttonProps?.label }}</span
            >
            <p-badge
                *ngIf="!contentTemplate && !_contentTemplate && (badge || buttonProps?.badge)"
                [value]="badge || buttonProps?.badge"
                [severity]="badgeSeverity || buttonProps?.badgeSeverity"
                [pt]="ptm('pcBadge')"
                [unstyled]="unstyled()"
            ></p-badge>
        </button>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ButtonStyle, {
        provide: BUTTON_INSTANCE,
        useExisting: Button
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Button
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    hostName: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    badge: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    raised: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    text: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    plain: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    outlined: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    link: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    badgeClass: [{
      type: Input
    }],
    badgeSeverity: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    iconPos: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    buttonProps: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    onClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content"]
    }],
    loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon"]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ButtonModule = class _ButtonModule {
  static \u0275fac = function ButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ButtonModule,
    imports: [CommonModule, ButtonDirective, Button, SharedModule, ButtonLabel, ButtonIcon],
    exports: [ButtonDirective, Button, ButtonLabel, ButtonIcon, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, Button, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonDirective, Button, SharedModule, ButtonLabel, ButtonIcon],
      exports: [ButtonDirective, Button, ButtonLabel, ButtonIcon, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-basemodelholder.mjs
var BaseModelHolder = class _BaseModelHolder extends BaseComponent {
  modelValue = signal(void 0, ...ngDevMode ? [{
    debugName: "modelValue"
  }] : []);
  $filled = computed(() => s(this.modelValue()), ...ngDevMode ? [{
    debugName: "$filled"
  }] : []);
  writeModelValue(value) {
    this.modelValue.set(value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseModelHolder_BaseFactory;
    return function BaseModelHolder_Factory(__ngFactoryType__) {
      return (\u0275BaseModelHolder_BaseFactory || (\u0275BaseModelHolder_BaseFactory = \u0275\u0275getInheritedFactory(_BaseModelHolder)))(__ngFactoryType__ || _BaseModelHolder);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseModelHolder,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseModelHolder, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/inputtext/index.mjs
var style6 = "\n    .p-inputtext {\n        font-family: inherit;\n        font-feature-settings: inherit;\n        font-size: 1rem;\n        color: dt('inputtext.color');\n        background: dt('inputtext.background');\n        padding-block: dt('inputtext.padding.y');\n        padding-inline: dt('inputtext.padding.x');\n        border: 1px solid dt('inputtext.border.color');\n        transition:\n            background dt('inputtext.transition.duration'),\n            color dt('inputtext.transition.duration'),\n            border-color dt('inputtext.transition.duration'),\n            outline-color dt('inputtext.transition.duration'),\n            box-shadow dt('inputtext.transition.duration');\n        appearance: none;\n        border-radius: dt('inputtext.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('inputtext.shadow');\n    }\n\n    .p-inputtext:enabled:hover {\n        border-color: dt('inputtext.hover.border.color');\n    }\n\n    .p-inputtext:enabled:focus {\n        border-color: dt('inputtext.focus.border.color');\n        box-shadow: dt('inputtext.focus.ring.shadow');\n        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');\n        outline-offset: dt('inputtext.focus.ring.offset');\n    }\n\n    .p-inputtext.p-invalid {\n        border-color: dt('inputtext.invalid.border.color');\n    }\n\n    .p-inputtext.p-variant-filled {\n        background: dt('inputtext.filled.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:hover {\n        background: dt('inputtext.filled.hover.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:focus {\n        background: dt('inputtext.filled.focus.background');\n    }\n\n    .p-inputtext:disabled {\n        opacity: 1;\n        background: dt('inputtext.disabled.background');\n        color: dt('inputtext.disabled.color');\n    }\n\n    .p-inputtext::placeholder {\n        color: dt('inputtext.placeholder.color');\n    }\n\n    .p-inputtext.p-invalid::placeholder {\n        color: dt('inputtext.invalid.placeholder.color');\n    }\n\n    .p-inputtext-sm {\n        font-size: dt('inputtext.sm.font.size');\n        padding-block: dt('inputtext.sm.padding.y');\n        padding-inline: dt('inputtext.sm.padding.x');\n    }\n\n    .p-inputtext-lg {\n        font-size: dt('inputtext.lg.font.size');\n        padding-block: dt('inputtext.lg.padding.y');\n        padding-inline: dt('inputtext.lg.padding.x');\n    }\n\n    .p-inputtext-fluid {\n        width: 100%;\n    }\n";

// node_modules/primeng/fesm2022/primeng-inputtext.mjs
var style7 = (
  /*css*/
  `
    ${style6}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`
);
var classes5 = {
  root: ({
    instance
  }) => ["p-inputtext p-component", {
    "p-filled": instance.$filled(),
    "p-inputtext-sm": instance.pSize === "small",
    "p-inputtext-lg": instance.pSize === "large",
    "p-invalid": instance.invalid(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-inputtext-fluid": instance.hasFluid
  }]
};
var InputTextStyle = class _InputTextStyle extends BaseStyle {
  name = "inputtext";
  style = style7;
  classes = classes5;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputTextStyle_BaseFactory;
    return function InputTextStyle_Factory(__ngFactoryType__) {
      return (\u0275InputTextStyle_BaseFactory || (\u0275InputTextStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputTextStyle)))(__ngFactoryType__ || _InputTextStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputTextStyle,
    factory: _InputTextStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextStyle, [{
    type: Injectable
  }], null, null);
})();
var InputTextClasses;
(function(InputTextClasses2) {
  InputTextClasses2["root"] = "p-inputtext";
})(InputTextClasses || (InputTextClasses = {}));
var INPUTTEXT_INSTANCE = new InjectionToken("INPUTTEXT_INSTANCE");
var InputText = class _InputText extends BaseModelHolder {
  componentName = "InputText";
  hostName = "";
  /**
   * Used to pass attributes to DOM elements inside the InputText component.
   * @defaultValue undefined
   * @deprecated use pInputTextPT instead.
   * @group Props
   */
  ptInputText = input(...ngDevMode ? [void 0, {
    debugName: "ptInputText"
  }] : []);
  /**
   * Used to pass attributes to DOM elements inside the InputText component.
   * @defaultValue undefined
   * @group Props
   */
  pInputTextPT = input(...ngDevMode ? [void 0, {
    debugName: "pInputTextPT"
  }] : []);
  /**
   * Indicates whether the component should be rendered without styles.
   * @defaultValue undefined
   * @group Props
   */
  pInputTextUnstyled = input(...ngDevMode ? [void 0, {
    debugName: "pInputTextUnstyled"
  }] : []);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcInputText = inject(INPUTTEXT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  /**
   * Defines the size of the component.
   * @group Props
   */
  pSize;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fluid"
  } : {}), {
    transform: booleanAttribute
  }));
  /**
   * When present, it specifies that the component should have invalid state style.
   * @defaultValue false
   * @group Props
   */
  invalid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "invalid"
  } : {}), {
    transform: booleanAttribute
  }));
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  _componentStyle = inject(InputTextStyle);
  constructor() {
    super();
    effect(() => {
      const pt = this.ptInputText() || this.pInputTextPT();
      pt && this.directivePT.set(pt);
    });
    effect(() => {
      this.pInputTextUnstyled() && this.directiveUnstyled.set(this.pInputTextUnstyled());
    });
  }
  onAfterViewInit() {
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
    this.cd.detectChanges();
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  onDoCheck() {
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
  }
  onInput() {
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
  }
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  get dataP() {
    return this.cn({
      invalid: this.invalid(),
      fluid: this.hasFluid,
      filled: this.$variant() === "filled",
      [this.pSize]: this.pSize
    });
  }
  static \u0275fac = function InputText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputText)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _InputText,
    selectors: [["", "pInputText", ""]],
    hostVars: 3,
    hostBindings: function InputText_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function InputText_input_HostBindingHandler() {
          return ctx.onInput();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      hostName: "hostName",
      ptInputText: [1, "ptInputText"],
      pInputTextPT: [1, "pInputTextPT"],
      pInputTextUnstyled: [1, "pInputTextUnstyled"],
      pSize: "pSize",
      variant: [1, "variant"],
      fluid: [1, "fluid"],
      invalid: [1, "invalid"]
    },
    features: [\u0275\u0275ProvidersFeature([InputTextStyle, {
      provide: INPUTTEXT_INSTANCE,
      useExisting: _InputText
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _InputText
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputText, [{
    type: Directive,
    args: [{
      selector: "[pInputText]",
      standalone: true,
      host: {
        "[class]": "cx('root')",
        "[attr.data-p]": "dataP"
      },
      providers: [InputTextStyle, {
        provide: INPUTTEXT_INSTANCE,
        useExisting: InputText
      }, {
        provide: PARENT_INSTANCE,
        useExisting: InputText
      }],
      hostDirectives: [Bind]
    }]
  }], () => [], {
    hostName: [{
      type: Input
    }],
    ptInputText: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ptInputText",
        required: false
      }]
    }],
    pInputTextPT: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pInputTextPT",
        required: false
      }]
    }],
    pInputTextUnstyled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pInputTextUnstyled",
        required: false
      }]
    }],
    pSize: [{
      type: Input,
      args: ["pSize"]
    }],
    variant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    invalid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "invalid",
        required: false
      }]
    }],
    onInput: [{
      type: HostListener,
      args: ["input"]
    }]
  });
})();
var InputTextModule = class _InputTextModule {
  static \u0275fac = function InputTextModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputTextModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputTextModule,
    imports: [InputText],
    exports: [InputText]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextModule, [{
    type: NgModule,
    args: [{
      imports: [InputText],
      exports: [InputText]
    }]
  }], null, null);
})();

// node_modules/@primeuix/motion/dist/index.mjs
var j = Object.defineProperty;
var T = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty;
var V = Object.prototype.propertyIsEnumerable;
var D = (t, n, e) => n in t ? j(t, n, { enumerable: true, configurable: true, writable: true, value: e }) : t[n] = e;
var p = (t, n) => {
  for (var e in n || (n = {})) q.call(n, e) && D(t, e, n[e]);
  if (T) for (var e of T(n)) V.call(n, e) && D(t, e, n[e]);
  return t;
};
var N = (t, n, e) => new Promise((o, m) => {
  var i = (r) => {
    try {
      f2(e.next(r));
    } catch (u) {
      m(u);
    }
  }, M = (r) => {
    try {
      f2(e.throw(r));
    } catch (u) {
      m(u);
    }
  }, f2 = (r) => r.done ? o(r.value) : Promise.resolve(r.value).then(i, M);
  f2((e = e.apply(t, n)).next());
});
var E = "animation";
var v2 = "transition";
function H(t) {
  return t ? t.disabled || !!(t.safe && qt()) : false;
}
function k(t, n) {
  return t ? p(p({}, t), Object.entries(n).reduce((e, [o, m]) => {
    var i;
    return e[o] = (i = t[o]) != null ? i : m, e;
  }, {})) : n;
}
function L(t) {
  let { name: n, enterClass: e, leaveClass: o } = t || {};
  return { enter: { from: (e == null ? void 0 : e.from) || `${n}-enter-from`, to: (e == null ? void 0 : e.to) || `${n}-enter-to`, active: (e == null ? void 0 : e.active) || `${n}-enter-active` }, leave: { from: (o == null ? void 0 : o.from) || `${n}-leave-from`, to: (o == null ? void 0 : o.to) || `${n}-leave-to`, active: (o == null ? void 0 : o.active) || `${n}-leave-active` } };
}
function W2(t) {
  return { enter: { onBefore: t == null ? void 0 : t.onBeforeEnter, onStart: t == null ? void 0 : t.onEnter, onAfter: t == null ? void 0 : t.onAfterEnter, onCancelled: t == null ? void 0 : t.onEnterCancelled }, leave: { onBefore: t == null ? void 0 : t.onBeforeLeave, onStart: t == null ? void 0 : t.onLeave, onAfter: t == null ? void 0 : t.onAfterLeave, onCancelled: t == null ? void 0 : t.onLeaveCancelled } };
}
function A(t, n) {
  let e = window.getComputedStyle(t), o = (l2) => {
    let c = e[`${l2}Delay`], h = e[`${l2}Duration`];
    return [c.split(", ").map(oe), h.split(", ").map(oe)];
  }, [m, i] = o(v2), [M, f2] = o(E), r = Math.max(...i.map((l2, c) => l2 + m[c])), u = Math.max(...f2.map((l2, c) => l2 + M[c])), a, s3 = 0, d = 0;
  return n === v2 ? r > 0 && (a = v2, s3 = r, d = i.length) : n === E ? u > 0 && (a = E, s3 = u, d = f2.length) : (s3 = Math.max(r, u), a = s3 > 0 ? r > u ? v2 : E : void 0, d = a ? a === v2 ? i.length : f2.length : 0), { type: a, timeout: s3, count: d };
}
function $(t, n) {
  return typeof t == "number" ? t : typeof t == "object" && t[n] != null ? t[n] : null;
}
function S(t, n = true, e = false) {
  if (!n && !e) return;
  let o = w(t);
  n && te(t, "--pui-motion-height", o.height + "px"), e && te(t, "--pui-motion-width", o.width + "px");
}
var U2 = { name: "p", safe: true, disabled: false, enter: true, leave: true, autoHeight: true, autoWidth: false };
function tt(t, n) {
  if (!t) throw new Error("Element is required.");
  let e = {}, o = false, m = {}, i = null, M = {}, f2 = (a) => {
    if (Object.assign(e, k(a, U2)), !e.enter && !e.leave) throw new Error("Enter or leave must be true.");
    M = W2(e), o = H(e), m = L(e), i = null;
  }, r = (a) => N(null, null, function* () {
    i == null || i();
    let { onBefore: s3, onStart: d, onAfter: l2, onCancelled: c } = M[a] || {}, h = { element: t };
    if (o) {
      s3 == null || s3(h), d == null || d(h), l2 == null || l2(h);
      return;
    }
    let { from: g, active: y, to: P2 } = m[a] || {};
    return S(t, e.autoHeight, e.autoWidth), s3 == null || s3(h), W(t, g), W(t, y), t.offsetHeight, P(t, g), W(t, P2), d == null || d(h), new Promise((b) => {
      let C2 = $(e.duration, a), x = () => {
        P(t, [P2, y]), i = null;
      }, R2 = () => {
        x(), l2 == null || l2(h), b();
      };
      i = () => {
        x(), c == null || c(h), b();
      }, G(t, e.type, C2, R2);
    });
  });
  f2(n);
  let u = { enter: () => e.enter ? r("enter") : Promise.resolve(), leave: () => e.leave ? r("leave") : Promise.resolve(), cancel: () => {
    i == null || i(), i = null;
  }, update: (a, s3) => {
    if (!a) throw new Error("Element is required.");
    t = a, u.cancel(), f2(s3);
  } };
  return e.appear && u.enter(), u;
}
var z2 = 0;
function G(t, n, e, o) {
  let m = t._motionEndId = ++z2, i = () => {
    m === t._motionEndId && o();
  };
  if (e != null) return setTimeout(i, e);
  let { type: M, timeout: f2, count: r } = A(t, n);
  if (!M) {
    o();
    return;
  }
  let u = M + "end", a = 0, s3 = () => {
    t.removeEventListener(u, d, true), i();
  }, d = (l2) => {
    l2.target === t && ++a >= r && s3();
  };
  t.addEventListener(u, d, { capture: true, once: true }), setTimeout(() => {
    a < r && s3();
  }, f2 + 1);
}

// node_modules/primeng/fesm2022/primeng-motion.mjs
var _c010 = ["*"];
function Motion_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var originalStyles = /* @__PURE__ */ new WeakMap();
function applyHiddenStyles(element, strategy) {
  if (!element) return;
  if (!originalStyles.has(element)) {
    originalStyles.set(element, {
      display: element.style.display,
      visibility: element.style.visibility,
      maxHeight: element.style.maxHeight
    });
  }
  switch (strategy) {
    case "display":
      element.style.display = "none";
      break;
    case "visibility":
      element.style.visibility = "hidden";
      element.style.maxHeight = "0";
      break;
  }
}
function resetStyles(element, strategy) {
  if (!element) return;
  const original = originalStyles.get(element) ?? element.style;
  switch (strategy) {
    case "display":
      element.style.display = original?.display || "";
      break;
    case "visibility":
      element.style.visibility = original?.visibility || "";
      element.style.maxHeight = original?.maxHeight || "";
      break;
  }
  originalStyles.delete(element);
}
var style8 = (
  /*css*/
  `
    .p-motion {
        display: block;
    }
`
);
var classes6 = {
  root: "p-motion"
};
var MotionStyle = class _MotionStyle extends BaseStyle {
  name = "motion";
  style = style8;
  classes = classes6;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MotionStyle_BaseFactory;
    return function MotionStyle_Factory(__ngFactoryType__) {
      return (\u0275MotionStyle_BaseFactory || (\u0275MotionStyle_BaseFactory = \u0275\u0275getInheritedFactory(_MotionStyle)))(__ngFactoryType__ || _MotionStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MotionStyle,
    factory: _MotionStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionStyle, [{
    type: Injectable
  }], null, null);
})();
var MotionClasses;
(function(MotionClasses2) {
  MotionClasses2["root"] = "p-motion";
})(MotionClasses || (MotionClasses = {}));
var MOTION_INSTANCE = new InjectionToken("MOTION_INSTANCE");
var Motion = class _Motion extends BaseComponent {
  $pcMotion = inject(MOTION_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    const options = this.options();
    const optionsAttrs = options?.root || {};
    this.bindDirectiveInstance.setAttrs(__spreadValues(__spreadValues({}, this.ptms(["host", "root"])), optionsAttrs));
  }
  _componentStyle = inject(MotionStyle);
  /******************** Inputs ********************/
  /**
   * Whether the element is visible or not.
   * @group Props
   */
  visible = input(false, ...ngDevMode ? [{
    debugName: "visible"
  }] : []);
  /**
   * Whether to mount the element on enter.
   * @group Props
   */
  mountOnEnter = input(true, ...ngDevMode ? [{
    debugName: "mountOnEnter"
  }] : []);
  /**
   * Whether to unmount the element on leave.
   * @group Props
   */
  unmountOnLeave = input(true, ...ngDevMode ? [{
    debugName: "unmountOnLeave"
  }] : []);
  /**
   * The name of the motion. It can be a predefined motion name or a custom one.
   * phases:
   *     [name]-enter
   *     [name]-enter-active
   *     [name]-enter-to
   *     [name]-leave
   *     [name]-leave-active
   *     [name]-leave-to
   * @group Props
   */
  name = input(void 0, ...ngDevMode ? [{
    debugName: "name"
  }] : []);
  /**
   * The type of the motion, valid values 'transition' and 'animation'.
   * @group Props
   */
  type = input(void 0, ...ngDevMode ? [{
    debugName: "type"
  }] : []);
  /**
   * Whether the motion is safe.
   * @group Props
   */
  safe = input(void 0, ...ngDevMode ? [{
    debugName: "safe"
  }] : []);
  /**
   * Whether the motion is disabled.
   * @group Props
   */
  disabled = input(false, ...ngDevMode ? [{
    debugName: "disabled"
  }] : []);
  /**
   * Whether the motion should appear.
   * @group Props
   */
  appear = input(false, ...ngDevMode ? [{
    debugName: "appear"
  }] : []);
  /**
   * Whether the motion should enter.
   * @group Props
   */
  enter = input(true, ...ngDevMode ? [{
    debugName: "enter"
  }] : []);
  /**
   * Whether the motion should leave.
   * @group Props
   */
  leave = input(true, ...ngDevMode ? [{
    debugName: "leave"
  }] : []);
  /**
   * The duration of the motion.
   * @group Props
   */
  duration = input(void 0, ...ngDevMode ? [{
    debugName: "duration"
  }] : []);
  /**
   * The hide strategy of the motion, valid values 'display' and 'visibility'.
   * @group Props
   */
  hideStrategy = input("display", ...ngDevMode ? [{
    debugName: "hideStrategy"
  }] : []);
  /**
   * The enter from class of the motion.
   * @group Props
   */
  enterFromClass = input(void 0, ...ngDevMode ? [{
    debugName: "enterFromClass"
  }] : []);
  /**
   * The enter to class of the motion.
   * @group Props
   */
  enterToClass = input(void 0, ...ngDevMode ? [{
    debugName: "enterToClass"
  }] : []);
  /**
   * The enter active class of the motion.
   * @group Props
   */
  enterActiveClass = input(void 0, ...ngDevMode ? [{
    debugName: "enterActiveClass"
  }] : []);
  /**
   * The leave from class of the motion.
   * @group Props
   */
  leaveFromClass = input(void 0, ...ngDevMode ? [{
    debugName: "leaveFromClass"
  }] : []);
  /**
   * The leave to class of the motion.
   * @group Props
   */
  leaveToClass = input(void 0, ...ngDevMode ? [{
    debugName: "leaveToClass"
  }] : []);
  /**
   * The leave active class of the motion.
   * @group Props
   */
  leaveActiveClass = input(void 0, ...ngDevMode ? [{
    debugName: "leaveActiveClass"
  }] : []);
  /******************** All Inputs ********************/
  /**
   * The motion options.
   * @group Props
   */
  options = input({}, ...ngDevMode ? [{
    debugName: "options"
  }] : []);
  /******************** Outputs ********************/
  /**
   * Callback fired before the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeEnter = output();
  /**
   * Callback fired when the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnter = output();
  /**
   * Callback fired after the enter transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterEnter = output();
  /**
   * Callback fired when the enter transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnterCancelled = output();
  /**
   * Callback fired before the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeLeave = output();
  /**
   * Callback fired when the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeave = output();
  /**
   * Callback fired after the leave transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterLeave = output();
  /**
   * Callback fired when the leave transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeaveCancelled = output();
  /******************** Computed ********************/
  motionOptions = computed(() => {
    const options = this.options();
    return {
      name: options.name ?? this.name(),
      type: options.type ?? this.type(),
      safe: options.safe ?? this.safe(),
      disabled: options.disabled ?? this.disabled(),
      appear: false,
      enter: options.enter ?? this.enter(),
      leave: options.leave ?? this.leave(),
      duration: options.duration ?? this.duration(),
      enterClass: {
        from: options.enterClass?.from ?? (!options.name ? this.enterFromClass() : void 0),
        to: options.enterClass?.to ?? (!options.name ? this.enterToClass() : void 0),
        active: options.enterClass?.active ?? (!options.name ? this.enterActiveClass() : void 0)
      },
      leaveClass: {
        from: options.leaveClass?.from ?? (!options.name ? this.leaveFromClass() : void 0),
        to: options.leaveClass?.to ?? (!options.name ? this.leaveToClass() : void 0),
        active: options.leaveClass?.active ?? (!options.name ? this.leaveActiveClass() : void 0)
      },
      onBeforeEnter: options.onBeforeEnter ?? this.handleBeforeEnter,
      onEnter: options.onEnter ?? this.handleEnter,
      onAfterEnter: options.onAfterEnter ?? this.handleAfterEnter,
      onEnterCancelled: options.onEnterCancelled ?? this.handleEnterCancelled,
      onBeforeLeave: options.onBeforeLeave ?? this.handleBeforeLeave,
      onLeave: options.onLeave ?? this.handleLeave,
      onAfterLeave: options.onAfterLeave ?? this.handleAfterLeave,
      onLeaveCancelled: options.onLeaveCancelled ?? this.handleLeaveCancelled
    };
  }, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : []);
  motion;
  isInitialMount = true;
  cancelled = false;
  destroyed = false;
  rendered = signal(false, ...ngDevMode ? [{
    debugName: "rendered"
  }] : []);
  handleBeforeEnter = (event) => !this.destroyed && this.onBeforeEnter.emit(event);
  handleEnter = (event) => !this.destroyed && this.onEnter.emit(event);
  handleAfterEnter = (event) => !this.destroyed && this.onAfterEnter.emit(event);
  handleEnterCancelled = (event) => !this.destroyed && this.onEnterCancelled.emit(event);
  handleBeforeLeave = (event) => !this.destroyed && this.onBeforeLeave.emit(event);
  handleLeave = (event) => !this.destroyed && this.onLeave.emit(event);
  handleAfterLeave = (event) => !this.destroyed && this.onAfterLeave.emit(event);
  handleLeaveCancelled = (event) => !this.destroyed && this.onLeaveCancelled.emit(event);
  constructor() {
    super();
    effect(() => {
      const hideStrategy = this.hideStrategy();
      if (this.isInitialMount) {
        applyHiddenStyles(this.$el, hideStrategy);
        this.rendered.set(this.visible() && this.mountOnEnter() || !this.mountOnEnter());
      } else if (this.visible() && !this.rendered()) {
        applyHiddenStyles(this.$el, hideStrategy);
        this.rendered.set(true);
      }
    });
    effect(() => {
      if (!this.motion) {
        this.motion = tt(this.$el, this.motionOptions());
      } else {
      }
    });
    afterRenderEffect(async () => {
      if (!this.$el) return;
      const shouldAppear = this.isInitialMount && this.visible() && this.appear();
      const hideStrategy = this.hideStrategy();
      if (this.visible()) {
        await Qt();
        resetStyles(this.$el, hideStrategy);
        if (shouldAppear || !this.isInitialMount) {
          this.applyMotionDuration("enter");
          this.motion?.enter();
        }
      } else if (!this.isInitialMount) {
        await Qt();
        this.applyMotionDuration("leave");
        this.motion?.leave()?.then(async () => {
          if (this.$el && !this.cancelled && !this.visible()) {
            applyHiddenStyles(this.$el, hideStrategy);
            if (this.unmountOnLeave()) {
              await Qt();
              if (!this.cancelled) {
                this.rendered.set(false);
              }
            }
          }
        });
      }
      this.isInitialMount = false;
    });
  }
  applyMotionDuration(phase) {
    const options = untracked(this.motionOptions);
    const ms = $(options.duration, phase);
    if (ms == null || !this.$el) return;
    const el = this.$el;
    const durationValue = `${ms}ms`;
    if (options.type === "transition") {
      el.style.transitionDuration = durationValue;
    } else {
      el.style.animationDuration = durationValue;
    }
  }
  onDestroy() {
    this.destroyed = true;
    this.cancelled = true;
    this.motion?.cancel();
    this.motion = void 0;
    resetStyles(this.$el, this.hideStrategy());
    this.$el?.remove();
    this.isInitialMount = true;
  }
  static \u0275fac = function Motion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Motion)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Motion,
    selectors: [["p-motion"]],
    hostVars: 2,
    hostBindings: function Motion_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      visible: [1, "visible"],
      mountOnEnter: [1, "mountOnEnter"],
      unmountOnLeave: [1, "unmountOnLeave"],
      name: [1, "name"],
      type: [1, "type"],
      safe: [1, "safe"],
      disabled: [1, "disabled"],
      appear: [1, "appear"],
      enter: [1, "enter"],
      leave: [1, "leave"],
      duration: [1, "duration"],
      hideStrategy: [1, "hideStrategy"],
      enterFromClass: [1, "enterFromClass"],
      enterToClass: [1, "enterToClass"],
      enterActiveClass: [1, "enterActiveClass"],
      leaveFromClass: [1, "leaveFromClass"],
      leaveToClass: [1, "leaveToClass"],
      leaveActiveClass: [1, "leaveActiveClass"],
      options: [1, "options"]
    },
    outputs: {
      onBeforeEnter: "onBeforeEnter",
      onEnter: "onEnter",
      onAfterEnter: "onAfterEnter",
      onEnterCancelled: "onEnterCancelled",
      onBeforeLeave: "onBeforeLeave",
      onLeave: "onLeave",
      onAfterLeave: "onAfterLeave",
      onLeaveCancelled: "onLeaveCancelled"
    },
    features: [\u0275\u0275ProvidersFeature([MotionStyle, {
      provide: MOTION_INSTANCE,
      useExisting: _Motion
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Motion
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c010,
    decls: 1,
    vars: 1,
    template: function Motion_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, Motion_Conditional_0_Template, 1, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.rendered() ? 0 : -1);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Motion, [{
    type: Component,
    args: [{
      selector: "p-motion",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: `
        @if (rendered()) {
            <ng-content />
        }
    `,
      providers: [MotionStyle, {
        provide: MOTION_INSTANCE,
        useExisting: Motion
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Motion
      }],
      host: {
        "[class]": "cx('root')"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    mountOnEnter: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "mountOnEnter",
        required: false
      }]
    }],
    unmountOnLeave: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "unmountOnLeave",
        required: false
      }]
    }],
    name: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "name",
        required: false
      }]
    }],
    type: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "type",
        required: false
      }]
    }],
    safe: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "safe",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    appear: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appear",
        required: false
      }]
    }],
    enter: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enter",
        required: false
      }]
    }],
    leave: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leave",
        required: false
      }]
    }],
    duration: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "duration",
        required: false
      }]
    }],
    hideStrategy: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "hideStrategy",
        required: false
      }]
    }],
    enterFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enterFromClass",
        required: false
      }]
    }],
    enterToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enterToClass",
        required: false
      }]
    }],
    enterActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enterActiveClass",
        required: false
      }]
    }],
    leaveFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leaveFromClass",
        required: false
      }]
    }],
    leaveToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leaveToClass",
        required: false
      }]
    }],
    leaveActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leaveActiveClass",
        required: false
      }]
    }],
    options: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "options",
        required: false
      }]
    }],
    onBeforeEnter: [{
      type: Output,
      args: ["onBeforeEnter"]
    }],
    onEnter: [{
      type: Output,
      args: ["onEnter"]
    }],
    onAfterEnter: [{
      type: Output,
      args: ["onAfterEnter"]
    }],
    onEnterCancelled: [{
      type: Output,
      args: ["onEnterCancelled"]
    }],
    onBeforeLeave: [{
      type: Output,
      args: ["onBeforeLeave"]
    }],
    onLeave: [{
      type: Output,
      args: ["onLeave"]
    }],
    onAfterLeave: [{
      type: Output,
      args: ["onAfterLeave"]
    }],
    onLeaveCancelled: [{
      type: Output,
      args: ["onLeaveCancelled"]
    }]
  });
})();
var MOTION_DIRECTIVE_INSTANCE = new InjectionToken("MOTION_DIRECTIVE_INSTANCE");
var MotionDirective = class _MotionDirective extends BaseComponent {
  $pcMotionDirective = inject(MOTION_DIRECTIVE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  /******************** Inputs ********************/
  /**
   * Whether the element is visible or not.
   * @group Props
   */
  visible = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visible"
  } : {}), {
    alias: "pMotion"
  }));
  /**
   * The name of the motion. It can be a predefined motion name or a custom one.
   * phases:
   *     [name]-enter
   *     [name]-enter-active
   *     [name]-enter-to
   *     [name]-leave
   *     [name]-leave-active
   *     [name]-leave-to
   * @group Props
   */
  name = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "name"
  } : {}), {
    alias: "pMotionName"
  }));
  /**
   * The type of the motion, valid values 'transition' and 'animation'.
   * @group Props
   */
  type = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "type"
  } : {}), {
    alias: "pMotionType"
  }));
  /**
   * Whether the motion is safe.
   * @group Props
   */
  safe = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "safe"
  } : {}), {
    alias: "pMotionSafe"
  }));
  /**
   * Whether the motion is disabled.
   * @group Props
   */
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : {}), {
    alias: "pMotionDisabled"
  }));
  /**
   * Whether the motion should appear.
   * @group Props
   */
  appear = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "appear"
  } : {}), {
    alias: "pMotionAppear"
  }));
  /**
   * Whether the motion should enter.
   * @group Props
   */
  enter = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enter"
  } : {}), {
    alias: "pMotionEnter"
  }));
  /**
   * Whether the motion should leave.
   * @group Props
   */
  leave = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leave"
  } : {}), {
    alias: "pMotionLeave"
  }));
  /**
   * The duration of the motion.
   * @group Props
   */
  duration = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "duration"
  } : {}), {
    alias: "pMotionDuration"
  }));
  /**
   * The hide strategy of the motion, valid values 'display' and 'visibility'.
   * @group Props
   */
  hideStrategy = input("display", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "hideStrategy"
  } : {}), {
    alias: "pMotionHideStrategy"
  }));
  /**
   * The enter from class of the motion.
   * @group Props
   */
  enterFromClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enterFromClass"
  } : {}), {
    alias: "pMotionEnterFromClass"
  }));
  /**
   * The enter to class of the motion.
   * @group Props
   */
  enterToClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enterToClass"
  } : {}), {
    alias: "pMotionEnterToClass"
  }));
  /**
   * The enter active class of the motion.
   * @group Props
   */
  enterActiveClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enterActiveClass"
  } : {}), {
    alias: "pMotionEnterActiveClass"
  }));
  /**
   * The leave from class of the motion.
   * @group Props
   */
  leaveFromClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leaveFromClass"
  } : {}), {
    alias: "pMotionLeaveFromClass"
  }));
  /**
   * The leave to class of the motion.
   * @group Props
   */
  leaveToClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leaveToClass"
  } : {}), {
    alias: "pMotionLeaveToClass"
  }));
  /**
   * The leave active class of the motion.
   * @group Props
   */
  leaveActiveClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leaveActiveClass"
  } : {}), {
    alias: "pMotionLeaveActiveClass"
  }));
  /******************** All Inputs ********************/
  /**
   * The motion options.
   * @group Props
   */
  options = input({}, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "options"
  } : {}), {
    alias: "pMotionOptions"
  }));
  /******************** Outputs ********************/
  /**
   * Callback fired before the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeEnter = output({
    alias: "pMotionOnBeforeEnter"
  });
  /**
   * Callback fired when the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnter = output({
    alias: "pMotionOnEnter"
  });
  /**
   * Callback fired after the enter transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterEnter = output({
    alias: "pMotionOnAfterEnter"
  });
  /**
   * Callback fired when the enter transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnterCancelled = output({
    alias: "pMotionOnEnterCancelled"
  });
  /**
   * Callback fired before the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeLeave = output({
    alias: "pMotionOnBeforeLeave"
  });
  /**
   * Callback fired when the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeave = output({
    alias: "pMotionOnLeave"
  });
  /**
   * Callback fired after the leave transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterLeave = output({
    alias: "pMotionOnAfterLeave"
  });
  /**
   * Callback fired when the leave transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeaveCancelled = output({
    alias: "pMotionOnLeaveCancelled"
  });
  /******************** Computed ********************/
  motionOptions = computed(() => {
    const options = this.options() ?? {};
    return {
      name: options.name ?? this.name(),
      type: options.type ?? this.type(),
      safe: options.safe ?? this.safe(),
      disabled: options.disabled ?? this.disabled(),
      appear: false,
      enter: options.enter ?? this.enter(),
      leave: options.leave ?? this.leave(),
      duration: options.duration ?? this.duration(),
      enterClass: {
        from: options.enterClass?.from ?? (!options.name ? this.enterFromClass() : void 0),
        to: options.enterClass?.to ?? (!options.name ? this.enterToClass() : void 0),
        active: options.enterClass?.active ?? (!options.name ? this.enterActiveClass() : void 0)
      },
      leaveClass: {
        from: options.leaveClass?.from ?? (!options.name ? this.leaveFromClass() : void 0),
        to: options.leaveClass?.to ?? (!options.name ? this.leaveToClass() : void 0),
        active: options.leaveClass?.active ?? (!options.name ? this.leaveActiveClass() : void 0)
      },
      onBeforeEnter: options.onBeforeEnter ?? this.handleBeforeEnter,
      onEnter: options.onEnter ?? this.handleEnter,
      onAfterEnter: options.onAfterEnter ?? this.handleAfterEnter,
      onEnterCancelled: options.onEnterCancelled ?? this.handleEnterCancelled,
      onBeforeLeave: options.onBeforeLeave ?? this.handleBeforeLeave,
      onLeave: options.onLeave ?? this.handleLeave,
      onAfterLeave: options.onAfterLeave ?? this.handleAfterLeave,
      onLeaveCancelled: options.onLeaveCancelled ?? this.handleLeaveCancelled
    };
  }, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : []);
  motion;
  isInitialMount = true;
  cancelled = false;
  destroyed = false;
  handleBeforeEnter = (event) => !this.destroyed && this.onBeforeEnter.emit(event);
  handleEnter = (event) => !this.destroyed && this.onEnter.emit(event);
  handleAfterEnter = (event) => !this.destroyed && this.onAfterEnter.emit(event);
  handleEnterCancelled = (event) => !this.destroyed && this.onEnterCancelled.emit(event);
  handleBeforeLeave = (event) => !this.destroyed && this.onBeforeLeave.emit(event);
  handleLeave = (event) => !this.destroyed && this.onLeave.emit(event);
  handleAfterLeave = (event) => !this.destroyed && this.onAfterLeave.emit(event);
  handleLeaveCancelled = (event) => !this.destroyed && this.onLeaveCancelled.emit(event);
  constructor() {
    super();
    effect(() => {
      if (!this.motion) {
        this.motion = tt(this.$el, this.motionOptions());
      } else {
      }
    });
    afterRenderEffect(() => {
      if (!this.$el) return;
      const shouldAppear = this.isInitialMount && this.visible() && this.appear();
      const hideStrategy = this.hideStrategy();
      if (this.visible()) {
        resetStyles(this.$el, hideStrategy);
        if (shouldAppear || !this.isInitialMount) {
          this.applyMotionDuration("enter");
          this.motion?.enter();
        }
      } else if (!this.isInitialMount) {
        this.applyMotionDuration("leave");
        this.motion?.leave()?.then(() => {
          if (this.$el && !this.cancelled && !this.visible()) {
            applyHiddenStyles(this.$el, hideStrategy);
          }
        });
      } else {
        applyHiddenStyles(this.$el, hideStrategy);
      }
      this.isInitialMount = false;
    });
  }
  applyMotionDuration(phase) {
    const options = untracked(this.motionOptions);
    const ms = $(options.duration, phase);
    if (ms == null || !this.$el) return;
    const el = this.$el;
    const durationValue = `${ms}ms`;
    if (options.type === "transition") {
      el.style.transitionDuration = durationValue;
    } else {
      el.style.animationDuration = durationValue;
    }
  }
  onDestroy() {
    this.destroyed = true;
    this.cancelled = true;
    this.motion?.cancel();
    this.motion = void 0;
    resetStyles(this.$el, this.hideStrategy());
    this.$el?.remove();
    this.isInitialMount = true;
  }
  static \u0275fac = function MotionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MotionDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MotionDirective,
    selectors: [["", "pMotion", ""]],
    inputs: {
      visible: [1, "pMotion", "visible"],
      name: [1, "pMotionName", "name"],
      type: [1, "pMotionType", "type"],
      safe: [1, "pMotionSafe", "safe"],
      disabled: [1, "pMotionDisabled", "disabled"],
      appear: [1, "pMotionAppear", "appear"],
      enter: [1, "pMotionEnter", "enter"],
      leave: [1, "pMotionLeave", "leave"],
      duration: [1, "pMotionDuration", "duration"],
      hideStrategy: [1, "pMotionHideStrategy", "hideStrategy"],
      enterFromClass: [1, "pMotionEnterFromClass", "enterFromClass"],
      enterToClass: [1, "pMotionEnterToClass", "enterToClass"],
      enterActiveClass: [1, "pMotionEnterActiveClass", "enterActiveClass"],
      leaveFromClass: [1, "pMotionLeaveFromClass", "leaveFromClass"],
      leaveToClass: [1, "pMotionLeaveToClass", "leaveToClass"],
      leaveActiveClass: [1, "pMotionLeaveActiveClass", "leaveActiveClass"],
      options: [1, "pMotionOptions", "options"]
    },
    outputs: {
      onBeforeEnter: "pMotionOnBeforeEnter",
      onEnter: "pMotionOnEnter",
      onAfterEnter: "pMotionOnAfterEnter",
      onEnterCancelled: "pMotionOnEnterCancelled",
      onBeforeLeave: "pMotionOnBeforeLeave",
      onLeave: "pMotionOnLeave",
      onAfterLeave: "pMotionOnAfterLeave",
      onLeaveCancelled: "pMotionOnLeaveCancelled"
    },
    features: [\u0275\u0275ProvidersFeature([MotionStyle, {
      provide: MOTION_DIRECTIVE_INSTANCE,
      useExisting: _MotionDirective
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _MotionDirective
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionDirective, [{
    type: Directive,
    args: [{
      selector: "[pMotion]",
      standalone: true,
      providers: [MotionStyle, {
        provide: MOTION_DIRECTIVE_INSTANCE,
        useExisting: MotionDirective
      }, {
        provide: PARENT_INSTANCE,
        useExisting: MotionDirective
      }]
    }]
  }], () => [], {
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotion",
        required: false
      }]
    }],
    name: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionName",
        required: false
      }]
    }],
    type: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionType",
        required: false
      }]
    }],
    safe: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionSafe",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionDisabled",
        required: false
      }]
    }],
    appear: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionAppear",
        required: false
      }]
    }],
    enter: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnter",
        required: false
      }]
    }],
    leave: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeave",
        required: false
      }]
    }],
    duration: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionDuration",
        required: false
      }]
    }],
    hideStrategy: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionHideStrategy",
        required: false
      }]
    }],
    enterFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnterFromClass",
        required: false
      }]
    }],
    enterToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnterToClass",
        required: false
      }]
    }],
    enterActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnterActiveClass",
        required: false
      }]
    }],
    leaveFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeaveFromClass",
        required: false
      }]
    }],
    leaveToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeaveToClass",
        required: false
      }]
    }],
    leaveActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeaveActiveClass",
        required: false
      }]
    }],
    options: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionOptions",
        required: false
      }]
    }],
    onBeforeEnter: [{
      type: Output,
      args: ["pMotionOnBeforeEnter"]
    }],
    onEnter: [{
      type: Output,
      args: ["pMotionOnEnter"]
    }],
    onAfterEnter: [{
      type: Output,
      args: ["pMotionOnAfterEnter"]
    }],
    onEnterCancelled: [{
      type: Output,
      args: ["pMotionOnEnterCancelled"]
    }],
    onBeforeLeave: [{
      type: Output,
      args: ["pMotionOnBeforeLeave"]
    }],
    onLeave: [{
      type: Output,
      args: ["pMotionOnLeave"]
    }],
    onAfterLeave: [{
      type: Output,
      args: ["pMotionOnAfterLeave"]
    }],
    onLeaveCancelled: [{
      type: Output,
      args: ["pMotionOnLeaveCancelled"]
    }]
  });
})();
var MotionModule = class _MotionModule {
  static \u0275fac = function MotionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MotionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MotionModule,
    imports: [Motion, MotionDirective],
    exports: [Motion, MotionDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Motion]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionModule, [{
    type: NgModule,
    args: [{
      imports: [Motion, MotionDirective],
      exports: [Motion, MotionDirective]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/toast/index.mjs
var style9 = "\n    .p-toast {\n        width: dt('toast.width');\n        white-space: pre-line;\n        word-break: break-word;\n    }\n\n    .p-toast-message {\n        margin: 0 0 1rem 0;\n        display: grid;\n        grid-template-rows: 1fr;\n    }\n\n    .p-toast-message-icon {\n        flex-shrink: 0;\n        font-size: dt('toast.icon.size');\n        width: dt('toast.icon.size');\n        height: dt('toast.icon.size');\n    }\n\n    .p-toast-message-content {\n        display: flex;\n        align-items: flex-start;\n        padding: dt('toast.content.padding');\n        gap: dt('toast.content.gap');\n        min-height: 0;\n        overflow: hidden;\n        transition: padding 250ms ease-in;\n    }\n\n    .p-toast-message-text {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n        gap: dt('toast.text.gap');\n    }\n\n    .p-toast-summary {\n        font-weight: dt('toast.summary.font.weight');\n        font-size: dt('toast.summary.font.size');\n    }\n\n    .p-toast-detail {\n        font-weight: dt('toast.detail.font.weight');\n        font-size: dt('toast.detail.font.size');\n    }\n\n    .p-toast-close-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        cursor: pointer;\n        background: transparent;\n        transition:\n            background dt('toast.transition.duration'),\n            color dt('toast.transition.duration'),\n            outline-color dt('toast.transition.duration'),\n            box-shadow dt('toast.transition.duration');\n        outline-color: transparent;\n        color: inherit;\n        width: dt('toast.close.button.width');\n        height: dt('toast.close.button.height');\n        border-radius: dt('toast.close.button.border.radius');\n        margin: -25% 0 0 0;\n        right: -25%;\n        padding: 0;\n        border: none;\n        user-select: none;\n    }\n\n    .p-toast-close-button:dir(rtl) {\n        margin: -25% 0 0 auto;\n        left: -25%;\n        right: auto;\n    }\n\n    .p-toast-message-info,\n    .p-toast-message-success,\n    .p-toast-message-warn,\n    .p-toast-message-error,\n    .p-toast-message-secondary,\n    .p-toast-message-contrast {\n        border-width: dt('toast.border.width');\n        border-style: solid;\n        backdrop-filter: blur(dt('toast.blur'));\n        border-radius: dt('toast.border.radius');\n    }\n\n    .p-toast-close-icon {\n        font-size: dt('toast.close.icon.size');\n        width: dt('toast.close.icon.size');\n        height: dt('toast.close.icon.size');\n    }\n\n    .p-toast-close-button:focus-visible {\n        outline-width: dt('focus.ring.width');\n        outline-style: dt('focus.ring.style');\n        outline-offset: dt('focus.ring.offset');\n    }\n\n    .p-toast-message-info {\n        background: dt('toast.info.background');\n        border-color: dt('toast.info.border.color');\n        color: dt('toast.info.color');\n        box-shadow: dt('toast.info.shadow');\n    }\n\n    .p-toast-message-info .p-toast-detail {\n        color: dt('toast.info.detail.color');\n    }\n\n    .p-toast-message-info .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.info.close.button.focus.ring.color');\n        box-shadow: dt('toast.info.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-info .p-toast-close-button:hover {\n        background: dt('toast.info.close.button.hover.background');\n    }\n\n    .p-toast-message-success {\n        background: dt('toast.success.background');\n        border-color: dt('toast.success.border.color');\n        color: dt('toast.success.color');\n        box-shadow: dt('toast.success.shadow');\n    }\n\n    .p-toast-message-success .p-toast-detail {\n        color: dt('toast.success.detail.color');\n    }\n\n    .p-toast-message-success .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.success.close.button.focus.ring.color');\n        box-shadow: dt('toast.success.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-success .p-toast-close-button:hover {\n        background: dt('toast.success.close.button.hover.background');\n    }\n\n    .p-toast-message-warn {\n        background: dt('toast.warn.background');\n        border-color: dt('toast.warn.border.color');\n        color: dt('toast.warn.color');\n        box-shadow: dt('toast.warn.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-detail {\n        color: dt('toast.warn.detail.color');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.warn.close.button.focus.ring.color');\n        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:hover {\n        background: dt('toast.warn.close.button.hover.background');\n    }\n\n    .p-toast-message-error {\n        background: dt('toast.error.background');\n        border-color: dt('toast.error.border.color');\n        color: dt('toast.error.color');\n        box-shadow: dt('toast.error.shadow');\n    }\n\n    .p-toast-message-error .p-toast-detail {\n        color: dt('toast.error.detail.color');\n    }\n\n    .p-toast-message-error .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.error.close.button.focus.ring.color');\n        box-shadow: dt('toast.error.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-error .p-toast-close-button:hover {\n        background: dt('toast.error.close.button.hover.background');\n    }\n\n    .p-toast-message-secondary {\n        background: dt('toast.secondary.background');\n        border-color: dt('toast.secondary.border.color');\n        color: dt('toast.secondary.color');\n        box-shadow: dt('toast.secondary.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-detail {\n        color: dt('toast.secondary.detail.color');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.secondary.close.button.focus.ring.color');\n        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:hover {\n        background: dt('toast.secondary.close.button.hover.background');\n    }\n\n    .p-toast-message-contrast {\n        background: dt('toast.contrast.background');\n        border-color: dt('toast.contrast.border.color');\n        color: dt('toast.contrast.color');\n        box-shadow: dt('toast.contrast.shadow');\n    }\n    \n    .p-toast-message-contrast .p-toast-detail {\n        color: dt('toast.contrast.detail.color');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.contrast.close.button.focus.ring.color');\n        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:hover {\n        background: dt('toast.contrast.close.button.hover.background');\n    }\n\n    .p-toast-top-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-bottom-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-center {\n        min-width: 20vw;\n        transform: translate(-50%, -50%);\n    }\n\n    .p-toast-message-enter-active {\n        animation: p-animate-toast-enter 300ms ease-out;\n    }\n\n    .p-toast-message-leave-active {\n        animation: p-animate-toast-leave 250ms ease-in;\n    }\n\n    .p-toast-message-leave-to .p-toast-message-content {\n        padding-top: 0;\n        padding-bottom: 0;\n    }\n\n    @keyframes p-animate-toast-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.6);\n        }\n        to {\n            opacity: 1;\n            grid-template-rows: 1fr;\n        }\n    }\n\n     @keyframes p-animate-toast-leave {\n        from {\n            opacity: 1;\n        }\n        to {\n            opacity: 0;\n            margin-bottom: 0;\n            grid-template-rows: 0fr;\n            transform: translateY(-100%) scale(0.6);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-toast.mjs
var _c011 = (a0, a1) => ({
  $implicit: a0,
  closeFn: a1
});
var _c12 = (a0) => ({
  $implicit: a0
});
function ToastItem_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToastItem_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToastItem_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c011, ctx_r0.message, ctx_r0.onCloseIconClick));
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("messageIcon"), ctx_r0.message == null ? null : ctx_r0.message.icon));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_0_Template, 1, 4, ":svg:svg", 7)(1, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_1_Template, 1, 4, ":svg:svg", 8)(2, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_2_Template, 1, 4, ":svg:svg", 9)(3, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_3_Template, 1, 4, ":svg:svg", 10)(4, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_4_Template, 1, 4, ":svg:svg", 8);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_4_0 = ctx_r0.message.severity) === "success" ? 0 : tmp_4_0 === "info" ? 1 : tmp_4_0 === "error" ? 2 : tmp_4_0 === "warn" ? 3 : 4);
  }
}
function ToastItem_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275conditionalCreate(1, ToastItem_Conditional_3_ng_container_1_Conditional_1_Template, 1, 3, "span", 2)(2, ToastItem_Conditional_3_ng_container_1_Conditional_2_Template, 5, 1);
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.message.icon ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("messageText"))("ngClass", ctx_r0.cx("messageText"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("summary"))("ngClass", ctx_r0.cx("summary"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.message.summary, " ");
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("detail"))("ngClass", ctx_r0.cx("detail"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.message.detail);
  }
}
function ToastItem_Conditional_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("closeIcon"), ctx_r0.message == null ? null : ctx_r0.message.closeIcon));
    \u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"));
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template, 1, 3, "span", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r0.message.closeIcon);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("closeIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 15);
    \u0275\u0275listener("click", function ToastItem_Conditional_3_Conditional_3_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCloseIconClick($event));
    })("keydown.enter", function ToastItem_Conditional_3_Conditional_3_Template_button_keydown_enter_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCloseIconClick($event));
    });
    \u0275\u0275conditionalCreate(2, ToastItem_Conditional_3_Conditional_3_Conditional_2_Template, 1, 1, "span", 2)(3, ToastItem_Conditional_3_Conditional_3_Conditional_3_Template, 1, 4, ":svg:svg", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("closeButton"));
    \u0275\u0275attribute("class", ctx_r0.cx("closeButton"))("aria-label", ctx_r0.closeAriaLabel)("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.message.closeIcon ? 2 : 3);
  }
}
function ToastItem_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, ToastItem_Conditional_3_ng_container_1_Template, 8, 12, "ng-container", 5)(2, ToastItem_Conditional_3_ng_container_2_Template, 1, 0, "ng-container", 3);
    \u0275\u0275conditionalCreate(3, ToastItem_Conditional_3_Conditional_3_Template, 4, 5, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("messageContent"), ctx_r0.message == null ? null : ctx_r0.message.contentStyleClass));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageContent"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.template);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c12, ctx_r0.message));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.message == null ? null : ctx_r0.message.closable) !== false ? 3 : -1);
  }
}
var _c22 = ["message"];
var _c32 = ["headless"];
function Toast_p_toastItem_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-toastItem", 1);
    \u0275\u0275listener("onClose", function Toast_p_toastItem_0_Template_p_toastItem_onClose_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMessageClose($event));
    })("onAnimationEnd", function Toast_p_toastItem_0_Template_p_toastItem_onAnimationEnd_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd());
    })("onAnimationStart", function Toast_p_toastItem_0_Template_p_toastItem_onAnimationStart_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationStart());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("message", msg_r3)("index", i_r4)("life", ctx_r1.life)("clearAll", ctx_r1.clearAllTrigger())("template", ctx_r1.template || ctx_r1._template)("headlessTemplate", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("pt", ctx_r1.pt)("unstyled", ctx_r1.unstyled())("motionOptions", ctx_r1.computedMotionOptions());
  }
}
var inlineStyles = {
  root: ({
    instance
  }) => {
    const {
      _position
    } = instance;
    return {
      position: "fixed",
      top: _position === "top-right" || _position === "top-left" || _position === "top-center" ? "20px" : _position === "center" ? "50%" : null,
      right: (_position === "top-right" || _position === "bottom-right") && "20px",
      bottom: (_position === "bottom-left" || _position === "bottom-right" || _position === "bottom-center") && "20px",
      left: _position === "top-left" || _position === "bottom-left" ? "20px" : _position === "center" || _position === "top-center" || _position === "bottom-center" ? "50%" : null
    };
  }
};
var classes7 = {
  root: ({
    instance
  }) => ["p-toast p-component", `p-toast-${instance._position}`],
  message: ({
    instance
  }) => ({
    "p-toast-message": true,
    "p-toast-message-info": instance.message.severity === "info" || instance.message.severity === void 0,
    "p-toast-message-warn": instance.message.severity === "warn",
    "p-toast-message-error": instance.message.severity === "error",
    "p-toast-message-success": instance.message.severity === "success",
    "p-toast-message-secondary": instance.message.severity === "secondary",
    "p-toast-message-contrast": instance.message.severity === "contrast"
  }),
  messageContent: "p-toast-message-content",
  messageIcon: ({
    instance
  }) => ({
    "p-toast-message-icon": true,
    [`pi ${instance.message.icon}`]: !!instance.message.icon
  }),
  messageText: "p-toast-message-text",
  summary: "p-toast-summary",
  detail: "p-toast-detail",
  closeButton: "p-toast-close-button",
  closeIcon: ({
    instance
  }) => ({
    "p-toast-close-icon": true,
    [`pi ${instance.message.closeIcon}`]: !!instance.message.closeIcon
  })
};
var ToastStyle = class _ToastStyle extends BaseStyle {
  name = "toast";
  style = style9;
  classes = classes7;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToastStyle_BaseFactory;
    return function ToastStyle_Factory(__ngFactoryType__) {
      return (\u0275ToastStyle_BaseFactory || (\u0275ToastStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToastStyle)))(__ngFactoryType__ || _ToastStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToastStyle,
    factory: _ToastStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastStyle, [{
    type: Injectable
  }], null, null);
})();
var ToastClasses;
(function(ToastClasses2) {
  ToastClasses2["root"] = "p-toast";
  ToastClasses2["message"] = "p-toast-message";
  ToastClasses2["messageContent"] = "p-toast-message-content";
  ToastClasses2["messageIcon"] = "p-toast-message-icon";
  ToastClasses2["messageText"] = "p-toast-message-text";
  ToastClasses2["summary"] = "p-toast-summary";
  ToastClasses2["detail"] = "p-toast-detail";
  ToastClasses2["closeButton"] = "p-toast-close-button";
  ToastClasses2["closeIcon"] = "p-toast-close-icon";
})(ToastClasses || (ToastClasses = {}));
var TOAST_INSTANCE = new InjectionToken("TOAST_INSTANCE");
var ToastItem = class _ToastItem extends BaseComponent {
  zone;
  message;
  index;
  life;
  template;
  headlessTemplate;
  showTransformOptions;
  hideTransformOptions;
  showTransitionOptions;
  hideTransitionOptions;
  motionOptions = input(...ngDevMode ? [void 0, {
    debugName: "motionOptions"
  }] : []);
  clearAll = input(null, ...ngDevMode ? [{
    debugName: "clearAll"
  }] : []);
  onAnimationStart = output();
  onAnimationEnd = output();
  onBeforeEnter(event) {
    this.onAnimationStart.emit(event.element);
  }
  onAfterLeave(event) {
    if (!this.visible() && !this.isDestroyed) {
      this.onClose.emit({
        index: this.index,
        message: this.message
      });
      if (!this.isDestroyed) {
        this.onAnimationEnd.emit(event.element);
      }
    }
  }
  onClose = new EventEmitter();
  _componentStyle = inject(ToastStyle);
  timeout;
  visible = signal(void 0, ...ngDevMode ? [{
    debugName: "visible"
  }] : []);
  isDestroyed = false;
  isClosing = false;
  constructor(zone) {
    super();
    this.zone = zone;
    effect(() => {
      if (this.clearAll()) {
        this.visible.set(false);
      }
    });
  }
  onAfterViewInit() {
    this.message?.sticky && this.visible.set(true);
    this.initTimeout();
  }
  initTimeout() {
    if (!this.message?.sticky) {
      this.clearTimeout();
      this.zone.runOutsideAngular(() => {
        this.visible.set(true);
        this.timeout = setTimeout(() => {
          this.visible.set(false);
        }, this.message?.life || this.life || 3e3);
      });
    }
  }
  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  onMouseEnter() {
    this.clearTimeout();
  }
  onMouseLeave() {
    if (!this.isClosing) {
      this.initTimeout();
    }
  }
  onCloseIconClick = (event) => {
    this.isClosing = true;
    this.clearTimeout();
    this.visible.set(false);
    event.preventDefault();
  };
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  onDestroy() {
    this.isDestroyed = true;
    this.clearTimeout();
    this.visible.set(false);
  }
  get dataP() {
    return this.cn({
      [this.message?.severity]: this.message?.severity
    });
  }
  static \u0275fac = function ToastItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastItem)(\u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToastItem,
    selectors: [["p-toastItem"]],
    inputs: {
      message: "message",
      index: [2, "index", "index", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      template: "template",
      headlessTemplate: "headlessTemplate",
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      motionOptions: [1, "motionOptions"],
      clearAll: [1, "clearAll"]
    },
    outputs: {
      onAnimationStart: "onAnimationStart",
      onAnimationEnd: "onAnimationEnd",
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 10,
    consts: [["container", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 3, "pMotionOnBeforeEnter", "pMotionOnAfterLeave", "mouseenter", "mouseleave", "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions", "pBind"], [3, "pBind", "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "pBind"], [4, "ngIf"], [3, "pBind", "ngClass"], ["data-p-icon", "check", 3, "pBind", "class"], ["data-p-icon", "info-circle", 3, "pBind", "class"], ["data-p-icon", "times-circle", 3, "pBind", "class"], ["data-p-icon", "exclamation-triangle", 3, "pBind", "class"], ["data-p-icon", "check", 3, "pBind"], ["data-p-icon", "info-circle", 3, "pBind"], ["data-p-icon", "times-circle", 3, "pBind"], ["data-p-icon", "exclamation-triangle", 3, "pBind"], ["type", "button", "autofocus", "", 3, "click", "keydown.enter", "pBind"], ["data-p-icon", "times", 3, "pBind", "class"], [3, "pBind", "class", 4, "ngIf"], ["data-p-icon", "times", 3, "pBind"]],
    template: function ToastItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275listener("pMotionOnBeforeEnter", function ToastItem_Template_div_pMotionOnBeforeEnter_0_listener($event) {
          return ctx.onBeforeEnter($event);
        })("pMotionOnAfterLeave", function ToastItem_Template_div_pMotionOnAfterLeave_0_listener($event) {
          return ctx.onAfterLeave($event);
        })("mouseenter", function ToastItem_Template_div_mouseenter_0_listener() {
          return ctx.onMouseEnter();
        })("mouseleave", function ToastItem_Template_div_mouseleave_0_listener() {
          return ctx.onMouseLeave();
        });
        \u0275\u0275conditionalCreate(2, ToastItem_Conditional_2_Template, 1, 5, "ng-container")(3, ToastItem_Conditional_3_Template, 4, 9, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("message"), ctx.message == null ? null : ctx.message.styleClass));
        \u0275\u0275property("pMotion", ctx.visible())("pMotionAppear", true)("pMotionName", "p-toast-message")("pMotionOptions", ctx.motionOptions())("pBind", ctx.ptm("message"));
        \u0275\u0275attribute("id", ctx.message == null ? null : ctx.message.id)("data-p", ctx.dataP);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule, Bind, MotionModule, MotionDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastItem, [{
    type: Component,
    args: [{
      selector: "p-toastItem",
      standalone: true,
      imports: [CommonModule, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule, Bind, MotionModule],
      template: `
        <div
            #container
            [pMotion]="visible()"
            [pMotionAppear]="true"
            [pMotionName]="'p-toast-message'"
            [pMotionOptions]="motionOptions()"
            (pMotionOnBeforeEnter)="onBeforeEnter($event)"
            (pMotionOnAfterLeave)="onAfterLeave($event)"
            [attr.id]="message?.id"
            [pBind]="ptm('message')"
            [class]="cn(cx('message'), message?.styleClass)"
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            [attr.data-p]="dataP"
        >
            @if (headlessTemplate) {
                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: message, closeFn: onCloseIconClick }"></ng-container>
            } @else {
                <div [pBind]="ptm('messageContent')" [class]="cn(cx('messageContent'), message?.contentStyleClass)">
                    <ng-container *ngIf="!template">
                        @if (message.icon) {
                            <span [pBind]="ptm('messageIcon')" [class]="cn(cx('messageIcon'), message?.icon)"></span>
                        } @else {
                            @switch (message.severity) {
                                @case ('success') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="check" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('info') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('error') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="times-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('warn') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="exclamation-triangle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @default {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                            }
                        }
                        <div [pBind]="ptm('messageText')" [ngClass]="cx('messageText')" [attr.data-p]="dataP">
                            <div [pBind]="ptm('summary')" [ngClass]="cx('summary')" [attr.data-p]="dataP">
                                {{ message.summary }}
                            </div>
                            <div [pBind]="ptm('detail')" [ngClass]="cx('detail')" [attr.data-p]="dataP">{{ message.detail }}</div>
                        </div>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="template; context: { $implicit: message }"></ng-container>
                    @if (message?.closable !== false) {
                        <div>
                            <button
                                [pBind]="ptm('closeButton')"
                                type="button"
                                [attr.class]="cx('closeButton')"
                                (click)="onCloseIconClick($event)"
                                (keydown.enter)="onCloseIconClick($event)"
                                [attr.aria-label]="closeAriaLabel"
                                autofocus
                                [attr.data-p]="dataP"
                            >
                                @if (message.closeIcon) {
                                    <span [pBind]="ptm('closeIcon')" *ngIf="message.closeIcon" [class]="cn(cx('closeIcon'), message?.closeIcon)"></span>
                                } @else {
                                    <svg [pBind]="ptm('closeIcon')" data-p-icon="times" [class]="cx('closeIcon')" [attr.aria-hidden]="true" />
                                }
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ToastStyle]
    }]
  }], () => [{
    type: NgZone
  }], {
    message: [{
      type: Input
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    template: [{
      type: Input
    }],
    headlessTemplate: [{
      type: Input
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    clearAll: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "clearAll",
        required: false
      }]
    }],
    onAnimationStart: [{
      type: Output,
      args: ["onAnimationStart"]
    }],
    onAnimationEnd: [{
      type: Output,
      args: ["onAnimationEnd"]
    }],
    onClose: [{
      type: Output
    }]
  });
})();
var Toast = class _Toast extends BaseComponent {
  componentName = "Toast";
  $pcToast = inject(TOAST_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Key of the message in case message is targeted to a specific toast component.
   * @group Props
   */
  key;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * The default time to display messages for in milliseconds.
   * @group Props
   */
  life = 3e3;
  /**
   * Inline class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Position of the toast in viewport.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    this.cd.markForCheck();
  }
  /**
   * It does not add the new message if there is already a toast displayed with the same content
   * @group Props
   */
  preventOpenDuplicates = false;
  /**
   * Displays only once a message with the same content.
   * @group Props
   */
  preventDuplicates = false;
  /**
   * Transform options of the show animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  showTransformOptions = "translateY(100%)";
  /**
   * Transform options of the hide animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  hideTransformOptions = "translateY(-100%)";
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  showTransitionOptions = "300ms ease-out";
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  hideTransitionOptions = "250ms ease-in";
  /**
   * The motion options.
   * @group Props
   */
  motionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : []);
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : []);
  /**
   * Object literal to define styles per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Callback to invoke when a message is closed.
   * @param {ToastCloseEvent} event - custom close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Custom message template.
   * @param {ToastMessageTemplateContext} context - message context.
   * @see {@link ToastMessageTemplateContext}
   * @group Templates
   */
  template;
  /**
   * Custom headless template.
   * @param {ToastHeadlessTemplateContext} context - headless context.
   * @see {@link ToastHeadlessTemplateContext}
   * @group Templates
   */
  headlessTemplate;
  messageSubscription;
  clearSubscription;
  messages;
  messagesArchieve;
  _position = "top-right";
  messageService = inject(MessageService);
  _componentStyle = inject(ToastStyle);
  styleElement;
  id = s2("pn_id_");
  templates;
  clearAllTrigger = signal(null, ...ngDevMode ? [{
    debugName: "clearAllTrigger"
  }] : []);
  constructor() {
    super();
  }
  onInit() {
    this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
      if (messages) {
        if (Array.isArray(messages)) {
          const filteredMessages = messages.filter((m) => this.canAdd(m));
          this.add(filteredMessages);
        } else if (this.canAdd(messages)) {
          this.add([messages]);
        }
      }
    });
    this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
      if (key) {
        if (this.key === key) {
          this.clearAll();
        }
      } else {
        this.clearAll();
      }
      this.cd.markForCheck();
    });
  }
  clearAll() {
    this.clearAllTrigger.set({});
  }
  _template;
  _headlessTemplate;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "message":
          this._template = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
        default:
          this._template = item.template;
          break;
      }
    });
  }
  onAfterViewInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  add(messages) {
    this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
    if (this.preventDuplicates) {
      this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...messages] : [...messages];
    }
    this.cd.markForCheck();
  }
  canAdd(message) {
    let allow = this.key === message.key;
    if (allow && this.preventOpenDuplicates) {
      allow = !this.containsMessage(this.messages, message);
    }
    if (allow && this.preventDuplicates) {
      allow = !this.containsMessage(this.messagesArchieve, message);
    }
    return allow;
  }
  containsMessage(collection, message) {
    if (!collection) {
      return false;
    }
    return collection.find((m) => {
      return m.summary === message.summary && m.detail == message.detail && m.severity === message.severity;
    }) != null;
  }
  onMessageClose(event) {
    this.messages?.splice(event.index, 1);
    this.onClose.emit({
      message: event.message
    });
    this.onAnimationEnd();
    this.cd.detectChanges();
  }
  onAnimationStart() {
    this.renderer.setAttribute(this.el?.nativeElement, this.id, "");
    if (this.autoZIndex && this.el?.nativeElement.style.zIndex === "") {
      zindexutils.set("modal", this.el?.nativeElement, this.baseZIndex || this.config.zIndex.modal);
    }
  }
  onAnimationEnd() {
    if (this.autoZIndex && l(this.messages)) {
      zindexutils.clear(this.el?.nativeElement);
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.renderer.createElement("style");
      this.styleElement.type = "text/css";
      _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
      this.renderer.appendChild(this.document.head, this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        let breakpointStyle = "";
        for (let styleProp in this.breakpoints[breakpoint]) {
          breakpointStyle += styleProp + ":" + this.breakpoints[breakpoint][styleProp] + " !important;";
        }
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-toast[${this.id}] {
                           ${breakpointStyle}
                        }
                    }
                `;
      }
      this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
      _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  onDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    if (this.el && this.autoZIndex) {
      zindexutils.clear(this.el.nativeElement);
    }
    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }
    this.destroyStyle();
  }
  get dataP() {
    return this.cn({
      [this.position]: this.position
    });
  }
  static \u0275fac = function Toast_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Toast)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Toast,
    selectors: [["p-toast"]],
    contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c22, 5)(dirIndex, _c32, 5)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.template = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    hostVars: 5,
    hostBindings: function Toast_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275styleMap(ctx.sx("root"));
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      key: "key",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      styleClass: "styleClass",
      position: "position",
      preventOpenDuplicates: [2, "preventOpenDuplicates", "preventOpenDuplicates", booleanAttribute],
      preventDuplicates: [2, "preventDuplicates", "preventDuplicates", booleanAttribute],
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      motionOptions: [1, "motionOptions"],
      breakpoints: "breakpoints"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle, {
      provide: TOAST_INSTANCE,
      useExisting: _Toast
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Toast
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "message", "index", "life", "clearAll", "template", "headlessTemplate", "pt", "unstyled", "motionOptions", "onClose", "onAnimationEnd", "onAnimationStart", 4, "ngFor", "ngForOf"], [3, "onClose", "onAnimationEnd", "onAnimationStart", "message", "index", "life", "clearAll", "template", "headlessTemplate", "pt", "unstyled", "motionOptions"]],
    template: function Toast_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Toast_p_toastItem_0_Template, 1, 9, "p-toastItem", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngForOf", ctx.messages);
      }
    },
    dependencies: [CommonModule, NgForOf, ToastItem, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toast, [{
    type: Component,
    args: [{
      selector: "p-toast",
      standalone: true,
      imports: [CommonModule, ToastItem, SharedModule],
      template: `
        <p-toastItem
            *ngFor="let msg of messages; let i = index"
            [message]="msg"
            [index]="i"
            [life]="life"
            [clearAll]="clearAllTrigger()"
            (onClose)="onMessageClose($event)"
            (onAnimationEnd)="onAnimationEnd()"
            (onAnimationStart)="onAnimationStart()"
            [template]="template || _template"
            [headlessTemplate]="headlessTemplate || _headlessTemplate"
            [pt]="pt"
            [unstyled]="unstyled()"
            [motionOptions]="computedMotionOptions()"
        ></p-toastItem>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ToastStyle, {
        provide: TOAST_INSTANCE,
        useExisting: Toast
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Toast
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    key: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    preventOpenDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preventDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    breakpoints: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    template: [{
      type: ContentChild,
      args: ["message"]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToastModule = class _ToastModule {
  static \u0275fac = function ToastModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToastModule,
    imports: [Toast, SharedModule],
    exports: [Toast, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Toast, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [Toast, SharedModule],
      exports: [Toast, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-baseeditableholder.mjs
var BaseEditableHolder = class _BaseEditableHolder extends BaseModelHolder {
  /**
   * There must be a value (if set).
   * @defaultValue false
   * @group Props
   */
  required = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "required"
  } : {}), {
    transform: booleanAttribute
  }));
  /**
   * When present, it specifies that the component should have invalid state style.
   * @defaultValue false
   * @group Props
   */
  invalid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "invalid"
  } : {}), {
    transform: booleanAttribute
  }));
  /**
   * When present, it specifies that the component should have disabled state style.
   * @defaultValue false
   * @group Props
   */
  disabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : {}), {
    transform: booleanAttribute
  }));
  /**
   * When present, it specifies that the name of the input.
   * @defaultValue undefined
   * @group Props
   */
  name = input(...ngDevMode ? [void 0, {
    debugName: "name"
  }] : []);
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  $disabled = computed(() => this.disabled() || this._disabled(), ...ngDevMode ? [{
    debugName: "$disabled"
  }] : []);
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  writeDisabledState(value) {
    this._disabled.set(value);
  }
  writeControlValue(value, setModelValue) {
  }
  /**** Angular ControlValueAccessors ****/
  writeValue(value) {
    this.writeControlValue(value, this.writeModelValue.bind(this));
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.writeDisabledState(val);
    this.cd.markForCheck();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseEditableHolder_BaseFactory;
    return function BaseEditableHolder_Factory(__ngFactoryType__) {
      return (\u0275BaseEditableHolder_BaseFactory || (\u0275BaseEditableHolder_BaseFactory = \u0275\u0275getInheritedFactory(_BaseEditableHolder)))(__ngFactoryType__ || _BaseEditableHolder);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseEditableHolder,
    inputs: {
      required: [1, "required"],
      invalid: [1, "invalid"],
      disabled: [1, "disabled"],
      name: [1, "name"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseEditableHolder, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    required: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "required",
        required: false
      }]
    }],
    invalid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "invalid",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    name: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "name",
        required: false
      }]
    }]
  });
})();

export {
  NG_VALUE_ACCESSOR,
  DefaultValueAccessor,
  Validators,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ɵNgNoValidate,
  FormControlName,
  FormGroupDirective,
  RequiredValidator,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Badge,
  BadgeModule,
  AutoFocus,
  Fluid,
  BaseIcon,
  CheckIcon,
  SpinnerIcon,
  TimesIcon,
  Ripple,
  Button,
  ButtonModule,
  BaseEditableHolder,
  InputText,
  InputTextModule,
  Motion,
  MotionDirective,
  MotionModule,
  Toast,
  ToastModule
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v21.2.4
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-X7K774KH.js.map
