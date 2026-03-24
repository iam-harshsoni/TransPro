import {
  TripService
} from "./chunk-UG6D2XQ4.js";
import {
  Table,
  TableModule,
  Toolbar,
  ToolbarModule
} from "./chunk-HGBPOCNO.js";
import "./chunk-JYQNK4DM.js";
import {
  ConfirmDialog,
  ConfirmDialogModule,
  Tag,
  TagModule
} from "./chunk-JA4INHZW.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  Select,
  SelectModule
} from "./chunk-XGKKQUPC.js";
import "./chunk-GSXUK7A5.js";
import "./chunk-MXR2UECF.js";
import "./chunk-7QBDVDV2.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-TXYLWEHL.js";
import "./chunk-VXGQDH4M.js";
import {
  FormsModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgModel
} from "./chunk-VM6EF74J.js";
import {
  Button,
  ButtonModule,
  Toast,
  ToastModule
} from "./chunk-TQZIDXU2.js";
import {
  CommonModule,
  ConfirmationService,
  DatePipe,
  MessageService,
  PrimeTemplate,
  Router
} from "./chunk-GBERHHLY.js";
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RB7DCYUT.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/trips/pages/trip-list/trip-list.component.ts
var _c0 = () => [10, 25, 50];
var _c1 = () => ({ "min-width": "70rem" });
function TripListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iconfield");
    \u0275\u0275element(1, "p-inputicon", 15);
    \u0275\u0275elementStart(2, "input", 16);
    \u0275\u0275listener("input", function TripListComponent_ng_template_14_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "p-select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function TripListComponent_ng_template_14_Template_p_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedStatus, $event) || (ctx_r1.selectedStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function TripListComponent_ng_template_14_Template_p_select_onChange_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatusFilter());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedStatus);
    \u0275\u0275property("options", ctx_r1.statusOptions);
  }
}
function TripListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 18);
    \u0275\u0275listener("onClick", function TripListComponent_ng_template_16_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToCreate());
    });
    \u0275\u0275elementEnd();
  }
}
function TripListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Trip List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.totalRecords, " total");
  }
}
function TripListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 22);
    \u0275\u0275text(2, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 23);
    \u0275\u0275text(4, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 23);
    \u0275\u0275text(6, "Driver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 24);
    \u0275\u0275text(8, "Truck");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 25);
    \u0275\u0275text(10, "Route");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 26);
    \u0275\u0275text(12, "Departure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 27);
    \u0275\u0275text(14, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 28);
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function TripListComponent_ng_template_22_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 37);
    \u0275\u0275listener("onClick", function TripListComponent_ng_template_22_Conditional_27_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const trip_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmCancel(trip_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function TripListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "div", 32)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " -> ");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275element(23, "p-tag", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "div", 34)(26, "p-button", 35);
    \u0275\u0275listener("onClick", function TripListComponent_ng_template_22_Template_p_button_onClick_26_listener() {
      const trip_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewDetail(trip_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, TripListComponent_ng_template_22_Conditional_27_Template, 1, 2, "p-button", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const trip_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", trip_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(trip_r5.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(trip_r5.driverName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(trip_r5.truckPlate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", trip_r5.origin, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", trip_r5.destination);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 12, trip_r5.departureDate, "dd MMM yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.getStatusLabel(trip_r5.status))("severity", ctx_r1.getStatusSeverity(trip_r5.status));
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(trip_r5.status === "Planned" || trip_r5.status === "InTransit" ? 27 : -1);
  }
}
function TripListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38)(2, "div", 39);
    \u0275\u0275element(3, "i", 40);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "No trips found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "Create your first trip to get started");
    \u0275\u0275elementEnd()()()();
  }
}
var TripListComponent = class _TripListComponent {
  tripService = inject(TripService);
  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  router = inject(Router);
  searchTimeout;
  trips = [];
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  totalRecords = 0;
  pageSize = 10;
  currentPage = 1;
  searchValue = 0;
  selectedStatus = "";
  // Status options for the filter dropdown
  // Matches your backend TripStatus enum values exactly
  statusOptions = [
    { label: "All Statuses", value: "" },
    { label: "Planned", value: "Planned" },
    { label: "In Transit", value: "InTransit" },
    { label: "Completed", value: "Completed" },
    { label: "Cancelled", value: "Cancelled" }
  ];
  loadTrips(page, size, search = 0) {
    this.isLoading.set(true);
    this.tripService.getPaginated({
      pageNumber: page,
      pageSize: size,
      search,
      status: this.selectedStatus || void 0
    }).subscribe({
      next: (response) => {
        this.trips = response.data.data;
        this.totalRecords = response.data.totalCount;
        this.isLoading.set(false);
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load trips"
        });
        this.isLoading.set(false);
      }
    });
  }
  onLazyLoad(event) {
    const page = Math.floor((event.first ?? 0) / (event.rows ?? 10)) + 1;
    const size = event.rows ?? 10;
    this.pageSize = size;
    this.currentPage = page;
    this.loadTrips(page, size);
  }
  onSearch(even) {
    const value = even.target.value;
    this.searchValue = Number(value);
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.loadTrips(1, this.pageSize, Number(value));
    }, 400);
  }
  // When user changes status filter — reload from page 1
  onStatusFilter() {
    this.currentPage = 1;
    this.loadTrips(1, this.pageSize);
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
  navigateToCreate() {
    this.router.navigate(["/trips/create"]);
  }
  viewDetail(trip) {
    this.router.navigate(["/trips", trip.id]);
  }
  confirmCancel(trip) {
    if (trip.status === "Completed" || trip.status === "Cancelled") {
      this.messageService.add({
        severity: "warn",
        summary: "Cannot Cancel",
        detail: `Trip is already ${trip.status.toLowerCase()}`
      });
      return;
    }
    this.confirmationService.confirm({
      message: `Are you sure you want to cancel trip
                <strong>#${trip.id}</strong>
                (${trip.origin} \u2192 ${trip.destination})?
                <br><br>
                All assigned resources will be released.`,
      header: "Confirm Cancellation",
      icon: "pi pi-exclamation-triangle",
      rejectButtonProps: { label: "No", severity: "secondary", variant: "text" },
      acceptButtonProps: { label: "Yes, Cancel Trip", severity: "danger" },
      accept: () => {
        this.tripService.cancel(trip.id).subscribe({
          next: (response) => {
            this.loadTrips(this.currentPage, this.pageSize);
            this.messageService.add({
              severity: "success",
              summary: "Cancelled",
              detail: response.data,
              life: 3e3
            });
          },
          error: (err) => {
            this.messageService.add({
              severity: "error",
              summary: "Error",
              detail: err.error?.message ?? "Failed to cancel trip",
              life: 5e3
            });
          }
        });
      }
    });
  }
  static \u0275fac = function TripListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TripListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TripListComponent, selectors: [["app-trip-list"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 24, vars: 12, consts: [["start", ""], ["end", ""], ["dt", ""], [1, "page-header"], [1, "breadcrumb-trail"], [1, "pi", "pi-angle-right"], [1, "page-title"], [1, "page-subtitle"], [1, "card"], [1, "table-toolbar"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} trips", 3, "onLazyLoad", "value", "loading", "lazy", "totalRecords", "paginator", "rows", "rowsPerPageOptions", "rowHover", "showCurrentPageReport", "tableStyle"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search containers...", 3, "input"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Filter by Status", 1, "ml-2", 3, "ngModelChange", "onChange", "ngModel", "options"], ["label", "New Trip", "icon", "pi pi-plus", 3, "onClick"], [1, "table-caption"], [1, "table-title"], [1, "table-count"], [2, "min-width", "5rem"], [2, "min-width", "12rem"], [2, "min-width", "10rem"], [2, "min-width", "14rem"], [2, "min-width", "11rem"], [2, "min-width", "9rem"], [2, "width", "9rem", "text-align", "center"], [1, "trip-id"], [1, "row-name"], [1, "plate-number"], [1, "trip-route-cell"], [3, "value", "severity"], [1, "row-actions"], ["icon", "pi pi-eye", "size", "small", "pTooltip", "View Details", "tooltipPosition", "top", 3, "onClick", "rounded", "outlined"], ["icon", "pi pi-times-circle", "severity", "danger", "size", "small", "pTooltip", "Cancel Trip", "tooltipPosition", "top", 3, "rounded", "outlined"], ["icon", "pi pi-times-circle", "severity", "danger", "size", "small", "pTooltip", "Cancel Trip", "tooltipPosition", "top", 3, "onClick", "rounded", "outlined"], ["colspan", "8"], [1, "empty-state"], [1, "pi", "pi-send"]], template: function TripListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast")(1, "p-confirmDialog");
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
      \u0275\u0275text(4, " Home ");
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "Trips");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275text(9, "Trips");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275text(11, "Manage transport trips and track their status");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "p-toolbar", 9);
      \u0275\u0275template(14, TripListComponent_ng_template_14_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, TripListComponent_ng_template_16_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-table", 10, 2);
      \u0275\u0275listener("onLazyLoad", function TripListComponent_Template_p_table_onLazyLoad_18_listener($event) {
        return ctx.onLazyLoad($event);
      });
      \u0275\u0275template(20, TripListComponent_ng_template_20_Template, 5, 1, "ng-template", 11)(21, TripListComponent_ng_template_21_Template, 17, 0, "ng-template", 12)(22, TripListComponent_ng_template_22_Template, 28, 15, "ng-template", 13)(23, TripListComponent_ng_template_23_Template, 8, 0, "ng-template", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("value", ctx.trips)("loading", ctx.isLoading())("lazy", true)("totalRecords", ctx.totalRecords)("paginator", true)("rows", ctx.pageSize)("rowsPerPageOptions", \u0275\u0275pureFunction0(10, _c0))("rowHover", true)("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(11, _c1));
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgControlStatus,
    NgModel,
    TableModule,
    Table,
    PrimeTemplate,
    ButtonModule,
    Button,
    InputTextModule,
    InputText,
    TagModule,
    Tag,
    ConfirmDialogModule,
    ConfirmDialog,
    ToastModule,
    Toast,
    IconFieldModule,
    IconField,
    InputIconModule,
    InputIcon,
    ToolbarModule,
    Toolbar,
    TooltipModule,
    Tooltip,
    SelectModule,
    Select,
    DatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripListComponent, [{
    type: Component,
    args: [{ selector: "app-trip-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TableModule,
      ButtonModule,
      InputTextModule,
      TagModule,
      ConfirmDialogModule,
      ToastModule,
      IconFieldModule,
      InputIconModule,
      ToolbarModule,
      TooltipModule,
      SelectModule
    ], providers: [MessageService, ConfirmationService], template: `<p-toast />
<p-confirmDialog />

<div class="page-header">
    <div class="breadcrumb-trail">
        Home <i class="pi pi-angle-right"></i>
        <span>Trips</span>
    </div>
    <div class="page-title">Trips</div>
    <div class="page-subtitle">Manage transport trips and track their status</div>
</div>

<div class="card">

    <p-toolbar class="table-toolbar">
        <ng-template #start>
            <p-iconfield>
                <p-inputicon class="pi pi-search" />
                <input pInputText type="text" placeholder="Search containers..." (input)="onSearch($event)" />
            </p-iconfield>

            <!--
                Status filter dropdown \u2014 filters trips by status.
                p-select is PrimeNG's modern dropdown component.
                [(ngModel)] binds to selectedStatus.
                (onChange) reloads the table when selection changes.
            -->
            <p-select [(ngModel)]="selectedStatus" [options]="statusOptions" optionLabel="label" optionValue="value"
                placeholder="Filter by Status" (onChange)="onStatusFilter()" class="ml-2" />

        </ng-template>
        <ng-template #end>
            <p-button label="New Trip" icon="pi pi-plus" (onClick)="navigateToCreate()" />

        </ng-template>
    </p-toolbar>

    <p-table #dt [value]="trips" [loading]="isLoading()" [lazy]="true" (onLazyLoad)="onLazyLoad($event)"
        [totalRecords]="totalRecords" [paginator]="true" [rows]="pageSize" [rowsPerPageOptions]="[10, 25, 50]"
        [rowHover]="true" dataKey="id" [showCurrentPageReport]="true"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} trips"
        [tableStyle]="{ 'min-width': '70rem' }">

        <ng-template pTemplate="caption">
            <div class="table-caption">
                <span class="table-title">Trip List</span>
                <span class="table-count">{{ totalRecords }} total</span>
            </div>
        </ng-template>

        <ng-template pTemplate="header">
            <tr>
                <th style="min-width: 5rem">#</th>
                <th style="min-width: 12rem">Customer</th>
                <th style="min-width: 12rem">Driver</th>
                <th style="min-width: 10rem">Truck</th>
                <th style="min-width: 14rem">Route</th>
                <th style="min-width: 11rem">Departure</th>
                <th style="min-width: 9rem">Status</th>
                <th style="width: 9rem; text-align: center">Actions</th>
            </tr>
        </ng-template>

        <ng-template pTemplate="body" let-trip>
            <tr>
                <td>
                    <span class="trip-id">#{{ trip.id }}</span>
                </td>
                <td>
                    <span class="row-name">{{ trip.customerName }}</span>
                </td>
                <td>{{ trip.driverName }}</td>
                <td>
                    <span class="plate-number">{{ trip.truckPlate }}</span>
                </td>
                <td>
                    <!--
                        Route shown as Origin \u2192 Destination with arrow.
                        Makes it visually scannable at a glance.
                    -->
                    <div class="trip-route-cell">
                        <span>{{ trip.origin }} </span>
                        ->
                        <span> {{ trip.destination }}</span>
                    </div>
                </td>
                <td>
                    {{ trip.departureDate | date: 'dd MMM yyyy' }}
                </td>
                <td>
                    <p-tag [value]="getStatusLabel(trip.status)" [severity]="getStatusSeverity(trip.status)" />
                </td>
                <td>
                    <div class="row-actions">
                        <!--
                            View detail button \u2014 opens the trip detail page
                            showing all nested info (customer, driver, truck, containers)
                            -->
                        <p-button icon="pi pi-eye" [rounded]="true" [outlined]="true" size="small"
                            pTooltip="View Details" tooltipPosition="top" (onClick)="viewDetail(trip)" />
                        <!--
                            Cancel button \u2014 only shown for Planned and InTransit trips.
                            Completed and Cancelled trips cannot be cancelled.
                            -->
                        @if (trip.status === 'Planned' || trip.status === 'InTransit') {
                        <p-button icon="pi pi-times-circle" severity="danger" [rounded]="true" [outlined]="true"
                            size="small" pTooltip="Cancel Trip" tooltipPosition="top" (onClick)="confirmCancel(trip)" />
                        }
                    </div>
                </td>
            </tr>
        </ng-template>

        <ng-template pTemplate="emptymessage">
            <tr>
                <td colspan="8">
                    <div class="empty-state">
                        <i class="pi pi-send"></i>
                        <span>No trips found</span>
                        <small>Create your first trip to get started</small>
                    </div>
                </td>
            </tr>
        </ng-template>

    </p-table>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TripListComponent, { className: "TripListComponent", filePath: "src/app/features/trips/pages/trip-list/trip-list.component.ts", lineNumber: 42 });
})();
export {
  TripListComponent
};
//# sourceMappingURL=chunk-PD7LOFDO.js.map
