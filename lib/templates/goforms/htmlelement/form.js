"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = form;
function form(context) {
    var component = context.component, input = context.input;
    var key = component.key, label = component.label, content = component.content, className = component.className, attrs = component.attrs;
    var name = input.name, ref = input.ref;
    return "\n    <div class=\"form-group\">\n      <label for=\"".concat(key, "\">").concat(label, "</label>\n      <div\n        id=\"").concat(key, "\"\n        name=\"").concat(name, "\"\n        ref=\"").concat(ref, "\"\n        class=\"").concat(className || "", "\"\n        ").concat(attrs
        ? Object.entries(attrs)
            .map(function (_a) {
            var k = _a[0], v = _a[1];
            return "".concat(k, "=\"").concat(v, "\"");
        })
            .join(" ")
        : "", "\n      >").concat(content || "", "</div>\n    </div>\n  ");
}
