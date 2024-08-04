var $={};Object.defineProperty($,"__esModule",{value:!0});var te="https://js.stripe.com",ne=["auto","da","de","en","es","es-419","fi","fr","it","ja","nb","nl","pl","pt","sv","zh"],re=["auto","book","donate","pay"],oe=["required","auto"],ie={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},X=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"v3",r=arguments.length>1?arguments[1]:void 0;if(window.Stripe)r();else{var a=document.createElement("script");a.src="".concat(te,"/").concat(e),a.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(a),a.addEventListener("load",r)}},ae={pk:{type:String,required:!0},mode:{type:String,validator:function(e){return["payment","subscription"].includes(e)}},lineItems:{type:Array},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(e){return re.includes(e)}},billingAddressCollection:{type:String,default:"auto",validator:function(e){return oe.includes(e)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},locale:{type:String,default:"auto",validator:function(e){return ne.includes(e)}},shippingAddressCollection:{type:Object,validator:function(e){return e.hasOwnProperty("allowedCountries")}}},se={props:ae,template:"<div></div>",methods:{redirectToCheckout:function(){var e=this;this.$emit("loading",!0),X("v3",function(){try{var r,a=window.Stripe(e.pk);if(e.sessionId)return void a.redirectToCheckout({sessionId:e.sessionId});if(!((r=e.lineItems)===null||r===void 0)&&r.length&&!e.mode)return void console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode");var i={billingAddressCollection:e.billingAddressCollection,cancelUrl:e.cancelUrl,clientReferenceId:e.clientReferenceId,customerEmail:e.customerEmail,items:e.items,lineItems:e.lineItems,locale:e.locale,mode:e.mode,shippingAddressCollection:e.shippingAddressCollection,submitType:e.submitType,successUrl:e.successUrl};a.redirectToCheckout(i)}catch(u){console.error(u),e.$emit("error",u)}finally{e.$emit("loading",!1)}})}}};function ce(e,r){return e(r={exports:{}},r.exports),r.exports}var le=ce(function(e){var r=function(a){var i,u=Object.prototype,p=u.hasOwnProperty,f=typeof Symbol=="function"?Symbol:{},h=f.iterator||"@@iterator",d=f.asyncIterator||"@@asyncIterator",T=f.toStringTag||"@@toStringTag";function v(n,t,s,c){var o=t&&t.prototype instanceof U?t:U,m=Object.create(o.prototype),k=new M(c||[]);return m._invoke=function(S,j,l){var g=b;return function(_,L){if(g===P)throw new Error("Generator is already running");if(g===I){if(_==="throw")throw L;return J()}for(l.method=_,l.arg=L;;){var O=l.delegate;if(O){var w=H(O,l);if(w){if(w===A)continue;return w}}if(l.method==="next")l.sent=l._sent=l.arg;else if(l.method==="throw"){if(g===b)throw g=I,l.arg;l.dispatchException(l.arg)}else l.method==="return"&&l.abrupt("return",l.arg);g=P;var y=E(S,j,l);if(y.type==="normal"){if(g=l.done?I:D,y.arg===A)continue;return{value:y.arg,done:l.done}}y.type==="throw"&&(g=I,l.method="throw",l.arg=y.arg)}}}(n,s,k),m}function E(n,t,s){try{return{type:"normal",arg:n.call(t,s)}}catch(c){return{type:"throw",arg:c}}}a.wrap=v;var b="suspendedStart",D="suspendedYield",P="executing",I="completed",A={};function U(){}function B(){}function x(){}var F={};F[h]=function(){return this};var Y=Object.getPrototypeOf,N=Y&&Y(Y(V([])));N&&N!==u&&p.call(N,h)&&(F=N);var C=x.prototype=U.prototype=Object.create(F);function z(n){["next","throw","return"].forEach(function(t){n[t]=function(s){return this._invoke(t,s)}})}function R(n){var t;this._invoke=function(s,c){function o(){return new Promise(function(m,k){(function S(j,l,g,_){var L=E(n[j],n,l);if(L.type!=="throw"){var O=L.arg,w=O.value;return w&&typeof w=="object"&&p.call(w,"__await")?Promise.resolve(w.__await).then(function(y){S("next",y,g,_)},function(y){S("throw",y,g,_)}):Promise.resolve(w).then(function(y){O.value=y,g(O)},function(y){return S("throw",y,g,_)})}_(L.arg)})(s,c,m,k)})}return t=t?t.then(o,o):o()}}function H(n,t){var s=n.iterator[t.method];if(s===i){if(t.delegate=null,t.method==="throw"){if(n.iterator.return&&(t.method="return",t.arg=i,H(n,t),t.method==="throw"))return A;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return A}var c=E(s,n.iterator,t.arg);if(c.type==="throw")return t.method="throw",t.arg=c.arg,t.delegate=null,A;var o=c.arg;return o?o.done?(t[n.resultName]=o.value,t.next=n.nextLoc,t.method!=="return"&&(t.method="next",t.arg=i),t.delegate=null,A):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,A)}function ee(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function G(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function M(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(ee,this),this.reset(!0)}function V(n){if(n){var t=n[h];if(t)return t.call(n);if(typeof n.next=="function")return n;if(!isNaN(n.length)){var s=-1,c=function o(){for(;++s<n.length;)if(p.call(n,s))return o.value=n[s],o.done=!1,o;return o.value=i,o.done=!0,o};return c.next=c}}return{next:J}}function J(){return{value:i,done:!0}}return B.prototype=C.constructor=x,x.constructor=B,x[T]=B.displayName="GeneratorFunction",a.isGeneratorFunction=function(n){var t=typeof n=="function"&&n.constructor;return!!t&&(t===B||(t.displayName||t.name)==="GeneratorFunction")},a.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,x):(n.__proto__=x,T in n||(n[T]="GeneratorFunction")),n.prototype=Object.create(C),n},a.awrap=function(n){return{__await:n}},z(R.prototype),R.prototype[d]=function(){return this},a.AsyncIterator=R,a.async=function(n,t,s,c){var o=new R(v(n,t,s,c));return a.isGeneratorFunction(t)?o:o.next().then(function(m){return m.done?m.value:o.next()})},z(C),C[T]="Generator",C[h]=function(){return this},C.toString=function(){return"[object Generator]"},a.keys=function(n){var t=[];for(var s in n)t.push(s);return t.reverse(),function c(){for(;t.length;){var o=t.pop();if(o in n)return c.value=o,c.done=!1,c}return c.done=!0,c}},a.values=V,M.prototype={constructor:M,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(G),!n)for(var t in this)t.charAt(0)==="t"&&p.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=i)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if(n.type==="throw")throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function s(j,l){return m.type="throw",m.arg=n,t.next=j,l&&(t.method="next",t.arg=i),!!l}for(var c=this.tryEntries.length-1;c>=0;--c){var o=this.tryEntries[c],m=o.completion;if(o.tryLoc==="root")return s("end");if(o.tryLoc<=this.prev){var k=p.call(o,"catchLoc"),S=p.call(o,"finallyLoc");if(k&&S){if(this.prev<o.catchLoc)return s(o.catchLoc,!0);if(this.prev<o.finallyLoc)return s(o.finallyLoc)}else if(k){if(this.prev<o.catchLoc)return s(o.catchLoc,!0)}else{if(!S)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return s(o.finallyLoc)}}}},abrupt:function(n,t){for(var s=this.tryEntries.length-1;s>=0;--s){var c=this.tryEntries[s];if(c.tryLoc<=this.prev&&p.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var o=c;break}}o&&(n==="break"||n==="continue")&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var m=o?o.completion:{};return m.type=n,m.arg=t,o?(this.method="next",this.next=o.finallyLoc,A):this.complete(m)},complete:function(n,t){if(n.type==="throw")throw n.arg;return n.type==="break"||n.type==="continue"?this.next=n.arg:n.type==="return"?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):n.type==="normal"&&t&&(this.next=t),A},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var s=this.tryEntries[t];if(s.finallyLoc===n)return this.complete(s.completion,s.afterLoc),G(s),A}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var s=this.tryEntries[t];if(s.tryLoc===n){var c=s.completion;if(c.type==="throw"){var o=c.arg;G(s)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,s){return this.delegate={iterator:V(n),resultName:t,nextLoc:s},this.method==="next"&&(this.arg=i),A}},a}(e.exports);try{regeneratorRuntime=r}catch{Function("r","regeneratorRuntime = r")(r)}}),K=le;function ue(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}var de=ue;function Q(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),a.push.apply(a,i)}return a}function pe(e){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?Q(Object(a),!0).forEach(function(i){de(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}var he="card",me={props:{pk:{type:String,required:!0},stripeAccount:{type:String},apiVersion:{type:String},locale:{type:String,default:"auto"},classes:{type:Object,default:function(){return{}}},elementStyle:{type:Object,default:function(){return ie}},value:{type:String},hidePostalCode:Boolean,iconStyle:{type:String,default:"default",validator:function(e){return["solid","default"].includes(e)}},hideIcon:Boolean,disabled:Boolean},data:function(){return{loading:!1,stripe:null,elements:null,card:null}},computed:{form:function(){return document.getElementById("stripe-element-form")}},methods:{submit:function(){this.$refs.submitButtonRef.click()}},mounted:function(){var e=this;X(this.apiVersion,function(){var r={stripeAccount:e.stripeAccount,apiVersion:e.apiVersion,locale:e.locale},a={classes:e.classes,style:e.elementStyle,value:e.value,hidePostalCode:e.hidePostalCode,iconStyle:e.iconStyle,hideIcon:e.hideIcon,disabled:e.disabled};e.stripe=window.Stripe(e.pk,r),e.element=e.stripe.elements().create(he,a),e.element.mount("#stripe-element-mount-point"),e.element.on("change",function(i){var u=document.getElementById("stripe-element-errors");i.error?u.textContent=i.error.message:u.textContent=""}),e.form.addEventListener("submit",function(i){var u,p,f,h;return K.async(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,e.$emit("loading",!0),i.preventDefault(),u=pe({},e.element),e.amount&&(u.amount=e.amount),d.next=7,K.awrap(e.stripe.createToken(u));case 7:if(p=d.sent,f=p.token,!(h=p.error)){d.next=15;break}return document.getElementById("stripe-element-errors").textContent=h.message,e.$emit("error",h),d.abrupt("return");case 15:e.$emit("token",f),d.next=22;break;case 18:d.prev=18,d.t0=d.catch(0),console.error(d.t0),e.$emit("error",d.t0);case 22:return d.prev=22,e.$emit("loading",!1),d.finish(22);case 25:case"end":return d.stop()}},null,null,[[0,18,22,25]])})})}};function fe(e,r,a,i,u,p,f,h,d,T){const v=typeof a=="function"?a.options:a;let E;if(e&&e.render&&(v.render=e.render,v.staticRenderFns=e.staticRenderFns,v._compiled=!0),v._scopeId=i,r&&(E=function(b){r.call(this,h(b))}),E)if(v.functional){const b=v.render;v.render=function(D,P){return E.call(P),b(D,P)}}else{const b=v.beforeCreate;v.beforeCreate=b?[].concat(b,E):[E]}return a}const ye=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function ve(e){return(r,a)=>ge(r,a)}let q;const W={};function ge(e,r){const a=ye?r.media||"default":e,i=W[a]||(W[a]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);let u=r.source;if(r.map&&(u+=`
/*# sourceURL=`+r.map.sources[0]+" */",u+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(r.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",r.media&&i.element.setAttribute("media",r.media),q===void 0&&(q=document.head||document.getElementsByTagName("head")[0]),q.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(u),i.element.styleSheet.cssText=i.styles.filter(Boolean).join(`
`);else{const p=i.ids.size-1,f=document.createTextNode(u),h=i.element.childNodes;h[p]&&i.element.removeChild(h[p]),h.length?i.element.insertBefore(f,h[p]):i.element.appendChild(f)}}}const Ae=me;var Z=function(){var e=this.$createElement,r=this._self._c||e;return r("div",[r("form",{attrs:{id:"stripe-element-form"}},[r("div",{attrs:{id:"stripe-element-mount-point"}}),this._v(" "),this._t("stripe-element-errors",[r("div",{attrs:{id:"stripe-element-errors",role:"alert"}})]),this._v(" "),r("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},Ee=[];Z._withStripped=!0;const be=function(e){e&&e("data-v-39e29cc6_0",{source:`



































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement[data-v-39e29cc6] {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
.StripeElement--focus[data-v-39e29cc6] {
  box-shadow: 0 1px 3px 0 #cfd7df;
}
.StripeElement--invalid[data-v-39e29cc6] {
  border-color: #fa755a;
}
.StripeElement--webkit-autofill[data-v-39e29cc6] {
  background-color: #fefde5 !important;
}
.hide[data-v-39e29cc6] {
  visibility: hidden;
}
`,map:{version:3,sources:["/home/centipede/Documents/workspace/personal/vue-stripe/vue-stripe-checkout/src/elements/Card.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoIA;;;EAGA;AACA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,kBAAA;AACA",file:"Card.vue",sourcesContent:[`<template>
  <div>
    <form id="stripe-element-form">
      <div id="stripe-element-mount-point"></div>
      <slot name="stripe-element-errors">
        <div id="stripe-element-errors" role="alert"></div>
      </slot>
      <button ref="submitButtonRef" type="submit" class="hide"></button>
    </form>
  </div>
</template>

<script>
import { loadStripeSdk } from '../load-stripe-sdk';
import { SUPPORTED_ELEMENT_TYPE, DEFAULT_ELEMENT_STYLE } from '../constants';
const ELEMENT_TYPE = 'card';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    stripeAccount: {
      type: String,
    },
    apiVersion: {
      type: String,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    // element specific options
    classes: {
      type: Object,
      default: () => ({}),
    },
    elementStyle: {
      type: Object,
      default: () => (DEFAULT_ELEMENT_STYLE),
    },
    value: {
      type: String,
    },
    hidePostalCode: Boolean,
    iconStyle: {
      type: String,
      default: 'default',
      validator: value => ['solid', 'default'].includes(value),
    },
    hideIcon: Boolean,
    disabled: Boolean,
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      card: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-element-form');
    },
  },
  methods: {
    submit () {
      this.$refs.submitButtonRef.click();
    },
  },
  mounted () {
    loadStripeSdk(this.apiVersion, () => {
      const stripeOptions = {
        stripeAccount: this.stripeAccount,
        apiVersion: this.apiVersion,
        locale: this.locale,
      };
      const elementOptions = {
        classes: this.classes,
        style: this.elementStyle,
        value: this.value,
        hidePostalCode: this.hidePostalCode,
        iconStyle: this.iconStyle,
        hideIcon: this.hideIcon,
        disabled: this.disabled,
      };

      this.stripe = window.Stripe(this.pk, stripeOptions);
      this.element = this.stripe
        .elements()
        .create(ELEMENT_TYPE, elementOptions)
      this.element.mount('#stripe-element-mount-point');

      this.element.on('change', (event) => {
        var displayError = document.getElementById('stripe-element-errors');
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = '';
        }
      });

      this.form.addEventListener('submit', async (event) => {
        try {
          this.$emit('loading', true);
          event.preventDefault();
          const data = {
            ...this.element
          };
          if (this.amount) data.amount = this.amount;
          const { token, error } = await this.stripe.createToken(data);
          if (error) {
            const errorElement = document.getElementById('stripe-element-errors');
            errorElement.textContent = error.message;
            this.$emit('error', error);
            return;
          }
          this.$emit('token', token);
        } catch (error) {
          console.error(error);
          this.$emit('error', error);
        } finally {
          this.$emit('loading', false);
        }
      });
    });
  }
}
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}

.hide {
  visibility: hidden;
}
</style>
`]},media:void 0})},we="data-v-39e29cc6",Se=fe({render:Z,staticRenderFns:Ee},be,Ae,we,!1,void 0,!1,ve);var _e={install:function(e,r){var a=r.pk,i=r.stripeAccount,u=r.apiVersion,p=r.locale,f=window.Stripe(a,{stripeAccount:i,apiVersion:u,locale:p}),h=f.elements();e.prototype.$stripe=f,e.prototype.$stripeElements=h}};$.StripeCheckout=se,$.StripeElementCard=Se,$.StripeElementsPlugin=_e;export{$ as d};
