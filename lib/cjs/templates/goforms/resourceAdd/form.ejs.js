Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div class="' +
((__t = ( ctx.cssClasses['form-resource'] )) == null ? '' : __t) +
'">\n  <div class="' +
((__t = ( ctx.cssClasses['form-resource-content'] )) == null ? '' : __t) +
'">\n    ' +
((__t = (ctx.element)) == null ? '' : __t) +
'\n  </div>\n  <div class="' +
((__t = ( ctx.cssClasses['form-resource-actions'] )) == null ? '' : __t) +
'">\n    <button class="' +
((__t = ( ctx.cssClasses['form-resource-add'] )) == null ? '' : __t) +
'" ref="addResource">\n      <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i>\n      ' +
((__t = (ctx.t(ctx.component.addResourceLabel || 'addResource', { _userInput: !!ctx.component.addResourceLabel }))) == null ? '' : __t) +
'\n    </button>\n  </div>\n</div>\n';
return __p
}