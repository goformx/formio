"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = form;
function form(context) {
    var selected = context.selected, option = context.option, attrs = context.attrs;
    var value = option.value, label = option.label;
    return "<option ".concat(selected ? 'selected="selected"' : "", "\n    value='").concat(value, "'\n    ").concat(Object.entries(attrs || {})
        .map(function (_a) {
        var attr = _a[0], value = _a[1];
        return "".concat(attr, "=\"").concat(value, "\"");
    })
        .join(" "), ">\n    ").concat(label, "\n  </option>");
}
