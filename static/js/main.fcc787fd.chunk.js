(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(19),s=n.n(i),r=n(17),o=n.n(r),l=n(24),d=n.n(l),a=n(28),j=n(16),h=n(6),u=(n(121),n(5)),b=function(e){var t=e.id,n=(e.go,e.fetchedUser),i=Object(c.useState)([]),s=Object(j.a)(i,2),r=s[0],o=s[1],l=Object(c.useState)(null),d=Object(j.a)(l,2),a=d[0],b=d[1],f=Object(c.useState)(null),p=Object(j.a)(f,2),O=p[0],m=p[1];function x(){n&&(m(Object(u.jsx)(h.n,{})),fetch("https://lpjakewolfskin.ru/api/v1/paste/get/unrelated/?vk_id="+n.id).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){m(null),o(e)})))}function g(e){fetch("https://lpjakewolfskin.ru/api/v1/paste/relate/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:r.id,vk_id:n.id,mark:e})}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(){b(Object(u.jsx)(h.o,{onClose:function(){return b(null)},children:"\u041f\u0430\u0441\u0442\u0430 \u043e\u0446\u0435\u043d\u0435\u043d\u0430"}))}))}return Object(c.useEffect)((function(){x()}),[]),Object(u.jsx)(h.p,{activePanel:t,popout:O,children:Object(u.jsxs)(h.k,{id:t,children:[Object(u.jsx)(h.l,{children:"\u041f\u0410\u0421\u0422\u0415\u0420"}),n&&Object(u.jsx)(h.i,{header:Object(u.jsx)(h.j,{mode:"secondary",children:"\u042d\u0442\u043e \u0442\u044b"}),children:Object(u.jsx)(h.f,{before:n.photo_200?Object(u.jsx)(h.c,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:"",children:"".concat(n.first_name," ").concat(n.last_name)})}),Object(u.jsxs)(h.i,{header:Object(u.jsxs)(h.j,{mode:"secondary",children:["\u0414\u0430\u043d\u043d\u0443\u044e \u043f\u0430\u0441\u0442\u0443 \u043e\u0446\u0435\u043d\u0438\u043b\u0438 ",r.cnt," \u0440\u0430\u0437, \u0440\u0435\u0439\u0442\u0438\u043d\u0433 - ",r.rating]}),children:[Object(u.jsx)(h.g,{children:Object(u.jsx)(h.e,{size:"l",mode:"shadow",style:{marginBottom:"1rem"},children:Object(u.jsx)(h.g,{style:{padding:".5rem"},children:Object(u.jsx)("p",{children:r.clear_text})})})}),Object(u.jsx)(h.i,{header:Object(u.jsx)(h.j,{mode:"secondary",children:"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u043f\u0430\u0441\u0442\u0443"}),children:Object(u.jsxs)(h.g,{style:{display:"flex",paddingBottom:"9rem"},children:[Object(u.jsx)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"destructive",onClick:function(){g(1)},children:"1"}),Object(u.jsx)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"destructive",onClick:function(){g(2)},children:"2"}),Object(u.jsx)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"secondary",onClick:function(){g(3)},children:"3"}),Object(u.jsx)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"commerce",onClick:function(){g(4)},children:"4"}),Object(u.jsx)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"commerce",onClick:function(){g(5)},children:"5"})]})}),Object(u.jsx)(h.h,{filled:!0,vertical:"bottom",children:Object(u.jsx)(h.i,{header:Object(u.jsx)(h.j,{mode:"secondary",children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0430\u0441\u0442\u0443"}),children:Object(u.jsxs)(h.g,{style:{display:"flex"},children:[Object(u.jsx)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"secondary",onClick:function(){m(Object(u.jsx)(h.n,{})),fetch("https://lpjakewolfskin.ru/api/v1/paste/get/rand/").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){m(null),o(e)}))},children:"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u0430\u044f \u043f\u0430\u0441\u0442\u0430"}),Object(u.jsx)(h.d,{stretched:!0,size:"l",mode:"secondary",onClick:function(){x()},children:"\u041d\u0435\u043e\u0446\u0435\u043d\u0435\u043d\u043d\u0430\u044f \u043f\u0430\u0441\u0442\u0430"})]})})})]}),a]})})},f=(n(123),function(){var e=Object(c.useState)("home"),t=Object(j.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(null),r=Object(j.a)(s,2),l=r[0],f=r[1],p=Object(c.useState)(Object(u.jsx)(h.n,{size:"large"})),O=Object(j.a)(p,2),m=O[0],x=O[1];Object(c.useEffect)((function(){function e(){return(e=Object(a.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,f(t),x(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if("VKWebAppUpdateConfig"===n){var i=document.createAttribute("scheme");i.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(i)}})),function(){e.apply(this,arguments)}()}),[]);return Object(u.jsx)(h.a,{children:Object(u.jsx)(h.b,{children:Object(u.jsx)(h.p,{activePanel:n,popout:m,children:Object(u.jsx)(b,{id:"home",fetchedUser:l,go:function(e){i(e.currentTarget.dataset.to)}})})})})});n(124);o.a.send("VKWebAppInit"),s.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.fcc787fd.chunk.js.map