(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{120:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(24),i=n.n(r),o=n(14),a=n.n(o),l=n(19),j=n.n(l),d=n(22),h=n(11),u=n(2),b=(n(119),n(128)),f=n(133),p=n(126),O=n(132),x=n(129),m=n(130),g=n(124),k=n(131),y=(n(120),n(1)),w=function(e){var t=Object(c.useState)([]),n=Object(h.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),o=Object(h.a)(i,2),a=o[0],l=o[1],j=Object(c.useState)(null),d=Object(h.a)(j,2),b=d[0],f=d[1],p=Object(c.useState)(null),O=Object(h.a)(p,2),x=O[0],m=O[1],g=Object(c.useState)("paste"),k=Object(h.a)(g,2),w=k[0],v=k[1];return Object(c.useEffect)((function(){m(Object(y.jsx)(u.r,{})),fetch("https://lpjakewolfskin.ru/api/v1/paste/get/top/").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){m(null),r(e)})),fetch("https://lpjakewolfskin.ru/api/v1/member/get/top/").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){m(null),l(e)})),m(Object(y.jsx)(u.r,{})),fetch("https://lpjakewolfskin.ru/api/v1/member/get_vk/"+e.fetchedUser.id).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){m(null),f(e)}))}),[]),Object(y.jsx)(u.x,{activePanel:e.id,popout:x,children:Object(y.jsxs)(u.o,{id:e.id,children:[Object(y.jsx)(u.p,{children:"\u0422\u041e\u041f"}),Object(y.jsxs)(u.v,{children:[Object(y.jsx)(u.w,{onClick:function(){return v("paste")},selected:"paste"===w,children:"\u041f\u0430\u0441\u0442\u044b"}),Object(y.jsx)(u.w,{onClick:function(){return v("member")},selected:"member"===w,children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})]}),Object(y.jsx)(u.l,{header:Object(y.jsx)(u.m,{mode:"secondary",children:"\u042d\u0442\u043e \u0442\u044b"}),children:Object(y.jsx)(u.f,{onClick:e.go,"data-to":"marks","data-member":b?b.vk_id:"",before:e.fetchedUser.photo_200?Object(y.jsx)(u.c,{src:e.fetchedUser.photo_200}):null,description:b?"\u0412\u0441\u0435\u0433\u043e \u043e\u0446\u0435\u043d\u043e\u043a: "+b.cnt+", \u0441\u0440\u0435\u0434\u043d\u044f\u044f: "+b.avg:"",children:"".concat(e.fetchedUser.first_name," ").concat(e.fetchedUser.last_name)})}),"paste"===w&&Object(y.jsx)(u.l,{header:Object(y.jsx)(u.m,{mode:"secondary",children:"\u0422\u041e\u041f \u043f\u0430\u0441\u0442"}),children:Object(y.jsx)(u.h,{children:s.map((function(t,n){return Object(y.jsx)(u.f,{onClick:e.gopanel,"data-story":"paste","data-payload":t.id,style:{marginBottom:".5rem"},description:"\u0412\u0441\u0435\u0433\u043e \u043e\u0446\u0435\u043d\u043e\u043a: "+t.cnt+", \u0440\u0435\u0439\u0442\u0438\u043d\u0433: "+t.rating,before:Object(y.jsx)(u.f,{disabled:!0,children:n+1}),children:t.anno},t.id)}))})}),"member"===w&&Object(y.jsx)(u.l,{header:Object(y.jsx)(u.m,{mode:"secondary",children:"\u0422\u041e\u041f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"}),children:Object(y.jsx)(u.h,{children:a.map((function(t,n){return Object(y.jsx)(u.f,{onClick:e.go,"data-to":"marks","data-member":t.vk_id,style:{marginBottom:".5rem"},description:"\u0412\u0441\u0435\u0433\u043e \u043e\u0446\u0435\u043d\u043e\u043a: "+t.cnt+", \u0441\u0440\u0435\u0434\u043d\u044f\u044f: "+t.avg,before:Object(y.jsx)(u.f,{disabled:!0,children:n+1}),children:t.name},t.id)}))})})]})})},v=n(30),C=n(125),_=n(127),S=function(e){var t=Object(c.useState)(null),n=Object(h.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(null),l=Object(h.a)(o,2),f=l[0],O=l[1],x=Object(c.useState)(null),m=Object(h.a)(x,2),k=(m[0],m[1]),w=Object(c.useState)(null),S=Object(h.a)(w,2),T=S[0],E=S[1],z=Object(c.useState)(null),U=Object(h.a)(z,2),A=U[0],P=U[1],I=Object(c.useState)("tags"),R=Object(h.a)(I,2),B=R[0],K=R[1],V=Object(c.useState)([]),W=Object(h.a)(V,2),J=W[0],N=W[1],q=s.a.useState([]),D=Object(h.a)(q,2),G=D[0],L=D[1],M=s.a.useState([]),F=Object(h.a)(M,2),H=F[0],Q=F[1];function X(){return Y.apply(this,arguments)}function Y(){return Y=Object(d.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(Object(y.jsx)(u.r,{})),fetch("https://lpjakewolfskin.ru/api/v1/paste/get/untaged/?vk_id="+e.fetchedUser.id).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){P(null),i(e),L([]),window.scrollTo(0,0)}));case 2:case"end":return t.stop()}}),t)}))),Y.apply(this,arguments)}function Z(){return $.apply(this,arguments)}function $(){return $=Object(d.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(Object(y.jsx)(u.r,{})),fetch("https://lpjakewolfskin.ru/api/v1/wall/suggests/?vk_id="+e.fetchedUser.id).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){P(null),O(e),Q([])}));case 2:case"end":return t.stop()}}),t)}))),$.apply(this,arguments)}return Object(c.useEffect)((function(){P(Object(y.jsx)(u.r,{})),fetch("https://lpjakewolfskin.ru/api/v1/member/get_vk/"+e.fetchedUser.id).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){P(null),k(e)})),P(Object(y.jsx)(u.r,{})),fetch("https://lpjakewolfskin.ru/api/v1/tag/all/").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){var t=[];e.forEach((function(e){t.push({value:e.id,label:e.name})})),P(null),N(t)})),X(),Z()}),[]),Object(y.jsx)(u.x,{activePanel:e.id,popout:A,children:Object(y.jsxs)(u.o,{id:e.id,children:[Object(y.jsx)(u.p,{children:"\u041c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u044f"}),Object(y.jsxs)(u.v,{children:[Object(y.jsx)(u.w,{onClick:function(){return K("tags")},selected:"tags"===B,children:"\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u043f\u0430\u0441\u0442"}),Object(y.jsx)(u.w,{onClick:function(){return K("suggests")},selected:"suggests"===B,children:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u043a\u0430"})]}),"tags"===B&&Object(y.jsx)(u.l,{header:Object(y.jsx)(u.m,{mode:"secondary",children:"\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u043f\u0430\u0441\u0442"}),children:Object(y.jsx)(u.h,{children:r&&Object(y.jsxs)(u.l,{children:[Object(y.jsxs)(u.h,{style:{color:"grey",fontSize:10,textAlign:"center"},children:[Object(y.jsxs)("p",{children:["ID: ",r.id]}),Object(y.jsxs)("p",{children:["\u041e\u0446\u0435\u043d\u043e\u043a: ",r.cnt]}),Object(y.jsxs)("p",{children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",r.rating]}),Object(y.jsxs)("p",{children:["\u041f\u0440\u0438\u0441\u043b\u0430\u043b: ",r.sender?r.sender.name:"\u0410\u0432\u0442\u043e\u043f\u0430\u0440\u0441\u0438\u043d\u0433"]}),Object(y.jsxs)("p",{children:["\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0430: ",r.link_self?r.link_self:"\u041d\u0435\u0442"]}),Object(y.jsxs)("p",{children:["\u041d\u0435\u0440\u0430\u0437\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0445 \u043f\u0430\u0441\u0442: ",r.untaged?r.untaged:"\u041d\u0435\u0442"]})]}),Object(y.jsx)(u.h,{children:Object(y.jsx)(u.e,{size:"l",mode:"shadow",style:{marginBottom:"1rem"},children:Object(y.jsxs)(u.h,{style:{padding:".5rem",margin:"auto"},children:[Object(y.jsx)("p",{children:r.text}),r.pic&&Object(y.jsx)("img",{style:{width:"100%",height:"100%"},src:r.pic_link})]})})}),Object(y.jsx)(u.h,{style:{margin:"auto"}}),Object(y.jsxs)(u.l,{header:Object(y.jsx)(u.m,{mode:"secondary",children:"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u043f\u0430\u0441\u0442\u0443"}),children:[Object(y.jsx)(u.k,{top:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u0433\u0438 (\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 2-\u0445)",children:J.map((function(e,t){return Object(y.jsx)(u.g,{id:e.value,checked:G.includes(e.value),onChange:function(e){G.includes(parseInt(e.target.id))?L(G.filter((function(t,n){return t!=parseInt(e.target.id)}))):L([].concat(Object(v.a)(G),[parseInt(e.target.id)]))},children:e.label},e.value)}))}),Object(y.jsxs)(u.h,{style:{display:"flex"},children:[Object(y.jsx)(u.d,{stretched:!0,size:"s",style:{marginRight:".1rem"},mode:"negative",onClick:function(){fetch("https://lpjakewolfskin.ru/api/v1/paste/delete/",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:r.id,vk_id:e.fetchedUser.id})}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(){E(Object(y.jsx)(u.s,{onClose:function(){return E(null)},after:Object(y.jsx)(u.n,{onClick:function(){return E(null)},children:Object(y.jsx)(g.a,{})}),children:"\u041f\u0430\u0441\u0442\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430"})),X()}))},before:Object(y.jsx)(C.a,{}),children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0430\u0441\u0442\u0443"}),Object(y.jsx)(u.d,{stretched:!0,size:"s",style:{marginRight:".1rem"},mode:"secondary",onClick:function(){X()},before:Object(y.jsx)(p.a,{}),children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u0443\u044e \u043f\u0430\u0441\u0442\u0443"}),Object(y.jsx)(u.d,{stretched:!0,size:"s",disabled:0==G.length,mode:"positive",onClick:function(){fetch("https://lpjakewolfskin.ru/api/v1/paste/tag/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:r.id,vk_id:e.fetchedUser.id,tags_new:G})}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(){E(Object(y.jsx)(u.s,{onClose:function(){return E(null)},after:Object(y.jsx)(u.n,{onClick:function(){return E(null)},children:Object(y.jsx)(g.a,{})}),children:"\u041f\u0430\u0441\u0442\u0430 \u0440\u0430\u0437\u043c\u0435\u0447\u0435\u043d\u0430"})),X()}))},before:Object(y.jsx)(_.a,{}),children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u0433\u0438"})]}),Object(y.jsx)(u.h,{style:{paddingBottom:"9rem"},children:Object(y.jsx)(u.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"primary",onClick:function(){a.a.send("VKWebAppShare",{link:"vk.com/app7983387#"+r.id})},before:Object(y.jsx)(b.a,{}),children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"})})]})]})})}),"suggests"===B&&Object(y.jsx)(u.l,{header:Object(y.jsx)(u.m,{mode:"secondary",children:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u043a\u0430"}),children:Object(y.jsxs)(u.h,{children:[f&&0!=f.count&&Object(y.jsxs)(u.l,{children:[Object(y.jsxs)(u.h,{style:{color:"grey",fontSize:10,textAlign:"center"},children:[Object(y.jsxs)("p",{children:["\u041f\u0440\u0438\u0441\u043b\u0430\u043b: ",f.member.name]}),Object(y.jsxs)("p",{children:["\u041f\u0430\u0441\u0442 \u0432 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u043a\u0435: ",f.count]})]}),Object(y.jsx)(u.h,{children:Object(y.jsx)(u.e,{size:"l",mode:"shadow",style:{marginBottom:"1rem"},children:Object(y.jsxs)(u.h,{style:{padding:".5rem",margin:"auto"},children:[Object(y.jsx)("p",{children:f.item.text}),f.photo&&Object(y.jsx)("img",{style:{width:"100%",height:"100%"},src:f.photo})]})})}),Object(y.jsx)(u.h,{style:{margin:"auto"}}),Object(y.jsxs)(u.l,{header:Object(y.jsx)(u.m,{mode:"secondary",children:"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u043f\u0430\u0441\u0442\u0443"}),children:[Object(y.jsx)(u.k,{top:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u0433\u0438 (\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 2-\u0445)",children:J.map((function(e,t){return Object(y.jsx)(u.g,{id:e.value,checked:H.includes(e.value),onChange:function(e){H.includes(parseInt(e.target.id))?Q(H.filter((function(t,n){return t!=parseInt(e.target.id)}))):Q([].concat(Object(v.a)(H),[parseInt(e.target.id)]))},children:e.label},e.value)}))}),Object(y.jsxs)(u.h,{style:{display:"flex"},children:[Object(y.jsx)(u.d,{stretched:!0,size:"s",style:{marginRight:".1rem"},mode:"negative",onClick:function(){fetch("https://lpjakewolfskin.ru/api/v1/wall/suggests/deny/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:f.item.id,vk_id:e.fetchedUser.id})}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(){E(Object(y.jsx)(u.s,{onClose:function(){return E(null)},after:Object(y.jsx)(u.n,{onClick:function(){return E(null)},children:Object(y.jsx)(g.a,{})}),children:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430"})),Z()}))},before:Object(y.jsx)(C.a,{}),children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(y.jsx)(u.d,{stretched:!0,size:"s",disabled:0==H.length,mode:"positive",onClick:function(){fetch("https://lpjakewolfskin.ru/api/v1/wall/suggests/post/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:f.item.id,vk_id:e.fetchedUser.id,tags:H})}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(){E(Object(y.jsx)(u.s,{onClose:function(){return E(null)},after:Object(y.jsx)(u.n,{onClick:function(){return E(null)},children:Object(y.jsx)(g.a,{})}),children:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u043a\u0430 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0430"})),Z()}))},before:Object(y.jsx)(_.a,{}),children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})]})]}),f&&0==f.count&&Object(y.jsx)(u.h,{children:"\u041d\u0435\u0442\u0443 \u043d\u0438\u0445\u0443\u044f"})]})}),T]})})},T=function(e){e.id;var t=e.go,n=e.fetchedUser,r=e.pastePreloaded,i=Object(c.useState)(null),o=Object(h.a)(i,2),l=o[0],v=o[1],C=Object(c.useState)(null),_=Object(h.a)(C,2),T=_[0],E=_[1],z=Object(c.useState)(null),U=Object(h.a)(z,2),A=U[0],P=U[1],I=Object(c.useState)(null),R=Object(h.a)(I,2),B=R[0],K=R[1],V=s.a.useState("paste"),W=Object(h.a)(V,2),J=W[0],N=W[1],q=function(e){e.currentTarget.dataset.payload&&L(e.currentTarget.dataset.payload),N(e.currentTarget.dataset.story)};function D(){return G.apply(this,arguments)}function G(){return G=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:K(Object(y.jsx)(u.r,{})),fetch("https://lpjakewolfskin.ru/api/v1/paste/get/unrelated/?vk_id="+n.id).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){K(null),v(e)}));case 2:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}function L(e){K(Object(y.jsx)(u.r,{})),fetch("https://lpjakewolfskin.ru/api/v1/paste/get/"+e+"/").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){K(null),v(e)}))}function M(e){fetch("https://lpjakewolfskin.ru/api/v1/paste/relate/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:l.id,vk_id:n.id,mark:e})}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(){P(Object(y.jsx)(u.s,{onClose:function(){return P(null)},after:Object(y.jsx)(u.n,{onClick:function(){return P(null)},children:Object(y.jsx)(g.a,{})}),children:"\u041f\u0430\u0441\u0442\u0430 \u043e\u0446\u0435\u043d\u0435\u043d\u0430"}))}))}return Object(c.useEffect)((function(){r?L(r):D(),K(Object(y.jsx)(u.r,{})),fetch("https://lpjakewolfskin.ru/api/v1/member/get_vk/"+n.id).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){K(null),E(e)}))}),[]),Object(y.jsxs)(u.i,{activeStory:J,tabbar:Object(y.jsxs)(u.t,{children:[Object(y.jsx)(u.u,{onClick:q,selected:"paste"===J,"data-story":"paste",text:"\u041f\u0430\u0441\u0442\u044b",children:Object(y.jsx)(x.a,{})}),Object(y.jsx)(u.u,{onClick:q,selected:"top"===J,"data-story":"top",text:"\u0422\u041e\u041f",children:Object(y.jsx)(m.a,{})}),T&&T.is_moder&&Object(y.jsx)(u.u,{onClick:q,selected:"moderator"===J,"data-story":"moderator",text:"\u041c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u044f",children:Object(y.jsx)(k.a,{})})]}),children:[Object(y.jsx)(u.x,{id:"paste",activePanel:"paste",popout:B,children:Object(y.jsxs)(u.o,{id:"paste",children:[Object(y.jsx)(u.p,{children:"\u041f\u0410\u0421\u0422\u0415\u0420"}),l&&Object(y.jsxs)(u.l,{header:Object(y.jsxs)(u.m,{mode:"secondary",children:["\u0414\u0430\u043d\u043d\u0443\u044e \u043f\u0430\u0441\u0442\u0443 \u043e\u0446\u0435\u043d\u0438\u043b\u0438 ",l.cnt," \u0440\u0430\u0437, \u0440\u0435\u0439\u0442\u0438\u043d\u0433 - ",l.rating," ",l.sender?"\n, \u043f\u0440\u0438\u0441\u043b\u0430\u043b "+l.sender.name:""]}),children:[Object(y.jsx)(u.h,{children:l.tags.length?l.tags.map((function(e,t){return Object(y.jsxs)(u.d,{size:"s",mode:"commerce",style:{margin:".1rem"},children:["#",e.name]})})):Object(y.jsx)(u.d,{size:"s",mode:"commerce",style:{margin:".1rem"},children:"#\u0420\u0430\u043d\u0434\u043e\u043c"})}),Object(y.jsx)(u.h,{children:Object(y.jsx)(u.e,{size:"l",mode:"shadow",style:{marginBottom:"1rem"},children:Object(y.jsxs)(u.h,{style:{padding:".5rem",margin:"auto"},children:[Object(y.jsx)("p",{children:l.clear_text}),l.pic_self?Object(y.jsx)("img",{style:{width:"100%",height:"100%"},src:l.pic_link_self,onClick:Object(d.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetAuthToken",{app_id:7983387,scope:"photos"});case 2:return t=e.sent,n=l.pic_self.split("_")[0].split("photo")[1],c=l.pic_self.split("_")[1].slice(0,-1),e.next=7,a.a.send("VKWebAppCallAPIMethod",{method:"photos.copy",request_id:"32test",params:{owner_id:n,photo_id:c,v:"5.131",access_token:t.access_token}});case 7:e.sent.error_type?P(Object(y.jsx)(u.s,{onClose:function(){return P(null)},after:Object(y.jsx)(u.n,{onClick:function(){return P(null)},children:Object(y.jsx)(g.a,{})}),children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"})):P(Object(y.jsx)(u.s,{onClose:function(){return P(null)},after:Object(y.jsx)(u.n,{onClick:function(){return P(null)},children:Object(y.jsx)(g.a,{})}),children:"\u041f\u0438\u043a\u0447\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435"}));case 9:case"end":return e.stop()}}),e)})))}):l.pic&&Object(y.jsx)("img",{style:{width:"100%",height:"100%"},src:l.pic_link,onClick:Object(d.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetAuthToken",{app_id:7983387,scope:"photos"});case 2:return t=e.sent,n=l.pic.split("_")[0].split("photo")[1],c=l.pic.split("_")[1].slice(0,-1),e.next=7,a.a.send("VKWebAppCallAPIMethod",{method:"photos.copy",request_id:"32test",params:{owner_id:n,photo_id:c,v:"5.131",access_token:t.access_token}});case 7:e.sent.error_type?P(Object(y.jsx)(u.s,{onClose:function(){return P(null)},after:Object(y.jsx)(u.n,{onClick:function(){return P(null)},children:Object(y.jsx)(g.a,{})}),children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"})):P(Object(y.jsx)(u.s,{onClose:function(){return P(null)},after:Object(y.jsx)(u.n,{onClick:function(){return P(null)},children:Object(y.jsx)(g.a,{})}),children:"\u041f\u0438\u043a\u0447\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435"}));case 9:case"end":return e.stop()}}),e)})))}),(l.pic||l.pic_self)&&Object(y.jsx)(u.h,{style:{textAlign:"center",color:"gray"},children:"\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u043f\u0438\u043a\u0447\u0443, \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0435 \u0432 \u0441\u0432\u043e\u0438 \u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043a\u0438"})]})})}),Object(y.jsx)(u.h,{style:{margin:"auto"}}),Object(y.jsxs)(u.l,{header:Object(y.jsx)(u.m,{mode:"secondary",children:"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u043f\u0430\u0441\u0442\u0443"}),children:[!l.related&&Object(y.jsxs)(u.h,{style:{display:"flex"},children:[Object(y.jsxs)(u.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"destructive",onClick:function(){M(1)},children:["1 ",Object(y.jsx)(O.a,{})]}),Object(y.jsxs)(u.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"destructive",onClick:function(){M(2)},children:["2 ",Object(y.jsx)(O.a,{})]}),Object(y.jsxs)(u.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"secondary",onClick:function(){M(3)},children:["3 ",Object(y.jsx)(O.a,{})]}),Object(y.jsxs)(u.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"commerce",onClick:function(){M(4)},children:["4 ",Object(y.jsx)(O.a,{})]}),Object(y.jsxs)(u.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"commerce",onClick:function(){M(5)},children:["5 ",Object(y.jsx)(O.a,{})]})]}),l.related&&Object(y.jsx)(u.h,{style:{textAlign:"center",color:"gray"},children:"\u0412\u044b \u0443\u0436\u0435 \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u043b\u0438 \u0434\u0430\u043d\u043d\u0443\u044e \u043f\u0430\u0441\u0442\u0443"}),Object(y.jsx)(u.h,{style:{paddingBottom:"9rem"},children:Object(y.jsx)(u.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"primary",onClick:function(){a.a.send("VKWebAppShare",{link:"vk.com/app7983387#"+l.id})},before:Object(y.jsx)(b.a,{}),children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"})})]}),Object(y.jsx)(u.j,{filled:!0,vertical:"bottom",children:Object(y.jsx)(u.l,{header:Object(y.jsx)(u.m,{mode:"secondary",children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0430\u0441\u0442\u0443"}),children:Object(y.jsxs)(u.h,{style:{display:"flex"},children:[Object(y.jsx)(u.d,{stretched:!0,size:"l",style:{marginRight:8},mode:"secondary",onClick:function(){K(Object(y.jsx)(u.r,{})),fetch("https://lpjakewolfskin.ru/api/v1/paste/get/rand/?vk_id="+n.id).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){K(null),v(e)}))},before:Object(y.jsx)(f.a,{}),children:"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u0430\u044f \u043f\u0430\u0441\u0442\u0430"}),Object(y.jsx)(u.d,{stretched:!0,size:"l",mode:"secondary",onClick:function(){D()},before:Object(y.jsx)(p.a,{}),children:"\u041d\u0435\u043e\u0446\u0435\u043d\u0435\u043d\u043d\u0430\u044f \u043f\u0430\u0441\u0442\u0430"})]})})})]}),A]})}),Object(y.jsx)(w,{id:"top",activePanel:"top",fetchedUser:n,go:t,gopanel:function(e){N(e.currentTarget.dataset.story),L(e.currentTarget.dataset.payload)}}),Object(y.jsx)(S,{id:"moderator",activePanel:"moderator",fetchedUser:n,go:t})]})},E=function(e){var t=Object(c.useState)([]),n=Object(h.a)(t,2),s=(n[0],n[1],Object(c.useState)(null)),r=Object(h.a)(s,2),i=r[0],o=r[1],a=Object(c.useState)(null),l=Object(h.a)(a,2),j=l[0],d=l[1],b={month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return Object(c.useEffect)((function(){d(Object(y.jsx)(u.r,{})),fetch("https://lpjakewolfskin.ru/api/v1/member/get_vk/"+e.member).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){console.log(e)})).then((function(e){d(null),o(e)}))}),[]),Object(y.jsx)(u.x,{activePanel:e.id,popout:j,children:Object(y.jsxs)(u.o,{id:e.id,children:[Object(y.jsx)(u.p,{left:Object(y.jsx)(u.q,{onClick:e.go,"data-to":"top"}),children:"\u041e\u0446\u0435\u043d\u043a\u0438"}),Object(y.jsx)(u.l,{header:Object(y.jsx)(u.m,{mode:"secondary",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),children:Object(y.jsx)(u.f,{description:i?"\u0412\u0441\u0435\u0433\u043e \u043e\u0446\u0435\u043d\u043e\u043a: "+i.cnt+", \u0441\u0440\u0435\u0434\u043d\u044f\u044f: "+i.avg:"",children:i?i.name:""})}),Object(y.jsx)(u.l,{header:Object(y.jsx)(u.m,{mode:"secondary",children:"\u041f\u0430\u0441\u0442\u044b"}),children:Object(y.jsx)(u.h,{children:i&&i.marks.map((function(t,n){var c=new Date(t.created_at);return Object(y.jsx)(u.f,{onClick:e.go,"data-to":"home","data-payload":t.paste.id,style:{marginBottom:".5rem"},description:c.toLocaleString("ru",b),before:Object(y.jsxs)(u.f,{disabled:!0,style:{alignItems:"center",textAlign:"center"},children:[t.mark," ",Object(y.jsx)(O.a,{})]}),children:t.paste.anno},t.paste.id)}))})})]})})},z=function(){var e=Object(c.useState)("home"),t=Object(h.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(null),i=Object(h.a)(r,2),o=i[0],l=i[1],b=Object(c.useState)(null),f=Object(h.a)(b,2),p=f[0],O=f[1],x=Object(c.useState)(null),m=Object(h.a)(x,2),g=m[0],k=m[1],v=Object(c.useState)(Object(y.jsx)(u.r,{size:"large"})),C=Object(h.a)(v,2),_=C[0],z=C[1],U=window.location.hash.replace("#","");U&&(window.location.hash="",O(U)),Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,l(t),z(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if("VKWebAppUpdateConfig"===n){var s=document.createAttribute("scheme");s.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var A=function(e){s(e.currentTarget.dataset.to),O(e.currentTarget.dataset.payload),k(e.currentTarget.dataset.member)};return Object(y.jsx)(u.a,{children:Object(y.jsx)(u.b,{children:Object(y.jsxs)(u.x,{activePanel:n,popout:_,children:[o&&Object(y.jsx)(T,{id:"home",fetchedUser:o,go:A,pastePreloaded:p}),o&&Object(y.jsx)(w,{id:"top",fetchedUser:o,go:A}),o&&Object(y.jsx)(S,{id:"moderator",fetchedUser:o,go:A}),Object(y.jsx)(E,{id:"marks",go:A,member:g})]})})})};n(122);a.a.send("VKWebAppInit"),i.a.render(Object(y.jsx)(z,{}),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.f3402fae.chunk.js.map