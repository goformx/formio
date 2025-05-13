"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (ctx) {
    // Type assertions for known structure
    var group = ctx.group;
    var t = ctx.t;
    var iconClass = ctx.iconClass;
    var subgroups = ctx.subgroups;
    var components = group.componentOrder
        .map(function (componentKey) {
        var component = group.components[componentKey];
        return "<span\n      data-group=\"".concat(ctx.groupKey, "\"\n      data-key=\"").concat(component.key, "\"\n      data-type=\"").concat(component.schema.type, "\"\n      class=\"ui button mini primary fluid formcomponent drag-copy\"\n    >\n      ").concat(component.icon ? "<i class=\"".concat(iconClass(component.icon), "\" style=\"margin-right: 5px;\"></i>") : "", "\n      ").concat(t(component.title), "\n    </span>");
    })
        .join("");
    return "<div class=\"ui segment secondary form-builder-panel\" style=\"padding: 0\" ref=\"group-panel-".concat(ctx.groupKey, "\">\n    <div class=\"form-builder-group-header\">\n      <h5 class=\"panel-title\">\n        <button\n          class=\"ui button basic fluid builder-group-button\"\n          type=\"button\"\n          data-toggle=\"collapse\"\n          data-target=\"#group-").concat(ctx.groupKey, "\"\n          data-parent=\"").concat(ctx.groupId, "\"\n          ref=\"sidebar-anchor\"\n        >\n          ").concat(t(group.title), "\n        </button>\n      </h5>\n    </div>\n  </div>\n  <div class=\"ui segment\" style=\"padding: 0\">\n    <div\n      class=\"panel-collapse collapse ").concat(group.default ? " in" : "", "\"\n      data-parent=\"#").concat(ctx.groupId, "\"\n      data-default=\"").concat(group.default, "\"\n      id=\"group-").concat(ctx.groupKey, "\"\n      ref=\"sidebar-group\"\n    >\n      <div id=\"group-container-").concat(ctx.groupKey, "\" class=\"card-body panel-body no-drop\" ref=\"sidebar-container\">\n        ").concat(components, "\n        ").concat(subgroups.join(""), "\n      </div>\n    </div>\n  </div>");
});
