(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{223:function(t,e,n){var content=n(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("4cf85899",content,!0,{sourceMap:!1})},234:function(t,e,n){"use strict";var r={name:"InfinitePagination",props:{objectToPaginate:{type:Object,default:function(){}},storeAction:{type:String,default:""}},data:function(){return{currPage:1,destinationPage:1}},methods:{getList:function(t){this.$store.dispatch("".concat(this.storeAction),t)},refreshList:function(t){this.currPage=this.objectToPaginate.meta.current_page,"next"===t?(this.destinationPage=this.currPage+1,this.destinationPage>this.objectToPaginate.meta.last_page&&(this.destinationPage=1)):"prev"===t&&(this.destinationPage=this.currPage-1,0===this.destinationPage&&(this.destinationPage=this.objectToPaginate.meta.last_page)),this.getList(this.destinationPage)}}},c=n(7),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-wrapper"},[n("svg",{staticClass:"btn-page btn-page--prev",attrs:{height:"96",viewBox:"0 0 24 24",width:"96",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.refreshList("prev")}}},[n("path",{attrs:{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}}),t._v(" "),n("path",{attrs:{d:"M0-.5h24v24H0z",fill:"none"}})]),t._v(" "),t._m(0),t._v(" "),n("svg",{staticClass:"btn-page btn-page--next",attrs:{height:"96",viewBox:"0 0 24 24",width:"96",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.refreshList("next")}}},[n("path",{attrs:{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}}),t._v(" "),n("path",{attrs:{d:"M0-.25h24v24H0z",fill:"none"}})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pagination-container"},[e("div",{staticClass:"little-dot  little-dot--first"}),this._v(" "),e("div",{staticClass:"little-dot"},[e("div",{staticClass:"big-dot-container"},[e("div",{staticClass:"big-dot"})])]),this._v(" "),e("div",{staticClass:"little-dot  little-dot--last"})])}],!1,null,null,null);e.a=component.exports},237:function(t,e,n){"use strict";var r=n(223);n.n(r).a},238:function(t,e,n){(e=n(25)(!1)).push([t.i,".crop-text-1[data-v-cfdf03c4]{-webkit-line-clamp:5;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.crop-text-1[data-v-cfdf03c4],.img-hover-zoom[data-v-cfdf03c4]{overflow:hidden}.img-hover-zoom[data-v-cfdf03c4]{transition:transform 1.1s ease}.img-hover-zoom[data-v-cfdf03c4]:hover{transform:scale(1.025)}.packagesPage[data-v-cfdf03c4]{background-image:url(/images/bg-packages-page.jpg);background-size:cover}.package-image[data-v-cfdf03c4]{height:300px;width:100%;-o-object-fit:cover;object-fit:cover}a[data-v-cfdf03c4]:hover{text-decoration:none}.borderRad[data-v-cfdf03c4]{border-radius:15px}.shadow-pack[data-v-cfdf03c4]{box-shadow:4px 4px 15px 0 #a9a9a9}",""]),t.exports=e},263:function(t,e,n){"use strict";n.r(e);n(55),n(19),n(20),n(12),n(43),n(9);var r=n(2),c=n(21),o=n(44);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"PackagesPage",components:{Pagination:n(234).a},data:function(){return{loading:!1,errors:null,show:!0,page:1}},computed:d({},Object(o.c)({PACKAGES:"packages/PACKAGES"})),created:function(){this.getPackages(1)},methods:d(d({},Object(o.b)({GET_PACKAGES:"packages/GET_PACKAGES"})),{},{getPackages:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:1,e.loading=!0,n.prev=2,n.next=5,e.GET_PACKAGES(r);case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),e.errors=n.t0;case 10:return n.prev=10,e.loading=!1,n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[2,7,10,13]])})))()}})},h=(n(237),n(7)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"packagesPage"},[t._m(0),t._v(" "),t.PACKAGES.data?n("div",{staticClass:"container mt-50 pb-4"},[t._l(t.PACKAGES.data,(function(e){return n("div",{key:e.id,staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-10 mx-auto my-4"},[n("nuxt-link",{attrs:{to:"/packages/"+e.id+"/"+e.name.replace(/\s/g,"-").toLowerCase()}},[n("div",{staticClass:"card bg-light borderRad shadow-pack img-hover-zoom"},[n("div",{staticClass:"card-header py-4 text-center"},[n("div",{staticClass:"section-heading mb-0 dark text-center"},[n("h4",{staticClass:"mb-0"},[t._v(t._s(e.name))])])]),t._v(" "),n("div",{staticClass:"card-body p-0"},[n("img",{staticClass:"package-image",attrs:{src:e.image_url,alt:""}})]),t._v(" "),n("div",{staticClass:"card-footer",staticStyle:{overflow:"hidden"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",{staticClass:"pt-lg-4 pl-lg-4 pr-lg-4 pb-lg-0 pt-2 pl-2 pr-2 pb-0 crop-text-1",staticStyle:{"line-height":"1.8em"}},[t._v("\n                    "+t._s(e.description)+"\n                  ")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 my-2 text-right"},[n("nuxt-link",{attrs:{to:"/packages/"+e.id+"/"+e.name.replace(/\s/g,"-").toLowerCase()}},[n("button",{staticClass:"btn btn-outline-info "},[t._v("\n                      More Details...\n                    ")])])],1)])])])])],1)])})),t._v(" "),t.PACKAGES.meta?n("div",{staticClass:"row mt-100 mb-100"},[t.PACKAGES.meta.last_page>1?n("div",{staticClass:"col-6 mx-auto bg-light borderRad shadow-pack",staticStyle:{height:"150px"}},[n("pagination",{attrs:{"object-to-paginate":t.PACKAGES,"store-action":"packages/GET_PACKAGES"}})],1):t._e()]):t._e()],2):n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("client-only",t._l(3,(function(e){return n("div",{key:e,staticClass:"col-4 my-5 "},[n("content-placeholders",{attrs:{rounded:!0}},[n("content-placeholders-heading"),t._v(" "),n("content-placeholders-img")],1)],1)})),0)],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-10 col-lg-6 mx-auto mt-100 p-4 h-auto"},[e("div",{staticClass:"section-heading mb-0 text-center"},[e("span"),this._v(" "),e("h4",[this._v("Our Packages")]),this._v(" "),e("p",[this._v("Click for more detail")])])])])])}],!1,null,"cfdf03c4",null);e.default=component.exports}}]);