"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signature = {
    form: function (context) {
        var component = context.component, input = context.input, element = context.element;
        var width = (element === null || element === void 0 ? void 0 : element.width) || 300;
        var height = (element === null || element === void 0 ? void 0 : element.height) || 200;
        var backgroundColor = (element === null || element === void 0 ? void 0 : element.backgroundColor) || "#ffffff";
        return "\n      <div class=\"signature-pad-container\">\n        <label for=\"".concat(input.ref, "\">").concat(component.label, "</label>\n        <div class=\"signature-pad\" \n             style=\"width: ").concat(width, "px; height: ").concat(height, "px; background-color: ").concat(backgroundColor, ";\">\n          <canvas id=\"").concat(input.ref, "\" \n                  width=\"").concat(width, "\" \n                  height=\"").concat(height, "\"\n                  style=\"border: 1px solid #ccc;\"></canvas>\n        </div>\n        <input type=\"hidden\" \n               name=\"").concat(input.name, "\" \n               value=\"").concat(input.value, "\" \n               ref=\"").concat(input.ref, "\" />\n        <button type=\"button\" class=\"btn btn-secondary clear-signature\">Clear</button>\n      </div>\n    ");
    },
};
exports.default = signature;
