"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = html;
function html(context) {
    var component = context.component, input = context.input;
    var values = component.values;
    var value = input.value;
    return "<div class=\"radio-display\">\n    ".concat(values
        .filter(function (item) {
        if (value == null)
            return false;
        if (value === item.value)
            return true;
        if (typeof value === "object") {
            var objValue = value;
            return Object.prototype.hasOwnProperty.call(objValue, item.value) && objValue[item.value];
        }
        return false;
    })
        .map(function (item) { return item.label; })
        .join(", "), "\n  </div>");
}
