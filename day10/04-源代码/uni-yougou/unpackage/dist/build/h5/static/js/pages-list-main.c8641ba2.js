(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-list-main"],{"19c6":function(t,e,i){var n=i("2b8d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("38b2e8a0",n,!0,{sourceMap:!1,shadowMode:!1})},2228:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("v-uni-input",{attrs:{type:"text","confirm-type":"search"},on:{confirm:function(e){e=t.$handleEvent(e),t.confirmHandler(e)}},model:{value:t.keyword,callback:function(e){t.keyword="string"===typeof e?e.trim():e},expression:"keyword"}}),i("v-uni-icon",{staticClass:"search-icon",attrs:{type:"search",size:"16"}}),i("v-uni-icon",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],staticClass:"clear-icon",attrs:{type:"clear",size:"16",color:"#ccc"},on:{click:function(e){e=t.$handleEvent(e),t.keyword=""}}})],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"2b8d":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".header[data-v-7ddfd650]{position:fixed;width:100%;background-color:#fff;top:0}.search[data-v-7ddfd650]{height:%?120?%;padding:0 %?16?%;background-color:#eee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative}.search uni-icon[data-v-7ddfd650]{position:absolute;top:%?46?%;left:%?46?%}.search uni-input[data-v-7ddfd650]{height:%?60?%;background-color:#fff;border-radius:%?8?%;width:100%;font-size:%?24?%;padding-left:%?76?%}.nav[data-v-7ddfd650]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;height:%?100?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border:%?1?% solid #ddd}.nav .active[data-v-7ddfd650]{color:#eb4450}.goods-list[data-v-7ddfd650]{margin-top:%?220?%}.goods-list li[data-v-7ddfd650]{height:%?262?%;border-bottom:%?1?% solid #ddd;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 %?20?%}.goods-list li img[data-v-7ddfd650]{width:%?200?%;height:%?200?%;margin-right:%?24?%}.goods-list li .right[data-v-7ddfd650]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.goods-list li .goods-name[data-v-7ddfd650]{font-size:16px}.goods-list li .price[data-v-7ddfd650]{color:#eb4450;font-size:12px;margin-top:%?54?%}.goods-list li .price span[data-v-7ddfd650]{font-size:24px}.tip[data-v-7ddfd650]{text-align:center;color:#ccc}",""])},4776:function(t,e,i){"use strict";i.r(e);var n=i("5a00"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"4b37":function(t,e,i){"use strict";var n=i("19c6"),a=i.n(n);a.a},"5a00":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:["query"],data:function(){return{keyword:this.query}},methods:{confirmHandler:function(){this.keyword&&this.$emit("confirm",this.keyword)}},watch:{query:function(t){this.keyword=t}}};e.default=n},"65c6":function(t,e,i){"use strict";i.r(e);var n=i("75c4"),a=i("6d0d");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("4b37");var s=i("2877"),d=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"7ddfd650",null);e["default"]=d.exports},"6d0d":function(t,e,i){"use strict";i.r(e);var n=i("dd92"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"75c4":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"header",style:{position:t.isFixed?"fixed":"static"}},[i("Search",{attrs:{query:t.keyword},on:{confirm:function(e){e=t.$handleEvent(e),t.inputHandler(e)}}}),i("ul",{staticClass:"nav"},t._l(t.navArr,function(e,n){return i("li",{key:e,class:{active:t.activeIndex===n},on:{click:function(e){e=t.$handleEvent(e),t.activeIndex=n}}},[t._v(t._s(e))])}),0)],1),i("ul",{staticClass:"goods-list",style:{marginTop:t.isFixed?"220rpx":"0"}},t._l(t.goodsList,function(e,n){return i("li",{key:n,on:{click:function(i){i=t.$handleEvent(i),t.toItem(e.goods_id)}}},[i("img",{attrs:{src:e.goods_big_logo,alt:e.goods_name}}),i("div",{staticClass:"right"},[i("p",{staticClass:"goods-name text-line2"},[t._v(t._s(e.goods_name))]),i("p",{staticClass:"price"},[t._v("￥"),i("span",[t._v(t._s(e.goods_price))]),t._v(".00")])])])}),0),i("p",{directives:[{name:"show",rawName:"v-show",value:t.isLastPage,expression:"isLastPage"}],staticClass:"tip"},[t._v("--我是有底线的--")])])},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"75fc":function(t,e,i){"use strict";i.r(e);var n=i("a745"),a=i.n(n);function o(t){if(a()(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var s=i("774e"),d=i.n(s),r=i("c8bb"),c=i.n(r);function l(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return d()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return o(t)||l(t)||u()}i.d(e,"default",function(){return f})},a107:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".header[data-v-6179bdb5]{height:%?120?%;background-color:#eee;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.header uni-input[data-v-6179bdb5]{background-color:#fff;height:%?60?%;width:%?720?%;padding-left:%?74?%;-webkit-box-sizing:border-box;box-sizing:border-box}.header .search-icon[data-v-6179bdb5]{position:absolute;left:%?44?%}.header .clear-icon[data-v-6179bdb5]{position:absolute;right:%?44?%;z-index:100}",""])},a703:function(t,e,i){"use strict";i.r(e);var n=i("2228"),a=i("4776");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("b57b");var s=i("2877"),d=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"6179bdb5",null);e["default"]=d.exports},b57b:function(t,e,i){"use strict";var n=i("d46c"),a=i.n(n);a.a},d46c:function(t,e,i){var n=i("a107");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4f84e41f",n,!0,{sourceMap:!1,shadowMode:!1})},dd92:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("75fc"));i("386d");var o=n(i("a703")),s=6,d={components:{Search:o.default},data:function(){return{navArr:["综合","销量","价格"],activeIndex:0,keyword:"",goodsList:[],isLastPage:!1,isFixed:!1}},onLoad:function(t){this.keyword=t.keyword,this.isRequest=!1,this.reload()},onPullDownRefresh:function(){this.isFixed=!1,this.reload()},onReachBottom:function(){this.pageNum++,this.search()},onPageScroll:function(){this.isFixed=!0},methods:{toItem:function(t){wx.navigateTo({url:"/pages/item/main?goodsId="+t})},inputHandler:function(t){this.keyword=t,this.reload()},reload:function(){this.isLastPage=!1,this.goodsList=[],this.pageNum=1,this.search()},search:function(){var t=this;this.isRequest||this.isLastPage||(this.isRequest=!0,this.$request({url:"/api/public/v1/goods/search",data:{query:this.keyword,pagesize:s,pagenum:this.pageNum}}).then(function(e){t.goodsList=[].concat((0,a.default)(t.goodsList),(0,a.default)(e.goods)),t.goodsList.length===e.total&&(t.isLastPage=!0)}).finally(function(){t.isRequest=!1}))}}};e.default=d}}]);