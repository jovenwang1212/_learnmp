(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-main"],{"5ac0":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-uni-button",{attrs:{"open-type":"getUserInfo"},on:{getuserinfo:function(n){n=t.$handleEvent(n),t.getUserInfo(n)}}},[t._v("点我登录")])],1)},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},a127:function(t,n,e){"use strict";e.r(n);var a=e("cf40"),o=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=o.a},cd06:function(t,n,e){"use strict";e.r(n);var a=e("5ac0"),o=e("a127");for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);var u=e("2877"),c=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,"f6c51556",null);n["default"]=c.exports},cf40:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={methods:{getUserInfo:function(t){var n=this;console.log(t.mp.detail);var e=t.mp.detail;wx.login({success:function(t){console.log(t),n.$request({url:"/api/public/v1/users/wxlogin",method:"POST",data:{code:t.code,encryptedData:e.encryptedData,iv:e.iv,rawData:e.rawData,signature:e.signature}}).then(function(t){wx.setStorageSync("token",t.token),wx.setStorageSync("userInfo",e.userInfo),wx.navigateBack()})}})}}};n.default=a}}]);