(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(22),s=n.n(r),i=n(20),o=n.n(i),a=n(21),j=n.n(a),l=n(23),d=n(12),h=n(5),u=(n(122),n(128)),b=n(130),f=n(131),O=n(129),m=n(127),p=n(2),x=function(e){var t=e.id,n=e.go,r=e.fetchedUser,s=e.pastePreloaded,i=Object(c.useState)(null),a=Object(d.a)(i,2),x=a[0],g=a[1],k=Object(c.useState)(null),y=Object(d.a)(k,2),v=y[0],w=y[1],C=Object(c.useState)(null),S=Object(d.a)(C,2),E=S[0],T=S[1];function _(){return z.apply(this,arguments)}function z(){return z=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(Object(p.jsx)(h.n,{})),fetch("https://lpjakewolfskin.ru/api/v1/paste/get/unrelated/?vk_id="+r.id).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){T(null),g(e)}));case 2:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}function U(e){fetch("https://lpjakewolfskin.ru/api/v1/paste/relate/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:x.id,vk_id:r.id,mark:e})}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(){w(Object(p.jsx)(h.o,{onClose:function(){return w(null)},children:"\u041f\u0430\u0441\u0442\u0430 \u043e\u0446\u0435\u043d\u0435\u043d\u0430"}))}))}return Object(c.useEffect)((function(){var e;s?(e=s,T(Object(p.jsx)(h.n,{})),fetch("https://lpjakewolfskin.ru/api/v1/paste/get/"+e+"/").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){T(null),g(e)}))):_()}),[]),Object(p.jsx)(h.r,{activePanel:t,popout:E,children:Object(p.jsxs)(h.k,{id:t,children:[Object(p.jsx)(h.l,{children:"\u041f\u0410\u0421\u0422\u0415\u0420"}),x&&Object(p.jsxs)(h.i,{header:Object(p.jsxs)(h.j,{mode:"secondary",children:["\u0414\u0430\u043d\u043d\u0443\u044e \u043f\u0430\u0441\u0442\u0443 \u043e\u0446\u0435\u043d\u0438\u043b\u0438 ",x.cnt," \u0440\u0430\u0437, \u0440\u0435\u0439\u0442\u0438\u043d\u0433 - ",x.rating]}),children:[Object(p.jsx)(h.g,{children:Object(p.jsx)(h.e,{size:"l",mode:"shadow",style:{marginBottom:"1rem"},children:Object(p.jsx)(h.g,{style:{padding:".5rem"},children:Object(p.jsx)("p",{children:x.clear_text})})})}),Object(p.jsxs)(h.i,{header:Object(p.jsx)(h.j,{mode:"secondary",children:"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u043f\u0430\u0441\u0442\u0443"}),children:[Object(p.jsxs)(h.g,{style:{display:"flex"},children:[Object(p.jsxs)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"destructive",onClick:function(){U(1)},children:["1 ",Object(p.jsx)(m.a,{})]}),Object(p.jsxs)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"destructive",onClick:function(){U(2)},children:["2 ",Object(p.jsx)(m.a,{})]}),Object(p.jsxs)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"secondary",onClick:function(){U(3)},children:["3 ",Object(p.jsx)(m.a,{})]}),Object(p.jsxs)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"commerce",onClick:function(){U(4)},children:["4 ",Object(p.jsx)(m.a,{})]}),Object(p.jsxs)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"commerce",onClick:function(){U(5)},children:["5 ",Object(p.jsx)(m.a,{})]})]}),Object(p.jsx)(h.g,{children:Object(p.jsx)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"primary",onClick:function(){o.a.send("VKWebAppShare",{link:x.link})},before:Object(p.jsx)(u.a,{}),children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"})}),Object(p.jsx)(h.g,{style:{paddingBottom:"9rem"},children:Object(p.jsx)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"primary",onClick:n,"data-to":"top",before:Object(p.jsx)(O.a,{}),children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0422\u041e\u041f"})})]}),Object(p.jsx)(h.h,{filled:!0,vertical:"bottom",children:Object(p.jsx)(h.i,{header:Object(p.jsx)(h.j,{mode:"secondary",children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0430\u0441\u0442\u0443"}),children:Object(p.jsxs)(h.g,{style:{display:"flex"},children:[Object(p.jsx)(h.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"secondary",onClick:function(){T(Object(p.jsx)(h.n,{})),fetch("https://lpjakewolfskin.ru/api/v1/paste/get/rand/").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){T(null),g(e)}))},before:Object(p.jsx)(b.a,{}),children:"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u0430\u044f \u043f\u0430\u0441\u0442\u0430"}),Object(p.jsx)(h.d,{stretched:!0,size:"l",mode:"secondary",onClick:function(){_()},before:Object(p.jsx)(f.a,{}),children:"\u041d\u0435\u043e\u0446\u0435\u043d\u0435\u043d\u043d\u0430\u044f \u043f\u0430\u0441\u0442\u0430"})]})})})]}),v]})})},g=(n(124),function(e){var t=Object(c.useState)([]),n=Object(d.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)([]),o=Object(d.a)(i,2),a=o[0],j=o[1],l=Object(c.useState)(null),u=Object(d.a)(l,2),b=u[0],f=u[1],O=Object(c.useState)(null),m=Object(d.a)(O,2),x=m[0],g=m[1],k=Object(c.useState)("paste"),y=Object(d.a)(k,2),v=y[0],w=y[1];return Object(c.useEffect)((function(){g(Object(p.jsx)(h.n,{})),fetch("https://lpjakewolfskin.ru/api/v1/paste/get/top/").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){g(null),s(e)})),fetch("https://lpjakewolfskin.ru/api/v1/member/get/top/").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){g(null),j(e)})),g(Object(p.jsx)(h.n,{})),fetch("https://lpjakewolfskin.ru/api/v1/member/get_vk/"+e.fetchedUser.id).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){g(null),f(e)}))}),[]),Object(p.jsx)(h.r,{activePanel:e.id,popout:x,children:Object(p.jsxs)(h.k,{id:e.id,children:[Object(p.jsx)(h.l,{left:Object(p.jsx)(h.m,{onClick:e.go,"data-to":"home"}),children:"\u0422\u041e\u041f"}),Object(p.jsxs)(h.p,{children:[Object(p.jsx)(h.q,{onClick:function(){return w("paste")},selected:"paste"===v,children:"\u041f\u0430\u0441\u0442\u044b"}),Object(p.jsx)(h.q,{onClick:function(){return w("member")},selected:"member"===v,children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})]}),Object(p.jsx)(h.i,{header:Object(p.jsx)(h.j,{mode:"secondary",children:"\u042d\u0442\u043e \u0442\u044b"}),children:Object(p.jsx)(h.f,{onClick:e.go,"data-to":"marks","data-member":b?b.vk_id:"",before:e.fetchedUser.photo_200?Object(p.jsx)(h.c,{src:e.fetchedUser.photo_200}):null,description:b?"\u0412\u0441\u0435\u0433\u043e \u043e\u0446\u0435\u043d\u043e\u043a: "+b.cnt+", \u0441\u0440\u0435\u0434\u043d\u044f\u044f: "+b.avg:"",children:"".concat(e.fetchedUser.first_name," ").concat(e.fetchedUser.last_name)})}),"paste"===v&&Object(p.jsx)(h.i,{header:Object(p.jsx)(h.j,{mode:"secondary",children:"\u0422\u041e\u041f \u043f\u0430\u0441\u0442"}),children:Object(p.jsx)(h.g,{children:r.map((function(t,n){return Object(p.jsx)(h.f,{onClick:e.go,"data-to":"home","data-payload":t.id,style:{marginBottom:".5rem"},description:"\u0412\u0441\u0435\u0433\u043e \u043e\u0446\u0435\u043d\u043e\u043a: "+t.cnt+", \u0440\u0435\u0439\u0442\u0438\u043d\u0433: "+t.rating,before:Object(p.jsx)(h.f,{disabled:!0,children:n+1}),children:t.anno},t.id)}))})}),"member"===v&&Object(p.jsx)(h.i,{header:Object(p.jsx)(h.j,{mode:"secondary",children:"\u0422\u041e\u041f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"}),children:Object(p.jsx)(h.g,{children:a.map((function(t,n){return Object(p.jsx)(h.f,{onClick:e.go,"data-to":"marks","data-member":t.vk_id,style:{marginBottom:".5rem"},description:"\u0412\u0441\u0435\u0433\u043e \u043e\u0446\u0435\u043d\u043e\u043a: "+t.cnt+", \u0441\u0440\u0435\u0434\u043d\u044f\u044f: "+t.avg,before:Object(p.jsx)(h.f,{disabled:!0,children:n+1}),children:t.name},t.id)}))})})]})})}),k=function(e){var t=Object(c.useState)([]),n=Object(d.a)(t,2),r=(n[0],n[1],Object(c.useState)(null)),s=Object(d.a)(r,2),i=s[0],o=s[1],a=Object(c.useState)(null),j=Object(d.a)(a,2),l=j[0],u=j[1],b={month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return Object(c.useEffect)((function(){u(Object(p.jsx)(h.n,{})),fetch("https://lpjakewolfskin.ru/api/v1/member/get_vk/"+e.member).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){u(null),o(e)}))}),[]),Object(p.jsx)(h.r,{activePanel:e.id,popout:l,children:Object(p.jsxs)(h.k,{id:e.id,children:[Object(p.jsx)(h.l,{left:Object(p.jsx)(h.m,{onClick:e.go,"data-to":"top"}),children:"\u041e\u0446\u0435\u043d\u043a\u0438"}),Object(p.jsx)(h.i,{header:Object(p.jsx)(h.j,{mode:"secondary",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),children:Object(p.jsx)(h.f,{description:i?"\u0412\u0441\u0435\u0433\u043e \u043e\u0446\u0435\u043d\u043e\u043a: "+i.cnt+", \u0441\u0440\u0435\u0434\u043d\u044f\u044f: "+i.avg:"",children:i?i.name:""})}),Object(p.jsx)(h.i,{header:Object(p.jsx)(h.j,{mode:"secondary",children:"\u041f\u0430\u0441\u0442\u044b"}),children:Object(p.jsx)(h.g,{children:i&&i.marks.map((function(t,n){var c=new Date(t.created_at);return Object(p.jsx)(h.f,{onClick:e.go,"data-to":"home","data-payload":t.paste.id,style:{marginBottom:".5rem"},description:c.toLocaleString("ru",b),before:Object(p.jsxs)(h.f,{disabled:!0,style:{alignItems:"center",textAlign:"center"},children:[t.mark," ",Object(p.jsx)(m.a,{})]}),children:t.paste.anno},t.paste.id)}))})})]})})},y=function(){var e=Object(c.useState)("home"),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),i=Object(d.a)(s,2),a=i[0],u=i[1],b=Object(c.useState)(null),f=Object(d.a)(b,2),O=f[0],m=f[1],y=Object(c.useState)(null),v=Object(d.a)(y,2),w=v[0],C=v[1],S=Object(c.useState)(Object(p.jsx)(h.n,{size:"large"})),E=Object(d.a)(S,2),T=E[0],_=E[1];Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,u(t),_(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);var z=function(e){r(e.currentTarget.dataset.to),m(e.currentTarget.dataset.payload),C(e.currentTarget.dataset.member)};return Object(p.jsx)(h.a,{children:Object(p.jsx)(h.b,{children:Object(p.jsxs)(h.r,{activePanel:n,popout:T,children:[a&&Object(p.jsx)(x,{id:"home",fetchedUser:a,go:z,pastePreloaded:O}),a&&Object(p.jsx)(g,{id:"top",fetchedUser:a,go:z}),Object(p.jsx)(k,{id:"marks",go:z,member:w})]})})})};n(125);o.a.send("VKWebAppInit"),s.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.a25aa8c3.chunk.js.map