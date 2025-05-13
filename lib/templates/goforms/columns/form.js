"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) { return "\n  <div class=\"formio-columns\">\n    ".concat(ctx.component.columns
    .map(function (column, index) { return "\n      <div class=\"".concat(ctx.transform("columns", column.width), " wide column\" ref=\"").concat(ctx.columnKey, "\">\n        ").concat(ctx.columnComponents[index], "\n      </div>\n    "); })
    .join(""), "\n  </div>\n"); });
