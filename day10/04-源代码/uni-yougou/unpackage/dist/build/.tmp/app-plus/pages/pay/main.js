(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/main"],{1302:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r})},"1b57":function(t,e,o){"use strict";o.r(e);var n=o("b8d7"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=r.a},"47c7":function(t,e,o){"use strict";(function(t){o("f223"),o("921b");n(o("66fd"));var e=n(o("89f6"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},8269:function(t,e,o){},"89f6":function(t,e,o){"use strict";o.r(e);var n=o("1302"),r=o("1b57");for(var i in r)"default"!==i&&function(t){o.d(e,t,function(){return r[t]})}(i);o("c163");var s=o("2877"),a=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=a.exports},b8d7:function(t,e,o){"use strict";(function(t){function o(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},r=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),r.forEach(function(e){n(t,e,o[e])})}return t}function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{addr:wx.getStorageSync("addr")||{},goodsList:[]}},onLoad:function(t){this.goodsId=t.goodsId,this.getGoodsList()},computed:{fullAddr:function(){return this.addr.provinceName+this.addr.cityName+this.addr.countyName+this.addr.detailInfo},totalPrice:function(){return this.goodsList.reduce(function(t,e){return t+e.num*e.goods_price},0)}},methods:{pay:function(){if(this.addr.userName){var t=wx.getStorageSync("token");t?this.createOrder(t):wx.navigateTo({url:"/pages/login/main"})}else this.$showToast("请选择地址哦")},createOrder:function(t){var e=this;this.$request({url:"/api/public/v1/my/orders/create",isAuth:!0,method:"POST",data:{order_price:this.totalPrice,consignee_addr:this.fullAddr,goods:this.filterGoodsList()}}).then(function(o){e.doPay(t,o.order_number)}).finally(function(){e.goodsId,e.$store.commit("removeCart")})},doPay:function(t,e){this.$request({url:"/api/public/v1/my/orders/req_unifiedorder",isAuth:!0,method:"POST",data:{order_number:e}}).then(function(t){wx.requestPayment(o({},t.pay,{success:function(t){wx.navigateTo({url:"/pages/order_result/main"})},fail:function(){wx.navigateTo({url:"/pages/order_result/main?orderNumber="+e})},complete:function(){}}))})},filterGoodsList:function(){var t=[];return this.goodsList.forEach(function(e){t.push({goods_id:e.goods_id,goods_number:e.num,goods_price:e.goods_price})}),t},getGoodsList:function(){var t=this,e="",o={};if(this.goodsId)e=this.goodsId;else{o=this.$store.getters.getCart;var n=this.filterCart(o);e=Object.keys(n).join(",")}this.$request({url:"/api/public/v1/goods/goodslist?goods_ids="+e}).then(function(e){var n=e;t.goodsId?n[0].num=1:n.forEach(function(t){var e=o[t.goods_id];t.num=e.num}),t.goodsList=n})},filterCart:function(t){var e=Object.assign({},t);for(var o in e)e[o].checked||delete e[o];return e},getAddr:function(){var e=this;wx.getSetting({success:function(o){console.log(t(o," at pages\\pay\\main.vue:209")),!1===o.authSetting["scope.address"]?wx.showModal({title:"提示",content:"请允许用户访问通讯地址",showCancel:!0,cancelText:"取消",cancelColor:"#000000",confirmText:"确定",confirmColor:"#3CC51F",success:function(e){e.confirm?wx.openSetting({success:function(t){}}):e.cancel&&console.log(t("用户点击取消"," at pages\\pay\\main.vue:223"))}}):wx.authorize({scope:"scope.address",success:function(o){wx.chooseAddress({success:function(o){console.log(t(o," at pages\\pay\\main.vue:236")),e.addr=o,wx.setStorageSync("addr",e.addr)}})}})}})}}};e.default=r}).call(this,o("0de9")["default"])},c163:function(t,e,o){"use strict";var n=o("8269"),r=o.n(n);r.a}},[["47c7","common/runtime","common/vendor"]]]);