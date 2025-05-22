Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="<%= cssClasses[\'form-pdf\'] %> ' +
((__t = (ctx.classes)) == null ? '' : __t) +
'" ref="webform">\n	<div class="<%= cssClasses[\'form-pdf-toolbar\'] %>">\n		<span data-noattach="true" ref="zoomIn" class="<%= cssClasses[\'form-pdf-zoom-in\'] %>">\n			<i class="' +
((__t = ( ctx.iconClass('zoom-in') )) == null ? '' : __t) +
'"></i>\n		</span>\n		<span data-noattach="true" ref="zoomOut" class="<%= cssClasses[\'form-pdf-zoom-out\'] %>">\n			<i class="' +
((__t = ( ctx.iconClass('zoom-out') )) == null ? '' : __t) +
'"></i>\n		</span>\n	</div>\n	<div class="<%= cssClasses[\'form-pdf-container\'] %>" data-noattach="true" ref="iframeContainer"></div>\n	' +
((__t = ( ctx.submitButton )) == null ? '' : __t) +
'\n</div>\n';
return __p
}