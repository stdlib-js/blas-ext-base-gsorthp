"use strict";var g=function(n,c){return function(){return c||n((c={exports:{}}).exports,c),c.exports}};var Z=g(function(S,P){
var w=require('@stdlib/math-base-assert-is-positive-zero/dist'),j=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/math-base-special-floor/dist');function D(n,c,v,r,e){var q,u,a,h,k,i,p,o,l,s,y,b;for(a=v.data,h=v.accessors[0],k=v.accessors[1],c<0&&(r*=-1,e-=(n-1)*r),o=n,q=C(n/2);;){if(q>0)q-=1,l=h(a,e+q*r);else{if(o-=1,o===0)return v;s=e+o*r,l=h(a,s),k(a,s,h(a,e))}for(y=q,u=y*2+1;u<o&&(b=u+1,b<o&&(i=h(a,e+b*r),p=h(a,e+u*r),(i>p||j(i)||i===p&&w(i))&&(u+=1)),i=h(a,e+u*r),i>l||j(i)||i===l&&w(i));)k(a,e+y*r,i),y=u,u=y*2+1;k(a,e+y*r,l)}}P.exports=D
});var t=g(function(T,R){
var E=require('@stdlib/array-base-arraylike2object/dist'),m=require('@stdlib/math-base-assert-is-positive-zero/dist'),O=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-floor/dist'),G=Z();function H(n,c,v,r,e){var q,u,a,h,k,i,p,o,l,s;if(n<=0||c===0)return v;if(k=E(v),k.accessorProtocol)return G(n,c,k,r,e),v;for(c<0&&(r*=-1,e-=(n-1)*r),i=n,q=F(n/2);;){if(q>0)q-=1,p=v[e+q*r];else{if(i-=1,i===0)return v;o=e+i*r,p=v[o],v[o]=v[e]}for(l=q,u=l*2+1;u<i&&(s=u+1,s<i&&(a=v[e+s*r],h=v[e+u*r],(a>h||O(a)||a===h&&m(a))&&(u+=1)),a=v[e+u*r],a>p||O(a)||a===p&&m(a));)v[e+l*r]=a,l=u,u=l*2+1;v[e+l*r]=p}}R.exports=H
});var A=g(function(U,z){
var I=require('@stdlib/strided-base-stride2offset/dist'),J=t();function K(n,c,v,r){return J(n,c,v,r,I(n,r))}z.exports=K
});var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),M=t();L(B,"ndarray",M);module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
