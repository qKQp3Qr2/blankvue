(function(){"use strict";var e={7581:function(e,t,n){var o=n(9242),r=n(3396),i=n(7139);const a={key:0,class:"notLogin"},s={key:1},c=(0,r._)("p",null,"畫面跳轉中...",-1);function u(e,t,n,o,u,l){return l.loginState?((0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("p",null,"Welcome "+(0,i.zw)(l.getUserName),1),c])):((0,r.wg)(),(0,r.iD)("div",a,[(0,r.Uk)(" Login First "),(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>l.login&&l.login(...e))},"Go To Login Page")]))}n(2062);var l=n(4161),f={beforeMount(){this.handleLoginCallback()},computed:{loginState(){return this.$store.state.isLogin},getUserName(){return this.$store.state.userName}},methods:{login(){let e="https://qkqp3qr2.github.io/test2/";window.location.href=e},async handleLoginCallback(){const e=new URLSearchParams(window.location.search).get("code");if(e){const t=await this.getAccessToken(e);await this.getUserProfile(t),this.$store.commit("setLoginState"),console.log("login successful");const n=await this.redirectTo();window.location.href=n}else console.error("Authorization code not found.")},async getAccessToken(e){try{const t=await l.Z.post("https://api.line.me/oauth2/v2.1/token",new URLSearchParams({grant_type:"authorization_code",code:e,client_id:"1661441879",client_secret:"4f03d9065b14f7d6e394a0f20b0c53e3",redirect_uri:"https://qkqp3qr2.github.io/blankvue/"}).toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});return t.data.access_token}catch(t){throw console.error("Failed to get access token:",t),t}},async getUserProfile(e){try{const t=await l.Z.get("https://api.line.me/v2/profile",{headers:{Authorization:`Bearer ${e}`}}),n=t.data;console.log(n),this.$store.commit("setUserName",n.displayName)}catch(t){console.error("Failed to get user profile:",t)}},async redirectTo(){const e=new URLSearchParams(window.location.search).get("type");return 1==e?"https://www.google.com/":"https://www.youtube.com/"}}},h=n(89);const g=(0,h.Z)(f,[["render",u]]);var d=g,p=n(65);const w=(0,p.MT)({state(){return{isLogin:!1,userName:""}},mutations:{setLoginState(e){e.isLogin=!0},setUserName(e,t){e.userName=t}}});var v=w;(0,o.ri)(d).use(v).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],c=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkblankevue"]=self["webpackChunkblankevue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7581)}));o=n.O(o)})();
//# sourceMappingURL=app.76f89a81.js.map