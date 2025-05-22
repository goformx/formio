export default function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div id="' +
((__t = (ctx.mapId)) == null ? '' : __t) +
'" class="<%= cssClasses[\'form-map\'] %>" style="min-height: 300px; height: calc(100vh - 600px);" ref="gmapElement">\n  <div class="<%= cssClasses[\'form-map-container\'] %>"></div>\n  <div class="<%= cssClasses[\'form-map-search\'] %>"></div>\n  <div class="<%= cssClasses[\'form-map-results\'] %>"></div>\n</div>\n';
return __p
}