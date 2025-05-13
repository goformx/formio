"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(ctx) {
    var t = ctx.t;
    var iconClass = ctx.iconClass;
    var component = ctx.component;
    return "<table class=\"ui table celled\">\n    <tbody>\n      <tr>\n        <td>\n          ".concat(ctx.element, "\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"2\">\n          <button class=\"ui button primary\" ref=\"addResource\">\n            <i class=\"").concat(iconClass("plus"), "\"></i>\n            ").concat(t(component.addResourceLabel || "Add Resource"), "\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  ");
}
