"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) { return "\n  <div class=\"ui input\">\n    <input\n      type=\"password\"\n      name=\"".concat(ctx.input.name, "\"\n      value=\"").concat(ctx.input.value, "\"\n      ref=\"").concat(ctx.input.ref, "\"\n      ").concat(ctx.component.minLength ? "minlength=\"".concat(ctx.component.minLength, "\"") : "", "\n      ").concat(ctx.component.maxLength ? "maxlength=\"".concat(ctx.component.maxLength, "\"") : "", "\n      ").concat(ctx.component.pattern ? "pattern=\"".concat(ctx.component.pattern, "\"") : "", "\n      ").concat(ctx.input.attr
    ? Object.entries(ctx.input.attr)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return "".concat(key, "=\"").concat(value, "\"");
    })
        .join(" ")
    : "", "\n    />\n  </div>\n"); });
