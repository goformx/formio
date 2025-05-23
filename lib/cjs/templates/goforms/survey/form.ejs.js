Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<table class="' +
((__t = ( cssClasses['form-survey'] )) == null ? '' : __t) +
'" aria-labelledby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">\n  <thead class="' +
((__t = ( cssClasses['form-survey-header'] )) == null ? '' : __t) +
'">\n    <tr class="' +
((__t = ( cssClasses['form-survey-row'] )) == null ? '' : __t) +
'">\n      <th class="' +
((__t = ( cssClasses['form-survey-header-cell'] )) == null ? '' : __t) +
'"></th>\n      ';
 ctx.component.values.forEach(function(value) { ;
__p += '\n      <th class="' +
((__t = ( cssClasses['form-survey-header-cell'] )) == null ? '' : __t) +
'" style="text-align: center;">\n        ' +
((__t = (ctx.t(value.label, { _userInput: true }))) == null ? '' : __t) +
'\n        ';
 if (value.tooltip) { ;
__p += '\n          <i ref="tooltip" class="' +
((__t = ( cssClasses['form-survey-tooltip'] )) == null ? '' : __t) +
'" data-tooltip="' +
((__t = (value.tooltip)) == null ? '' : __t) +
'"></i>\n        ';
 } ;
__p += '\n      </th>\n      ';
 }) ;
__p += '\n    </tr>\n  </thead>\n  <tbody class="' +
((__t = ( cssClasses['form-survey-body'] )) == null ? '' : __t) +
'">\n    ';
 ctx.component.questions.forEach(function(question) { ;
__p += '\n    <tr class="' +
((__t = ( cssClasses['form-survey-row'] )) == null ? '' : __t) +
'">\n      <td class="' +
((__t = ( cssClasses['form-survey-cell'] )) == null ? '' : __t) +
'">\n        ' +
((__t = (ctx.t(question.label))) == null ? '' : __t) +
'\n        ';
 if (question.tooltip) { ;
__p += '\n          <i ref="tooltip" class="' +
((__t = ( cssClasses['form-survey-tooltip'] )) == null ? '' : __t) +
'" data-tooltip="' +
((__t = (question.tooltip)) == null ? '' : __t) +
'"></i>\n        ';
 } ;
__p += '\n      </td>\n      ';
 ctx.component.values.forEach(function(value) { ;
__p += '\n      <td class="' +
((__t = ( cssClasses['form-survey-cell'] )) == null ? '' : __t) +
'" style="text-align: center;">\n        <input type="radio" class="' +
((__t = ( cssClasses['form-survey-input'] )) == null ? '' : __t) +
'" name="' +
((__t = ( ctx.self.getInputName(question) )) == null ? '' : __t) +
'" value="' +
((__t = (value.value)) == null ? '' : __t) +
'" id="' +
((__t = (ctx.key)) == null ? '' : __t) +
'-' +
((__t = (question.value)) == null ? '' : __t) +
'-' +
((__t = (value.value)) == null ? '' : __t) +
'" ref="input">\n      </td>\n      ';
 }) ;
__p += '\n    </tr>\n    ';
 }) ;
__p += '\n  </tbody>\n</table>\n';
return __p
}