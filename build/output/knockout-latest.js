// Knockout JavaScript library v1.2.1
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(window,undefined){
function b(a){throw a;}var m=void 0,o=null,p=window.ko={};p.b=function(a,e){for(var c=a.split("."),d=window,f=0;f<c.length-1;f++)d=d[c[f]];d[c[c.length-1]]=e};p.l=function(a,e,c){a[e]=c};
p.a=new function(){function a(a,c){if(a.tagName!="INPUT"||!a.type)return!1;if(c.toLowerCase()!="click")return!1;var d=a.type.toLowerCase();return d=="checkbox"||d=="radio"}var e=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,c=/MSIE 6/i.test(navigator.userAgent),d=/MSIE 7/i.test(navigator.userAgent),f={},g={};f[/Firefox\/2/i.test(navigator.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];f.MouseEvents=["click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","mouseenter","mouseleave"];
for(var h in f){var i=f[h];if(i.length)for(var j=0,k=i.length;j<k;j++)g[i[j]]=h}return{sa:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],e:function(a,c){for(var d=0,f=a.length;d<f;d++)c(a[d])},j:function(a,d){if(typeof a.indexOf=="function")return a.indexOf(d);for(var c=0,f=a.length;c<f;c++)if(a[c]===d)return c;return-1},Ra:function(a,c,d){for(var f=0,e=a.length;f<e;f++)if(c.call(d,a[f]))return a[f];return o},Y:function(a,c){var d=p.a.j(a,c);d>=0&&a.splice(d,1)},W:function(a){for(var a=
a||[],c=[],d=0,f=a.length;d<f;d++)p.a.j(c,a[d])<0&&c.push(a[d]);return c},X:function(a,d){for(var a=a||[],c=[],f=0,e=a.length;f<e;f++)c.push(d(a[f]));return c},V:function(a,c){for(var a=a||[],d=[],f=0,e=a.length;f<e;f++)c(a[f])&&d.push(a[f]);return d},C:function(a,d){for(var c=0,f=d.length;c<f;c++)a.push(d[c])},aa:function(a){for(;a.firstChild;)p.removeNode(a.firstChild)},extend:function(a){p.a.e(Array.prototype.slice.call(arguments,1),function(c){for(var d in c)Object.prototype.hasOwnProperty.call(c,
d)&&(a[d]=c[d])});return a},ya:function(a,c){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&c(d,a[d])},sb:function(a,d){p.a.aa(a);d&&p.a.e(d,function(d){a.appendChild(d)})},Da:function(a,d){var c=a.nodeType?[a]:a;if(c.length>0){for(var f=c[0],e=f.parentNode,g=0,h=d.length;g<h;g++)e.insertBefore(d[g],f);g=0;for(h=c.length;g<h;g++)p.removeNode(c[g])}},Fa:function(a,d){navigator.userAgent.indexOf("MSIE 6")>=0?a.setAttribute("selected",d):a.selected=d},ta:function(a,d){if(!a||a.nodeType!=1)return[];
var c=[];a.getAttribute(d)!==o&&c.push(a);for(var f=a.getElementsByTagName("*"),e=0,g=f.length;e<g;e++)f[e].getAttribute(d)!==o&&c.push(f[e]);return c},n:function(a){return(a||"").replace(e,"")},yb:function(a,d){for(var c=[],f=(a||"").split(d),e=0,g=f.length;e<g;e++){var h=p.a.n(f[e]);h!==""&&c.push(h)}return c},ub:function(a,d){a=a||"";if(d.length>a.length)return!1;return a.substring(0,d.length)===d},ab:function(a,d){if(d===m)return(new Function("return "+a))();return(new Function("sc","with(sc) { return ("+
a+") }"))(d)},Za:function(a,d){if(d.compareDocumentPosition)return(d.compareDocumentPosition(a)&16)==16;for(;a!=o;){if(a==d)return!0;a=a.parentNode}return!1},$:function(a){return p.a.Za(a,document)},B:function(d,c,f){if(typeof jQuery!="undefined"){if(a(d,c))var e=f,f=function(a,d){var c=this.checked;if(d)this.checked=d.Ta!==!0;e.call(this,a);this.checked=c};jQuery(d).bind(c,f)}else typeof d.addEventListener=="function"?d.addEventListener(c,f,!1):typeof d.attachEvent!="undefined"?d.attachEvent("on"+
c,function(a){f.call(d,a)}):b(Error("Browser doesn't support addEventListener or attachEvent"))},Ja:function(d,c){(!d||!d.nodeType)&&b(Error("element must be a DOM node when calling triggerEvent"));if(typeof jQuery!="undefined"){var f=[];a(d,c)&&f.push({Ta:d.checked});jQuery(d).trigger(c,f)}else if(typeof document.createEvent=="function")typeof d.dispatchEvent=="function"?(f=document.createEvent(g[c]||"HTMLEvents"),f.initEvent(c,!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,d),d.dispatchEvent(f)):b(Error("The supplied element doesn't support dispatchEvent"));
else if(typeof d.fireEvent!="undefined"){if(c=="click"&&d.tagName=="INPUT"&&(d.type.toLowerCase()=="checkbox"||d.type.toLowerCase()=="radio"))d.checked=d.checked!==!0;d.fireEvent("on"+c)}else b(Error("Browser doesn't support triggering events"))},d:function(a){return p.N(a)?a():a},Ya:function(a,d){return p.a.j((a.className||"").split(/\s+/),d)>=0},Ia:function(a,d,c){var f=p.a.Ya(a,d);if(c&&!f)a.className=(a.className||"")+" "+d;else if(f&&!c){for(var c=(a.className||"").split(/\s+/),f="",e=0;e<c.length;e++)c[e]!=
d&&(f+=c[e]+" ");a.className=p.a.n(f)}},pb:function(a,d){for(var a=p.a.d(a),d=p.a.d(d),c=[],f=a;f<=d;f++)c.push(f);return c},ea:function(a){for(var d=[],c=0,f=a.length;c<f;c++)d.push(a[c]);return d},ca:c,gb:d,ua:function(a,d){for(var c=p.a.ea(a.getElementsByTagName("INPUT")).concat(p.a.ea(a.getElementsByTagName("TEXTAREA"))),f=typeof d=="string"?function(a){return a.name===d}:function(a){return d.test(a.name)},e=[],g=c.length-1;g>=0;g--)f(c[g])&&e.push(c[g]);return e},P:function(a){if(typeof a=="string"&&
(a=p.a.n(a))){if(window.JSON&&window.JSON.parse)return window.JSON.parse(a);return(new Function("return "+a))()}return o},ja:function(a){(typeof JSON=="undefined"||typeof JSON.stringify=="undefined")&&b(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));return JSON.stringify(p.a.d(a))},ob:function(a,d,c){var c=c||{},f=c.params||{},e=c.includeFields||
this.sa,g=a;if(typeof a=="object"&&a.tagName=="FORM")for(var g=a.action,h=e.length-1;h>=0;h--)for(var i=p.a.ua(a,e[h]),j=i.length-1;j>=0;j--)f[i[j].name]=i[j].value;var d=p.a.d(d),k=document.createElement("FORM");k.style.display="none";k.action=g;k.method="post";for(var v in d)a=document.createElement("INPUT"),a.name=v,a.value=p.a.ja(p.a.d(d[v])),k.appendChild(a);for(v in f)a=document.createElement("INPUT"),a.name=v,a.value=f[v],k.appendChild(a);document.body.appendChild(k);c.submitter?c.submitter(k):
k.submit();setTimeout(function(){k.parentNode.removeChild(k)},0)}}};p.b("ko.utils",p.a);p.b("ko.utils.arrayForEach",p.a.e);p.b("ko.utils.arrayFirst",p.a.Ra);p.b("ko.utils.arrayFilter",p.a.V);p.b("ko.utils.arrayGetDistinctValues",p.a.W);p.b("ko.utils.arrayIndexOf",p.a.j);p.b("ko.utils.arrayMap",p.a.X);p.b("ko.utils.arrayPushAll",p.a.C);p.b("ko.utils.arrayRemoveItem",p.a.Y);p.b("ko.utils.fieldsIncludedWithJsonPost",p.a.sa);p.b("ko.utils.getElementsHavingAttribute",p.a.ta);
p.b("ko.utils.getFormFields",p.a.ua);p.b("ko.utils.postJson",p.a.ob);p.b("ko.utils.parseJson",p.a.P);p.b("ko.utils.registerEventHandler",p.a.B);p.b("ko.utils.stringifyJson",p.a.ja);p.b("ko.utils.range",p.a.pb);p.b("ko.utils.toggleDomNodeCssClass",p.a.Ia);p.b("ko.utils.triggerEvent",p.a.Ja);p.b("ko.utils.unwrapObservable",p.a.d);Function.prototype.bind||(Function.prototype.bind=function(a){var e=this,c=Array.prototype.slice.call(arguments),a=c.shift();return function(){return e.apply(a,c.concat(Array.prototype.slice.call(arguments)))}});
p.a.h=new function(){var a=0,e="__ko__"+(new Date).getTime(),c={};return{get:function(a,c){var e=p.a.h.getAll(a,!1);return e===m?m:e[c]},set:function(a,c,e){e===m&&p.a.h.getAll(a,!1)===m||(p.a.h.getAll(a,!0)[c]=e)},getAll:function(d,f){var g=d[e];if(!g){if(!f)return;g=d[e]="ko"+a++;c[g]={}}return c[g]},clear:function(a){var f=a[e];f&&(delete c[f],a[e]=o)}}};
p.a.v=new function(){function a(a,f){var e=p.a.h.get(a,c);e===m&&f&&(e=[],p.a.h.set(a,c,e));return e}function e(d){var c=a(d,!1);if(c)for(var c=c.slice(0),e=0;e<c.length;e++)c[e](d);p.a.h.clear(d);typeof jQuery=="function"&&typeof jQuery.cleanData=="function"&&jQuery.cleanData([d])}var c="__ko_domNodeDisposal__"+(new Date).getTime();return{oa:function(d,c){typeof c!="function"&&b(Error("Callback must be a function"));a(d,!0).push(c)},Ca:function(d,f){var e=a(d,!1);e&&(p.a.Y(e,f),e.length==0&&p.a.h.set(d,
c,m))},D:function(a){if(!(a.nodeType!=1&&a.nodeType!=9)){e(a);var c=[];p.a.C(c,a.getElementsByTagName("*"));for(var a=0,g=c.length;a<g;a++)e(c[a])}},removeNode:function(a){p.D(a);a.parentNode&&a.parentNode.removeChild(a)}}};p.D=p.a.v.D;p.removeNode=p.a.v.removeNode;p.b("ko.cleanNode",p.D);p.b("ko.removeNode",p.removeNode);p.b("ko.utils.domNodeDisposal",p.a.v);p.b("ko.utils.domNodeDisposal.addDisposeCallback",p.a.v.oa);p.b("ko.utils.domNodeDisposal.removeDisposeCallback",p.a.v.Ca);
p.a.nb=function(a){if(typeof jQuery!="undefined")a=jQuery.clean([a]);else{var e=p.a.n(a).toLowerCase(),c=document.createElement("div"),e=e.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!e.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!e.indexOf("<td")||!e.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];for(c.innerHTML=e[1]+a+e[2];e[0]--;)c=c.lastChild;a=p.a.ea(c.childNodes)}return a};
p.a.tb=function(a,e){p.a.aa(a);if(e!==o&&e!==m)if(typeof e!="string"&&(e=e.toString()),typeof jQuery!="undefined")jQuery(a).html(e);else for(var c=p.a.nb(e),d=0;d<c.length;d++)a.appendChild(c[d])};
p.o=function(){function a(){return((1+Math.random())*4294967296|0).toString(16).substring(1)}function e(a,c){if(a)if(a.nodeType==8){var g=p.o.Aa(a.nodeValue);g!=o&&c.push({Xa:a,jb:g})}else if(a.nodeType==1)for(var g=0,h=a.childNodes,i=h.length;g<i;g++)e(h[g],c)}var c={};return{fa:function(d){typeof d!="function"&&b(Error("You can only pass a function to ko.memoization.memoize()"));var e=a()+a();c[e]=d;return"<\!--[ko_memo:"+e+"]--\>"},Ka:function(a,e){var g=c[a];g===m&&b(Error("Couldn't find any memo with ID "+
a+". Perhaps it's already been unmemoized."));try{return g.apply(o,e||[]),!0}finally{delete c[a]}},La:function(a,c){var g=[];e(a,g);for(var h=0,i=g.length;h<i;h++){var j=g[h].Xa,k=[j];c&&p.a.C(k,c);p.o.Ka(g[h].jb,k);j.nodeValue="";j.parentNode&&j.parentNode.removeChild(j)}},Aa:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:o}}}();p.b("ko.memoization",p.o);p.b("ko.memoization.memoize",p.o.fa);p.b("ko.memoization.unmemoize",p.o.Ka);p.b("ko.memoization.parseMemoText",p.o.Aa);
p.b("ko.memoization.unmemoizeDomNodeAndDescendants",p.o.La);p.vb=function(a,e){this.K=a;this.q=function(){this.fb=!0;e()}.bind(this);p.l(this,"dispose",this.q)};
p.ka=function(){var a=[];this.wa=function(){return a.slice(0)};this.la=function(e,c){var d=c?e.bind(c):e,f=new p.vb(d,function(){p.a.Y(a,f)});a.push(f);return f};this.G=function(e){p.a.e(a.slice(0),function(a){a&&a.fb!==!0&&a.K(e)})};this.cb=function(){return a.length};p.l(this,"subscribe",this.la);p.l(this,"notifySubscribers",this.G);p.l(this,"getSubscriptions",this.wa);p.l(this,"getSubscriptionsCount",this.cb)};p.xa=function(a){return typeof a.la=="function"&&typeof a.G=="function"};
p.b("ko.subscribable",p.ka);p.b("ko.isSubscribable",p.xa);p.L=function(){var a=[];return{Sa:function(){a.push([])},end:function(){return a.pop()},Ba:function(e){p.xa(e)||b("Only subscribable things can act as dependencies");a.length>0&&a[a.length-1].push(e)}}}();p.J=function(){function a(){return""+e++}var e=0;return{next:a,ra:function(c){c.Ma=a()},ga:function(a){return a.Ma}}}();
p.m={r:function(a){return Object.prototype.hasOwnProperty.call(a,"newValue")?(a.pa(a)&&(a.g(a.newValue),a.T(a)),this):(p.L.Ba(a.f),a.g())},u:function(a){if(Object.prototype.hasOwnProperty.call(a,"valueToWrite"))typeof a.options.write==="function"?a.options.write.call(a.options.owner||o,a.wb):b("Cannot write a value to a dependentObservable unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");else return a.na||a.evaluate(),p.L.Ba(a.k),a.g()},H:function(a){a.f.G(a.g())},
w:function(a){a.f.G(a.g())},I:function(a){a.f.G(a.g())}};p.qa={r:function(a){a=p.a.extend({},a);a.T=p.m.H;return p.m.r.call(this,a)},u:p.m.u,H:p.m.H,w:p.m.w,I:p.m.I};
p.lb=function(){function a(){}function e(){j={};k=[];q=l=o;i.r=c;i.u=p.m.u;i.w=d;i.H=o;i.I=a}function c(c){var d=p.a.extend({},c);d.g=function(){var a=p.J.ga(c.f),d;if(arguments.length)d=p.a.extend({},c),d.newValue=arguments[0],j[a]=d;else return(d=Object.prototype.hasOwnProperty.call(j,a))?j[a].newValue:c.g()};d.T=a;return p.m.r.call(this,d)}function d(a){k.push(a)}function f(a){var c=p.a.extend({},a);c.pa=function(){n.push(a);return!1};return p.m.r.call(this,c)}function g(a){var c=p.J.ga(a.evaluate);
if(!Object.prototype.hasOwnProperty.call(a,"valueToWrite")&&Object.prototype.hasOwnProperty.call(l,c)&&!Object.prototype.hasOwnProperty.call(q,c))q[c]=o,a=p.a.extend({},a),a.na=!1;return p.m.u(a)}function h(a){r.push(a)}var i,j,k,l,q,n,r;i={Ua:function(){function c(a){var e=a.g;p.a.e(a.f.wa(),function(a){var a=a.K,f=p.J.ga(a);f==o?d.push({K:a,g:e}):Object.prototype.hasOwnProperty.call(l,f)||(l[f]={evaluate:a},c({f:a.za,g:a.za}))})}var d=[];l={};p.a.ya(j,function(a,d){var e=p.a.extend({},d);e.T=c;
return p.m.r.call(this,e)});p.a.e(k,function(a){c(a)});q={};n=[];r=[];k=j=o;i.r=f;i.u=g;i.w=h;i.I=a;i.H=o;p.a.ya(l,function(a,c){Object.prototype.hasOwnProperty.call(q,a)||(q[a]=o,c.evaluate())});p.a.e(d,function(a){a.K(a.g())});if(n.length||r.length)return e(),function(){p.a.e(n,function(a){p.s.r(a)});p.a.e(r,function(a){p.s.w(a)})}}};e();return i};p.s=p.qa;p.xb=function(a){p.s=p.lb();try{do a(),a=p.s.Ua();while(a)}finally{p.s=p.qa}};var x={undefined:!0,"boolean":!0,number:!0,string:!0};
function y(a,e){return a===o||typeof a in x?a===e:!1}p.f=function(a){function e(){if(arguments.length)f=arguments[0];else return f}function c(){var a={f:c,g:e,pa:d};if(arguments.length)a.newValue=arguments[0];return p.s.r.call(this,a)}function d(a){var c=a.f.equalityComparer;return!c||!c(a.g(),a.newValue)}var f=a;p.J.ra(c);c.t=p.f;c.R=function(){p.s.w({f:c,g:e})};c.equalityComparer=y;p.ka.call(c);p.l(c,"valueHasMutated",c.R);return c};
p.N=function(a){if(a===o||a===m||a.t===m)return!1;if(a.t===p.f)return!0;return p.N(a.t)};p.O=function(a){if(typeof a=="function"&&a.t===p.f)return!0;if(typeof a=="function"&&a.t===p.k&&a.eb)return!0;return!1};p.b("ko.observable",p.f);p.b("ko.isObservable",p.N);p.b("ko.isWriteableObservable",p.O);
p.mb=function(a){arguments.length==0&&(a=[]);a!==o&&a!==m&&!("length"in a)&&b(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));var e=new p.f(a);p.a.e(["pop","push","reverse","shift","sort","splice","unshift"],function(a){e[a]=function(){var d=e(),d=d[a].apply(d,arguments);e.R();return d}});p.a.e(["slice"],function(a){e[a]=function(){var d=e();return d[a].apply(d,arguments)}});e.remove=function(a){for(var d=e(),f=[],g=[],h=typeof a=="function"?
a:function(d){return d===a},i=0,j=d.length;i<j;i++){var k=d[i];h(k)?g.push(k):f.push(k)}e(f);return g};e.qb=function(a){if(a===m){var d=e();e([]);return d}if(!a)return[];return e.remove(function(d){return p.a.j(a,d)>=0})};e.Z=function(a){for(var d=e(),f=typeof a=="function"?a:function(d){return d===a},g=d.length-1;g>=0;g--)f(d[g])&&(d[g]._destroy=!0);e.R()};e.Wa=function(a){if(a===m)return e.Z(function(){return!0});if(!a)return[];return e.Z(function(d){return p.a.j(a,d)>=0})};e.indexOf=function(a){var d=
e();return p.a.j(d,a)};e.replace=function(a,d){var f=e.indexOf(a);f>=0&&(e()[f]=d,e.R())};p.l(e,"remove",e.remove);p.l(e,"removeAll",e.qb);p.l(e,"destroy",e.Z);p.l(e,"destroyAll",e.Wa);p.l(e,"indexOf",e.indexOf);return e};p.b("ko.observableArray",p.mb);
p.k=function(a,e,c){function d(){if(arguments.length)j=arguments[0];else return j}function f(){p.a.e(r,function(a){a.q()});r=[]}function g(a){f();p.a.e(a,function(a){r.push(a.la(h))})}function h(){if(k&&typeof c.disposeWhen=="function"&&c.disposeWhen())i.q();else{try{p.L.Sa(),j=c.owner?c.read.call(c.owner):c.read()}finally{var a=p.a.W(p.L.end());g(a)}p.s.I({f:i,g:d});k=!0}}function i(){var a={k:i,evaluate:h,na:k,options:c,g:d};if(arguments.length)a.wb=arguments[0];return p.s.u(a)}var j,k=!1;a&&typeof a==
"object"?c=a:(c=c||{},c.read=a||c.read,c.owner=e||c.owner);typeof c.read!="function"&&b("Pass a function that returns the value of the dependentObservable");var l=typeof c.disposeWhenNodeIsRemoved=="object"?c.disposeWhenNodeIsRemoved:o,q=o;if(l){q=function(){i.q()};p.a.v.oa(l,q);var n=c.disposeWhen;c.disposeWhen=function(){return!p.a.$(l)||typeof n=="function"&&n()}}var r=[];p.J.ra(h);h.za=i;i.t=p.k;i.bb=function(){return r.length};i.eb=typeof c.write==="function";i.q=function(){l&&p.a.v.Ca(l,q);
f()};p.ka.call(i);c.deferEvaluation!==!0&&h();p.l(i,"dispose",i.q);p.l(i,"getDependenciesCount",i.bb);return i};p.k.t=p.f;p.b("ko.dependentObservable",p.k);
(function(){function a(d,f,g){g=g||new c;d=f(d);if(!(typeof d=="object"&&d!==o&&d!==m))return d;var h=d instanceof Array?[]:{};g.save(d,h);e(d,function(c){var e=f(d[c]);switch(typeof e){case "boolean":case "number":case "string":case "function":h[c]=e;break;case "object":case "undefined":var k=g.get(e);h[c]=k!==m?k:a(e,f,g)}});return h}function e(a,c){if(a instanceof Array)for(var e=0;e<a.length;e++)c(e);else for(e in a)c(e)}function c(){var a=[],c=[];this.save=function(e,h){var i=p.a.j(a,e);i>=0?
c[i]=h:(a.push(e),c.push(h))};this.get=function(e){e=p.a.j(a,e);return e>=0?c[e]:m}}p.Ha=function(c){arguments.length==0&&b(Error("When calling ko.toJS, pass the object you want to convert."));return a(c,function(a){for(var c=0;p.N(a)&&c<10;c++)a=a();return a})};p.toJSON=function(a){a=p.Ha(a);return p.a.ja(a)}})();p.b("ko.toJS",p.Ha);p.b("ko.toJSON",p.toJSON);
p.i={p:function(a){if(a.tagName=="OPTION"){if(a.__ko__hasDomDataOptionValue__===!0)return p.a.h.get(a,p.c.options.ha);return a.getAttribute("value")}else return a.tagName=="SELECT"?a.selectedIndex>=0?p.i.p(a.options[a.selectedIndex]):m:a.value},S:function(a,e){if(a.tagName=="OPTION")switch(typeof e){case "string":case "number":p.a.h.set(a,p.c.options.ha,m);"__ko__hasDomDataOptionValue__"in a&&delete a.__ko__hasDomDataOptionValue__;a.value=e;break;default:p.a.h.set(a,p.c.options.ha,e),a.__ko__hasDomDataOptionValue__=
!0,a.value=""}else if(a.tagName=="SELECT")for(var c=a.options.length-1;c>=0;c--){if(p.i.p(a.options[c])==e){a.selectedIndex=c;break}}else{if(e===o||e===m)e="";a.value=e}}};p.b("ko.selectExtensions",p.i);p.b("ko.selectExtensions.readValue",p.i.p);p.b("ko.selectExtensions.writeValue",p.i.S);
p.A=function(){function a(a,c){return a.replace(e,function(a,d){return c[d]})}var e=/\[ko_token_(\d+)\]/g,c=/^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,d=["true","false"];return{P:function(c){c=p.a.n(c);if(c.length<3)return{};for(var d=[],e=o,i,j=c.charAt(0)=="{"?1:0;j<c.length;j++){var k=c.charAt(j);if(e===o)switch(k){case '"':case "'":case "/":e=j;i=k;break;case "{":e=j;i="}";break;case "[":e=j,i="]"}else if(k==i){k=c.substring(e,j+1);d.push(k);var l="[ko_token_"+(d.length-
1)+"]",c=c.substring(0,e)+l+c.substring(j+1);j-=k.length-l.length;e=o}}e={};c=c.split(",");i=0;for(j=c.length;i<j;i++){var l=c[i],q=l.indexOf(":");q>0&&q<l.length-1&&(k=p.a.n(l.substring(0,q)),l=p.a.n(l.substring(q+1)),k.charAt(0)=="{"&&(k=k.substring(1)),l.charAt(l.length-1)=="}"&&(l=l.substring(0,l.length-1)),k=p.a.n(a(k,d)),l=p.a.n(a(l,d)),e[k]=l)}return e},ba:function(a){var e=p.A.P(a),h=[],i;for(i in e){var j=e[i],k;k=j;k=p.a.j(d,p.a.n(k).toLowerCase())>=0?!1:k.match(c)!==o;k&&(h.length>0&&h.push(", "),
h.push(i+" : function(__ko_value) { "+j+" = __ko_value; }"))}h.length>0&&(a=a+", '_ko_property_writers' : { "+h.join("")+" } ");return a}}}();p.b("ko.jsonExpressionRewriting",p.A);p.b("ko.jsonExpressionRewriting.parseJson",p.A.P);p.b("ko.jsonExpressionRewriting.insertPropertyAccessorsIntoJson",p.A.ba);p.c={};
p.U=function(a,e,c,d){function f(a){return function(){return i[a]}}function g(){return i}var h=!0,d=d||"data-bind",i;new p.k(function(){var j;if(!(j=typeof e=="function"?e():e)){var k=a.getAttribute(d);try{var l=" { "+p.A.ba(k)+" } ";j=p.a.ab(l,c===o?window:c)}catch(q){b(Error("Unable to parse binding attribute.\nMessage: "+q+";\nAttribute value: "+k))}}i=j;if(h)for(var n in i)p.c[n]&&typeof p.c[n].init=="function"&&(0,p.c[n].init)(a,f(n),g,c);for(n in i)p.c[n]&&typeof p.c[n].update=="function"&&
(0,p.c[n].update)(a,f(n),g,c)},o,{disposeWhenNodeIsRemoved:a});h=!1};p.Oa=function(a,e){e&&e.nodeType==m&&b(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node (note: this is a breaking change since KO version 1.05)"));var e=e||window.document.body,c=p.a.ta(e,"data-bind");p.a.e(c,function(c){p.U(c,o,a)})};p.b("ko.bindingHandlers",p.c);p.b("ko.applyBindings",p.Oa);p.b("ko.applyBindingsToNode",p.U);
p.a.e(["click"],function(a){p.c[a]={init:function(e,c,d,f){return p.c.event.init.call(this,e,function(){var d={};d[a]=c();return d},d,f)}}});p.c.event={init:function(a,e,c,d){var f=e()||{},g;for(g in f)(function(){var f=g;typeof f=="string"&&p.a.B(a,f,function(a){var g,k=e()[f];if(k){var l=c();try{g=k.apply(d,arguments)}finally{if(g!==!0)a.preventDefault?a.preventDefault():a.returnValue=!1}if(l[f+"Bubble"]===!1)a.cancelBubble=!0,a.stopPropagation&&a.stopPropagation()}})})()}};
p.c.submit={init:function(a,e,c,d){typeof e()!="function"&&b(Error("The value for a submit binding must be a function to invoke on submit"));p.a.B(a,"submit",function(c){var g,h=e();try{g=h.call(d,a)}finally{if(g!==!0)c.preventDefault?c.preventDefault():c.returnValue=!1}})}};p.c.visible={update:function(a,e){var c=p.a.d(e()),d=a.style.display!="none";if(c&&!d)a.style.display="";else if(!c&&d)a.style.display="none"}};
p.c.enable={update:function(a,e){var c=p.a.d(e());if(c&&a.disabled)a.removeAttribute("disabled");else if(!c&&!a.disabled)a.disabled=!0}};p.c.disable={update:function(a,e){p.c.enable.update(a,function(){return!p.a.d(e())})}};
p.c.value={init:function(a,e,c){var d=["change"],f=c().valueUpdate;f&&(typeof f=="string"&&(f=[f]),p.a.C(d,f),d=p.a.W(d));p.a.e(d,function(d){var f=!1;p.a.ub(d,"after")&&(f=!0,d=d.substring(5));var i=f?function(a){setTimeout(a,0)}:function(a){a()};p.a.B(a,d,function(){i(function(){var d=e(),f=p.i.p(a);p.O(d)?d(f):(d=c(),d._ko_property_writers&&d._ko_property_writers.value&&d._ko_property_writers.value(f))})})})},update:function(a,e){var c=p.a.d(e()),d=p.i.p(a),f=c!=d;c===0&&d!==0&&d!=="0"&&(f=!0);
f&&(d=function(){p.i.S(a,c)},d(),a.tagName=="SELECT"&&setTimeout(d,0));a.tagName=="SELECT"&&(d=p.i.p(a),d!==c&&p.a.Ja(a,"change"))}};
p.c.options={update:function(a,e,c){a.tagName!="SELECT"&&b(Error("options binding applies only to SELECT elements"));var d=p.a.X(p.a.V(a.childNodes,function(a){return a.tagName&&a.tagName=="OPTION"&&a.selected}),function(a){return p.i.p(a)||a.innerText||a.textContent}),f=a.scrollTop,g=p.a.d(e());p.a.aa(a);if(g){var h=c();typeof g.length!="number"&&(g=[g]);if(h.optionsCaption){var i=document.createElement("OPTION");i.innerHTML=h.optionsCaption;p.i.S(i,m);a.appendChild(i)}c=0;for(e=g.length;c<e;c++){var i=
document.createElement("OPTION"),j=typeof h.optionsValue=="string"?g[c][h.optionsValue]:g[c],j=p.a.d(j);p.i.S(i,j);var k=h.optionsText;optionText=typeof k=="function"?k(g[c]):typeof k=="string"?g[c][k]:j;if(optionText===o||optionText===m)optionText="";optionText=p.a.d(optionText).toString();typeof i.innerText=="string"?i.innerText=optionText:i.textContent=optionText;a.appendChild(i)}g=a.getElementsByTagName("OPTION");c=h=0;for(e=g.length;c<e;c++)p.a.j(d,p.i.p(g[c]))>=0&&(p.a.Fa(g[c],!0),h++);if(f)a.scrollTop=
f}}};p.c.options.ha="__ko.bindingHandlers.options.optionValueDomData__";
p.c.selectedOptions={va:function(a){for(var e=[],a=a.childNodes,c=0,d=a.length;c<d;c++){var f=a[c];f.tagName=="OPTION"&&f.selected&&e.push(p.i.p(f))}return e},init:function(a,e,c){p.a.B(a,"change",function(){var a=e();p.O(a)?a(p.c.selectedOptions.va(this)):(a=c(),a._ko_property_writers&&a._ko_property_writers.value&&a._ko_property_writers.value(p.c.selectedOptions.va(this)))})},update:function(a,e){a.tagName!="SELECT"&&b(Error("values binding applies only to SELECT elements"));var c=p.a.d(e());if(c&&
typeof c.length=="number")for(var d=a.childNodes,f=0,g=d.length;f<g;f++){var h=d[f];h.tagName=="OPTION"&&p.a.Fa(h,p.a.j(c,p.i.p(h))>=0)}}};p.c.text={update:function(a,e){var c=p.a.d(e());if(c===o||c===m)c="";typeof a.innerText=="string"?a.innerText=c:a.textContent=c}};p.c.html={update:function(a,e){var c=p.a.d(e());p.a.tb(a,c)}};p.c.css={update:function(a,e){var c=p.a.d(e()||{}),d;for(d in c)if(typeof d=="string"){var f=p.a.d(c[d]);p.a.Ia(a,d,f)}}};
p.c.style={update:function(a,e){var c=p.a.d(e()||{}),d;for(d in c)if(typeof d=="string"){var f=p.a.d(c[d]);a.style[d]=f||""}}};p.c.uniqueName={init:function(a,e){if(e())a.name="ko_unique_"+ ++p.c.uniqueName.Va,p.a.ca&&a.mergeAttributes(document.createElement("<input name='"+a.name+"'/>"),!1)}};p.c.uniqueName.Va=0;
p.c.checked={init:function(a,e,c){p.a.B(a,"click",function(){var d;if(a.type=="checkbox")d=a.checked;else if(a.type=="radio"&&a.checked)d=a.value;else return;var f=e();a.type=="checkbox"&&p.a.d(f)instanceof Array?(d=p.a.j(p.a.d(f),a.value),a.checked&&d<0?f.push(a.value):!a.checked&&d>=0&&f.splice(d,1)):p.O(f)?f()!==d&&f(d):(f=c(),f._ko_property_writers&&f._ko_property_writers.checked&&f._ko_property_writers.checked(d))});a.type=="radio"&&!a.name&&p.c.uniqueName.init(a,function(){return!0})},update:function(a,
e){var c=p.a.d(e());if(a.type=="checkbox")a.checked=c instanceof Array?p.a.j(c,a.value)>=0:c,c&&p.a.ca&&a.mergeAttributes(document.createElement("<input type='checkbox' checked='checked' />"),!1);else if(a.type=="radio")a.checked=a.value==c,a.value==c&&(p.a.ca||p.a.gb)&&a.mergeAttributes(document.createElement("<input type='radio' checked='checked' />"),!1)}};
p.c.attr={update:function(a,e){var c=p.a.d(e())||{},d;for(d in c)if(typeof d=="string"){var f=p.a.d(c[d]);f===!1||f===o||f===m?a.removeAttribute(d):a.setAttribute(d,f.toString())}}};
p.ma=function(){this.renderTemplate=function(){b("Override renderTemplate in your ko.templateEngine subclass")};this.isTemplateRewritten=function(){b("Override isTemplateRewritten in your ko.templateEngine subclass")};this.rewriteTemplate=function(){b("Override rewriteTemplate in your ko.templateEngine subclass")};this.createJavaScriptEvaluatorBlock=function(){b("Override createJavaScriptEvaluatorBlock in your ko.templateEngine subclass")}};p.b("ko.templateEngine",p.ma);
p.Q=function(){var a=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi;return{$a:function(a,c){c.isTemplateRewritten(a)||c.rewriteTemplate(a,function(a){return p.Q.kb(a,c)})},kb:function(e,c){return e.replace(a,function(a,e,g,h,i,j,k){a=p.A.ba(k);return c.createJavaScriptEvaluatorBlock("ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {                     return (function() { return { "+a+" } })()                 })")+e})},
Pa:function(a){return p.o.fa(function(c,d){c.nextSibling&&p.U(c.nextSibling,a,d)})}}}();p.b("ko.templateRewriting",p.Q);p.b("ko.templateRewriting.applyMemoizedBindingsToNextSibling",p.Q.Pa);
(function(){function a(a,d,f,g,h){var i=p.a.d(g),h=h||{},j=h.templateEngine||e;p.Q.$a(f,j);f=j.renderTemplate(f,i,h);(typeof f.length!="number"||f.length>0&&typeof f[0].nodeType!="number")&&b("Template engine must return an array of DOM nodes");f&&p.a.e(f,function(a){p.o.La(a,[g])});switch(d){case "replaceChildren":p.a.sb(a,f);break;case "replaceNode":p.a.Da(a,f);break;case "ignoreTargetNode":break;default:b(Error("Unknown renderMode: "+d))}h.afterRender&&h.afterRender(f,g);return f}var e;p.Ga=function(a){a!=
m&&!(a instanceof p.ma)&&b("templateEngine must inherit from ko.templateEngine");e=a};p.ia=function(c,d,f,g,h){f=f||{};(f.templateEngine||e)==m&&b("Set a template engine before calling renderTemplate");h=h||"replaceChildren";if(g){var i=g.nodeType?g:g.length>0?g[0]:o;return new p.k(function(){var e=typeof c=="function"?c(d):c,e=a(g,h,e,d,f);h=="replaceNode"&&(g=e,i=g.nodeType?g:g.length>0?g[0]:o)},o,{disposeWhen:function(){return!i||!p.a.$(i)},disposeWhenNodeIsRemoved:i&&h=="replaceNode"?i.parentNode:
i})}else return p.o.fa(function(a){p.ia(c,d,f,a,"replaceNode")})};p.rb=function(c,d,e,g){return new p.k(function(){var h=p.a.d(d)||[];typeof h.length=="undefined"&&(h=[h]);h=p.a.V(h,function(a){return e.includeDestroyed||!a._destroy});p.a.Ea(g,h,function(d){var g=typeof c=="function"?c(d):c;return a(o,"ignoreTargetNode",g,d,e)},e)},o,{disposeWhenNodeIsRemoved:g})};p.c.template={update:function(a,d,e,g){d=p.a.d(d());e=typeof d=="string"?d:d.name;if(typeof d.foreach!="undefined")g=p.rb(e,d.foreach||
[],{templateOptions:d.templateOptions,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,includeDestroyed:d.includeDestroyed,afterRender:d.afterRender},a);else var h=d.data,g=p.ia(e,typeof h=="undefined"?g:h,{templateOptions:d.templateOptions,afterRender:d.afterRender},a);(d=p.a.h.get(a,"__ko__templateSubscriptionDomDataKey__"))&&typeof d.q=="function"&&d.q();p.a.h.set(a,"__ko__templateSubscriptionDomDataKey__",g)}}})();p.b("ko.setTemplateEngine",p.Ga);p.b("ko.renderTemplate",p.ia);
p.a.F=function(a,e,c){if(c===m)return p.a.F(a,e,1)||p.a.F(a,e,10)||p.a.F(a,e,Number.MAX_VALUE);else{for(var a=a||[],e=e||[],d=a,f=e,g=[],h=0;h<=f.length;h++)g[h]=[];for(var h=0,i=Math.min(d.length,c);h<=i;h++)g[0][h]=h;h=1;for(i=Math.min(f.length,c);h<=i;h++)g[h][0]=h;for(var i=d.length,j,k=f.length,h=1;h<=i;h++){var l=Math.min(k,h+c);for(j=Math.max(1,h-c);j<=l;j++)g[j][h]=d[h-1]===f[j-1]?g[j-1][h-1]:Math.min(g[j-1][h]===m?Number.MAX_VALUE:g[j-1][h]+1,g[j][h-1]===m?Number.MAX_VALUE:g[j][h-1]+1)}c=
a.length;d=e.length;f=[];h=g[d][c];if(h===m)g=o;else{for(;c>0||d>0;){i=g[d][c];j=d>0?g[d-1][c]:h+1;k=c>0?g[d][c-1]:h+1;l=d>0&&c>0?g[d-1][c-1]:h+1;if(j===m||j<i-1)j=h+1;if(k===m||k<i-1)k=h+1;l<i-1&&(l=h+1);j<=k&&j<l?(f.push({status:"added",value:e[d-1]}),d--):(k<j&&k<l?f.push({status:"deleted",value:a[c-1]}):(f.push({status:"retained",value:a[c-1]}),d--),c--)}g=f.reverse()}return g}};p.b("ko.utils.compareArrays",p.a.F);
(function(){function a(a,c,d){var f=[],a=p.k(function(){var a=c(d)||[];f.length>0&&p.a.Da(f,a);f.splice(0,f.length);p.a.C(f,a)},o,{disposeWhenNodeIsRemoved:a,disposeWhen:function(){return f.length==0||!p.a.$(f[0])}});return{ib:f,k:a}}p.a.Ea=function(e,c,d,f){for(var c=c||[],f=f||{},g=p.a.h.get(e,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===m,h=p.a.h.get(e,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],i=p.a.X(h,function(a){return a.Qa}),j=p.a.F(i,c),c=[],k=0,l=[],i=[],q=
o,n=0,r=j.length;n<r;n++)switch(j[n].status){case "retained":var s=h[k];c.push(s);s.M.length>0&&(q=s.M[s.M.length-1]);k++;break;case "deleted":h[k].k.q();p.a.e(h[k].M,function(a){l.push({element:a,index:n,value:j[n].value});q=a});k++;break;case "added":var t=a(e,d,j[n].value),s=t.ib;c.push({Qa:j[n].value,M:s,k:t.k});for(var t=0,w=s.length;t<w;t++){var u=s[t];i.push({element:u,index:n,value:j[n].value});q==o?e.firstChild?e.insertBefore(u,e.firstChild):e.appendChild(u):q.nextSibling?e.insertBefore(u,
q.nextSibling):e.appendChild(u);q=u}}p.a.e(l,function(a){p.D(a.element)});d=!1;if(!g){if(f.afterAdd)for(n=0;n<i.length;n++)f.afterAdd(i[n].element,i[n].index,i[n].value);if(f.beforeRemove){for(n=0;n<l.length;n++)f.beforeRemove(l[n].element,l[n].index,l[n].value);d=!0}}d||p.a.e(l,function(a){a.element.parentNode&&a.element.parentNode.removeChild(a.element)});p.a.h.set(e,"setDomNodeChildrenFromArrayMapping_lastMappingResult",c)}})();p.b("ko.utils.setDomNodeChildrenFromArrayMapping",p.a.Ea);
p.da=function(){this.z=function(){if(typeof jQuery=="undefined"||!jQuery.tmpl)return 0;if(jQuery.tmpl.tag){if(jQuery.tmpl.tag.tmpl&&jQuery.tmpl.tag.tmpl.open&&jQuery.tmpl.tag.tmpl.open.toString().indexOf("__")>=0)return 3;return 2}return 1}();this.getTemplateNode=function(a){var c=document.getElementById(a);c==o&&b(Error("Cannot find template with ID="+a));return c};var a=RegExp("__ko_apos__","g");this.renderTemplate=function(e,c,d){d=d||{};this.z==0&&b(Error("jquery.tmpl not detected.\nTo use KO's default template engine, reference jQuery and jquery.tmpl. See Knockout installation documentation for more details."));
if(this.z==1)return e='<script type="text/html">'+this.getTemplateNode(e).text+"<\/script>",c=jQuery.tmpl(e,c)[0].text.replace(a,"'"),jQuery.clean([c],document);if(!(e in jQuery.template)){var f=this.getTemplateNode(e).text;jQuery.template(e,f)}c=[c];c=jQuery.tmpl(e,c,d.templateOptions);c.appendTo(document.createElement("div"));jQuery.fragments={};return c};this.isTemplateRewritten=function(a){if(a in jQuery.template)return!0;return this.getTemplateNode(a).hb===!0};this.rewriteTemplate=function(a,
c){var d=this.getTemplateNode(a),f=c(d.text);this.z==1&&(f=p.a.n(f),f=f.replace(/([\s\S]*?)(\${[\s\S]*?}|{{[\=a-z][\s\S]*?}}|$)/g,function(a,c,d){return c.replace(/\'/g,"__ko_apos__")+d}));d.text=f;d.hb=!0};this.createJavaScriptEvaluatorBlock=function(a){if(this.z==1)return"{{= "+a+"}}";return"{{ko_code ((function() { return "+a+" })()) }}"};this.Na=function(a,c){document.write("<script type='text/html' id='"+a+"'>"+c+"<\/script>")};p.l(this,"addTemplate",this.Na);this.z>1&&(jQuery.tmpl.tag.ko_code=
{open:(this.z<3?"_":"__")+".push($1 || '');"})};p.da.prototype=new p.ma;p.Ga(new p.da);p.b("ko.jqueryTmplTemplateEngine",p.da);
})(window);
