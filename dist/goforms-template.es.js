const form$1 = (ctx) => `
<div class="formio builder ui grid formbuilder">
  <div class="four wide column formcomponents">
    ${ctx.sidebar}
  </div>
  <div class="twelve wide column formarea" ref="form">
    ${ctx.form}
  </div>
</div>
`;
const builder = { form: form$1 };
const value$G = (ctx) => {
  const iconClass2 = ctx.iconClass;
  const html2 = ctx.html;
  return `<div class="builder-component" ref="dragComponent">
    <div class="component-btn-group" data-noattach="true">
      <div class="ui button mini icon primary component-settings-button-edit" ref="editComponent">
        <i class="${iconClass2("cog")}"></i>
      </div>
      <div class="ui button mini icon component-settings-button-copy" ref="copyComponent">
        <i class="${iconClass2("copy")}"></i>
      </div>
      <div class="ui button mini icon component-settings-button-paste" ref="pasteComponent">
        <i class="${iconClass2("save")}"></i>
      </div>
      <div class="ui button mini icon component-settings-button-edit-json" ref="editJson">
        <i class="${iconClass2("wrench")}"></i>
      </div>
      <div class="ui button mini icon component-settings-button-move" ref="moveComponent">
        <i class="${iconClass2("move")}"></i>
      </div>
      <div class="ui button mini icon secondary component-settings-button-remove" ref="removeComponent">
        <i class="${iconClass2("remove")}"></i>
      </div>
    </div>
    ${html2}
  </div>`;
};
const builderComponent = { form: value$G };
const value$F = (ctx) => `<div class="builder-components drag-container ${ctx.type}" ref="${ctx.key}-container">
  ${ctx.html}
</div>
`;
const builderComponents = { form: value$F };
const value$E = (ctx) => {
  const colWidth = ctx.preview ? "eight" : "sixteen";
  return `<div class="ui grid">
    <div class="eight wide column">
      <h3 class="lead">${ctx.t(ctx.componentInfo.title)} ${ctx.t("Component")}</h3>
    </div>
    <div class="eight wide column">
      <div class="right floated" style="margin-right: 20px; margin-top: 10px">
        <a href="${ctx.componentInfo.documentation}" target="_blank">
          <i class="${ctx.iconClass("new-window")}"> ${ctx.t("Help")}</i>
        </a>
      </div>
    </div>
  </div>
  <div class="ui grid">
    <div class="${colWidth} wide column">
      <div ref="editForm">
        ${ctx.editForm}
      </div>
      ${!ctx.preview ? `
      <div style="margin-top: 10px;">
        <button class="ui button primary" style="margin-right: 10px;" ref="saveButton">${ctx.t("Save")}</button>
        <button class="ui button default" style="margin-right: 10px;" ref="cancelButton">${ctx.t("Cancel")}</button>
        <button class="ui button negative" ref="removeButton">${ctx.t("Remove")}</button>
      </div>
      ` : ""}
    </div>
    ${ctx.preview ? `
    <div class="eight wide column">
      <div class="ui top attached block header">
        ${ctx.t("Preview")}
      </div>
      <div class="ui bottom attached segment" ref="preview">
        ${ctx.preview}
      </div>
      ${ctx.componentInfo.help ? `
      <div class="ui secondary segment formio-settings-help">
        ${ctx.componentInfo.help}
      </div>
      ` : ""}
      <div style="margin-top: 10px;">
        <button class="ui button primary" style="margin-right: 10px;" ref="saveButton">${ctx.t("Save")}</button>
        <button class="ui button default" style="margin-right: 10px;" ref="cancelButton">${ctx.t("Cancel")}</button>
        <button class="ui button negative" ref="removeButton">${ctx.t("Remove")}</button>
      </div>
    </div>
    ` : ""}
  </div>`;
};
const builderEditForm = { form: value$E };
const value$D = (ctx) => `<div
  class="ui info message no-drag"
  style="text-align:center; margin-bottom: 5px;"
  role="alert"
  data-noattach="true"
  data-position="${ctx.position}"
>
  Drag and Drop a form component
</div>
`;
const builderPlaceholder = { form: value$D };
const value$C = (ctx) => `<div id="builder-sidebar-${ctx.id}" class="ui segments" ref="sidebar">
  ${ctx.groups.map((group) => `${group}`).join("")}
</div>`;
const builderSidebar = { form: value$C };
const value$B = (ctx) => {
  const group = ctx.group;
  const t = ctx.t;
  const iconClass2 = ctx.iconClass;
  const subgroups = ctx.subgroups;
  const components = group.componentOrder.map((componentKey) => {
    const component2 = group.components[componentKey];
    return `<span
      data-group="${ctx.groupKey}"
      data-key="${component2.key}"
      data-type="${component2.schema.type}"
      class="ui button mini primary fluid formcomponent drag-copy"
    >
      ${component2.icon ? `<i class="${iconClass2(component2.icon)}" style="margin-right: 5px;"></i>` : ""}
      ${t(component2.title)}
    </span>`;
  }).join("");
  return `<div class="ui segment secondary form-builder-panel" style="padding: 0" ref="group-panel-${ctx.groupKey}">
    <div class="form-builder-group-header">
      <h5 class="panel-title">
        <button
          class="ui button basic fluid builder-group-button"
          type="button"
          data-toggle="collapse"
          data-target="#group-${ctx.groupKey}"
          data-parent="${ctx.groupId}"
          ref="sidebar-anchor"
        >
          ${t(group.title)}
        </button>
      </h5>
    </div>
  </div>
  <div class="ui segment" style="padding: 0">
    <div
      class="panel-collapse collapse ${group.default ? " in" : ""}"
      data-parent="#${ctx.groupId}"
      data-default="${group.default}"
      id="group-${ctx.groupKey}"
      ref="sidebar-group"
    >
      <div id="group-container-${ctx.groupKey}" class="card-body panel-body no-drop" ref="sidebar-container">
        ${components}
        ${subgroups.join("")}
      </div>
    </div>
  </div>`;
};
const builderSidebarGroup = { form: value$B };
const value$A = (ctx) => {
  const pages = ctx.pages;
  const self = ctx.self;
  const t = ctx.t;
  const iconClass2 = ctx.iconClass;
  const sidebar = ctx.sidebar;
  const form2 = ctx.form;
  const pageBreadcrumbs = pages.map(
    (page, pageIndex) => `
        <div title="${page.title}" class="${pageIndex === self.page ? "active section" : "section"} wizard-page-label" ref="gotoPage">${page.title}</div>
        <div class="divider">/</div>
      `
  ).join("");
  return `<div class="formio builder ui grid formbuilder">
    <div class="four wide column formcomponents">
      ${sidebar}
    </div>
    <div class="twelve wide column formarea">
      <div class="ui breadcrumb" style="margin-bottom: 0.5em">
        ${pageBreadcrumbs}
        <div title="${t("Create Page")}" class="section wizard-page-label" ref="addPage"><i class="${iconClass2("plus")}"></i> ${t("Page")}</div>
      </div>
      <div ref="form">
        ${form2}
      </div>
    </div>
  </div>`;
};
const builderWizard = { form: value$A };
const value$z = (ctx) => {
  const input2 = ctx.input;
  const component2 = ctx.component;
  const transform = ctx.transform;
  const iconClass2 = ctx.iconClass;
  const attrs = Object.entries(input2.attr || {}).map(([attr, value2]) => `${attr}="${value2}"`).join(" ");
  return `<${input2.type}
    ref="button"
    class="ui button ${transform("theme", component2.theme)} ${component2.customClass || ""}"
    ${attrs}
  >
  ${component2.leftIcon ? `<i class="${component2.leftIcon}"></i>&nbsp;` : ""}
  ${input2.content || ""}
  ${component2.tooltip ? `<i ref="tooltip" class="${iconClass2("question-sign")}" text-muted" data-tooltip="${component2.tooltip}"></i>` : ""}
  ${component2.rightIcon ? `&nbsp;<i class="${component2.rightIcon}"></i>` : ""}
  </${input2.type}>
  <div ref="buttonMessageContainer">
    <span class="help-block" ref="buttonMessage"></span>
  </div>`;
};
const html$9 = (_ctx) => {
  return "";
};
const button = { form: value$z, html: html$9 };
const value$y = (ctx) => {
  const input2 = ctx.input;
  const component2 = ctx.component;
  const self = ctx.self;
  const iconClass2 = ctx.iconClass;
  const attrs = Object.entries(input2.attr || {}).map(([attr, value2]) => `${attr}="${value2}"`).join(" ");
  return `<div class="ui checkbox">
    <${input2.type}
      ref="input"
      id="${ctx.id}"
      ${attrs}
      ${ctx.checked ? "checked=true" : ""}
    >
    </${input2.type}>
    <label class="${input2.labelClass || ""}" for="${ctx.id}">
      ${input2.content || ""}
      ${!self.labelIsHidden() ? `<span>${input2.label || ""}</span>` : ""}
    </label>
    ${component2.tooltip ? `<i ref="tooltip" class="${iconClass2("question-sign")} text-muted" data-tooltip="${component2.tooltip}"></i>` : ""}
  </div>`;
};
const html$8 = (_ctx) => {
  return "";
};
const checkbox = { form: value$y, html: html$8 };
const value$x = (ctx) => `<div class="ui grid" style="width: 100%">
  ${ctx.component.columns.map(
  (column, index) => `
    <div class="${ctx.transform("columns", column.width)} wide column" ref="${ctx.columnKey}">
      ${ctx.columnComponents[index]}
    </div>
  `
).join("")}
</div>`;
const columns = { form: value$x };
const value$w = (ctx) => {
  return `<div id="${ctx.id}" class="field ${ctx.classes}"${ctx.styles ? ` style="${ctx.styles}"` : ""} ref="component">
    ${ctx.visible ? `
    ${ctx.children}
    <div ref="messageContainer"></div>
    ` : ""}
  </div>`;
};
const component = { form: value$w };
const cssClasses = {
  "has-error": "error",
  "is-invalid": "error",
  "formio-tab-panel-active": "active",
  "formio-tab-link-active": "active",
  "formio-tab-link-container-active": "active"
};
const value$v = (ctx) => {
  const component2 = ctx.component;
  const columns2 = ctx.columns;
  const rows = ctx.rows;
  const t = ctx.t;
  const iconClass2 = ctx.iconClass;
  const datagridKey = ctx.datagridKey;
  const hasAddButton = !!ctx.hasAddButton;
  const hasBottomSubmit = !!ctx.hasBottomSubmit;
  const hasHeader = !!ctx.hasHeader;
  const hasExtraColumn = !!ctx.hasExtraColumn;
  const addButtonLocation = ctx.addButtonLocation;
  const addButton = ctx.addButton;
  const numColumns = Number(ctx.numColumns);
  const tableStyle = component2.layoutFixed ? 'style="table-layout: fixed;"' : "";
  const header = hasHeader ? `
    <thead>
      <tr>
        ${component2.reorder ? "<th></th>" : ""}
        ${columns2.map(
    (col) => `
          <th class="${col.validate && col.validate.required ? "field-required" : ""}">
            ${col.hideLabel ? "" : t(col.label || col.title || "")}
            ${col.tooltip ? ` <i ref="tooltip" data-title="${col.tooltip}" class="${iconClass2("question-sign")} text-muted" data-tooltip="${col.tooltip}"></i>` : ""}
          </th>
        `
  ).join("")}
        ${hasExtraColumn ? `<th>
          ${hasAddButton && addButtonLocation === "header" ? addButton : ""}
        </th>` : ""}
      </tr>
    </thead>
  ` : "";
  const body = rows.map(
    (row) => `
    <tr>${row}</tr>
  `
  ).join("");
  const footer = hasAddButton && hasBottomSubmit ? `
    <tfoot>
      <tr>
        <td colspan="${numColumns + 1}">
          <button class="ui button primary" ref="${datagridKey}-addRow">
            <i class="${iconClass2("plus")}"></i> ${t(component2.addAnother || "Add Another")}
          </button>
        </td>
      </tr>
    </tfoot>
  ` : "";
  return `<table class="ui table datagrid-table
    ${component2.striped ? "striped" : ""}
    ${component2.bordered ? "celled" : ""}
    ${component2.hover ? "selectable" : ""}
    ${component2.condensed ? "compact" : "padded"}
    " ${tableStyle}>
    ${header}
    <tbody ref="${datagridKey}-tbody">
      ${body}
    </tbody>
    ${footer}
  </table>`;
};
const html$7 = (_ctx) => {
  return "";
};
const datagrid = { form: value$v, html: html$7 };
const value$u = (ctx) => {
  const component2 = ctx.component;
  const t = ctx.t;
  return `<div class="ui grid">
    ${ctx.dayFirst && ctx.showDay ? `
      <div class="four wide column">
        <label for="${component2.key}-day" class="">${t("Day")}</label>
        ${ctx.day}
      </div>
    ` : ""}
    ${ctx.showMonth ? `
      <div class="five wide column">
        <label for="${component2.key}-month" class="">${t("Month")}</label>
        ${ctx.month}
      </div>
    ` : ""}
    ${!ctx.dayFirst && ctx.showDay ? `
      <div class="four wide column">
        <label for="${component2.key}-day" class="">${t("Day")}</label>
        ${ctx.day}
      </div>
    ` : ""}
    ${ctx.showYear ? `
      <div class="seven wide column">
        <label for="${component2.key}-year" class="">${t("Year")}</label>
        ${ctx.year}
      </div>
    ` : ""}
  </div>`;
};
const day = { form: value$u };
const value$t = (ctx) => {
  const t = ctx.t;
  const ref = ctx.ref;
  const openRows = ctx.openRows;
  const readOnly = !!ctx.readOnly;
  const component2 = ctx.component;
  const rows = ctx.rows;
  const header = ctx.header;
  const preview = ctx.preview;
  const iconClass2 = ctx.iconClass;
  const addAnother = ctx.addAnother;
  const rowsHtml = rows.map(
    (row, rowIndex) => `
    <div class="item" ref="${ref.row}">
      ${row}
      ${openRows[rowIndex] && !readOnly ? `
        <div class="editgrid-actions">
          <button class="ui button primary" ref="${ref.saveRow}">${t(component2.saveRow || "Save")}</button>
          ${component2.removeRow ? `<button class="ui button secondary" ref="${ref.cancelRow}">${t(component2.removeRow || "Cancel")}</button>` : ""}
        </div>
      ` : ""}
      <div class="has-error">
        <div class="editgrid-row-error help-block">
          ${ctx.errors[rowIndex]}
        </div>
      </div>
    </div>
  `
  ).join("");
  const footer = ctx.footer ? `
    <div class="item list-group-footer">
      ${ctx.footer}
    </div>
  ` : "";
  const addButton = !readOnly && ctx.hasAddButton ? `
    <button class="ui button primary" ref="${ref.addRow}">
      <i class="${iconClass2("plus")}"></i> ${addAnother || t("Add Another")}
    </button>
  ` : "";
  return `<div class="editgrid-listgroup ui celled list">
    ${header ? `<div class="item list-group-header">${header}</div>` : ""}
    ${rowsHtml}
    ${footer}
  </div>
  ${addButton}
  ${preview ? `<div class="ui segment" ref="preview">${preview}</div>` : ""}`;
};
const html$6 = (_ctx) => {
  return "";
};
const editgrid = { form: value$t, html: html$6 };
const value$s = (_ctx) => {
  return "";
};
const align = (_ctx) => {
  return "";
};
const field = { form: value$s, align };
const value$r = (_ctx) => {
  return "";
};
const fieldset = { form: value$r };
const value$q = (_ctx) => {
  return "";
};
const file = { form: value$q };
const value$p = (ctx) => {
  const icon2 = ctx.icon;
  const iconClass2 = ctx.iconClass;
  return `<i class="${iconClass2(icon2)}"></i>`;
};
const icon = { form: value$p };
const iconClass = (iconset, name, spinning) => {
  const icons = {
    "plus-squre-o": "plus square outline",
    "minus-squre-o": "minus square outline",
    "question-sign": "question circle",
    "remove-circle": "trash alternate outline",
    "new-window": "external alternate",
    "files-o": "file outline",
    move: "arrows alternate",
    link: "linkify"
  };
  if (Object.prototype.hasOwnProperty.call(icons, name)) {
    name = icons[name];
  }
  name = name || "";
  name = name.replace(/-/g, " ");
  name = name.replace(/ o$/, " outline");
  return spinning ? `icon ${name} loading` : `icon ${name}`;
};
const value$o = (_ctx) => {
  return "";
};
const html$5 = (_ctx) => {
  return "";
};
const input = { form: value$o, html: html$5 };
const value$n = (_ctx) => {
  return "";
};
const label = { form: value$n };
function value$m(_ctx) {
  return `<div class="formio-loader">
    <div class="loader-wrapper">
      <div class="ui active centered inline loader"></div>
    </div>
  </div>
  `;
}
const loader = { form: value$m };
function value$l(_ctx) {
  return "";
}
const loading = { form: value$l };
const value$k = (ctx) => `<div class="ui pointing red basic label ${ctx.level}">
  ${ctx.message}
</div>
`;
const message = { form: value$k };
const value$j = (_ctx) => {
  return "";
};
const multiValueRow = { form: value$j };
const value$i = (_ctx) => {
  return "";
};
const multiValueTable = { form: value$i };
const value$h = (_ctx) => {
  return "";
};
const panel = { form: value$h };
const value$g = (ctx) => {
  const input2 = ctx.input;
  const instance = ctx.instance;
  return `<div class="fields ${ctx.inline ? "inline" : "grouped"}">
    ${Array.isArray(ctx.values) ? ctx.values.map(
    (item) => {
      var _a, _b, _c;
      return `
      <div class="field">
        <div class="ui ${((_a = input2 == null ? void 0 : input2.attr) == null ? void 0 : _a.type) === "radio" ? "radio" : ""} checkbox" ref="wrapper">
          <${input2 == null ? void 0 : input2.type}
            ref="input"
            ${Object.entries((input2 == null ? void 0 : input2.attr) || {}).map(([attr, val]) => `${attr}="${val}"`).join(" ")}
            value="${item.value}"
            ${ctx.value === item.value || typeof ctx.value === "object" && ctx.value && Object.prototype.hasOwnProperty.call(ctx.value, item.value) && ctx.value[item.value] ? "checked" : ""}
            ${item.disabled ? "disabled" : ""}
            id="${(_b = instance == null ? void 0 : instance.root) == null ? void 0 : _b.id}-${ctx.id}-${ctx.row}-${item.value}"
          >
          <label class="" for="${(_c = instance == null ? void 0 : instance.root) == null ? void 0 : _c.id}-${ctx.id}-${ctx.row}-${item.value}">
            <span>${ctx.t ? ctx.t(item.label) : item.label}</span>
          </label>
        </div>
      </div>
    `;
    }
  ).join("") : ""}
  </div>`;
};
const html$4 = (ctx) => {
  const filtered = Array.isArray(ctx.values) ? ctx.values.filter(
    (item) => ctx.value === item.value || typeof ctx.value === "object" && ctx.value && Object.prototype.hasOwnProperty.call(ctx.value, item.value) && ctx.value[item.value]
  ).map(
    (item) => ctx.t ? ctx.t(item.label) : item.label
  ).join(", ") : "";
  return `<div ref="value">
    ${filtered}
  </div>`;
};
const radio = { form: value$g, html: html$4 };
function value$f(ctx) {
  const t = ctx.t;
  const iconClass2 = ctx.iconClass;
  const component2 = ctx.component;
  return `<table class="ui table celled">
    <tbody>
      <tr>
        <td>
          ${ctx.element}
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button class="ui button primary" ref="addResource">
            <i class="${iconClass2("plus")}"></i>
            ${t(component2.addResourceLabel || "Add Resource")}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  `;
}
const resourceAdd = { form: value$f };
const value$e = (ctx) => {
  const input2 = ctx.input;
  const instance = ctx.instance;
  const component2 = ctx.component;
  const selectAttrs = (input2 == null ? void 0 : input2.attr) || {};
  const selectId = !selectAttrs.id && (instance == null ? void 0 : instance.id) && (component2 == null ? void 0 : component2.key) ? `id="${instance.id}-${component2.key}"` : "";
  const selectAttrString = Object.entries(selectAttrs).map(([attr, val]) => `${attr}="${val}"`).join(" ");
  const autocomplete = selectAttrs.autocomplete ? `autocomplete="${selectAttrs.autocomplete}"` : "";
  return `<select
    ref="${(input2 == null ? void 0 : input2.ref) ? input2.ref : "selectContainer"}"
    class="ui search dropdown"
    ${(input2 == null ? void 0 : input2.multiple) ? "multiple" : ""}
    ${selectAttrString}
    ${selectId}
  >${ctx.selectOptions}</select>
  <input type="text"
         class="formio-select-autocomplete-input"
         ref="autocompleteInput"
         ${autocomplete}
         tabindex="-1"
  />`;
};
const html$3 = (ctx) => {
  const self = ctx.self;
  const value2 = ctx.value ? self.itemValueForHTMLMode(ctx.value) : "-";
  return `<div ref="value">${value2}</div>`;
};
const select = { form: value$e, html: html$3 };
const value$d = (ctx) => {
  const attrs = ctx.attrs;
  const option = ctx.option;
  const attrString = Object.entries(attrs || {}).map(([attr, val]) => `${attr}="${val}"`).join(" ");
  const selected = ctx.selected ? 'selected="selected"' : "";
  return `<option ${selected} value='${option.value}' ${attrString}>
    ${ctx.t ? ctx.t(option.label) : option.label}
  </option>`;
};
const html$2 = (ctx) => {
  const option = ctx.option;
  const label2 = ctx.selected ? ctx.t ? ctx.t(option.label) : option.label : "";
  return `${label2}`;
};
const selectOption = { form: value$d, html: html$2 };
const value$c = (ctx) => {
  const component2 = ctx.component;
  const iconClass2 = ctx.iconClass;
  const t = ctx.t;
  const required = ctx.required ? `<span class="form-control-feedback field-required-inline text-danger">
        <i class="${iconClass2("asterisk")}"></i>
      </span>` : "";
  const footer = component2.footer ? `<div class="signature-pad-footer">
        ${t(component2.footer)}
      </div>` : "";
  return `${ctx.element}
<div
  class="signature-pad-body"
  style="width: ${component2.width};height: ${component2.height};padding:0;margin:0;"
  tabindex="${component2.tabindex || 0}"
  ref="padBody"
>
  <a class="ui basic button mini icon signature-pad-refresh" ref="refresh">
    <i class="${iconClass2("refresh")}"></i>
  </a>
  <canvas class="signature-pad-canvas" height="${component2.height}" ref="canvas"></canvas>
  ${required}
  <img style="width: 100%;display: none;" ref="signatureImage">
</div>
${footer}`;
};
const html$1 = (_ctx) => `<img style="width: 100%;" ref="signatureImage">
`;
const signature = { form: value$c, html: html$1 };
const value$b = (ctx) => {
  const component2 = ctx.component;
  const t = ctx.t;
  const self = ctx.self;
  return `<table class="ui table striped celled">
    <thead>
      <tr>
        <th></th>
        ${component2.values.map((value2) => `<th style="text-align: center;">${t(value2.label)}</th>`).join("")}
      </tr>
    </thead>
    <tbody>
      ${component2.questions.map(
    (question) => `
        <tr>
          <td>${t(question.label)}</td>
          ${component2.values.map(
      (value2) => `
            <td style="text-align: center;">
              <input type="radio" name="${self.getInputName(question)}" value="${value2.value}" id="${ctx.key}-${question.value}-${value2.value}" ref="input">
            </td>
          `
    ).join("")}
        </tr>
      `
  ).join("")}
    </tbody>
  </table>`;
};
const html = (ctx) => {
  const component2 = ctx.component;
  const t = ctx.t;
  const value2 = ctx.value;
  return `<table class="ui table striped celled">
    <tbody>
      ${component2.questions.map(
    (question) => `
        <tr>
          <th>${t(question.label)}</th>
          <td>
            ${component2.values.map(
      (item) => value2 && Object.prototype.hasOwnProperty.call(value2, question.value) && value2[question.value] === item.value ? t(item.label) : ""
    ).join("")}
          </td>
        </tr>
      `
  ).join("")}
    </tbody>
  </table>`;
};
const survey = { form: value$b, html };
const value$a = (ctx) => {
  const component2 = ctx.component;
  const t = ctx.t;
  const tabLinks = component2.components.map(
    (tab2, index) => `<a class="item${ctx.currentTab === index ? " active" : ""}" role="presentation" ref="${ctx.tabLinkKey}">${t(tab2.label)}</a>`
  ).join("");
  const tabPanels = component2.components.map(
    (tab2, index) => `<div role="tabpanel" class="ui bottom attached tab segment${ctx.currentTab === index ? " active" : ""}" ref="${ctx.tabKey}">${ctx.tabComponents[index]}</div>`
  ).join("");
  return `<div class="tab-container${component2.verticalLayout ? " card-vertical" : ""}">
    <div class="ui top attached tabular menu${component2.verticalLayout ? " nav-tabs-vertical" : ""}">
      ${tabLinks}
    </div>
    ${tabPanels}
  </div>`;
};
const flat = (ctx) => {
  const component2 = ctx.component;
  const t = ctx.t;
  return component2.components.map(
    (tab2, index) => `
        <h4 class="ui top attached block header">${t(tab2.label)}</h4>
        <div class="ui bottom attached segment">
          ${ctx.tabComponents[index]}
        </div>
      `
  ).join("");
};
const tab = { form: value$a, flat };
const value$9 = (ctx) => {
  const component2 = ctx.component;
  const t = ctx.t;
  const tableComponents = ctx.tableComponents;
  const cellClassName = ctx.cellClassName;
  const tableKey = ctx.tableKey;
  const rowIndex = ctx.rowIndex;
  const id = ctx.id;
  const headerHtml = component2.header && component2.header.length > 0 ? `<thead><tr>${component2.header.map((header) => `<th>${t(header)}</th>`).join("")}</tr></thead>` : "";
  const bodyHtml = tableComponents.map(
    (row, _rowIdx) => `<tr ref="row-${id}">
        ${row.map(
      (column, _colIdx) => `<td ref="${tableKey}-${rowIndex}"${cellClassName ? ` class="${cellClassName}"` : ""}>${column}</td>`
    ).join("")}
      </tr>`
  ).join("");
  return `<table class="ui table
    ${component2.striped ? "striped" : ""}
    ${component2.bordered ? "celled" : ""}
    ${component2.hover ? "selectable" : ""}
    ${component2.condensed ? "compact" : "padded"}
  ">
  ${headerHtml}
  <tbody>
    ${bodyHtml}
  </tbody>
</table>`;
};
const table = { form: value$9 };
const value$8 = (ctx) => {
  const node = ctx.node;
  const content = ctx.content;
  const childNodes = ctx.childNodes;
  let html2 = "";
  if (node.isRoot) {
    html2 += `<div class="ui relaxed list">
      <div class="item" ref="root" role="listitem">`;
  } else {
    html2 += `<div ref="node" class="item tree__level" role="listitem">`;
  }
  if (content) {
    html2 += `<div ref="content" class="tree__node-content content">
      ${content}
    </div>`;
  }
  if (childNodes && childNodes.length) {
    html2 += `<div ref="childNodes" class="tree__node-children list" role="list">
      ${childNodes.join("")}
    </div>`;
  }
  if (node.isRoot) {
    html2 += `</div></div>`;
  } else {
    html2 += `</div>`;
  }
  return html2;
};
const tree = { form: value$8 };
const edit = (ctx) => {
  const t = ctx.t;
  const children = ctx.children;
  const readOnly = ctx.readOnly;
  const actions = !readOnly ? `<div class="node-actions">
        <button ref="saveNode" class="ui mini primary button saveNode">${t("Save")}</button>
        <button ref="cancelNode" class="ui mini negative button cancelNode">${t("Cancel")}</button>
      </div>` : "";
  return `<div class="node-edit">
    <div ref="nodeEdit">${children}</div>
    ${actions}
  </div>`;
};
const view = (ctx) => {
  const t = ctx.t;
  const values = ctx.values;
  const node = ctx.node;
  const readOnly = ctx.readOnly;
  let buttons = "";
  if (node.hasChildren) {
    buttons += `<button ref="toggleNode" class="ui button toggleNode">${t(node.collapsed ? "Expand" : "Collapse")}</button><div class="or"></div>`;
  }
  if (!readOnly) {
    buttons += `<button ref="addChild" class="ui button primary addChild">${t("Add")}</button><div class="or"></div>`;
    buttons += `<button ref="editNode" class="ui button editNode">${t("Edit")}</button><div class="or"></div>`;
    buttons += `<button ref="removeNode" class="ui button negative removeNode">${t("Delete")}</button>`;
    if (node.revertAvailable) {
      buttons += `<div class="or"></div><button ref="revertNode" class="ui button negative revertNode">${t("Revert")}</button>`;
    }
  }
  return `<div class="ui grid">
    <div class="row">
      ${values.map((value2) => `<div class="two wide column">${value2}</div>`).join("")}
      <div class="five wide column">
        <div class="ui mini right floated buttons">
          ${buttons}
        </div>
      </div>
    </div>
  </div>`;
};
const treePartials = {
  treeView: {
    form: view
  },
  treeEdit: {
    form: edit
  }
};
const value$7 = (ctx) => `<div class="${ctx.classes} ui form" ref="webform" novalidate>${ctx.children}</div>
`;
const webform = { form: value$7 };
const value$6 = (ctx) => `<div class="ui secondary segment">
  <div class="content" ref="${ctx.nestedKey}">
    ${ctx.children}
  </div>
</div>
`;
const well = { form: value$6 };
const value$5 = (ctx) => {
  const className = ctx.className;
  const wizardHeaderType = ctx.wizardHeaderType;
  const wizardHeader2 = ctx.wizardHeader;
  const wizardKey = ctx.wizardKey;
  const components = ctx.components;
  const wizardNav2 = ctx.wizardNav;
  let content = "";
  if (wizardHeaderType === "wizardHeaderVertical") {
    content = `
      <div class="ui stackable grid">
        <div class="three wide computer sixteen wide tablet sixteen wide mobile column">
          ${wizardHeader2}
        </div>
        <div class="one wide computer one wide mobile one wide tablet column"></div>
        <div class="wizard-page ten wide computer fourteen wide tablet fourteen wide mobiles column" ref="${wizardKey}">
          ${components}
        </div>
      </div>
      <div class="ui grid" style="margin-top: 10px;">
        <div class="four wide column"></div>
        <div class="twelve wide column">
          ${wizardNav2}
        </div>
      </div>
    `;
  } else {
    content = `
      ${wizardHeader2}
      <div class="wizard-page" ref="${wizardKey}">
        ${components}
      </div>
      ${wizardNav2}
    `;
  }
  return `<div class="${className}">
    <div style="position: relative;">
      ${content}
    </div>
  </div>`;
};
const wizard = { form: value$5 };
const value$4 = (ctx) => {
  const wizardKey = ctx.wizardKey;
  const panels = ctx.panels;
  const currentPage = ctx.currentPage;
  const wizardPageTooltip = ctx.wizardPageTooltip;
  const iconClass2 = ctx.iconClass;
  const steps = panels.map((panel2, index) => {
    const tooltip = panel2.tooltip && currentPage === index ? `<span data-tooltip="${wizardPageTooltip}" data-position="right center">
            <i class="${iconClass2("question-sign")}"></i>
          </span>` : "";
    return `<a class="${currentPage === index ? " active" : ""} step" ref="${wizardKey}-link">
        <div class="content">
          <div class="title">
            ${panel2.title}
            ${tooltip}
          </div>
        </div>
      </a>`;
  }).join("");
  return `<nav aria-label="navigation" id="${wizardKey}-header" ref="${wizardKey}-header">
    <div class="ui steps">
      ${steps}
    </div>
  </nav>`;
};
const wizardHeader = { form: value$4 };
const value$3 = (ctx) => {
  const wizardKey = ctx.wizardKey;
  const panels = ctx.panels;
  const currentPage = ctx.currentPage;
  const t = ctx.t;
  const panelHtml = panels.map((panel2, index) => {
    const progress = panels.length > 1 ? `<div class="classic-pagination-progress" style="border-radius: 0;"><div class="classic-pagination-progress-bar"></div></div>` : "";
    return `<div class="classic-pagination-page four wide computer eight wide tablet sixteen wide mobile column
          ${currentPage < index ? " disabled" : ""}
          ${currentPage === index ? " active" : ""}
          ${currentPage > index ? " complete" : ""}" style="padding: 0;">
        <div class="ui center aligned header classic-pagination-title">${t(panel2.title, { _userInput: true })}</div>
        ${progress}
        <span ref="${wizardKey}-link" class="classic-pagination-dot" style="top: 45px;"></span>
      </div>`;
  }).join("");
  return `<nav aria-label="navigation" id="${wizardKey}-header">
    <div class=" ui stackable grid" style="border-bottom:0;">
      ${panelHtml}
    </div>
  </nav>`;
};
const wizardHeaderClassic = { form: value$3 };
const value$2 = (ctx) => {
  const panels = ctx.panels.map(
    (panel2, index) => `
    <li class="item page-item${ctx.currentPage === index ? " active" : ""}" style="cursor: pointer;">
      <span class="page-link" ref="${ctx.wizardKey}-link" style="margin-left: 0px;">
        ${ctx.t(panel2.title, { _userInput: true })}
        ${panel2.tooltip && ctx.currentPage === index ? `<i ref="${ctx.wizardKey}-tooltip" class="${ctx.iconClass("question-sign")} text-muted" data-tooltip="${panel2.tooltip}"></i>` : ""}
      </span>
    </li>
  `
  );
  return `<nav aria-label="navigation" id="${ctx.wizardKey}-header">
  <ul class="ui vertical fluid tabular menu">
    ${panels.join("")}
  </ul>
</nav>`;
};
const wizardHeaderVertical = { form: value$2 };
const value$1 = (ctx) => {
  const buttons = ctx.buttons;
  const wizardKey = ctx.wizardKey;
  const t = ctx.t;
  const cancelButton = buttons.cancel ? `<div class="item">
    <button class="ui button secondary btn-wizard-nav-cancel" ref="${wizardKey}-cancel">${t("cancel")}</button>
  </div>` : "";
  const previousButton = buttons.previous ? `<div class="item">
    <button class="ui button primary btn-wizard-nav-previous" ref="${wizardKey}-previous">${t("previous")}</button>
  </div>` : "";
  const nextButton = buttons.next ? `<div class="item">
    <button class="ui button primary btn-wizard-nav-next" ref="${wizardKey}-next">${t("next")}</button>
  </div>` : "";
  const submitButton = buttons.submit ? `<div class="item">
    <button class="ui button primary btn-wizard-nav-submit" ref="${wizardKey}-submit">${t("submit")}</button>
  </div>` : "";
  return `<div class="ui horizontal list" id="${wizardKey}-nav">
  ${cancelButton}
  ${previousButton}
  ${nextButton}
  ${submitButton}
  </div>`;
};
const wizardNav = { form: value$1 };
const form = (ctx) => {
  let attrs = "";
  for (const attr in ctx.attrs) {
    if (attr === "class") {
      attrs += `${attr}="ui message ${ctx.attrs[attr]}" `;
    } else {
      attrs += `${attr}="${ctx.attrs[attr]}" `;
    }
  }
  return `<div ${attrs.trim()}>${ctx.message}</div>`;
};
const alert = { form };
const value = (_ctx) => {
  return "";
};
const errorsList = { form: value };
const goforms$1 = {
  transform(type, text) {
    if (!text) {
      return text;
    }
    const columns2 = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen"
    };
    switch (type) {
      case "columns":
        return Object.prototype.hasOwnProperty.call(columns2, text.toString()) ? columns2[text.toString()] : text;
      case "class":
        return Object.prototype.hasOwnProperty.call(
          this.cssClasses,
          text.toString()
        ) ? this.cssClasses[text.toString()] : text;
    }
    return text;
  },
  defaultIconset: "icon",
  iconClass,
  cssClasses,
  builder,
  builderComponent,
  builderComponents,
  builderEditForm,
  builderPlaceholder,
  builderSidebar,
  builderSidebarGroup,
  builderWizard,
  button,
  checkbox,
  columns,
  component,
  datagrid,
  day,
  editgrid,
  field,
  fieldset,
  file,
  icon,
  input,
  label,
  loader,
  loading,
  message,
  multiValueRow,
  multiValueTable,
  panel,
  radio,
  resourceAdd,
  select,
  selectOption,
  signature,
  survey,
  tab,
  tree,
  ...treePartials,
  table,
  webform,
  well,
  wizard,
  wizardHeader,
  wizardHeaderClassic,
  wizardHeaderVertical,
  wizardNav,
  alert,
  errorsList
};
const templates = {
  goforms: goforms$1
};
const goforms = {
  framework: "goforms",
  templates
};
if (typeof module !== "undefined") {
  module.exports = goforms;
}
export {
  goforms as default,
  goforms
};
//# sourceMappingURL=goforms-template.es.js.map
