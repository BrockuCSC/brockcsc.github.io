(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{FU3J:function(t,e,n){"use strict";n.r(e);var c=n("ofXK"),o=n("tyNb"),i=n("PCNd"),s=n("Vurf"),r=n("fXoL"),a=n("M0Hd");const u=o.f.forChild([{path:"",pathMatch:"full",redirectTo:"login"},{path:"login",component:(()=>{class t{constructor(t,e){this._auth=t,this._router=e,this._auth.getUser().subscribe(t=>{t&&this._router.navigate(t.admin?["admin"]:["home"])})}ngOnInit(){}login(){this._auth.googleLogin().then(()=>{this._router.navigate(["admin"])})}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(s.a),r.Pb(o.c))},t.\u0275cmp=r.Jb({type:t,selectors:[["csc-login"]],decls:6,vars:0,consts:[[1,"container"],[1,"csc-login-container"],["csc-button","",3,"click"]],template:function(t,e){1&t&&(r.Ub(0,"div",0),r.Ub(1,"div",1),r.Ub(2,"h3"),r.Ec(3,"Only the CSC Gmail account will give access to the admin panel"),r.Tb(),r.Ub(4,"a",2),r.cc("click",(function(t){return e.login()})),r.Ec(5,"Login"),r.Tb(),r.Tb(),r.Tb())},directives:[a.a],styles:[".csc-login-container[_ngcontent-%COMP%]{text-align:center}"]}),t})()},{path:"logout",component:(()=>{class t{constructor(t,e){this._auth=t,this._router=e,this.message="",this._auth.logout().then(()=>{this.message="You have been logged out. Redirecting home.",setTimeout(()=>{this._router.navigate(["home"])},1e3)})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(s.a),r.Pb(o.c))},t.\u0275cmp=r.Jb({type:t,selectors:[["csc-logout"]],decls:3,vars:1,consts:[[1,"container"]],template:function(t,e){1&t&&(r.Ub(0,"div",0),r.Ub(1,"h3"),r.Ec(2),r.Tb(),r.Tb()),2&t&&(r.Cb(2),r.Fc(e.message))},styles:[""]}),t})()},{path:"**",redirectTo:""}]);n.d(e,"AuthModule",(function(){return h}));let h=(()=>{class t{}return t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({factory:function(e){return new(e||t)},imports:[[c.c,i.a,u,o.f]]}),t})()}}]);