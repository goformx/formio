Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.options.vpat) { ;
__p += '\n  <span tabindex="-1" class="' +
((__t = ( ctx.cssClasses['form-file-hidden'] )) == null ? '' : __t) +
'" id="invisible-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"></span>\n';
 } ;
__p += '\n';
 if (!ctx.self.imageUpload) { ;
__p += '\n  ';
 if (ctx.options.vpat) { ;
__p += '\n    <div>' +
((__t = ((!ctx.component.filePattern || ctx.component.filePattern === '*') ? ctx.t('anyFileTypesAllowed') : ctx.t('allowedFileTypes') + ': ' + ctx.component.filePattern)) == null ? '' : __t) +
'</div>\n  ';
 } ;
__p += '\n  <ul class="' +
((__t = ( ctx.cssClasses['form-file-list'] )) == null ? '' : __t) +
'">\n    <li class="' +
((__t = ( ctx.cssClasses['form-file-header'] )) == null ? '' : __t) +
'">\n      <div class="' +
((__t = ( ctx.cssClasses['form-file-row'] )) == null ? '' : __t) +
'">\n        <div class="' +
((__t = ( ctx.cssClasses['form-file-name'] )) == null ? '' : __t) +
'"><strong>' +
((__t = (ctx.t('fileName'))) == null ? '' : __t) +
'</strong></div>\n        <div class="' +
((__t = ( ctx.cssClasses['form-file-size'] )) == null ? '' : __t) +
'"><strong>' +
((__t = (ctx.t('size'))) == null ? '' : __t) +
'</strong></div>\n        ';
 if (ctx.self.hasTypes) { ;
__p += '\n          <div class="' +
((__t = ( ctx.cssClasses['form-file-type'] )) == null ? '' : __t) +
'"><strong>' +
((__t = (ctx.t('type'))) == null ? '' : __t) +
'</strong></div>\n        ';
 } ;
__p += '\n        <div class="' +
((__t = ( ctx.cssClasses['form-file-actions'] )) == null ? '' : __t) +
'">\n          ';
 if (ctx.showSyncButton) { ;
__p += '\n            <button\n              class="' +
((__t = ( ctx.cssClasses['form-file-sync'] )) == null ? '' : __t) +
'"\n              ref="syncNow"\n              ';
 if (ctx.disabled || ctx.isSyncing) { ;
__p += 'disabled=true';
 } ;
__p += '\n            >' +
((__t = (ctx.isSyncing ? ctx.t('syncing') : ctx.t('syncNow'))) == null ? '' : __t) +
'</button>\n          ';
 } ;
__p += '\n        </div>\n      </div>\n    </li>\n    ';
 ctx.files.forEach(function(file) { ;
__p += '\n      <li class="' +
((__t = ( ctx.cssClasses['form-file-item'] )) == null ? '' : __t) +
'">\n        <div class="' +
((__t = ( ctx.cssClasses['form-file-row'] )) == null ? '' : __t) +
'">\n          <div class="' +
((__t = ( ctx.cssClasses['form-file-name'] )) == null ? '' : __t) +
'">\n            ';
 if (ctx.component.uploadOnly) { ;
__p += '\n              ' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'\n            ';
 } else { ;
__p += '\n              <a href="' +
((__t = (file.url || '#')) == null ? '' : __t) +
'" target="_blank" ref="fileLink" class="' +
((__t = ( ctx.cssClasses['form-file-link'] )) == null ? '' : __t) +
'">\n                <span class="' +
((__t = ( ctx.cssClasses['form-file-hidden'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.t('pressToOpen') + ' ')) == null ? '' : __t) +
'</span>' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'\n              </a>\n            ';
 } ;
__p += '\n          </div>\n          <div class="' +
((__t = ( ctx.cssClasses['form-file-size'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.fileSize(file.size))) == null ? '' : __t) +
'</div>\n          ';
 if (ctx.self.hasTypes && !ctx.disabled) { ;
__p += '\n            <div class="' +
((__t = ( ctx.cssClasses['form-file-type'] )) == null ? '' : __t) +
'">\n              <select class="' +
((__t = ( ctx.cssClasses['form-file-type-select'] )) == null ? '' : __t) +
'" ref="fileType">\n                ';
 ctx.component.fileTypes.map(function(type) { ;
__p += '\n                  <option value="' +
((__t = ( type.value )) == null ? '' : __t) +
'" ';
 if (type.label === file.fileType) { ;
__p += 'selected="selected"';
 } ;
__p += '>' +
((__t = (ctx.t(type.label))) == null ? '' : __t) +
'</option>\n                ';
 }); ;
__p += '\n              </select>\n            </div>\n          ';
 } ;
__p += '\n          ';
 if (ctx.self.hasTypes && ctx.disabled) { ;
__p += '\n            <div class="' +
((__t = ( ctx.cssClasses['form-file-type'] )) == null ? '' : __t) +
'">' +
((__t = (file.fileType)) == null ? '' : __t) +
'</div>\n          ';
 } ;
__p += '\n          ';
 if (!ctx.disabled) { ;
__p += '\n            <div class="' +
((__t = ( ctx.cssClasses['form-file-actions'] )) == null ? '' : __t) +
'"><i tabindex="0" class="' +
((__t = ( ctx.cssClasses['form-file-remove'] )) == null ? '' : __t) +
' ' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'" ref="removeLink"></i></div>\n          ';
 } ;
__p += '\n        </div>\n      </li>\n    ';
 }) ;
__p += '\n    ';
 ctx.filesToDelete.forEach(function(file) { ;
__p += '\n      <li class="' +
((__t = ( ctx.cssClasses['form-file-item'] )) == null ? '' : __t) +
'">\n        <div class="' +
((__t = ( ctx.cssClasses['form-file-row'] )) == null ? '' : __t) +
'">\n          <div class="' +
((__t = ( ctx.cssClasses['form-file-name'] )) == null ? '' : __t) +
'">\n            <div>' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'</div>\n            <div class="' +
((__t = ( ctx.cssClasses['form-file-status'] )) == null ? '' : __t) +
' ' +
((__t = ( ctx.cssClasses['form-file-status-' + file.status] )) == null ? '' : __t) +
'">' +
((__t = (ctx.t(file.message))) == null ? '' : __t) +
'</div>\n          </div>\n          <div class="' +
((__t = ( ctx.cssClasses['form-file-size'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.fileSize(file.size))) == null ? '' : __t) +
'</div>\n          ';
 if (ctx.self.hasTypes) { ;
__p += '\n            <div class="' +
((__t = ( ctx.cssClasses['form-file-type'] )) == null ? '' : __t) +
'">\n              <select class="' +
((__t = ( ctx.cssClasses['form-file-type-select'] )) == null ? '' : __t) +
'" ref="fileType">\n                ';
 ctx.component.fileTypes.map(function(type) { ;
__p += '\n                  <option value="' +
((__t = ( type.value )) == null ? '' : __t) +
'" ';
 if (type.label === file.fileType) { ;
__p += 'selected="selected"';
 } ;
__p += '>' +
((__t = (ctx.t(type.label))) == null ? '' : __t) +
'</option>\n                ';
 }); ;
__p += '\n              </select>\n            </div>\n          ';
 } ;
__p += '\n          ';
 if (!ctx.isSyncing && file.status !== 'success') { ;
__p += '\n            <div class="' +
((__t = ( ctx.cssClasses['form-file-actions'] )) == null ? '' : __t) +
'"><i tabindex="0" class="' +
((__t = ( ctx.cssClasses['form-file-restore'] )) == null ? '' : __t) +
' ' +
((__t = (ctx.iconClass('arrow-counterclockwise'))) == null ? '' : __t) +
'" ref="restoreFile"></i></div>\n          ';
 } ;
__p += '\n        </div>\n      </li>\n    ';
 }) ;
__p += '\n    ';
 ctx.filesToUpload.forEach(function(file) { ;
__p += '\n      <li class="' +
((__t = ( ctx.cssClasses['form-file-item'] )) == null ? '' : __t) +
'">\n        <div class="' +
((__t = ( ctx.cssClasses['form-file-row'] )) == null ? '' : __t) +
'">\n          <div class="' +
((__t = ( ctx.cssClasses['form-file-name'] )) == null ? '' : __t) +
'">\n            <div>' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'</div>\n            ';
 if (file.status === 'progress') { ;
__p += '\n              <div class="' +
((__t = ( ctx.cssClasses['form-file-progress'] )) == null ? '' : __t) +
'">\n                <div id="' +
((__t = (file.id)) == null ? '' : __t) +
'" class="' +
((__t = ( ctx.cssClasses['form-file-progress-bar'] )) == null ? '' : __t) +
'" role="progressbar" aria-valuenow="' +
((__t = (file.progress)) == null ? '' : __t) +
'" aria-valuemin="0" aria-valuemax="100" style="width: ' +
((__t = (file.progress)) == null ? '' : __t) +
'%" ref="progress">\n                  <span class="' +
((__t = ( ctx.cssClasses['form-file-hidden'] )) == null ? '' : __t) +
'">' +
((__t = (file.progress)) == null ? '' : __t) +
'% ' +
((__t = (ctx.t('completeStatus'))) == null ? '' : __t) +
'</span>\n                </div>\n              </div>\n            ';
 } else { ;
__p += '\n              <div class="' +
((__t = ( ctx.cssClasses['form-file-status'] )) == null ? '' : __t) +
' ' +
((__t = ( ctx.cssClasses['form-file-status-' + file.status] )) == null ? '' : __t) +
'">' +
((__t = (ctx.t(file.message))) == null ? '' : __t) +
'</div>\n            ';
 } ;
__p += '\n          </div>\n          <div class="' +
((__t = ( ctx.cssClasses['form-file-size'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.fileSize(file.size))) == null ? '' : __t) +
'</div>\n          ';
 if (ctx.self.hasTypes) { ;
__p += '\n            <div class="' +
((__t = ( ctx.cssClasses['form-file-type'] )) == null ? '' : __t) +
'">\n              <select class="' +
((__t = ( ctx.cssClasses['form-file-type-select'] )) == null ? '' : __t) +
'" ref="fileType">\n                ';
 ctx.component.fileTypes.map(function(type) { ;
__p += '\n                  <option value="' +
((__t = ( type.value )) == null ? '' : __t) +
'" ';
 if (type.label === file.fileType) { ;
__p += 'selected="selected"';
 } ;
__p += '>' +
((__t = (ctx.t(type.label))) == null ? '' : __t) +
'</option>\n                ';
 }); ;
__p += '\n              </select>\n            </div>\n          ';
 } ;
__p += '\n          ';
 if (file.status === 'progress') { ;
__p += '\n            <div class="' +
((__t = ( ctx.cssClasses['form-file-actions'] )) == null ? '' : __t) +
'"><i id="abort-' +
((__t = (file.id)) == null ? '' : __t) +
'" tabindex="0" class="' +
((__t = ( ctx.cssClasses['form-file-abort'] )) == null ? '' : __t) +
' ' +
((__t = (ctx.iconClass('ban'))) == null ? '' : __t) +
'"></i></div>\n          ';
 } else if (!ctx.isSyncing && file.status !== 'success') { ;
__p += '\n            <div class="' +
((__t = ( ctx.cssClasses['form-file-actions'] )) == null ? '' : __t) +
'"><i tabindex="0" class="' +
((__t = ( ctx.cssClasses['form-file-remove'] )) == null ? '' : __t) +
' ' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'" ref="fileToSyncRemove"></i></div>\n          ';
 } ;
__p += '\n        </div>\n      </li>\n    ';
 }) ;
__p += '\n  </ul>\n';
 } else { ;
__p += '\n  <div class="' +
((__t = ( ctx.cssClasses['form-file-image-container'] )) == null ? '' : __t) +
'">\n    ';
 ctx.files.forEach(function(file) { ;
__p += '\n      <div class="' +
((__t = ( ctx.cssClasses['form-file-image-wrapper'] )) == null ? '' : __t) +
'">\n        <span class="' +
((__t = ( ctx.cssClasses['form-file-image'] )) == null ? '' : __t) +
'">\n          <img ref="fileImage" src="" alt="' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'" style="width:' +
((__t = (ctx.component.imageSize)) == null ? '' : __t) +
'px">\n          ';
 if (!ctx.disabled) { ;
__p += '\n            <i tabindex="0" class="' +
((__t = ( ctx.cssClasses['form-file-remove'] )) == null ? '' : __t) +
' ' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'" ref="removeLink" aria-label="' +
((__t = (ctx.t('removeBtnPressToRemove') + ' ' + (file.originalName || file.name) + ' ' + ctx.t('file'))) == null ? '' : __t) +
'"></i>\n          ';
 } ;
__p += '\n        </span>\n      </div>\n    ';
 }) ;
__p += '\n    ';
 ctx.filesToUpload.forEach(function(file) { ;
__p += '\n      ';
 if (file.status === 'progress') { ;
__p += '\n        <div class="' +
((__t = ( ctx.cssClasses['form-file-size'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.fileSize(file.size))) == null ? '' : __t) +
'</div>\n        <div class="' +
((__t = ( ctx.cssClasses['form-file-progress'] )) == null ? '' : __t) +
'">\n          <div id="' +
((__t = (file.id)) == null ? '' : __t) +
'" class="' +
((__t = ( ctx.cssClasses['form-file-progress-bar'] )) == null ? '' : __t) +
'" role="progressbar" aria-valuenow="' +
((__t = (file.progress)) == null ? '' : __t) +
'" aria-valuemin="0" aria-valuemax="100" style="width: ' +
((__t = (file.progress)) == null ? '' : __t) +
'%" ref="progress">\n            <span class="' +
((__t = ( ctx.cssClasses['form-file-hidden'] )) == null ? '' : __t) +
'">' +
((__t = (file.progress)) == null ? '' : __t) +
'% ' +
((__t = (ctx.t('completeStatus'))) == null ? '' : __t) +
'</span>\n          </div>\n        </div>\n      ';
 } else { ;
__p += '\n        <div class="' +
((__t = ( ctx.cssClasses['form-file-status'] )) == null ? '' : __t) +
' ' +
((__t = ( ctx.cssClasses['form-file-status-' + file.status] )) == null ? '' : __t) +
'">' +
((__t = (ctx.t(file.message))) == null ? '' : __t) +
'</div>\n      ';
 } ;
__p += '\n    ';
 }) ;
__p += '\n  </div>\n';
 } ;
__p += '\n';
 if (!ctx.disabled && (ctx.component.multiple || !ctx.files.length)) { ;
__p += '\n  ';
 if (ctx.self.useWebViewCamera) { ;
__p += '\n    <div class="' +
((__t = ( ctx.cssClasses['form-file-selector'] )) == null ? '' : __t) +
'">\n      <button class="' +
((__t = ( ctx.cssClasses['form-file-gallery'] )) == null ? '' : __t) +
'" ref="galleryButton"><i class="' +
((__t = (ctx.iconClass('book'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('gallery'))) == null ? '' : __t) +
'</button>\n      <button class="' +
((__t = ( ctx.cssClasses['form-file-camera'] )) == null ? '' : __t) +
'" ref="cameraButton"><i class="' +
((__t = (ctx.iconClass('camera'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('camera'))) == null ? '' : __t) +
'</button>\n    </div>\n  ';
 } else if (!ctx.self.cameraMode) { ;
__p += '\n    <div class="' +
((__t = ( ctx.cssClasses['form-file-selector'] )) == null ? '' : __t) +
'" ref="fileDrop" ' +
((__t = (ctx.fileDropHidden ?'hidden' : '')) == null ? '' : __t) +
'>\n      ';
 if (!ctx.self.isMobile.any) { ;
__p += '\n        <i class="' +
((__t = (ctx.iconClass('cloud-upload'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('dropFilesToAttach'))) == null ? '' : __t) +
'\n      ';
 } ;
__p += '\n      ';
 if (ctx.self.imageUpload && ctx.component.webcam) { ;
__p += '\n        <a href="#" ref="toggleCameraMode" class="' +
((__t = ( ctx.cssClasses['form-file-camera-toggle'] )) == null ? '' : __t) +
'"><i class="' +
((__t = (ctx.iconClass('camera'))) == null ? '' : __t) +
'"></i>' +
((__t = (ctx.t('useCamera'))) == null ? '' : __t) +
'</a>\n        ' +
((__t = (ctx.t('or'))) == null ? '' : __t) +
'\n      ';
 } ;
__p += '\n      <a href="#" ref="fileBrowse" class="' +
((__t = ( ctx.cssClasses['form-file-browse'] )) == null ? '' : __t) +
'">\n        ';
 if (ctx.self.isMobile.any && ctx.component.capture) { ;
__p += '\n          ';
 if (ctx.component.filePattern && ctx.component.filePattern.includes("video")) { ;
__p += '\n            <i class="' +
((__t = (ctx.iconClass('video'))) == null ? '' : __t) +
'"></i>' +
((__t = (ctx.t('captureVideo'))) == null ? '' : __t) +
'\n          ';
 } else if (ctx.component.filePattern && ctx.component.filePattern.includes("audio")) { ;
__p += '\n            <i class="' +
((__t = (ctx.iconClass('microphone'))) == null ? '' : __t) +
'"></i>' +
((__t = (ctx.t('captureAudio'))) == null ? '' : __t) +
'\n          ';
 } else { ;
__p += '\n            <i class="' +
((__t = (ctx.iconClass('camera'))) == null ? '' : __t) +
'"></i>' +
((__t = (ctx.t('captureImage'))) == null ? '' : __t) +
'\n          ';
 } ;
__p += '\n        ';
 } else { ;
__p += '\n          <i class="' +
((__t = (ctx.iconClass('folder-open'))) == null ? '' : __t) +
'"></i>' +
((__t = (ctx.t('browseFiles'))) == null ? '' : __t) +
'\n        ';
 } ;
__p += '\n        <span class="' +
((__t = ( ctx.cssClasses['form-file-hidden'] )) == null ? '' : __t) +
'">\n          ' +
((__t = (ctx.t('browseToAttachFileFor') + ' ' + ctx.t(ctx.component.label, { _userInput: true }) + '. ' +
            (ctx.component.description ? ctx.t(ctx.component.description, { _userInput: true }) + '. ' : '') +
            ((!ctx.component.filePattern || ctx.component.filePattern === '*') ? ctx.t('anyFileTypesAllowed') : ctx.t('allowedFileTypes') + ': ' + ctx.component.filePattern))) == null ? '' : __t) +
'\n        </span>\n      </a>\n      <div ref="fileProcessingLoader" class="' +
((__t = ( ctx.cssClasses['form-file-loader-wrapper'] )) == null ? '' : __t) +
'">\n        <div class="' +
((__t = ( ctx.cssClasses['form-file-loader'] )) == null ? '' : __t) +
'"></div>\n      </div>\n    </div>\n  ';
 } else { ;
__p += '\n    <div class="' +
((__t = ( ctx.cssClasses['form-file-video-container'] )) == null ? '' : __t) +
'">\n      <video class="' +
((__t = ( ctx.cssClasses['form-file-video'] )) == null ? '' : __t) +
'" autoplay="true" ref="videoPlayer" tabindex="-1"></video>\n    </div>\n    <button class="' +
((__t = ( ctx.cssClasses['form-file-take-picture'] )) == null ? '' : __t) +
'" ref="takePictureButton"><i class="' +
((__t = (ctx.iconClass('camera'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('takePicture'))) == null ? '' : __t) +
'</button>\n    <button class="' +
((__t = ( ctx.cssClasses['form-file-camera-toggle'] )) == null ? '' : __t) +
'" ref="toggleCameraMode">' +
((__t = (ctx.t('switchToFileUpload'))) == null ? '' : __t) +
'</button>\n  ';
 } ;
__p += '\n';
 } ;
__p += '\n';
 if (!ctx.component.storage || ctx.support.hasWarning) { ;
__p += '\n  <div class="' +
((__t = ( ctx.cssClasses['form-file-warning'] )) == null ? '' : __t) +
'">\n    ';
 if (!ctx.component.storage) { ;
__p += '\n      <p>' +
((__t = (ctx.t('noStorageSet'))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n    ';
 if (!ctx.support.filereader) { ;
__p += '\n      <p>' +
((__t = (ctx.t('noFileApiSupport'))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n    ';
 if (!ctx.support.formdata) { ;
__p += '\n      <p>' +
((__t = (ctx.t('noFormDataSupport'))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n    ';
 if (!ctx.support.progress) { ;
__p += '\n      <p>' +
((__t = (ctx.t('noProgressSupport'))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n  </div>\n';
 } ;
__p += '\n';
return __p
}