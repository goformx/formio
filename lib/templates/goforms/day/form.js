"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) {
    var component = ctx.component;
    var t = ctx.t;
    return "<div class=\"ui grid\">\n    ".concat(ctx.dayFirst && ctx.showDay
        ? "\n      <div class=\"four wide column\">\n        <label for=\"".concat(component.key, "-day\" class=\"\">").concat(t("Day"), "</label>\n        ").concat(ctx.day, "\n      </div>\n    ")
        : "", "\n    ").concat(ctx.showMonth
        ? "\n      <div class=\"five wide column\">\n        <label for=\"".concat(component.key, "-month\" class=\"\">").concat(t("Month"), "</label>\n        ").concat(ctx.month, "\n      </div>\n    ")
        : "", "\n    ").concat(!ctx.dayFirst && ctx.showDay
        ? "\n      <div class=\"four wide column\">\n        <label for=\"".concat(component.key, "-day\" class=\"\">").concat(t("Day"), "</label>\n        ").concat(ctx.day, "\n      </div>\n    ")
        : "", "\n    ").concat(ctx.showYear
        ? "\n      <div class=\"seven wide column\">\n        <label for=\"".concat(component.key, "-year\" class=\"\">").concat(t("Year"), "</label>\n        ").concat(ctx.year, "\n      </div>\n    ")
        : "", "\n  </div>");
});
