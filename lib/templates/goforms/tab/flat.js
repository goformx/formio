"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = flat;
function flat(context) {
    var component = context.component, input = context.input;
    var key = component.key, label = component.label;
    var value = input.value;
    return "<div class=\"tab-flat\" id=\"".concat(key, "\">\n    <label>").concat(label, "</label>\n    <div class=\"tab-content\">\n      ").concat(value || "-", "\n    </div>\n  </div>");
}
