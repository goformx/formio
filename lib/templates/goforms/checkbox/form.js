"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) {
    // Type assertions for known structure
    var input = ctx.input;
    var component = ctx.component;
    var self = ctx.self;
    var iconClass = ctx.iconClass;
    var attrs = Object.entries(input.attr || {})
        .map(function (_a) {
        var attr = _a[0], value = _a[1];
        return "".concat(attr, "=\"").concat(value, "\"");
    })
        .join(" ");
    return "<div class=\"ui checkbox\">\n    <".concat(input.type, "\n      ref=\"input\"\n      id=\"").concat(ctx.id, "\"\n      ").concat(attrs, "\n      ").concat(ctx.checked ? "checked=true" : "", "\n    >\n    </").concat(input.type, ">\n    <label class=\"").concat(input.labelClass || "", "\" for=\"").concat(ctx.id, "\">\n      ").concat(input.content || "", "\n      ").concat(!self.labelIsHidden() ? "<span>".concat(input.label || "", "</span>") : "", "\n    </label>\n    ").concat(component.tooltip ? "<i ref=\"tooltip\" class=\"".concat(iconClass("question-sign"), " text-muted\" data-tooltip=\"").concat(component.tooltip, "\"></i>") : "", "\n  </div>");
});
