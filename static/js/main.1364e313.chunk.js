(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(19),r=n.n(a),o=n(4),i=n(16),u=n(3),l=n(8),j="LoginUser",b="CreateUser",m="UserLogout",f="ChangeRoom",d=n(1),O=function(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(l.a)(t,2),s=n[0],a=n[1];return Object(d.jsxs)("form",{action:"submit",className:"flex",onSubmit:function(e){return e.preventDefault()},children:[Object(d.jsx)("input",{placeholder:"Create an user name...",type:"text",value:s,onChange:function(e){return a(e.target.value)}}),Object(d.jsxs)(i.b,{onClick:function(){e(function(e){return{type:j,payload:e}}(s))},to:"/foraClient/room",className:"".concat(""===s.trim()||s.length>20?"disabled":""),children:["Login",Object(d.jsx)("i",{className:"fas fa-comments"})]}),s.length>20&&Object(d.jsxs)("span",{children:[Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"}),"User name should be less than 20 symbols!"]})]})},h=(n(74),function(){return Object(d.jsx)("div",{className:"login-page flex",children:Object(d.jsxs)("div",{className:"login-box",children:[Object(d.jsx)("h3",{children:"Hello! Please create an user name for joining the chat!"}),Object(d.jsx)(O,{})]})})}),x=n(61),p=Object(x.io)("https://chatserverandrll.herokuapp.com/",{withCredentials:!0,extraHeaders:{"my-custom-header":"abcd"}}),v=(n(105),function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(o.c)((function(e){return e.userState.userData}));return Object(c.useEffect)((function(){return p.on("roomData",(function(e){s(e.users)})),p.on("newRoom",(function(){s([])})),function(){s([])}}),[]),Object(d.jsxs)("div",{className:"all-users flex",children:[Object(d.jsxs)("h4",{className:"desktop-only",children:["Users in ",a.room,":"]}),Object(d.jsx)("h4",{className:"mobile-only",children:"Users:"}),Object(d.jsx)("div",{className:"users-wrapper flex",children:n.map((function(e,t){return Object(d.jsx)("p",{className:"".concat(a.name===e.name?"me":""),children:e.name},t)}))})]})}),g=n(63),N=n(62),y=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(o.c)((function(e){return e.userState.userName}));Object(c.useEffect)((function(){return p.on("adminMessage",(function(e){s((function(t){return[].concat(Object(g.a)(t),[e])}))})),p.on("newRoom",(function(){s([])})),function(){s([])}}),[]);return Object(c.useEffect)((function(){return N.animateScroll.scrollToBottom({containerId:"messages",smooth:!0,duration:180}),function(){}}),[n]),Object(d.jsx)("div",{className:"messages-window flex",id:"messages",children:n.map((function(e,t){return Object(d.jsxs)("div",{className:"".concat(e.user===a?"my-message message":""," ").concat("admin"===e.user?"admin":"chat-message message"),children:[Object(d.jsx)("span",{style:{display:"admin"===e.user&&"none"},children:e.user===a?"Me":e.user}),Object(d.jsxs)("p",{children:[" ",e.text]})," ",Object(d.jsx)("span",{className:"time",children:e.time})]},t)}))})},S=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(o.c)((function(e){return e.userState.userData}));return Object(d.jsxs)("form",{action:"submit",className:"flex",onSubmit:function(e){return e.preventDefault()},children:[Object(d.jsx)("input",{placeholder:"Enter your message...",type:"textarea",value:n,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("button",{onClick:function(){""!==n&&p.emit("sendMessage",a,n,(function(){s("")}))},children:"Send"})]})},C=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(o.b)(),r=Object(o.c)((function(e){return e.userState.userData}));Object(c.useEffect)((function(){return p.on("allRooms",(function(e){s(e)})),function(){s([])}}),[]);var i=function(e){p.emit("changeRoom",r.id,e,(function(e){a(function(e){return{type:f,payload:e}}(e))}))};return Object(d.jsxs)("div",{className:"rooms flex",children:[Object(d.jsx)("h4",{children:"Rooms:"}),n.map((function(e,t){return Object(d.jsx)("a",{onClick:function(){return i(e.name)},className:"".concat(r.room===e.name?"my-room":""),children:e.name},t)}))]})},w=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.userState.userData})),n=function(){p.emit("leaveChat",t.id,(function(){e({type:m,payload:void 0})}))};return window.onunload=function(){n()},Object(d.jsxs)("div",{className:"exit flex",children:[Object(d.jsxs)(i.b,{className:"desktop-only",onClick:n,to:"/foraClient",children:[Object(d.jsx)("i",{className:"far fa-times-circle"}),"leave the chat"]}),Object(d.jsx)(i.b,{className:"mobile-only",onClick:n,to:"/foraClient",children:Object(d.jsx)("i",{className:"far fa-times-circle"})})]})},k=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.userState.userName})),n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],u=a[1];return Object(c.useEffect)((function(){return p.emit("login",t,(function(t){var n;""!==t.error?u(t.error):e((n=t.user,{type:b,payload:n}))})),function(){u("")}}),[]),Object(d.jsx)(s.a.Fragment,{children:""!==r?Object(d.jsxs)("div",{className:"error-window",children:[Object(d.jsx)("p",{children:r}),Object(d.jsx)(i.b,{to:"/foraClient",children:"Go Back"})]}):Object(d.jsxs)("div",{className:"room flex",children:[Object(d.jsxs)("div",{className:"sidebar flex",children:[Object(d.jsx)(w,{}),Object(d.jsx)(C,{}),Object(d.jsx)(v,{})]}),Object(d.jsxs)("div",{className:"messages flex",children:[Object(d.jsx)(y,{}),Object(d.jsx)(S,{})]})]})})};n(113);function D(){return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(u.a,{path:"/foraClient/room",children:Object(d.jsx)(k,{})}),Object(d.jsx)(u.a,{path:"/foraClient",exact:!0,children:Object(d.jsx)(h,{})})]})}var E=n(20),R={userName:"",userData:{}},U=Object(E.b)({userState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object.assign({},e,{userName:t.payload});case b:return Object.assign({},e,{userData:t.payload});case m:return Object.assign({},e,{userData:{},userName:""});case f:return Object.assign({},e,{userData:t.payload})}return e}}),M=function(){return Object(E.c)(U,void 0)}();r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(o.a,{store:M,children:Object(d.jsx)(D,{})})}),document.querySelector("#root"))},74:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.1364e313.chunk.js.map