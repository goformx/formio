"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) { return "".concat(ctx.element, "\n<div\n  class=\"signature-pad-body\"\n  style=\"width: ").concat(ctx.component.width, ";height: ").concat(ctx.component.height, ";padding:0;margin:0;\"\n  tabindex=\"").concat(ctx.component.tabindex || 0, "\"\n  ref=\"padBody\"\n>\n  <a class=\"ui basic button mini icon signature-pad-refresh\" ref=\"refresh\">\n    <i class=\"").concat(ctx.iconClass("refresh"), "\"></i>\n  </a>\n  <canvas class=\"signature-pad-canvas\" height=\"").concat(ctx.component.height, "\" ref=\"canvas\"></canvas>\n  ").concat(ctx.required
    ? "\n    <span class=\"form-control-feedback field-required-inline text-danger\">\n      <i class=\"".concat(ctx.iconClass("asterisk"), "\"></i>\n    </span>\n  ")
    : "", "\n  <img style=\"width: 100%;display: none;\" ref=\"signatureImage\">\n</div>\n").concat(ctx.component.footer
    ? "\n  <div class=\"signature-pad-footer\">\n    ".concat(ctx.t(ctx.component.footer), "\n  </div>\n")
    : ""); });
