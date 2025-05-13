"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = form;
function form(context) {
    var view = context.view, content = context.content, childNodes = context.childNodes;
    return "<div class=\"tree-form\">\n    <div class=\"tree-content\">\n      ".concat(view, "\n      ").concat(content ? "<div class=\"tree-node-content\">".concat(content, "</div>") : "", "\n      ").concat(childNodes && childNodes.length ? "<div class=\"tree-node-children\">".concat(childNodes.join(""), "</div>") : "", "\n    </div>\n  </div>");
}
