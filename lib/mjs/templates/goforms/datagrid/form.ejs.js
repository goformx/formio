export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="' +
((__t = (ctx.classes)) == null ? '' : __t) +
'">\n<table class="' +
((__t = ( ctx.classes['form-datagrid'] )) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.striped ? ' ' + ctx.classes['form-datagrid-striped'] : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.hover ? ' ' + ctx.classes['form-datagrid-hover'] : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.condensed ? ' ' + ctx.classes['form-datagrid-condensed'] : '')) == null ? '' : __t) +
'\n    " ';
 if (ctx.component.layoutFixed || ctx.readOnly) { ;
__p += 'data-layout="fixed"';
 } ;
__p += '>\n  ';
 if (ctx.hasHeader) { ;
__p += '\n  <thead class="' +
((__t = ( cssClasses['form-datagrid-header'] )) == null ? '' : __t) +
'">\n    <tr class="' +
((__t = ( cssClasses['form-datagrid-row'] )) == null ? '' : __t) +
'">\n      ';
 if (ctx.component.reorder) { ;
__p += '<th class="' +
((__t = ( cssClasses['form-datagrid-header-cell'] )) == null ? '' : __t) +
'"></th>';
 } ;
__p += '\n      ';
 ctx.columns.forEach(function(col) { ;
__p += '\n        <th class="' +
((__t = ( cssClasses['form-datagrid-header-cell'] )) == null ? '' : __t) +
' ' +
((__t = (col.validate && col.validate.required ? cssClasses['form-datagrid-required'] : '')) == null ? '' : __t) +
'">\n          ' +
((__t = ( col.hideLabel ? '' : ctx.t(col.label || col.title, { _userInput: true }) )) == null ? '' : __t) +
'\n          ';
 if (col.tooltip) { ;
__p += ' <i ref="tooltip" tabindex="0" data-title="' +
((__t = (col.tooltip)) == null ? '' : __t) +
'" class="' +
((__t = ( cssClasses['form-datagrid-tooltip'] )) == null ? '' : __t) +
'" data-tooltip="' +
((__t = (col.tooltip)) == null ? '' : __t) +
'"></i>';
 } ;
__p += '\n        </th>\n      ';
 }) ;
__p += '\n      ';
 if (ctx.hasExtraColumn) { ;
__p += '\n      <th class="' +
((__t = ( cssClasses['form-datagrid-header-cell'] )) == null ? '' : __t) +
'">\n        <span class="' +
((__t = ( cssClasses['form-datagrid-visually-hidden'] )) == null ? '' : __t) +
'">' +
((__t = ( ctx.t('addOrRemove') )) == null ? '' : __t) +
'</span>\n        ';
 if (!ctx.builder && ctx.hasAddButton && ctx.hasTopSubmit) { ;
__p += '\n        <button class="' +
((__t = ( cssClasses['form-datagrid-add-row'] )) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-addRow" tabindex="' +
((__t = (ctx.tabIndex)) == null ? '' : __t) +
'">\n          <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i>' +
((__t = (ctx.t(ctx.component.addAnother || 'addAnother', { _userInput: !!ctx.component.addAnother }))) == null ? '' : __t) +
'\n        </button>\n        ';
 } ;
__p += '\n      </th>\n      ';
 } ;
__p += '\n    </tr>\n  </thead>\n  ';
 } ;
__p += '\n  <tbody class="' +
((__t = ( cssClasses['form-datagrid-body'] )) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-tbody" data-key="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'">\n    ';
 ctx.rows.forEach(function(row, index) { ;
__p += '\n    ';
 if (ctx.hasGroups && ctx.groups[index]) { ;
__p += '\n    <tr ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-group-header" class="' +
((__t = ( cssClasses['form-datagrid-group-header'] )) == null ? '' : __t) +
'' +
((__t = (ctx.hasToggle ? ' ' + cssClasses['form-datagrid-group-header-clickable'] : '')) == null ? '' : __t) +
'">\n      <td\n        ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-group-label"\n        colspan="' +
((__t = (ctx.numColumns)) == null ? '' : __t) +
'"\n        class="' +
((__t = ( cssClasses['form-datagrid-group-label'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.groups[index].label)) == null ? '' : __t) +
'</td>\n    </tr>\n    ';
 } ;
__p += '\n    <tr ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-row" class="' +
((__t = ( cssClasses['form-datagrid-row'] )) == null ? '' : __t) +
'">\n      ';
 if (ctx.component.reorder) { ;
__p += '\n        <td class="' +
((__t = ( cssClasses['form-datagrid-cell'] )) == null ? '' : __t) +
'">\n          <button type="button" class="' +
((__t = ( cssClasses['form-datagrid-drag-button'] )) == null ? '' : __t) +
'" data-key="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'"></button>\n        </td>\n      ';
 } ;
__p += '\n      ';
 ctx.columns.forEach(function(col) { ;
__p += '\n        <td class="' +
((__t = ( cssClasses['form-datagrid-cell'] )) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'" ';
 if (col.key && col.overlay && col.overlay.width) { ;
__p += ' data-width="' +
((__t = (col.overlay.width)) == null ? '' : __t) +
'"';
 } ;
__p += '>\n          ' +
((__t = (row[col.key])) == null ? '' : __t) +
'\n        </td>\n      ';
 }) ;
__p += '\n      ';
 if (ctx.hasExtraColumn) { ;
__p += '\n        ';
 if (ctx.hasRemoveButtons) { ;
__p += '\n        <td class="' +
((__t = ( cssClasses['form-datagrid-cell'] )) == null ? '' : __t) +
'">\n          <button type="button" class="' +
((__t = ( cssClasses['form-datagrid-remove-row'] )) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-removeRow" tabindex="' +
((__t = (ctx.tabIndex)) == null ? '' : __t) +
'" aria-label="' +
((__t = (ctx.t('remove'))) == null ? '' : __t) +
'">\n            <i class="' +
((__t = (ctx.iconClass('remove-circle'))) == null ? '' : __t) +
'"></i>\n          </button>\n        </td>\n        ';
 } ;
__p += '\n        ';
 if (ctx.canAddColumn) { ;
__p += '\n        <td ref="' +
((__t = (ctx.key)) == null ? '' : __t) +
'-container" class="' +
((__t = ( cssClasses['form-datagrid-cell'] )) == null ? '' : __t) +
'">\n          ' +
((__t = (ctx.placeholder)) == null ? '' : __t) +
'\n        </td>\n        ';
 } ;
__p += '\n      ';
 } ;
__p += '\n    </tr>\n    ';
 }) ;
__p += '\n  </tbody>\n  ';
 if (!ctx.builder && ctx.hasAddButton && ctx.hasBottomSubmit) { ;
__p += '\n  <tfoot class="' +
((__t = ( cssClasses['form-datagrid-footer'] )) == null ? '' : __t) +
'">\n    <tr class="' +
((__t = ( cssClasses['form-datagrid-row'] )) == null ? '' : __t) +
'">\n      <td colspan="' +
((__t = (ctx.component.layoutFixed ? ctx.numColumns :  ctx.numColumns + 1)) == null ? '' : __t) +
'" class="' +
((__t = ( cssClasses['form-datagrid-cell'] )) == null ? '' : __t) +
'">\n        <button class="' +
((__t = ( cssClasses['form-datagrid-add-row'] )) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-addRow" tabindex="' +
((__t = (ctx.tabIndex)) == null ? '' : __t) +
'">\n          <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t(ctx.component.addAnother || 'addAnother', { _userInput: !!ctx.component.addAnother }))) == null ? '' : __t) +
'\n        </button>\n      </td>\n    </tr>\n  </tfoot>\n  ';
 } ;
__p += '\n</table>\n</div>\n';
return __p
}