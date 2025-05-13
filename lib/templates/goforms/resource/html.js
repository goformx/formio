"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) { return "\n  <div class=\"ui resource input\">\n    <input\n      type=\"text\"\n      name=\"".concat(ctx.input.name, "\"\n      value=\"").concat(ctx.input.value, "\"\n      ref=\"").concat(ctx.input.ref, "\"\n      ").concat(ctx.component.resource ? "data-resource=\"".concat(ctx.component.resource, "\"") : "", "\n      ").concat(ctx.component.template ? "data-template=\"".concat(ctx.component.template, "\"") : "", "\n      ").concat(ctx.component.searchField ? "data-search-field=\"".concat(ctx.component.searchField, "\"") : "", "\n      ").concat(ctx.component.searchDebounce ? "data-search-debounce=\"".concat(ctx.component.searchDebounce, "\"") : "", "\n      ").concat(ctx.component.minSearch ? "data-min-search=\"".concat(ctx.component.minSearch, "\"") : "", "\n      ").concat(ctx.component.filter ? "data-filter=\"".concat(ctx.component.filter, "\"") : "", "\n      ").concat(ctx.component.selectFields ? "data-select-fields=\"".concat(ctx.component.selectFields, "\"") : "", "\n      ").concat(ctx.component.sort ? "data-sort=\"".concat(ctx.component.sort, "\"") : "", "\n      ").concat(ctx.component.refreshOn ? "data-refresh-on=\"".concat(ctx.component.refreshOn, "\"") : "", "\n      ").concat(ctx.component.clearOnRefresh ? "data-clear-on-refresh" : "", "\n      ").concat(ctx.component.clearOnHide ? "data-clear-on-hide" : "", "\n      ").concat(ctx.component.allowCreate ? "data-allow-create" : "", "\n      ").concat(ctx.component.allowEdit ? "data-allow-edit" : "", "\n      ").concat(ctx.component.allowDelete ? "data-allow-delete" : "", "\n      ").concat(ctx.input.attr
    ? Object.entries(ctx.input.attr)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return "".concat(key, "=\"").concat(value, "\"");
    })
        .join(" ")
    : "", "\n    />\n  </div>\n"); });
