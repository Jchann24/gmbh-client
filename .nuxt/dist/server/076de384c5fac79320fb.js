exports.ids=[14],exports.modules={85:function(r,e,o){"use strict";o.r(e);var t={name:"SetinggsPage",middleware:"auth",data:()=>({form:{},loading:!1,error:null}),computed:{errorBorder403(){return this.error&&403===this.error.status?"border-color: red":""},errorBorder422(){return this.error&&422===this.error.status?"border-color: red":""}},methods:{clearForm(){Object.assign(this.$data,this.$options.data())},async resetPassword(){this.loading=!0;try{await this.$axios.$patch("/reset-password-user",this.form),this.clearForm(),this.$swal({icon:"success",title:"Password Changed!",showConfirmButton:!1,timerProgressBar:!0,timer:5e3})}catch(r){this.error=r.response}finally{this.loading=!1}}}},d=o(1);var component=Object(d.a)(t,(function(){var r=this,e=r.$createElement;return(r._self._c||e)("div",{staticClass:"bg-light"},[r._ssrNode('<div class="container"><div class="row"><div class="col-12 mt-100"><div class="section-heading dark text-center"><span></span> <h4>Settings</h4></div></div></div></div> <div class="container"><div class="row"><div class="col-12 col-lg-8 mx-auto"><h4 class="text-uppercase font-weight-bolder">Change Password</h4> '+(r.error?'<div role="alert" class="alert alert-danger">'+(403===r.error.status?"<span>"+r._ssrEscape("\n            "+r._s(r.error.data.message)+"\n          ")+"</span>":"<span>\n            New password confirmation doesn't match.\n          </span>")+"</div>":"\x3c!----\x3e")+' <form class="mt-4 mb-100"><div class="form-group"><label for="old-password">Old Password</label> <input id="old-password" type="password" aria-describedby="oldPasswordHelp" required="required"'+r._ssrAttr("value",r.form.old_password)+' class="form-control"'+r._ssrStyle(null,r.errorBorder403,null)+'> <small id="oldPasswordHelp" class="form-text text-muted">Your current password.</small></div> <div class="form-group"><label for="new-password">New Password</label> <input id="new-password" type="password" required="required"'+r._ssrAttr("value",r.form.new_password)+' class="form-control"'+r._ssrStyle(null,r.errorBorder422,null)+'></div> <div class="form-group"><label for="new-password-confirmation">New Password Confirmation</label> <input id="new-password-confirmation" type="password" required="required"'+r._ssrAttr("value",r.form.new_password_confirmation)+' class="form-control"'+r._ssrStyle(null,r.errorBorder422,null)+'></div> <div class="text-right">'+(r.loading?'<button disabled="disabled" class="ceo-gmbh-btn" style="pointer-events: none;">\n              Loading ...\n            </button>':'<button type="submit" class="ceo-gmbh-btn">\n              Submit\n            </button>')+"</div></form></div></div></div>")])}),[],!1,(function(r){}),null,"e935c246");e.default=component.exports}};