(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{233:function(t,e,n){var content=n(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("006b3d14",content,!0,{sourceMap:!1})},258:function(t,e,n){"use strict";var r=n(233);n.n(r).a},259:function(t,e,n){(e=n(25)(!1)).push([t.i,".hero-container[data-v-3ead12f5]{position:relative;text-align:center;color:#fff}.hero-text[data-v-3ead12f5]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);letter-spacing:30px}@media screen and (max-width:768px){.hero-text[data-v-3ead12f5]{font-size:1.2em;letter-spacing:10px}}.shadow-form[data-v-3ead12f5]{box-shadow:4px 4px 15px 0 grey}",""]),t.exports=e},277:function(t,e,n){"use strict";n.r(e);n(55),n(19),n(20),n(12),n(43),n(27);var r=n(21),o=(n(9),n(2)),c=n(44);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"BookPackage",middleware:["auth"],fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.GET_PACKAGE(t.$route.params.id);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0.response.data.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},data:function(){return{form:{adults:0,infants:0,children:0},loading:!1}},computed:d(d({},Object(c.c)({PACKAGE:"packages/PACKAGE",TRANSACTION:"transactions/TRANSACTION"})),{},{item:function(){return this.PACKAGE.data},disabled:function(){var t=""===this.form.adults?0:parseInt(this.form.adults);return this.calculate<1||t<1},calculate:function(){return(""===this.form.adults?0:parseInt(this.form.adults))+(""===this.form.infants?0:parseInt(this.form.infants))+(""===this.form.children?0:parseInt(this.form.children))}}),methods:d(d({},Object(c.b)({GET_PACKAGE:"packages/GET_PACKAGE",CREATE_TRANSACTION:"transactions/CREATE_TRANSACTION"})),{},{checkNan:function(t){""===this.adults&&(this.adults=0)},clearForm:function(){Object.assign(this.$data,this.$options.data())},createTransaction:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.form.package_id=t.$route.params.id,""===t.form.children&&(t.form.children=0),""===t.form.infants&&(t.form.infants=0),e.prev=4,e.next=7,t.$swal({title:"Are you sure?",text:"Create booking for ".concat(t.calculate," Passenger(s)"),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create it!"}).then((function(e){e.value&&(t.CREATE_TRANSACTION(t.form),t.clearForm(),t.$swal({icon:"success",title:"Created! ",text:"Please proceed to fill your booking details. Booking number: ".concat(t.TRANSACTION.data.transaction_number),showConfirmButton:!0}),t.$router.push("/transactions/".concat(t.TRANSACTION.data.id)))}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),t.$swal({icon:"error",title:"Oops! Something wrong.",text:"Please try again later.",showConfirmButton:!1,timerProgressBar:!0,timer:5e3});case 12:return e.prev=12,t.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[4,9,12,15]])})))()}}),head:function(){return{title:"".concat(this.item.name," Book | CEO Travel GmbH")}}},f=(n(258),n(7)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.PACKAGE.data&&!t.$fetchState.pending?n("div",[n("section",{staticClass:"ceo-gmbh-welcome-area bg-img bg-overlay"},[n("div",{staticClass:"hero-container"},[n("img",{staticClass:"img-fluid",staticStyle:{"max-height":"400px","object-fit":"cover",filter:"brightness(0.8)"},attrs:{src:t.item.image_url,width:"100%",alt:t.item.name+"-package",loading:"lazy"}}),t._v(" "),n("h1",{staticClass:"hero-text text-uppercase display-1 font-weight-bold text-white"},[t._v("\n          "+t._s(t.item.name)+"\n        ")])])]),t._v(" "),n("div",{staticClass:"dorne-contact-area d-md-flex",attrs:{id:"contact"}},[n("div",{staticClass:"contact-form-area equal-height mb-0"},[n("div",{staticClass:"contact-text"},[n("h4",[t._v("Book section for "+t._s(t.item.name))]),t._v(" "),n("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac\n            nibh sed mi ullamcorper rhoncus. Curabitur pulvinar vel augue sit\n            amet vestibulum. Proin tempus lacus porta lorem blandit aliquam\n            eget quis ipsum. Vivamus accumsan consequat ligula non volutpat.\n            Sed mollis orci non cursus vestibulum. Pellentesque vitae est a\n            augue laoreet venenatis sed eu felis. Sed cursus magna nec turpis\n            ullamcorper, eget rutrum felis egestas. Nunc odio ex, fermentum\n            efficitur nunc vitae, efficitur hendrerit diam. Lorem ipsum dolor\n            sit amet, consectetur.\n          ")]),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"ceo-gmbh-map-area equal-height"},[n("div",{staticClass:"container "},[t._m(1),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 text-center"},[n("form",{staticClass:"p-2 mx-auto mx-lg-5 bg-light shadow-form",staticStyle:{"border-radius":"15px"},on:{submit:function(e){return e.preventDefault(),t.createTransaction(e)}}},[n("div",{staticClass:"col-12 mt-4"},[n("h5",[t._v("Package "+t._s(t.item.name))])]),t._v(" "),n("div",{staticClass:"form-group row mt-4"},[n("label",{staticClass:"col-6 text-right col-form-label",attrs:{for:"book-adults"}},[t._v("Adults\n                  ")]),t._v(" "),n("div",{staticClass:"col-3 col-lg-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.adults,expression:"form.adults"}],staticClass:"form-control",attrs:{id:"book-adults",type:"number",min:"0",placeholder:"0",required:""},domProps:{value:t.form.adults},on:{input:function(e){e.target.composing||t.$set(t.form,"adults",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-6 text-right col-form-label",attrs:{for:"book-children"}},[t._v("Children\n                  ")]),t._v(" "),n("div",{staticClass:"col-3 col-lg-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.children,expression:"form.children"}],staticClass:"form-control",attrs:{id:"book-children",type:"number",min:"0",placeholder:"0"},domProps:{value:t.form.children},on:{input:function(e){e.target.composing||t.$set(t.form,"children",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-6 text-right col-form-label",attrs:{for:"book-infants"}},[t._v("Infants\n                  ")]),t._v(" "),n("div",{staticClass:"col-3 col-lg-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.infants,expression:"form.infants"}],staticClass:"form-control",attrs:{id:"book-infants",type:"number",min:"0",placeholder:"0"},domProps:{value:t.form.infants},on:{input:function(e){e.target.composing||t.$set(t.form,"infants",e.target.value)}}})])]),t._v(" "),!t.disabled&&Number.isInteger(t.calculate)?n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 col-lg-4 mx-auto"},[t.loading?n("button",{staticClass:"ceo-gmbh-btn mt-2 mb-5",attrs:{disabled:""}},[t._v("\n                      Making your booking ...\n                    ")]):n("button",{staticClass:"ceo-gmbh-btn btn-block mt-2 mb-5",attrs:{type:"submit"}},[t._v("\n                      Make Booking\n                    ")])])]):n("div",{staticClass:"row"},[t._m(2)])])])])])])])]):n("div",[n("client-only",[n("div",{staticClass:"container"},[n("div",{staticClass:"row p-5 align-items-center mx-auto"},[n("div",{staticClass:"col-12 my-4"},[n("content-placeholders",{attrs:{rounded:!0}},[n("content-placeholders-img")],1)],1),t._v(" "),t._l(2,(function(e){return n("div",{key:e,staticClass:"col-12 my-4"},[n("content-placeholders",{attrs:{rounded:!0}},[n("content-placeholders-heading"),t._v(" "),n("content-placeholders-text",{attrs:{lines:2}})],1)],1)}))],2)])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-info d-lg-flex"},[e("div",{staticClass:"single-contact-info"},[e("h6",[e("i",{staticClass:"fa fa-map-signs text-dark",attrs:{"aria-hidden":"true"}}),this._v("\n                Jakarta\n              ")]),this._v(" "),e("h6",[e("i",{staticClass:"fa fa-map-signs text-dark",attrs:{"aria-hidden":"true"}}),this._v("\n                No. 25-33\n              ")])]),this._v(" "),e("div",{staticClass:"single-contact-info"},[e("h6",[e("i",{staticClass:"fa fa-envelope-o text-dark",attrs:{"aria-hidden":"true"}}),this._v("\n                contact@yourbusiness.com\n              ")]),this._v(" "),e("h6",[e("i",{staticClass:"fa fa-phone text-dark",attrs:{"aria-hidden":"true"}}),this._v(" +34\n                567 22478 49567\n              ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("h4",{staticClass:"section-heading dark text-uppercase mb-4",staticStyle:{"font-weight":"800"}},[this._v("\n                Make Booking\n              ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-lg-6 mx-auto"},[e("p",{staticClass:"text-danger"},[this._v("\n                      Min. 1 adult needed to make booking\n                    ")])])}],!1,null,"3ead12f5",null);e.default=component.exports}}]);