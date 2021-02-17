(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(19),r=n.n(a),o=n(4),i=n(16),l=n(3),u=n(5),j="LoginUser",b="CreateUser",m="UserLogout",d="ChangeRoom",f=n(1),O=function(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(u.a)(t,2),s=n[0],a=n[1];return Object(f.jsxs)("form",{action:"submit",className:"flex",onSubmit:function(e){return e.preventDefault()},children:[Object(f.jsx)("input",{placeholder:"Create an user name...",type:"text",value:s,onChange:function(e){return a(e.target.value)}}),Object(f.jsxs)(i.b,{onClick:function(){e(function(e){return{type:j,payload:e}}(s))},to:"/foraClient/room",className:"".concat(""===s.trim()||s.length>20?"disabled":""),children:["Login",Object(f.jsx)("i",{className:"fas fa-comments"})]}),s.length>20&&Object(f.jsxs)("span",{children:[Object(f.jsx)("i",{className:"fas fa-exclamation-triangle"}),"User name should be less than 20 symbols!"]})]})},x=(n(74),function(){return Object(f.jsx)("div",{className:"login-page flex",children:Object(f.jsxs)("div",{className:"login-box",children:[Object(f.jsx)("h3",{children:"Hello! Please create an user name for joining the chat!"}),Object(f.jsx)(O,{})]})})}),h=n(61),p=Object(h.io)("https://chatserverandrll.herokuapp.com/",{withCredentials:!0,extraHeaders:{"my-custom-header":"abcd"}}),v=(n(105),function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(o.c)((function(e){return e.userState.userData}));return Object(c.useEffect)((function(){return p.on("roomData",(function(e){s(e.users)})),p.on("newRoom",(function(){s([])})),function(){s([])}}),[]),Object(f.jsxs)("div",{className:"all-users flex",children:[Object(f.jsxs)("h4",{className:"desktop-only",children:["Users in ",a.room,":"]}),Object(f.jsx)("h4",{className:"mobile-only",children:"Users:"}),Object(f.jsx)("div",{className:"users-wrapper flex",children:n.map((function(e,t){return Object(f.jsx)("p",{className:"".concat(a.name===e.name?"me":""),children:e.name},t)}))})]})}),g=n(63),N=n(62),y=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(o.c)((function(e){return e.userState.userName}));Object(c.useEffect)((function(){return p.on("adminMessage",(function(e){s((function(t){return[].concat(Object(g.a)(t),[e])}))})),p.on("newRoom",(function(){s([])})),function(){s([])}}),[]);return Object(c.useEffect)((function(){return N.animateScroll.scrollToBottom({containerId:"messages",smooth:!0,duration:180}),function(){}}),[n]),Object(f.jsx)("div",{className:"messages-window flex",id:"messages",children:n.map((function(e,t){return Object(f.jsxs)("div",{className:"".concat(e.user===a?"my-message message":""," ").concat("admin"===e.user?"admin":"chat-message message"),children:[Object(f.jsx)("span",{style:{display:"admin"===e.user&&"none"},children:e.user===a?"Me":e.user}),Object(f.jsxs)("p",{children:[" ",e.text]})," ",Object(f.jsx)("span",{className:"time",children:e.time})]},t)}))})},C=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useRef)(null),r=Object(o.c)((function(e){return e.userState.userData}));return Object(f.jsxs)("form",{action:"submit",className:"flex",onSubmit:function(e){return e.preventDefault()},children:[Object(f.jsx)("input",{ref:a,placeholder:"Enter your message...",type:"textarea",value:n,onChange:function(e){return s(e.target.value)}}),Object(f.jsx)("button",{onClick:function(){a.current.focus(),""!==n&&p.emit("sendMessage",r,n,(function(){s("")}))},children:"Send"})]})},S=function(e){var t=e.onRoomClick,n=Object(c.useState)([]),s=Object(u.a)(n,2),a=s[0],r=s[1],i=Object(o.b)(),l=Object(o.c)((function(e){return e.userState.userData}));Object(c.useEffect)((function(){return p.on("allRooms",(function(e){r(e)})),function(){r([])}}),[]);var j=function(e){p.emit("changeRoom",l.id,e,(function(e){i(function(e){return{type:d,payload:e}}(e)),t()}))};return Object(f.jsxs)("div",{className:"rooms flex",children:[Object(f.jsx)("h4",{children:"Rooms:"}),a.map((function(e,t){return Object(f.jsx)("a",{onClick:function(){return j(e.name)},className:"".concat(l.room===e.name?"my-room":""),children:e.name},t)}))]})},k=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.userState.userData})),n=function(){p.emit("leaveChat",t.id,(function(){e({type:m,payload:void 0})}))};return window.onunload=function(){n()},Object(f.jsxs)("div",{className:"exit flex",children:[Object(f.jsxs)(i.b,{className:"desktop-only",onClick:n,to:"/foraClient",children:[Object(f.jsx)("i",{className:"far fa-times-circle"}),"leave the chat"]}),Object(f.jsx)(i.b,{className:"mobile-only",onClick:n,to:"/foraClient",children:Object(f.jsx)("i",{className:"far fa-times-circle"})})]})},w=function(e){var t=e.isActive,n=e.setActive;return Object(f.jsx)("button",{className:"hamburger hamburger--squeeze mobile-only ".concat(t?"is-active":""),type:"button",onClick:n,children:Object(f.jsx)("span",{className:"hamburger-box",children:Object(f.jsx)("span",{className:"hamburger-inner"})})})},D=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.userState.userName})),n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],l=a[1],j=Object(c.useState)(!1),m=Object(u.a)(j,2),d=m[0],O=m[1],x=Object(c.useState)(!1),h=Object(u.a)(x,2),g=h[0],N=h[1];Object(c.useEffect)((function(){return N(!0),window.scrollTo(0,0),p.emit("login",t,(function(t){var n;""!==t.error?(l(t.error),N(!1)):(e((n=t.user,{type:b,payload:n})),N(!1))})),function(){l("")}}),[]);var D=function(){O(!1)};return Object(f.jsx)(s.a.Fragment,{children:g?Object(f.jsx)("div",{className:"loading flex",children:Object(f.jsxs)("section",{class:"section section-4",children:[Object(f.jsx)("span",{class:"loader loader-bars",children:Object(f.jsx)("span",{})}),"Loading..."]})}):Object(f.jsx)(s.a.Fragment,{children:""!==r?Object(f.jsxs)("div",{className:"error-window",children:[Object(f.jsx)("p",{children:r}),Object(f.jsx)(i.b,{to:"/foraClient",children:"Go Back"})]}):Object(f.jsxs)("div",{className:"room flex",children:[Object(f.jsxs)("div",{className:"sidebar flex",children:[Object(f.jsx)(k,{}),Object(f.jsxs)("div",{className:"container desktop-only flex",children:[Object(f.jsx)(S,{onRoomClick:D}),Object(f.jsx)(v,{})]}),Object(f.jsxs)("div",{className:"".concat(d?"active":""," container mobile-only flex"),children:[Object(f.jsx)(S,{onRoomClick:D}),Object(f.jsx)(v,{})]}),Object(f.jsx)(w,{isActive:d,setActive:function(){O(!d)}})]}),Object(f.jsxs)("div",{className:"messages flex",children:[Object(f.jsx)(y,{}),Object(f.jsx)(C,{})]})]})})})};n(113);function R(){return Object(f.jsxs)(i.a,{children:[Object(f.jsx)(l.a,{path:"/foraClient/room",children:Object(f.jsx)(D,{})}),Object(f.jsx)(l.a,{path:"/foraClient",exact:!0,children:Object(f.jsx)(x,{})})]})}var E=n(20),U={userName:"",userData:{}},A=Object(E.b)({userState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object.assign({},e,{userName:t.payload});case b:return Object.assign({},e,{userData:t.payload});case m:return Object.assign({},e,{userData:{},userName:""});case d:return Object.assign({},e,{userData:t.payload})}return e}}),L=function(){return Object(E.c)(A,void 0)}();r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(o.a,{store:L,children:Object(f.jsx)(R,{})})}),document.querySelector("#root"))},74:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.8f506765.chunk.js.map