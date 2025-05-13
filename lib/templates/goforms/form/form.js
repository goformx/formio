"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) { return "\n  <form\n    class=\"ui form\"\n    action=\"".concat(ctx.component.action || "", "\"\n    method=\"").concat(ctx.component.method || "post", "\"\n    enctype=\"").concat(ctx.component.enctype || "application/x-www-form-urlencoded", "\"\n    ref=\"").concat(ctx.input.ref, "\"\n  >\n    ").concat(ctx.children || "", "\n  </form>\n"); });
