jQuery.webshims.ready("es5",function(h,k,w,p,o){var t=k.modules,q=h.attr,m={},l={};h.attr=function(b,d,a,c,f){var g=(b.nodeName||"").toLowerCase();if(!g||b.nodeType!==1)return q(b,d,a,c,f);var e=m[g],i;if(e)e=e[d];if(!e)if(e=m["*"])e=e[d];if(e)if(a===o)return e.get?e.get.call(b):e.value;else{if(e.set)i=e.set.call(b,a)}else i=q(b,d,a,c,f);a!==o&&l[g]&&l[g][d]&&h.each(l[g][d],function(j,n){n.call(b,a)});return i};var u=function(b,d,a){m[b]||(m[b]={});var c=m[b][d],f=function(g,e,i){if(e&&e[g])return e[g];
if(i&&i[g])return i[g];return function(j){return q(this,d,j)}};m[b][d]=a;if(a.value===o){if(!a.set)a.set=a.writeable?f("set",a,c):function(){throw d+"is readonly on "+b;};if(!a.get)a.get=f("get",a,c)}h.each(["value","get","set"],function(g,e){if(a[e])a["_sup"+e]=f(e,c)})},r=function(){var b={};k.addReady(function(a,c){var f={},g=function(e){if(!f[e]){f[e]=h(a.getElementsByTagName(e));if(c[0]&&h.nodeName(c[0],e))f[e]=f[e].add(c)}};h.each(b,function(e,i){g(e);i.forEach(function(j){f[e].each(j)})});
f=null});var d=function(a,c){if(b[a])b[a].push(c);else b[a]=[c];h.isDOMReady&&h(p.getElementsByTagName(a)).each(c)};return{content:function(a,c){d(a,function(){h(this).filter("["+c+"]").attr(c,function(f,g){return g})})},extendValue:function(a,c,f){d(a,function(){h(this).each(function(){(h.data(this,"_polyfilledValue")||h.data(this,"_polyfilledValue",{}))[c]=this[c];this[c]=f})})}}}(),v=function(){var b=k.getPrototypeOf(p.createElement("foobar")),d=Object.prototype.hasOwnProperty;return function(a,
c,f){var g=p.createElement(a),e=k.getPrototypeOf(g);if(e&&b!==e&&(!g[c]||!d.call(g,c))){var i=g[c];f._supvalue=function(){if(i&&i.apply)return i.apply(this,arguments);return i};e[c]=f.value}else{f._supvalue=function(){var j=h.data(this,"_polyfilledValue");if(j&&j[c]&&j[c].apply)return j[c].apply(this,arguments);return j&&j[c]};r.extendValue(a,c,f.value)}f.value._supvalue=f._supvalue}}();h.extend(k,{getID:function(){var b=(new Date).getTime();return function(d){d=h(d);var a=d.attr("id");if(!a){b++;
a="elem-id-"+b;d.attr("id",a)}return a}}(),defineNodeNameProperty:function(b,d,a){a=h.extend({writeable:true,idl:true},a);b!="*"&&k.cfg.extendNative&&a.value&&h.isFunction(a.value)?v(b,d,a):u(b,d,a);a.content&&r.content(b,d);return a},defineNodeNamesProperty:function(b,d,a){if(typeof b=="string")b=b.split(/\s*,\s*/);var c={};b.forEach(function(f){c[f]=k.defineNodeNameProperty(f,d,a)});return c},defineNodeNameProperties:function(b,d){for(var a in d)d[a]=k.defineNodeNameProperty(b,a,d[a]);return d},
defineNodeNamesProperties:function(b,d){if(typeof b=="string")b=b.split(/\s*,\s*/);var a={};b.forEach(function(c){var f=h.extend({},d);a[c]=k.defineNodeNameProperties(c,f)});return a},onNodeNamesPropertyModify:function(b,d,a){if(typeof b=="string")b=b.split(/\s*,\s*/);if(h.isFunction(a))a={set:a};b.forEach(function(c){l[c]||(l[c]={});l[c][d]||(l[c][d]=[]);a.set&&l[c][d].push(a.set);a.content&&r.content(c,d)})},defineNodeNamesBooleanProperty:function(b,d,a,c,f,g){k.defineNodeNamesProperty(b,d,{set:function(e){e=
this.readyState==="loading"&&typeof e=="string"&&e===k.contentAttr(this,d)?true:!!e;k.contentAttr(this,d,e);a&&a.set.call(this,e);return e},get:function(){return k.contentAttr(this,d)!=null}},c,f,g)},contentAttr:function(b,d,a){if(b.nodeName){if(a===o){a=(b.attributes[d]||{}).value;return a==null?o:a}if(typeof a=="boolean")a?b.setAttribute(d,d):b.removeAttribute(d);else b.setAttribute(d,a)}},activeLang:function(){var b=[navigator.browserLanguage||navigator.language||""],d=h("html").attr("lang"),a;
d&&b.push(d);return function(c,f,g){if(c)if(!f||!g){if(c!==b[0]){b[0]=c;clearTimeout(a);a=setTimeout(function(){h(p).triggerHandler("webshimLocalizationReady",b)},0)}}else{var e=(f=t[f].options)&&f.availabeLangs,i=function(j){if(h.inArray(j,e)!==-1){k.loader.loadScript(f.langSrc+j+".js",function(){c[j]&&g(c[j])});return true}return false};h.each(b,function(j,n){var s=n.split("-")[0];if(c[n]||c[s]){g(c[n]||c[s]);return false}if(e&&f.langSrc&&(i(n)||i(s)))return false})}return b}}()});k.isReady("webshimLocalization",
true);k.isReady("dom-extend",true)});
