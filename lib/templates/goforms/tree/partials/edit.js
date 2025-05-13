"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) { return "<div class=\"node-edit\">\n  <div ref=\"nodeEdit\">".concat(ctx.children, "</div>\n  ").concat(!ctx.readOnly
    ? "\n    <div class=\"node-actions\">\n      <button ref=\"saveNode\" class=\"ui mini primary button saveNode\">".concat(ctx.t("Save"), "</button>\n      <button ref=\"cancelNode\" class=\"ui mini button cancelNode\">").concat(ctx.t("Cancel"), "</button>\n    </div>\n  ")
    : "", "\n</div>"); });
