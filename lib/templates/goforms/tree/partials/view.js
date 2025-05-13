"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) { return "<div class=\"ui grid\">\n  <div class=\"row\">\n    ".concat(ctx.values
    .map(function (value) { return "\n      <div class=\"two wide column\">\n        ".concat(value, "\n      </div>\n    "); })
    .join(""), "\n    <div class=\"five wide column\">\n      <div class=\"ui mini right floated buttons\">\n        ").concat(ctx.node.hasChildren
    ? "\n          <button ref=\"toggleNode\" class=\"ui button toggleNode\">".concat(ctx.t(ctx.node.collapsed ? "Expand" : "Collapse"), "</button>\n          <div class=\"or\"></div>\n        ")
    : "", "\n        ").concat(!ctx.readOnly
    ? "\n          <button ref=\"addChild\" class=\"ui button primary addChild\">".concat(ctx.t("Add"), "</button>\n          <div class=\"or\"></div>\n          <button ref=\"editNode\" class=\"ui button editNode\">").concat(ctx.t("Edit"), "</button>\n          <div class=\"or\"></div>\n          <button ref=\"removeNode\" class=\"ui button negative removeNode\">").concat(ctx.t("Delete"), "</button>\n          ").concat(ctx.node.revertAvailable
        ? "\n            <div class=\"or\"></div>\n            <button ref=\"revertNode\" class=\"ui button negative revertNode\">".concat(ctx.t("Revert"), "</button>\n          ")
        : "", "\n        ")
    : "", "\n      </div>\n    </div>\n  </div>\n</div>"); });
