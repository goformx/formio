"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) {
    var attrs = "";
    for (var attr in ctx.attrs) {
        if (attr === "class") {
            attrs += "".concat(attr, "=\"ui message ").concat(ctx.attrs[attr], "\" ");
        }
        else {
            attrs += "".concat(attr, "=\"").concat(ctx.attrs[attr], "\" ");
        }
    }
    return "<div ".concat(attrs.trim(), ">").concat(ctx.message, "</div>");
});
