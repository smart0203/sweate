(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{20:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a);function i(t,e,n,a,r,i,o){try{var s=t[i](o),p=s.value}catch(t){return void n(t)}s.done?e(p):Promise.resolve(p).then(a,r)}var o={name:"ApplyIndex",middleware:["auth","student"],computed:{title:function(){return this.$route.params.title},applicant_type:function(){return this.$route.params.type},types:function(){var t=[{name:"Individual",route:"project.apply.individual",isDisabled:"Team"===this.$route.params.type}];return t}},methods:{update:function(){var t,e=this;return(t=r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/api/project/");case 2:e.form.reset();case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function s(t){i(o,a,r,s,p,"next",t)}function p(t){i(o,a,r,s,p,"throw",t)}s(void 0)}))})()}}},s=n(1),p=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"apply__container"},[n("div",{staticClass:"apply__top--container"},[n("TopImage",{attrs:{type:1}}),t._v(" "),n("h2",{staticClass:"apply__top--h1"},[t._v("\n      You Almost There!\n    ")]),t._v(" "),n("p",{staticClass:"apply__top--p"},[t._v("\n      You need to fill up the form below about yourself / team who wants to applied to "),n("strong",[t._v(t._s(t.title)+".")])])],1),t._v(" "),n("div",{staticClass:"form-group__container"},[n("h4",{staticClass:"form-group__input-name form__input-name"},[t._v("\n      Applicant\n    ")]),t._v(" "),n("div",{staticClass:"form-group__radio-container"},t._l(t.types,(function(e){return n("router-link",{key:e.name,staticClass:"btn btn--white btn--apply",attrs:{to:{name:e.route,params:{title:t.title,type:t.applicant_type}},"active-class":"active-type",tag:"button",disabled:e.isDisabled}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),1)]),t._v(" "),n("div",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)])}),[],!1,null,null,null);e.default=p.exports}}]);