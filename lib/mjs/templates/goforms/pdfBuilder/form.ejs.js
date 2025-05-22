export default function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="<%= cssClasses[\'form-pdf-builder\'] %>">\n  <div class="<%= cssClasses[\'form-pdf-builder-sidebar\'] %>">\n    ' +
((__t = (ctx.sidebar)) == null ? '' : __t) +
'\n  </div>\n  <div class="<%= cssClasses[\'form-pdf-builder-area\'] %>" ref="form">\n    <div class="<%= cssClasses[\'form-pdf-builder-dropzone\'] %>" ref="iframeDropzone"></div>\n    ' +
((__t = (ctx.form)) == null ? '' : __t) +
'\n  </div>\n</div>\n';
return __p
}