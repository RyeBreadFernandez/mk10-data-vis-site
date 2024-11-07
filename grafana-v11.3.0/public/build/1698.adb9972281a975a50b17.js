"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1698],{67004:(A,B,g)=>{g.d(B,{Hj:()=>_,bP:()=>P,h:()=>C});var c=g(74848),n=g(32196),b=g(46942),E=g.n(b),M=g(96540),L=g(84140),T=g(8066),N=g(40845),w=g(14578),I=g(48543);const C=40,S="#a00",R=(r,u)=>({mainGroup:(0,n.css)`
    cursor: pointer;
    font-size: 10px;
    transition: opacity 300ms;
    opacity: ${u==="inactive"?.5:1};
  `,mainCircle:(0,n.css)`
    fill: ${r.components.panel.background};
  `,filledCircle:(0,n.css)`
    fill: ${S};
  `,hoverCircle:(0,n.css)`
    opacity: 0.5;
    fill: transparent;
    stroke: ${r.colors.primary.text};
  `,text:(0,n.css)`
    fill: ${r.colors.text.primary};
    pointer-events: none;
  `,titleText:(0,n.css)`
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    background-color: ${(0,L.A)(r.colors.background.primary).setAlpha(.6).toHex8String()};
    width: 140px;
  `,statsText:(0,n.css)`
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 70px;
  `,textHovering:(0,n.css)`
    width: 200px;
    & span {
      background-color: ${(0,L.A)(r.colors.background.primary).setAlpha(.8).toHex8String()};
    }
  `,clickTarget:(0,n.css)`
    fill: none;
    stroke: none;
    pointer-events: fill;
  `}),_=r=>Math.ceil(r*.075),P=(0,M.memo)(function(u){const{node:l,onMouseEnter:x,onMouseLeave:h,onClick:v,hovering:p}=u,F=(0,N.$j)(),m=R(F,p),a=p==="active",e=l.nodeRadius?.values[l.dataFrameRowIndex]||C,t=_(e);return l.x!==void 0&&l.y!==void 0?(0,c.jsxs)("g",{"data-node-id":l.id,className:m.mainGroup,"aria-label":`Node: ${l.title}`,children:[(0,c.jsx)("circle",{"data-testid":`node-circle-${l.id}`,className:l.highlighted?m.filledCircle:m.mainCircle,r:e,cx:l.x,cy:l.y}),a&&(0,c.jsx)("circle",{className:m.hoverCircle,r:e-3,cx:l.x,cy:l.y,strokeWidth:t}),(0,c.jsx)(D,{node:l}),(0,c.jsxs)("g",{className:m.text,style:{pointerEvents:"none"},children:[(0,c.jsx)(j,{node:l,hovering:p}),(0,c.jsx)("foreignObject",{x:l.x-(a?100:70),y:l.y+e+5,width:a?"200":"140",height:"40",children:(0,c.jsxs)("div",{className:E()(m.titleText,a&&m.textHovering),children:[(0,c.jsx)("span",{children:l.title}),(0,c.jsx)("br",{}),(0,c.jsx)("span",{children:l.subTitle})]})})]}),(0,c.jsx)("rect",{"data-testid":`node-click-rect-${l.id}`,onMouseEnter:()=>{x(l.id)},onMouseLeave:()=>{h(l.id)},onClick:s=>{v(s,l)},className:m.clickTarget,x:l.x-e-5,y:l.y-e-5,width:e*2+10,height:e*2+50})]}):null});function j({node:r,hovering:u}){const l=(0,N.$j)(),x=R(l,u),h=u==="active";return r.x!==void 0&&r.y!==void 0?r.icon?(0,c.jsx)("foreignObject",{x:r.x-35,y:r.y-20,width:"70",height:"40",children:(0,c.jsx)("div",{style:{width:70,overflow:"hidden",display:"flex",justifyContent:"center",marginTop:-4},children:(0,c.jsx)(w.I,{"data-testid":`node-icon-${r.icon}`,name:r.icon,size:"xxxl"})})}):(0,c.jsx)("foreignObject",{x:r.x-(h?100:35),y:r.y-15,width:h?"200":"70",height:"40",children:(0,c.jsxs)("div",{className:E()(x.statsText,h&&x.textHovering),children:[(0,c.jsx)("span",{children:r.mainStat&&(0,I.Xq)(r.mainStat.config,r.mainStat.values[r.dataFrameRowIndex])}),(0,c.jsx)("br",{}),(0,c.jsx)("span",{children:r.secondaryStat&&(0,I.Xq)(r.secondaryStat.config,r.secondaryStat.values[r.dataFrameRowIndex])})]})}):null}function D(r){const{node:u}=r,l=u.arcSections.find(m=>m.values[u.dataFrameRowIndex]>=1),x=(0,N.$j)(),h=u.nodeRadius?.values[u.dataFrameRowIndex]||C,v=_(h);if(l)return(0,c.jsx)("circle",{fill:"none",stroke:x.visualization.getColorByName(l.config.color?.fixedColor||""),strokeWidth:v,r:h,cx:u.x,cy:u.y});const p=u.arcSections.filter(m=>m.values[u.dataFrameRowIndex]!==0);if(p.length===0)return(0,c.jsx)("circle",{fill:"none",stroke:u.color?O(u.color,u.dataFrameRowIndex,x):"gray",strokeWidth:v,r:h,cx:u.x,cy:u.y});const{elements:F}=p.reduce((m,a,e)=>{const t=a.config.color?.fixedColor||"",s=a.values[u.dataFrameRowIndex],o=(0,c.jsx)(k,{r:h,x:u.x,y:u.y,startPercent:m.percent,percent:s+m.percent>1?1-m.percent:s,color:x.visualization.getColorByName(t),strokeWidth:v},e);return m.elements.push(o),m.percent=m.percent+s,m},{elements:[],percent:0});return(0,c.jsx)(c.Fragment,{children:F})}function k({r,x:u,y:l,startPercent:x,percent:h,color:v,strokeWidth:p=2}){const F=x+h,m=u+Math.sin(2*Math.PI*x)*r,a=l-Math.cos(2*Math.PI*x)*r,e=u+Math.sin(2*Math.PI*F)*r,t=l-Math.cos(2*Math.PI*F)*r,s=h>.5?"1":"0";return(0,c.jsx)("path",{fill:"none",d:`M ${m} ${a} A ${r} ${r} 0 ${s} 1 ${e} ${t}`,stroke:v,strokeWidth:p})}function O(r,u,l){return r.config.color?(0,T.Qi)(r).getCalculator(r,l)(0,r.values[u]):r.values[u]}},48543:(A,B,g)=>{g.d(B,{AG:()=>T,BJ:()=>I,BR:()=>h,CP:()=>m,K0:()=>p,Tl:()=>F,Xq:()=>D,_d:()=>x,a0:()=>L,tF:()=>N});var c=g(85404),n=g(25352),b=g(11261),E=g(24293),M=g(67004);function L(a,e,t,s=1){const o=a.x2-a.x1,i=a.y2-a.y1,d=Math.sqrt(o*o+i*i),y=(a.x2-a.x1)/d,f=(a.y2-a.y1)/d,U=s-s/10;return{x1:a.x1+y*(e+5),y1:a.y1+f*(e+5),x2:a.x2-y*(t+3+U),y2:a.y2-f*(t+3+U)}}function T(a){const e={...a,fields:a.fields.map(s=>({...s,name:s.name.toLowerCase()}))},t=new c.L(e);return{id:t.getFieldByName(n.u.id.toLowerCase()),title:t.getFieldByName(n.u.title.toLowerCase()),subTitle:t.getFieldByName(n.u.subTitle.toLowerCase()),mainStat:t.getFieldByName(n.u.mainStat.toLowerCase()),secondaryStat:t.getFieldByName(n.u.secondaryStat.toLowerCase()),arc:w(a,n.u.arc),details:w(a,n.u.detail),color:t.getFieldByName(n.u.color),icon:t.getFieldByName(n.u.icon),nodeRadius:t.getFieldByName(n.u.nodeRadius.toLowerCase()),highlighted:t.getFieldByName(n.u.highlighted.toLowerCase()),fixedX:t.getFieldByName(n.u.fixedX.toLowerCase()),fixedY:t.getFieldByName(n.u.fixedY.toLowerCase())}}function N(a){const e={...a,fields:a.fields.map(s=>({...s,name:s.name.toLowerCase()}))},t=new c.L(e);return{id:t.getFieldByName(n.u.id.toLowerCase()),source:t.getFieldByName(n.u.source.toLowerCase()),target:t.getFieldByName(n.u.target.toLowerCase()),mainStat:t.getFieldByName(n.u.mainStat.toLowerCase()),secondaryStat:t.getFieldByName(n.u.secondaryStat.toLowerCase()),details:w(a,n.u.detail.toLowerCase()),highlighted:t.getFieldByName(n.u.highlighted.toLowerCase()),thickness:t.getFieldByName(n.u.thickness.toLowerCase()),color:t.getFieldByName(n.u.color.toLowerCase()),strokeDasharray:t.getFieldByName(n.u.strokeDasharray.toLowerCase())}}function w(a,e){return a.fields.filter(t=>t.name.match(new RegExp("^"+e)))}function I(a,e){if(!(e||a))return{nodes:[],edges:[]};if(a){const t=T(a);if(!t.id)throw new Error("id field is required for nodes data frame.");const s=t.fixedX&&t.fixedX.values.every(d=>Number.isFinite(d))&&t.fixedY&&t.fixedY.values.every(d=>Number.isFinite(d));if(!s&&(t.fixedX&&t.fixedX.values.some(y=>Number.isFinite(y))||t.fixedY&&t.fixedY.values.some(y=>Number.isFinite(y))))throw new Error("If fixedX and fixedY fields are present, the values have to be all filled and valid");const o={};for(let d=0;d<t.id.values.length;d++){const y=t.id.values[d];o[y]=j(y,t,d)}let i=e?C(e,N(e),o):[];for(const d of i)o[d.target].incoming++;return{nodes:Object.values(o),edges:i,hasFixedPositions:s,legend:t.arc.map(d=>({color:d.config.color?.fixedColor??"",name:d.config.displayName||d.name}))}}else{e=e;const t={},s=N(e);for(let d=0;d<e.length;d++){const{source:y,target:f}=_(s,d);t[f.id]=t[f.id]||f,t[y.id]=t[y.id]||y,S(s.mainStat)&&(t[f.id].mainStatNumeric=(t[f.id].mainStatNumeric??0)+s.mainStat.values[d]),S(s.secondaryStat)&&(t[f.id].secondaryStatNumeric=(t[f.id].secondaryStatNumeric??0)+s.secondaryStat.values[d]),t[f.id].incoming++}let o=C(e,s,t);return{nodes:R(t,s),edges:o,hasFixedPositions:!1}}}function C(a,e,t){if(!e.id)throw new Error("id field is required for edges data frame.");return e.id.values.map((s,o)=>{const i=e.target?.values[o],d=e.source?.values[o],y=t[d],f=t[i];return{id:s,dataFrameRowIndex:o,source:d,target:i,sourceNodeRadius:y.nodeRadius?y.nodeRadius.values[y.dataFrameRowIndex]:M.h,targetNodeRadius:f.nodeRadius?f.nodeRadius.values[f.dataFrameRowIndex]:M.h,mainStat:e.mainStat?D(e.mainStat.config,e.mainStat.values[o]):"",secondaryStat:e.secondaryStat?D(e.secondaryStat.config,e.secondaryStat.values[o]):"",highlighted:e.highlighted?.values[o]||!1,thickness:e.thickness?.values[o]||1,color:e.color?.values[o],strokeDasharray:e.strokeDasharray?.values[o]}})}function S(a){return a&&a.type===b.PU.number}function R(a,e){const t=[],s=[],o=S(e.secondaryStat)?{...e.secondaryStat,values:t}:void 0,i=S(e.mainStat)?{...e.mainStat,values:s}:void 0;return Object.values(a).map((d,y)=>{if(i||o){const f={...d};return i&&(f.mainStat=i,s.push(d.mainStatNumeric),f.dataFrameRowIndex=y),o&&(f.secondaryStat=o,t.push(d.secondaryStatNumeric),f.dataFrameRowIndex=y),f}return d})}function _(a,e){const t=a.target?.values[e],s=a.source?.values[e];return{target:P(t,e),source:P(s,e)}}function P(a,e){return{id:a,title:a,subTitle:"",dataFrameRowIndex:e,incoming:0,arcSections:[],highlighted:!1}}function j(a,e,t){return{id:a,title:e.title?.values[t]||"",subTitle:e.subTitle?.values[t]||"",dataFrameRowIndex:t,incoming:0,mainStat:e.mainStat,secondaryStat:e.secondaryStat,arcSections:e.arc,color:e.color,icon:e.icon?.values[t]||"",nodeRadius:e.nodeRadius,highlighted:e.highlighted?.values[t]||!1,x:e.fixedX?.values[t]??void 0,y:e.fixedY?.values[t]??void 0}}function D(a,e){if(typeof e=="string")return e;{const t=a.decimals||2;return Number.isFinite(e)?e.toFixed(t)+(a.unit?" "+a.unit:""):""}}function k(a){const e=r();for(let t=0;t<a;t++)e.add(O(t));return e}function O(a){return{id:a.toString(),title:`service:${a}`,subtitle:"service",arc__success:.5,arc__errors:.5,mainstat:.1,secondarystat:2,color:.5,icon:"database",noderadius:40}}function r(){const a={[NodeGraphDataFrameFieldNames.id]:{values:[],type:FieldType.string},[NodeGraphDataFrameFieldNames.title]:{values:[],type:FieldType.string},[NodeGraphDataFrameFieldNames.subTitle]:{values:[],type:FieldType.string},[NodeGraphDataFrameFieldNames.mainStat]:{values:[],type:FieldType.number},[NodeGraphDataFrameFieldNames.secondaryStat]:{values:[],type:FieldType.number},[NodeGraphDataFrameFieldNames.arc+"success"]:{values:[],type:FieldType.number,config:{color:{mode:FieldColorModeId.Fixed,fixedColor:"green"}}},[NodeGraphDataFrameFieldNames.arc+"errors"]:{values:[],type:FieldType.number,config:{color:{mode:FieldColorModeId.Fixed,fixedColor:"red"}}},[NodeGraphDataFrameFieldNames.color]:{values:[],type:FieldType.number,config:{color:{mode:FieldColorModeId.ContinuousGrYlRd}}},[NodeGraphDataFrameFieldNames.icon]:{values:[],type:FieldType.string},[NodeGraphDataFrameFieldNames.nodeRadius]:{values:[],type:FieldType.number}};return new MutableDataFrame({name:"nodes",fields:Object.entries(a).map(([e,t])=>({...t,name:e}))})}function u(a){const e=l();for(const t of a)e.add({id:t.source+"--"+t.target,...t});return e}function l(){const a={[NodeGraphDataFrameFieldNames.id]:{values:[],type:FieldType.string},[NodeGraphDataFrameFieldNames.source]:{values:[],type:FieldType.string},[NodeGraphDataFrameFieldNames.target]:{values:[],type:FieldType.string},[NodeGraphDataFrameFieldNames.mainStat]:{values:[],type:FieldType.number},[NodeGraphDataFrameFieldNames.secondaryStat]:{values:[],type:FieldType.number}};return new MutableDataFrame({name:"edges",fields:Object.entries(a).map(([e,t])=>({...t,name:e}))})}function x(a){if(a.length===0)return{top:0,right:0,bottom:0,left:0,center:{x:0,y:0}};const e=a.reduce((o,i)=>(i.x>o.right&&(o.right=i.x),i.x<o.left&&(o.left=i.x),i.y>o.bottom&&(o.bottom=i.y),i.y<o.top&&(o.top=i.y),o),{top:1/0,right:-1/0,bottom:-1/0,left:1/0}),t=e.top+(e.bottom-e.top)/2,s=e.left+(e.right-e.left)/2;return{...e,center:{x:s,y:t}}}function h(a,e){let t=a.filter(s=>!!(s.meta?.preferredVisualisationType==="nodeGraph"||s.name==="nodes"||s.name==="edges"||s.refId==="nodes"||s.refId==="edges"||new c.L(s).getFieldByName(n.u.id)));return e&&(t=v(t,e)),t}const v=(a,e)=>a.map(t=>{if(new c.L(t).getFieldByName(n.u.source.toLowerCase())){if(e?.edges?.mainStatUnit){const o=t.fields.find(i=>i.name.toLowerCase()===n.u.mainStat);o&&(o.config={...o.config,unit:e.edges.mainStatUnit})}if(e?.edges?.secondaryStatUnit){const o=t.fields.find(i=>i.name.toLowerCase()===n.u.secondaryStat);o&&(o.config={...o.config,unit:e.edges.secondaryStatUnit})}}else{if(e?.nodes?.mainStatUnit){const o=t.fields.find(i=>i.name.toLowerCase()===n.u.mainStat);o&&(o.config={...o.config,unit:e.nodes.mainStatUnit})}if(e?.nodes?.secondaryStatUnit){const o=t.fields.find(i=>i.name.toLowerCase()===n.u.secondaryStat);o&&(o.config={...o.config,unit:e.nodes.secondaryStatUnit})}if(e?.nodes?.arcs?.length)for(const o of e.nodes.arcs){const i=t.fields.find(d=>d.name.toLowerCase()===o.field?.toLowerCase());i&&o.color&&(i.config={...i.config,color:{fixedColor:o.color,mode:E.Y.Fixed}})}}return t}),p=(a,e,t)=>{const s=e.find(o=>o.id===t);return s?[...new Set(a.filter(o=>s.source===o.id||s.target===o.id).map(o=>o.id))]:[]},F=(a,e,t)=>{const s=a.find(o=>o.id===t);if(s){const o=e.filter(i=>i.source===s.id||i.target===s.id);return[...new Set(o.flatMap(i=>a.filter(d=>i.source===d.id||i.target===d.id).map(d=>d.id)))]}return[]},m=a=>a.reduce((e,t)=>{const s=t.fields.filter(o=>o.name==="source");return t.name==="edges"||s.length?e.edges.push(t):e.nodes.push(t),e},{edges:[],nodes:[]})}}]);

//# sourceMappingURL=1698.adb9972281a975a50b17.js.map