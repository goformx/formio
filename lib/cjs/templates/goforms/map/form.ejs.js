Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div id="' +
((__t = (ctx.mapId)) == null ? '' : __t) +
'" class="' +
((__t = ( ctx.cssClasses['form-map'] )) == null ? '' : __t) +
'" style="min-height: 300px; height: calc(100vh - 600px);" ref="gmapElement">\n  <div class="' +
((__t = ( ctx.cssClasses['form-map-container'] )) == null ? '' : __t) +
'"></div>\n  <div class="' +
((__t = ( ctx.cssClasses['form-map-search'] )) == null ? '' : __t) +
'"></div>\n  <div class="' +
((__t = ( ctx.cssClasses['form-map-results'] )) == null ? '' : __t) +
'"></div>\n</div>\n';
return __p
}