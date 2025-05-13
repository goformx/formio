"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) {
    var iconClass = ctx.iconClass;
    var html = ctx.html;
    return "<div class=\"builder-component\" ref=\"dragComponent\">\n    <div class=\"component-btn-group\" data-noattach=\"true\">\n      <div class=\"ui button mini icon primary component-settings-button-edit\" ref=\"editComponent\">\n        <i class=\"".concat(iconClass("cog"), "\"></i>\n      </div>\n      <div class=\"ui button mini icon component-settings-button-copy\" ref=\"copyComponent\">\n        <i class=\"").concat(iconClass("copy"), "\"></i>\n      </div>\n      <div class=\"ui button mini icon component-settings-button-paste\" ref=\"pasteComponent\">\n        <i class=\"").concat(iconClass("save"), "\"></i>\n      </div>\n      <div class=\"ui button mini icon component-settings-button-edit-json\" ref=\"editJson\">\n        <i class=\"").concat(iconClass("wrench"), "\"></i>\n      </div>\n      <div class=\"ui button mini icon component-settings-button-move\" ref=\"moveComponent\">\n        <i class=\"").concat(iconClass("move"), "\"></i>\n      </div>\n      <div class=\"ui button mini icon secondary component-settings-button-remove\" ref=\"removeComponent\">\n        <i class=\"").concat(iconClass("remove"), "\"></i>\n      </div>\n    </div>\n    ").concat(html, "\n  </div>");
});
