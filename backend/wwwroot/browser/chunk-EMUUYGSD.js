import {
  TruckService
} from "./chunk-EAFXPPUM.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule,
  Toolbar,
  ToolbarModule
} from "./chunk-SRUYLEBO.js";
import "./chunk-RZ66ZDO3.js";
import {
  Tag,
  TagModule
} from "./chunk-B36ICVRO.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-KDKLZREL.js";
import "./chunk-AEYWZSNI.js";
import "./chunk-QT2PH3AY.js";
import {
  ConfirmDialogModule
} from "./chunk-KXKR4XI4.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-3PKWPBB4.js";
import "./chunk-FN7QHWDI.js";
import "./chunk-5LDHMQOW.js";
import {
  FormsModule,
  InputText,
  InputTextModule
} from "./chunk-WHVTFN2L.js";
import {
  Toast,
  ToastModule
} from "./chunk-RJSKT7PE.js";
import "./chunk-VXGQDH4M.js";
import {
  Button,
  ButtonModule,
  CommonModule,
  ConfirmationService,
  MessageService,
  PrimeTemplate,
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FOYF73X5.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/trucks/pages/truck-list/truck-list.component.ts
var _c0 = () => [10, 25, 50];
var _c1 = () => ({ "min-width": "55rem" });
function TruckListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iconfield");
    \u0275\u0275element(1, "p-inputicon", 15);
    \u0275\u0275elementStart(2, "input", 16);
    \u0275\u0275listener("input", function TruckListComponent_ng_template_13_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function TruckListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 17);
    \u0275\u0275listener("onClick", function TruckListComponent_ng_template_15_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToCreate());
    });
    \u0275\u0275elementEnd();
  }
}
function TruckListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2, "Fleet List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.totalRecords, " total");
  }
}
function TruckListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 21);
    \u0275\u0275text(2, " Plate Number ");
    \u0275\u0275element(3, "p-sortIcon", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 23);
    \u0275\u0275text(5, " Model ");
    \u0275\u0275element(6, "p-sortIcon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 25);
    \u0275\u0275text(8, " Capacity ");
    \u0275\u0275element(9, "p-sortIcon", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 27);
    \u0275\u0275text(11, "Availability");
    \u0275\u0275elementEnd()();
  }
}
function TruckListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 28);
    \u0275\u0275listener("click", function TruckListComponent_ng_template_21_Template_span_click_2_listener() {
      const truck_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToEdit(truck_r5));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 29)(6, "span", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "p-tag", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "p-tag", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const truck_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(truck_r5.plateNumber);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", truck_r5.model);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.getCapacityLabel(truck_r5.capacity))("severity", ctx_r1.getCapacitySeverity(truck_r5.capacity));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", truck_r5.isAvailable ? "Available" : "Unavailable")("severity", ctx_r1.getSeverity(truck_r5.isAvailable));
  }
}
function TruckListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32)(2, "div", 33);
    \u0275\u0275element(3, "i", 34);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "No trucks found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "Add your first truck to get started");
    \u0275\u0275elementEnd()()()();
  }
}
var TruckListComponent = class _TruckListComponent {
  truckService = inject(TruckService);
  messageService = inject(MessageService);
  router = inject(Router);
  searchTimeout;
  trucks = signal([], ...ngDevMode ? [{ debugName: "trucks" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  totalRecords = 0;
  pageSize = 10;
  currentPage = 1;
  searchValue = "";
  loadTrucks(page, size, search) {
    this.isLoading.set(true);
    this.truckService.getPaginated(page, size, search).subscribe({
      next: (response) => {
        this.trucks.set(response.data.data);
        this.totalRecords = response.data.totalCount;
        this.isLoading.set(false);
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to laod containers"
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
    this.loadTrucks(page, size, this.searchValue);
  }
  onSearch(even) {
    const value = even.target.value;
    this.searchValue = value;
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.loadTrucks(1, this.pageSize, value);
    }, 400);
  }
  navigateToCreate() {
    this.router.navigate(["/trucks/create"]);
  }
  navigateToEdit(truck) {
    this.router.navigate(["/trucks/edit", truck.id]);
  }
  getCapacityLabel(capacity) {
    return `${capacity} T`;
  }
  getCapacitySeverity(capacity) {
    if (capacity >= 20)
      return "danger";
    if (capacity <= 20)
      return "warn";
    return "info";
  }
  getSeverity(isAvailable) {
    return isAvailable ? "success" : "danger";
  }
  static \u0275fac = function TruckListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TruckListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TruckListComponent, selectors: [["app-truck-list"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService])], decls: 23, vars: 12, consts: [["start", ""], ["end", ""], ["dt", ""], [1, "page-header"], [1, "breadcrumb-trail"], [1, "pi", "pi-angle-right"], [1, "page-title"], [1, "page-subtitle"], [1, "card"], [1, "table-toolbar"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} trucks", 3, "onLazyLoad", "value", "loading", "lazy", "totalRecords", "paginator", "rows", "rowsPerPageOptions", "rowHover", "showCurrentPageReport", "tableStyle"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search trucks...", 3, "input"], ["label", "New Truck", "icon", "pi pi-plus", 3, "onClick"], [1, "table-caption"], [1, "table-title"], [1, "table-count"], ["pSortableColumn", "plateNumber", 2, "min-width", "12rem"], ["field", "plateNumber"], ["pSortableColumn", "model", 2, "min-width", "14rem"], ["field", "model"], ["pSortableColumn", "capacity", 2, "min-width", "10rem"], ["field", "capacity"], [2, "min-width", "10rem"], ["pTooltip", "Edit", "tooltipPosition", "top", 1, "plate-number", "breadcrumb-link", "cursor-pointer", 3, "click"], [1, "truck-model-cell"], [1, "row-name"], [3, "value", "severity"], ["colspan", "5"], [1, "empty-state"], [1, "pi", "pi-truck"]], template: function TruckListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 3)(2, "div", 4);
      \u0275\u0275text(3, " Home ");
      \u0275\u0275element(4, "i", 5);
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "Trucks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275text(8, "Trucks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275text(10, "Manage your fleet of trucks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "p-toolbar", 9);
      \u0275\u0275template(13, TruckListComponent_ng_template_13_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, TruckListComponent_ng_template_15_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p-table", 10, 2);
      \u0275\u0275listener("onLazyLoad", function TruckListComponent_Template_p_table_onLazyLoad_17_listener($event) {
        return ctx.onLazyLoad($event);
      });
      \u0275\u0275template(19, TruckListComponent_ng_template_19_Template, 5, 1, "ng-template", 11)(20, TruckListComponent_ng_template_20_Template, 12, 0, "ng-template", 12)(21, TruckListComponent_ng_template_21_Template, 12, 6, "ng-template", 13)(22, TruckListComponent_ng_template_22_Template, 8, 0, "ng-template", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275property("value", ctx.trucks())("loading", ctx.isLoading())("lazy", true)("totalRecords", ctx.totalRecords)("paginator", true)("rows", ctx.pageSize)("rowsPerPageOptions", \u0275\u0275pureFunction0(10, _c0))("rowHover", true)("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(11, _c1));
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    TableModule,
    Table,
    PrimeTemplate,
    SortableColumn,
    SortIcon,
    ButtonModule,
    Button,
    InputTextModule,
    InputText,
    TagModule,
    Tag,
    ConfirmDialogModule,
    ToastModule,
    Toast,
    IconFieldModule,
    IconField,
    InputIconModule,
    InputIcon,
    ToolbarModule,
    Toolbar,
    TooltipModule,
    Tooltip
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TruckListComponent, [{
    type: Component,
    args: [{ selector: "app-truck-list", standalone: true, imports: [
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
      TooltipModule
    ], providers: [ConfirmationService, MessageService], template: `<p-toast />

<div class="page-header">
    <div class="breadcrumb-trail">
        Home <i class="pi pi-angle-right"></i>
        <span>Trucks</span>
    </div>
    <div class="page-title">Trucks</div>
    <div class="page-subtitle">Manage your fleet of trucks</div>
</div>

<div class="card">

    <p-toolbar class="table-toolbar">
        <ng-template #start>
            <p-iconfield>
                <p-inputicon class="pi pi-search" />
                <input pInputText type="text" placeholder="Search trucks..." (input)="onSearch($event)" />
            </p-iconfield>
        </ng-template>
        <ng-template #end>
            <p-button label="New Truck" icon="pi pi-plus" (onClick)="navigateToCreate()" />

        </ng-template>
    </p-toolbar>

    <p-table #dt [value]="trucks()" [loading]="isLoading()" [lazy]="true" (onLazyLoad)="onLazyLoad($event)"
        [totalRecords]="totalRecords" [paginator]="true" [rows]="pageSize" [rowsPerPageOptions]="[10, 25, 50]"
        [rowHover]="true" dataKey="id" [showCurrentPageReport]="true"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} trucks"
        [tableStyle]="{ 'min-width': '55rem' }">

        <ng-template pTemplate="caption">
            <div class="table-caption">
                <span class="table-title">Fleet List</span>
                <span class="table-count"> {{ totalRecords }} total</span>
            </div>
        </ng-template>

        <ng-template pTemplate="header">
            <tr>
                <th pSortableColumn="plateNumber" style="min-width: 12rem">
                    Plate Number <p-sortIcon field="plateNumber" />
                </th>
                <th pSortableColumn="model" style="min-width: 14rem">
                    Model <p-sortIcon field="model" />
                </th>
                <th pSortableColumn="capacity" style="min-width: 10rem">
                    Capacity <p-sortIcon field="capacity" />
                </th>
                <th style="min-width: 10rem">Availability</th>
            </tr>
        </ng-template>

        <ng-template pTemplate="body" let-truck>
            <tr>
                <td>
                    <span class="plate-number breadcrumb-link cursor-pointer" pTooltip="Edit" tooltipPosition="top"
                        (click)="navigateToEdit(truck)">{{
                        truck.plateNumber }}</span>
                </td>
                <td>
                    <div class="truck-model-cell">
                        <span class="row-name"> {{ truck.model }}</span>
                    </div>
                </td>
                <td>
                    <p-tag [value]="getCapacityLabel(truck.capacity)"
                        [severity]="getCapacitySeverity(truck.capacity)" />
                </td>
                <td>
                    <p-tag [value]="truck.isAvailable ? 'Available' : 'Unavailable'"
                        [severity]="getSeverity(truck.isAvailable)" />
                </td>
            </tr>
        </ng-template>

        <ng-template pTemplate="emptymessage">
            <tr>
                <td colspan="5">
                    <div class="empty-state">
                        <i class="pi pi-truck"></i>
                        <span>No trucks found</span>
                        <small>Add your first truck to get started</small>
                    </div>
                </td>
            </tr>
        </ng-template>

    </p-table>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TruckListComponent, { className: "TruckListComponent", filePath: "src/app/features/trucks/pages/truck-list/truck-list.component.ts", lineNumber: 40 });
})();
export {
  TruckListComponent
};
//# sourceMappingURL=chunk-EMUUYGSD.js.map
