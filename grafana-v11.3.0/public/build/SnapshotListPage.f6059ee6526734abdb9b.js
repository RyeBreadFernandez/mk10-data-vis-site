"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6590],{72602:(D,x,t)=>{t.r(x),t.d(x,{SnapshotListPage:()=>S,default:()=>Y});var s=t(74848),j=t(21780),h=t(96540),g=t(24705),p=t(32264),u=t(69529),f=t(72109),C=t(96374),l=t(8484),m=t(69064),k=t(32196),r=t(70255),y=t(55852),b=t(40845),L=t(72129);const A=({snapshot:e,onRemove:n})=>{const o=e.externalUrl||e.url;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:o,children:e.name})}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:o,children:o})}),(0,s.jsx)("td",{children:e.external&&(0,s.jsx)("span",{className:"query-keyword",children:(0,s.jsx)(l.x6,{i18nKey:"snapshot.external-badge",children:"External"})})}),(0,s.jsx)("td",{className:"text-center",children:(0,s.jsx)(y.z9,{href:o,variant:"secondary",size:"sm",icon:"eye",children:(0,s.jsx)(l.x6,{i18nKey:"snapshot.view-button",children:"View"})})}),(0,s.jsx)("td",{className:"text-right",children:(0,s.jsx)(y.$n,{variant:"destructive",size:"sm",icon:"times",onClick:n})})]})},N=({rootProps:e})=>{const n=(0,b.of)(T);return(0,s.jsxs)("tr",{...e,children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{width:80})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{width:240})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{width:63,height:24,containerClassName:n.blockSkeleton})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{width:22,height:24,containerClassName:n.blockSkeleton})})]})},i=(0,L.j)(A,N),T=()=>({blockSkeleton:(0,k.css)({display:"block",lineHeight:1})});async function R(){return(0,m.s)().getSnapshots().then(e=>e.map(n=>({...n,url:`${p.$.appUrl}dashboard/snapshot/${n.key}`})))}const K=()=>{const[e,n]=(0,h.useState)([]),[o,v]=(0,h.useState)(!1),[d,c]=(0,h.useState)();(0,g.A)(async()=>{v(!0);const a=await R();v(!1),n(a)},[n]);const $=(0,h.useCallback)(async a=>{const z=e.filter(P=>P.key!==a.key);n(z),await(0,m.s)().deleteSnapshot(a.key).catch(()=>{n(e)})},[e]);return!o&&e.length===0?(0,s.jsx)(u.p,{variant:"call-to-action",message:(0,l.t)("snapshot.empty-state.message","You haven't created any snapshots yet"),children:(0,s.jsxs)(l.x6,{i18nKey:"snapshot.empty-state.more-info",children:["You can create a snapshot of any dashboard through the ",(0,s.jsx)("b",{children:"Share"})," modal."," ",(0,s.jsx)(f.Y,{external:!0,href:"https://grafana.com/docs/grafana/latest/dashboards/share-dashboards-panels/#publish-a-snapshot",children:"Learn more"})]})}):(0,s.jsxs)("div",{children:[(0,s.jsxs)("table",{className:"filter-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)("strong",{children:(0,s.jsx)(l.x6,{i18nKey:"snapshot.name-column-header",children:"Name"})})}),(0,s.jsx)("th",{children:(0,s.jsx)("strong",{children:(0,s.jsx)(l.x6,{i18nKey:"snapshot.url-column-header",children:"Snapshot url"})})}),(0,s.jsx)("th",{style:{width:"70px"}}),(0,s.jsx)("th",{style:{width:"30px"}}),(0,s.jsx)("th",{style:{width:"25px"}})]})}),(0,s.jsx)("tbody",{children:o?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Skeleton,{}),(0,s.jsx)(i.Skeleton,{}),(0,s.jsx)(i.Skeleton,{})]}):e.map(a=>(0,s.jsx)(i,{snapshot:a,onRemove:()=>c(a)},a.key))})]}),(0,s.jsx)(C.u,{isOpen:!!d,icon:"trash-alt",title:"Delete",body:`Are you sure you want to delete '${d?.name}'?`,confirmText:"Delete",onDismiss:()=>c(void 0),onConfirm:()=>{$(d),c(void 0)}})]})},S=({})=>(0,s.jsx)(j.YW,{navId:"dashboards/snapshots",children:(0,s.jsx)(j.YW.Contents,{children:(0,s.jsx)(K,{})})}),Y=S}}]);

//# sourceMappingURL=SnapshotListPage.f6059ee6526734abdb9b.js.map