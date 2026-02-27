export default function(ctx) {
var __t, __p = '';
__p += '<div id="e-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.key)) == null ? '' : __t) +
'" class="text-sm text-muted-foreground ' +
((__t = (ctx.level || 'error')) == null ? '' : __t) +
'">' +
((__t = (ctx.message)) == null ? '' : __t) +
'</div>\n';
return __p
}