import {
  ContainerService
} from "./chunk-52WEYACT.js";
import {
  ConfirmDialog,
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
  ConfirmationService,
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

// src/app/features/containers/pages/container-list/container-list.component.ts
var _c0 = () => [10, 25, 50, 100];
var _c1 = () => ({ "min-width": "55rem" });
function ContainerListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iconfield");
    \u0275\u0275element(1, "p-inputicon", 15);
    \u0275\u0275elementStart(2, "input", 16);
    \u0275\u0275listener("input", function ContainerListComponent_ng_template_14_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function ContainerListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 17);
    \u0275\u0275listener("onClick", function ContainerListComponent_ng_template_16_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToCreate());
    });
    \u0275\u0275elementEnd();
  }
}
function ContainerListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2, "Container List:");
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
function ContainerListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 21);
    \u0275\u0275text(2, " Container No. ");
    \u0275\u0275element(3, "p-sortIcon", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 23);
    \u0275\u0275text(5, " Type ");
    \u0275\u0275element(6, "p-sortIcon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 25);
    \u0275\u0275text(8, " Weight Capacity ");
    \u0275\u0275element(9, "p-sortIcon", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 27);
    \u0275\u0275text(11, " Availability ");
    \u0275\u0275element(12, "p-sortIcon", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 29);
    \u0275\u0275text(14, " Created ");
    \u0275\u0275element(15, "p-sortIcon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 31);
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function ContainerListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275element(5, "p-tag", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "p-tag", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "div", 34)(14, "p-button", 35);
    \u0275\u0275listener("onClick", function ContainerListComponent_ng_template_22_Template_p_button_onClick_14_listener() {
      const container_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToEdit(container_r5));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const container_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(container_r5.containerNumber);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", container_r5.type)("severity", ctx_r1.getTypeSeverity(container_r5.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(container_r5.weightCapacity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(container_r5.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", container_r5.isAvailable ? "Available" : "Occupied")("severity", ctx_r1.getSeverity(container_r5.isAvailable));
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function ContainerListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36)(2, "div", 37);
    \u0275\u0275element(3, "i", 38);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "No container found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "Add your first container to get started");
    \u0275\u0275elementEnd()()()();
  }
}
var ContainerListComponent = class _ContainerListComponent {
  containerService = inject(ContainerService);
  router = inject(Router);
  messageService = inject(MessageService);
  searchTimeout;
  containers = signal([], ...ngDevMode ? [{ debugName: "containers" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = false;
  totalRecords = 0;
  pageSize = 10;
  currentPage = 1;
  searchValue = "";
  loadContainers(page, size, search) {
    this.isLoading = true;
    this.containerService.getPaginated(page, size, search).subscribe({
      next: (response) => {
        this.containers.set(response.data.data);
        this.totalRecords = response.data.totalCount;
        this.isLoading = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to laod containers"
        });
        this.isLoading = false;
      }
    });
  }
  onLazyLoad(event) {
    const page = Math.floor((event.first ?? 0) / (event.rows ?? 10)) + 1;
    const size = event.rows ?? 10;
    this.pageSize = size;
    this.currentPage = page;
    this.loadContainers(page, size, this.searchValue);
  }
  onSearch(even) {
    const value = even.target.value;
    this.searchValue = value;
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.loadContainers(1, this.pageSize, value);
    }, 400);
  }
  navigateToCreate() {
    this.router.navigate(["/containers/create"]);
  }
  navigateToEdit(container) {
    this.router.navigate(["/containers/edit", container.id]);
  }
  // getSeverity maps isAvailable boolean to PrimeNG tag color
  getSeverity(isAvailable) {
    return isAvailable ? "success" : "danger";
  }
  getTypeSeverity(type) {
    switch (type.toLowerCase()) {
      case "dry":
        return "info";
      case "refer":
        return "success";
      case "flat":
        return "warn";
      default:
        return "secondary";
    }
  }
  static \u0275fac = function ContainerListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContainerListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContainerListComponent, selectors: [["app-container-list"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 24, vars: 12, consts: [["start", ""], ["end", ""], ["dt", ""], [1, "page-header"], [1, "breadcrumb-trail"], [1, "pi", "pi-angle-right"], [1, "page-title"], [1, "page-subtitle"], [1, "card"], [1, "table-toolbar"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} containers", 3, "onLazyLoad", "value", "loading", "lazy", "totalRecords", "paginator", "rows", "rowsPerPageOptions", "rowHover", "showCurrentPageReport", "tableStyle"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search containers...", 3, "input"], ["label", "Add", "icon", "pi pi-plus", 3, "onClick"], [1, "table-caption"], [1, "table-title"], [1, "table-count"], ["pSortableColumn", "containerNumber", 2, "min-width", "14rem"], ["field", "containerNumber"], ["pSortableColumn", "type", 2, "min-width", "16rem"], ["field", "Type"], ["pSortableColumn", "weightCapacity", 2, "min-width", "11rem"], ["field", "weightCapacity"], ["pSortableColumn", "isAvailable", 2, "min-width", "10rem"], ["field", "isAvailable"], ["pSortableColumn", "createdAt", 2, "min-width", "11rem"], ["field", "createdAt"], [2, "width", "8rem", "text-align", "center"], [1, "row-name"], [3, "value", "severity"], [1, "row-actions"], ["icon", "pi pi-pencil", "size", "small", "pTooltip", "Edit", "tooltipPosition", "top", 3, "onClick", "rounded", "outlined"], ["colspan", "6"], [1, "empty-state"], [1, "pi", "pi-users"]], template: function ContainerListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast")(1, "p-confirmDialog");
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
      \u0275\u0275text(4, " Home ");
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "Containers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275text(9, "Containers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275text(11, "Manage your containers records");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "p-toolbar", 9);
      \u0275\u0275template(14, ContainerListComponent_ng_template_14_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, ContainerListComponent_ng_template_16_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-table", 10, 2);
      \u0275\u0275listener("onLazyLoad", function ContainerListComponent_Template_p_table_onLazyLoad_18_listener($event) {
        return ctx.onLazyLoad($event);
      });
      \u0275\u0275template(20, ContainerListComponent_ng_template_20_Template, 5, 1, "ng-template", 11)(21, ContainerListComponent_ng_template_21_Template, 18, 0, "ng-template", 12)(22, ContainerListComponent_ng_template_22_Template, 15, 9, "ng-template", 13)(23, ContainerListComponent_ng_template_23_Template, 8, 0, "ng-template", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("value", ctx.containers())("loading", ctx.isLoading)("lazy", true)("totalRecords", ctx.totalRecords)("paginator", true)("rows", ctx.pageSize)("rowsPerPageOptions", \u0275\u0275pureFunction0(10, _c0))("rowHover", true)("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(11, _c1));
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
    ConfirmDialog,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContainerListComponent, [{
    type: Component,
    args: [{ selector: "app-container-list", standalone: true, imports: [
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
    ], providers: [MessageService, ConfirmationService], template: `<p-toast />
<p-confirmDialog />

<div class="page-header">
    <div class="breadcrumb-trail">
        Home <i class="pi pi-angle-right"></i>
        <span>Containers</span>
    </div>
    <div class="page-title">Containers</div>
    <div class="page-subtitle">Manage your containers records</div>
</div>

<div class="card">
    <p-toolbar class="table-toolbar">
        <ng-template #start>
            <p-iconfield>
                <p-inputicon class="pi pi-search" />
                <input pInputText type="text" placeholder="Search containers..." (input)="onSearch($event)" />
            </p-iconfield>
        </ng-template>
        <ng-template #end>
            <p-button label="Add" icon="pi pi-plus" (onClick)="navigateToCreate()" />
        </ng-template>
    </p-toolbar>

    <p-table #dt [value]="containers()" 
        [loading]="isLoading" 
        [lazy]="true" 
        (onLazyLoad)="onLazyLoad($event)"
        [totalRecords]="totalRecords" 
        [paginator]="true" 
        [rows]="pageSize" 
        [rowsPerPageOptions]="[10, 25, 50, 100]"
        [rowHover]="true" 
        dataKey="id" 
        [showCurrentPageReport]="true"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} containers"
        [tableStyle]="{ 'min-width': '55rem' }">

        <ng-template pTemplate="caption">
            <div class="table-caption">
                <span class="table-title">Container List:</span>
                <span class="table-count">{{ totalRecords }} total</span>
            </div>
        </ng-template>

        <ng-template pTemplate="header">
            <tr>
                <th pSortableColumn="containerNumber" style="min-width: 14rem">
                    Container No. <p-sortIcon field="containerNumber" />
                </th>
                <th pSortableColumn="type" style="min-width: 16rem">
                    Type <p-sortIcon field="Type" />
                </th>
                <th pSortableColumn="weightCapacity" style="min-width: 11rem">
                    Weight Capacity <p-sortIcon field="weightCapacity" />
                </th>
                <th pSortableColumn="isAvailable" style="min-width: 10rem">
                    Availability <p-sortIcon field="isAvailable" />
                </th>
                <th pSortableColumn="createdAt" style="min-width: 11rem">
                    Created <p-sortIcon field="createdAt" />
                </th>
                <th style="width: 8rem; text-align: center">Actions</th>
            </tr>
        </ng-template>

        <ng-template pTemplate="body" let-container>
            <tr>
                <td><span class="row-name">{{ container.containerNumber }}</span></td>
                <td>
                    <p-tag
                        [value]="container.type"
                        [severity]="getTypeSeverity(container.type)" />
                </td>
                <td>{{ container.weightCapacity }}</td>
                <td>{{ container.createdAt }}</td>
                <td>
                    <p-tag 
                        [value]="container.isAvailable ? 'Available' : 'Occupied'"
                        [severity]="getSeverity(container.isAvailable)" />
                </td>
                <td>
                    <div class="row-actions">
                        <p-button 
                            icon="pi pi-pencil" 
                            [rounded]="true" 
                            [outlined]="true" 
                            size="small" 
                            pTooltip="Edit"
                            tooltipPosition="top" 
                            (onClick)="navigateToEdit(container)" />
                    </div>
                </td>
            </tr>
        </ng-template>

        <ng-template pTemplate="emptymessage">
            <tr>
                <td colspan="6">
                    <div class="empty-state">
                        <i class="pi pi-users"></i>
                        <span>No container found</span>
                        <small>Add your first container to get started</small>
                    </div>
                </td>
            </tr>
        </ng-template>

    </p-table>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContainerListComponent, { className: "ContainerListComponent", filePath: "src/app/features/containers/pages/container-list/container-list.component.ts", lineNumber: 38 });
})();
export {
  ContainerListComponent
};
//# sourceMappingURL=chunk-OOF6AB4S.js.map
