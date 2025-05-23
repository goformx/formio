export default function(ctx) {
var __t, __p = '';
__p += '<div class="' +
((__t = ( ctx.cssClasses['form-pdf-builder-upload'] )) == null ? '' : __t) +
'">\n  <h3 class="' +
((__t = ( ctx.cssClasses['form-label'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.t('uploadPdfFile'))) == null ? '' : __t) +
'</h3>\n  <input type="file" style="opacity: 0; position: absolute;" tabindex="-1" accept=".pdf" ref="hiddenFileInputElement">\n  <div class="' +
((__t = ( ctx.cssClasses['form-pdf-builder-upload-dropzone'] )) == null ? '' : __t) +
'" ref="fileDrop">\n    <span ref="dragDropText">\n      <i class="' +
((__t = (ctx.iconClass('cloud-upload'))) == null ? '' : __t) +
'"></i>' +
((__t = (ctx.t('dropToStart'))) == null ? '' : __t) +
' <a href="#" ref="fileBrowse" class="' +
((__t = ( ctx.cssClasses['form-pdf-builder-upload-browse'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.t('browse'))) == null ? '' : __t) +
'</a>\n    </span>\n    <div class="' +
((__t = ( ctx.cssClasses['form-pdf-builder-upload-progress'] )) == null ? '' : __t) +
'" ref="uploadProgressWrapper" style="display:none;">\n      <div class="' +
((__t = ( ctx.cssClasses['form-pdf-builder-upload-progress-bar'] )) == null ? '' : __t) +
'" ref="uploadProgress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>\n    </div>\n  </div>\n  <div class="' +
((__t = ( ctx.cssClasses['form-message'] )) == null ? '' : __t) +
' ' +
((__t = ( ctx.cssClasses['form-message-error'] )) == null ? '' : __t) +
'" ref="uploadError">\n  </div>\n</div>\n\n';
return __p
}