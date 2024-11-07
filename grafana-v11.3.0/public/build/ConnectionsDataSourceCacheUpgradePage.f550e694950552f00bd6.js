"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5346],{7521:(b,E,e)=>{e.d(E,{A:()=>R});var t=e(74848),s=e(32196),l=e(13544),r=e(14578),o=e(42418),D=e(55852),T=e(76442);const m=(0,s.css)({textAlign:"center"}),L=(0,s.css)({maxWidth:"700px",margin:"0 auto"}),R=({title:I,buttonIcon:O,buttonLink:B,buttonTitle:z,buttonDisabled:x,onClick:S,proTip:M,proTipLink:K,proTipLinkTitle:A,proTipTarget:$,infoBox:N,infoBoxTitle:Q})=>{const p=()=>(0,t.jsxs)(t.Fragment,{children:[M?(0,t.jsxs)("span",{children:[(0,t.jsx)(r.I,{name:"rocket"}),(0,t.jsxs)(t.Fragment,{children:[" ProTip: ",M," "]}),K&&(0,t.jsx)("a",{href:K,target:$,className:"text-link",children:A})]},"proTipFooter"):"",N?(0,t.jsx)(o.F,{severity:"info",title:Q??"",className:L,children:(0,t.jsx)("div",{dangerouslySetInnerHTML:N})}):""]}),_=p()?"":(0,s.css)({marginBottom:"20px"}),c=B?D.z9:D.$n,u=(0,t.jsx)(c,{size:"lg",onClick:S,href:B,icon:O,className:_,"data-testid":l.Tp.components.CallToActionCard.buttonV2(z),disabled:x,children:z});return(0,t.jsx)(T.c,{className:m,message:I,footer:p(),callToActionElement:u})}},2889:(b,E,e)=>{e.d(E,{jG:()=>y,Ay:()=>Y});var t=e(74848),s=e(96540),l=e(71468),r=e(67061),o=e(40845),D=e(77454),T=e(10096),m=e(35538),L=e(34258),P=e(13680),R=e(7521);const I=i=>{const{enableDataSourceCache:v,dataSource:U,pageId:C}=i,W=T.TP.hasPermissionInMetadata(P.AccessControlAction.DataSourcesCachingWrite,U);return U.jsonData?.disableGrafanaCache?(0,t.jsx)(R.A,{title:"Caching cannot be enabled for this data source.",buttonTitle:"Enable",buttonIcon:"database",proTip:"This data source's configuration does not permit caching to be enabled.",buttonDisabled:!0}):(0,t.jsx)(R.A,{title:"Caching is not enabled for this data source.",buttonTitle:"Enable",buttonIcon:"database",onClick:()=>{v(C)},proTip:"Enabling caching can reduce the amount of redundant requests sent to the data source.",proTipLink:"https://grafana.com/docs/grafana/latest/enterprise/query-caching/",proTipLinkTitle:"Learn more",buttonDisabled:!W})};var O=e(55852),B=e(96374);const z=i=>{const{cleanCache:v,dataSource:U,pageId:C}=i,[W,j]=(0,s.useState)(!1),F=d=>()=>{j(d)},a=()=>{v(C),j(!1)},n=T.TP.hasPermissionInMetadata(P.AccessControlAction.DataSourcesCachingWrite,U);return(0,t.jsxs)("div",{children:[(0,t.jsx)(O.$n,{variant:"destructive",onClick:F(!0),disabled:!n,children:"Clear cache"}),(0,t.jsx)(B.u,{isOpen:W,title:"Clear cache",body:"Warning: This action impacts all cache-enabled data sources. If you are using Memcached, the system clears all data from the Memcached instance. Do you want to continue?",confirmText:"Clear cache",onConfirm:a,onDismiss:F(!1)})]})};var x=e(88575),S=e(15292),M=e(10354),K=e(60029),A=e(56034),$=e(14578);const N=i=>{const{disableDataSourceCache:v,dataSource:U,pageId:C}=i,W=T.TP.hasPermissionInMetadata(P.AccessControlAction.DataSourcesCachingWrite,U);return(0,t.jsx)(O.$n,{variant:"destructive",onClick:()=>v(C),disabled:!W,children:"Disable"})},Q=i=>{const{updateDataSourceCache:v,pageId:U,useDefaultTTL:C,setUseDefaultTTL:W,defaultTTLMs:j,ttlQueriesMs:F,setTtlQueriesMs:a,ttlResourcesMs:n,setTtlResourcesMs:d,loading:h,enabled:f,dataSource:G,dataSourceID:X,dataSourceUID:H}=i,J=T.TP.hasPermissionInMetadata(P.AccessControlAction.DataSourcesCachingWrite,G);return(0,t.jsxs)(r.B,{direction:"column",alignItems:"flex-start",children:[(0,t.jsx)(x.D,{description:`Enable this to use the default TTL set in Grafana's configuration (${j} ms)`,label:"Use default TTL",disabled:h||!J,children:(0,t.jsx)(S.d,{value:C,onChange:()=>{W(!C)}})}),(0,t.jsx)(x.D,{description:"The time-to-live for a query cache item in milliseconds. Example: 5000",label:"Query TTL",disabled:h||C||!J,children:(0,t.jsx)(M.p,{type:"number",className:"max-width-10",placeholder:"1000",min:0,value:(C?j:F)||0,onChange:V=>{a(V.currentTarget.valueAsNumber)}})}),(0,t.jsx)(x.D,{description:"The time-to-live for resources cache items in milliseconds. Example: 5000",label:(0,t.jsxs)(K.J,{children:[(0,t.jsx)("span",{children:"Resource TTL"}),(0,t.jsx)(A.m,{content:(0,t.jsxs)("div",{children:["Resources are dynamic values that Grafana data source plugins retrieve from data sources for use in the query editor. Examples are Splunk namespaces, Prometheus labels, and CloudWatch metric names. Since these values update less frequently, you might prefer a longer cache TTL for Resources than queries. See the ",(0,t.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/enterprise/query-caching/",children:"docs"})," ","for more info."]}),children:(0,t.jsx)($.I,{name:"question-circle"})})]}),disabled:h||C||!J,children:(0,t.jsx)(M.p,{type:"number",className:"max-width-10",placeholder:"1000",min:0,value:(C?j:n)||0,onChange:V=>{d(V.currentTarget.valueAsNumber)}})}),(0,t.jsxs)(r.B,{gap:2,alignItems:"flex-start",justifyContent:"flex-start",children:[(0,t.jsx)(N,{...i}),(0,t.jsx)(O.$n,{disabled:h||!J,onClick:()=>v(U,{dataSourceID:X,dataSourceUID:H,enabled:f,defaultTTLMs:j,ttlQueriesMs:F,ttlResourcesMs:n,useDefaultTTL:C}),children:"Save"})]})]})};var p=e(69841);function _(i,v){return{...i.dataSourceCache,pageId:v.uid,dataSource:i.dataSources.dataSource}}const c={disableDataSourceCache:p.wn,updateDataSourceCache:p.$b,enableDataSourceCache:p.lx,loadDataSourceCache:p.W3,loadDataSource:L.ak,cleanCache:p.gn,loadDataSourceMeta:L.xI},u=(0,l.connect)(_,c),g=i=>{const[v,U]=(0,s.useState)(i.enabled),[C,W]=(0,s.useState)(!0),[j,F]=(0,s.useState)(i.useDefaultTTL),[a,n]=(0,s.useState)(i.ttlQueriesMs),[d,h]=(0,s.useState)(i.ttlResourcesMs),{pageId:f,dataSource:G,loadDataSource:X,loadDataSourceCache:H,loadDataSourceMeta:J,enableDataSourceCache:V}=i;(0,s.useEffect)(()=>{U(G.jsonData?.disableGrafanaCache?!1:i.enabled),F(i.useDefaultTTL),n(i.ttlQueriesMs),h(i.ttlResourcesMs),W(!1)},[i.useDefaultTTL,i.ttlQueriesMs,i.ttlResourcesMs,i.enabled,G.jsonData?.disableGrafanaCache]),(0,s.useEffect)(()=>{X(f).then(J),H(f)},[H,X,J,f]);const Z=T.TP.hasPermissionInMetadata(P.AccessControlAction.DataSourcesCachingWrite,G),k=v?Q({...i,loading:C,useDefaultTTL:j,setUseDefaultTTL:F,ttlQueriesMs:a,setTtlQueriesMs:n,ttlResourcesMs:d,setTtlResourcesMs:h}):(0,m.z5)()?(0,t.jsx)(y,{action:Z?{text:"Enable caching",onClick:()=>{V(f)}}:void 0}):I(i);return(0,t.jsxs)(t.Fragment,{children:[(0,m.z5)()&&(0,t.jsx)(D.Iz,{featureId:"query-caching",eventVariant:"trial",featureName:"query caching",text:"Enable query caching for free during your trial of Grafana Pro."}),(0,t.jsxs)("div",{className:"page-action-bar",children:[v&&!(0,m.z5)()&&(0,t.jsx)("h3",{className:"page-sub-heading",children:"Caching"}),(0,t.jsx)("div",{className:"page-action-bar__spacer"}),(0,t.jsx)(r.B,{gap:2,alignItems:"flex-end",justifyContent:"flex-end",children:v&&(0,t.jsx)(z,{...i})})]}),k]})},y=({action:i})=>{const v=(0,o.$j)();return(0,t.jsx)(D.El,{action:i,listItems:["Load dashboards in less than a second from the cache, even when they include big queries and lots of users are looking at once","Save money and avoid rate limiting by reducing the number of API calls you make to data sources like Splunk, CloudWatch and Github","Author dashboards more smoothly by caching the data used to construct queries, like fields in ServiceNow or metrics available from Datadog"],image:`query-caching-${v.isLight?"light":"dark"}.png`,featureUrl:"https://grafana.com/docs/grafana/latest/enterprise/query-caching",featureName:"query caching",description:"With query caching, you can load dashboards faster and reduce costly queries to data sources by temporarily storing query results in memory, Redis, or Memcached."})},Y=u(g)},20843:(b,E,e)=>{e.d(E,{Y:()=>o});var t=e(74848),s=e(77454),l=e(85464),r=e(2889);const o=({uid:D})=>((0,l.oU)(D),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Iz,{featureName:"query caching",featureId:"query-caching"}),(0,t.jsx)(r.jG,{})]}))},99726:(b,E,e)=>{e.r(E),e.d(E,{DataSourceCacheUpgradePage:()=>D,default:()=>T});var t=e(74848),s=e(54148),l=e(21780),r=e(31152),o=e(20843);const D=()=>{const{uid:m=""}=(0,s.g)(),{navId:L,pageNav:P}=(0,r.n)("cache");return(0,t.jsx)(l.YW,{navId:L,pageNav:P,children:(0,t.jsx)(l.YW.Contents,{children:(0,t.jsx)(o.Y,{uid:m})})})},T=D},31152:(b,E,e)=>{e.d(E,{n:()=>m});var t=e(24180),s=e(19347),l=e(17422),r=e(11084),o=e(74984),D=e(83391),T=e(31678);function m(L){const{uid:P}=(0,t.g)(),R=(0,t.zy)(),I=(0,r.xw)(P),O=(0,r.S4)(I.type),B=(0,D.ob)(I.type),z=new URLSearchParams(R.search),x=L||z.get("page"),{plugin:S,loadError:M,loading:K}=(0,r._e)(),A=(0,s.l)()?.getInstanceSettings(P),$=!!(A?.meta?.alerting??!1),N=A?.type==="alertmanager",Q=$||N,p=(0,T.useSelector)(g=>g.navIndex),_=x?`datasource-${x}-${P}`:`datasource-settings-${P}`;let c={node:{text:"Data Source Nav Node"},main:{text:"Data Source Nav Node"}};if(M){const g={text:M,subTitle:"Data Source Error",icon:"exclamation-triangle"};c={node:g,main:g}}return(K||!S)&&(c=(0,l.tc)(p,_,(0,o.$m)("settings"))),S&&(c=(0,l.tc)(p,_,(0,o.Vh)((0,o.R4)(I,S),x||"settings"))),{navId:"connections-datasources",pageNav:{...c.main,dataSourcePluginName:B?.name||S?.meta.name||"",active:!0,text:I.name,subTitle:`Type: ${O.name}`,children:(c.main.children||[]).map(g=>({...g,url:g.url?.replace("datasources/edit/","/connections/datasources/edit/")}))},dataSourceHeader:{alertingSupported:Q}}}},458:(b,E,e)=>{e.d(E,{C:()=>l});var t=e(96540),s=e(83883);const l=(0,t.createContext)(s.I)},11084:(b,E,e)=>{e.d(E,{$k:()=>K,BY:()=>O,S4:()=>N,Tn:()=>$,US:()=>B,Um:()=>S,_e:()=>Q,aM:()=>_,hx:()=>x,k9:()=>M,oU:()=>I,u1:()=>p,xw:()=>A});var t=e(96540),s=e(97007),l=e(28138),r=e(10096),o=e(31678),D=e(28444),T=e(11959),m=e(34258),L=e(458),P=e(36227),R=e(54226);const I=c=>{const u=(0,o.useDispatch)();(0,t.useEffect)(()=>(u((0,m.PK)(c)),function(){u((0,s.N)({cleanupAction:y=>y.dataSourceSettings=P.IJ}))}),[c,u])},O=c=>{const u=(0,o.useDispatch)(),g=_();return()=>u((0,m.Ge)(c,g.Edit))},B=()=>{const c=(0,o.useDispatch)(),u=(0,o.useSelector)(y=>y.dataSources.isLoadingDataSources),g=(0,o.useSelector)(y=>y.dataSources.dataSources);return(0,t.useEffect)(()=>{c((0,m.bn)())},[c]),{isLoading:u,dataSources:g}},z=c=>{const u=useDispatch();useEffect(()=>{u(loadDataSource(c))},[u,c])},x=()=>{const c=(0,o.useDispatch)();(0,t.useEffect)(()=>{c((0,m.G2)())},[c])},S=()=>{const c=(0,o.useDispatch)(),u=_();return g=>{c((0,m.du)(g,u.Edit))}},M=()=>{const c=(0,o.useDispatch)();return async u=>c((0,m.jB)(u))},K=()=>{const c=(0,o.useDispatch)(),{name:u}=(0,o.useSelector)(g=>g.dataSources.dataSource);return()=>{l.A.publish(new D.bY({title:"Delete",text:`Are you sure you want to delete the "${u}" data source?`,yesText:"Delete",icon:"trash-alt",onConfirm:()=>c((0,m.Qq)())}))}},A=c=>(0,o.useSelector)(u=>(0,R.U4)(u.dataSources,c)),$=c=>{const u=A(c);return(0,T.h)(u)},N=c=>(0,o.useSelector)(u=>(0,R.Fj)(u.dataSources,c)),Q=()=>(0,o.useSelector)(c=>c.dataSourceSettings),p=c=>{const u=A(c),g=u.readOnly===!0,y=r.TP.hasPermissionInMetadata(o.AccessControlAction.DataSourcesWrite,u),Y=r.TP.hasPermissionInMetadata(o.AccessControlAction.DataSourcesDelete,u);return{readOnly:g,hasWriteRights:y,hasDeleteRights:Y}},_=()=>(0,t.useContext)(L.C)},85464:(b,E,e)=>{e.d(E,{$k:()=>l.$k,$m:()=>r.$m,BY:()=>l.BY,Bs:()=>o.Bs,CR:()=>s.C,C_:()=>o.C_,S4:()=>l.S4,Tk:()=>o.Tk,Tn:()=>l.Tn,US:()=>l.US,Um:()=>l.Um,_e:()=>l._e,aM:()=>l.aM,du:()=>t.du,eB:()=>o.eB,hp:()=>D.hp,hx:()=>l.hx,jz:()=>o.jz,k9:()=>l.k9,lv:()=>D.lv,oU:()=>l.oU,rb:()=>o.rb,u1:()=>l.u1,wC:()=>D.wC,xs:()=>D.xs,xw:()=>l.xw,zC:()=>D.zC});var t=e(34258),s=e(458),l=e(11084),r=e(74984),o=e(36227),D=e(54226)},11959:(b,E,e)=>{e.d(E,{h:()=>l});var t=e(76885),s=e(71733);const l=r=>{const o=JSON.stringify({datasource:r.name,context:"explore"});return t.kM.renderUrl(s.I.assureBaseUrl("/explore"),{left:o})}},83391:(b,E,e)=>{e.d(E,{A5:()=>F,wr:()=>i,m5:()=>Y,PW:()=>A,F9:()=>p,ob:()=>N,sM:()=>$,xX:()=>_,XN:()=>v,pw:()=>g,Gp:()=>u,qG:()=>U,SQ:()=>c});var t=e(96540),s=e(31678),l=e(5129),r=e(20701),o=e(25508),D=e(54479),T=e(14110),m=e(66253),L=e(31326);const P=a=>a.plugins,R=(0,o.Mz)(P,({items:a})=>a),{selectAll:I,selectById:O}=L.AI.getSelectors(R),B=a=>(0,o.Mz)(I,n=>{const d=a.keyword?(0,D.xb)(a.keyword.toLowerCase()):"",h=d!==""?(0,l.TD)(n,d):null;return d&&(0,T.rR)("plugins_search",{resultsCount:h?.length}),n.filter(f=>!(d&&h==null||d&&!h?.includes(f.id)||a.type&&f.type!==a.type||a.isInstalled!==void 0&&f.isInstalled!==a.isInstalled||a.isEnterprise!==void 0&&f.isEnterprise!==a.isEnterprise||a.hasUpdate!==void 0&&(f.hasUpdate!==a.hasUpdate||!(0,l.R7)(f))))}),z=a=>(0,o.Mz)(I,n=>{const d=[];for(const h of n)h.error&&(!a||h.type===a)&&d.push({pluginId:h.id,errorCode:h.error,pluginType:h.type});return d}),x=a=>(0,o.Mz)(P,({requests:n={}})=>n[a]),S=a=>(0,o.Mz)(x(a),n=>n?.status===m.IZ.Pending),M=a=>(0,o.Mz)(x(a),n=>n?.status===m.IZ.Rejected?n?.error:null),K=a=>(0,o.Mz)(x(a),n=>n===void 0),A=(a,n=l.by.nameAsc)=>{C();const d=(0,t.useMemo)(()=>B(a),[a]),h=(0,s.useSelector)(d),{isLoading:f,error:G}=y(),X=(0,l.Xc)(h,n);return{isLoading:f,error:G,plugins:X}},$=()=>{const{isLoading:a}=Y(),{plugins:n}=A({isInstalled:!0}),d=n.filter(l.R7);return{isLoading:a,updatablePlugins:d}},N=a=>(C(),j(a),(0,s.useSelector)(n=>O(n,a))),Q=a=>(W(),useSelector(n=>selectById(n,a))),p=a=>(C(),(0,s.useSelector)(z(a))),_=()=>{const a=(0,s.useDispatch)();return(n,d,h)=>a((0,r.ai)({id:n,version:d,isUpdating:h}))},c=()=>{const a=(0,s.useDispatch)();return()=>a((0,r.nT)())},u=()=>{const a=(0,s.useDispatch)();return n=>a((0,r.JC)(n))},g=()=>(0,s.useSelector)(M(r.JJ.typePrefix))===null,y=()=>{const a=(0,s.useSelector)(S("plugins/fetchLocal")),n=(0,s.useSelector)(M("plugins/fetchLocal"));return{isLoading:a,error:n}},Y=()=>{const a=(0,s.useSelector)(S(r.mj.typePrefix)),n=(0,s.useSelector)(S("plugins/fetchLocal")),d=(0,s.useSelector)(S("plugins/fetchRemote")),h=a||n||d,f=(0,s.useSelector)(M(r.mj.typePrefix));return{isLoading:h,error:f}},i=()=>{const a=(0,s.useSelector)(S(r.t5.typePrefix)),n=(0,s.useSelector)(M(r.t5.typePrefix));return{isLoading:a,error:n}},v=()=>{const a=(0,s.useSelector)(S(r.ai.typePrefix)),n=(0,s.useSelector)(M(r.ai.typePrefix));return{isInstalling:a,error:n}},U=()=>{const a=(0,s.useSelector)(S(r.JC.typePrefix)),n=(0,s.useSelector)(M(r.JC.typePrefix));return{isUninstalling:a,error:n}},C=()=>{const a=(0,s.useDispatch)(),n=(0,s.useSelector)(K(r.mj.typePrefix));(0,t.useEffect)(()=>{n&&a((0,r.mj)())},[])},W=()=>{const a=useDispatch(),n=useSelector(selectIsRequestNotFetched(fetchAllLocal.typePrefix));useEffect(()=>{n&&a(fetchAllLocal())},[])},j=a=>{const n=(0,s.useDispatch)(),d=(0,s.useSelector)(G=>O(G,a)),f=!(0,s.useSelector)(S(r.t5.typePrefix))&&d&&!d.details;(0,t.useEffect)(()=>{f&&n((0,r.t5)(a))},[d])},F=()=>{const a=(0,s.useDispatch)();return n=>a((0,r.t5)(n))}}}]);

//# sourceMappingURL=ConnectionsDataSourceCacheUpgradePage.f550e694950552f00bd6.js.map