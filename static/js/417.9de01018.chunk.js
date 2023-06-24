"use strict";(self.webpackChunknutrition_ai=self.webpackChunknutrition_ai||[]).push([[417],{1417:function(e,o,r){r.r(o),r.d(o,{default:function(){return J}});var t=r(72791),a=r(68870),n=r(57689),l=r(12665),s=r(1413),i=r(45987),c=r(20890),d=r(50533),u=r(93433),p=r(29439),h=r(4942),m=r(87462),f=r(63366),x=(r(57441),r(28182)),v=r(94419),Z=r(50272),g=r(66934),b=r(31402),j=r(12065),y=r(74223),C=r(80184),k=(0,y.Z)((0,C.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),S=r(95080),w=["slots","slotProps"],B=(0,g.ZP)(S.Z)((function(e){var o=e.theme;return(0,m.Z)({display:"flex",marginLeft:"calc(".concat(o.spacing(1)," * 0.5)"),marginRight:"calc(".concat(o.spacing(1)," * 0.5)")},"light"===o.palette.mode?{backgroundColor:o.palette.grey[100],color:o.palette.grey[700]}:{backgroundColor:o.palette.grey[700],color:o.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,m.Z)({},"light"===o.palette.mode?{backgroundColor:o.palette.grey[200]}:{backgroundColor:o.palette.grey[600]}),"&:active":(0,m.Z)({boxShadow:o.shadows[0]},"light"===o.palette.mode?{backgroundColor:(0,j._4)(o.palette.grey[200],.12)}:{backgroundColor:(0,j._4)(o.palette.grey[600],.12)})})})),P=(0,g.ZP)(k)({width:24,height:16});var I=function(e){var o=e.slots,r=void 0===o?{}:o,t=e.slotProps,a=void 0===t?{}:t,n=(0,f.Z)(e,w),l=e;return(0,C.jsx)("li",{children:(0,C.jsx)(B,(0,m.Z)({focusRipple:!0},n,{ownerState:l,children:(0,C.jsx)(P,(0,m.Z)({as:r.CollapsedIcon,ownerState:l},a.collapsedIcon))}))})},N=r(75878),R=r(21217);function M(e){return(0,R.Z)("MuiBreadcrumbs",e)}var z=(0,N.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),T=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],A=(0,g.ZP)(c.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,o){return[(0,h.Z)({},"& .".concat(z.li),o.li),o.root]}})({}),_=(0,g.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,o){return o.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),H=(0,g.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,o){return o.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function L(e,o,r,t){return e.reduce((function(a,n,l){return l<e.length-1?a=a.concat(n,(0,C.jsx)(H,{"aria-hidden":!0,className:o,ownerState:t,children:r},"separator-".concat(l))):a.push(n),a}),[])}var F=t.forwardRef((function(e,o){var r=(0,b.Z)({props:e,name:"MuiBreadcrumbs"}),a=r.children,n=r.className,l=r.component,s=void 0===l?"nav":l,i=r.slots,c=void 0===i?{}:i,d=r.slotProps,h=void 0===d?{}:d,g=r.expandText,j=void 0===g?"Show path":g,y=r.itemsAfterCollapse,k=void 0===y?1:y,S=r.itemsBeforeCollapse,w=void 0===S?1:S,B=r.maxItems,P=void 0===B?8:B,N=r.separator,R=void 0===N?"/":N,z=(0,f.Z)(r,T),H=t.useState(!1),F=(0,p.Z)(H,2),V=F[0],q=F[1],D=(0,m.Z)({},r,{component:s,expanded:V,expandText:j,itemsAfterCollapse:k,itemsBeforeCollapse:w,maxItems:P,separator:R}),E=function(e){var o=e.classes;return(0,v.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},M,o)}(D),O=(0,Z.Z)({elementType:c.CollapsedIcon,externalSlotProps:h.collapsedIcon,ownerState:D}),U=t.useRef(null),W=t.Children.toArray(a).filter((function(e){return t.isValidElement(e)})).map((function(e,o){return(0,C.jsx)("li",{className:E.li,children:e},"child-".concat(o))}));return(0,C.jsx)(A,(0,m.Z)({ref:o,component:s,color:"text.secondary",className:(0,x.Z)(E.root,n),ownerState:D},z,{children:(0,C.jsx)(_,{className:E.ol,ref:U,ownerState:D,children:L(V||P&&W.length<=P?W:function(e){return w+k>=e.length?e:[].concat((0,u.Z)(e.slice(0,w)),[(0,C.jsx)(I,{"aria-label":j,slots:{CollapsedIcon:c.CollapsedIcon},slotProps:{collapsedIcon:O},onClick:function(){q(!0);var e=U.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,u.Z)(e.slice(e.length-k,e.length)))}(W),E.separator,R,D)})}))})),V=r(10137),q=r(37267),D=r(11087),E={"/dashboard":"Dashboard","/dashboard/booking/list":"Booking-list","/dashboard/booking/detail":"Booking-detail","dashboard/profile":"Profile"},O=function(e){return(0,C.jsx)(d.Z,(0,s.Z)((0,s.Z)({variant:"body2"},e),{},{component:D.rU}))},U=function(){var e=(0,n.TH)().pathname.split("/").filter((function(e){return e}));return(0,C.jsxs)(F,{"aria-label":"breadcrumb",separator:(0,C.jsx)(q.Z,{sx:{fontSize:"5px",color:"text.secondary"}}),maxItems:2,children:[(0,C.jsx)(O,{underline:"hover",color:"secondary",to:"/",className:"d-inline-block",children:(0,C.jsx)(V.Z,{className:"align-top",sx:{fontSize:"20px"}})}),e.map((function(o,r){var t=Boolean(r===e.length-1),a="/".concat(e.slice(0,r+1).join("/"));return t?(0,C.jsx)(c.Z,{variant:"body2",color:"text.disabled",className:"fw-bold",children:E[a]},a):(0,C.jsx)(O,{className:"text-decoration-none fw-bold",color:"secondary",to:a,children:E[a]},a)}))]})},W=["title","titleStyle"],G=function(e){var o=e.title,r=e.titleStyle,t=(0,i.Z)(e,W);return(0,C.jsxs)(a.Z,(0,s.Z)((0,s.Z)({},t),{},{children:[o?(0,C.jsx)(c.Z,{variant:"h4",sx:(0,s.Z)({},r),className:"mb-2",children:o}):null,(0,C.jsx)(U,{})]}))},J=function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(l.Z,{title:"Booking | Nutra Plus",children:[(0,C.jsx)(a.Z,{sx:{pb:3},children:(0,C.jsx)(G,{title:"Booking",variant:"outlined",elevation:0})}),(0,C.jsx)(n.j3,{})]})})}},37267:function(e,o,r){var t=r(64836);o.Z=void 0;var a=t(r(45649)),n=r(80184),l=(0,a.default)((0,n.jsx)("circle",{cx:"12",cy:"12",r:"8"}),"FiberManualRecord");o.Z=l},10137:function(e,o,r){var t=r(64836);o.Z=void 0;var a=t(r(45649)),n=r(80184),l=(0,a.default)((0,n.jsx)("path",{d:"M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"}),"House");o.Z=l}}]);
//# sourceMappingURL=417.9de01018.chunk.js.map