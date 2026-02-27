Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<table class="w-full text-sm border border-border [&_th]:border [&_th]:border-border [&_td]:border [&_td]:border-border">\n  <tbody>\n    <tr>\n      <td>\n        ' +
((__t = (ctx.element)) == null ? '' : __t) +
'\n      </td>\n    </tr>\n    <tr>\n      <td colspan="2">\n        <button class="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors formio-button-add-resource" ref="addResource">\n          <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i>\n          ' +
((__t = (ctx.t(ctx.component.addResourceLabel || 'addResource', { _userInput: !!ctx.component.addResourceLabel }))) == null ? '' : __t) +
'\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n';
return __p
}