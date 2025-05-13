"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("@formio/js"),k=o=>`
<div class="formio builder ui grid formbuilder">
  <div class="four wide column formcomponents">
    ${o.sidebar}
  </div>
  <div class="twelve wide column formarea" ref="form">
    ${o.form}
  </div>
</div>
`,j={form:k},_=o=>{const t=o.iconClass,e=o.html;return`<div class="builder-component" ref="dragComponent">
    <div class="component-btn-group" data-noattach="true">
      <div class="ui button mini icon primary component-settings-button-edit" ref="editComponent">
        <i class="${t("cog")}"></i>
      </div>
      <div class="ui button mini icon component-settings-button-copy" ref="copyComponent">
        <i class="${t("copy")}"></i>
      </div>
      <div class="ui button mini icon component-settings-button-paste" ref="pasteComponent">
        <i class="${t("save")}"></i>
      </div>
      <div class="ui button mini icon component-settings-button-edit-json" ref="editJson">
        <i class="${t("wrench")}"></i>
      </div>
      <div class="ui button mini icon component-settings-button-move" ref="moveComponent">
        <i class="${t("move")}"></i>
      </div>
      <div class="ui button mini icon secondary component-settings-button-remove" ref="removeComponent">
        <i class="${t("remove")}"></i>
      </div>
    </div>
    ${e}
  </div>`},O={form:_},S=o=>`<div class="builder-components drag-container ${o.type}" ref="${o.key}-container">
  ${o.html}
</div>
`,B={form:S},I=o=>`
  <div class="formio-dialog formio-dialog-theme-default">
    <div class="formio-dialog-content">
      <div class="formio-dialog-content-header">
        <h3 class="lead">${o.t(o.componentInfo.title)} ${o.t("Component")}</h3>
        ${o.componentInfo.documentation?`
        <a href="${o.componentInfo.documentation}" target="_blank">
          <i class="${o.iconClass("new-window")}"> ${o.t("Help")}</i>
        </a>
        `:""}
      </div>
      <div class="formio-dialog-content-body">
        <div class="formio-component-edit-container">
          <div class="formio-component-edit-content">
            <div class="formio-component-edit-content-header">
              <div class="formio-component-edit-content-header-actions">
                <button class="ui button primary" style="margin-right: 10px;" ref="saveButton">${o.t("Save")}</button>
                <button class="ui button default" style="margin-right: 10px;" ref="cancelButton">${o.t("Cancel")}</button>
                <button class="ui button negative" ref="removeButton">${o.t("Remove")}</button>
              </div>
            </div>
            <div class="formio-component-edit-content-body">
              <div class="formio-component-edit-content-body-preview">
                <div class="formio-component-edit-content-body-preview-header">
                  ${o.t("Preview")}
                </div>
                <div class="formio-component-edit-content-body-preview-content">
                  <div class="formio-component-edit-content-body-preview-content-help">
                    ${o.componentInfo.help?`
                    <div class="formio-component-edit-content-body-preview-content-help-content">
                      ${o.componentInfo.help}
                    </div>
                    `:""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="formio-dialog-content-footer">
        <div class="formio-dialog-content-footer-actions">
          <button class="ui button primary" style="margin-right: 10px;" ref="saveButton">${o.t("Save")}</button>
          <button class="ui button default" style="margin-right: 10px;" ref="cancelButton">${o.t("Cancel")}</button>
          <button class="ui button negative" ref="removeButton">${o.t("Remove")}</button>
        </div>
      </div>
    </div>
  </div>
`,P={form:I},z=o=>`<div
  class="ui info message no-drag"
  style="text-align:center; margin-bottom: 5px;"
  role="alert"
  data-noattach="true"
  data-position="${o.position}"
>
  Drag and Drop a form component
</div>
`,q={form:z},R=o=>`
  <div class="formio-builder-sidebar">
    ${o.groups.map(t=>`${t}`).join("")}
  </div>
`,A={form:R},D=o=>{const t=o.group,e=o.t,n=o.iconClass,i=o.subgroups,s=t.componentOrder.map(r=>{const a=t.components[r];return`<span
      data-group="${o.groupKey}"
      data-key="${a.key}"
      data-type="${a.schema.type}"
      class="ui button mini primary fluid formcomponent drag-copy"
    >
      ${a.icon?`<i class="${n(a.icon)}" style="margin-right: 5px;"></i>`:""}
      ${e(a.title)}
    </span>`}).join("");return`<div class="ui segment secondary form-builder-panel" style="padding: 0" ref="group-panel-${o.groupKey}">
    <div class="form-builder-group-header">
      <h5 class="panel-title">
        <button
          class="ui button basic fluid builder-group-button"
          type="button"
          data-toggle="collapse"
          data-target="#group-${o.groupKey}"
          data-parent="${o.groupId}"
          ref="sidebar-anchor"
        >
          ${e(t.title)}
        </button>
      </h5>
    </div>
  </div>
  <div class="ui segment" style="padding: 0">
    <div
      class="panel-collapse collapse ${t.default?" in":""}"
      data-parent="#${o.groupId}"
      data-default="${t.default}"
      id="group-${o.groupKey}"
      ref="sidebar-group"
    >
      <div id="group-container-${o.groupKey}" class="card-body panel-body no-drop" ref="sidebar-container">
        ${s}
        ${i.join("")}
      </div>
    </div>
  </div>`},K={form:D},H=o=>{const t=o.pages,e=o.self,n=o.t,i=o.iconClass,s=o.sidebar,r=o.form,a=t.map((d,l)=>`
        <div title="${d.title}" class="${l===e.page?"active section":"section"} wizard-page-label" ref="gotoPage">${d.title}</div>
        <div class="divider">/</div>
      `).join("");return`<div class="formio builder ui grid formbuilder">
    <div class="four wide column formcomponents">
      ${s}
    </div>
    <div class="twelve wide column formarea">
      <div class="ui breadcrumb" style="margin-bottom: 0.5em">
        ${a}
        <div title="${n("Create Page")}" class="section wizard-page-label" ref="addPage"><i class="${i("plus")}"></i> ${n("Page")}</div>
      </div>
      <div ref="form">
        ${r}
      </div>
    </div>
  </div>`},M={form:H},F=o=>{const t=o.input,e=o.component,n=o.transform,i=o.iconClass,s=Object.entries(t.attr||{}).map(([r,a])=>`${r}="${a}"`).join(" ");return`<${t.type}
    ref="button"
    class="ui button ${n("theme",e.theme)} ${e.customClass||""}"
    ${s}
  >
  ${e.leftIcon?`<i class="${e.leftIcon}"></i>&nbsp;`:""}
  ${t.content||""}
  ${e.tooltip?`<i ref="tooltip" class="${i("question-sign")}" text-muted" data-tooltip="${e.tooltip}"></i>`:""}
  ${e.rightIcon?`&nbsp;<i class="${e.rightIcon}"></i>`:""}
  </${t.type}>
  <div ref="buttonMessageContainer">
    <span class="help-block" ref="buttonMessage"></span>
  </div>`},L=o=>"",V={form:F,html:L},E=o=>{const t=o.input,e=o.component,n=o.self,i=o.iconClass,s=Object.entries(t.attr||{}).map(([r,a])=>`${r}="${a}"`).join(" ");return`<div class="ui checkbox">
    <${t.type}
      ref="input"
      id="${o.id}"
      ${s}
      ${o.checked?"checked=true":""}
    >
    </${t.type}>
    <label class="${t.labelClass||""}" for="${o.id}">
      ${t.content||""}
      ${n.labelIsHidden()?"":`<span>${t.label||""}</span>`}
    </label>
    ${e.tooltip?`<i ref="tooltip" class="${i("question-sign")} text-muted" data-tooltip="${e.tooltip}"></i>`:""}
  </div>`},T=o=>"",N={form:E,html:T},Y=o=>`
  <div class="formio-columns">
    ${o.component.columns.map((t,e)=>`
      <div class="${o.transform("columns",t.width)} wide column" ref="${o.columnKey}">
        ${o.columnComponents[e]}
      </div>
    `).join("")}
  </div>
`,G={form:Y},J=o=>`<div id="${o.id}" class="field ${o.classes}"${o.styles?` style="${o.styles}"`:""} ref="component">
    ${o.visible?`
    ${o.children}
    <div ref="messageContainer"></div>
    `:""}
  </div>`,W={form:J},Q={"has-error":"error","is-invalid":"error","formio-tab-panel-active":"active","formio-tab-link-active":"active","formio-tab-link-container-active":"active"},U=o=>{const t=o.component,e=o.columns,n=o.rows,i=o.t,s=o.iconClass,r=o.datagridKey,a=!!o.hasAddButton,d=!!o.hasBottomSubmit,l=!!o.hasHeader,v=!!o.hasExtraColumn,f=o.addButtonLocation,b=o.addButton,g=Number(o.numColumns),h=t.layoutFixed?'style="table-layout: fixed;"':"",y=l?`
    <thead>
      <tr>
        ${t.reorder?"<th></th>":""}
        ${e.map(c=>`
          <th class="${c.validate&&c.validate.required?"field-required":""}">
            ${c.hideLabel?"":i(c.label||c.title||"")}
            ${c.tooltip?` <i ref="tooltip" data-title="${c.tooltip}" class="${s("question-sign")} text-muted" data-tooltip="${c.tooltip}"></i>`:""}
          </th>
        `).join("")}
        ${v?`<th>
          ${a&&f==="header"?b:""}
        </th>`:""}
      </tr>
    </thead>
  `:"",w=n.map(c=>`
    <tr>${c}</tr>
  `).join(""),C=a&&d?`
    <tfoot>
      <tr>
        <td colspan="${g+1}">
          <button class="ui button primary" ref="${r}-addRow">
            <i class="${s("plus")}"></i> ${i(t.addAnother||"Add Another")}
          </button>
        </td>
      </tr>
    </tfoot>
  `:"";return`<table class="ui table datagrid-table
    ${t.striped?"striped":""}
    ${t.bordered?"celled":""}
    ${t.hover?"selectable":""}
    ${t.condensed?"compact":"padded"}
    " ${h}>
    ${y}
    <tbody ref="${r}-tbody">
      ${w}
    </tbody>
    ${C}
  </table>`},X=o=>"",Z={form:U,html:X},x=o=>{const t=o.component,e=o.t;return`<div class="ui grid">
    ${o.dayFirst&&o.showDay?`
      <div class="four wide column">
        <label for="${t.key}-day" class="">${e("Day")}</label>
        ${o.day}
      </div>
    `:""}
    ${o.showMonth?`
      <div class="five wide column">
        <label for="${t.key}-month" class="">${e("Month")}</label>
        ${o.month}
      </div>
    `:""}
    ${!o.dayFirst&&o.showDay?`
      <div class="four wide column">
        <label for="${t.key}-day" class="">${e("Day")}</label>
        ${o.day}
      </div>
    `:""}
    ${o.showYear?`
      <div class="seven wide column">
        <label for="${t.key}-year" class="">${e("Year")}</label>
        ${o.year}
      </div>
    `:""}
  </div>`},oo={form:x},to=o=>`
  <div class="formio-editgrid">
    <div class="formio-editgrid-header">
      ${o.header}
    </div>
    <div class="formio-editgrid-body">
      ${o.rows.map((t,e)=>`
        <div class="formio-editgrid-row">
          <div class="formio-editgrid-row-header">
            <div class="formio-editgrid-row-title">
              ${o.t("Row")} ${e+1}
            </div>
            <div class="formio-editgrid-row-actions">
              ${o.readOnly?"":`
                <button class="ui button" onclick="event.preventDefault(); ${o.ref.removeRow(e)}">
                  <i class="${o.iconClass("remove")}"></i>
                </button>
              `}
            </div>
          </div>
          <div class="formio-editgrid-row-content">
            ${o.preview}
          </div>
          ${o.errors[e]?`
            <div class="formio-editgrid-row-error">
              ${o.errors[e]}
            </div>
          `:""}
        </div>
      `).join("")}
    </div>
    <div class="formio-editgrid-footer">
      ${o.readOnly?"":`
        <button class="ui button primary" onclick="event.preventDefault(); ${o.ref.addRow()}">
          <i class="${o.iconClass("plus")}"></i> ${o.addAnother}
        </button>
      `}
      ${o.footer}
    </div>
  </div>
`,eo=o=>"",no={form:to,html:eo},so=o=>"",io=o=>"",ro={form:so,align:io},ao=o=>"",lo={form:ao},co=o=>"",uo=o=>`
  <div class="ui file input">
    <input
      type="file"
      name="${o.input.name}"
      value="${o.input.value}"
      ref="${o.input.ref}"
      ${o.component.multiple?"multiple":""}
      ${o.component.filePattern?`accept="${o.component.filePattern}"`:""}
      ${o.input.attr?Object.entries(o.input.attr).map(([t,e])=>`${t}="${e}"`).join(" "):""}
    />
  </div>
`,mo={form:co,html:uo},po=o=>{const t=o.icon,e=o.iconClass;return`<i class="${e(t)}"></i>`},vo={form:po},fo=(o,t,e)=>{const n={"plus-squre-o":"plus square outline","minus-squre-o":"minus square outline","question-sign":"question circle","remove-circle":"trash alternate outline","new-window":"external alternate","files-o":"file outline",move:"arrows alternate",link:"linkify"};return Object.prototype.hasOwnProperty.call(n,t)&&(t=n[t]),t=t||"",t=t.replace(/-/g," "),t=t.replace(/ o$/," outline"),e?`icon ${t} loading`:`icon ${t}`},$o=o=>"",bo=o=>"",go={form:$o,html:bo},ho=o=>"",yo={form:ho};function wo(o){return`<div class="formio-loader">
    <div class="loader-wrapper">
      <div class="ui active centered inline loader"></div>
    </div>
  </div>
  `}const Co={form:wo};function ko(o){return""}const jo={form:ko},_o=o=>`<div class="ui pointing red basic label ${o.level}">
  ${o.message}
</div>
`,Oo={form:_o},So=o=>"",Bo={form:So},Io=o=>"",Po={form:Io},zo=o=>"",qo={form:zo};function Ro(o){const{component:t,input:e}=o,{key:n,label:i,values:s}=t,{name:r,value:a,ref:d}=e;return`<div class="form-group">
    <label for="${n}">${i}</label>
    <div class="radio-group">
      ${s.map(l=>`
        <div class="radio">
          <input
            type="radio"
            id="${n}-${l.value}"
            name="${r}"
            value="${l.value}"
            ref="${d}"
            ${a===l.value?"checked":""}
          />
          <label for="${n}-${l.value}">${l.label}</label>
        </div>
      `).join("")}
    </div>
  </div>`}function Ao(o){const{component:t,input:e}=o,{values:n}=t,{value:i}=e;return`<div class="radio-display">
    ${n.filter(s=>{if(i==null)return!1;if(i===s.value)return!0;if(typeof i=="object"){const r=i;return Object.prototype.hasOwnProperty.call(r,s.value)&&r[s.value]}return!1}).map(s=>s.label).join(", ")}
  </div>`}const Do={form:Ro,html:Ao};function Ko(o){const t=o.t,e=o.iconClass,n=o.component;return`<table class="ui table celled">
    <tbody>
      <tr>
        <td>
          ${o.element}
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button class="ui button primary" ref="addResource">
            <i class="${e("plus")}"></i>
            ${t(n.addResourceLabel||"Add Resource")}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  `}const Ho={form:Ko};function Mo(o){const{input:t,instance:e,component:n,options:i}=o,{multiple:s,attr:r,ref:a}=t,{id:d}=e,{key:l}=n;return`<select
    ref="${a||"selectContainer"}"
    class="ui search dropdown"
    ${s?"multiple":""}
    ${Object.entries(r||{}).map(([v,f])=>`${v}="${f}"`).join(" ")}
    ${r!=null&&r.id?"":`id="${d}-${l}"`}
  >${i}</select>
  <input type="text"
         class="formio-select-autocomplete-input"
         ref="autocompleteInput"
         ${r!=null&&r.autocomplete?`autocomplete="${r.autocomplete}"`:""}
         tabindex="-1"
  />`}function Fo(o){const{component:t,options:e}=o,{key:n}=t;return`<div class="select-display" id="${n}">
    ${e||"-"}
  </div>`}const Lo={form:Mo,html:Fo};function Vo(o){const{selected:t,option:e,attrs:n}=o,{value:i,label:s}=e;return`<option ${t?'selected="selected"':""}
    value='${i}'
    ${Object.entries(n||{}).map(([r,a])=>`${r}="${a}"`).join(" ")}>
    ${s}
  </option>`}function Eo(o){const{selected:t,option:e}=o,{label:n}=e;return t?n:""}const To={form:Vo,html:Eo},No={form:o=>{const{component:t,input:e,element:n}=o,i=(n==null?void 0:n.width)||300,s=(n==null?void 0:n.height)||200,r=(n==null?void 0:n.backgroundColor)||"#ffffff";return`
      <div class="signature-pad-container">
        <label for="${e.ref}">${t.label}</label>
        <div class="signature-pad" 
             style="width: ${i}px; height: ${s}px; background-color: ${r};">
          <canvas id="${e.ref}" 
                  width="${i}" 
                  height="${s}"
                  style="border: 1px solid #ccc;"></canvas>
        </div>
        <input type="hidden" 
               name="${e.name}" 
               value="${e.value}" 
               ref="${e.ref}" />
        <button type="button" class="btn btn-secondary clear-signature">Clear</button>
      </div>
    `}};function Yo(o){const{component:t,input:e}=o,{key:n,label:i}=t,{value:s}=e;return`<div class="survey-form">
    <label for="${n}">${i}</label>
    <div class="survey-questions">
      ${s||"-"}
    </div>
  </div>`}function Go(o){const{component:t,input:e}=o,{key:n,label:i}=t,{value:s}=e;return`<div class="survey-display" id="${n}">
    <label>${i}</label>
    <div class="survey-answers">
      ${s||"-"}
    </div>
  </div>`}const Jo={form:Yo,html:Go};function Wo(o){const{component:t,input:e}=o,{key:n,label:i}=t,{value:s}=e;return`<div class="tab-form">
    <label for="${n}">${i}</label>
    <div class="tab-content">
      ${s||"-"}
    </div>
  </div>`}function Qo(o){const{component:t,input:e}=o,{key:n,label:i}=t,{value:s}=e;return`<div class="tab-flat" id="${n}">
    <label>${i}</label>
    <div class="tab-content">
      ${s||"-"}
    </div>
  </div>`}const Uo={form:Wo,flat:Qo};function Xo(o){const{component:t,input:e}=o,{key:n,label:i}=t,{value:s}=e;return`<div class="table-form">
    <label for="${n}">${i}</label>
    <div class="table-content">
      ${s||"-"}
    </div>
  </div>`}const Zo={form:Xo};function xo(o){const{view:t,content:e,childNodes:n}=o;return`<div class="tree-form">
    <div class="tree-content">
      ${t}
      ${e?`<div class="tree-node-content">${e}</div>`:""}
      ${n&&n.length?`<div class="tree-node-children">${n.join("")}</div>`:""}
    </div>
  </div>`}const ot={form:xo},tt=o=>"",et=o=>"",nt={treeView:tt,treeEdit:et},st=o=>"",it={form:st},rt=o=>"",at={form:rt};function lt(o){const{component:t,input:e}=o,{key:n,label:i}=t,{value:s}=e;return`<div class="wizard-form">
    <label for="${n}">${i}</label>
    <div class="wizard-content">
      ${s||"-"}
    </div>
  </div>`}const ct={form:lt};function dt(o){const{component:t,input:e}=o,{key:n,label:i}=t,{value:s}=e;return`<div class="wizard-header-form">
    <label for="${n}">${i}</label>
    <div class="wizard-header-content">
      ${s||"-"}
    </div>
  </div>`}const ut={form:dt};function mt(o){const{component:t,input:e}=o,{key:n,label:i}=t,{value:s}=e;return`<div class="wizard-header-classic-form">
    <label for="${n}">${i}</label>
    <div class="wizard-header-classic-content">
      ${s||"-"}
    </div>
  </div>`}const pt={form:mt},vt=o=>"",ft={form:vt},$t=o=>"",bt={form:$t},gt=o=>{let t="";for(const e in o.attrs)e==="class"?t+=`${e}="ui message ${o.attrs[e]}" `:t+=`${e}="${o.attrs[e]}" `;return`<div ${t.trim()}>${o.message}</div>`},ht={form:gt},yt=o=>"",wt={form:yt},$={1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen"},Ct={transform(o,t){if(!t)return t;switch(o){case"columns":return Object.prototype.hasOwnProperty.call($,t.toString())?$[t.toString()]:t.toString();case"class":return Object.prototype.hasOwnProperty.call(this.cssClasses,t.toString())?this.cssClasses[t.toString()]:t.toString()}return t.toString()},defaultIconset:"icon",iconClass:fo,cssClasses:Q,builder:j,builderComponent:O,builderComponents:B,builderEditForm:P,builderPlaceholder:q,builderSidebar:A,builderSidebarGroup:K,builderWizard:M,button:V,checkbox:N,columns:G,component:W,datagrid:Z,day:oo,editgrid:no,field:ro,fieldset:lo,file:mo,icon:vo,input:go,label:yo,loader:Co,loading:jo,message:Oo,multiValueRow:Bo,multiValueTable:Po,panel:qo,radio:Do,resourceAdd:Ho,select:Lo,selectOption:To,signature:No,survey:Jo,tab:Uo,tree:ot,...nt,table:Zo,webform:it,well:at,wizard:ct,wizardHeader:ut,wizardHeaderClassic:pt,wizardHeaderVertical:ft,wizardNav:bt,alert:ht,errorsList:wt};class p extends u.Components.components.textfield{static schema(){return u.Components.components.textfield.schema()}static get builderInfo(){return{title:"Custom Text Field",group:"basic",icon:"fa fa-font",weight:0,documentation:"https://formio.github.io/formio.js/app/examples/customcomponents.html",schema:p.schema()}}render(){return super.render()}}const kt=()=>{u.Components.addComponent("customtextfield",p)},m={framework:"goforms",templates:Ct};typeof module<"u"&&module.exports&&(module.exports=m,module.exports.default=m);Object.defineProperty(exports,"Components",{enumerable:!0,get:()=>u.Components});exports.CustomTextField=p;exports.default=m;exports.goforms=m;exports.registerCustomComponents=kt;
//# sourceMappingURL=index.js.map
