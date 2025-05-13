"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = html;
function html(context) {
    var component = context.component, input = context.input;
    var key = component.key, label = component.label;
    var value = input.value;
    return "<div class=\"survey-display\" id=\"".concat(key, "\">\n    <label>").concat(label, "</label>\n    <div class=\"survey-answers\">\n      ").concat(value || "-", "\n    </div>\n  </div>");
}
