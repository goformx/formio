"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) { return "\n  <div class=\"ui input\">\n    <input\n      type=\"tel\"\n      name=\"".concat(ctx.input.name, "\"\n      value=\"").concat(ctx.input.value, "\"\n      ref=\"").concat(ctx.input.ref, "\"\n      ").concat(ctx.component.inputMask ? "data-inputmask=\"".concat(ctx.component.inputMask, "\"") : "", "\n      ").concat(ctx.component.validateOn ? "data-validate-on=\"".concat(ctx.component.validateOn, "\"") : "", "\n      ").concat(ctx.input.attr
    ? Object.entries(ctx.input.attr)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return "".concat(key, "=\"").concat(value, "\"");
    })
        .join(" ")
    : "", "\n    />\n  </div>\n"); });
