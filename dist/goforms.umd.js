(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n():typeof define=="function"&&define.amd?define(n):(e=typeof globalThis<"u"?globalThis:e||self,e.goforms=n())})(this,function(){"use strict";const e={form:"ui form",field:"field",label:"ui label",input:"ui input",select:"ui dropdown",checkbox:"ui checkbox",radio:"ui radio checkbox",button:"ui button",message:"ui message",error:"error",help:"help-block"},n=(c,t)=>{if(!t)return t;const o={1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen"},l={primary:"btn-primary",secondary:"btn-outline",success:"btn-primary",danger:"btn-primary",warning:"btn-primary",info:"btn-primary",light:"btn-outline",dark:"btn-primary",link:"btn-outline"};switch(c){case"columns":return Object.prototype.hasOwnProperty.call(o,t.toString())?o[t.toString()]:t;case"class":return Object.prototype.hasOwnProperty.call(e,t.toString())?e[t.toString()]:t;case"theme":return l[t]||t;default:return t}},i={"question-sign":"question circle","info-sign":"info circle","warning-sign":"warning circle","error-sign":"times circle","success-sign":"check circle","plus-sign":"plus","minus-sign":"minus","remove-sign":"times","ok-sign":"check",search:"search",calendar:"calendar",clock:"clock",time:"clock",date:"calendar",up:"chevron up",down:"chevron down",left:"chevron left",right:"chevron right",refresh:"refresh",remove:"times",clear:"times",close:"times",edit:"pencil",save:"save",delete:"trash",add:"plus",ok:"check",cancel:"times",upload:"upload",download:"download","zoom-in":"search plus","zoom-out":"search minus",filter:"filter",sort:"sort","sort-up":"sort up","sort-down":"sort down",menu:"bars",list:"list",home:"home",user:"user",users:"users",lock:"lock",unlock:"unlock",key:"key",cog:"cog",gear:"cog",wrench:"wrench",heart:"heart",star:"star",link:"link",unlink:"unlink",paperclip:"paperclip",pushpin:"thumbtack",inbox:"inbox",play:"play",pause:"pause",stop:"stop",forward:"forward",backward:"backward","fast-forward":"fast forward","fast-backward":"fast backward","step-forward":"step forward","step-backward":"step backward",eject:"eject",fullscreen:"expand","resize-full":"expand","resize-small":"compress",phone:"phone","phone-alt":"phone square",envelope:"envelope","envelope-alt":"envelope square",comment:"comment",comments:"comments","comment-alt":"comment alternate","comments-alt":"comments alternate",eye:"eye","eye-close":"eye slash","eye-open":"eye",camera:"camera","camera-retro":"camera retro",picture:"image",pencil:"pencil","map-marker":"map marker",adjust:"adjust",tint:"tint","edit-sign":"pencil","check-sign":"check",check:"check","check-empty":"square outline","check-minus":"minus square","check-plus":"plus square","check-square":"check square",circle:"circle","circle-blank":"circle outline","circle-arrow-left":"arrow circle left","circle-arrow-right":"arrow circle right","circle-arrow-up":"arrow circle up","circle-arrow-down":"arrow circle down","play-circle":"play circle","pause-circle":"pause circle","stop-circle":"stop circle","ban-circle":"ban","ok-circle":"check circle","remove-circle":"times circle","plus-circle":"plus circle","minus-circle":"minus circle","times-circle":"times circle","question-circle":"question circle","info-circle":"info circle","warning-circle":"warning circle","error-circle":"times circle","success-circle":"check circle",plus:"plus",minus:"minus",times:"times",question:"question",info:"info",warning:"warning",error:"times",success:"check","arrow-left":"arrow left","arrow-right":"arrow right","arrow-up":"arrow up","arrow-down":"arrow down","chevron-left":"chevron left","chevron-right":"chevron right","chevron-up":"chevron up","chevron-down":"chevron down","caret-left":"caret left","caret-right":"caret right","caret-up":"caret up","caret-down":"caret down","hand-left":"hand point left","hand-right":"hand point right","hand-up":"hand point up","hand-down":"hand point down",move:"arrows alternate","resize-vertical":"arrows alternate vertical","resize-horizontal":"arrows alternate horizontal","fullscreen-alt":"expand","resize-full-alt":"expand","resize-small-alt":"compress","indent-left":"indent","indent-right":"outdent","list-ul":"list ul","list-ol":"list ol","list-alt":"list alternate","list-alt-ul":"list alternate ul","list-alt-ol":"list alternate ol"};function r(c){return i[c]||c}return{framework:"goforms",templates:{goforms:{framework:"goforms",transform:n,defaultIconset:"icon",iconClass:r,cssClasses:e,button:{form:`<{{ctx.input.type}}
  ref="button"
  class="btn {{ctx.transform('theme', ctx.component.theme)}} {{ctx.component.customClass}}"
  {% for (var attr in ctx.input.attr) { %}
  {{attr}}="{{ctx.input.attr[attr]}}"
  {% } %}
>
{% if (ctx.component.leftIcon) { %}<i class="{{ctx.iconClass(ctx.component.leftIcon)}}"></i>&nbsp;{% } %}
{{ctx.input.content}}
{% if (ctx.component.tooltip) { %}
  <i ref="tooltip" class="{{ctx.iconClass('question-sign')}} text-secondary" data-tooltip="{{ctx.component.tooltip}}"></i>
{% } %}
{% if (ctx.component.rightIcon) { %}&nbsp;<i class="{{ctx.iconClass(ctx.component.rightIcon)}}"></i>{% } %}
</{{ctx.input.type}}>
<div ref="buttonMessageContainer">
  <span class="text-secondary" ref="buttonMessage"></span>
</div> `,html:`<{{ctx.input.type}}
  ref="button"
  class="btn {{ctx.transform('theme', ctx.component.theme)}} {{ctx.component.customClass}}"
  {% for (var attr in ctx.input.attr) { %}
  {{attr}}="{{ctx.input.attr[attr]}}"
  {% } %}
>
{% if (ctx.component.leftIcon) { %}<i class="{{ctx.iconClass(ctx.component.leftIcon)}}"></i>&nbsp;{% } %}
{{ctx.input.content}}
{% if (ctx.component.tooltip) { %}
  <i ref="tooltip" class="{{ctx.iconClass('question-sign')}} text-secondary" data-tooltip="{{ctx.component.tooltip}}"></i>
{% } %}
{% if (ctx.component.rightIcon) { %}&nbsp;<i class="{{ctx.iconClass(ctx.component.rightIcon)}}"></i>{% } %}
</{{ctx.input.type}}>
`},checkbox:{form:`<div class="ui checkbox">
  <{{ctx.input.type}}
    ref="input"
    id="{{ctx.id}}"
    {% for (var attr in ctx.input.attr) { %}
    {{attr}}="{{ctx.input.attr[attr]}}"
    {% } %}
    {% if (ctx.checked) { %}checked=true{% } %}
    >
  </{{ctx.input.type}}>
  <label class="{{ctx.input.labelClass}}" for="{{ctx.id}}">
    {{ctx.input.content}}
    {% if (!ctx.self.labelIsHidden()) { %}<span>{{ctx.input.label}}</span>{% } %}
  </label>
  {% if (ctx.component.tooltip) { %}
    <i ref="tooltip" class="{{ctx.iconClass('question-sign')}} text-muted" data-tooltip="{{ctx.component.tooltip}}"></i>
  {% } %}
</div>
`,html:`<label class="{{ctx.input.labelClass}}">
    {{ctx.input.content}}
    {% if (!ctx.self.labelIsHidden()) { %}<span>{{ctx.input.label}}</span>{% } %}
</label>
<div ref="value">{% if (ctx.checked) { %}True{% } else { %}False{% } %}</div>
`},columns:{form:`<div class="ui grid" style="width: 100%">
    {% ctx.component.columns.forEach(function(column, index) { %}
    <div class="{{ctx.transform('columns', column.width)}} wide column" ref="{{ctx.columnKey}}">
      {{ctx.columnComponents[index]}}
    </div>
    {% }) %}
</div>
`},component:{form:`<div id="{{ctx.id}}" class="field {{ctx.classes}}"{% if (ctx.styles) { %} style="{{ctx.styles}}"{% } %} ref="component">
  {% if (ctx.visible) { %}
  {{ctx.children}}
  <div ref="messageContainer"></div>
  {% } %}
</div>
`},fieldset:{form:`<fieldset>
  <legend ref="header" class="{{ctx.component.collapsible ? 'formio-clickable' : ''}}">
    {{ctx.t(ctx.component.legend)}}
    {% if (ctx.component.tooltip) { %}
      <i ref="tooltip" class="{{ctx.iconClass('question-sign')}}" data-tooltip="{{ctx.component.tooltip}}"></i>
    {% } %}
  </legend>  {% if (!ctx.collapsed) { %}
  <div class="card-body" ref="{{ctx.nestedKey}}">
    {{ctx.children}}
  </div>
  {% } %}
</fieldset>
`},input:{form:`<div class="ui {{ctx.component.editor ? '' : 'input'}} fluid {{ ctx.suffix ? ' right' : '' }}{{ (ctx.prefix || ctx.suffix) ? ' labeled' : '' }}">
{% if (ctx.prefix) { %}
<label class="ui label" ref="prefix">
{% if(ctx.prefix instanceof HTMLElement){ %}
  {{ ctx.t(ctx.prefix.outerHTML) }}
{% } else{ %}
  {{ ctx.t(ctx.prefix) }}
{% } %}
</label>
{% } %}
{% if (!ctx.component.editor && !ctx.component.wysiwyg) { %}
<{{ctx.input.type}}
  ref="{{ctx.input.ref ? ctx.input.ref : 'input'}}"
  {% for (var attr in ctx.input.attr) { %}
  {{attr}}="{{ctx.input.attr[attr]}}"
  {% } %}
  id="{{ctx.instance.id}}-{{ctx.component.key}}"
>{{ctx.input.content}}</{{ctx.input.type}}>
{% } %}
{% if (ctx.component.editor || ctx.component.wysiwyg) { %}
<div ref="input"></div>
{% } %}
{% if (ctx.component.showCharCount) { %}
<span class="ui right floated" ref="charcount"></span>
{% } %}
{% if (ctx.component.showWordCount) { %}
<span class="ui right floated" ref="wordcount"></span>
{% } %}
{% if (ctx.suffix) { %}
<div class="ui label" ref="suffix">
{% if(ctx.suffix instanceof HTMLElement){ %}
  {{ ctx.t(ctx.suffix.outerHTML) }}
{% } else{ %}
  {{ ctx.t(ctx.suffix) }}
{% } %}
</div>
{% } %}
</div>
`,html:`<div ref="value">{% if (ctx.value) { %}{{ctx.value}}{% } else { %}-{% } %}</div>
`},panel:{form:`{% if (!ctx.component.hideLabel || ctx.builder || ctx.component.collapsible || ctx.component.tooltip) { %}
<h4 class="ui top attached block header {{ctx.component.className}}" ref="header">
  {% if (ctx.component.collapsible) { %}
    <i class="formio-collapse-icon {{ctx.iconClass(ctx.collapsed ? 'plus-square-o' : 'minus-square-o')}} text-muted" data-title="Collapse Panel"></i>
  {% } %}
  {% if (!ctx.component.hideLabel || ctx.builder) { %}
  {{ctx.t(ctx.component.title)}}
  {% } %}
  {% if (ctx.component.tooltip) { %}
    <i ref="tooltip" class="{{ctx.iconClass('question-sign')}} text-muted" data-tooltip="{{ctx.component.tooltip}}"></i>
  {% } %}
</h4>
{% } %}
{% if (!ctx.collapsed || ctx.builder) { %}
<div class="ui bottom attached segment" ref="{{ctx.nestedKey}}">
  {{ctx.children}}
</div>
{% } %}
`},radio:{form:`<div class="fields {{ctx.inline ? 'inline' : 'grouped'}}">
  {% ctx.values.forEach(function(item) { %}
  <div class="field">
    <div class="ui {{ctx.input.attr.type==='radio' ? 'radio' : ''}} checkbox" ref="wrapper">
      <{{ctx.input.type}}
        ref="input"
        {% for (var attr in ctx.input.attr) { %}
        {{attr}}="{{ctx.input.attr[attr]}}"
        {% } %}
        value="{{item.value}}"
        {% if (ctx.value === item.value || (typeof ctx.value === 'object' && ctx.value.hasOwnProperty(item.value) && ctx.value[item.value])) { %}
          checked=true
        {% } %}
        {% if (item.disabled) { %}
          disabled=true
        {% } %}
        id="{{ctx.instance.root && ctx.instance.root.id}}-{{ctx.id}}-{{ctx.row}}-{{item.value}}"
      >
      <label class="" for="{{ctx.instance.root && ctx.instance.root.id}}-{{ctx.id}}-{{ctx.row}}-{{item.value}}">
        <span>{{ctx.t(item.label)}}</span>
      </label>
    </div>
  </div>
  {% }) %}
</div>
`,html:`<div ref="value">
  {% var filtered = ctx.values.filter(function(item) {return ctx.value === item.value || (typeof ctx.value === 'object' && ctx.value.hasOwnProperty(item.value) && ctx.value[item.value])}).map(function(item) { return ctx.t(item.label)}).join(', ') %}
  {{filtered}}
  </div>
`},select:{form:`<select
  ref="{{ctx.input.ref ? ctx.input.ref : 'selectContainer'}}"
  class="ui search dropdown"
  {{ ctx.input.multiple ? 'multiple' : '' }}
  {% for (var attr in ctx.input.attr) { %}
  {{attr}}="{{ctx.input.attr[attr]}}"
  {% } %}
  {% if (!ctx.input.attr.id) { %}
  id="{{ctx.instance.id}}-{{ctx.component.key}}"
  {% } %}
>{{ctx.selectOptions}}</select>
<input type="text"
       class="formio-select-autocomplete-input"
       ref="autocompleteInput"
       {% if (ctx.input.attr.autocomplete) { %}
       autocomplete="{{ctx.input.attr.autocomplete}}"
       {% } %}
       tabindex="-1"
/>
`,html:`<div ref="value">{% if (ctx.value) { %}{{ ctx.self.itemValueForHTMLMode(ctx.value) }}{% } else { %}-{% } %}</div>
`}}}}});
//# sourceMappingURL=goforms.umd.js.map
