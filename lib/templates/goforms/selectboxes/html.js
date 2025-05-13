"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = html;
function html(context) {
    var component = context.component, input = context.input;
    var key = component.key, values = component.values;
    var value = input.value;
    var selectedValues = value ? value.split(",") : [];
    var selectedLabels = values
        .filter(function (item) { return selectedValues.includes(item.value); })
        .map(function (item) { return item.label; })
        .join(", ");
    return "<div class=\"selectboxes-display\" id=\"".concat(key, "\">\n    ").concat(selectedLabels || "-", "\n  </div>");
}
