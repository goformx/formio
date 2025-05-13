"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) {
    // Type assertions for known structure
    var input = ctx.input;
    var component = ctx.component;
    var transform = ctx.transform;
    var iconClass = ctx.iconClass;
    var attrs = Object.entries(input.attr || {})
        .map(function (_a) {
        var attr = _a[0], value = _a[1];
        return "".concat(attr, "=\"").concat(value, "\"");
    })
        .join(" ");
    return "<".concat(input.type, "\n    ref=\"button\"\n    class=\"ui button ").concat(transform("theme", component.theme), " ").concat(component.customClass || "", "\"\n    ").concat(attrs, "\n  >\n  ").concat(component.leftIcon ? "<i class=\"".concat(component.leftIcon, "\"></i>&nbsp;") : "", "\n  ").concat(input.content || "", "\n  ").concat(component.tooltip ? "<i ref=\"tooltip\" class=\"".concat(iconClass("question-sign"), "\" text-muted\" data-tooltip=\"").concat(component.tooltip, "\"></i>") : "", "\n  ").concat(component.rightIcon ? "&nbsp;<i class=\"".concat(component.rightIcon, "\"></i>") : "", "\n  </").concat(input.type, ">\n  <div ref=\"buttonMessageContainer\">\n    <span class=\"help-block\" ref=\"buttonMessage\"></span>\n  </div>");
});
