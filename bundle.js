// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gsorthp=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;var l=t,c=function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e},_=r()?l:c;var p=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=Number.POSITIVE_INFINITY;var s=function(e){return 0===e&&1/e===d};var b=function(e){return e!=e},y=Math.floor,v=s,m=b,g=y;var j=s,h=b,w=y;var T=function(e,r,t,n){var o,i,a,u,f,l,c,_,p,d;if(e<=0||0===r)return t;for(r<0&&(n*=-1),o=n<0?(1-e)*n:0,l=e,i=g(e/2);;){if(i>0)c=t[o+(i-=1)*n];else{if(0===(l-=1))return t;c=t[_=o+l*n],t[_]=t[o]}for(a=2*(p=i)+1;a<l&&((d=a+1)<l&&((u=t[o+d*n])>(f=t[o+a*n])||m(u)||u===f&&v(u))&&(a+=1),(u=t[o+a*n])>c||m(u)||u===c&&v(u));)t[o+p*n]=u,a=2*(p=a)+1;t[o+p*n]=c}};return p(T,"ndarray",(function(e,r,t,n,o){var i,a,u,f,l,c,_,p,d;if(e<=0||0===r)return t;for(r<0&&(o-=(e-1)*(n*=-1)),l=e,i=w(e/2);;){if(i>0)c=t[o+(i-=1)*n];else{if(0===(l-=1))return t;c=t[_=o+l*n],t[_]=t[o]}for(a=2*(p=i)+1;a<l&&((d=a+1)<l&&((u=t[o+d*n])>(f=t[o+a*n])||h(u)||u===f&&j(u))&&(a+=1),(u=t[o+a*n])>c||h(u)||u===c&&j(u));)t[o+p*n]=u,a=2*(p=a)+1;t[o+p*n]=c}})),T}));
//# sourceMappingURL=bundle.js.map
