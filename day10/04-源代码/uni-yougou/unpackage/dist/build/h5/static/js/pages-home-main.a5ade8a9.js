(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-main"],{"0107":function(t,e,i){"use strict";i.r(e);var a=i("6f40"),r=i("ce8d");for(var n in r)"default"!==n&&function(t){i.d(e,t,function(){return r[t]})}(n);i("301a");var c=i("2877"),o=Object(c["a"])(r["default"],a["a"],a["b"],!1,null,"736f759e",null);e["default"]=o.exports},"0d09":function(t,e,i){"use strict";var a=i("b91c"),r=i.n(a);r.a},1903:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={methods:{toSearch:function(){wx.navigateTo({url:"/pages/search/main"})}}};e.default=a},"28ae":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-swiper[data-v-1cd0e4c0]{height:%?340?%}uni-swiper img[data-v-1cd0e4c0]{width:100%;height:100%}.categories[data-v-1cd0e4c0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:%?194?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly}.categories img[data-v-1cd0e4c0]{width:%?128?%;height:%?140?%}.floor li>img[data-v-1cd0e4c0]{width:100%;height:%?88?%}.product-list[data-v-1cd0e4c0]{padding:%?20?% %?17?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.product-list>img[data-v-1cd0e4c0]{width:%?232?%;height:%?386?%}.product-list .right[data-v-1cd0e4c0]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:0}.product-list .right img[data-v-1cd0e4c0]{margin:0 0 %?10?% %?10?%;width:%?232?%;height:%?188?%}",""])},"301a":function(t,e,i){"use strict";var a=i("ec52"),r=i.n(a);r.a},"3f30":function(t,e,i){"use strict";i.r(e);var a=i("877d"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=r.a},"6f40":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-hotspot",on:{click:function(e){e=t.$handleEvent(e),t.toSearch(e)}}},[i("div",[i("v-uni-icon",{attrs:{type:"search",size:"18",color:"#bbb"}}),t._v("搜索")],1)])},r=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return r})},"877d":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(i("0107")),n={components:{SearchHotspot:r.default},data:function(){return{swiperdata:[],catitems:[],floordata:[]}},onLoad:function(){this.getSwiperdata(),this.getCatitems(),this.getFloordata()},methods:{getSwiperdata:function(){var t=this;this.$request({url:"/api/public/v1/home/swiperdata"}).then(function(e){t.swiperdata=e})},getCatitems:function(){var t=this;this.$request({url:"/api/public/v1/home/catitems"}).then(function(e){t.catitems=e})},getFloordata:function(){var t=this;this.$request({url:"/api/public/v1/home/floordata"}).then(function(e){t.floordata=e})}}};e.default=n},"9f51":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".search-hotspot[data-v-736f759e]{height:%?100?%;padding:%?20?% %?16?%;background-color:#eb4450;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}.search-hotspot>div[data-v-736f759e]{background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?60?%;border-radius:%?4?%;color:#bbb}.search-hotspot>div uni-icon[data-v-736f759e]{margin:%?8?% %?16?% 0 0}",""])},b91c:function(t,e,i){var a=i("28ae");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("963ad6de",a,!0,{sourceMap:!1,shadowMode:!1})},ce8d:function(t,e,i){"use strict";i.r(e);var a=i("1903"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=r.a},e16d:function(t,e,i){"use strict";i.r(e);var a=i("ea85"),r=i("3f30");for(var n in r)"default"!==n&&function(t){i.d(e,t,function(){return r[t]})}(n);i("0d09");var c=i("2877"),o=Object(c["a"])(r["default"],a["a"],a["b"],!1,null,"1cd0e4c0",null);e["default"]=o.exports},ea85:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("SearchHotspot"),i("v-uni-swiper",{attrs:{"indicator-dots":"",autoplay:"",circular:"","indicator-active-color":"#fff","indicator-color":"rgba(255,255,255,0.3)"}},[t._l(t.swiperdata,function(t){return i("v-uni-swiper-item",{key:t.goods_id},[i("img",{attrs:{src:t.image_src,alt:""}})])})],2),i("div",{staticClass:"categories"},t._l(t.catitems,function(t,e){return i("img",{key:e,attrs:{src:t.image_src,alt:""}})}),0),i("ul",{staticClass:"floor"},t._l(t.floordata,function(e,a){return i("li",{key:a},[i("img",{attrs:{src:e.floor_title.image_src,alt:""}}),i("div",{staticClass:"product-list"},[i("img",{attrs:{src:e.product_list[0].image_src,alt:""}}),i("div",{staticClass:"right"},[t._l(e.product_list,function(e,a){return[a?i("img",{key:e.name+"_0",attrs:{src:e.image_src,alt:""}}):t._e()]})],2)])])}),0)],1)},r=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return r})},ec52:function(t,e,i){var a=i("9f51");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("9e6218a2",a,!0,{sourceMap:!1,shadowMode:!1})}}]);