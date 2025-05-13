"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = form;
function form(context) {
    var component = context.component, input = context.input;
    var key = component.key, label = component.label, values = component.values, inline = component.inline;
    var name = input.name, value = input.value, ref = input.ref;
    var selectedValues = value ? value.split(",") : [];
    return "<div class=\"form-group\">\n    <label for=\"".concat(key, "\">").concat(label, "</label>\n    <div class=\"selectboxes-group ").concat(inline ? "inline" : "", "\">\n      ").concat(values
        .map(function (item) { return "\n        <div class=\"selectbox\">\n          <input\n            type=\"checkbox\"\n            id=\"".concat(key, "-").concat(item.value, "\"\n            name=\"").concat(name, "\"\n            value=\"").concat(item.value, "\"\n            ref=\"").concat(ref, "\"\n            ").concat(selectedValues.includes(item.value) ? "checked" : "", "\n          />\n          <label for=\"").concat(key, "-").concat(item.value, "\">").concat(item.label, "</label>\n        </div>\n      "); })
        .join(""), "\n    </div>\n  </div>");
}
