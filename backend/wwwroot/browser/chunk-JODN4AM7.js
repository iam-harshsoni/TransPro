import {
  CustomerService
} from "./chunk-KJGYZIBU.js";
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

// src/app/features/customers/pages/customer-list/customer-list.component.ts
var _c0 = () => [10, 25, 50, 100];
var _c1 = () => ({ "min-width": "60rem" });
function CustomerListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iconfield");
    \u0275\u0275element(1, "p-inputicon", 15);
    \u0275\u0275elementStart(2, "input", 16);
    \u0275\u0275listener("input", function CustomerListComponent_ng_template_14_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function CustomerListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 17);
    \u0275\u0275listener("onClick", function CustomerListComponent_ng_template_16_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToCreate());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2, "Customer List:");
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
function CustomerListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 21);
    \u0275\u0275text(2, " Name ");
    \u0275\u0275element(3, "p-sortIcon", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 23);
    \u0275\u0275text(5, " Email ");
    \u0275\u0275element(6, "p-sortIcon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 25);
    \u0275\u0275text(8, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 26);
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 27);
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function CustomerListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "p-tag", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div", 30)(12, "p-button", 31);
    \u0275\u0275listener("onClick", function CustomerListComponent_ng_template_22_Template_p_button_onClick_12_listener() {
      const customer_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToEdit(customer_r5));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const customer_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(customer_r5.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r5.phone);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", customer_r5.isActive ? "Active" : "Inactive")("severity", ctx_r1.getSeverity(customer_r5.isActive));
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function CustomerListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32)(2, "div", 33);
    \u0275\u0275element(3, "i", 34);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "No customers found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "Add your first customer to get started");
    \u0275\u0275elementEnd()()()();
  }
}
var CustomerListComponent = class _CustomerListComponent {
  customerService = inject(CustomerService);
  router = inject(Router);
  confirmationService = inject(ConfirmationService);
  messageService = inject(MessageService);
  // Array (not signal) to match PrimeNG table's expected binding style
  customers = signal([], ...ngDevMode ? [{ debugName: "customers" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = false;
  // Pagination state — tracks current page info
  totalRecords = 0;
  // total customers in database
  pageSize = 10;
  // rows per page
  currentPage = 1;
  // current page number
  searchValue = "";
  // current search term
  searchTimeout;
  ngOnInit() {
  }
  loadCustomers(page, size, search) {
    this.isLoading = true;
    this.customerService.getPaginated(page, size, search).subscribe({
      next: (response) => {
        this.customers.set(response.data.data);
        this.totalRecords = response.data.totalCount;
        this.isLoading = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load customers"
        });
        this.isLoading = false;
      }
    });
  }
  // onLazyLoad fires every time the user changes page or rows per page.
  // PrimeNG passes a TableLazyLoadEvent with first (row index) and rows (page size).
  // We convert 'first' (row index) to a page number the API understands.
  onLazyLoad(event) {
    const page = Math.floor((event.first ?? 0) / (event.rows ?? 10)) + 1;
    const size = event.rows ?? 10;
    this.pageSize = size;
    this.currentPage = page;
    this.loadCustomers(page, size, this.searchValue);
  }
  // onSearch fires on every keypress.
  // We debounce it — wait 400ms after user stops typing before calling API.
  // This prevents hammering the API with one request per character typed.
  onSearch(event) {
    const value = event.target.value;
    this.searchValue = value;
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.loadCustomers(1, this.pageSize, value);
    }, 400);
  }
  navigateToCreate() {
    this.router.navigate(["/customers/create"]);
  }
  navigateToEdit(customer) {
    this.router.navigate(["/customers/edit", customer.id]);
  }
  confirmDelete(customer) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete <strong>${customer.fullName}</strong>?`,
      header: "Confirm Delete",
      icon: "pi pi-exclamation-triangle",
      rejectButtonProps: {
        label: "Cancel",
        severity: "secondary",
        variant: "text"
      },
      acceptButtonProps: {
        label: "Delete",
        severity: "danger"
      },
      accept: () => {
        this.customerService.delete(customer.id).subscribe({
          next: () => {
            this.customers.update((list) => list.filter((c) => c.id !== customer.id));
            this.messageService.add({
              severity: "success",
              summary: "Deleted",
              detail: "Customer deleted successfully",
              life: 3e3
            });
          },
          error: () => {
            this.messageService.add({
              severity: "error",
              summary: "Error",
              detail: "Failed to delete customer",
              life: 3e3
            });
          }
        });
      }
    });
  }
  // getSeverity maps isActive boolean to PrimeNG tag color
  getSeverity(isActive) {
    return isActive ? "success" : "danger";
  }
  static \u0275fac = function CustomerListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerListComponent, selectors: [["app-customer-list"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService])], decls: 24, vars: 12, consts: [["start", ""], ["end", ""], ["dt", ""], [1, "page-header"], [1, "breadcrumb-trail"], [1, "pi", "pi-angle-right"], [1, "page-title"], [1, "page-subtitle"], [1, "card"], [1, "table-toolbar"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} customers", 3, "onLazyLoad", "value", "loading", "lazy", "totalRecords", "paginator", "rows", "rowsPerPageOptions", "rowHover", "showCurrentPageReport", "tableStyle"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search customers...", 3, "input"], ["label", "New Customer", "icon", "pi pi-plus", 3, "onClick"], [1, "table-caption"], [1, "table-title"], [1, "table-count"], ["pSortableColumn", "fullName", 2, "min-width", "14rem"], ["field", "fullName"], ["pSortableColumn", "email", 2, "min-width", "16rem"], ["field", "email"], [2, "min-width", "11rem"], [2, "min-width", "8rem"], [2, "width", "8rem", "text-align", "center"], [1, "row-name"], [3, "value", "severity"], [1, "row-actions"], ["icon", "pi pi-pencil", "size", "small", "pTooltip", "Edit", "tooltipPosition", "top", 3, "onClick", "rounded", "outlined"], ["colspan", "6"], [1, "empty-state"], [1, "pi", "pi-users"]], template: function CustomerListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast")(1, "p-confirmDialog");
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
      \u0275\u0275text(4, " Home ");
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "Customers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275text(9, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275text(11, "Manage your customer records");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "p-toolbar", 9);
      \u0275\u0275template(14, CustomerListComponent_ng_template_14_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, CustomerListComponent_ng_template_16_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-table", 10, 2);
      \u0275\u0275listener("onLazyLoad", function CustomerListComponent_Template_p_table_onLazyLoad_18_listener($event) {
        return ctx.onLazyLoad($event);
      });
      \u0275\u0275template(20, CustomerListComponent_ng_template_20_Template, 5, 1, "ng-template", 11)(21, CustomerListComponent_ng_template_21_Template, 13, 0, "ng-template", 12)(22, CustomerListComponent_ng_template_22_Template, 13, 7, "ng-template", 13)(23, CustomerListComponent_ng_template_23_Template, 8, 0, "ng-template", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("value", ctx.customers())("loading", ctx.isLoading)("lazy", true)("totalRecords", ctx.totalRecords)("paginator", true)("rows", ctx.pageSize)("rowsPerPageOptions", \u0275\u0275pureFunction0(10, _c0))("rowHover", true)("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(11, _c1));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerListComponent, [{
    type: Component,
    args: [{ selector: "app-customer-list", standalone: true, imports: [
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
    ], providers: [ConfirmationService, MessageService], template: `<p-toast />
<p-confirmDialog />

<div class="page-header">
    <div class="breadcrumb-trail">
        Home <i class="pi pi-angle-right"></i>
        <span>Customers</span>
    </div>
    <div class="page-title">Customers</div>
    <div class="page-subtitle">Manage your customer records</div>
</div>

<div class="card">

    <p-toolbar class="table-toolbar">
        <ng-template #start>
            <p-iconfield>
                <p-inputicon class="pi pi-search" />
                <input pInputText type="text" placeholder="Search customers..." (input)="onSearch($event)" />
            </p-iconfield>
        </ng-template>
        <ng-template #end>
            <p-button label="New Customer" icon="pi pi-plus" (onClick)="navigateToCreate()" />
        </ng-template>

    </p-toolbar>

    <!-- [lazy]="true" tells PrimeNG to NOT paginate client-side.
    Instead it fires (onLazyLoad) every time the page changes.
    Our component handles that event and fetches the correct page from API.

    [totalRecords] tells the paginator how many total records exist
    so it can calculate how many pages to show.
    This value comes from the API response (response.totalCount).
  -->
    <p-table #dt [value]="customers()" [loading]="isLoading" [lazy]="true" (onLazyLoad)="onLazyLoad($event)"
        [totalRecords]="totalRecords" [paginator]="true" [rows]="pageSize" [rowsPerPageOptions]="[10, 25, 50, 100]"
        [rowHover]="true" dataKey="id" [showCurrentPageReport]="true"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} customers"
        [tableStyle]="{ 'min-width': '60rem' }">

        <ng-template pTemplate="caption">
            <div class="table-caption">
                <span class="table-title">Customer List:</span>
                <span class="table-count">{{ totalRecords }} total</span>
            </div>
        </ng-template>

        <ng-template pTemplate="header">
            <tr>
                <th pSortableColumn="fullName" style="min-width: 14rem">
                    Name <p-sortIcon field="fullName" />
                </th>
                <th pSortableColumn="email" style="min-width: 16rem">
                    Email <p-sortIcon field="email" />
                </th>
                <th style="min-width: 11rem">Phone</th>
                <th style="min-width: 8rem">Status</th>
                <th style="width: 8rem; text-align: center">Actions</th>
            </tr>
        </ng-template>

        <ng-template pTemplate="body" let-customer>
            <tr>
                <td><span class="row-name">{{ customer.fullName }}</span></td>
                <td>{{ customer.email }}</td>
                <td>{{ customer.phone }}</td>
                <td>
                    <p-tag [value]="customer.isActive ? 'Active' : 'Inactive'"
                        [severity]="getSeverity(customer.isActive)" />
                </td>
                <td>
                    <div class="row-actions">
                        <p-button icon="pi pi-pencil" [rounded]="true" [outlined]="true" size="small" pTooltip="Edit"
                            tooltipPosition="top" (onClick)="navigateToEdit(customer)" />
                        <!-- <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" size="small"
                            pTooltip="Delete" tooltipPosition="top" (onClick)="confirmDelete(customer)" /> -->
                    </div>
                </td>
            </tr>
        </ng-template>

        <ng-template pTemplate="emptymessage">
            <tr>
                <td colspan="6">
                    <div class="empty-state">
                        <i class="pi pi-users"></i>
                        <span>No customers found</span>
                        <small>Add your first customer to get started</small>
                    </div>
                </td>
            </tr>
        </ng-template>

    </p-table>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerListComponent, { className: "CustomerListComponent", filePath: "src/app/features/customers/pages/customer-list/customer-list.component.ts", lineNumber: 39 });
})();
export {
  CustomerListComponent
};
//# sourceMappingURL=chunk-JODN4AM7.js.map
