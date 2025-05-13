"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) { return "\n  <div class=\"formio-editgrid\">\n    <div class=\"formio-editgrid-header\">\n      ".concat(ctx.header, "\n    </div>\n    <div class=\"formio-editgrid-body\">\n      ").concat(ctx.rows
    .map(function (row, index) { return "\n        <div class=\"formio-editgrid-row\">\n          <div class=\"formio-editgrid-row-header\">\n            <div class=\"formio-editgrid-row-title\">\n              ".concat(ctx.t("Row"), " ").concat(index + 1, "\n            </div>\n            <div class=\"formio-editgrid-row-actions\">\n              ").concat(!ctx.readOnly
    ? "\n                <button class=\"ui button\" onclick=\"event.preventDefault(); ".concat(ctx.ref.removeRow(index), "\">\n                  <i class=\"").concat(ctx.iconClass("remove"), "\"></i>\n                </button>\n              ")
    : "", "\n            </div>\n          </div>\n          <div class=\"formio-editgrid-row-content\">\n            ").concat(ctx.preview, "\n          </div>\n          ").concat(ctx.errors[index]
    ? "\n            <div class=\"formio-editgrid-row-error\">\n              ".concat(ctx.errors[index], "\n            </div>\n          ")
    : "", "\n        </div>\n      "); })
    .join(""), "\n    </div>\n    <div class=\"formio-editgrid-footer\">\n      ").concat(!ctx.readOnly
    ? "\n        <button class=\"ui button primary\" onclick=\"event.preventDefault(); ".concat(ctx.ref.addRow(), "\">\n          <i class=\"").concat(ctx.iconClass("plus"), "\"></i> ").concat(ctx.addAnother, "\n        </button>\n      ")
    : "", "\n      ").concat(ctx.footer, "\n    </div>\n  </div>\n"); });
