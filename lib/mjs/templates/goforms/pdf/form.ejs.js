export default function(ctx) {
var __t, __p = '';
__p += '<div class="' +
((__t = ( ctx.cssClasses['form-pdf'] )) == null ? '' : __t) +
' ' +
((__t = (ctx.classes)) == null ? '' : __t) +
'" ref="webform">\n	<div class="' +
((__t = ( ctx.cssClasses['form-pdf-toolbar'] )) == null ? '' : __t) +
'">\n		<span data-noattach="true" ref="zoomIn" class="' +
((__t = ( ctx.cssClasses['form-pdf-zoom-in'] )) == null ? '' : __t) +
'">\n			<i class="' +
((__t = ( ctx.iconClass('zoom-in') )) == null ? '' : __t) +
'"></i>\n		</span>\n		<span data-noattach="true" ref="zoomOut" class="' +
((__t = ( ctx.cssClasses['form-pdf-zoom-out'] )) == null ? '' : __t) +
'">\n			<i class="' +
((__t = ( ctx.iconClass('zoom-out') )) == null ? '' : __t) +
'"></i>\n		</span>\n	</div>\n	<div class="' +
((__t = ( ctx.cssClasses['form-pdf-container'] )) == null ? '' : __t) +
'" data-noattach="true" ref="iframeContainer"></div>\n	' +
((__t = ( ctx.submitButton )) == null ? '' : __t) +
'\n</div>\n';
return __p
}