"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = html;
function html(context) {
    var component = context.component, options = context.options;
    var key = component.key;
    return "<div class=\"select-display\" id=\"".concat(key, "\">\n    ").concat(options || "-", "\n  </div>");
}
