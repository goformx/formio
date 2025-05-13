"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) {
    var cancelButton = ctx.buttons.cancel
        ? "<div class=\"item\">\n    <button class=\"ui button secondary btn-wizard-nav-cancel\" ref=\"".concat(ctx.wizardKey, "-cancel\">").concat(ctx.t("cancel"), "</button>\n  </div>")
        : "";
    var previousButton = ctx.buttons.previous
        ? "<div class=\"item\">\n    <button class=\"ui button primary btn-wizard-nav-previous\" ref=\"".concat(ctx.wizardKey, "-previous\">").concat(ctx.t("previous"), "</button>\n  </div>")
        : "";
    var nextButton = ctx.buttons.next
        ? "<div class=\"item\">\n    <button class=\"ui button primary btn-wizard-nav-next\" ref=\"".concat(ctx.wizardKey, "-next\">").concat(ctx.t("next"), "</button>\n  </div>")
        : "";
    var submitButton = ctx.buttons.submit
        ? "<div class=\"item\">\n    <button class=\"ui button primary btn-wizard-nav-submit\" ref=\"".concat(ctx.wizardKey, "-submit\">").concat(ctx.t("submit"), "</button>\n  </div>")
        : "";
    return "<div class=\"ui horizontal list\" id=\"".concat(ctx.wizardKey, "-nav\">\n  ").concat(cancelButton, "\n  ").concat(previousButton, "\n  ").concat(nextButton, "\n  ").concat(submitButton, "\n  </div>");
});
