(function (a, u) {
  typeof exports == "object" && typeof module < "u"
    ? u(exports, require("@formio/js"))
    : typeof define == "function" && define.amd
      ? define(["exports", "@formio/js"], u)
      : ((a = typeof globalThis < "u" ? globalThis : a || self),
        u((a.GoFormsTemplate = {}), a.Formio));
})(this, function (a, u) {
  "use strict";
  const f = {
      form: (e) => `
<div class="formio builder ui grid formbuilder">
  <div class="four wide column formcomponents">
    ${e.sidebar}
  </div>
  <div class="twelve wide column formarea" ref="form">
    ${e.form}
  </div>
</div>
`,
    },
    b = {
      form: (e) => {
        const t = e.iconClass,
          o = e.html;
        return `<div class="builder-component" ref="dragComponent">
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
    ${o}
  </div>`;
      },
    },
    h = {
      form: (
        e
      ) => `<div class="builder-components drag-container ${e.type}" ref="${e.key}-container">
  ${e.html}
</div>
`,
    },
    g = {
      form: (e) => `
  <div class="formio-dialog formio-dialog-theme-default">
    <div class="formio-dialog-content">
      <div class="formio-dialog-content-header">
        <h3 class="lead">${e.t(e.componentInfo.title)} ${e.t("Component")}</h3>
        ${
          e.componentInfo.documentation
            ? `
        <a href="${e.componentInfo.documentation}" target="_blank">
          <i class="${e.iconClass("new-window")}"> ${e.t("Help")}</i>
        </a>
        `
            : ""
        }
      </div>
      <div class="formio-dialog-content-body">
        <div class="formio-component-edit-container">
          <div class="formio-component-edit-content">
            <div class="formio-component-edit-content-header">
              <div class="formio-component-edit-content-header-actions">
                <button class="ui button primary" style="margin-right: 10px;" ref="saveButton">${e.t("Save")}</button>
                <button class="ui button default" style="margin-right: 10px;" ref="cancelButton">${e.t("Cancel")}</button>
                <button class="ui button negative" ref="removeButton">${e.t("Remove")}</button>
              </div>
            </div>
            <div class="formio-component-edit-content-body">
              <div class="formio-component-edit-content-body-preview">
                <div class="formio-component-edit-content-body-preview-header">
                  ${e.t("Preview")}
                </div>
                <div class="formio-component-edit-content-body-preview-content">
                  <div class="formio-component-edit-content-body-preview-content-help">
                    ${
                      e.componentInfo.help
                        ? `
                    <div class="formio-component-edit-content-body-preview-content-help-content">
                      ${e.componentInfo.help}
                    </div>
                    `
                        : ""
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="formio-dialog-content-footer">
        <div class="formio-dialog-content-footer-actions">
          <button class="ui button primary" style="margin-right: 10px;" ref="saveButton">${e.t("Save")}</button>
          <button class="ui button default" style="margin-right: 10px;" ref="cancelButton">${e.t("Cancel")}</button>
          <button class="ui button negative" ref="removeButton">${e.t("Remove")}</button>
        </div>
      </div>
    </div>
  </div>
`,
    },
    y = {
      form: (e) => `<div
  class="ui info message no-drag"
  style="text-align:center; margin-bottom: 5px;"
  role="alert"
  data-noattach="true"
  data-position="${e.position}"
>
  Drag and Drop a form component
</div>
`,
    },
    w = {
      form: (e) => `
  <div class="formio-builder-sidebar">
    ${e.groups.map((t) => `${t}`).join("")}
  </div>
`,
    },
    C = {
      form: (e) => {
        const t = e.group,
          o = e.t,
          i = e.iconClass,
          n = e.subgroups,
          l = t.componentOrder
            .map((r) => {
              const s = t.components[r];
              return `<span
      data-group="${e.groupKey}"
      data-key="${s.key}"
      data-type="${s.schema.type}"
      class="ui button mini primary fluid formcomponent drag-copy"
    >
      ${s.icon ? `<i class="${i(s.icon)}" style="margin-right: 5px;"></i>` : ""}
      ${o(s.title)}
    </span>`;
            })
            .join("");
        return `<div class="ui segment secondary form-builder-panel" style="padding: 0" ref="group-panel-${e.groupKey}">
    <div class="form-builder-group-header">
      <h5 class="panel-title">
        <button
          class="ui button basic fluid builder-group-button"
          type="button"
          data-toggle="collapse"
          data-target="#group-${e.groupKey}"
          data-parent="${e.groupId}"
          ref="sidebar-anchor"
        >
          ${o(t.title)}
        </button>
      </h5>
    </div>
  </div>
  <div class="ui segment" style="padding: 0">
    <div
      class="panel-collapse collapse ${t.default ? " in" : ""}"
      data-parent="#${e.groupId}"
      data-default="${t.default}"
      id="group-${e.groupKey}"
      ref="sidebar-group"
    >
      <div id="group-container-${e.groupKey}" class="card-body panel-body no-drop" ref="sidebar-container">
        ${l}
        ${n.join("")}
      </div>
    </div>
  </div>`;
      },
    },
    j = {
      form: (e) => {
        const t = e.pages,
          o = e.self,
          i = e.t,
          n = e.iconClass,
          l = e.sidebar,
          r = e.form,
          s = t
            .map(
              (m, $) => `
        <div title="${m.title}" class="${$ === o.page ? "active section" : "section"} wizard-page-label" ref="gotoPage">${m.title}</div>
        <div class="divider">/</div>
      `
            )
            .join("");
        return `<div class="formio builder ui grid formbuilder">
    <div class="four wide column formcomponents">
      ${l}
    </div>
    <div class="twelve wide column formarea">
      <div class="ui breadcrumb" style="margin-bottom: 0.5em">
        ${s}
        <div title="${i("Create Page")}" class="section wizard-page-label" ref="addPage"><i class="${n("plus")}"></i> ${i("Page")}</div>
      </div>
      <div ref="form">
        ${r}
      </div>
    </div>
  </div>`;
      },
    },
    k = {
      form: (e) => {
        const t = e.input,
          o = e.component,
          i = e.transform,
          n = e.iconClass,
          l = Object.entries(t.attr || {})
            .map(([r, s]) => `${r}="${s}"`)
            .join(" ");
        return `<${t.type}
    ref="button"
    class="ui button ${i("theme", o.theme)} ${o.customClass || ""}"
    ${l}
  >
  ${o.leftIcon ? `<i class="${o.leftIcon}"></i>&nbsp;` : ""}
  ${t.content || ""}
  ${o.tooltip ? `<i ref="tooltip" class="${n("question-sign")}" text-muted" data-tooltip="${o.tooltip}"></i>` : ""}
  ${o.rightIcon ? `&nbsp;<i class="${o.rightIcon}"></i>` : ""}
  </${t.type}>
  <div ref="buttonMessageContainer">
    <span class="help-block" ref="buttonMessage"></span>
  </div>`;
      },
      html: (e) => "",
    },
    z = {
      form: (e) => {
        const t = e.input,
          o = e.component,
          i = e.self,
          n = e.iconClass,
          l = Object.entries(t.attr || {})
            .map(([r, s]) => `${r}="${s}"`)
            .join(" ");
        return `<div class="ui checkbox">
    <${t.type}
      ref="input"
      id="${e.id}"
      ${l}
      ${e.checked ? "checked=true" : ""}
    >
    </${t.type}>
    <label class="${t.labelClass || ""}" for="${e.id}">
      ${t.content || ""}
      ${i.labelIsHidden() ? "" : `<span>${t.label || ""}</span>`}
    </label>
    ${o.tooltip ? `<i ref="tooltip" class="${n("question-sign")} text-muted" data-tooltip="${o.tooltip}"></i>` : ""}
  </div>`;
      },
      html: (e) => "",
    },
    _ = {
      form: (e) => `
  <div class="formio-columns">
    ${e.component.columns
      .map(
        (t, o) => `
      <div class="${e.transform("columns", t.width)} wide column" ref="${e.columnKey}">
        ${e.columnComponents[o]}
      </div>
    `
      )
      .join("")}
  </div>
`,
    },
    B = {
      form: (
        e
      ) => `<div id="${e.id}" class="field ${e.classes}"${e.styles ? ` style="${e.styles}"` : ""} ref="component">
    ${
      e.visible
        ? `
    ${e.children}
    <div ref="messageContainer"></div>
    `
        : ""
    }
  </div>`,
    },
    N = {
      "has-error": "error",
      "is-invalid": "error",
      "formio-tab-panel-active": "active",
      "formio-tab-link-active": "active",
      "formio-tab-link-container-active": "active",
    },
    I = {
      form: (e) => {
        const t = e.component,
          o = e.columns,
          i = e.rows,
          n = e.t,
          l = e.iconClass,
          r = e.datagridKey,
          s = !!e.hasAddButton,
          m = !!e.hasBottomSubmit,
          $ = !!e.hasHeader,
          pe = !!e.hasExtraColumn,
          fe = e.addButtonLocation,
          be = e.addButton,
          he = Number(e.numColumns),
          ge = t.layoutFixed ? 'style="table-layout: fixed;"' : "",
          ye = $
            ? `
    <thead>
      <tr>
        ${t.reorder ? "<th></th>" : ""}
        ${o
          .map(
            (d) => `
          <th class="${d.validate && d.validate.required ? "field-required" : ""}">
            ${d.hideLabel ? "" : n(d.label || d.title || "")}
            ${d.tooltip ? ` <i ref="tooltip" data-title="${d.tooltip}" class="${l("question-sign")} text-muted" data-tooltip="${d.tooltip}"></i>` : ""}
          </th>
        `
          )
          .join("")}
        ${
          pe
            ? `<th>
          ${s && fe === "header" ? be : ""}
        </th>`
            : ""
        }
      </tr>
    </thead>
  `
            : "",
          we = i
            .map(
              (d) => `
    <tr>${d}</tr>
  `
            )
            .join(""),
          Ce =
            s && m
              ? `
    <tfoot>
      <tr>
        <td colspan="${he + 1}">
          <button class="ui button primary" ref="${r}-addRow">
            <i class="${l("plus")}"></i> ${n(t.addAnother || "Add Another")}
          </button>
        </td>
      </tr>
    </tfoot>
  `
              : "";
        return `<table class="ui table datagrid-table
    ${t.striped ? "striped" : ""}
    ${t.bordered ? "celled" : ""}
    ${t.hover ? "selectable" : ""}
    ${t.condensed ? "compact" : "padded"}
    " ${ge}>
    ${ye}
    <tbody ref="${r}-tbody">
      ${we}
    </tbody>
    ${Ce}
  </table>`;
      },
      html: (e) => "",
    },
    K = {
      form: (e) => {
        const t = e.component,
          o = e.t;
        return `<div class="ui grid">
    ${
      e.dayFirst && e.showDay
        ? `
      <div class="four wide column">
        <label for="${t.key}-day" class="">${o("Day")}</label>
        ${e.day}
      </div>
    `
        : ""
    }
    ${
      e.showMonth
        ? `
      <div class="five wide column">
        <label for="${t.key}-month" class="">${o("Month")}</label>
        ${e.month}
      </div>
    `
        : ""
    }
    ${
      !e.dayFirst && e.showDay
        ? `
      <div class="four wide column">
        <label for="${t.key}-day" class="">${o("Day")}</label>
        ${e.day}
      </div>
    `
        : ""
    }
    ${
      e.showYear
        ? `
      <div class="seven wide column">
        <label for="${t.key}-year" class="">${o("Year")}</label>
        ${e.year}
      </div>
    `
        : ""
    }
  </div>`;
      },
    },
    O = {
      form: (e) => `
  <div class="formio-editgrid">
    <div class="formio-editgrid-header">
      ${e.header}
    </div>
    <div class="formio-editgrid-body">
      ${e.rows
        .map(
          (t, o) => `
        <div class="formio-editgrid-row">
          <div class="formio-editgrid-row-header">
            <div class="formio-editgrid-row-title">
              ${e.t("Row")} ${o + 1}
            </div>
            <div class="formio-editgrid-row-actions">
              ${
                e.readOnly
                  ? ""
                  : `
                <button class="ui button" onclick="event.preventDefault(); ${e.ref.removeRow(o)}">
                  <i class="${e.iconClass("remove")}"></i>
                </button>
              `
              }
            </div>
          </div>
          <div class="formio-editgrid-row-content">
            ${e.preview}
          </div>
          ${
            e.errors[o]
              ? `
            <div class="formio-editgrid-row-error">
              ${e.errors[o]}
            </div>
          `
              : ""
          }
        </div>
      `
        )
        .join("")}
    </div>
    <div class="formio-editgrid-footer">
      ${
        e.readOnly
          ? ""
          : `
        <button class="ui button primary" onclick="event.preventDefault(); ${e.ref.addRow()}">
          <i class="${e.iconClass("plus")}"></i> ${e.addAnother}
        </button>
      `
      }
      ${e.footer}
    </div>
  </div>
`,
      html: (e) => "",
    },
    P = { form: (e) => "", align: (e) => "" },
    S = { form: (e) => "" },
    q = { form: (e) => "" },
    A = {
      form: (e) => {
        const t = e.icon,
          o = e.iconClass;
        return `<i class="${o(t)}"></i>`;
      },
    },
    R = (e, t, o) => {
      const i = {
        "plus-squre-o": "plus square outline",
        "minus-squre-o": "minus square outline",
        "question-sign": "question circle",
        "remove-circle": "trash alternate outline",
        "new-window": "external alternate",
        "files-o": "file outline",
        move: "arrows alternate",
        link: "linkify",
      };
      return (
        Object.prototype.hasOwnProperty.call(i, t) && (t = i[t]),
        (t = t || ""),
        (t = t.replace(/-/g, " ")),
        (t = t.replace(/ o$/, " outline")),
        o ? `icon ${t} loading` : `icon ${t}`
      );
    },
    D = { form: (e) => "", html: (e) => "" },
    F = { form: (e) => "" };
  function T(e) {
    return `<div class="formio-loader">
    <div class="loader-wrapper">
      <div class="ui active centered inline loader"></div>
    </div>
  </div>
  `;
  }
  const H = { form: T };
  function E(e) {
    return "";
  }
  const L = { form: E },
    M = {
      form: (e) => `<div class="ui pointing red basic label ${e.level}">
  ${e.message}
</div>
`,
    },
    V = { form: (e) => "" },
    G = { form: (e) => "" },
    Y = { form: (e) => "" },
    J = {
      form: (e) => `<div class="fields ${e.inline ? "inline" : "grouped"}">
  ${e.values
    .map(
      (t) => `
    <div class="field">
      <div class="ui ${e.input.attr.type === "radio" ? "radio" : ""} checkbox" ref="wrapper">
        <${e.input.type}
          type="${e.input.attr.type || "radio"}"
          value="${t.value}"
          ${t.selected ? "checked" : ""}
        />
        <label>${t.label}</label>
      </div>
    </div>
  `
    )
    .join("")}
</div>`,
      html: (e) => `<div ref="value">
  ${e.values
    .filter(
      (t) =>
        e.value === t.value ||
        (typeof e.value == "object" &&
          Object.prototype.hasOwnProperty.call(e.value, t.value) &&
          e.value[t.value])
    )
    .map((t) => e.t(t.label))
    .join(", ")}
</div>`,
    };
  function W(e) {
    const t = e.t,
      o = e.iconClass,
      i = e.component;
    return `<table class="ui table celled">
    <tbody>
      <tr>
        <td>
          ${e.element}
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button class="ui button primary" ref="addResource">
            <i class="${o("plus")}"></i>
            ${t(i.addResourceLabel || "Add Resource")}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  `;
  }
  const Q = { form: W },
    U = {
      form: (e) => {
        var t, o;
        return `<select
  ref="${e.input.ref || "selectContainer"}"
  class="ui search dropdown"
  ${e.input.multiple ? "multiple" : ""}
  ${Object.entries(e.input.attr || {})
    .map(([i, n]) => `${i}="${n}"`)
    .join(" ")}
  ${(t = e.input.attr) != null && t.id ? "" : `id="${e.instance.id}-${e.component.key}"`}
>${e.options}</select>
<input type="text"
       class="formio-select-autocomplete-input"
       ref="autocompleteInput"
       ${(o = e.input.attr) != null && o.autocomplete ? `autocomplete="${e.input.attr.autocomplete}"` : ""}
       tabindex="-1"
/>`;
      },
      html: (e) => `<div ref="value">
  ${e.value ? e.self.itemValueForHTMLMode(e.value) : "-"}
</div>`,
    },
    X = {
      form: (e) => `<option ${e.selected ? 'selected="selected"' : ""}
  value='${e.option.value}'
  ${Object.entries(e.attrs || {})
    .map(([t, o]) => `${t}="${o}"`)
    .join(" ")}>
  ${e.option.label}
</option>`,
      html: (e) => `
  ${e.selected ? e.t(e.option.label) : ""}
`,
    },
    Z = {
      form: (e) => `${e.element}
<div
  class="signature-pad-body"
  style="width: ${e.component.width};height: ${e.component.height};padding:0;margin:0;"
  tabindex="${e.component.tabindex || 0}"
  ref="padBody"
>
  <a class="ui basic button mini icon signature-pad-refresh" ref="refresh">
    <i class="${e.iconClass("refresh")}"></i>
  </a>
  <canvas class="signature-pad-canvas" height="${e.component.height}" ref="canvas"></canvas>
  ${
    e.required
      ? `
    <span class="form-control-feedback field-required-inline text-danger">
      <i class="${e.iconClass("asterisk")}"></i>
    </span>
  `
      : ""
  }
  <img style="width: 100%;display: none;" ref="signatureImage">
</div>
${
  e.component.footer
    ? `
  <div class="signature-pad-footer">
    ${e.t(e.component.footer)}
  </div>
`
    : ""
}`,
      html: (e) => `<img style="width: 100%;" ref="signatureImage">
`,
    },
    x = {
      form: (e) => `<table class="ui table striped celled">
  <thead>
    <tr>
      <th></th>
      ${e.component.values
        .map(
          (t) => `
      <th style="text-align: center;">${e.t(t.label)}</th>
      `
        )
        .join("")}
    </tr>
  </thead>
  <tbody>
    ${e.component.questions
      .map(
        (t) => `
    <tr>
      <td>${e.t(t.label)}</td>
      ${e.component.values
        .map(
          (o) => `
      <td style="text-align: center;">
        <input type="radio" name="${e.self.getInputName(t)}" value="${o.value}" id="${e.key}-${t.value}-${o.value}" ref="input">
      </td>
      `
        )
        .join("")}
    </tr>
    `
      )
      .join("")}
  </tbody>
</table>`,
      html: (e) => `
  <table class="ui table">
    <thead>
      <tr>
        <th></th>
        ${e.component.values
          .map(
            (t) => `
        <th style="text-align: center;">${e.t(t.label)}</th>
        `
          )
          .join("")}
      </tr>
    </thead>
    <tbody>
      ${e.component.questions
        .map(
          (t) => `
      <tr>
        <th>${e.t(t.label)}</th>
        <td>
          ${e.component.values
            .map(
              (o) => `
          <div class="ui radio checkbox">
            <input type="radio" name="${t.label}" value="${o.label}" />
            <label>${e.t(o.label)}</label>
          </div>
          `
            )
            .join("")}
        </td>
      </tr>
      `
        )
        .join("")}
    </tbody>
  </table>
`,
    },
    ee = {
      form: (e) => `<div class="tab-container${e.component.verticalLayout ? " card-vertical" : ""}">
  <div class="ui top attached tabular menu${e.component.verticalLayout ? " nav-tabs-vertical" : ""}">
    ${e.component.components
      .map(
        (t, o) => `
    <a class="item${e.currentTab === o ? " active" : ""}" role="presentation" ref="${e.tabLinkKey}">${e.t(t.label)}</a>
    `
      )
      .join("")}
  </div>
  ${e.component.components
    .map(
      (t, o) => `
  <div role="tabpanel" class="ui bottom attached tab segment${e.currentTab === o ? " active" : ""}" ref="${e.tabKey}"">${e.tabComponents[o]}</div>
    `
    )
    .join("")}
</div>
`,
      flat: (e) => `
  ${e.component.components
    .map(
      (t, o) => `
    <h4 class="ui top attached block header">${e.t(t.label)}</h4>
    <div class="ui bottom attached segment">
      ${e.tabComponents[o]}
    </div>
  `
    )
    .join("")}
`,
    },
    te = {
      form: (e) => `<table class="ui table
      ${e.component.striped ? "striped" : ""}
      ${e.component.bordered ? "celled" : ""}
      ${e.component.hover ? "selectable" : ""}
      ${e.component.condensed ? "compact" : "padded"}
    ">
    ${
      e.component.header && e.component.header.length > 0
        ? `
    <thead>
      <tr>
        ${e.component.header.map((t) => `<th>${e.t(t.label)}</th>`).join("")}
      </tr>
    </thead>
    `
        : ""
    }
    <tbody>
      ${e.tableComponents
        .map(
          (t, o) => `
        <tr>
          ${t.map((i, n) => `<td${i.className ? ` class="${i.className}"` : ""}>${i.value}</td>`).join("")}
        </tr>
      `
        )
        .join("")}
    </tbody>
  </table>`,
    },
    oe = {
      form: (e) => `
  ${
    e.node.isRoot
      ? `
    <div class="ui relaxed list">
      <div class="item" ref="root" role="listitem">
        ${e.view}
      </div>
    </div>
  `
      : `
    <div ref="node" class="item tree__level" role="listitem">
      ${
        e.content
          ? `
      <div ref="content" class="tree__node-content content">
        ${e.content}
      </div>
      `
          : ""
      }
      ${
        e.childNodes && e.childNodes.length
          ? `
      <div ref="childNodes" class="tree__node-children list" role="list">
        ${e.childNodes.join("")}
      </div>
      `
          : ""
      }
    </div>
  `
  }
`,
    },
    ie = {
      treeView: {
        form: (e) => `<div class="ui grid">
  <div class="row">
    ${e.values
      .map(
        (t) => `
      <div class="two wide column">
        ${t}
      </div>
    `
      )
      .join("")}
    <div class="five wide column">
      <div class="ui mini right floated buttons">
        ${
          e.node.hasChildren
            ? `
          <button ref="toggleNode" class="ui button toggleNode">${e.t(e.node.collapsed ? "Expand" : "Collapse")}</button>
          <div class="or"></div>
        `
            : ""
        }
        ${
          e.readOnly
            ? ""
            : `
          <button ref="addChild" class="ui button primary addChild">${e.t("Add")}</button>
          <div class="or"></div>
          <button ref="editNode" class="ui button editNode">${e.t("Edit")}</button>
          <div class="or"></div>
          <button ref="removeNode" class="ui button negative removeNode">${e.t("Delete")}</button>
          ${
            e.node.revertAvailable
              ? `
            <div class="or"></div>
            <button ref="revertNode" class="ui button negative revertNode">${e.t("Revert")}</button>
          `
              : ""
          }
        `
        }
      </div>
    </div>
  </div>
</div>`,
      },
      treeEdit: {
        form: (e) => `<div class="node-edit">
  <div ref="nodeEdit">${e.children}</div>
  ${
    e.readOnly
      ? ""
      : `
    <div class="node-actions">
      <button ref="saveNode" class="ui mini primary button saveNode">${e.t("Save")}</button>
      <button ref="cancelNode" class="ui mini button cancelNode">${e.t("Cancel")}</button>
    </div>
  `
  }
</div>`,
      },
    },
    ne = {
      form: (e) => `<div class="${e.classes} ui form" ref="webform" novalidate>${e.children}</div>
`,
    },
    se = {
      form: (e) => `<div class="ui secondary segment">
  <div class="content" ref="${e.nestedKey}">
    ${e.children}
  </div>
</div>
`,
    },
    ae = {
      form: (e) => `<div class="${e.className}">
  <div style="position: relative;">
    ${
      e.wizardHeaderType === "wizardHeaderVertical"
        ? `<div class="ui stackable grid">
            <div class="three wide computer sixteen wide tablet sixteen wide mobile column">
              <div class="ui vertical steps">
                ${e.content}
              </div>
            </div>
            <div class="thirteen wide computer sixteen wide tablet sixteen wide mobile column">
              <div class="ui segment">
                <div class="ui form">
                  ${e.content}
                </div>
              </div>
            </div>
          </div>`
        : `<div class="ui segment">
            <div class="ui form">
              ${e.content}
            </div>
          </div>`
    }
  </div>
</div>`,
    },
    le = {
      form: (e) => `<div class="ui steps">
  ${e.panels
    .map(
      (t, o) => `
    <a class="${e.currentPage === o ? " active" : ""} step" ref="${e.wizardKey}-link">
      <div class="content">
        <div class="title">
          ${t.title}
        </div>
        <div class="description">
          ${t.tooltip}
        </div>
      </div>
    </a>
  `
    )
    .join("")}
</div>`,
    },
    re = {
      form: (e) => `<div class="ui stackable grid" style="border-bottom:0;">
  ${e.panels
    .map(
      (t, o) => `
    <div class="classic-pagination-page four wide computer eight wide tablet sixteen wide mobile column
      ${e.currentPage < o ? " disabled" : ""}
      ${e.currentPage === o ? " active" : ""}"
      ref="${e.wizardKey}-link">
      <div class="content">
        <div class="title">
          ${t.title}
        </div>
        <div class="description">
          ${t.tooltip}
        </div>
      </div>
    </div>
  `
    )
    .join("")}
</div>`,
    },
    de = {
      form: (e) => {
        const t = e.panels.map(
          (o, i) => `
    <li class=" item page-item${e.currentPage === i ? " active" : ""}" style="cursor: pointer;">
      <span class="page-link" ref="${e.wizardKey}-link" style="margin-left: 0px;">
        ${e.t(o.title, { _userInput: !0 })}
        ${o.tooltip && e.currentPage === i ? `<i ref="${e.wizardKey}-tooltip" class="${e.iconClass("question-sign")} text-muted" data-tooltip="${o.tooltip}"></i>` : ""}
      </span>
    </li>
  `
        );
        return `<nav aria-label="navigation" id="${e.wizardKey}-header">
  <ul class="ui vertical fluid tabular menu">
    ${t}
  </ul>
</nav>`;
      },
    },
    ue = {
      form: (e) => {
        const t = e.buttons.cancel
            ? `<div class="item">
    <button class="ui button secondary btn-wizard-nav-cancel" ref="${e.wizardKey}-cancel">${e.t("cancel")}</button>
  </div>`
            : "",
          o = e.buttons.previous
            ? `<div class="item">
    <button class="ui button primary btn-wizard-nav-previous" ref="${e.wizardKey}-previous">${e.t("previous")}</button>
  </div>`
            : "",
          i = e.buttons.next
            ? `<div class="item">
    <button class="ui button primary btn-wizard-nav-next" ref="${e.wizardKey}-next">${e.t("next")}</button>
  </div>`
            : "",
          n = e.buttons.submit
            ? `<div class="item">
    <button class="ui button primary btn-wizard-nav-submit" ref="${e.wizardKey}-submit">${e.t("submit")}</button>
  </div>`
            : "";
        return `<div class="ui horizontal list" id="${e.wizardKey}-nav">
  ${t}
  ${o}
  ${i}
  ${n}
  </div>`;
      },
    },
    ce = {
      form: (e) => {
        let t = "";
        for (const o in e.attrs)
          o === "class"
            ? (t += `${o}="ui message ${e.attrs[o]}" `)
            : (t += `${o}="${e.attrs[o]}" `);
        return `<div ${t.trim()}>${e.message}</div>`;
      },
    },
    ve = { form: (e) => "" },
    p = {
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
      16: "sixteen",
    },
    me = {
      transform(e, t) {
        if (!t) return t;
        switch (e) {
          case "columns":
            return Object.prototype.hasOwnProperty.call(p, t.toString())
              ? p[t.toString()]
              : t.toString();
          case "class":
            return Object.prototype.hasOwnProperty.call(this.cssClasses, t.toString())
              ? this.cssClasses[t.toString()]
              : t.toString();
        }
        return t.toString();
      },
      defaultIconset: "icon",
      iconClass: R,
      cssClasses: N,
      builder: f,
      builderComponent: b,
      builderComponents: h,
      builderEditForm: g,
      builderPlaceholder: y,
      builderSidebar: w,
      builderSidebarGroup: C,
      builderWizard: j,
      button: k,
      checkbox: z,
      columns: _,
      component: B,
      datagrid: I,
      day: K,
      editgrid: O,
      field: P,
      fieldset: S,
      file: q,
      icon: A,
      input: D,
      label: F,
      loader: H,
      loading: L,
      message: M,
      multiValueRow: V,
      multiValueTable: G,
      panel: Y,
      radio: J,
      resourceAdd: Q,
      select: U,
      selectOption: X,
      signature: Z,
      survey: x,
      tab: ee,
      tree: oe,
      ...ie,
      table: te,
      webform: ne,
      well: se,
      wizard: ae,
      wizardHeader: le,
      wizardHeaderClassic: re,
      wizardHeaderVertical: de,
      wizardNav: ue,
      alert: ce,
      errorsList: ve,
    };
  class c extends u.Components.components.textfield {
    static schema() {
      return u.Components.components.textfield.schema();
    }
    static get builderInfo() {
      return {
        title: "Custom Text Field",
        group: "basic",
        icon: "fa fa-font",
        weight: 0,
        documentation: "https://formio.github.io/formio.js/app/examples/customcomponents.html",
        schema: c.schema(),
      };
    }
    render() {
      return super.render();
    }
  }
  const $e = () => {
      u.Components.addComponent("customtextfield", c);
    },
    v = { framework: "goforms", templates: me };
  typeof module < "u" && module.exports && ((module.exports = v), (module.exports.default = v)),
    Object.defineProperty(a, "Components", { enumerable: !0, get: () => u.Components }),
    (a.CustomTextField = c),
    (a.default = v),
    (a.goforms = v),
    (a.registerCustomComponents = $e),
    Object.defineProperties(a, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: "Module" },
    });
});
//# sourceMappingURL=index.umd.js.map
