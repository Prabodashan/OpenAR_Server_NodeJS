"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[935],{6935:(s,c,l)=>{l.r(c),l.d(c,{default:()=>f});var e=l(5043),a=l(3216),n=l(5475),i=l(8094),t=l(7631),h=l(5311),r=l(9380),d=l(5577),o=l(7246),x=l(5342),j=l(1560),v=l(1103),m=l(1403),p=l(3235),A=l(9699),u=l(214),N=l(366),H=l(9510),C=l(579);const f=()=>{const{auth:s,setAuth:c}=(0,u.A)(),{toggle:l}=(0,e.useContext)(A.z),f=(0,a.Zp)(),{loading:y,fetchData:z}=(0,H.A)();return(0,C.jsxs)("div",{className:"sidebar",children:[(0,C.jsx)("div",{className:"top",children:(0,C.jsx)(n.N_,{to:"/",style:{textDecoration:"none"},children:(0,C.jsx)("span",{className:"logo",children:"OpenAR Admin"})})}),(0,C.jsx)("hr",{}),(0,C.jsx)("div",{className:"center",children:(0,C.jsxs)("ul",{children:[(0,C.jsx)("p",{className:"title",children:"MAIN"}),(0,C.jsx)(n.N_,{to:"/home",style:{textDecoration:"none"},children:(0,C.jsxs)("li",{children:[(0,C.jsx)(i.A,{className:"icon"}),(0,C.jsx)("span",{children:"Dashboard"})]})}),(0,C.jsx)("p",{className:"title",children:"LISTS"}),"admin"==s.userType?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(n.N_,{to:"/users",style:{textDecoration:"none"},children:(0,C.jsxs)("li",{children:[(0,C.jsx)(t.A,{className:"icon"}),(0,C.jsx)("span",{children:"Users"})]})})," "]}):"","user"==s.userType?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(n.N_,{to:"/collection",style:{textDecoration:"none"},children:(0,C.jsxs)("li",{children:[(0,C.jsx)(h.A,{className:"icon"}),(0,C.jsx)("span",{children:"Collocations"})]})}),(0,C.jsx)(n.N_,{to:"/item",style:{textDecoration:"none"},children:(0,C.jsxs)("li",{children:[(0,C.jsx)(r.A,{className:"icon"}),(0,C.jsx)("span",{children:"Items"})]})})]}):"","dev"==s.userType?(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(n.N_,{to:"/dev",style:{textDecoration:"none"},children:(0,C.jsxs)("li",{children:[(0,C.jsx)(r.A,{className:"icon"}),(0,C.jsx)("span",{children:"Items"})]})})}):"",(0,C.jsx)("p",{className:"title",children:"USEFUL"}),(0,C.jsxs)("li",{children:[(0,C.jsx)(d.A,{className:"icon"}),(0,C.jsx)("span",{children:"Stats"})]}),(0,C.jsxs)("li",{children:[(0,C.jsx)(j.A,{className:"icon"}),(0,C.jsx)("span",{children:"Notifications"})]}),(0,C.jsx)("p",{className:"title",children:"SERVICE"}),(0,C.jsxs)("li",{children:[(0,C.jsx)(v.A,{className:"icon"}),(0,C.jsx)("span",{children:"System Health"})]}),(0,C.jsxs)("li",{children:[(0,C.jsx)(m.A,{className:"icon"}),(0,C.jsx)("span",{children:"Logs"})]}),(0,C.jsxs)("li",{children:[(0,C.jsx)(o.A,{className:"icon"}),(0,C.jsx)("span",{children:"Settings"})]}),(0,C.jsx)("p",{className:"title",children:"USER"}),(0,C.jsxs)("li",{children:[(0,C.jsx)(p.A,{className:"icon"}),(0,C.jsx)("span",{children:"Profile"})]}),(0,C.jsxs)("li",{onClick:async()=>{try{const s=await z({url:N.y.LOGOUT_URL,method:"POST"});console.log(s),c(null),f("/")}catch(s){console.log(s)}},children:[(0,C.jsx)(x.A,{className:"icon"}),(0,C.jsx)("span",{children:"Logout"})]})]})}),(0,C.jsxs)("div",{className:"bottom",children:[(0,C.jsx)("div",{className:"colorOption",onClick:()=>l({type:"LIGHT"})}),(0,C.jsx)("div",{className:"colorOption",onClick:()=>l({type:"DARK"})})]})]})}},3235:(s,c,l)=>{var e=l(4994);c.A=void 0;var a=e(l(39)),n=l(579);c.A=(0,a.default)([(0,n.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5m10.79-1.38C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12"},"0"),(0,n.jsx)("path",{d:"M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6m0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11"},"1")],"AccountCircleOutlined")},5311:(s,c,l)=>{var e=l(4994);c.A=void 0;var a=e(l(39)),n=l(579);c.A=(0,a.default)((0,n.jsx)("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z"}),"CreditCard")},8094:(s,c,l)=>{var e=l(4994);c.A=void 0;var a=e(l(39)),n=l(579);c.A=(0,a.default)((0,n.jsx)("path",{d:"M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"}),"Dashboard")},9380:(s,c,l)=>{var e=l(4994);c.A=void 0;var a=e(l(39)),n=l(579);c.A=(0,a.default)((0,n.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"}),"Description")},5342:(s,c,l)=>{var e=l(4994);c.A=void 0;var a=e(l(39)),n=l(579);c.A=(0,a.default)((0,n.jsx)("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"}),"ExitToApp")},5577:(s,c,l)=>{var e=l(4994);c.A=void 0;var a=e(l(39)),n=l(579);c.A=(0,a.default)((0,n.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z"}),"InsertChart")},1560:(s,c,l)=>{var e=l(4994);c.A=void 0;var a=e(l(39)),n=l(579);c.A=(0,a.default)((0,n.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"}),"NotificationsNone")},7631:(s,c,l)=>{var e=l(4994);c.A=void 0;var a=e(l(39)),n=l(579);c.A=(0,a.default)((0,n.jsx)("path",{d:"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"}),"PersonOutline")},1403:(s,c,l)=>{var e=l(4994);c.A=void 0;var a=e(l(39)),n=l(579);c.A=(0,a.default)([(0,n.jsx)("path",{d:"m15.82 7.22-1 .4c-.21-.16-.43-.29-.67-.39L14 6.17c-.02-.1-.1-.17-.2-.17h-1.6c-.1 0-.18.07-.19.17l-.15 1.06c-.24.1-.47.23-.67.39l-1-.4c-.09-.03-.2 0-.24.09l-.8 1.38c-.05.09-.03.2.05.26l.85.66c-.03.12-.05.26-.05.39s.01.26.03.39l-.84.66c-.08.06-.1.17-.05.25l.8 1.39c.05.09.15.12.25.09l.99-.4c.21.16.43.29.68.39l.14 1.06c.02.1.1.17.2.17h1.6c.1 0 .18-.07.2-.17l.15-1.06c.24-.1.47-.23.67-.39l.99.4c.09.04.2 0 .24-.09l.8-1.39c.05-.09.03-.19-.05-.25l-.83-.66c.02-.13.03-.26.03-.39 0-.14-.01-.27-.03-.39l.85-.66c.08-.06.1-.17.05-.26l-.8-1.38c-.05-.09-.16-.12-.25-.09M13 11.43c-.79 0-1.43-.64-1.43-1.43s.64-1.43 1.43-1.43 1.43.64 1.43 1.43-.64 1.43-1.43 1.43"},"0"),(0,n.jsx)("path",{d:"M19.94 9.06c-.43-3.27-3.23-5.86-6.53-6.05C13.27 3 13.14 3 13 3 9.47 3 6.57 5.61 6.08 9l-1.93 3.48c-.41.66.07 1.52.85 1.52h1v2c0 1.1.9 2 2 2h1v3h7v-4.68c2.62-1.25 4.35-4.08 3.94-7.26m-5.05 5.57-.89.42V19h-3v-3H8v-4H6.7l1.33-2.33C8.21 7.06 10.35 5 13 5c2.76 0 5 2.24 5 5 0 2.09-1.29 3.88-3.11 4.63"},"1")],"PsychologyOutlined")},7246:(s,c,l)=>{var e=l(4994);c.A=void 0;var a=e(l(39)),n=l(579);c.A=(0,a.default)((0,n.jsx)("path",{d:"M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69"}),"SettingsApplications")},1103:(s,c,l)=>{var e=l(4994);c.A=void 0;var a=e(l(39)),n=l(579);c.A=(0,a.default)((0,n.jsx)("path",{d:"M15.5 17H9c-2.21 0-4-1.79-4-4 0-1.93 1.36-3.56 3.22-3.92C9.04 7.8 10.47 7 12 7c1.95 0 3.66 1.28 4.26 3.09 1.58.36 2.74 1.75 2.74 3.41 0 1.93-1.57 3.5-3.5 3.5m-6.76-5.98C7.74 11.15 7 11.99 7 13c0 1.1.9 2 2 2h6.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.87l-.17-.86C14.29 9.92 13.23 9 12 9c-.96 0-1.84.57-2.26 1.45l-.27.57zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18z"}),"SettingsSystemDaydreamOutlined")}}]);
//# sourceMappingURL=935.4154ba1a.chunk.js.map