"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) {
    return "<div id=\"".concat(ctx.id, "\" class=\"field ").concat(ctx.classes, "\"").concat(ctx.styles ? " style=\"".concat(ctx.styles, "\"") : "", " ref=\"component\">\n    ").concat(ctx.visible
        ? "\n    ".concat(ctx.children, "\n    <div ref=\"messageContainer\"></div>\n    ")
        : "", "\n  </div>");
});
