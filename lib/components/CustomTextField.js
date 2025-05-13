"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTextField = void 0;
var js_1 = require("@formio/js");
var CustomTextField = /** @class */ (function (_super) {
    __extends(CustomTextField, _super);
    function CustomTextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomTextField.schema = function () {
        return js_1.Components.components.textfield.schema();
    };
    Object.defineProperty(CustomTextField, "builderInfo", {
        get: function () {
            return {
                title: "Custom Text Field",
                group: "basic",
                icon: "fa fa-font",
                weight: 0,
                documentation: "https://formio.github.io/formio.js/app/examples/customcomponents.html",
                schema: CustomTextField.schema(),
            };
        },
        enumerable: false,
        configurable: true
    });
    CustomTextField.prototype.render = function () {
        // You can override the render method to customize the component's appearance
        return _super.prototype.render.call(this);
    };
    return CustomTextField;
}(js_1.Components.components.textfield));
exports.CustomTextField = CustomTextField;
