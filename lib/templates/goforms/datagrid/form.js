"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) {
    // Type assertions for known structure
    var component = ctx.component;
    var columns = ctx.columns;
    var rows = ctx.rows;
    var t = ctx.t;
    var iconClass = ctx.iconClass;
    var datagridKey = ctx.datagridKey;
    var hasAddButton = !!ctx.hasAddButton;
    var hasBottomSubmit = !!ctx.hasBottomSubmit;
    var hasHeader = !!ctx.hasHeader;
    var hasExtraColumn = !!ctx.hasExtraColumn;
    var addButtonLocation = ctx.addButtonLocation;
    var addButton = ctx.addButton;
    var numColumns = Number(ctx.numColumns);
    var tableStyle = component.layoutFixed ? 'style="table-layout: fixed;"' : "";
    var header = hasHeader
        ? "\n    <thead>\n      <tr>\n        ".concat(component.reorder ? "<th></th>" : "", "\n        ").concat(columns
            .map(function (col) { return "\n          <th class=\"".concat(col.validate && col.validate.required ? "field-required" : "", "\">\n            ").concat(col.hideLabel ? "" : t(col.label || col.title || ""), "\n            ").concat(col.tooltip ? " <i ref=\"tooltip\" data-title=\"".concat(col.tooltip, "\" class=\"").concat(iconClass("question-sign"), " text-muted\" data-tooltip=\"").concat(col.tooltip, "\"></i>") : "", "\n          </th>\n        "); })
            .join(""), "\n        ").concat(hasExtraColumn
            ? "<th>\n          ".concat(hasAddButton && addButtonLocation === "header" ? addButton : "", "\n        </th>")
            : "", "\n      </tr>\n    </thead>\n  ")
        : "";
    var body = rows
        .map(function (row) { return "\n    <tr>".concat(row, "</tr>\n  "); })
        .join("");
    var footer = hasAddButton && hasBottomSubmit
        ? "\n    <tfoot>\n      <tr>\n        <td colspan=\"".concat(numColumns + 1, "\">\n          <button class=\"ui button primary\" ref=\"").concat(datagridKey, "-addRow\">\n            <i class=\"").concat(iconClass("plus"), "\"></i> ").concat(t(component.addAnother || "Add Another"), "\n          </button>\n        </td>\n      </tr>\n    </tfoot>\n  ")
        : "";
    return "<table class=\"ui table datagrid-table\n    ".concat(component.striped ? "striped" : "", "\n    ").concat(component.bordered ? "celled" : "", "\n    ").concat(component.hover ? "selectable" : "", "\n    ").concat(component.condensed ? "compact" : "padded", "\n    \" ").concat(tableStyle, ">\n    ").concat(header, "\n    <tbody ref=\"").concat(datagridKey, "-tbody\">\n      ").concat(body, "\n    </tbody>\n    ").concat(footer, "\n  </table>");
});
