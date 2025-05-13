"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTextField = exports.Components = exports.registerCustomComponents = void 0;
var js_1 = require("@formio/js");
Object.defineProperty(exports, "Components", { enumerable: true, get: function () { return js_1.Components; } });
var CustomTextField_1 = require("./CustomTextField");
Object.defineProperty(exports, "CustomTextField", { enumerable: true, get: function () { return CustomTextField_1.CustomTextField; } });
// Register custom components
var registerCustomComponents = function () {
    js_1.Components.addComponent("customtextfield", CustomTextField_1.CustomTextField);
};
exports.registerCustomComponents = registerCustomComponents;
