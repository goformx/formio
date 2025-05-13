"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) {
    // Type assertions for known structure
    var pages = ctx.pages;
    var self = ctx.self;
    var t = ctx.t;
    var iconClass = ctx.iconClass;
    var sidebar = ctx.sidebar;
    var form = ctx.form;
    var pageBreadcrumbs = pages
        .map(function (page, pageIndex) { return "\n        <div title=\"".concat(page.title, "\" class=\"").concat(pageIndex === self.page ? "active section" : "section", " wizard-page-label\" ref=\"gotoPage\">").concat(page.title, "</div>\n        <div class=\"divider\">/</div>\n      "); })
        .join("");
    return "<div class=\"formio builder ui grid formbuilder\">\n    <div class=\"four wide column formcomponents\">\n      ".concat(sidebar, "\n    </div>\n    <div class=\"twelve wide column formarea\">\n      <div class=\"ui breadcrumb\" style=\"margin-bottom: 0.5em\">\n        ").concat(pageBreadcrumbs, "\n        <div title=\"").concat(t("Create Page"), "\" class=\"section wizard-page-label\" ref=\"addPage\"><i class=\"").concat(iconClass("plus"), "\"></i> ").concat(t("Page"), "</div>\n      </div>\n      <div ref=\"form\">\n        ").concat(form, "\n      </div>\n    </div>\n  </div>");
});
