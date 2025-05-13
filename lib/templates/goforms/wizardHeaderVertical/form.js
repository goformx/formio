"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) {
    var panels = ctx.panels.map(function (panel, index) { return "\n    <li class=\" item page-item".concat(ctx.currentPage === index ? " active" : "", "\" style=\"cursor: pointer;\">\n      <span class=\"page-link\" ref=\"").concat(ctx.wizardKey, "-link\" style=\"margin-left: 0px;\">\n        ").concat(ctx.t(panel.title, { _userInput: true }), "\n        ").concat(panel.tooltip && ctx.currentPage === index
        ? "<i ref=\"".concat(ctx.wizardKey, "-tooltip\" class=\"").concat(ctx.iconClass("question-sign"), "\" data-tooltip=\"").concat(panel.tooltip, "\"></i>")
        : "", "\n      </span>\n    </li>\n  "); });
    return "<nav aria-label=\"navigation\" id=\"".concat(ctx.wizardKey, "-header\">\n  <ul class=\"ui vertical fluid tabular menu\">\n    ").concat(panels, "\n  </ul>\n</nav>");
});
