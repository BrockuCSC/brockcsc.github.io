function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{FU3J:function(t,e,n){"use strict";n.r(e);var i,o,c=n("ofXK"),a=n("tyNb"),r=n("PCNd"),s=n("Vurf"),u=n("fXoL"),l=n("M0Hd"),h=a.e.forChild([{path:"",pathMatch:"full",redirectTo:"login"},{path:"login",component:(o=function(){function t(e,n){var i=this;_classCallCheck(this,t),this._auth=e,this._router=n,this._auth.getUser().subscribe((function(t){t&&i._router.navigate(t.admin?["admin"]:["home"])}))}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"login",value:function(){var t=this;this._auth.googleLogin().then((function(){t._router.navigate(["admin"])}))}}]),t}(),o.\u0275fac=function(t){return new(t||o)(u.Mb(s.a),u.Mb(a.b))},o.\u0275cmp=u.Gb({type:o,selectors:[["csc-login"]],decls:6,vars:0,consts:[[1,"container"],[1,"csc-login-container"],["csc-button","",3,"click"]],template:function(t,e){1&t&&(u.Pb(0,"div",0),u.Pb(1,"div",1),u.Pb(2,"h3"),u.tc(3,"Only the CSC Gmail account will give access to the admin panel"),u.Ob(),u.Pb(4,"a",2),u.Xb("click",(function(t){return e.login()})),u.tc(5,"Login"),u.Ob(),u.Ob(),u.Ob())},directives:[l.a],styles:[".csc-login-container[_ngcontent-%COMP%]{text-align:center}"]}),o)},{path:"logout",component:(i=function(){function t(e,n){var i=this;_classCallCheck(this,t),this._auth=e,this._router=n,this.message="",this._auth.logout().then((function(){i.message="You have been logged out. Redirecting home.",setTimeout((function(){i._router.navigate(["home"])}),1e3)}))}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),i.\u0275fac=function(t){return new(t||i)(u.Mb(s.a),u.Mb(a.b))},i.\u0275cmp=u.Gb({type:i,selectors:[["csc-logout"]],decls:3,vars:1,consts:[[1,"container"]],template:function(t,e){1&t&&(u.Pb(0,"div",0),u.Pb(1,"h3"),u.tc(2),u.Ob(),u.Ob()),2&t&&(u.Ab(2),u.uc(e.message))},styles:[""]}),i)},{path:"**",redirectTo:""}]);n.d(e,"AuthModule",(function(){return b}));var f,b=((f=function t(){_classCallCheck(this,t)}).\u0275mod=u.Kb({type:f}),f.\u0275inj=u.Jb({factory:function(t){return new(t||f)},imports:[[c.c,r.a,h,a.e]]}),f)}}]);