export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="grid grid-cols-12 gap-4">\n';
 ctx.component.columns.forEach(function(column, index) { ;
__p += '\n<div class="col-span-' +
((__t = (column.currentWidth)) == null ? '' : __t);
 if (column.offset) { ;
__p += ' col-start-' +
((__t = (column.offset + 1)) == null ? '' : __t);
 } ;
__p += '"\n    ref="' +
((__t = (ctx.columnKey)) == null ? '' : __t) +
'">\n  ' +
((__t = (ctx.columnComponents[index])) == null ? '' : __t) +
'\n</div>\n';
 }) ;
__p += '\n</div>\n';
return __p
}