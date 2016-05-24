!function(e){function t(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=d.p+""+e+"."+_+".hot-update.js",t.appendChild(r)}function r(e){if("undefined"==typeof XMLHttpRequest)return e(new Error("No browser support"));try{var t=new XMLHttpRequest,r=d.p+""+_+".hot-update.json";t.open("GET",r,!0),t.timeout=1e4,t.send(null)}catch(n){return e(n)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)e(new Error("Manifest request to "+r+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)e(new Error("Manifest request to "+r+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(o){return void e(o)}e(null,n)}}}function n(e){function t(e,t){"ready"===E&&i("prepare"),T++,d.e(e,function(){function r(){T--,"prepare"===E&&(j[e]||c(e),0===T&&0===P&&f())}try{t.call(null,n)}finally{r()}})}var r=S[e];if(!r)return d;var n=function(t){return r.hot.active?S[t]?(S[t].parents.indexOf(e)<0&&S[t].parents.push(e),r.children.indexOf(t)<0&&r.children.push(t)):O=[e]:(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),O=[]),d(t)};for(var o in d)Object.prototype.hasOwnProperty.call(d,o)&&(h?Object.defineProperty(n,o,function(e){return{configurable:!0,enumerable:!0,get:function(){return d[e]},set:function(t){d[e]=t}}}(o)):n[o]=d[o]);return h?Object.defineProperty(n,"e",{enumerable:!0,value:t}):n.e=t,n}function o(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(e,r){if("undefined"==typeof e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r;else t._acceptedDependencies[e]=r},decline:function(e){if("undefined"==typeof e)t._selfDeclined=!0;else if("number"==typeof e)t._declinedDependencies[e]=!0;else for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:a,apply:l,status:function(e){return e?void x.push(e):E},addStatusHandler:function(e){x.push(e)},removeStatusHandler:function(e){var t=x.indexOf(e);t>=0&&x.splice(t,1)},data:g[e]};return t}function i(e){E=e;for(var t=0;t<x.length;t++)x[t].call(null,e)}function s(e){var t=+e+""===e;return t?+e:e}function a(e,t){if("idle"!==E)throw new Error("check() is only allowed in idle status");"function"==typeof e?(w=!1,t=e):(w=e,t=t||function(e){if(e)throw e}),i("check"),r(function(e,r){if(e)return t(e);if(!r)return i("idle"),void t(null,null);A={},D={},j={};for(var n=0;n<r.c.length;n++)D[r.c[n]]=!0;b=r.h,i("prepare"),v=t,m={};var o=0;c(o),"prepare"===E&&0===T&&0===P&&f()})}function u(e,t){if(D[e]&&A[e]){A[e]=!1;for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(m[r]=t[r]);0===--P&&0===T&&f()}}function c(e){D[e]?(A[e]=!0,P++,t(e)):j[e]=!0}function f(){i("ready");var e=v;if(v=null,e)if(w)l(w,e);else{var t=[];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&t.push(s(r));e(null,t)}}function l(t,r){function n(e){for(var t=[e],r={},n=t.slice();n.length>0;){var i=n.pop(),e=S[i];if(e&&!e.hot._selfAccepted){if(e.hot._selfDeclined)return new Error("Aborted because of self decline: "+i);if(0===i)return;for(var s=0;s<e.parents.length;s++){var a=e.parents[s],u=S[a];if(u.hot._declinedDependencies[i])return new Error("Aborted because of declined dependency: "+i+" in "+a);t.indexOf(a)>=0||(u.hot._acceptedDependencies[i]?(r[a]||(r[a]=[]),o(r[a],[i])):(delete r[a],t.push(a),n.push(a)))}}}return[t,r]}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];e.indexOf(n)<0&&e.push(n)}}if("ready"!==E)throw new Error("apply() is only allowed in ready status");"function"==typeof t?(r=t,t={}):t&&"object"==typeof t?r=r||function(e){if(e)throw e}:(t={},r=r||function(e){if(e)throw e});var a={},u=[],c={};for(var f in m)if(Object.prototype.hasOwnProperty.call(m,f)){var l=s(f),p=n(l);if(!p){if(t.ignoreUnaccepted)continue;return i("abort"),r(new Error("Aborted because "+l+" is not accepted"))}if(p instanceof Error)return i("abort"),r(p);c[l]=m[l],o(u,p[0]);for(var l in p[1])Object.prototype.hasOwnProperty.call(p[1],l)&&(a[l]||(a[l]=[]),o(a[l],p[1][l]))}for(var h=[],y=0;y<u.length;y++){var l=u[y];S[l]&&S[l].hot._selfAccepted&&h.push({module:l,errorHandler:S[l].hot._selfAccepted})}i("dispose");for(var v=u.slice();v.length>0;){var l=v.pop(),w=S[l];if(w){for(var x={},P=w.hot._disposeHandlers,T=0;T<P.length;T++){var j=P[T];j(x)}g[l]=x,w.hot.active=!1,delete S[l];for(var T=0;T<w.children.length;T++){var A=S[w.children[T]];if(A){var D=A.parents.indexOf(l);D>=0&&A.parents.splice(D,1)}}}}for(var l in a)if(Object.prototype.hasOwnProperty.call(a,l))for(var w=S[l],k=a[l],T=0;T<k.length;T++){var H=k[T],D=w.children.indexOf(H);D>=0&&w.children.splice(D,1)}i("apply"),_=b;for(var l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);var R=null;for(var l in a)if(Object.prototype.hasOwnProperty.call(a,l)){for(var w=S[l],k=a[l],U=[],y=0;y<k.length;y++){var H=k[y],j=w.hot._acceptedDependencies[H];U.indexOf(j)>=0||U.push(j)}for(var y=0;y<U.length;y++){var j=U[y];try{j(a)}catch(B){R||(R=B)}}}for(var y=0;y<h.length;y++){var N=h[y],l=N.module;O=[l];try{d(l)}catch(B){if("function"==typeof N.errorHandler)try{N.errorHandler(B)}catch(B){R||(R=B)}else R||(R=B)}}return R?(i("fail"),r(R)):(i("idle"),void r(null,u))}function d(t){if(S[t])return S[t].exports;var r=S[t]={exports:{},id:t,loaded:!1,hot:o(t),parents:O,children:[]};return e[t].call(r.exports,r,r.exports,n(t)),r.loaded=!0,r.exports}var p=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){u(e,t),p&&p(e,t)};var h=!1;try{Object.defineProperty({},"x",{get:function(){}}),h=!0}catch(y){}var v,m,b,w=!0,_="5d02faf4a29dee890a1f",g={},O=[],x=[],E="idle",P=0,T=0,j={},A={},D={},S={};return d.m=e,d.c=S,d.p="",d.h=function(){return _},n(0)(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=r(4),i=n(o),s=r(3),a=n(s);i["default"].findOne(20).then(function(e){console.log(e)}),a["default"].findOne(20).then(function(e){console.log(e)}),window.User=i["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=this.pkey;return t&&console.log("pkey ==>",t),0!==e.code?console.error("server wrong",e.msg):console.info("ok"),e.res}},function(e,t,r){"use strict";r(9),r(5).polyfill();var n=function(e){var t={type:e.type,"default":e["default"]};return e.hasOwnProperty("type")&&-1===[void 0,null].indexOf(e.type)&&(-1===[void 0,null].indexOf(e["default"])&&e["default"].constructor===e.type||(t["default"]=e.type.call(null))),t},o=function(e,t){var r=e.slice(0);return-1===r.indexOf(t)&&r.push(t),r},i=function(e){var t={},r=[];return e?(e.constructor===Array?e.map(function(e){if(e.constructor===String)t[e]=n(e),r=o(r,e);else if(e.constructor===Object&&e.hasOwnProperty("name")){var i=e.name;t[i]=n(e),r=o(r,i)}}):e.constructor===Object&&Object.keys(e).map(function(i){e.hasOwnProperty(i)&&(t[i]=n(e[i]),r=o(r,i))}),{fields:t,fieldNames:r}):{fields:t,fieldNames:r}},s=function(e){"string"!=typeof e&&(e=""),"/"!==e.charAt(0)&&0!==e.indexOf("http")&&0!==e.indexOf("https")&&(e="/"+e);var t=e.length-1;return t>0&&"/"===e.charAt(t)&&(e=e.slice(0,t)),e},a=function(e){var t={};if(e){var r=e.pkey,n=e.parseData;"string"==typeof r&&r&&(t.pkey=r.trim()),"function"==typeof n&&(t.parseData=n)}return t},u=function(e){return e&&e.constructor===Object?0===Object.getOwnPropertyNames(e).length?"":Object.keys(e).reduce(function(t,r,n){return 0===n?""+t+r+"="+e[r]:t+"&"+r+"="+e[r]},"?"):""},c=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];t=t||{};var r=t.headers||{};return t.hasOwnProperty("method")||(t.method="GET"),r["Content-Type"]||(r["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8"),r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),t.credentials||(t.credentials="same-origin"),t.headers=r,new Promise(function(r,n){fetch(e,t).then(function(e){e.status>=200&&e.status<300?r(e.json()):n(e)})["catch"](n)})},f=function d(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(void 0===e||null===e||e.constructor!==Object)return console.error("model is invalid, did you forget to pass model object"),{};e.hasOwnProperty("name")||console.warn("model needs a name, could not register to model manager"),e=Object.assign({fieldNames:null},e,d.prototype,a(t)),e.url=s(e.url);var r=i(e.fields),n=r.fields,o=r.fieldNames;return e.fields=n,e.fieldNames=o,e.hasOwnProperty("name")&&(d.models[e.name]=e,d.modelNames.push(e.name)),e};f.models={},f.modelNames=[],f.trimParams=function(e,t){var r=f.models[e];if(!r)return console.warn("Model is not defined"),t;var n=r.fields;return Object.keys(n).forEach(function(e){var r=n[e];if(t.hasOwnProperty(e)){var o=t[e],i=-1===[void 0,null].indexOf(r.type),s=-1===[void 0,null].indexOf(o);if(i||s||delete t[e],i&&(!s||o.constructor!==r.type)){var a=-1===[void 0,null].indexOf(o);t[e]=a?r["default"]:r.type.call(null)}}else r.type&&(t[e]=r.type.call(null))}),t},f.drop=function(e){delete f.models[e];var t=f.modelNames;return t.splice(t.indexOf(e),1)};var l=function(e,t,r){return void 0===r?t:t.then(function(t){return r.call(e,t)})};f.prototype={pkey:"_id",findOne:function(e,t){var r=c(this.url+"/"+e+u(t));return-1===[void 0,null].indexOf(e)&&e.constructor===Object&&(r=c(this.url+"/"+e[this.pkey]+u(t))),l(this,r,this.parseData)},find:function(e){var t=c(""+this.url+u(e));return l(this,t,this.parseData)},update:function(e){var t=e[this.pkey];delete e[this.pkey];var r=f.trimParams(this.name,e);r=Object.assign({method:"PUT"},{body:JSON.stringify(r)});var n=c(this.url+"/"+t,r);return l(this,n,this.parseData)},create:function(e){delete e[this.pkey];var t=f.trimParams(this.name,e);t=Object.assign({method:"POST"},{body:JSON.stringify(e)});var r=c(""+this.url,t);return l(this,r,this.parseData)},save:function(e){return e&&e[this.pkey]?this.update(e):this.create(e)},destroy:function(e){var t=e[this.pkey];delete e[this.pkey];var r=c(this.url+"/"+t+u(e),{method:"DELETE"});return l(this,r,this.parseData)}},e.exports=f},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),i=n(o),s=r(1),a=n(s);t["default"]=new i["default"]({name:"post",url:"/v1/post",fields:["title","content","footer"]},{parseData:a["default"]})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),i=n(o),s=r(1),a=n(s);console.log(a["default"]),t["default"]=new i["default"]({url:"v1/user",name:"user",fields:{name:{type:String,"default":""},age:{type:Number},gender:{type:String,"default":"male"},photos:{type:Array},social:{type:Object}}},{pkey:"id",parseData:a["default"]})},function(e,t,r){var n;(function(e,o,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.1.2
	 */
(function(){"use strict";function s(e){return"function"==typeof e||"object"==typeof e&&null!==e}function a(e){return"function"==typeof e}function u(e){Y=e}function c(e){Q=e}function f(){return function(){e.nextTick(y)}}function l(){return function(){W(y)}}function d(){var e=0,t=new ee(y),r=document.createTextNode("");return t.observe(r,{characterData:!0}),function(){r.data=e=++e%2}}function p(){var e=new MessageChannel;return e.port1.onmessage=y,function(){e.port2.postMessage(0)}}function h(){return function(){setTimeout(y,1)}}function y(){for(var e=0;$>e;e+=2){var t=ne[e],r=ne[e+1];t(r),ne[e]=void 0,ne[e+1]=void 0}$=0}function v(){try{var e=r(10);return W=e.runOnLoop||e.runOnContext,l()}catch(t){return h()}}function m(e,t){var r=this,n=r._state;if(n===ae&&!e||n===ue&&!t)return this;var o=new this.constructor(w),i=r._result;if(n){var s=arguments[n-1];Q(function(){B(n,o,s,i)})}else k(r,o,e,t);return o}function b(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var r=new t(w);return j(r,e),r}function w(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function g(){return new TypeError("A promises callback cannot return that same promise.")}function O(e){try{return e.then}catch(t){return ce.error=t,ce}}function x(e,t,r,n){try{e.call(t,r,n)}catch(o){return o}}function E(e,t,r){Q(function(e){var n=!1,o=x(r,t,function(r){n||(n=!0,t!==r?j(e,r):D(e,r))},function(t){n||(n=!0,S(e,t))},"Settle: "+(e._label||" unknown promise"));!n&&o&&(n=!0,S(e,o))},e)}function P(e,t){t._state===ae?D(e,t._result):t._state===ue?S(e,t._result):k(t,void 0,function(t){j(e,t)},function(t){S(e,t)})}function T(e,t,r){t.constructor===e.constructor&&r===oe&&constructor.resolve===ie?P(e,t):r===ce?S(e,ce.error):void 0===r?D(e,t):a(r)?E(e,t,r):D(e,t)}function j(e,t){e===t?S(e,_()):s(t)?T(e,t,O(t)):D(e,t)}function A(e){e._onerror&&e._onerror(e._result),H(e)}function D(e,t){e._state===se&&(e._result=t,e._state=ae,0!==e._subscribers.length&&Q(H,e))}function S(e,t){e._state===se&&(e._state=ue,e._result=t,Q(A,e))}function k(e,t,r,n){var o=e._subscribers,i=o.length;e._onerror=null,o[i]=t,o[i+ae]=r,o[i+ue]=n,0===i&&e._state&&Q(H,e)}function H(e){var t=e._subscribers,r=e._state;if(0!==t.length){for(var n,o,i=e._result,s=0;s<t.length;s+=3)n=t[s],o=t[s+r],n?B(r,n,o,i):o(i);e._subscribers.length=0}}function R(){this.error=null}function U(e,t){try{return e(t)}catch(r){return fe.error=r,fe}}function B(e,t,r,n){var o,i,s,u,c=a(r);if(c){if(o=U(r,n),o===fe?(u=!0,i=o.error,o=null):s=!0,t===o)return void S(t,g())}else o=n,s=!0;t._state!==se||(c&&s?j(t,o):u?S(t,i):e===ae?D(t,o):e===ue&&S(t,o))}function N(e,t){try{t(function(t){j(e,t)},function(t){S(e,t)})}catch(r){S(e,r)}}function M(e){return new ve(this,e).promise}function L(e){function t(e){j(o,e)}function r(e){S(o,e)}var n=this,o=new n(w);if(!K(e))return S(o,new TypeError("You must pass an array to race.")),o;for(var i=e.length,s=0;o._state===se&&i>s;s++)k(n.resolve(e[s]),void 0,t,r);return o}function q(e){var t=this,r=new t(w);return S(r,e),r}function F(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function C(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function I(e){this._id=he++,this._state=void 0,this._result=void 0,this._subscribers=[],w!==e&&("function"!=typeof e&&F(),this instanceof I?N(this,e):C())}function X(e,t){this._instanceConstructor=e,this.promise=new e(w),Array.isArray(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?D(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&D(this.promise,this._result))):S(this.promise,this._validationError())}function G(){var e;if("undefined"!=typeof o)e=o;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var r=e.Promise;r&&"[object Promise]"===Object.prototype.toString.call(r.resolve())&&!r.cast||(e.Promise=ye)}var J;J=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var W,Y,z,K=J,$=0,Q=function(e,t){ne[$]=e,ne[$+1]=t,$+=2,2===$&&(Y?Y(y):z())},V="undefined"!=typeof window?window:void 0,Z=V||{},ee=Z.MutationObserver||Z.WebKitMutationObserver,te="undefined"!=typeof e&&"[object process]"==={}.toString.call(e),re="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3);z=te?f():ee?d():re?p():void 0===V?v():h();var oe=m,ie=b,se=void 0,ae=1,ue=2,ce=new R,fe=new R,le=M,de=L,pe=q,he=0,ye=I;I.all=le,I.race=de,I.resolve=ie,I.reject=pe,I._setScheduler=u,I._setAsap=c,I._asap=Q,I.prototype={constructor:I,then:oe,"catch":function(e){return this.then(null,e)}};var ve=X;X.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},X.prototype._enumerate=function(){for(var e=this.length,t=this._input,r=0;this._state===se&&e>r;r++)this._eachEntry(t[r],r)},X.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,n=r.resolve;if(n===ie){var o=O(e);if(o===oe&&e._state!==se)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(r===ye){var i=new r(w);T(i,e,o),this._willSettleAt(i,t)}else this._willSettleAt(new r(function(t){t(e)}),t)}else this._willSettleAt(n(e),t)},X.prototype._settledAt=function(e,t,r){var n=this.promise;n._state===se&&(this._remaining--,e===ue?S(n,r):this._result[t]=r),0===this._remaining&&D(n,this._result)},X.prototype._willSettleAt=function(e,t){var r=this;k(e,void 0,function(e){r._settledAt(ae,t,e)},function(e){r._settledAt(ue,t,e)})};var me=G,be={Promise:ye,polyfill:me};r(7).amd?(n=function(){return be}.call(t,r,t,i),!(void 0!==n&&(i.exports=n))):"undefined"!=typeof i&&i.exports?i.exports=be:"undefined"!=typeof this&&(this.ES6Promise=be),me()}).call(this)}).call(t,r(6),function(){return this}(),r(8)(e))},function(e,t){function r(){c=!1,s.length?u=s.concat(u):f=-1,u.length&&n()}function n(){if(!c){var e=setTimeout(r);c=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,c=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function i(){}var s,a=e.exports={},u=[],c=!1,f=-1;a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new o(e,t)),1!==u.length||c||setTimeout(n,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=i,a.addListener=i,a.once=i,a.off=i,a.removeListener=i,a.removeAllListeners=i,a.emit=i,a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return y.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function s(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function a(e){var t=new FileReader;return t.readAsArrayBuffer(e),s(t)}function u(e){var t=new FileReader;return t.readAsText(e),s(t)}function c(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,"string"==typeof e)this._bodyText=e;else if(y.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(y.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(e){if(!y.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},y.blob?(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(a)},this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var e=i(this);return e?e:Promise.resolve(this._bodyText)},y.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(e){var t=e.toUpperCase();return v.indexOf(t)>-1?t:e}function l(e,t){t=t||{};var r=t.body;if(l.prototype.isPrototypeOf(e)){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,r||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=e;if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=f(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function d(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function p(e){var t=new o,r=(e.getAllResponseHeaders()||"").trim().split("\n");return r.forEach(function(e){var r=e.trim().split(":"),n=r.shift().trim(),o=r.join(":").trim();t.append(n,o)}),t}function h(e,t){t||(t={}),this.type="default",this.status=t.status,this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText,this.headers=t.headers instanceof o?t.headers:new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var y={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};o.prototype.append=function(e,n){e=t(e),n=r(n);var o=this.map[e];o||(o=[],this.map[e]=o),o.push(n)},o.prototype["delete"]=function(e){delete this.map[t(e)]},o.prototype.get=function(e){var r=this.map[t(e)];return r?r[0]:null},o.prototype.getAll=function(e){return this.map[t(e)]||[]},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,n){this.map[t(e)]=[r(n)]},o.prototype.forEach=function(e,t){Object.getOwnPropertyNames(this.map).forEach(function(r){this.map[r].forEach(function(n){e.call(t,n,r,this)},this)},this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},y.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this)},c.call(l.prototype),c.call(h.prototype),h.prototype.clone=function(){return new h(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},h.error=function(){var e=new h(null,{status:0,statusText:""});return e.type="error",e};var m=[301,302,303,307,308];h.redirect=function(e,t){if(-1===m.indexOf(t))throw new RangeError("Invalid status code");return new h(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=l,e.Response=h,e.fetch=function(e,t){return new Promise(function(r,n){function o(){return"responseURL"in s?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):void 0}var i;i=l.prototype.isPrototypeOf(e)&&!t?e:new l(e,t);var s=new XMLHttpRequest;s.onload=function(){var e={status:s.status,statusText:s.statusText,headers:p(s),url:o()},t="response"in s?s.response:s.responseText;r(new h(t,e))},s.onerror=function(){n(new TypeError("Network request failed"))},s.ontimeout=function(){n(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials&&(s.withCredentials=!0),"responseType"in s&&y.blob&&(s.responseType="blob"),i.headers.forEach(function(e,t){s.setRequestHeader(t,e)}),s.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(e,t){}]);