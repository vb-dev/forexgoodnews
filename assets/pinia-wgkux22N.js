import{P as H,a as K,Q as B,w as G,r as M,s as R,R as D,S as T,U as tt,N as et,O as nt,n as st,V as ot,W as ct,c as rt}from"./@vue-z_5SRqtu.js";var ut=!1;/*!
 * pinia v2.2.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let J;const I=t=>J=t,Q=Symbol();function W(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var E;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(E||(E={}));function vt(){const t=H(!0),s=t.run(()=>K({}));let n=[],e=[];const o=B({install(u){I(o),o._a=u,u.provide(Q,o),u.config.globalProperties.$pinia=o,e.forEach(i=>n.push(i)),e=[]},use(u){return!this._a&&!ut?e.push(u):n.push(u),this},_p:n,_a:null,_e:t,_s:new Map,state:s});return o}const U=()=>{};function O(t,s,n,e=U){t.push(s);const o=()=>{const u=t.indexOf(s);u>-1&&(t.splice(u,1),e())};return!n&&et()&&nt(o),o}function d(t,...s){t.slice().forEach(n=>{n(...s)})}const at=t=>t(),$=Symbol(),L=Symbol();function N(t,s){t instanceof Map&&s instanceof Map?s.forEach((n,e)=>t.set(e,n)):t instanceof Set&&s instanceof Set&&s.forEach(t.add,t);for(const n in s){if(!s.hasOwnProperty(n))continue;const e=s[n],o=t[n];W(o)&&W(e)&&t.hasOwnProperty(n)&&!R(e)&&!D(e)?t[n]=N(o,e):t[n]=e}return t}const it=Symbol();function ft(t){return!W(t)||!t.hasOwnProperty(it)}const{assign:S}=Object;function lt(t){return!!(R(t)&&t.effect)}function ht(t,s,n,e){const{state:o,actions:u,getters:i}=s,a=n.state.value[t];let C;function b(){a||(n.state.value[t]=o?o():{});const v=ct(n.state.value[t]);return S(v,u,Object.keys(i||{}).reduce((y,m)=>(y[m]=B(rt(()=>{I(n);const _=n._s.get(t);return i[m].call(_,_)})),y),{}))}return C=q(t,b,s,n,e,!0),C}function q(t,s,n={},e,o,u){let i;const a=S({actions:{}},n),C={deep:!0};let b,v,y=[],m=[],_;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),K({});let p;function V(r){let c;b=v=!1,typeof r=="function"?(r(e.state.value[t]),c={type:E.patchFunction,storeId:t,events:_}):(N(e.state.value[t],r),c={type:E.patchObject,payload:r,storeId:t,events:_});const f=p=Symbol();st().then(()=>{p===f&&(b=!0)}),v=!0,d(y,c,e.state.value[t])}const z=u?function(){const{state:c}=n,f=c?c():{};this.$patch(P=>{S(P,f)})}:U;function X(){i.stop(),y=[],m=[],e._s.delete(t)}const F=(r,c="")=>{if($ in r)return r[L]=c,r;const f=function(){I(e);const P=Array.from(arguments),w=[],A=[];function Z(l){w.push(l)}function k(l){A.push(l)}d(m,{args:P,name:f[L],store:h,after:Z,onError:k});let x;try{x=r.apply(this&&this.$id===t?this:h,P)}catch(l){throw d(A,l),l}return x instanceof Promise?x.then(l=>(d(w,l),l)).catch(l=>(d(A,l),Promise.reject(l))):(d(w,x),x)};return f[$]=!0,f[L]=c,f},Y={_p:e,$id:t,$onAction:O.bind(null,m),$patch:V,$reset:z,$subscribe(r,c={}){const f=O(y,r,c.detached,()=>P()),P=i.run(()=>G(()=>e.state.value[t],w=>{(c.flush==="sync"?v:b)&&r({storeId:t,type:E.direct,events:_},w)},S({},C,c)));return f},$dispose:X},h=M(Y);e._s.set(t,h);const g=(e._a&&e._a.runWithContext||at)(()=>e._e.run(()=>(i=H()).run(()=>s({action:F}))));for(const r in g){const c=g[r];if(R(c)&&!lt(c)||D(c))u||(j&&ft(c)&&(R(c)?c.value=j[r]:N(c,j[r])),e.state.value[t][r]=c);else if(typeof c=="function"){const f=F(c,r);g[r]=f,a.actions[r]=c}}return S(h,g),S(T(h),g),Object.defineProperty(h,"$state",{get:()=>e.state.value[t],set:r=>{V(c=>{S(c,r)})}}),e._p.forEach(r=>{S(h,i.run(()=>r({store:h,app:e._a,pinia:e,options:a})))}),j&&u&&n.hydrate&&n.hydrate(h.$state,j),b=!0,v=!0,h}function yt(t,s,n){let e,o;const u=typeof s=="function";typeof t=="string"?(e=t,o=u?n:s):(o=t,e=t.id);function i(a,C){const b=ot();return a=a||(b?tt(Q,null):null),a&&I(a),a=J,a._s.has(e)||(u?q(e,s,o,a):ht(e,o,a)),a._s.get(e)}return i.$id=e,i}function mt(t,s){return Array.isArray(s)?s.reduce((n,e)=>(n[e]=function(){return t(this.$pinia)[e]},n),{}):Object.keys(s).reduce((n,e)=>(n[e]=function(){const o=t(this.$pinia),u=s[e];return typeof u=="function"?u.call(this,o):o[u]},n),{})}function _t(t,s){return Array.isArray(s)?s.reduce((n,e)=>(n[e]=function(...o){return t(this.$pinia)[e](...o)},n),{}):Object.keys(s).reduce((n,e)=>(n[e]=function(...o){return t(this.$pinia)[s[e]](...o)},n),{})}export{_t as a,vt as c,yt as d,mt as m};
