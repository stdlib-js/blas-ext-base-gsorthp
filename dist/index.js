"use strict";var k=function(l,c){return function(){return c||l((c={exports:{}}).exports,c),c.exports}};var g=k(function(E,b){
var w=require('@stdlib/math-base-assert-is-positive-zero/dist'),y=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-special-floor/dist');function R(l,c,r,v){var i,q,e,a,p,n,h,o,u,f;if(l<=0||c===0)return r;for(c<0&&(v*=-1),v<0?i=(1-l)*v:i=0,n=l,q=O(l/2);;){if(q>0)q-=1,h=r[i+q*v];else{if(n-=1,n===0)return r;o=i+n*v,h=r[o],r[o]=r[i]}for(u=q,e=u*2+1;e<n&&(f=e+1,f<n&&(a=r[i+f*v],p=r[i+e*v],(a>p||y(a)||a===p&&w(a))&&(e+=1)),a=r[i+e*v],a>h||y(a)||a===h&&w(a));)r[i+u*v]=a,u=e,e=u*2+1;r[i+u*v]=h}}b.exports=R
});var Z=k(function(F,P){
var j=require('@stdlib/math-base-assert-is-positive-zero/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/math-base-special-floor/dist');function A(l,c,r,v,i){var q,e,a,p,n,h,o,u,f;if(l<=0||c===0)return r;for(c<0&&(v*=-1,i-=(l-1)*v),n=l,q=z(l/2);;){if(q>0)q-=1,h=r[i+q*v];else{if(n-=1,n===0)return r;o=i+n*v,h=r[o],r[o]=r[i]}for(u=q,e=u*2+1;e<n&&(f=e+1,f<n&&(a=r[i+f*v],p=r[i+e*v],(a>p||t(a)||a===p&&j(a))&&(e+=1)),a=r[i+e*v],a>h||t(a)||a===h&&j(a));)r[i+u*v]=a,u=e,e=u*2+1;r[i+u*v]=h}}P.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=g(),C=Z();B(m,"ndarray",C);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
