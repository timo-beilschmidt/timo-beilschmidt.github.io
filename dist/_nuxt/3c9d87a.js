(window.webpackJsonp=window.webpackJsonp||[]).push([[168,50],{264:function(e){e.exports=JSON.parse('{"teamMembers":[{"id":1,"image":"/img/team/team-1/team-1.jpg","name":"Caroline Roses","position":"Designer"},{"id":2,"image":"/img/team/team-1/team-2.jpg","name":"Blake Hamilton","position":"Engineer"},{"id":3,"image":"/img/team/team-1/team-3.jpg","name":"Kashara May","position":"Founder"},{"id":4,"image":"/img/team/team-1/team-4.jpg","name":"Peter Parker","position":"Marketing"},{"id":5,"image":"/img/team/team-3/team-1.jpg","name":"Caroline Roses","position":"Designer"},{"id":6,"image":"/img/team/team-3/team-2.jpg","name":"Blake Hamilton","position":"Engineer"},{"id":7,"image":"/img/team/team-3/team-3.jpg","name":"Kashara May","position":"Founder"},{"id":8,"image":"/img/team/team-2/team-1.jpg","name":"Caroline Roses","position":"Designer"},{"id":9,"image":"/img/team/team-2/team-2.jpg","name":"Blake Hamilton","position":"Engineer"},{"id":10,"image":"/img/team/team-2/team-3.jpg","name":"Kashara May","position":"Founder"}]}')},313:function(e,t,m){"use strict";m.r(t);var n={props:["teamMember"]},r=m(21),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,m=e._self._c||t;return m("div",{staticClass:"team team__style--3"},[m("div",{staticClass:"thumb"},[m("img",{attrs:{src:e.teamMember.image,alt:"team Images"}}),e._v(" "),m("div",{staticClass:"overlay",style:{backgroundImage:"url("+e.teamMember.image+")"}}),e._v(" "),e._m(0)]),e._v(" "),m("div",{staticClass:"team-info text-center"},[m("div",{staticClass:"info"},[m("h5",[e._v(e._s(e.teamMember.name))]),e._v(" "),m("span",[e._v(e._s(e.teamMember.position))])])])])}),[function(){var e=this,t=e.$createElement,m=e._self._c||t;return m("ul",{staticClass:"social-icon icon-solid-rounded icon-size-medium text-center"},[m("li",{staticClass:"facebook"},[m("a",{staticClass:"link",attrs:{href:"https://www.facebook.com/","aria-label":"Facebook"}},[m("i",{staticClass:"fab fa-facebook"})])]),e._v(" "),m("li",{staticClass:"twitter"},[m("a",{staticClass:"link",attrs:{href:"https://twitter.com/","aria-label":"Twitter"}},[m("i",{staticClass:"fab fa-twitter"})])]),e._v(" "),m("li",{staticClass:"instagram"},[m("a",{staticClass:"link",attrs:{href:"https://www.instagram.com/","aria-label":"Instagram"}},[m("i",{staticClass:"fab fa-instagram"})])])])}],!1,null,null,null);t.default=component.exports},562:function(e,t,m){"use strict";m.r(t);var n=m(313),r=m(264),o={components:{TeamMemberThree:n.default},data:function(){return{data:r}}},l=m(21),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,m=e._self._c||t;return m("div",{staticClass:"brook-team-area bg_color--5 ptb--100 ptb-sm--60 ptb-md--80"},[m("div",{staticClass:"container"},[m("div",{staticClass:"row row--30"},e._l(e.data.teamMembers.slice(4,7),(function(e){return m("div",{key:e.id,staticClass:"col-lg-4 col-md-4 col-sm-6 col-12"},[m("TeamMemberThree",{attrs:{teamMember:e}})],1)})),0)])])}),[],!1,null,null,null);t.default=component.exports}}]);