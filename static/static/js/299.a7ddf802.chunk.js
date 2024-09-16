"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[299],{6299:(e,s,r)=>{r.r(s),r.d(s,{default:()=>c});var l=r(5043),a=r(9510),n=r(6328),d=r(366),i=r(3216),o=r(579);const c=()=>{const e=(0,i.Zp)(),[s,r]=(0,l.useState)({fullName:"",emailAddress:"",phoneNumber:"",password:"",userType:"user"}),[c,t]=(0,l.useState)(null),{error:m,loading:u,fetchData:p}=(0,a.A)(),h=e=>{r((s=>({...s,[e.target.name]:e.target.value})))};return(0,o.jsxs)("div",{className:"newUser",children:[(0,o.jsx)("div",{className:"top",children:(0,o.jsx)("h1",{children:"Add New User"})}),(0,o.jsxs)("div",{className:"bottom",children:[(0,o.jsx)("div",{className:"left",children:(0,o.jsx)("img",{src:"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",alt:""})}),(0,o.jsx)("div",{className:"right",children:(0,o.jsxs)("form",{children:[(0,o.jsxs)("div",{className:"formInput",children:[(0,o.jsx)("label",{children:"Full Name"}),(0,o.jsx)("input",{name:"fullName",type:"text",placeholder:"john doe",onChange:h}),null!==c&&void 0!==c&&c.fullName?(0,o.jsx)("span",{className:"errorSpan",children:c.fullName}):(0,o.jsx)("p",{children:(0,o.jsx)("br",{})})]}),(0,o.jsxs)("div",{className:"formInput",children:[(0,o.jsx)("label",{children:"Email Address"}),(0,o.jsx)("input",{name:"emailAddress",type:"email",placeholder:"john_doe@gmail.com",onChange:h}),null!==c&&void 0!==c&&c.emailAddress?(0,o.jsx)("span",{className:"errorSpan",children:c.emailAddress}):(0,o.jsx)("p",{children:(0,o.jsx)("br",{})})]}),(0,o.jsxs)("div",{className:"formInput",children:[(0,o.jsx)("label",{children:"Phone"}),(0,o.jsx)("input",{name:"phoneNumber",type:"text",placeholder:"+1 234 567 89",onChange:h}),null!==c&&void 0!==c&&c.phoneNumber?(0,o.jsx)("span",{className:"errorSpan",children:c.phoneNumber}):(0,o.jsx)("p",{children:(0,o.jsx)("br",{})})]}),(0,o.jsxs)("div",{className:"formInput",children:[(0,o.jsx)("label",{children:"Password"}),(0,o.jsx)("input",{name:"password",type:"Password",onChange:h}),null!==c&&void 0!==c&&c.password?(0,o.jsx)("span",{className:"errorSpan",children:c.password}):(0,o.jsx)("p",{children:(0,o.jsx)("br",{})})]}),(0,o.jsxs)("div",{className:"formInput",children:[(0,o.jsx)("label",{children:"User Type"}),(0,o.jsx)("div",{className:"select-container",children:(0,o.jsxs)("select",{name:"userType",onChange:h,defaultValue:"user",children:[(0,o.jsx)("option",{value:"admin",children:"Admin"}),(0,o.jsx)("option",{value:"user",children:"User"}),(0,o.jsx)("option",{value:"dev",children:"Developer"})]})}),null!==c&&void 0!==c&&c.userType?(0,o.jsx)("span",{className:"errorSpan",children:c.userType}):(0,o.jsx)("p",{children:(0,o.jsx)("br",{})})]}),(0,o.jsx)("button",{onClick:async r=>{r.preventDefault();const l=(e=>{const s={};return t(null),e.emailAddress?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e.emailAddress)||(s.emailAddress="This is not Valid email format"):s.emailAddress="Email is required!",e.fullName||(s.fullName="Full Name is required!"),e.password||(s.password="Password is required!"),e.userType||(s.userType="UserType is required!"),s})(s);if(0!==Object.keys(l).length)return void t(l);const a=await p({url:d.y.CREATE_USER_URL,method:"POST",data:s});if(!a.status)return n.oR.error(a.error.message);n.oR.success(a.success.message),e("/users",{replace:!0})},disabled:u,children:"Submit"})]})})]})]})}}}]);
//# sourceMappingURL=299.a7ddf802.chunk.js.map