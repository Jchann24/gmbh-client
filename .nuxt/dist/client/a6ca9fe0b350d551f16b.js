(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{233:function(t,e,n){var content=n(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("396c5b63",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";var r=n(233);n.n(r).a},258:function(t,e,n){(e=n(25)(!1)).push([t.i,".hero-container[data-v-601d1fb4]{position:relative;text-align:center;color:#fff}.hero-text[data-v-601d1fb4]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);letter-spacing:30px}@media screen and (max-width:768px){.hero-text[data-v-601d1fb4]{font-size:1.2em;letter-spacing:10px}}.tour-ex-in[data-v-601d1fb4]{line-height:1.7em;margin-top:1.3em}",""]),t.exports=e},277:function(t,e,n){"use strict";n.r(e);n(55),n(19),n(20),n(12),n(43);var r=n(21),o=(n(9),n(2)),c=n(44);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"PackageShow",fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.GET_PACKAGE(t.$route.params.id);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert(e.t0.response.data.message);case 9:return e.prev=9,t.loading=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[1,6,9,12]])})))()},data:function(){return{loading:!1}},computed:d(d({},Object(c.c)({PACKAGE:"packages/PACKAGE",authenticated:"isAuthenticated"})),{},{item:function(){return this.PACKAGE.data},packageName:function(){var t=this.$route.params.package;return t.charAt(0).toUpperCase()+t.slice(1)}}),methods:d(d({},Object(c.b)({GET_PACKAGE:"packages/GET_PACKAGE"})),{},{modalLogin:function(){document.getElementById("sign-in-btn-link").click()}}),head:function(){return{title:"".concat(this.packageName," | CEO Travel GmbH")}}},m=(n(257),n(7)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.PACKAGE.data&&!t.loading?n("div",[n("section",{staticClass:"ceo-gmbh-welcome-area bg-img bg-overlay"},[n("div",{staticClass:"hero-container"},[n("img",{staticClass:"img-fluid",staticStyle:{"max-height":"400px","object-fit":"cover",filter:"brightness(0.8)"},attrs:{src:t.item.image_url,width:"100%",alt:t.item.name+"-package",loading:"lazy"}}),t._v(" "),n("h1",{staticClass:"hero-text text-uppercase display-1 font-weight-bold text-white"},[t._v("\n          "+t._s(t.item.name)+"\n        ")])])]),t._v(" "),n("section",{staticClass:"ceo-gmbh-single-listing-area section-padding-100"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-lg-8"},[n("div",{staticClass:"single-listing-content"},[n("div",{staticClass:"listing-title"},[n("h4",[t._v(t._s(t.item.name))]),t._v(" "),n("h6",[t._v("\n                  PERIOD : "+t._s(t.item.from_period)+" -\n                  "+t._s(t.item.to_period)+"\n                ")])]),t._v(" "),n("div",{staticClass:"single-listing-nav"},[n("nav",[n("ul",{attrs:{id:"listingNav"}},[n("li",{staticClass:"active"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#listingNav",duration:"1000"},expression:"{\n                          el: '#listingNav',\n                          duration: '1000'\n                        }"}],attrs:{href:"#"}},[t._v("Description")])]),t._v(" "),n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#tourScroll",duration:"1000"},expression:"{\n                          el: '#tourScroll',\n                          duration: '1000'\n                        }"}],attrs:{href:"#"}},[t._v("Tour Includes & Excludes")])])])])]),t._v(" "),n("div",{staticClass:"overview-content mt-50",attrs:{id:"overview"}},[n("p",[t._v("\n                  "+t._s(t.item.description)+"\n                ")])]),t._v(" "),n("div",{attrs:{id:"tourScroll"}}),t._v(" "),n("div",{staticClass:"tour-list-info-area mt-100",attrs:{id:"menu"}},[n("h4",[t._v("Tour Includes & Excludes")]),t._v(" "),n("div",{staticClass:"single-tour-list-info d-flex justify-content-between"},[n("div",{staticClass:"tour-list-info-title"},[n("h5",{staticClass:"text-uppercase text-white font-weight-bolder"},[t._v("\n                      Tour Includes\n                    ")]),t._v(" "),n("p",{staticClass:"text-white tour-ex-in"},[t._v("\n                      "+t._s(t.item.tour_includes)+"\n                    ")])])]),t._v(" "),n("div",{staticClass:"single-tour-list-info d-flex justify-content-between"},[n("div",{staticClass:"tour-list-info-title"},[n("h5",{staticClass:"text-uppercase text-white font-weight-bolder"},[t._v("\n                      Tour Excludes\n                    ")]),t._v(" "),n("p",{staticClass:"text-white tour-ex-in"},[t._v("\n                      "+t._s(t.item.tour_excludes)+"\n                    ")])])])])])]),t._v(" "),n("div",{staticClass:"col-12 col-md-8 col-lg-4"},[n("div",{staticClass:"listing-sidebar mt-5"},[n("div",{staticClass:"listing-verify"},[t.authenticated?n("nuxtLink",{staticClass:"btn text-white text-uppercase w-100 animate__animated animate__pulse animate__infinite",staticStyle:{"background-color":"#4676A3"},attrs:{to:t.$route.path+"/book",tag:"a"}},[n("i",{staticClass:"fa fa-check pr-3"}),t._v("Click here to book\n                  ticket!")]):n("a",{staticClass:"btn btn-danger text-uppercase w-100 animate__animated animate__pulse animate__infinite",attrs:{href:"javascript:void(0)"},on:{click:t.modalLogin}},[t._v("Please login to book!")])],1),t._v(" "),n("div",{staticClass:"room-price-widget mt-50"},[n("h6",{staticClass:"text-uppercase text-dark font-weight-bolder"},[t._v("\n                  Room Choices\n                ")]),t._v(" "),n("p",{staticClass:"text-muted"},[t._v("Prices in Thousands")]),t._v(" "),n("ul",{staticClass:"room-price"},t._l(t.item.room_choices,(function(e){return n("li",{key:e.id},[n("p",[t._v(t._s(e.room_name))]),t._v(" "),n("p",[t._v("Rp. "+t._s(e.room_price))])])})),0)])])])])])])]):n("div",[n("client-only",[n("div",{staticClass:"container"},[n("div",{staticClass:"row p-5 align-items-center mx-auto"},[n("div",{staticClass:"col-12 my-4"},[n("content-placeholders",{attrs:{rounded:!0}},[n("content-placeholders-img")],1)],1),t._v(" "),t._l(2,(function(e){return n("div",{key:e,staticClass:"col-12 my-4"},[n("content-placeholders",{attrs:{rounded:!0}},[n("content-placeholders-heading"),t._v(" "),n("content-placeholders-text",{attrs:{lines:2}})],1)],1)}))],2)])])],1)])}),[],!1,null,"601d1fb4",null);e.default=component.exports}}]);