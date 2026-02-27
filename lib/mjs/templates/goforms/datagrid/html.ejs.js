export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="w-full text-sm datagrid-table [&_th]:border [&_th]:border-border [&_td]:border [&_td]:border-border\n    ' +
((__t = ( ctx.component.striped ? '[&_tbody_tr:nth-child(odd)]:bg-muted/50' : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.hover ? '[&_tbody_tr:hover]:bg-muted' : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.condensed ? '[&_th]:px-2 [&_th]:py-1 [&_td]:px-2 [&_td]:py-1' : '[&_th]:px-4 [&_th]:py-2 [&_td]:px-4 [&_td]:py-2')) == null ? '' : __t) +
'\n    ">\n  ';
 if (ctx.hasHeader) { ;
__p += '\n  <thead>\n    <tr>\n      ';
 ctx.columns.forEach(function(col) { ;
__p += '\n        <th class="' +
((__t = (col.validate && col.validate.required ? 'after:content-[\"*\"] after:ml-0.5 after:text-destructive' : '')) == null ? '' : __t) +
'">\n          ' +
((__t = ( col.hideLabel ? '' : ctx.t(col.label || col.title, { _userInput: true }) )) == null ? '' : __t) +
'\n          ';
 if (col.tooltip) { ;
__p += ' <i ref="tooltip" tabindex="0" data-title="' +
((__t = (col.tooltip)) == null ? '' : __t) +
'" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-muted-foreground" data-tooltip="' +
((__t = (col.tooltip)) == null ? '' : __t) +
'"></i>';
 } ;
__p += '\n        </th>\n      ';
 }) ;
__p += '\n    </tr>\n  </thead>\n  ';
 } ;
__p += '\n  <tbody>\n    ';
 ctx.rows.forEach(function(row) { ;
__p += '\n    <tr>\n      ';
 ctx.columns.forEach(function(col) { ;
__p += '\n        <td ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'">\n          ' +
((__t = (row[col.key])) == null ? '' : __t) +
'\n        </td>\n      ';
 }) ;
__p += '\n    </tr>\n    ';
 }) ;
__p += '\n  </tbody>\n</table>\n';
return __p
}