(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{222:function(t,e,r){var content=r(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("f2b61958",content,!0,{sourceMap:!1})},232:function(t,e,r){"use strict";var o=r(222);r.n(o).a},233:function(t,e,r){(e=r(25)(!1)).push([t.i,".hero-container[data-v-669f64ce]{position:relative;text-align:center;color:#fff}.hero-text[data-v-669f64ce]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);letter-spacing:30px}@media screen and (max-width:768px){.hero-text[data-v-669f64ce]{font-size:1.2em;letter-spacing:10px}}.shadow-form[data-v-669f64ce]{box-shadow:4px 4px 15px 0 grey}",""]),t.exports=e},255:function(t,e,r){"use strict";r.r(e);r(55),r(19),r(20),r(12),r(43),r(9);var o=r(2),n=r(21),l=r(44);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"CustomTourPage",data:function(){return{countries:{},form:{},adult:0,infant:0,child:0,loading:!1}},computed:m(m({},Object(l.c)({isAuthenticated:"isAuthenticated"})),{},{disabled:function(){return"2"!==this.form.trip_type}}),created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://restcountries.eu/rest/v2/all?fields=name");case 2:data=e.sent,t.countries=data;case 4:case"end":return e.stop()}}),e)})))()},methods:m(m({},Object(l.b)({CREATE_TICKET:"tickets/CREATE_TICKET"})),{},{clearForm:function(){Object.assign(this.$data,this.$options.data())},createTicket:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.form.adult=parseInt(t.adult),t.form.infant=parseInt(t.infant),t.form.child=parseInt(t.child),e.prev=4,e.next=7,t.CREATE_TICKET(t.form);case 7:return e.next=9,t.$swal({icon:"success",title:"Created! ",text:"Your tickets request has been created! Kindly wait for our email.",showConfirmButton:!0});case 9:t.clearForm(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),t.$swal({icon:"error",title:"Oops! Something wrong.",text:"Double check your inputs! or Please try again later.",showConfirmButton:!1,timerProgressBar:!0,timer:5e3});case 15:return e.prev=15,t.loading=!1,e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[4,12,15,18]])})))()}})},v=(r(232),r(7)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"container"},[t._m(1),t._v(" "),t.isAuthenticated?r("div",{staticClass:"row my-5"},[r("div",{staticClass:"col-12"},[r("form",{staticClass:"bg-light p-md-5 p-4 shadow-form",staticStyle:{"border-radius":"25px"},on:{submit:function(e){return e.preventDefault(),t.createTicket(e)}}},[r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"ticketing-name"}},[t._v("Full Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{id:"ticketing-name",type:"text",required:"",placeholder:"John Doe"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"ticketing-email"}},[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"ticketing-email",type:"email",required:"",placeholder:"email@example.com"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"ticketing-phone"}},[t._v("Phone")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"form-control",attrs:{id:"ticketing-phone",type:"tel",required:"",placeholder:"62812170845"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"ticketing-origin"}},[t._v("Origin")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.origin,expression:"form.origin"}],staticClass:"form-control",attrs:{id:"ticketing-origin",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"origin",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",selected:""}},[t._v("Choose...")]),t._v(" "),t._l(t.countries,(function(e,o){return r("option",{key:o,domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2)]),t._v(" "),r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"ticketing-destination"}},[t._v("Destination")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.destination,expression:"form.destination"}],staticClass:"form-control",attrs:{id:"ticketing-destination",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"destination",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",selected:""}},[t._v("Choose...")]),t._v(" "),t._l(t.countries,(function(e,o){return r("option",{key:o,domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2)]),t._v(" "),r("div",{staticClass:"form-group col-12 col-md-4"},[r("label",{attrs:{for:"ticketing-purpose"}},[t._v("Trip Type")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.trip_type,expression:"form.trip_type"}],staticClass:"form-control",attrs:{id:"ticketing-purpose",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"trip_type",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",selected:""}},[t._v("Choose ...")]),t._v(" "),r("option",{attrs:{value:"1"}},[t._v("One-way")]),t._v(" "),r("option",{attrs:{value:"2"}},[t._v("Round-trip")])])])]),t._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group col-12 col-md-6"},[r("label",{attrs:{for:"ticketing-date_from"}},[t._v("Departure Date")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.departure,expression:"form.departure"}],staticClass:"form-control",attrs:{id:"ticketing-date_from",type:"date",required:""},domProps:{value:t.form.departure},on:{input:function(e){e.target.composing||t.$set(t.form,"departure",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group col-12 col-md-6"},[r("label",{attrs:{for:"ticketing-date_return"}},[t.disabled?r("span",{staticClass:"text-secondary"},[t._v("Trip Type (Round Trip Only)")]):r("span",[t._v("Trip Type")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.return,expression:"form.return"}],staticClass:"form-control",attrs:{id:"ticketing-date_return",type:"date",disabled:t.disabled,required:!t.disabled},domProps:{value:t.form.return},on:{input:function(e){e.target.composing||t.$set(t.form,"return",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group col-12 col-md-4"},[r("label",{attrs:{for:"ticketing-adult"}},[t._v("Adult")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.adult,expression:"adult"}],staticClass:"form-control",attrs:{id:"ticketing-adult",type:"number",min:"0",placeholder:"0",required:""},domProps:{value:t.adult},on:{input:function(e){e.target.composing||(t.adult=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group col-12 col-md-4"},[r("label",{attrs:{for:"ticketing-child"}},[t._v("Child")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.child,expression:"child"}],staticClass:"form-control",attrs:{id:"ticketing-child",type:"number",min:"0",placeholder:"0",required:""},domProps:{value:t.child},on:{input:function(e){e.target.composing||(t.child=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group col-12 col-md-4"},[r("label",{attrs:{for:"ticketing-infant"}},[t._v("Infant")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.infant,expression:"infant"}],staticClass:"form-control",attrs:{id:"ticketing-infant",type:"number",min:"0",placeholder:"0",required:""},domProps:{value:t.infant},on:{input:function(e){e.target.composing||(t.infant=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group col-md-12"},[r("label",{attrs:{for:"ticketing-seat_class"}},[t._v("Seat Class")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.seat_class,expression:"form.seat_class"}],staticClass:"form-control",attrs:{id:"ticketing-seat_class",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"seat_class",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",selected:""}},[t._v("Choose...")]),t._v(" "),r("option",{attrs:{value:"Economy"}},[t._v("Economy")]),t._v(" "),r("option",{attrs:{value:"Business"}},[t._v("Business")]),t._v(" "),r("option",{attrs:{value:"First Class"}},[t._v("First Class")])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 text-center mt-4"},[t.loading?r("button",{staticClass:"btn btn-primary",staticStyle:{"background-color":"#4576a2"},attrs:{disabled:""}},[t._v("\n                Submitting your request ...\n              ")]):r("button",{staticClass:"btn btn-primary w-25 ",staticStyle:{"background-color":"#4576a2"},attrs:{type:"submit"}},[t._v("\n                Submit\n              ")])])])])])]):r("div",{staticClass:"row my-5",staticStyle:{height:"250px"}},[t._m(2)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"ceo-gmbh-welcome-area bg-img bg-overlay"},[e("div",{staticClass:"hero-container"},[e("img",{staticClass:"img-fluid",staticStyle:{"max-height":"400px","object-fit":"cover",filter:"brightness(0.8)"},attrs:{src:"/images/ticketing/hero-ticketing.jpg",width:"100%",alt:"customize-tour-hero-image",loading:"lazy"}}),this._v(" "),e("h1",{staticClass:"hero-text text-uppercase display-1 font-weight-bold text-white"},[this._v("\n        TICKETING\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mt-50"},[e("div",{staticClass:"section-heading dark text-center mb-0"},[e("span"),this._v(" "),e("h4",[this._v("TICKETING FORM")]),this._v(" "),e("p",[this._v("Fill all fields provided")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 text-center mt-50"},[e("h4",{staticClass:"text-danger font-weight-bold"},[this._v("\n          Please login to request your ticket!\n        ")]),this._v(" "),e("button",{staticClass:"ceo-gmbh-btn text-white mt-4",attrs:{type:"button","data-toggle":"modal","data-target":"#modal-login"}},[this._v("\n          LOGIN\n        ")])])}],!1,null,"669f64ce",null);e.default=component.exports}}]);