"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = form;
function form(context) {
    var component = context.component, input = context.input;
    var key = component.key, label = component.label, inputMask = component.inputMask, validateOn = component.validateOn;
    var name = input.name, value = input.value, ref = input.ref, attr = input.attr;
    var attrs = __assign(__assign(__assign({ type: "tel", id: key, name: name, value: value, ref: ref }, (inputMask && { "data-input-mask": inputMask })), (validateOn && { "data-validate-on": validateOn })), attr);
    return "\n    <div class=\"form-group\">\n      <label for=\"".concat(key, "\">").concat(label, "</label>\n      <input ").concat(Object.entries(attrs)
        .map(function (_a) {
        var k = _a[0], v = _a[1];
        return "".concat(k, "=\"").concat(v, "\"");
    })
        .join(" "), " />\n    </div>\n  ");
}
