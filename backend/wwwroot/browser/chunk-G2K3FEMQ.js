import{A as we,E as Ce,F as _e,G as ye,a as re,b as ae,c as p,e as le,f as se,h as de,i as ce,j as ue,k as me,m as ge,p as pe,w as he,x as fe,y as ve,z as be}from"./chunk-NABNWO2V.js";import{Ca as oe,Ea as S,Fa as ne,f as Y,g as M,n as Z,p as ee,pa as te,va as V,ya as ie,za as N}from"./chunk-WHM3SELA.js";import{$ as b,$a as Q,Aa as k,Ba as H,Da as O,Ea as R,F as D,Fa as z,G as L,H as q,J as P,L as u,La as w,Nb as K,Oa as d,Pa as c,Sa as g,Ta as n,Tb as B,Ua as a,Ub as X,Va as m,X as G,cb as v,da as x,eb as C,hb as j,ib as $,jb as T,kb as E,nb as _,ob as U,pa as r,pb as y,qb as l,rb as A,sb as W,xb as I,zb as J}from"./chunk-OU4WXZAT.js";import"./chunk-7CGTOI24.js";var Se=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`;var Ne=["handle"],Fe=["input"],xe=e=>({checked:e});function Ae(e,s){e&1&&Q(0)}function Be(e,s){if(e&1&&z(0,Ae,1,0,"ng-container",3),e&2){let i=C();g("ngTemplateOutlet",i.handleTemplate||i._handleTemplate)("ngTemplateOutletContext",J(2,xe,i.checked()))}}var Ve=`
    ${Se}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`,De={root:{position:"relative"}},Le={root:({instance:e})=>["p-toggleswitch p-component",{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.$disabled(),"p-invalid":e.invalid()}],input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},ke=(()=>{class e extends te{name="toggleswitch";style=Ve;classes=Le;inlineStyles=De;static \u0275fac=(()=>{let i;return function(t){return(i||(i=x(e)))(t||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var Te=new P("TOGGLESWITCH_INSTANCE"),qe={provide:re,useExisting:D(()=>F),multi:!0},F=(()=>{class e extends ve{componentName="ToggleSwitch";$pcToggleSwitch=u(Te,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=K();ariaLabelledBy;autofocus;onChange=new G;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=u(ke);templates;onHostClick(i){this.onClick(i)}onAfterContentInit(){this.templates.forEach(i=>{i.getType()==="handle"?this._handleTemplate=i.template:this._handleTemplate=i.template})}onClick(i){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:i,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(i,o){o(i),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.checked(),disabled:this.$disabled(),invalid:this.invalid()})}static \u0275fac=(()=>{let i;return function(t){return(i||(i=x(e)))(t||e)}})();static \u0275cmp=k({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(o,t,h){if(o&1&&j(h,Ne,4)(h,ie,4),o&2){let f;T(f=E())&&(t.handleTemplate=f.first),T(f=E())&&(t.templates=f)}},viewQuery:function(o,t){if(o&1&&$(Fe,5),o&2){let h;T(h=E())&&(t.input=h.first)}},hostVars:7,hostBindings:function(o,t){o&1&&v("click",function(f){return t.onHostClick(f)}),o&2&&(w("data-p-checked",t.checked())("data-p-disabled",t.$disabled())("data-p",t.dataP),U(t.sx("root")),y(t.cn(t.cx("root"),t.styleClass)))},inputs:{styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",X],inputId:"inputId",readonly:[2,"readonly","readonly",B],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",size:[1,"size"],ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",B]},outputs:{onChange:"onChange"},features:[I([qe,ke,{provide:Te,useExisting:e},{provide:oe,useExisting:e}]),O([S]),R],decls:5,vars:22,consts:[["input",""],["type","checkbox","role","switch",3,"focus","blur","checked","pAutoFocus","pBind"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,t){o&1&&(n(0,"input",1,0),v("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()}),a(),n(2,"div",2)(3,"div",2),d(4,Be,1,4,"ng-container"),a()()),o&2&&(y(t.cx("input")),g("checked",t.checked())("pAutoFocus",t.autofocus)("pBind",t.ptm("input")),w("id",t.inputId)("required",t.required()?"":void 0)("disabled",t.$disabled()?"":void 0)("aria-checked",t.checked())("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel)("name",t.name())("tabindex",t.tabindex),r(2),y(t.cx("slider")),g("pBind",t.ptm("slider")),w("data-p",t.dataP),r(),y(t.cx("handle")),g("pBind",t.ptm("handle")),w("data-p",t.dataP),r(),c(t.handleTemplate||t._handleTemplate?4:-1))},dependencies:[M,Y,pe,N,ne,S],encapsulation:2,changeDetection:0})}return e})(),Ee=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=H({type:e});static \u0275inj=q({imports:[F,N,N]})}return e})();function Ge(e,s){e&1&&l(0," Full Name is required. ")}function He(e,s){e&1&&l(0," Max 100 characters. ")}function Oe(e,s){if(e&1&&(n(0,"small",14),d(1,Ge,1,0),d(2,He,1,0),a()),e&2){let i,o,t=C();r(),c((i=t.form.get("fullName"))!=null&&i.hasError("required")?1:-1),r(),c((o=t.form.get("fullName"))!=null&&o.hasError("maxlength")?2:-1)}}function Re(e,s){e&1&&l(0," Email is required. ")}function ze(e,s){e&1&&l(0," Enter a valid email. ")}function Qe(e,s){if(e&1&&(n(0,"small",14),d(1,Re,1,0),d(2,ze,1,0),a()),e&2){let i,o,t=C();r(),c((i=t.form.get("email"))!=null&&i.hasError("required")?1:-1),r(),c((o=t.form.get("email"))!=null&&o.hasError("email")?2:-1)}}function je(e,s){e&1&&(n(0,"small",14),l(1,"Phone is required."),a())}function $e(e,s){e&1&&(n(0,"small",14),l(1,"Address is required."),a())}var Ie=class e{fb=u(me);customerService=u(ye);router=u(ee);route=u(Z);messageService=u(V);isEditMode=b(!1);isLoading=b(!1);isSaving=b(!1);customerId=b(null);form=this.fb.group({fullName:["",[p.required,p.maxLength(100)]],email:["",[p.required,p.email]],phone:["",[p.required,p.maxLength(20)]],address:["",[p.required,p.maxLength(250)]],isActive:[!0]});ngOnInit(){let s=this.route.snapshot.paramMap.get("id");s&&(this.isEditMode.set(!0),this.customerId.set(Number(s)),this.loadCustomer(Number(s)))}loadCustomer(s){this.isLoading.set(!1),this.customerService.getById(s).subscribe({next:i=>{this.form.patchValue({fullName:i.data.fullName,email:i.data.email,phone:i.data.phone,address:i.data.address,isActive:i.data.isActive}),this.isLoading.set(!1)},error:()=>{this.messageService.add({severity:"error",summary:"Error",detail:"Failed to load customer"}),this.isLoading.set(!1)}})}onSubmit(){this.form.markAllAsTouched(),!this.form.invalid&&(this.isSaving.set(!0),this.isEditMode()?this.customerService.update(this.customerId(),this.form.value).subscribe({next:()=>{this.messageService.add({severity:"success",summary:"Updated",detail:"Customer updated successfully"}),this.isSaving.set(!1),setTimeout(()=>this.router.navigate(["/customers"]),1500)},error:()=>{this.messageService.add({severity:"error",summary:"Error",detail:"Failed to update customer"}),this.isSaving.set(!1)}}):this.customerService.create(this.form.value).subscribe({next:()=>{this.messageService.add({severity:"success",summary:"Updated",detail:"Customer created successfully"}),this.isSaving.set(!1),setTimeout(()=>this.router.navigate(["/customers"]),1500)},error:()=>{this.messageService.add({severity:"error",summary:"Error",detail:"Failed to create customer"}),this.isSaving.set(!1)}}))}onCancel(){this.router.navigate(["/customers"])}isInvalid(s){let i=this.form.get(s);return!!(i?.invalid&&i?.touched)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=k({type:e,selectors:[["app-customer-form"]],features:[I([V])],decls:56,vars:19,consts:[[1,"page-header"],[1,"breadcrumb-trail"],[1,"pi","pi-angle-right"],[1,"page-title"],[1,"form-card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"form-grid-2"],[1,"form-field"],[1,"form-label"],[1,"required-star"],["pInputText","","formControlName","fullName","placeholder","Enter customer full name"],[1,"error-msg"],["pInputText","","formControlName","email","type","email","placeholder","Enter email address"],["pInputText","","formControlName","phone","placeholder","Enter phone number"],[1,"form-field","form-field-full"],["pInputText","","formControlName","address","placeholder","Enter full address"],[1,"toggle-row"],["formControlName","isActive"],[1,"toggle-label"],[1,"form-actions"],["label","Cancel","severity","secondary",3,"onClick","outlined"],["icon","pi pi-check","type","submit",3,"label","loading"]],template:function(i,o){if(i&1&&(m(0,"p-toast"),n(1,"div",0)(2,"div",1),l(3," Home "),m(4,"i",2),l(5," Happy Customers "),m(6,"i",2),n(7,"span"),l(8),a()(),n(9,"div",3),l(10),a()(),n(11,"div",4)(12,"div",5)(13,"span",6),l(14,"Customer Information"),a()(),n(15,"div",7)(16,"form",8),v("ngSubmit",function(){return o.onSubmit()}),n(17,"div",9)(18,"div",10)(19,"label",11),l(20," Customer Name "),n(21,"span",12),l(22,"*"),a()(),m(23,"input",13),d(24,Oe,3,2,"small",14),a(),n(25,"div",10)(26,"label",11),l(27," Email Address "),n(28,"span",12),l(29,"*"),a()(),m(30,"input",15),d(31,Qe,3,2,"small",14),a(),n(32,"div",10)(33,"label",11),l(34," Phone "),n(35,"span",12),l(36,"*"),a()(),m(37,"input",16),d(38,je,2,0,"small",14),a(),n(39,"div",17)(40,"label",11),l(41," Address "),n(42,"span",12),l(43,"*"),a()(),m(44,"input",18),d(45,$e,2,0,"small",14),a(),n(46,"div",10)(47,"label",11),l(48,"Status"),a(),n(49,"div",19),m(50,"p-toggleswitch",20),n(51,"span",21),l(52),a()()()(),n(53,"div",22)(54,"p-button",23),v("onClick",function(){return o.onCancel()}),a(),m(55,"p-button",24),a()()()()),i&2){let t;r(8),A(o.isEditMode()?"Edit Customer":"New Customer"),r(2),A(o.isEditMode()?"Edit Customer":"New Customer"),r(6),g("formGroup",o.form),r(7),_("input-error",o.isInvalid("fullName")),r(),c(o.isInvalid("fullName")?24:-1),r(6),_("input-error",o.isInvalid("email")),r(),c(o.isInvalid("email")?31:-1),r(6),_("input-error",o.isInvalid("phone")),r(),c(o.isInvalid("phone")?38:-1),r(6),_("input-error",o.isInvalid("address")),r(),c(o.isInvalid("address")?45:-1),r(7),W(" ",(t=o.form.get("isActive"))!=null&&t.value?"Active":"Inactive"," "),r(2),g("outlined",!0),r(),g("label",o.isEditMode()?"Update Customer":"Create Customer")("loading",o.isSaving())}},dependencies:[M,ge,de,ae,le,se,ue,ce,we,be,fe,he,_e,Ce,Ee,F],encapsulation:2})};export{Ie as CustomerFormComponent};
