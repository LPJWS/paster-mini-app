(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(22),r=n.n(s),i=n(20),o=n.n(i),a=n(21),j=n.n(a),l=n(23),d=n(17),h=n(6),u=(n(124),n(130)),b=n(132),f=n(133),O=n(131),p=n(129),x=n(4),m=function(e){var t=e.id,n=e.go,s=e.fetchedUser,r=Object(c.useState)(null),i=Object(d.a)(r,2),a=i[0],m=i[1],g=Object(c.useState)(null),k=Object(d.a)(g,2),y=k[0],v=k[1],w=Object(c.useState)(null),C=Object(d.a)(w,2),S=C[0],z=C[1];function E(){return U.apply(this,arguments)}function U(){return U=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z(Object(x.jsx)(h.n,{})),fetch("https://lpjakewolfskin.ru/api/v1/paste/get/unrelated/?vk_id="+s.id).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){z(null),m(e)}));case 2:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function T(e){fetch("https://lpjakewolfskin.ru/api/v1/paste/relate/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a.id,vk_id:s.id,mark:e})}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(){v(Object(x.jsx)(h.o,{onClose:function(){return v(null)},children:"\u041f\u0430\u0441\u0442\u0430 \u043e\u0446\u0435\u043d\u0435\u043d\u0430"}))}))}return Object(c.useEffect)((function(){E()}),[]),Object(x.jsx)(h.p,{activePanel:t,popout:S,children:Object(x.jsxs)(h.k,{id:t,children:[Object(x.jsx)(h.l,{children:"\u041f\u0410\u0421\u0422\u0415\u0420"}),a&&Object(x.jsxs)(h.i,{header:Object(x.jsxs)(h.j,{mode:"secondary",children:["\u0414\u0430\u043d\u043d\u0443\u044e \u043f\u0430\u0441\u0442\u0443 \u043e\u0446\u0435\u043d\u0438\u043b\u0438 ",a.cnt," \u0440\u0430\u0437, \u0440\u0435\u0439\u0442\u0438\u043d\u0433 - ",a.rating]}),children:[Object(x.jsx)(h.g,{children:Object(x.jsx)(h.e,{size:"l",mode:"shadow",style:{marginBottom:"1rem"},children:Object(x.jsx)(h.g,{style:{padding:".5rem"},children:Object(x.jsx)("p",{children:a.clear_text})})})}),Object(x.jsxs)(h.i,{header:Object(x.jsx)(h.j,{mode:"secondary",children:"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u043f\u0430\u0441\u0442\u0443"}),children:[Object(x.jsxs)(h.g,{style:{display:"flex"},children:[Object(x.jsxs)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"destructive",onClick:function(){T(1)},children:["1 ",Object(x.jsx)(p.a,{})]}),Object(x.jsxs)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"destructive",onClick:function(){T(2)},children:["2 ",Object(x.jsx)(p.a,{})]}),Object(x.jsxs)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"secondary",onClick:function(){T(3)},children:["3 ",Object(x.jsx)(p.a,{})]}),Object(x.jsxs)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"commerce",onClick:function(){T(4)},children:["4 ",Object(x.jsx)(p.a,{})]}),Object(x.jsxs)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"commerce",onClick:function(){T(5)},children:["5 ",Object(x.jsx)(p.a,{})]})]}),Object(x.jsx)(h.g,{children:Object(x.jsx)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"primary",onClick:function(){o.a.send("VKWebAppShare",{link:a.link})},before:Object(x.jsx)(u.a,{}),children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"})}),Object(x.jsx)(h.g,{style:{paddingBottom:"9rem"},children:Object(x.jsx)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"primary",onClick:n,"data-to":"top",before:Object(x.jsx)(O.a,{}),children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0422\u041e\u041f"})})]}),Object(x.jsx)(h.h,{filled:!0,vertical:"bottom",children:Object(x.jsx)(h.i,{header:Object(x.jsx)(h.j,{mode:"secondary",children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0430\u0441\u0442\u0443"}),children:Object(x.jsxs)(h.g,{style:{display:"flex"},children:[Object(x.jsx)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"secondary",onClick:function(){z(Object(x.jsx)(h.n,{})),fetch("https://lpjakewolfskin.ru/api/v1/paste/get/rand/").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){z(null),m(e)}))},before:Object(x.jsx)(b.a,{}),children:"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u0430\u044f \u043f\u0430\u0441\u0442\u0430"}),Object(x.jsx)(h.d,{stretched:!0,size:"l",mode:"secondary",onClick:function(){E()},before:Object(x.jsx)(f.a,{}),children:"\u041d\u0435\u043e\u0446\u0435\u043d\u0435\u043d\u043d\u0430\u044f \u043f\u0430\u0441\u0442\u0430"})]})})})]}),y]})})},g=(n(126),function(e){var t=Object(c.useState)([]),n=Object(d.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),o=Object(d.a)(i,2),a=o[0],j=o[1],l=Object(c.useState)(null),u=Object(d.a)(l,2),b=u[0],f=u[1],O=Object(c.useState)(null),p=Object(d.a)(O,2),m=p[0],g=p[1];return Object(c.useEffect)((function(){g(Object(x.jsx)(h.n,{})),fetch("https://lpjakewolfskin.ru/api/v1/paste/get/top/").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){g(null),r(e)})),fetch("https://lpjakewolfskin.ru/api/v1/member/get/top/").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){g(null),j(e)})),g(Object(x.jsx)(h.n,{})),fetch("https://lpjakewolfskin.ru/api/v1/member/get_vk/"+e.fetchedUser.id).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){g(null),f(e)}))}),[]),Object(x.jsx)(h.p,{activePanel:e.id,popout:m,children:Object(x.jsxs)(h.k,{id:e.id,children:[Object(x.jsx)(h.l,{left:Object(x.jsx)(h.m,{onClick:e.go,"data-to":"home"}),children:"\u0422\u041e\u041f"}),Object(x.jsx)(h.i,{header:Object(x.jsx)(h.j,{mode:"secondary",children:"\u042d\u0442\u043e \u0442\u044b"}),children:Object(x.jsx)(h.f,{before:e.fetchedUser.photo_200?Object(x.jsx)(h.c,{src:e.fetchedUser.photo_200}):null,description:b?"\u0412\u0441\u0435\u0433\u043e \u043e\u0446\u0435\u043d\u043e\u043a: "+b.cnt+", \u0441\u0440\u0435\u0434\u043d\u044f\u044f: "+b.avg:"",children:"".concat(e.fetchedUser.first_name," ").concat(e.fetchedUser.last_name)})}),Object(x.jsx)(h.i,{header:Object(x.jsx)(h.j,{mode:"secondary",children:"\u0422\u041e\u041f \u043f\u0430\u0441\u0442"}),children:Object(x.jsx)(h.g,{children:s.map((function(e,t){return Object(x.jsx)(h.f,{disabled:!0,style:{marginBottom:".5rem"},description:"\u0412\u0441\u0435\u0433\u043e \u043e\u0446\u0435\u043d\u043e\u043a: "+e.cnt+", \u0440\u0435\u0439\u0442\u0438\u043d\u0433: "+e.rating,before:Object(x.jsx)(h.f,{disabled:!0,children:t+1}),children:e.anno},e.id)}))})}),Object(x.jsx)(h.i,{header:Object(x.jsx)(h.j,{mode:"secondary",children:"\u0422\u041e\u041f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"}),children:Object(x.jsx)(h.g,{children:a.map((function(e,t){return Object(x.jsx)(h.f,{disabled:!0,style:{marginBottom:".5rem"},description:"\u0412\u0441\u0435\u0433\u043e \u043e\u0446\u0435\u043d\u043e\u043a: "+e.cnt+", \u0441\u0440\u0435\u0434\u043d\u044f\u044f: "+e.avg,before:Object(x.jsx)(h.f,{disabled:!0,children:t+1}),children:e.name},e.id)}))})})]})})}),k=function(){var e=Object(c.useState)("home"),t=Object(d.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(null),i=Object(d.a)(r,2),a=i[0],u=i[1],b=Object(c.useState)(Object(x.jsx)(h.n,{size:"large"})),f=Object(d.a)(b,2),O=f[0],p=f[1];Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,u(t),p(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if("VKWebAppUpdateConfig"===n){var s=document.createAttribute("scheme");s.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var k=function(e){s(e.currentTarget.dataset.to)};return Object(x.jsx)(h.a,{children:Object(x.jsx)(h.b,{children:Object(x.jsxs)(h.p,{activePanel:n,popout:O,children:[a&&Object(x.jsx)(m,{id:"home",fetchedUser:a,go:k}),a&&Object(x.jsx)(g,{id:"top",fetchedUser:a,go:k})]})})})};n(127);o.a.send("VKWebAppInit"),r.a.render(Object(x.jsx)(k,{}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.f50ef94d.chunk.js.map