exports.ids=[14],exports.modules={42:function(t,e,r){var content=r(55);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(4).default;t.exports.__inject__=function(t){o("75001b61",content,!0,t)}},54:function(t,e,r){"use strict";r.r(e);var o=r(42),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,(function(){return o[t]}))}(c);e.default=n.a},55:function(t,e,r){(e=r(2)(!1)).push([t.i,".hero-container[data-v-507f5fd2]{position:relative;text-align:center;color:#fff}.hero-text[data-v-507f5fd2]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);letter-spacing:30px}@media screen and (max-width:768px){.hero-text[data-v-507f5fd2]{font-size:1.2em;letter-spacing:10px}}",""]),t.exports=e},62:function(t,e,r){"use strict";r.r(e);var o=r(3),n={name:"PassengerInfoComponent",data:()=>({formLoading:!1,passengers:[],passengersDetail:!1}),computed:{...Object(o.mapGetters)({TRANSACTION:"transactions/TRANSACTION"}),disabled(){return this.passengers.length>0},item(){return this.TRANSACTION.data}},methods:{...Object(o.mapActions)({CREATE_PASSENGERS:"passengers/CREATE_PASSENGERS",GET_TRANSACTION:"transactions/GET_TRANSACTION"}),async createPassengers(){this.formLoading=!0;const form={transaction_id:this.$route.params.id,passengers:this.passengers};try{await this.CREATE_PASSENGERS(form),await this.GET_TRANSACTION(this.$route.params.id),this.$swal({background:"#f5f5f5",icon:"success",title:"Created!",text:"Passengers Created!",showConfirmButton:!0})}catch(t){this.$swal({background:"#f5f5f5",icon:"error",title:"Error!",text:"Please double check your inputs before submitting!",showConfirmButton:!0})}finally{this.formLoading=!1}},addPassengers(){const t=this.item.adults+this.item.children+this.item.infants;let i;for(i=0;i<t;i++)this.passengers.push({transaction_id:this.$route.params.id,person_name:"",title:"",dob:null,passport_number:"",issued_date:null,expiry_date:null,issuing_country:"",food_preference:"",room_choice_id:null});this.$swal({position:"top",background:"#f5f5f5",icon:"success",title:"Created!",text:t+" Passengers form created! Please double check your inputs before submitting!",showConfirmButton:!0})}}},c=r(1);var l=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"my-5"},[t._ssrNode('<div class="container">',"</div>",[t._ssrNode('<div class="row"><div class="col-12 col-md-6"><h5 class="text-uppercase">1. Passengers Information</h5></div> '+(0==t.item.forms.passengers.length?'<div class="col-12 col-md-6"><button'+t._ssrAttr("disabled",t.disabled)+' class="btn btn-block btn-secondary">\n          Add Passengers Information\n        </button></div>':t.item.forms.passengers.length>0?'<div class="col-12 col-md-6"><button class="btn btn-block btn-info">\n          All Passengers Detail\n        </button></div>':"\x3c!----\x3e")+"</div> "),t.item.forms.passengers.length<1?t._ssrNode("<form>","</form>",[t._ssrNode('<div class="row mt-2">',"</div>",t._l(t.passengers,(function(e,o){return t._ssrNode('<div class="col-12 col-md-6 my-2 border p-5">',"</div>",[t._ssrNode("<p>"+t._ssrEscape("Passenger Number "+t._s(o+1))+'</p> <div class="form-group"><label'+t._ssrAttr("for","t-form-name"+o)+">Full Name</label> <input"+t._ssrAttr("id","t-form-name"+o)+' type="text" required="required"'+t._ssrAttr("value",e.person_name)+' class="form-control"></div> '),t._ssrNode('<div class="form-group row">',"</div>",[t._ssrNode('<div class="col-6">',"</div>",[t._ssrNode("<label"+t._ssrAttr("for","t-form-title"+o)+">Title</label> "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"passenger.title"}],staticClass:"form-control form-control-sm",attrs:{id:"t-form-title"+o,required:""},on:{change:function(r){var o=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"title",r.target.multiple?o:o[0])}}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Choose...")]),t._v(" "),r("option",{attrs:{value:"Mr."}},[t._v("Mr.")]),t._v(" "),r("option",{attrs:{value:"Ms."}},[t._v("Ms.")]),t._v(" "),r("option",{attrs:{Value:"Mrs."}},[t._v("Mrs.")])])],2),t._ssrNode(" "),t._ssrNode('<div class="col-6">',"</div>",[t._ssrNode("<label"+t._ssrAttr("for","t-form-food"+o)+">Food Preference</label> "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.food_preference,expression:"passenger.food_preference"}],staticClass:"form-control form-control-sm",attrs:{id:"t-form-food"+o,required:""},on:{change:function(r){var o=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"food_preference",r.target.multiple?o:o[0])}}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Choose...")]),t._v(" "),r("option",{attrs:{value:"Vegetarian"}},[t._v("Vegetarian")]),t._v(" "),r("option",{attrs:{value:"Non-Vegetarian"}},[t._v("Non-Vegetarian")]),t._v(" "),r("option",{attrs:{value:"Muslim-Food"}},[t._v("Muslim-Food")])])],2)],2),t._ssrNode(' <div class="form-group"><label'+t._ssrAttr("for","t-form-dob"+o)+">Date of Birth</label> <input"+t._ssrAttr("id","t-form-dob"+o)+' type="date" required="required"'+t._ssrAttr("value",e.dob)+' class="form-control"></div> <div class="form-group"><label'+t._ssrAttr("for","t-form-passport"+o)+">Passport Number</label> <input"+t._ssrAttr("id","t-form-passport"+o)+' type="text" required="required"'+t._ssrAttr("value",e.passport_number)+' class="form-control"></div> <div class="form-group row"><div class="col-12 col-md-6"><label'+t._ssrAttr("for","t-form-issued"+o)+">Passport Issued Date</label> <input"+t._ssrAttr("id","t-form-issued"+o)+' type="date" required="required"'+t._ssrAttr("value",e.issued_date)+' class="form-control"></div> <div class="col-12 col-md-6"><label'+t._ssrAttr("for","t-form-expiry"+o)+">Passport Expiry Date</label> <input"+t._ssrAttr("id","t-form-expiry"+o)+' type="date" required="required"'+t._ssrAttr("value",e.expiry_date)+' class="form-control"></div></div> <div class="form-group"><label'+t._ssrAttr("for","t-form-country"+o)+">Issuing Country</label> <input"+t._ssrAttr("id","t-form-country"+o)+' type="text" required="required"'+t._ssrAttr("value",e.issuing_country)+' class="form-control"></div> '),t._ssrNode('<div class="form-group">',"</div>",[t._ssrNode("<label"+t._ssrAttr("for","t-form-room"+o)+">Room Choice</label> "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.room_choice_id,expression:"passenger.room_choice_id"}],staticClass:"form-control",attrs:{id:"t-form-room"+o,required:""},on:{change:function(r){var o=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"room_choice_id",r.target.multiple?o:o[0])}}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Choose...")]),t._v(" "),t._l(t.item.package.room_choices,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.room_name)+" - Rp.\n                "+t._s(e.room_price)+".000")])}))],2)],2)],2)})),0),t._ssrNode(" "+(t.passengers.length>0?'<div class="row"><div class="col-12 p-0 mt-2">'+(t.formLoading?'<button disabled="disabled" class="btn btn-block btn-lg btn-success">\n            Submitting All Passengers...\n          </button>':'<button type="submit" class="btn btn-block btn-lg btn-success">\n            Submit All Passengers\n          </button>')+"</div></div>":"\x3c!----\x3e"))],2):t._e(),t._ssrNode(" "+(t.passengersDetail?'<div class="row mt-4"><div class="col-12"><div class="table-responsive"><table class="table table-hover"><thead><tr><th scope="col">#</th> <th scope="col">Name</th> <th scope="col">DOB</th> <th scope="col">Passport Number</th> <th scope="col">Food Preference</th> <th scope="col">Issuing Country</th> <th scope="col">Room Choice</th> <th scope="col">Room Price</th></tr></thead> <tbody>'+t._ssrList(t.item.forms.passengers,(function(e,r){return'<tr><th scope="row">'+t._ssrEscape(t._s(r+1))+"</th> <td>"+t._ssrEscape(t._s(e.title)+" "+t._s(e.person_name))+"</td> <td>"+t._ssrEscape(t._s(e.dob))+"</td> <td>"+t._ssrEscape(t._s(e.passport_number))+"</td> <td>"+t._ssrEscape(t._s(e.food_preference))+"</td> <td>"+t._ssrEscape(t._s(e.issuing_country))+"</td> <td>"+t._ssrEscape(t._s(e.room_choice_id.room_name))+"</td> <td>"+t._ssrEscape("Rp. "+t._s(e.room_choice_id.room_price)+"K")+"</td></tr>"}))+' <tr><th colspan="7" class="text-right pr-5">Total Price</th> <td>'+t._ssrEscape("Rp. "+t._s(t.item.total_price_amount)+"K")+"</td></tr></tbody></table></div></div></div>":"\x3c!----\x3e"))],2)])}),[],!1,(function(t){}),null,"45f26660").exports,d={name:"MasterPassengerComponent",data:()=>({formLoading:!1,masterForm:!1,masterDetail:{},showMasterDetail:!1}),computed:{...Object(o.mapGetters)({TRANSACTION:"transactions/TRANSACTION"}),item(){return this.TRANSACTION.data}},methods:{...Object(o.mapActions)({GET_TRANSACTION:"transactions/GET_TRANSACTION",CREATE_MASTER_PASSENGER:"passengers/CREATE_MASTER_PASSENGER"}),async createMasterPassenger(){this.formLoading=!0,this.masterDetail.transaction_id=this.$route.params.id;try{await this.CREATE_MASTER_PASSENGER(this.masterDetail),await this.GET_TRANSACTION(this.$route.params.id),this.$swal({background:"#f5f5f5",icon:"success",title:"Created!",text:"Master Passenger Created! "+this.masterDetail.email,showConfirmButton:!0})}catch(t){this.$swal({background:"#f5f5f5",icon:"error",title:"Error!",text:"Please double check your inputs before submitting!",showConfirmButton:!0})}finally{this.formLoading=!1}}}};var m=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"my-5"},[t._ssrNode('<div class="container">',"</div>",[t._ssrNode('<div class="row"><div class="col-12 col-md-6"><h5 class="text-uppercase">2. Master Passenger Information</h5></div> '+(t.item.forms.master_passenger?'<div class="col-12 col-md-6"><button class="btn btn-block btn-info">\n          Master Passenger Detail\n        </button></div>':'<div class="col-12 col-md-6">'+(t.item.forms.passengers.length>0?'<button class="btn btn-block btn-secondary">\n          Choose Master Passenger\n        </button>':'<button disabled="disabled" class="btn btn-block btn-secondary">\n          Please submit all passengers first\n        </button>')+"</div>")+"</div> "),t.masterForm&&!t.item.forms.master_passenger?t._ssrNode('<div class="row mt-4">',"</div>",[t._ssrNode('<div class="col-12"><h6>PLEASE CHOOSE THE MASTER PASSENGER</h6></div> '),t._ssrNode('<div class="col-8 mt-4">',"</div>",[t._ssrNode("<form>","</form>",[t._ssrNode('<div class="form-group row">',"</div>",[t._ssrNode('<label for="master-passenger" class="col-sm-2 col-form-label">Passenger</label> '),t._ssrNode('<div class="col-sm-6 ">',"</div>",[r("select",{directives:[{name:"model",rawName:"v-model",value:t.masterDetail.passenger_id,expression:"masterDetail.passenger_id"}],staticClass:"form-control",attrs:{id:"master-passenger"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.masterDetail,"passenger_id",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Choose...")]),t._v(" "),t._l(t.item.forms.passengers,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.person_name))])}))],2)])],2),t._ssrNode(' <div class="form-group row"><label for="master-email" class="col-sm-2 col-form-label">E-mail</label> <div class="col-sm-6"><input id="master-email" type="email"'+t._ssrAttr("value",t.masterDetail.email)+' class="form-control"></div></div> <div class="row"><div class="col-12">'+(t.formLoading?'<button disabled="disabled" class="btn btn-block btn-success">\n                Adding Master Passenger ...\n              </button>':'<button type="submit" class="btn btn-block btn-success">\n                Add Master Passenger\n              </button>')+"</div></div>")],2)])],2):t.item.forms.master_passenger&&t.showMasterDetail?t._ssrNode('<div><div class="row mt-4"><div class="col-12"><p>'+t._ssrEscape("\n            Email :\n            "+t._s(t.item.forms.master_passenger.email)+"\n          ")+"</p> <p>"+t._ssrEscape("\n            Name :\n            "+t._s(t.item.forms.master_passenger.passenger_name)+"\n          ")+"</p></div></div></div>"):t._e()],2)])}),[],!1,(function(t){}),null,"dc30ae80").exports,f={name:"EmergencyContactComponent",data:()=>({eContactShow:!1,showEmergencyContactDetail:!1,e_contact:{},loading:!1}),computed:{...Object(o.mapGetters)({TRANSACTION:"transactions/TRANSACTION"}),item(){return this.TRANSACTION.data}},methods:{...Object(o.mapActions)({GET_TRANSACTION:"transactions/GET_TRANSACTION",CREATE_EMERGENCY_CONTACT:"passengers/CREATE_EMERGENCY_CONTACT"}),async createEmergencyContact(){this.loading=!0,this.e_contact.transaction_id=this.$route.params.id;try{await this.CREATE_EMERGENCY_CONTACT(this.e_contact),await this.GET_TRANSACTION(this.$route.params.id),this.$swal({background:"#f5f5f5",icon:"success",title:"Created!",text:"Emergency Contact Created! "+this.e_contact.name,showConfirmButton:!0})}catch(t){this.$swal({background:"#f5f5f5",icon:"error",title:"Error!",text:"Please double check your inputs before submitting!",showConfirmButton:!0})}finally{this.loading=!1}}}};var v=Object(c.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"my-5"},[t._ssrNode('<div class="container"><div class="row"><div class="col-12 col-md-6"><h5 class="text-uppercase">3. Emergency Contact Information</h5></div> '+(t.item.forms.emergency_contact?'<div class="col-12 col-md-6"><button class="btn btn-block btn-info">\n          Emergency Contact Detail\n        </button></div>':'<div class="col-12 col-md-6">'+(t.item.forms.master_passenger?'<button class="btn btn-block btn-secondary">\n          Create Emergency Contact\n        </button>':'<button disabled="disabled" class="btn btn-block btn-secondary">\n          Please choose master passenger first\n        </button>')+"</div>")+"</div> "+(t.eContactShow&&!t.item.forms.emergency_contact?'<div class="row mt-4"><div class="col-12"><h6>CREATE EMERGENCY CONTACT</h6></div> <div class="col-12 mt-4"><form><div class="form-group row"><label for="e-name" class="col-sm-2 col-form-label">Name</label> <div class="col-sm-6"><input id="e-name" type="text" required="required"'+t._ssrAttr("value",t.e_contact.name)+' class="form-control"></div></div> <div class="form-group row"><label for="e-phone_number" class="col-sm-2 col-form-label">Phone Number</label> <div class="col-sm-6"><input id="e-phone_number" type="tel" required="required"'+t._ssrAttr("value",t.e_contact.telephone)+' class="form-control"></div></div> <div class="form-group row"><label for="e-relatives" class="col-sm-2 col-form-label">Relative</label> <div class="col-sm-6"><input id="e-relatives" type="text" placeholder="Father" required="required"'+t._ssrAttr("value",t.e_contact.relatives)+' class="form-control"></div></div> <div class="row"><div class="col-8">'+(t.loading?'<button disabled="disabled" class="btn btn-block btn-success">\n                Submitting ...\n              </button>':'<button type="submit" class="btn btn-block btn-success">\n                Submit\n              </button>')+"</div></div></form></div></div>":t.showEmergencyContactDetail&&t.item.forms.emergency_contact?'<div><div class="row mt-4"><div class="col-12"><p>'+t._ssrEscape("\n            Name :\n            "+t._s(t.item.forms.emergency_contact.name)+"\n          ")+"</p> <p>"+t._ssrEscape("\n            Telephone :\n            "+t._s(t.item.forms.emergency_contact.telephone)+"\n          ")+"</p> <p>"+t._ssrEscape("Relative : "+t._s(t.item.forms.emergency_contact.relatives))+"</p></div></div></div>":"\x3c!----\x3e")+"</div>")])}),[],!1,(function(t){}),null,"63ce6497").exports,_={name:"TransactionSlipComponent",data:()=>({uploadForm:!1,showTransactionSlip:!1,slip:null,loading:!1}),computed:{...Object(o.mapGetters)({TRANSACTION:"transactions/TRANSACTION"}),item(){return this.TRANSACTION.data}},methods:{...Object(o.mapActions)({CREATE_TRANSACTION_SLIP:"transactions/CREATE_TRANSACTION_SLIP",GET_TRANSACTION:"transactions/GET_TRANSACTION"}),slipFile(t){const e=t.target.files[0];this.slip=e},async uploadFile(){this.loading=!0;const t=new FormData;t.append("image",this.slip),t.append("transaction_id",this.$route.params.id);try{await this.CREATE_TRANSACTION_SLIP(t),await this.GET_TRANSACTION(this.$route.params.id),this.$swal({background:"#f5f5f5",icon:"success",title:"Created!",text:"Transaction Slip Uploaded!",showConfirmButton:!0})}catch(t){this.$swal({background:"#f5f5f5",icon:"error",title:"Error!",text:"Please double check your inputs before submitting!",showConfirmButton:!0})}finally{this.loading=!1}}}};var h={name:"TransactionShow",middleware:["auth"],components:{PassengerInfo:l,MasterPassenger:m,EmergencyContact:v,TransactionSlip:Object(c.a)(_,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"my-5"},[t._ssrNode('<div class="container"><div class="row"><div class="col-12 col-md-6"><h5 class="text-uppercase">4. Transaction Slip</h5></div> '+(t.item.forms.transfer_evidence?'<div class="col-12 col-md-6"><button class="btn btn-block btn-info">\n          Transaction Slip Detail\n        </button></div>':'<div class="col-12 col-md-6">'+(t.item.forms.emergency_contact?'<button class="btn btn-block btn-secondary">\n          Upload Transaction Slip\n        </button>':'<button disabled="disabled" class="btn btn-block btn-secondary">\n          Please create emergency contact first\n        </button>')+"</div>")+"</div> "+(t.uploadForm&&!t.item.forms.transfer_evidence?'<div><div class="row mt-4"><div class="col-12 col-md-6 mt-2"><form><div class="form-group"><label for="ts-upload">Upload Transaction Slip</label> <input id="ts-upload" type="file" class="form-control-file"></div> <div class="row"><div class="col-12">'+(t.loading?'<button disabled="disabled" class="btn btn-block btn-success">\n                  Uploading ...\n                </button>':'<button type="submit" class="btn btn-block btn-success">\n                  Upload\n                </button>')+"</div></div></form></div></div></div>":t.showTransactionSlip&&t.item.forms.transfer_evidence?'<div><div class="row mt-4"><div class="col-12 mt-4"><button type="button" class="btn btn-block btn-success"><a'+t._ssrAttr("href",t.item.forms.transfer_evidence.image_url)+' target="_blank" style="text-decoration: none; color:white">\n              View Transaction Slip\n            </a></button></div></div></div>':"\x3c!----\x3e")+"</div>")])}),[],!1,(function(t){}),null,"28db7ea6").exports},async fetch(){this.loading=!0;try{await this.GET_TRANSACTION(this.$route.params.id)}catch(t){this.errors=!0}finally{this.loading=!1}},data:()=>({loading:!1,formLoading:!1,errors:!1,masterForm:!1,masterDetail:{},showMasterDetail:!1}),computed:{...Object(o.mapGetters)({TRANSACTION:"transactions/TRANSACTION"}),item(){return this.TRANSACTION.data}},methods:{...Object(o.mapActions)({GET_TRANSACTION:"transactions/GET_TRANSACTION",CREATE_PASSENGERS:"passengers/CREATE_PASSENGERS",CREATE_MASTER_PASSENGER:"passengers/CREATE_MASTER_PASSENGER"})}};var A=Object(c.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.item&&!t.loading?t._ssrNode("<div data-v-507f5fd2>","</div>",[t._ssrNode('<section class="ceo-gmbh-welcome-area bg-img bg-overlay" data-v-507f5fd2><div class="hero-container" data-v-507f5fd2><img'+t._ssrAttr("src",t.item.package.image_url)+' width="100%"'+t._ssrAttr("alt",t.item.package.name+"-package")+' loading="lazy" class="img-fluid" style="max-height: 400px; object-fit: cover; filter: brightness(0.8);" data-v-507f5fd2> <h1 class="hero-text text-uppercase display-1 font-weight-bold text-white" data-v-507f5fd2>'+t._ssrEscape("\n          "+t._s(t.item.package.name)+"\n        ")+'</h1></div></section> <section data-v-507f5fd2><div class="container" data-v-507f5fd2><div class="row" data-v-507f5fd2><div class="col-12" data-v-507f5fd2><div class="section-heading py-5 mb-0" data-v-507f5fd2><h4 class="text-dark" data-v-507f5fd2>BOOKING DETAIL</h4> <p class="text-dark" data-v-507f5fd2>'+t._ssrEscape("\n                Transaction Number - "+t._s(t.item.transaction_number)+"\n              ")+'</p></div></div></div> <div class="row" data-v-507f5fd2><div class="col-12 col-md-6 text-left" data-v-507f5fd2><p data-v-507f5fd2>'+t._ssrEscape("\n              Passengers : "+t._s(t.item.adults+t.item.children+t.item.infants)+"\n            ")+"</p> <p data-v-507f5fd2>\n              Emergency Contact :\n              "+(t.item.forms.emergency_contact?"<span data-v-507f5fd2>"+t._ssrEscape(t._s(t.item.forms.emergency_contact.name))+"</span>":'<span class="text-danger" data-v-507f5fd2>Not found</span>')+"</p> <p data-v-507f5fd2>\n              Master Passenger :\n              "+(t.item.forms.master_passenger?"<span data-v-507f5fd2>"+t._ssrEscape(t._s(t.item.forms.master_passenger.email))+"</span>":'<span class="text-danger" data-v-507f5fd2>Not found</span>')+"</p> <p data-v-507f5fd2>\n              Transaction Slip :\n              "+(t.item.forms.transfer_evidence?"<span data-v-507f5fd2>Uploaded</span>":'<span class="text-danger" data-v-507f5fd2>Not found</span>')+'</p></div> <div class="col-12 col-md-6 text-left" data-v-507f5fd2><p data-v-507f5fd2>\n              Total Price :\n              '+(0==t.item.total_price_amount?'<span class="text-danger" data-v-507f5fd2>Please complete the details first.</span>':"<span data-v-507f5fd2>"+t._ssrEscape("Rp. "+t._s(t.item.total_price_amount)+".000")+"</span>")+"</p> <p data-v-507f5fd2>"+t._ssrEscape("Created at : "+t._s(t.item.created_at))+"</p> <p data-v-507f5fd2>"+t._ssrEscape("Created by : "+t._s(t.item.user.name)+" / "+t._s(t.item.user.email))+"</p> "+(t.item.adults>0?"<p data-v-507f5fd2>"+t._ssrEscape("\n              Adults : "+t._s(t.item.adults)+"\n              ")+(t.item.children>0?"<span data-v-507f5fd2>"+t._ssrEscape("\n                Children : "+t._s(t.item.children))+"</span>":"\x3c!----\x3e")+" "+(t.item.infants>0?"<span data-v-507f5fd2>"+t._ssrEscape("\n                Infants : "+t._s(t.item.infants))+"</span>":"\x3c!----\x3e")+"</p>":"\x3c!----\x3e")+'</div></div></div></section> <hr data-v-507f5fd2> <div class="container" data-v-507f5fd2><div class="row" data-v-507f5fd2><div class="col-12" data-v-507f5fd2><div class="section-heading pt-5 pb-2 mb-0" data-v-507f5fd2><h4 class="text-dark" data-v-507f5fd2>BOOKING FORM</h4></div></div></div></div> '),r("passenger-info"),t._ssrNode(" "),r("master-passenger"),t._ssrNode(" "),r("emergency-contact"),t._ssrNode(" "),r("transaction-slip")],2):t._ssrNode("<div data-v-507f5fd2>","</div>",[r("client-only",[r("div",{staticClass:"container"},[r("div",{staticClass:"row p-5 align-items-center mx-auto"},[r("div",{staticClass:"col-12 my-4"},[r("content-placeholders",{attrs:{rounded:!0}},[r("content-placeholders-img")],1)],1),t._v(" "),t._l(2,(function(e){return r("div",{key:e,staticClass:"col-12 my-4"},[r("content-placeholders",{attrs:{rounded:!0}},[r("content-placeholders-heading"),t._v(" "),r("content-placeholders-text",{attrs:{lines:2}})],1)],1)}))],2)])])],1)])}),[],!1,(function(t){var e=r(54);e.__inject__&&e.__inject__(t)}),"507f5fd2","218a4c92");e.default=A.exports}};