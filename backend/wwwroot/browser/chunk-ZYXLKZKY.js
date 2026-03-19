import {
  RouteService
} from "./chunk-GK25RDEA.js";
import {
  ConfirmDialogModule,
  SortIcon,
  SortableColumn,
  Table,
  TableModule,
  Tag,
  TagModule,
  Toolbar,
  ToolbarModule
} from "./chunk-6EWUXHUN.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-YEOMDTB7.js";
import "./chunk-QXZ2OK4J.js";
import "./chunk-2ABF2E5E.js";
import "./chunk-E3RJNTKN.js";
import {
  Button,
  ButtonModule,
  FormsModule,
  InputText,
  InputTextModule,
  Toast,
  ToastModule
} from "./chunk-X7K774KH.js";
import {
  CommonModule,
  MessageService,
  PrimeTemplate,
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
} from "./chunk-ZCRCH54Z.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/routes/pages/route-list/route-list.component.ts
var _c0 = () => [10, 25, 50];
var _c1 = () => ({ "min-width": "55rem" });
function RouteListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 15);
    \u0275\u0275listener("onClick", function RouteListComponent_ng_template_13_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToCreate());
    });
    \u0275\u0275elementEnd();
  }
}
function RouteListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iconfield");
    \u0275\u0275element(1, "p-inputicon", 16);
    \u0275\u0275elementStart(2, "input", 17);
    \u0275\u0275listener("input", function RouteListComponent_ng_template_15_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function RouteListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2, "Route List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.totalRecords, " total");
  }
}
function RouteListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 21);
    \u0275\u0275text(2, " Origin ");
    \u0275\u0275element(3, "p-sortIcon", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 23);
    \u0275\u0275text(5, " Destination ");
    \u0275\u0275element(6, "p-sortIcon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 25);
    \u0275\u0275text(8, " Distance ");
    \u0275\u0275element(9, "p-sortIcon", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 27);
    \u0275\u0275text(11, " Est. Duration ");
    \u0275\u0275element(12, "p-sortIcon", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 29);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function RouteListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 30);
    \u0275\u0275element(3, "i", 31);
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td")(7, "div", 30)(8, "span", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "p-tag", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "div", 34);
    \u0275\u0275element(14, "i", 35);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td")(18, "div", 36)(19, "p-button", 37);
    \u0275\u0275listener("onClick", function RouteListComponent_ng_template_21_Template_p_button_onClick_19_listener() {
      const route_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToEdit(route_r5));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const route_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(route_r5.origin);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(route_r5.destination);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.formatDistance(route_r5.distanceKm))("severity", ctx_r1.getDistanceSeverity(route_r5.distanceKm));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatHours(route_r5.estimatedHours));
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function RouteListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38)(2, "div", 39);
    \u0275\u0275element(3, "i", 40);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "No routes found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "Add your first route to get started");
    \u0275\u0275elementEnd()()()();
  }
}
var RouteListComponent = class _RouteListComponent {
  routeService = inject(RouteService);
  messageService = inject(MessageService);
  router = inject(Router);
  searchTimeout;
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  appRoutes = signal([], ...ngDevMode ? [{ debugName: "appRoutes" }] : (
    /* istanbul ignore next */
    []
  ));
  totalRecords = 0;
  pageSize = 10;
  currentPage = 1;
  searchValue = "";
  loadRoutes(page, size, search) {
    this.isLoading.set(true);
    this.routeService.getPaginated(page, size, search).subscribe({
      next: (response) => {
        this.appRoutes.set(response.data.data);
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
    this.loadRoutes(page, size, this.searchValue);
  }
  onSearch(even) {
    const value = even.target.value;
    this.searchValue = value;
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.loadRoutes(1, this.pageSize, value);
    }, 400);
  }
  formatDistance(km) {
    return `${km} km`;
  }
  formatHours(hours) {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m.toString().padStart(2, "0")}m`;
  }
  getDistanceSeverity(km) {
    if (km <= 100)
      return "success";
    if (km <= 300)
      return "info";
    if (km <= 600)
      return "warn";
    return "danger";
  }
  navigateToCreate() {
    this.router.navigate(["/routes/create"]);
  }
  navigateToEdit(route) {
    this.router.navigate(["/routes/edit", route.id]);
  }
  static \u0275fac = function RouteListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouteListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RouteListComponent, selectors: [["app-route-list"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 23, vars: 11, consts: [["start", ""], ["end", ""], ["dt", ""], [1, "page-header"], [1, "breadcrumb-trail"], [1, "pi", "pi-angle-right"], [1, "page-title"], [1, "page-subtitle"], [1, "card"], [1, "table-toolbar"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} routes", 3, "onLazyLoad", "value", "lazy", "totalRecords", "paginator", "rows", "rowsPerPageOptions", "rowHover", "showCurrentPageReport", "tableStyle"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["label", "New Route", "icon", "pi pi-plus", 3, "onClick"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search routes...", 3, "input"], [1, "table-caption"], [1, "table-title"], [1, "table-count"], ["pSortableColumn", "origin", 2, "min-width", "14rem"], ["field", "origin"], ["pSortableColumn", "destination", 2, "min-width", "14rem"], ["field", "destination"], ["pSortableColumn", "distanceKm", 2, "min-width", "10rem"], ["field", "distanceKm"], ["pSortableColumn", "estimatedHours", 2, "min-width", "10rem"], ["field", "estimatedHours"], [2, "width", "8rem", "text-align", "center"], [1, "route-origin-cell"], [1, "pi", "pi-map-marker", "route-pin"], [1, "row-name"], [3, "value", "severity"], [1, "duration-cell"], [1, "pi", "pi-clock"], [1, "row-actions"], ["icon", "pi pi-pencil", "size", "small", "pTooltip", "Edit", "tooltipPosition", "top", 3, "onClick", "rounded", "outlined"], ["colspan", "5"], [1, "empty-state"], [1, "pi", "pi-map"]], template: function RouteListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 3)(2, "div", 4);
      \u0275\u0275text(3, " Home ");
      \u0275\u0275element(4, "i", 5);
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "Routes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275text(8, "Routes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275text(10, "Manage transport routes and distances");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "p-toolbar", 9);
      \u0275\u0275template(13, RouteListComponent_ng_template_13_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, RouteListComponent_ng_template_15_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p-table", 10, 2);
      \u0275\u0275listener("onLazyLoad", function RouteListComponent_Template_p_table_onLazyLoad_17_listener($event) {
        return ctx.onLazyLoad($event);
      });
      \u0275\u0275template(19, RouteListComponent_ng_template_19_Template, 5, 1, "ng-template", 11)(20, RouteListComponent_ng_template_20_Template, 15, 0, "ng-template", 12)(21, RouteListComponent_ng_template_21_Template, 20, 7, "ng-template", 13)(22, RouteListComponent_ng_template_22_Template, 8, 0, "ng-template", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275property("value", ctx.appRoutes())("lazy", true)("totalRecords", ctx.totalRecords)("paginator", true)("rows", ctx.pageSize)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c0))("rowHover", true)("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c1));
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
    Toolbar
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteListComponent, [{
    type: Component,
    args: [{ selector: "app-route-list", standalone: true, imports: [
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
      ToolbarModule
    ], providers: [MessageService], template: `<p-toast />

<div class="page-header">
    <div class="breadcrumb-trail">
        Home <i class="pi pi-angle-right"></i>
        <span>Routes</span>
    </div>
    <div class="page-title">Routes</div>
    <div class="page-subtitle">Manage transport routes and distances</div>
</div>

<div class="card">

    <p-toolbar class="table-toolbar">
        <ng-template #start>
            <p-button label="New Route" icon="pi pi-plus" (onClick)="navigateToCreate()" />
        </ng-template>
        <ng-template #end>
            <p-iconfield>
                <p-inputicon class="pi pi-search" />
                <input pInputText type="text" placeholder="Search routes..." (input)="onSearch($event)" />
            </p-iconfield>
        </ng-template>
    </p-toolbar>

    <p-table #dt [value]="appRoutes()" [lazy]="true" (onLazyLoad)="onLazyLoad($event)" [totalRecords]="totalRecords"
        [paginator]="true" [rows]="pageSize" [rowsPerPageOptions]="[10, 25, 50]" [rowHover]="true" dataKey="id"
        [showCurrentPageReport]="true" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} routes"
        [tableStyle]="{ 'min-width': '55rem' }">

        <ng-template pTemplate="caption">
            <div class="table-caption">
                <span class="table-title">Route List</span>
                <span class="table-count">{{ totalRecords }} total</span>
            </div>
        </ng-template>

        <ng-template pTemplate="header">
            <tr>
                <th pSortableColumn="origin" style="min-width: 14rem">
                    Origin <p-sortIcon field="origin" />
                </th>
                <th pSortableColumn="destination" style="min-width: 14rem">
                    Destination <p-sortIcon field="destination" />
                </th>
                <th pSortableColumn="distanceKm" style="min-width: 10rem">
                    Distance <p-sortIcon field="distanceKm" />
                </th>
                <th pSortableColumn="estimatedHours" style="min-width: 10rem">
                    Est. Duration <p-sortIcon field="estimatedHours" />
                </th>
                <th style="width: 8rem; text-align: center">Actions</th>
            </tr>
        </ng-template>

        <ng-template pTemplate="body" let-route>
            <tr>
                <td>
                    <div class="route-origin-cell">
                        <i class="pi pi-map-marker route-pin"></i>
                        <span class="row-name">{{ route.origin }}</span>
                    </div>
                </td>
                <td>
                    <div class="route-origin-cell">
                        <span class="row-name">{{ route.destination }}</span>
                    </div>
                </td>
                <td>
                    <p-tag [value]="formatDistance(route.distanceKm)"
                        [severity]="getDistanceSeverity(route.distanceKm)" />
                </td>
                <td>
                    <div class="duration-cell">
                        <i class="pi pi-clock"></i>
                        <span>{{ formatHours(route.estimatedHours) }}</span>
                    </div>
                </td>
                <td>
                    <div class="row-actions">
                        <p-button icon="pi pi-pencil" [rounded]="true" [outlined]="true" size="small" pTooltip="Edit"
                            tooltipPosition="top" (onClick)="navigateToEdit(route)" />
                    </div>
                </td>
            </tr>
        </ng-template>

        <ng-template pTemplate="emptymessage">
            <tr>
                <td colspan="5">
                    <div class="empty-state">
                        <i class="pi pi-map"></i>
                        <span>No routes found</span>
                        <small>Add your first route to get started</small>
                    </div>
                </td>
            </tr>
        </ng-template>

    </p-table>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RouteListComponent, { className: "RouteListComponent", filePath: "src/app/features/routes/pages/route-list/route-list.component.ts", lineNumber: 38 });
})();
export {
  RouteListComponent
};
//# sourceMappingURL=chunk-ZYXLKZKY.js.map
