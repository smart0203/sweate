(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{67:function(t,e,r){"use strict";r.r(e);var n=r(9),i=r(2);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={name:"VisitedUserProjectsPage",scrollToTop:!1,components:{ProjectCard:n.a},metaInfo:function(){return{title:"".concat(this.data.user.full_name," - Projects")}},computed:a(a({},Object(i.b)({data:"visit/user"})),{},{projects:function(){return"Student"===this.data.user.role?this.data.projects.map((function(t){return t.project})):this.data.projects}})},u=r(1),p=Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"project--container"},[this._l(this.projects,(function(t){return e("ProjectCard",{key:t.id,attrs:{data:t}})})),this._v(" "),0===this.projects.length?e("p",{staticClass:"info__p"},[this._v("\n      Let fill this page with some projects\n    ")]):this._e()],2)])}),[],!1,null,null,null);e.default=p.exports},8:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=["second","minute","hour","day","week","month","year"],i=["秒","分钟","小时","天","周","个月","年"],s={},a=function(t,e){s[t]=e},o=function(t){return s[t]||s.en_US},c=[60,60,24,7,365/7/12,12];function u(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function p(t,e){for(var r=t<0?1:0,n=t=Math.abs(t),i=0;t>=c[i]&&i<c.length;i++)t/=c[i];return(t=Math.floor(t))>(0===(i*=2)?9:1)&&(i+=1),e(t,i,n)[r].replace("%s",t.toString())}function l(t,e){return(+(e?u(e):new Date)-+u(t))/1e3}var d=function(t,e,r){return p(l(t,r&&r.relativeDate),o(e))};a("en_US",(function(t,e){if(0===e)return["just now","right now"];var r=n[Math.floor(e/2)];return t>1&&(r+="s"),[t+" "+r+" ago","in "+t+" "+r]})),a("zh_CN",(function(t,e){if(0===e)return["刚刚","片刻后"];var r=i[~~(e/2)];return[t+" "+r+"前",t+" "+r+"后"]}))},9:function(t,e,r){"use strict";var n=r(0),i=r.n(n),s=r(8),a=r(3),o=r.n(a),c=r(2);function u(t,e,r,n,i,s,a){try{var o=t[s](a),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(n,i)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h={name:"ProjectCard",props:{data:{type:Object,default:null}},data:function(){return{showWish:""}},computed:l(l({},Object(c.b)({user:"auth/user",snackbar:"notification/snackbar"})),{},{expertiseIn:function(){var t=[{name:"UI/UX Designer",isRequired:this.project.ui_ux_designer},{name:"Frontend Engineer",isRequired:this.project.front_end_engineer},{name:"Backend Engineer",isRequired:this.project.back_end_engineer},{name:"Data Expert",isRequired:this.project.data_expert}].filter((function(t){return!0===t.isRequired})).map((function(t){return t.name})).join(", ");return""===t?"Not Specified":t},rewards:function(){return this.getRewards({rev_share:this.project.rev_share,equity:this.project.equity})},project:function(){return this.data.project?this.data.project:this.data},wishText:function(){return this.project.is_wished&&this.project.is_wished.status?"Remove from Wishlist":"Add to Wishlist"}}),methods:{getRewards:function(t){var e=t.rev_sahre;return t.equity?"Equity":e?"Rev Share":"Not Specified"},getHumanDate:function(t){return s.a(t)},showWishlist:function(){this.showWish=!this.showWish},toggleWishlist:function(){var t,e=this;return(t=i.a.mark((function t(){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.project.is_wished&&e.project.is_wished.status,t.next=3,o.a.post("/api/project/".concat(e.project.project_url,"/wishlist"),{status:!r}).then((function(t){var r=t.data;e.snackbar.open(r.message),e.$store.dispatch("auth/updateWishlists",{wishlists:r.wishlists}),e.project.is_wished?e.project.is_wished.status=!e.project.is_wished.status:e.project.is_wished={status:!0}})).catch((function(t){e.snackbar.open(t.response.data.message),e.$router.push({name:"login"})}));case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,i){var s=t.apply(e,r);function a(t){u(s,n,i,a,o,"next",t)}function o(t){u(s,n,i,a,o,"throw",t)}a(void 0)}))})()}}},f=r(1),_=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project__card--container"},[r("div",{staticClass:"project__card--top-container pointer"},[r("router-link",{attrs:{to:{name:"project.details",params:{id:t.project.project_url}}}},[r("img",{attrs:{src:t.project.thumbnail_url,height:"150"}})])],1),t._v(" "),r("div",{staticClass:"project__card--body-container"},[r("div",{staticClass:"project__card--body-salary"},[t._v("\n      "+t._s(t.rewards)+"\n    ")]),t._v(" "),r("div",{staticClass:"project__card--info-container"},[r("h2",{staticClass:"project__card--name"},[t._v("\n        "+t._s(t.project.title)+"\n      ")]),t._v(" "),r("div",{staticClass:"project__card--info--consistency"},[r("div",{staticClass:"project__card--post-info"},[r("div",{staticClass:"ellipsies"},[t._v("\n            Expertise in : "+t._s(t.expertiseIn)+"\n          ")]),t._v(" "),r("div",{staticClass:"ellipsies"},[t._v("\n            Posted by : "+t._s(t.project.user.full_name)+"\n          ")]),t._v(" "),r("div",{staticClass:"ellipsies"},[t._v("\n            Location : "+t._s(t.project.user.location)+"\n          ")])]),t._v(" "),r("div",[r("div",{staticClass:"project__card--bounty-info"},[t.project.rev_share?r("div",{staticClass:"info-item--container"},[t._m(0),t._v(" "),r("span",[t._v("Rev Share")])]):t._e(),t._v(" "),t.project.equity?r("div",{staticClass:"info-item--container"},[t._m(1),t._v(" "),r("span",[t._v("Equity")])]):t._e()]),t._v(" "),r("div",{staticClass:"project-card__extra-info--container"},[r("div",{staticClass:"project-card__extra-info"},[r("div",[t._v("• Posted "+t._s(t.getHumanDate(t.project.created_at)))])]),t._v(" "),!t.$matchMedia.xl||t.user&&"Student"!==t.user.role?t._e():r("button",{staticClass:"btn--clear",on:{click:t.showWishlist}},[r("span",{staticClass:"iconify project-card__wish",attrs:{"data-icon":"mdi:dots-horizontal",width:"22"}})]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showWish,expression:"showWish"}],staticClass:"card-wish__container"},[r("button",{directives:[{name:"debounce",rawName:"v-debounce:400ms",value:t.toggleWishlist,expression:"toggleWishlist",arg:"400ms"}],staticClass:"btn btn--clear card-wish__button",attrs:{"debounce-events":"click"}},[t._v("\n                "+t._s(t.wishText)+"\n              ")])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("span",{staticClass:"iconify info-item--icon",attrs:{"data-icon":"fa-solid:dollar-sign",width:"8",height:"15"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("span",{staticClass:"iconify info-item--icon",attrs:{"data-icon":"la:certificate-solid",width:"15",height:"15"}})])}],!1,null,null,null);e.a=_.exports}}]);