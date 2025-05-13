"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = html;
function html(context) {
    var selected = context.selected, option = context.option;
    var label = option.label;
    return selected ? label : "";
}
