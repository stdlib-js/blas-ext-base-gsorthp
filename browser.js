// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,u=o.__defineSetter__,a=o.__lookupGetter__,l=o.__lookupSetter__,f=t,c=function(e,r,t){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(a.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},_=r()?f:c,p=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=Number.POSITIVE_INFINITY,s=function(e){return 0===e&&1/e===d},b=function(e){return e!=e},y=Math.floor;function v(e,r,t,o){var n,i,u,a,l,f,c,_,p,d;if(e<=0||0===r)return t;for(r<0&&(o*=-1),n=o<0?(1-e)*o:0,f=e,i=y(e/2);;){if(i>0)c=t[n+(i-=1)*o];else{if(0==(f-=1))return t;c=t[_=n+f*o],t[_]=t[n]}for(u=2*(p=i)+1;u<f&&((d=u+1)<f&&((a=t[n+d*o])>(l=t[n+u*o])||b(a)||a===l&&s(a))&&(u+=1),(a=t[n+u*o])>c||b(a)||a===c&&s(a));)t[n+p*o]=a,u=2*(p=u)+1;t[n+p*o]=c}}return p(v,"ndarray",(function(e,r,t,o,n){var i,u,a,l,f,c,_,p,d;if(e<=0||0===r)return t;for(r<0&&(n-=(e-1)*(o*=-1)),f=e,i=y(e/2);;){if(i>0)c=t[n+(i-=1)*o];else{if(0==(f-=1))return t;c=t[_=n+f*o],t[_]=t[n]}for(u=2*(p=i)+1;u<f&&((d=u+1)<f&&((a=t[n+d*o])>(l=t[n+u*o])||b(a)||a===l&&s(a))&&(u+=1),(a=t[n+u*o])>c||b(a)||a===c&&s(a));)t[n+p*o]=a,u=2*(p=u)+1;t[n+p*o]=c}})),v},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gsorthp=r();
//# sourceMappingURL=browser.js.map
