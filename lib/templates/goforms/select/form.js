"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = form;
function form(context) {
    var input = context.input, instance = context.instance, component = context.component, options = context.options;
    var multiple = input.multiple, attr = input.attr, ref = input.ref;
    var id = instance.id;
    var key = component.key;
    return "<select\n    ref=\"".concat(ref || "selectContainer", "\"\n    class=\"ui search dropdown\"\n    ").concat(multiple ? "multiple" : "", "\n    ").concat(Object.entries(attr || {})
        .map(function (_a) {
        var attr = _a[0], value = _a[1];
        return "".concat(attr, "=\"").concat(value, "\"");
    })
        .join(" "), "\n    ").concat(!(attr === null || attr === void 0 ? void 0 : attr.id) ? "id=\"".concat(id, "-").concat(key, "\"") : "", "\n  >").concat(options, "</select>\n  <input type=\"text\"\n         class=\"formio-select-autocomplete-input\"\n         ref=\"autocompleteInput\"\n         ").concat((attr === null || attr === void 0 ? void 0 : attr.autocomplete) ? "autocomplete=\"".concat(attr.autocomplete, "\"") : "", "\n         tabindex=\"-1\"\n  />");
}
