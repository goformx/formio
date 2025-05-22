export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n';
 ctx.children.forEach(function(component) { ;
__p += '\n  <td class="<%= cssClasses[\'form-table-component\'] %>">\n    ' +
((__t = ( component )) == null ? '' : __t) +
'\n  </td>\n';
 }) ;
__p += '\n';
return __p
}