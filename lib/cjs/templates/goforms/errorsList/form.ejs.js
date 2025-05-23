Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<p class="' +
((__t = ( ctx.cssClasses['form-errors-title'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.t('error'))) == null ? '' : __t) +
'\n  ';
 if (ctx.options.vpat) { ;
__p += '\n  <span ref="errorTooltip" class="' +
((__t = ( ctx.cssClasses['form-errors-tooltip'] )) == null ? '' : __t) +
' ' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
'" tabindex="0"></span>\n  ';
 } ;
__p += '\n</p>\n<ul class="' +
((__t = ( ctx.cssClasses['form-errors-list'] )) == null ? '' : __t) +
'">\n  ';
 ctx.errors.forEach(function(err) { ;
__p += '\n  <li class="' +
((__t = ( ctx.cssClasses['form-errors-item'] )) == null ? '' : __t) +
'">\n    <span\n      class="' +
((__t = ( ctx.cssClasses['form-errors-link'] )) == null ? '' : __t) +
'"\n      data-component-key = "' +
((__t = (err.keyOrPath)) == null ? '' : __t) +
'"\n      ref = "errorRef"\n      tabIndex = "0"\n      role="link"\n    >\n      ' +
((__t = (err.message)) == null ? '' : __t) +
'\n    </span>\n  </li>\n  ';
 }) ;
__p += '\n</ul>\n';
return __p
}