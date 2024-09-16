"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[967],{344:(e,t,n)=>{n.d(t,{AO:()=>l,Qf:()=>a,b3:()=>r,bb:()=>o});const r=[{field:"id",headerName:"ID",width:230},{field:"fullName",headerName:"Full Name",width:230},{field:"emailAddress",headerName:"Email Address",width:230},{field:"phoneNumber",headerName:"Phone Number",width:230},{field:"userType",headerName:"User Type",width:230}],a=[{field:"id",headerName:"ID",width:230},{field:"name",headerName:"Name",width:230},{field:"description",headerName:"Description",width:400}],o=[{field:"id",headerName:"ID",width:230},{field:"name",headerName:"Name",width:230},{field:"description",headerName:"Description",width:400},{field:"collectionName",headerName:"Collection",width:230},{field:"status",headerName:"Status",width:230}],l=[{field:"id",headerName:"ID",width:230},{field:"name",headerName:"Name",width:230},{field:"description",headerName:"Description",width:400},{field:"userName",headerName:"User",width:230},{field:"status",headerName:"Status",width:230}]},8967:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(5043),a=n(5475),o=n(9376),l=n(917),i=(n(4727),n(344)),s=n(366),c=n(214),d=n(9510),u=n(6328),f=n(579);const m=()=>{const{auth:e}=(0,c.A)(),[t,n]=(0,r.useState)(),{error:m,loading:h,fetchData:p}=(0,d.A)(),y=async()=>{const e=await p({url:s.y.GET_ALL_USER_URL,method:"GET"});null!==e&&void 0!==e&&e.status&&n(e.user)};(0,r.useEffect)((()=>{y()}),[]);const b=(0,r.useMemo)((()=>null===t||void 0===t?void 0:t.map((e=>({...e,id:e._id})))),[t]),v=[{field:"action",headerName:"Action",width:200,renderCell:e=>(0,f.jsxs)("div",{className:"cellAction",children:[(0,f.jsx)(a.N_,{to:`/users/${e.row.id}`,style:{textDecoration:"none"},children:(0,f.jsx)("div",{className:"viewButton",children:"View"})}),(0,f.jsx)("div",{className:"deleteButton",onClick:()=>{return t=e.row.id,void(0,l.ZX)({title:"Confirm to submit",message:"Are you sure to delete user.",buttons:[{label:"Yes",onClick:async()=>{const e=await p({url:s.y.DELETE_USER_BY_ID_URL+`/${t}`,method:"DELETE"});if(console.log(e),!e.status)return u.oR.error(e.error.message);u.oR.success(e.success.message),y()}},{label:"No"}]});var t},children:"Delete"})]})}];return(0,f.jsxs)("div",{className:"users",children:[(0,f.jsxs)("div",{className:"titlebar",children:["Add New User",(0,f.jsx)(a.N_,{to:"/users/new",className:"link",children:"Add New"})]}),h?(0,f.jsx)("h2",{children:"Loading..."}):(0,f.jsx)(o.z,{className:"datagrid",rows:b,columns:i.b3.concat(v),pageSize:9,rowsPerPageOptions:[9],checkboxSelection:!0})]})}},917:(e,t,n)=>{var r,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.ZX=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var r=document.createElementNS(e,"svg");r.setAttribute("id","react-confirm-alert-firm-svg"),r.setAttribute("class","react-confirm-alert-svg"),r.appendChild(n),document.body.appendChild(r)}(),function(e){var t=document.getElementById(e.targetId||p);e.targetId&&!t&&console.error("React Confirm Alert:","Can not get element id (#"+e.targetId+")");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id=p,document.body.appendChild(t)),(h=(0,d.createRoot)(t)).render(s.default.createElement(m,e))}(e)};var i=n(5043),s=u(i),c=u(n(5173)),d=n(4391);function u(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var m=(a=r=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return n=r=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.handleClickButton=function(e){e.onClick&&e.onClick(),r.close()},r.handleClickOverlay=function(e){var t=r.props,n=t.closeOnClickOutside,a=t.onClickOutside,o=e.target===r.overlay;n&&o&&(a(),r.close()),e.stopPropagation()},r.close=function(){var e=r.props.afterClose;document.body.classList.remove("react-confirm-alert-body-element"),function(e){var t=document.getElementById(e.targetId||p);t&&h.unmount(t)}(r.props),function(e){var t=document.getElementById("react-confirm-alert-firm-svg");t&&t.parentNode.removeChild(t);document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}(e)},r.keyboard=function(e){var t=r.props,n=t.closeOnEscape,a=t.onKeypressEscape,o=t.onkeyPress,l=t.keyCodeForClose,i=e.keyCode,s=27===i;l.includes(i)&&r.close(),n&&s&&(a(e),r.close()),o&&o()},r.componentDidMount=function(){document.addEventListener("keydown",r.keyboard,!1)},r.componentWillUnmount=function(){document.removeEventListener("keydown",r.keyboard,!1),r.props.willUnmount()},r.renderCustomUI=function(){var e=r.props,t=e.title,n=e.message,a=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:a,onClose:r.close})},f(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.message,a=t.buttons,l=t.childrenElement,i=t.customUI,c=t.overlayClassName;return s.default.createElement("div",{className:"react-confirm-alert-overlay "+c,ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},s.default.createElement("div",{className:"react-confirm-alert"},i?this.renderCustomUI():s.default.createElement("div",{className:"react-confirm-alert-body"},n&&s.default.createElement("h1",null,n),r,l(),s.default.createElement("div",{className:"react-confirm-alert-button-group"},a.map((function(t,n){return s.default.createElement("button",o({key:n,className:t.className},t,{onClick:function(n){return e.handleClickButton(t)}}),t.label)}))))))}}]),t}(i.Component),r.propTypes={title:c.default.string,message:c.default.string,buttons:c.default.array.isRequired,childrenElement:c.default.func,customUI:c.default.func,closeOnClickOutside:c.default.bool,closeOnEscape:c.default.bool,keyCodeForClose:c.default.arrayOf(c.default.number),willUnmount:c.default.func,afterClose:c.default.func,onClickOutside:c.default.func,onKeypressEscape:c.default.func,onkeyPress:c.default.func,overlayClassName:c.default.string},r.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,keyCodeForClose:[],willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},a);var h=null,p="react-confirm-alert"},4727:()=>{}}]);
//# sourceMappingURL=967.37d68477.chunk.js.map