"use strict";var g=function(n,c){return function(){try{return c||n((c={exports:{}}).exports,c),c.exports}catch(a){throw (c=0, a)}};};var Z=g(function(S,P){
var w=require('@stdlib/math-base-assert-is-positive-zero/dist'),j=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/math-base-special-floor/dist');function D(n,c,a,r,e){var q,u,v,h,k,i,p,o,l,s,y,b;for(v=a.data,h=a.accessors[0],k=a.accessors[1],c<0&&(r*=-1,e-=(n-1)*r),o=n,q=C(n/2);;){if(q>0)q-=1,l=h(v,e+q*r);else{if(o-=1,o===0)return a;s=e+o*r,l=h(v,s),k(v,s,h(v,e))}for(y=q,u=y*2+1;u<o&&(b=u+1,b<o&&(i=h(v,e+b*r),p=h(v,e+u*r),(i>p||j(i)||i===p&&w(i))&&(u+=1)),i=h(v,e+u*r),i>l||j(i)||i===l&&w(i));)k(v,e+y*r,i),y=u,u=y*2+1;k(v,e+y*r,l)}}P.exports=D
});var t=g(function(T,R){
var E=require('@stdlib/array-base-arraylike2object/dist'),m=require('@stdlib/math-base-assert-is-positive-zero/dist'),O=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-floor/dist'),G=Z();function H(n,c,a,r,e){var q,u,v,h,k,i,p,o,l,s;if(n<=0||c===0)return a;if(k=E(a),k.accessorProtocol)return G(n,c,k,r,e),a;for(c<0&&(r*=-1,e-=(n-1)*r),i=n,q=F(n/2);;){if(q>0)q-=1,p=a[e+q*r];else{if(i-=1,i===0)return a;o=e+i*r,p=a[o],a[o]=a[e]}for(l=q,u=l*2+1;u<i&&(s=u+1,s<i&&(v=a[e+s*r],h=a[e+u*r],(v>h||O(v)||v===h&&m(v))&&(u+=1)),v=a[e+u*r],v>p||O(v)||v===p&&m(v));)a[e+l*r]=v,l=u,u=l*2+1;a[e+l*r]=p}}R.exports=H
});var A=g(function(U,z){
var I=require('@stdlib/strided-base-stride2offset/dist'),J=t();function K(n,c,a,r){return J(n,c,a,r,I(n,r))}z.exports=K
});var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),M=t();L(B,"ndarray",M);module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
