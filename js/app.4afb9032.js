(function(){"use strict";var e={28:function(e,t,o){var n=o(9242),r=o(3396),i=o(7139);const a={key:0,class:"notLogin"},s={key:1},c=(0,r._)("p",null,"畫面跳轉中...",-1);function u(e,t,o,n,u,l){return l.loginState?((0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("p",null,"Welcome "+(0,i.zw)(l.getUserName),1),c])):((0,r.wg)(),(0,r.iD)("div",a,[(0,r.Uk)(" Login First "),(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>l.login&&l.login(...e))},"Go To Login Page")]))}o(2062);var l=o(4161),f={beforeMount(){this.handleLoginCallback()},computed:{loginState(){return this.$store.state.isLogin},getUserName(){return this.$store.state.userName}},methods:{login(){let e="https://qkqp3qr2.github.io/test2/";window.location.href=e},async handleLoginCallback(){const e=new URLSearchParams(window.location.search).get("code");if(e){const t=await this.getAccessToken(e);await this.getUserProfile(t),this.$store.commit("setLoginState"),console.log("login successful");const o=await this.redirectTo();window.location.href=o}else console.error("Authorization code not found.")},async getAccessToken(e){try{const t=await l.Z.post("https://api.line.me/oauth2/v2.1/token",new URLSearchParams({grant_type:"authorization_code",code:e,client_id:"1661441879",client_secret:"4f03d9065b14f7d6e394a0f20b0c53e3",redirect_uri:"https://qkqp3qr2.github.io/blankvue/"}).toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});return t.data.access_token}catch(t){throw console.error("Failed to get access token:",t),t}},async getUserProfile(e){try{const t=await l.Z.get("https://api.line.me/v2/profile",{headers:{Authorization:`Bearer ${e}`}}),o=t.data;console.log(o),this.$store.commit("setUserName",o.displayName)}catch(t){console.error("Failed to get user profile:",t)}},async redirectTo(){const e=new URLSearchParams(window.location.search).get("state");return"google"==e?"https://www.google.com/":"https://www.youtube.com/"}}},h=o(89);const g=(0,h.Z)(f,[["render",u]]);var d=g,p=o(65);const w=(0,p.MT)({state(){return{isLogin:!1,userName:""}},mutations:{setLoginState(e){e.isLogin=!0},setUserName(e,t){e.userName=t}}});var v=w;(0,n.ri)(d).use(v).mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,i){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],i=e[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,r,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,a=n[0],s=n[1],c=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var l=c(o)}for(t&&t(n);u<a.length;u++)i=a[u],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(l)},n=self["webpackChunkblankevue"]=self["webpackChunkblankevue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(28)}));n=o.O(n)})();
//# sourceMappingURL=app.4afb9032.js.map