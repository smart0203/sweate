(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{24:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),s=n(3),i=n.n(s),o=n(2);function u(t,e,n,r,a,s,i){try{var o=t[s](i),u=o.value}catch(t){return void n(t)}o.done?e(u):Promise.resolve(u).then(r,a)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var s=t.apply(e,n);function i(t){u(s,r,a,i,o,"next",t)}function o(t){u(s,r,a,i,o,"throw",t)}i(void 0)}))}}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p={name:"VisitedUserIndex",data:function(){return{inviteTo:""}},computed:v(v({},Object(o.b)({user:"auth/user",ownProjects:"auth/projects",data:"visit/user",snackbar:"notification/snackbar"})),{},{tabs:function(){return"Student"===this.data.user.role?[{name:"Projects",route:"@.projects"},{name:"Wishlist",route:"@.wishlist"},{name:"Info",route:"@.info"}]:[{name:"Projects",route:"@.projects"},{name:"Info",route:"@.info"}]},isSelf:function(){return!!this.user&&this.user.id===this.data.user.id},hiringProjects:function(){return this.ownProjects.filter((function(t){return"Hiring"===t.status}))}}),mounted:function(){this.getUser()},methods:{getUser:function(){var t=this;return c(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("visit/fetchVisitedUser",{tagname:t.$route.params.tagname});case 2:t.changeTitle();case 3:case"end":return e.stop()}}),e)})))()},changeTitle:function(){var t=this;return c(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.dispatch("navigation/changeTitle",{title:t.data.user.full_name});case 1:case"end":return e.stop()}}),e)})))()},inviteToTeam:function(){var t=this;return c(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.user?i.a.post("/api/user/".concat(t.data.user.tagname,"/invite/team")).then((function(e){var n=e.data;t.snackbar.open(n.message)})):t.$router.push({name:"login"});case 1:case"end":return e.stop()}}),e)})))()},showOwnProjects:function(){null===this.ownProjects||0===this.ownProjects.length?this.snackbar.open("You don't have any projects yet"):(this.inviteTo=this.hiringProjects[0].id,this.$refs.listOwnProjects.openModal())},inviteToProject:function(){var t=this;return c(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.user?i.a.post("/api/user/".concat(t.data.user.tagname,"/invite/project"),{project_id:t.inviteTo}).then((function(e){var n=e.data;t.snackbar.open(n.message),t.$refs.listOwnProjects.closeModal()})).catch((function(e){t.snackbar.open(e.response.data.message)})):t.$router.push({name:"login"});case 1:case"end":return e.stop()}}),e)})))()}}},m=n(1),d=Object(m.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user__container"},[n("div",{staticClass:"user__info--container"},[n("img",{staticClass:"user__info--img",attrs:{src:t.data.user.avatar,alt:""}}),t._v(" "),n("p",{staticClass:"user__info--name"},[t._v("\n      "+t._s(t.data.user.full_name)+"\n    ")]),t._v(" "),n("p",{staticClass:"user__info--occupation"},[t._v("\n      "+t._s(t.data.user.expertise)+"\n    ")])]),t._v(" "),n("div",{staticClass:"user__action--container"},["Student"===t.data.user.role?[t.user&&"Lecturer"===t.user.role?n("button",{staticClass:"btn action--button btn--blue",attrs:{disabled:t.isSelf||!t.data.user.is_open_hired},on:{click:t.showOwnProjects}},[t._v("\n        Invite To Project\n      ")]):t._e(),t._v(" "),n("router-link",{staticClass:"btn action--button btn--white",attrs:{to:{name:"message",params:{tagname:this.$route.params.tagname}},tag:"button",disabled:t.isSelf}},[t._v("\n        Direct Message\n      ")])]:[n("router-link",{staticClass:"btn action--button btn--white",attrs:{to:{name:"message",params:{tagname:this.$route.params.tagname}},tag:"button",disabled:t.isSelf}},[t._v("\n        Contact Me\n      ")])]],2),t._v(" "),t.$matchMedia.xl?t._e():n("div",{staticClass:"user__sub-menu--container"},t._l(t.tabs,(function(e){return n("router-link",{key:e.route,staticClass:"user__sub-menu--item",attrs:{to:{name:e.route},"active-class":"user__sub-menu--active"}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),1),t._v(" "),t.$matchMedia.xl?n("div",{staticClass:"user__sub-menu"},[n("div",{staticClass:"user__sub-menu--left"},t._l(t.tabs,(function(e){return n("router-link",{key:e.route,staticClass:"user__sub-menu--item",attrs:{to:{name:e.route},"active-class":"user__sub-menu--active"}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),1)]):t._e(),t._v(" "),n("Modal",{ref:"listOwnProjects",attrs:{type:"small"},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",[n("h4",{staticClass:"post__modal--h4 my-0"},[t._v("\n          Invite to\n        ")])])]},proxy:!0},{key:"body",fn:function(){return[n("div",[n("hr",{staticClass:"my-0 mb-2_5"}),t._v(" "),n("div",{staticClass:"form-group__container"},[n("div",{staticClass:"select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.inviteTo,expression:"inviteTo"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.inviteTo=e.target.multiple?n:n[0]}}},t._l(t.hiringProjects,(function(e){return n("option",{key:"Option-"+e.id,domProps:{value:e.id}},[t._v("\n                "+t._s(e.title)+"\n              ")])})),0),t._v(" "),n("span",{staticClass:"focus"})])])])]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"btn btn--blue ml-auto",on:{click:t.inviteToProject}},[t._v("\n        Invite\n      ")])]},proxy:!0}])}),t._v(" "),t.$matchMedia.xl?n("hr",{staticClass:"separator-short mt-2_5 mb-3"}):t._e(),t._v(" "),n("div",{},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)}),[],!1,null,null,null);e.default=d.exports}}]);