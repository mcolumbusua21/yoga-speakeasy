(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(30),s=a.n(r),i=a(10),o=a.n(i),l=a(19),j=a(7),d=a(120),u=a(119),b=a(116),p=a(114),O=a(57),x=(a(67),O.a.initializeApp({apiKey:"AIzaSyDBdDh1T3XvlebEIfRG-6mgC7hJIgB0OKM",authDomain:"cannabis-directory-81f3c.firebaseapp.com",databaseURL:"https://cannabis-directory-81f3c.firebaseio.com",projectId:"cannabis-directory-81f3c",storageBucket:"cannabis-directory-81f3c.appspot.com",messagingSenderId:"499452117670",appId:"1:499452117670:web:61776c4f6dae6a00016a67"})),h=x.auth(),f=a(1),m=n.a.createContext();function v(){return Object(c.useContext)(m)}function g(e){var t=e.children,a=Object(c.useState)(),n=Object(j.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(!0),o=Object(j.a)(i,2),l=o[0],d=o[1];Object(c.useEffect)((function(){return h.onAuthStateChanged((function(e){s(e),d(!1)}))}),[]);var u={currentUser:r,login:function(e,t){return h.signInWithEmailAndPassword(e,t)},signup:function(e,t){return h.createUserWithEmailAndPassword(e,t)},logout:function(){h.signOut()},resetPassword:function(e){return h.sendPasswordResetEmail(e)},updateEmail:function(e){return r.updateEmail(e)},updatePassword:function(e){return r.updatePassword(e)}};return Object(f.jsx)(m.Provider,{value:u,children:!l&&t})}var y=a(8),w=a(12),N=a(117),S=a(118);var k=function(){var e=v(),t=e.currentUser,a=e.logout,n=Object(c.useState)(""),r=Object(j.a)(n,2),s=r[0],i=r[1],d=Object(y.g)();function b(){return(b=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(""),e.prev=1,e.next=4,a();case 4:d.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),i("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(f.jsxs)(N.a,{expand:"lg",fixed:"top",variant:"dark",className:"d-flex justify-content-between",children:[Object(f.jsx)(N.a.Brand,{style:{color:"red",fontFamily:"Texturina",fontSize:"40px"},href:"#home"}),Object(f.jsx)(N.a.Toggle,{"aria-controls":"basic-navbar-nav "}),Object(f.jsx)(N.a.Collapse,{id:"basic-navbar-nav",className:"d-flex justify-content-end",style:{maxWidth:"fit-content"},color:"yellow",children:Object(f.jsxs)(S.a,{children:[s&&Object(f.jsxs)(u.a,{variant:"danger",children:[" ",s," "]}),Object(f.jsx)(S.a.Link,{style:{color:"red",fontFamily:"Texturina",fontSize:"20px"},href:"/",children:"Home"}),t&&Object(f.jsx)(S.a.Link,{style:{color:"red",fontFamily:"Texturina",fontSize:"20px"},href:"/profile",children:"Profile"}),!t&&Object(f.jsx)(S.a.Link,{style:{color:"red",fontFamily:"Texturina",fontSize:"20px"},href:"/signup",children:"Create an Account"}),t?Object(f.jsx)(p.a,{style:{color:"red",fontFamily:"Texturina",fontSize:"20px"},variant:"link",onClick:function(){return b.apply(this,arguments)},children:"Log Out"}):Object(f.jsx)(S.a.Link,{style:{color:"red",fontFamily:"Texturina",fontSize:"20px"},href:"/login",children:"Log In"})]})})]})};a(78);function C(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),n=v().signup,r=Object(c.useState)(""),s=Object(j.a)(r,2),i=s[0],O=s[1],x=Object(c.useState)(!1),h=Object(j.a)(x,2),m=h[0],g=h[1],N=Object(y.g)();function S(){return(S=Object(l.a)(o.a.mark((function c(r){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(r.preventDefault(),t.current.value===a.current.value){c.next=3;break}return c.abrupt("return",O("Passwords do not match"));case 3:return c.prev=3,O(""),g(!0),c.next=8,n(e.current.value,t.current.value);case 8:N.push("/"),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(3),O("Failed to create an account");case 14:g(!1);case 15:case"end":return c.stop()}}),c,null,[[3,11]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(k,{}),Object(f.jsx)(d.a,{className:"sign-in",children:Object(f.jsxs)(d.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),i&&Object(f.jsxs)(u.a,{variant:"danger",children:[" ",i," "]}),Object(f.jsxs)(b.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(f.jsxs)(b.a.Group,{id:"email",children:[Object(f.jsx)(b.a.Label,{children:"Email"}),Object(f.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(f.jsxs)(b.a.Group,{id:"password",children:[Object(f.jsx)(b.a.Label,{children:"Password"}),Object(f.jsx)(b.a.Control,{type:"password",ref:t,required:!0})]}),Object(f.jsxs)(b.a.Group,{id:"password-confirm",children:[Object(f.jsx)(b.a.Label,{children:"Password Confirmation"}),Object(f.jsx)(b.a.Control,{type:"password",ref:a,required:!0})]}),Object(f.jsx)(p.a,{style:{background:"red",color:"black"},disabled:m,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(f.jsxs)("div",{className:"w-90 text-center mt-2",children:["Already have an account? ",Object(f.jsx)(w.b,{to:"/login",children:"Log In"})]})]})}a(79);var F=function(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"store",children:e.children})})},L=(a(80),function(e,t){var a=Object(c.useState)((function(){var a=window.localStorage.getItem(t);return null!==a?JSON.parse(a):e})),n=Object(j.a)(a,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(r))}),[t,r]),[r,s]});var P=function(){var e=L(10,"count"),t=Object(j.a)(e,2),a=t[0],c=t[1];return Object(f.jsxs)("div",{className:"card text-center",children:[Object(f.jsx)("div",{className:"card-header bg-primary text-red",children:"Sign Up For Classes!"}),Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsxs)("p",{className:"card-text",children:[" Mats Left : ",a]}),Object(f.jsx)(p.a,{className:"btn btn-danger",onClick:function(){0!==a&&c(a-1)},children:"Save my Spot"}),Object(f.jsx)(p.a,{className:"btn btn-primary",onClick:function(){10!==a&&c(a+1)},children:"Cancel my Spot"})]})]})},E=a(115);a(81);var U=function(){var e=new Date((new Date).getFullYear(),(new Date).getMonth(),20);return Object(f.jsxs)("div",{children:[Object(f.jsx)(k,{}),Object(f.jsxs)(F,{className:"hero-container",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"m-5",children:"Yoga Speakeasy"}),Object(f.jsx)("h2",{className:"m-2 p-3",children:"Sign Up For Saturday's 10AM Class Now!"})]}),Object(f.jsx)(P,{}),Object(f.jsx)(E.a,{value:e})]})]})};a(86);function I(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=v().login,n=Object(c.useState)(""),r=Object(j.a)(n,2),s=r[0],i=r[1],O=Object(c.useState)(!1),x=Object(j.a)(O,2),h=x[0],m=x[1],g=Object(y.g)();function N(){return(N=Object(l.a)(o.a.mark((function c(n){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,i(""),m(!0),c.next=6,a(e.current.value,t.current.value);case 6:g.push("/"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),i("Failed to log in");case 12:m(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(k,{}),Object(f.jsx)(d.a,{className:"page-load",children:Object(f.jsxs)(d.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(f.jsxs)(u.a,{variant:"danger",children:[" ",s," "]}),Object(f.jsxs)(b.a,{onSubmit:function(e){return N.apply(this,arguments)},children:[Object(f.jsxs)(b.a.Group,{id:"email",children:[Object(f.jsx)(b.a.Label,{children:"Email"}),Object(f.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(f.jsxs)(b.a.Group,{id:"password",children:[Object(f.jsx)(b.a.Label,{children:"Password"}),Object(f.jsx)(b.a.Control,{type:"password",ref:t,required:!0})]}),Object(f.jsx)(p.a,{style:{background:"red",color:"black"},disabled:h,className:"w-100",type:"submit",children:"Log In"})]}),Object(f.jsx)("div",{className:"w-100 text-center mt-2",children:Object(f.jsx)(w.b,{style:{color:"black"},to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(f.jsxs)("div",{className:"w-90 text-center mt-2",style:{fontFamily:"Texturina"},children:["Need an account? ",Object(f.jsx)(w.b,{to:"/signup",children:"Sign Up"})]})]})}var R=a(40),D=a(61);var B=function(e){var t=e.component,a=Object(D.a)(e,["component"]),c=v().currentUser;return Object(f.jsx)(y.b,Object(R.a)(Object(R.a)({},a),{},{render:function(e){return c?Object(f.jsx)(t,Object(R.a)({},e)):Object(f.jsx)(y.a,{to:"/login"})}}))};function G(){var e=Object(c.useRef)(),t=v().resetPassword,a=Object(c.useState)(""),n=Object(j.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(""),O=Object(j.a)(i,2),x=O[0],h=O[1],m=Object(c.useState)(!1),g=Object(j.a)(m,2),y=g[0],N=g[1];function S(){return(S=Object(l.a)(o.a.mark((function a(c){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,h(""),s(""),N(!0),a.next=7,t(e.current.value);case 7:h("Check your inbox for further instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),s("Failed to reset password");case 13:N(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{children:Object(f.jsxs)(d.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),r&&Object(f.jsxs)(u.a,{variant:"danger",children:[" ",r," "]}),x&&Object(f.jsxs)(u.a,{variant:"success",children:[" ",x," "]}),Object(f.jsxs)(b.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(f.jsxs)(b.a.Group,{id:"email",children:[Object(f.jsx)(b.a.Label,{children:"Email"}),Object(f.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(f.jsx)(p.a,{disabled:y,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(f.jsx)("div",{className:"w-100 text-center mt-2",children:Object(f.jsx)(w.b,{to:"/login",children:"Login"})})]})}),Object(f.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(f.jsx)(w.b,{to:"/signup",children:"Sign Up"})]})]})}a(87);function z(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),n=v(),r=n.currentUser,s=n.updatePassword,i=n.updateEmail,o=Object(c.useState)(""),l=Object(j.a)(o,2),O=l[0],x=l[1],h=Object(c.useState)(!1),m=Object(j.a)(h,2),g=m[0],N=m[1],S=Object(y.g)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(k,{}),Object(f.jsx)(d.a,{className:"check",children:Object(f.jsxs)(d.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),O&&Object(f.jsxs)(u.a,{variant:"danger",children:[" ",O," "]}),Object(f.jsxs)(b.a,{onSubmit:function(c){if(c.preventDefault(),t.current.value!==a.current.value)return x("Passwords do not match");var n=[];N(!0),x(""),e.current.value!==r.email&&n.push(i(e.current.value)),t.current.value&&n.push(s(t.current.value)),Promise.all(n).then((function(){S.push("/")})).catch((function(){x("Failed to update account")})).finally((function(){N(!1)}))},children:[Object(f.jsxs)(b.a.Group,{id:"email",children:[Object(f.jsx)(b.a.Label,{children:"Email"}),Object(f.jsx)(b.a.Control,{type:"email",ref:e,required:!0,defaultValue:r.email})]}),Object(f.jsxs)(b.a.Group,{id:"password",children:[Object(f.jsx)(b.a.Label,{children:"Password"}),Object(f.jsx)(b.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(f.jsxs)(b.a.Group,{id:"password-confirm",children:[Object(f.jsx)(b.a.Label,{children:"Password Confirmation"}),Object(f.jsx)(b.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})]}),Object(f.jsx)(p.a,{style:{background:"red",color:"black"},disabled:g,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(f.jsx)("div",{className:"w-100 text-center mt-2",children:Object(f.jsx)(w.b,{to:"/",children:"Cancel "})})]})}a(88);var T=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],r=v(),s=r.currentUser,i=r.logout,b=Object(y.g)();function O(){return(O=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(""),e.prev=1,e.next=4,i();case 4:b.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(k,{}),Object(f.jsx)(d.a,{className:"profile-page",children:Object(f.jsxs)(d.a.Body,{style:{fontSize:"24px"},children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),a&&Object(f.jsxs)(u.a,{variant:"danger",children:[" ",a," "]}),Object(f.jsx)("strong",{className:"text-center mb-4",children:" Email:"})," ",s&&s.email,Object(f.jsx)(w.b,{style:{background:"red",color:"black"},to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(f.jsx)("div",{className:"w-100 text-center mt-2",children:Object(f.jsx)(p.a,{variant:"link",onClick:function(){return O.apply(this,arguments)},children:"Log Out"})})]})},A=(a(89),a(90)),q=a(121),J=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("/api/dispensary/favorite");case 2:t=e.sent,n(t.data[0].favorites);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(a),Object(f.jsxs)("div",{className:"page",children:[Object(f.jsx)(k,{}),Object(f.jsx)(F,{children:Object(f.jsx)("h1",{className:"text-center",children:"Here's Your Favorite Dispensaries"})}),Object(f.jsx)(q.a,{as:"ul",children:Object(f.jsxs)(q.a.Item,{as:"li",border:"secondary",className:"mb-4",children:[Object(f.jsx)("div",{className:"favorite-list d-flex justify-content-center",children:a.sort((function(e,t){return e.name[0]<t.name[0]?-1:e.name[0]>t.name[0]?1:0})).map((function(e){return Object(f.jsxs)("div",{className:" border border-secondary mt-3 mb-3 ml-3 mr-3 has-text-center",children:[Object(f.jsx)("p",{className:"p-2",style:{color:"black",backgroundColor:"green"},children:e.name}),Object(f.jsxs)("p",{className:"p-2",children:[e.display_address," "]}),Object(f.jsxs)("p",{className:"p-2",children:[e.display_phone," "]}),Object(f.jsxs)("p",{className:"p-2",children:["Yelp Rating: ",e.rating]})]},e.id)}))})," "]})})]})};var M=function(){return Object(f.jsx)(w.a,{children:Object(f.jsx)(g,{children:Object(f.jsxs)(y.d,{children:[Object(f.jsx)(y.b,{exact:!0,path:"/",component:U}),Object(f.jsx)(B,{path:"/update-profile",component:z}),Object(f.jsx)(y.b,{path:"/signup",component:C}),Object(f.jsx)(y.b,{path:"/login",component:I}),Object(f.jsx)(y.b,{path:"/forgot-password",component:G}),Object(f.jsx)(y.b,{path:"/profile",component:T}),Object(f.jsx)(y.b,{path:"/favorites",component:J})]})})})};a(109);s.a.render(Object(f.jsxs)(n.a.StrictMode,{children:[Object(f.jsx)(M,{}),","]}),document.getElementById("root"))},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.3194c47a.chunk.js.map