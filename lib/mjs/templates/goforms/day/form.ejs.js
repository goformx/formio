export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="' +
((__t = ( ctx.cssClasses['form-day'] )) == null ? '' : __t) +
'" role="group"\n  ';
 if (ctx.component.hideLabel) { ;
__p += '\n  aria-label="' +
((__t = (ctx.component.label)) == null ? '' : __t) +
'"\n  ';
 } else { ;
__p += '\n  aria-labelledby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n  ';
 } ;
__p += '\n  ';
 if (ctx.component.description) { ;
__p += '\n  aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n  ';
 } ;
__p += '\n  >\n  ';
 if (ctx.dayFirst && ctx.showDay) { ;
__p += '\n  <div class="' +
((__t = ( ctx.cssClasses['form-day-field'] )) == null ? '' : __t) +
'">\n    ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\n    <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day" class="' +
((__t = ( ctx.cssClasses['form-day-label'] )) == null ? '' : __t) +
' ';
 if(ctx.component.fields.day.required) { ;
__p +=
((__t = ( ctx.cssClasses['form-day-required'] )) == null ? '' : __t);
 } ;
__p += '">' +
((__t = (ctx.t('day'))) == null ? '' : __t) +
'</label>\n    ';
 } ;
__p += '\n    <div class="' +
((__t = ( ctx.cssClasses['form-day-input'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.day)) == null ? '' : __t) +
'</div>\n  </div>\n  ';
 } ;
__p += '\n  ';
 if (ctx.showMonth) { ;
__p += '\n  <div class="' +
((__t = ( ctx.cssClasses['form-day-field'] )) == null ? '' : __t) +
'">\n    ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\n    <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-month" class="' +
((__t = ( ctx.cssClasses['form-day-label'] )) == null ? '' : __t) +
' ';
 if(ctx.component.fields.month.required) { ;
__p +=
((__t = ( ctx.cssClasses['form-day-required'] )) == null ? '' : __t);
 } ;
__p += '">' +
((__t = (ctx.t('month'))) == null ? '' : __t) +
'</label>\n    ';
 } ;
__p += '\n    <div class="' +
((__t = ( ctx.cssClasses['form-day-input'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.month)) == null ? '' : __t) +
'</div>\n  </div>\n  ';
 } ;
__p += '\n  ';
 if (!ctx.dayFirst && ctx.showDay) { ;
__p += '\n  <div class="' +
((__t = ( ctx.cssClasses['form-day-field'] )) == null ? '' : __t) +
'">\n    ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\n    <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day" class="' +
((__t = ( ctx.cssClasses['form-day-label'] )) == null ? '' : __t) +
' ';
 if(ctx.component.fields.day.required) { ;
__p +=
((__t = ( ctx.cssClasses['form-day-required'] )) == null ? '' : __t);
 } ;
__p += '">' +
((__t = (ctx.t('day'))) == null ? '' : __t) +
'</label>\n    ';
 } ;
__p += '\n    <div class="' +
((__t = ( ctx.cssClasses['form-day-input'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.day)) == null ? '' : __t) +
'</div>\n  </div>\n  ';
 } ;
__p += '\n  ';
 if (ctx.showYear) { ;
__p += '\n  <div class="' +
((__t = ( ctx.cssClasses['form-day-field'] )) == null ? '' : __t) +
'">\n    ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\n    <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-year" class="' +
((__t = ( ctx.cssClasses['form-day-label'] )) == null ? '' : __t) +
' ';
 if(ctx.component.fields.year.required) { ;
__p +=
((__t = ( ctx.cssClasses['form-day-required'] )) == null ? '' : __t);
 } ;
__p += '">' +
((__t = (ctx.t('year'))) == null ? '' : __t) +
'</label>\n    ';
 } ;
__p += '\n    <div class="' +
((__t = ( ctx.cssClasses['form-day-input'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.year)) == null ? '' : __t) +
'</div>\n  </div>\n  ';
 } ;
__p += '\n</div>\n<input name="ctx.data[day]" type="hidden" class="' +
((__t = ( ctx.cssClasses['form-day-hidden'] )) == null ? '' : __t) +
'" lang="en" value="" ref="input">\n';
return __p
}