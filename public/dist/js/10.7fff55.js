(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{29:function(t,e,a){"use strict";var i={name:"TopBoardItem",props:{data:{type:Object,default:function(){return{user:{avatar:"",tagname:"initial"}}}},leader:{type:Object,default:null},disabled:{type:Boolean,default:!0},leaderboard:{type:Boolean,default:!1},expertise:{type:Number,default:null}},computed:{projectCount:function(){return this.data.user.finished_project?this.data.user.finished_project.length:0}},methods:{changeExpertise:function(){this.leaderboard&&this.$emit("click",this.expertise)}}},s=a(1),r={name:"TopBoardList",components:{TopBoardItem:Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topboard-item",class:{"topboard-item--home":!t.leaderboard},on:{click:t.changeExpertise}},[a("div",[a("div",{staticClass:"topboard-item__title--container"},[a("span",{staticClass:"iconify topboard-item__title--icon",attrs:{"data-icon":t.leader.icon}}),t._v(" "),a("span",{staticClass:"topboard-item__title--name"},[t._v(t._s(t.leader.title))])]),t._v(" "),a("div",{staticClass:"topboard-item__avatar--container"},[a("div",{staticClass:"topboard-item__avatar--rank"},[t._v("\n        #1\n      ")]),t._v(" "),a("img",{staticClass:"topboard-item__avatar--img",attrs:{src:t.data.user.avatar,alt:"",height:"108",width:"108"}}),t._v(" "),a("div",{staticClass:"topboard-item__avatar--points"},[t._v("\n        "+t._s(t.data.total_equity_count)+" Equity Earned\n      ")])]),t._v(" "),a("div",{staticClass:"topboard-item__identifier"},[a("div",{staticClass:"topboard-item__identifier-name"},[t._v("\n        "+t._s(t.data.user.full_name)+"\n      ")]),t._v(" "),a("div",{staticClass:"topboard-item__identifier-expertise"},[t._v("\n        "+t._s(t.data.expertise)+"\n      ")])])]),t._v(" "),a("div",[a("router-link",{staticClass:"topboard-item__view-button",attrs:{to:{name:"@.info",params:{tagname:t.data.user.tagname}},tag:"button",disabled:t.disabled}},[t._v("\n      View Profile\n    ")])],1)])}),[],!1,null,null,null).exports},props:{arrow:{type:Boolean,default:!0},differ:{type:Boolean,default:!0},showAll:{type:Boolean,default:!1},data:{type:Object,default:null},leaderboard:{type:Boolean,default:!1}},data:function(){return{expertise:0,leader:[{icon:"whh:painting",title:"Picasso"},{icon:"bx:bx-code",title:"Front Row"},{icon:"bx:bx-code-curly",title:"Mastermind"},{icon:"bx:bxs-data",title:"Snowden"}],dummyWidth:"",navPos:""}},computed:{isDisabled:function(){return this.showAll?[{active:!0,class:"opacity-1"},{active:!0,class:"opacity-1"},{active:!0,class:"opacity-1"},{active:!0,class:"opacity-1"}]:this.differ?[{active:0===this.expertise,class:0===this.expertise?"leaderboard-item--active":""},{active:1===this.expertise,class:1===this.expertise?"leaderboard-item--active":""},{active:2===this.expertise,class:2===this.expertise?"leaderboard-item--active":""},{active:3===this.expertise,class:3===this.expertise?"leaderboard-item--active":""}]:[{active:!0,class:"leaderboard-item--active"},{active:!0,class:"leaderboard-item--active"},{active:!0,class:"leaderboard-item--active"},{active:!0,class:"leaderboard-item--active"}]},topBoards:function(){return[{data:this.data.ui_ux_designer},{data:this.data.frontend_engineer},{data:this.data.backend_engineer},{data:this.data.data_expert}]}},mounted:function(){var t=this;this.onResize(),this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{navigate:function(t){"left"===t?this.expertise--:this.expertise++,this.$refs.topBoardList.scrollLeft=235*this.expertise},onResize:function(){var t=document.querySelector("html");this.dummyWidth=(t.scrollWidth-235)/2,this.navPos=t.scrollWidth/2-50},swipeTopLeaderboard:function(t){if(!this.$matchMedia.xl){var e=this.expertise;"right"===t&&e>0?e--:"left"===t&&e<3&&e++,this.$refs.topBoardList.scrollLeft=235*e,this.expertise=e,this.leaderboard&&this.$emit("change",this.expertise)}},changeExpertise:function(t){this.leaderboard&&this.$matchMedia.xl&&(this.expertise=t,this.$emit("change",t))}}},n=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topboard__container"},[a("div",{directives:[{name:"touch",rawName:"v-touch:swipe",value:t.swipeTopLeaderboard,expression:"swipeTopLeaderboard",arg:"swipe"}],ref:"topBoardList",staticClass:"topboard-list_container",class:{"topboard-list--showAll":t.showAll,"topboard-list_container--leaderboard":t.leaderboard}},[a("div",{class:{none:t.showAll},style:{"min-width":t.dummyWidth/10+"rem"}}),t._v(" "),t._l(t.topBoards,(function(e,i){return a("TopBoardItem",{key:"TopBoardItem-"+i,class:t.isDisabled[i].class,attrs:{data:e.data,leader:t.leader[i],disabled:!t.isDisabled[i].active,expertise:i,leaderboard:t.leaderboard},on:{click:t.changeExpertise}})})),t._v(" "),a("div",{class:{none:t.showAll},style:{"min-width":t.dummyWidth/10+"rem"}})],2),t._v(" "),t.arrow?a("div",{staticClass:"topboard-list__nav--container"},[a("button",{staticClass:"btn--clear topboard-list__nav",class:{invisible:0===t.expertise},style:{right:t.navPos/10+"rem"},on:{click:function(e){return t.navigate("left")}}},[a("span",{staticClass:"iconify topboard-list__nav--item",attrs:{"data-icon":"bi:arrow-left-short"}})]),t._v(" "),a("button",{staticClass:"btn--clear topboard-list__nav",class:{invisible:3===t.expertise},style:{left:t.navPos/10+"rem"},on:{click:function(e){return t.navigate("right")}}},[a("span",{staticClass:"iconify topboard-list__nav--item",attrs:{"data-icon":"bi-arrow-right-short"}})])]):t._e()])}),[],!1,null,null,null);e.a=n.exports},44:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a.n(i),r=a(3),n=a.n(r),o=a(2);function d(t,e,a,i,s,r,n){try{var o=t[r](n),d=o.value}catch(t){return void a(t)}o.done?e(d):Promise.resolve(d).then(i,s)}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var v={name:"HomePage",middleware:["newcomer"],components:{TopBoardList:a(29).a},metaInfo:function(){return{title:"Home",meta:[{name:"description",content:"Sweatequity: Freelancer Platform for Students. Expand your career by doing projects."}]}},data:function(){return{projectByStatusCount:"",topLeaderboards:{},debouncedScroll:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(o.b)({authenticated:"auth/check",snackbar:"notification/snackbar"})),mounted:function(){this.appendNavBg(),this.getHomeData(),this.$nextTick((function(){var t=this;document.querySelector(".desktop-nav",".nav-base").style.boxShadow="unset";var e=document.querySelector("html");window.onscroll=function(){clearTimeout(t.debouncedScroll),t.debouncedScroll=setTimeout((function(){e.scrollTop>0?document.querySelector(".desktop-nav",".nav-base").style.boxShadow="0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1)":document.querySelector(".desktop-nav",".nav-base").style.boxShadow="unset"}),50)}}))},beforeDestroy:function(){this.removeNavBg(),window.onscroll=null,document.querySelector(".desktop-nav",".nav-base").style.boxShadow="0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1)"},methods:{appendNavBg:function(){var t=document.createElement("style");t.setAttribute("id","tempNavBg"),t.innerHTML=".nav-base { background: #fff } .desktop-nav { background: #fff }",document.body.appendChild(t)},removeNavBg:function(){var t=document.getElementById("tempNavBg");t.parentNode.removeChild(t)},getHomeData:function(){var t,e=this;return(t=s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.a.get("/api/home").then((function(t){var a=t.data;e.projectByStatusCount=a.project_count,e.topLeaderboards=a.top_boards}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(i,s){var r=t.apply(e,a);function n(t){d(r,i,s,n,o,"next",t)}function o(t){d(r,i,s,n,o,"throw",t)}n(void 0)}))})()}}},_=(a(97),a(1)),u=Object(_.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"backwards"},[a("div",{staticClass:"slide slide-1__background"},[a("div",[t.$matchMedia.xl?a("img",{staticClass:"slide-1__left-dashed moveInRightDash duration--2",attrs:{src:"/images/left-dashed-desktop.svg",alt:""}}):t._e()]),t._v(" "),a("div",{staticClass:"slide-1__container"},[a("div",{staticClass:"slide-1__image-container moveInTop duration--2"},[a("img",{staticClass:"slide-1__dot-1",attrs:{src:"/images/dot-blue.svg",alt:""}}),t._v(" "),t.$matchMedia.xl?t._e():a("img",{staticClass:"slide-1__dot-2",attrs:{src:"/images/dot-blue.svg",alt:""}}),t._v(" "),t.$matchMedia.xl?a("img",{staticClass:"slide-1__image",attrs:{src:"/images/team-building-activities-banner.png",alt:""}}):a("img",{staticClass:"slide-1__image",attrs:{height:"344",src:"/images/smiling-woman-looking.png",alt:""}})]),t._v(" "),a("div",{staticClass:"slide-1__first-block "},[t._m(0),t._v(" "),t.$matchMedia.xl?a("div",{staticClass:"slide-1__ornament"},[a("img",{staticClass:"slide-1__triangle fadeIn duration--2",attrs:{src:"/images/triangle.svg",alt:""}})]):a("div",{staticClass:"slide-1__ornament"},[a("img",{staticClass:"slide-1__triangle fadeIn duration--2",attrs:{src:"/images/triangle.svg",alt:""}}),t._v(" "),a("img",{staticClass:"slide-1__left-dashed moveInRightDash duration--2",attrs:{src:"/images/left-dashed.svg",alt:""}}),t._v(" "),a("img",{staticClass:"slide-1__right-dashed moveInBottomLeft duration--2",attrs:{src:"/images/right-dashed.svg",alt:""}})]),t._v(" "),a("p",{staticClass:"slide-1__paragraph moveInTop duration--1_5"},[t._v("\n          Launch your passion project with a team.\n        ")]),t._v(" "),a("router-link",{staticClass:"slide-1__button moveInTop duration--2",attrs:{to:{name:"explore"},tag:"button"}},[a("span",[t._v("Get Started")]),t._v(" "),a("span",{staticClass:"iconify",attrs:{"data-icon":"ion:arrow-forward-outline"}})])],1)]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticStyle:{background:"#F2F4F6"}},[a("div",{staticClass:"slide slide-2__container"},[a("div",{staticClass:"slide-2__right"},[t._m(2),t._v(" "),a("p",{staticClass:"slide-2__paragraph"},[t._v("\n          Knowing the available project that currently posted on the website and the finished project will determine your spirit!\n        ")]),t._v(" "),a("div",{staticClass:"slide-2__facts"},[a("div",{staticClass:"slide-2__fact-item"},[a("span",{staticClass:"iconify slide-2__fact--icon",attrs:{"data-icon":"bx:bxs-brain"}}),t._v(" "),a("div",{staticClass:"slide-2__fact--number"},[t._v("\n              "+t._s(t.projectByStatusCount.hiring)+"\n            ")]),t._v(" "),a("div",{staticClass:"slide-2__fact--name"},[t._v("\n              Active Projects\n            ")])]),t._v(" "),a("div",{staticClass:"slide-2__fact-item"},[a("span",{staticClass:"iconify slide-2__fact--icon",attrs:{"data-icon":"entypo:paper-plane"}}),t._v(" "),a("div",{staticClass:"slide-2__fact--number"},[t._v("\n              "+t._s(t.projectByStatusCount.ongoing)+"\n            ")]),t._v(" "),a("div",{staticClass:"slide-2__fact--name"},[t._v("\n              Ongoing Projects\n            ")])]),t._v(" "),a("div",{staticClass:"slide-2__fact-item"},[a("span",{staticClass:"iconify slide-2__fact--icon",attrs:{"data-icon":"ant-design:check-circle-outlined"}}),t._v(" "),a("div",{staticClass:"slide-2__fact--number"},[t._v("\n              "+t._s(t.projectByStatusCount.finished)+"\n            ")]),t._v(" "),a("div",{staticClass:"slide-2__fact--name"},[t._v("\n              Finished Projects\n            ")])])])]),t._v(" "),t.$matchMedia.xl?a("div",{staticClass:"slide-2__left"},[a("img",{staticClass:"slide-2__image",attrs:{src:"/images/slide-2.png",alt:""}})]):t._e()])]),t._v(" "),a("div",{staticClass:"slide slide-3__container"},[a("h2",{staticClass:"slide-3__heading"},[t._v("\n      Leaderboard\n    ")]),t._v(" "),a("p",{staticClass:"slide-3__paragraph"},[t._v("\n      These are the highest achievers. Set them as examples, or beat their records. The choice is yours!\n    ")]),t._v(" "),t.$matchMedia.xl?a("div",[a("TopBoardList",{attrs:{differ:!1,arrow:!1,"show-all":!0,data:t.topLeaderboards}})],1):a("div",[a("TopBoardList",{attrs:{arrow:!1,data:t.topLeaderboards}})],1),t._v(" "),a("router-link",{staticClass:"btn btn--blue btn--large slide-3__button mt-1",attrs:{to:{name:"leaderboard"},tag:"button"}},[t._v("\n      See All Leaderboard\n    ")])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"slide-1__heading moveInTop duration--1"},[this._v("\n          Passion. "),e("br"),this._v("\n          Team. "),e("br"),this._v("  Success.\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"slide-1__right-dashed moveInBottomLeft duration--2",attrs:{src:"/images/right-dashed-desktop.svg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"slide-2__heading"},[this._v("\n          See The "),e("br"),this._v("\n          Available "),e("br"),this._v("\n          Project on "),e("br"),this._v("\n          The Platform\n        ")])}],!1,null,"e4cfb2c0",null);e.default=u.exports},70:function(t,e,a){var i=a(98);"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(13)(i,s);i.locals&&(t.exports=i.locals)},97:function(t,e,a){"use strict";a(70)},98:function(t,e,a){(t.exports=a(12)(!1)).push([t.i,".backwards[data-v-e4cfb2c0] {\n  margin: -6rem -3rem -3rem;\n}\n@media only screen and (min-width: 1280px) {\n.backwards[data-v-e4cfb2c0] {\n    margin-top: calc(-1 * var(--desktop-nav-height));\n}\n}",""])}}]);