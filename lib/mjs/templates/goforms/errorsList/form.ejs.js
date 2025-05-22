export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<p class="<%= cssClasses[\'form-errors-title\'] %>">' +
((__t = (ctx.t('error'))) == null ? '' : __t) +
'\n  ';
 if (ctx.options.vpat) { ;
__p += '\n  <span ref="errorTooltip" class="<%= cssClasses[\'form-errors-tooltip\'] %> ' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
'" tabindex="0"></span>\n  ';
 } ;
__p += '\n</p>\n<ul class="<%= cssClasses[\'form-errors-list\'] %>">\n  ';
 ctx.errors.forEach(function(err) { ;
__p += '\n  <li class="<%= cssClasses[\'form-errors-item\'] %>">\n    <span\n      class="<%= cssClasses[\'form-errors-link\'] %>"\n      data-component-key = "' +
((__t = (err.keyOrPath)) == null ? '' : __t) +
'"\n      ref = "errorRef"\n      tabIndex = "0"\n      role="link"\n    >\n      ' +
((__t = (err.message)) == null ? '' : __t) +
'\n    </span>\n  </li>\n  ';
 }) ;
__p += '\n</ul>\n';
return __p
}