export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div\n  class="form-alert form-alert-' +
((__t = (ctx.type)) == null ? '' : __t) +
'"\n  ';
 for (var attr in ctx.attrs) { ;
__p += '\n    ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.attrs[attr])) == null ? '' : __t) +
'"\n  ';
 } ;
__p += '\n>\n  ';
 if (ctx.icon) { ;
__p += '\n    <i class="form-alert-icon ' +
((__t = (ctx.iconClass(ctx.icon))) == null ? '' : __t) +
'"></i>\n  ';
 } ;
__p += '\n  <div class="form-alert-content">\n    ' +
((__t = (ctx.message)) == null ? '' : __t) +
'\n  </div>\n  ';
 if (ctx.options.vpat) { ;
__p += '\n    <span class="visually-hidden" id="hotkey-i-' +
((__t = (ctx.form._id)) == null ? '' : __t) +
'">' +
((__t = (ctx.t('errorListHotkey'))) == null ? '' : __t) +
'</span>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}