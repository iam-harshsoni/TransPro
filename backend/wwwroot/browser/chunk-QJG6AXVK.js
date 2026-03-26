import {
  TripService
} from "./chunk-P4GJG2W5.js";
import {
  Tag,
  TagModule
} from "./chunk-B36ICVRO.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-KXKR4XI4.js";
import {
  TooltipModule
} from "./chunk-3PKWPBB4.js";
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
  ConfirmationService,
  DatePipe,
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-FOYF73X5.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/trips/pages/trip-detail/trip-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TripDetailComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading trip details...");
    \u0275\u0275elementEnd()();
  }
}
function TripDetailComponent_Conditional_18_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 32);
    \u0275\u0275listener("onClick", function TripDetailComponent_Conditional_18_Conditional_0_For_4_Template_p_button_onClick_0_listener() {
      const status_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateStatus(status_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", status_r3 === "InTransit" ? "Mark In Transit" : status_r3 === "Completed" ? "Mark Completed" : "Cancel Trip")("severity", status_r3 === "Cancelled" ? "danger" : status_r3 === "Completed" ? "success" : "warn")("outlined", true)("loading", ctx_r3.isUpdating());
  }
}
function TripDetailComponent_Conditional_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 30);
    \u0275\u0275text(2, "Update Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, TripDetailComponent_Conditional_18_Conditional_0_For_4_Template, 1, 4, "p-button", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.getAvailableTransitions());
  }
}
function TripDetailComponent_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 30);
    \u0275\u0275text(2, "Current Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-tag", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r3.getStatusLabel(ctx_r3.trip().status))("severity", ctx_r3.getStatusSeverity(ctx_r3.trip().status));
  }
}
function TripDetailComponent_Conditional_18_Conditional_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.trip().notes);
  }
}
function TripDetailComponent_Conditional_18_For_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const container_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(container_r5.containerNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", container_r5.type, " \xB7 ", container_r5.weightCapacity, "T ");
  }
}
function TripDetailComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, TripDetailComponent_Conditional_18_Conditional_0_Template, 5, 0, "div", 9);
    \u0275\u0275conditionalCreate(1, TripDetailComponent_Conditional_18_Conditional_1_Template, 4, 2, "div", 9);
    \u0275\u0275elementStart(2, "div", 10)(3, "div", 11)(4, "div", 12);
    \u0275\u0275element(5, "i", 13);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Customer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "div", 15)(10, "span", 16);
    \u0275\u0275text(11, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 15)(15, "span", 16);
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 17);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 15)(20, "span", 16);
    \u0275\u0275text(21, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 17);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 11)(25, "div", 12);
    \u0275\u0275element(26, "i", 18);
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Route");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 14)(30, "div", 15)(31, "span", 16);
    \u0275\u0275text(32, "Origin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 17);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 15)(36, "span", 16);
    \u0275\u0275text(37, "Destination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 17);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 15)(41, "span", 16);
    \u0275\u0275text(42, "Distance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 17);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 15)(46, "span", 16);
    \u0275\u0275text(47, "Est. Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 17);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 11)(51, "div", 12);
    \u0275\u0275element(52, "i", 19);
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "Driver");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 14)(56, "div", 15)(57, "span", 16);
    \u0275\u0275text(58, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 17);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 15)(62, "span", 16);
    \u0275\u0275text(63, "License");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 20);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 15)(67, "span", 16);
    \u0275\u0275text(68, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 17);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(71, "div", 11)(72, "div", 12);
    \u0275\u0275element(73, "i", 21);
    \u0275\u0275elementStart(74, "span");
    \u0275\u0275text(75, "Truck");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 14)(77, "div", 15)(78, "span", 16);
    \u0275\u0275text(79, "Plate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 17)(81, "span", 22);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "div", 15)(84, "span", 16);
    \u0275\u0275text(85, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span", 17);
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 15)(89, "span", 16);
    \u0275\u0275text(90, "Capacity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span", 17);
    \u0275\u0275text(92);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(93, "div", 11)(94, "div", 12);
    \u0275\u0275element(95, "i", 23);
    \u0275\u0275elementStart(96, "span");
    \u0275\u0275text(97, "Schedule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 14)(99, "div", 15)(100, "span", 16);
    \u0275\u0275text(101, "Departure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span", 17);
    \u0275\u0275text(103);
    \u0275\u0275pipe(104, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 15)(106, "span", 16);
    \u0275\u0275text(107, "Arrival");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "span", 17);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 15)(112, "span", 16);
    \u0275\u0275text(113, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "span", 17);
    \u0275\u0275text(115);
    \u0275\u0275pipe(116, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(117, TripDetailComponent_Conditional_18_Conditional_117_Template, 5, 1, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 24)(119, "div", 12);
    \u0275\u0275element(120, "i", 25);
    \u0275\u0275elementStart(121, "span");
    \u0275\u0275text(122);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 14)(124, "div", 26);
    \u0275\u0275repeaterCreate(125, TripDetailComponent_Conditional_18_For_126_Template, 5, 3, "div", 27, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(127, "div", 28)(128, "p-button", 29);
    \u0275\u0275listener("onClick", function TripDetailComponent_Conditional_18_Template_p_button_onClick_128_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goBack());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.getAvailableTransitions().length > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.trip() ? 1 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r3.trip().customer.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.trip().customer.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.trip().customer.phone);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r3.trip().route.origin);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.trip().route.destination);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.trip().route.distanceKm, " km");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.trip().route.estimatedHours, " hrs");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r3.trip().driver.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.trip().driver.licenseNumber, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.trip().driver.phone);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r3.trip().truck.plateNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.trip().truck.model);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.trip().truck.capacity, " T");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(104, 21, ctx_r3.trip().departureDate, "dd MMM yyyy, HH:mm"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r3.trip().arrivalDate ? \u0275\u0275pipeBind2(110, 24, ctx_r3.trip().arrivalDate, "dd MMM yyyy, HH:mm") : "\u2014", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(116, 27, ctx_r3.trip().createdAt, "dd MMM yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.trip().notes ? 117 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Containers (", ctx_r3.trip().containers.length, ")");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.trip().containers);
    \u0275\u0275advance(3);
    \u0275\u0275property("outlined", true);
  }
}
var TripDetailComponent = class _TripDetailComponent {
  tripService = inject(TripService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  trip = signal(null, ...ngDevMode ? [{ debugName: "trip" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isUpdating = signal(false, ...ngDevMode ? [{ debugName: "isUpdating" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id)
      this.loadTrip(id);
  }
  loadTrip(id) {
    this.isLoading.set(true);
    this.tripService.getById(id).subscribe({
      next: (response) => {
        this.trip.set(response.data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load trip details"
        });
        this.isLoading.set(false);
      }
    });
  }
  // Determines which status transitions are available
  // based on current trip status
  getAvailableTransitions() {
    const current = this.trip()?.status;
    switch (current) {
      case "Planned":
        return ["InTransit", "Cancelled"];
      case "InTransit":
        return ["Completed", "Cancelled"];
      default:
        return [];
    }
  }
  updateStatus(newStatus) {
    const trip = this.trip();
    if (!trip)
      return;
    const label = newStatus === "InTransit" ? "In Transit" : newStatus;
    this.confirmationService.confirm({
      message: `Are you sure you want to mark this trip as
					<strong>${label}</strong>?`,
      header: "Confirm Status Update",
      icon: "pi pi-question-circle",
      rejectButtonProps: { label: "No", severity: "secondary", variant: "text" },
      acceptButtonProps: { label: "Yes, Update", severity: "info" },
      accept: () => {
        this.isUpdating.set(true);
        console.log(newStatus);
        this.tripService.updateStatus(trip.id, { newStatus }).subscribe({
          next: (response) => {
            this.trip.set(response.data);
            this.messageService.add({
              severity: "success",
              summary: "Updated",
              detail: response.message ?? `Trip marked as ${label}`,
              life: 3e3
            });
            this.isUpdating.set(false);
          },
          error: (err) => {
            this.messageService.add({
              severity: "error",
              summary: "Error",
              detail: err.error?.message ?? "Failed to update status",
              life: 5e3
            });
            this.isUpdating.set(false);
          }
        });
      }
    });
  }
  getStatusSeverity(status) {
    switch (status) {
      case "Planned":
        return "info";
      case "InTransit":
        return "warn";
      case "Completed":
        return "success";
      case "Cancelled":
        return "danger";
      default:
        return "secondary";
    }
  }
  getStatusLabel(status) {
    return status === "InTransit" ? "In Transit" : status;
  }
  goBack() {
    this.router.navigate(["/trips"]);
  }
  static \u0275fac = function TripDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TripDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TripDetailComponent, selectors: [["app-trip-detail"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 19, vars: 6, consts: [[1, "page-header"], [1, "breadcrumb-trail"], [1, "pi", "pi-angle-right"], [1, "breadcrumb-link", 3, "click"], [1, "trip-detail-header"], [1, "page-title"], [1, "page-subtitle"], [1, "form-loading"], [1, "pi", "pi-spin", "pi-spinner"], [1, "trip-actions-bar"], [1, "trip-detail-grid"], [1, "detail-card"], [1, "detail-card-header"], [1, "pi", "pi-users"], [1, "detail-card-body"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "pi", "pi-map"], [1, "pi", "pi-id-card"], [1, "detail-value", "license-number"], [1, "pi", "pi-truck"], [1, "plate-number"], [1, "pi", "pi-calendar"], [1, "detail-card", "detail-card-full"], [1, "pi", "pi-box"], [1, "containers-grid"], [1, "container-chip"], [1, "detail-back-action"], ["label", "Back to Trips", "icon", "pi pi-arrow-left", "severity", "secondary", 3, "onClick", "outlined"], [1, "actions-label"], [3, "label", "severity", "outlined", "loading"], [3, "onClick", "label", "severity", "outlined", "loading"], [1, "trip-status-tag", 3, "value", "severity"], [1, "container-number"], [1, "container-meta"]], template: function TripDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast")(1, "p-confirmDialog");
      \u0275\u0275elementStart(2, "div", 0)(3, "div", 1);
      \u0275\u0275text(4, " Home ");
      \u0275\u0275element(5, "i", 2);
      \u0275\u0275elementStart(6, "a", 3);
      \u0275\u0275listener("click", function TripDetailComponent_Template_a_click_6_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(7, "Trips");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "i", 2);
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 4)(12, "div")(13, "div", 5);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 6);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(17, TripDetailComponent_Conditional_17_Template, 4, 0, "div", 7);
      \u0275\u0275conditionalCreate(18, TripDetailComponent_Conditional_18_Template, 129, 30);
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("Trip #", (tmp_0_0 = ctx.trip()) == null ? null : tmp_0_0.id);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Trip #", (tmp_1_0 = ctx.trip()) == null ? null : tmp_1_0.id);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" ", (tmp_2_0 = ctx.trip()) == null ? null : tmp_2_0.route == null ? null : tmp_2_0.route.origin, " \u2192 ", (tmp_2_0 = ctx.trip()) == null ? null : tmp_2_0.route == null ? null : tmp_2_0.route.destination, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.trip() ? 18 : -1);
    }
  }, dependencies: [
    CommonModule,
    ButtonModule,
    Button,
    TagModule,
    Tag,
    ToastModule,
    Toast,
    ConfirmDialogModule,
    ConfirmDialog,
    TooltipModule,
    DatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripDetailComponent, [{
    type: Component,
    args: [{ selector: "app-trip-detail", standalone: true, imports: [
      CommonModule,
      ButtonModule,
      TagModule,
      ToastModule,
      ConfirmDialogModule,
      TooltipModule
    ], providers: [MessageService, ConfirmationService], template: `<p-toast />
<p-confirmDialog />

<div class="page-header">
    <div class="breadcrumb-trail">
        Home <i class="pi pi-angle-right"></i>
        <a class="breadcrumb-link" (click)="goBack()">Trips</a>
        <i class="pi pi-angle-right"></i>
        <span>Trip #{{ trip()?.id }}</span>
    </div>
    <div class="trip-detail-header">
        <div>
            <div class="page-title">Trip #{{ trip()?.id }}</div>
            <div class="page-subtitle">
                {{ trip()?.route?.origin }} \u2192 {{ trip()?.route?.destination }}
            </div>
        </div>

    </div>
</div>

@if (isLoading()) {
<div class="form-loading">
    <i class="pi pi-spin pi-spinner"></i>
    <span>Loading trip details...</span>
</div>
}

@if (trip()) {
<!-- Status Actions -->
@if (getAvailableTransitions().length > 0) {
<div class="trip-actions-bar">
    <span class="actions-label">Update Status:</span>
    @for (status of getAvailableTransitions(); track status) {
    <p-button [label]="status === 'InTransit' ? 'Mark In Transit'
                 : status === 'Completed' ? 'Mark Completed'
                 : 'Cancel Trip'" [severity]="status === 'Cancelled' ? 'danger'
                    : status === 'Completed' ? 'success' : 'warn'" [outlined]="true" [loading]="isUpdating()"
        (onClick)="updateStatus(status)" />
    }
</div>
}

@if (trip()) {
<div class="trip-actions-bar">
    <span class="actions-label">Current Status:</span>
    <p-tag [value]="getStatusLabel(trip()!.status)" [severity]="getStatusSeverity(trip()!.status)"
        class="trip-status-tag" />
</div>
}

<div class="trip-detail-grid">

    <!-- Customer & Route -->
    <div class="detail-card">
        <div class="detail-card-header">
            <i class="pi pi-users"></i>
            <span>Customer</span>
        </div>
        <div class="detail-card-body">
            <div class="detail-row">
                <span class="detail-label">Name</span>
                <span class="detail-value">{{ trip()!.customer.fullName }}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Email</span>
                <span class="detail-value">{{ trip()!.customer.email }}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Phone</span>
                <span class="detail-value">{{ trip()!.customer.phone }}</span>
            </div>
        </div>
    </div>

    <!-- Route Info -->
    <div class="detail-card">
        <div class="detail-card-header">
            <i class="pi pi-map"></i>
            <span>Route</span>
        </div>
        <div class="detail-card-body">
            <div class="detail-row">
                <span class="detail-label">Origin</span>
                <span class="detail-value">{{ trip()!.route.origin }}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Destination</span>
                <span class="detail-value">{{ trip()!.route.destination }}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Distance</span>
                <span class="detail-value">{{ trip()!.route.distanceKm }} km</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Est. Duration</span>
                <span class="detail-value">{{ trip()!.route.estimatedHours }} hrs</span>
            </div>
        </div>
    </div>

    <!-- Driver Info -->
    <div class="detail-card">
        <div class="detail-card-header">
            <i class="pi pi-id-card"></i>
            <span>Driver</span>
        </div>
        <div class="detail-card-body">
            <div class="detail-row">
                <span class="detail-label">Name</span>
                <span class="detail-value">{{ trip()!.driver.fullName }}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">License</span>
                <span class="detail-value license-number">
                    {{ trip()!.driver.licenseNumber }}
                </span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Phone</span>
                <span class="detail-value">{{ trip()!.driver.phone }}</span>
            </div>
        </div>
    </div>

    <!-- Truck Info -->
    <div class="detail-card">
        <div class="detail-card-header">
            <i class="pi pi-truck"></i>
            <span>Truck</span>
        </div>
        <div class="detail-card-body">
            <div class="detail-row">
                <span class="detail-label">Plate</span>
                <span class="detail-value">
                    <span class="plate-number">{{ trip()!.truck.plateNumber }}</span>
                </span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Model</span>
                <span class="detail-value">{{ trip()!.truck.model }}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Capacity</span>
                <span class="detail-value">{{ trip()!.truck.capacity }} T</span>
            </div>
        </div>
    </div>

    <!-- Trip Dates -->
    <div class="detail-card">
        <div class="detail-card-header">
            <i class="pi pi-calendar"></i>
            <span>Schedule</span>
        </div>
        <div class="detail-card-body">
            <div class="detail-row">
                <span class="detail-label">Departure</span>
                <span class="detail-value">
                    {{ trip()!.departureDate | date: 'dd MMM yyyy, HH:mm' }}
                </span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Arrival</span>
                <span class="detail-value">
                    {{ trip()!.arrivalDate
                    ? (trip()!.arrivalDate | date: 'dd MMM yyyy, HH:mm')
                    : '\u2014' }}
                </span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Created</span>
                <span class="detail-value">
                    {{ trip()!.createdAt | date: 'dd MMM yyyy' }}
                </span>
            </div>
            @if (trip()!.notes) {
            <div class="detail-row">
                <span class="detail-label">Notes</span>
                <span class="detail-value">{{ trip()!.notes }}</span>
            </div>
            }
        </div>
    </div>

    <!-- Containers -->
    <div class="detail-card detail-card-full">
        <div class="detail-card-header">
            <i class="pi pi-box"></i>
            <span>Containers ({{ trip()!.containers.length }})</span>
        </div>
        <div class="detail-card-body">
            <div class="containers-grid">
                @for (container of trip()!.containers; track container.id) {
                <div class="container-chip">
                    <span class="container-number">{{ container.containerNumber }}</span>
                    <span class="container-meta">
                        {{ container.type }} \xB7 {{ container.weightCapacity }}T
                    </span>
                </div>
                }
            </div>
        </div>
    </div>

</div>

<div class="detail-back-action">
    <p-button label="Back to Trips" icon="pi pi-arrow-left" severity="secondary" [outlined]="true"
        (onClick)="goBack()" />
</div>
}` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TripDetailComponent, { className: "TripDetailComponent", filePath: "src/app/features/trips/pages/trip-detail/trip-detail.component.ts", lineNumber: 28 });
})();
export {
  TripDetailComponent
};
//# sourceMappingURL=chunk-QJG6AXVK.js.map
