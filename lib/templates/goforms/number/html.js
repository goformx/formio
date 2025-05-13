"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) { return "\n  <div class=\"ui input\">\n    <input\n      type=\"number\"\n      name=\"".concat(ctx.input.name, "\"\n      value=\"").concat(ctx.input.value, "\"\n      ref=\"").concat(ctx.input.ref, "\"\n      ").concat(ctx.component.min !== undefined ? "min=\"".concat(ctx.component.min, "\"") : "", "\n      ").concat(ctx.component.max !== undefined ? "max=\"".concat(ctx.component.max, "\"") : "", "\n      ").concat(ctx.component.step !== undefined ? "step=\"".concat(ctx.component.step, "\"") : "", "\n      ").concat(ctx.input.attr
    ? Object.entries(ctx.input.attr)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return "".concat(key, "=\"").concat(value, "\"");
    })
        .join(" ")
    : "", "\n    />\n  </div>\n"); });
