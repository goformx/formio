"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transform_1 = require("./transform");
var cssClasses_1 = require("./cssClasses");
var iconClass_1 = require("./iconClass");
var button_1 = require("./button");
var checkbox_1 = require("./checkbox");
var columns_1 = require("./columns");
var component_1 = require("./component");
var fieldset_1 = require("./fieldset");
var input_1 = require("./input");
var panel_1 = require("./panel");
var radio_1 = require("./radio");
var select_1 = require("./select");
exports.default = {
    framework: 'goforms',
    transform: transform_1.transform,
    defaultIconset: 'icon',
    iconClass: iconClass_1.default,
    cssClasses: cssClasses_1.default,
    button: button_1.default,
    checkbox: checkbox_1.default,
    columns: columns_1.default,
    component: component_1.default,
    fieldset: fieldset_1.default,
    input: input_1.default,
    panel: panel_1.default,
    radio: radio_1.default,
    select: select_1.default,
};
