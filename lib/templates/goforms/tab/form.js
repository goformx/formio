"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = form;
function form(context) {
    var component = context.component, input = context.input;
    var key = component.key, label = component.label;
    var value = input.value;
    return "<div class=\"tab-form\">\n    <label for=\"".concat(key, "\">").concat(label, "</label>\n    <div class=\"tab-content\">\n      ").concat(value || "-", "\n    </div>\n  </div>");
}
