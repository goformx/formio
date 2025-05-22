Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="<%= cssClasses[\'form-pdf-builder-upload\'] %>">\n  <h3 class="<%= cssClasses[\'form-label\'] %>">' +
((__t = (ctx.t('uploadPdfFile'))) == null ? '' : __t) +
'</h3>\n  <input type="file" style="opacity: 0; position: absolute;" tabindex="-1" accept=".pdf" ref="hiddenFileInputElement">\n  <div class="<%= cssClasses[\'form-pdf-builder-upload-dropzone\'] %>" ref="fileDrop">\n    <span ref="dragDropText">\n      <i class="' +
((__t = (ctx.iconClass('cloud-upload'))) == null ? '' : __t) +
'"></i>' +
((__t = (ctx.t('dropToStart'))) == null ? '' : __t) +
' <a href="#" ref="fileBrowse" class="<%= cssClasses[\'form-pdf-builder-upload-browse\'] %>">' +
((__t = (ctx.t('browse'))) == null ? '' : __t) +
'</a>\n    </span>\n    <div class="<%= cssClasses[\'form-pdf-builder-upload-progress\'] %>" ref="uploadProgressWrapper" style="display:none;">\n      <div class="<%= cssClasses[\'form-pdf-builder-upload-progress-bar\'] %>" ref="uploadProgress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>\n    </div>\n  </div>\n  <div class="<%= cssClasses[\'form-message\'] %> <%= cssClasses[\'form-message-error\'] %>" ref="uploadError">\n  </div>\n</div>\n\n';
return __p
}