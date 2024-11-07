"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[7660],{"./src/components/Alert/Alert.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{F:function(){return Alert}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../grafana-e2e-selectors/src/selectors/index.ts"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/ThemeContext.tsx"),_Button_Button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Button/Button.tsx"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Icon/Icon.tsx"),_Layout_Box_Box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layout/Box/Box.tsx"),_Text_Text__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Text/Text.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Alert=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function(_param,ref){var title=_param.title,onRemove=_param.onRemove,children=_param.children,buttonContent=_param.buttonContent,elevated=_param.elevated,bottomSpacing=_param.bottomSpacing,topSpacing=_param.topSpacing,className=_param.className,_param_severity=_param.severity,severity=void 0===_param_severity?"error":_param_severity,restProps=_object_without_properties(_param,["title","onRemove","children","buttonContent","elevated","bottomSpacing","topSpacing","className","severity"]),theme=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.$j)(),hasTitle=Boolean(title),styles=getStyles(theme,severity,hasTitle,elevated,bottomSpacing,topSpacing),role=restProps.role||{error:"alert",warning:"alert",info:"status",success:"status"}[severity],ariaLabel=restProps["aria-label"]||title;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({ref:ref,className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.wrapper,className),role:role,"aria-label":ariaLabel},restProps),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Box_Box__WEBPACK_IMPORTED_MODULE_4__.a,{"data-testid":_grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.Tp.components.Alert.alertV2(severity),display:"flex",backgroundColor:severity,borderRadius:"default",paddingY:1,paddingX:2,borderStyle:"solid",borderColor:severity,alignItems:"stretch",boxShadow:elevated?"z3":void 0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Layout_Box_Box__WEBPACK_IMPORTED_MODULE_4__.a,{paddingTop:1,paddingRight:2,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:styles.icon,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__.I,{size:"xl",name:getIconFromSeverity(severity)})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Box_Box__WEBPACK_IMPORTED_MODULE_4__.a,{paddingY:1,grow:1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_7__.E,{color:"primary",weight:"medium",children:title}),children&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:styles.content,children:children})]}),onRemove&&!buttonContent&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:styles.close,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_8__.$n,{"aria-label":"Close alert",icon:"times",onClick:onRemove,type:"button",fill:"text",variant:"secondary"})}),onRemove&&buttonContent&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Layout_Box_Box__WEBPACK_IMPORTED_MODULE_4__.a,{marginLeft:1,display:"flex",alignItems:"center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_8__.$n,{"aria-label":"Close alert",variant:"secondary",onClick:onRemove,type:"button",children:buttonContent})})]})}))}));Alert.displayName="Alert";var getIconFromSeverity=function(severity){switch(severity){case"error":return"exclamation-circle";case"warning":return"exclamation-triangle";case"info":return"info-circle";case"success":return"check"}},getStyles=function(theme,severity,hasTitle,elevated,bottomSpacing,topSpacing){var color=theme.colors[severity];return{wrapper:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({flexGrow:1,marginBottom:theme.spacing(null!=bottomSpacing?bottomSpacing:2),marginTop:theme.spacing(null!=topSpacing?topSpacing:0),position:"relative","&:before":{content:'""',position:"absolute",top:0,left:0,bottom:0,right:0,background:theme.colors.background.primary,zIndex:-1}}),icon:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({color:color.text,position:"relative",top:"-1px"}),content:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({color:theme.colors.text.primary,paddingTop:hasTitle?theme.spacing(.5):0,maxHeight:"50vh",overflowY:"auto"}),close:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({position:"relative",color:theme.colors.text.secondary,background:"none",display:"flex",top:"-6px",right:"-14px"})}};try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onRemove:{defaultValue:null,description:"On click handler for alert button, mostly used for dismissing the alert",name:"onRemove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},severity:{defaultValue:{value:"error"},description:"",name:"severity",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"warning"'}]}},elevated:{defaultValue:null,description:"",name:"elevated",required:!1,type:{name:"boolean"}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!1,type:{name:"ReactNode"}},bottomSpacing:{defaultValue:null,description:"",name:"bottomSpacing",required:!1,type:{name:"number"}},topSpacing:{defaultValue:null,description:"",name:"topSpacing",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"src/components/Alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layout/Box/Box.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return Box}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/ThemeContext.tsx"),_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Layout/utils/responsiveness.tsx"),_utils_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layout/utils/styles.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Box=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function(props,ref){var children=props.children,margin=props.margin,marginX=props.marginX,marginY=props.marginY,marginTop=props.marginTop,marginBottom=props.marginBottom,marginLeft=props.marginLeft,marginRight=props.marginRight,padding=props.padding,paddingX=props.paddingX,paddingY=props.paddingY,paddingTop=props.paddingTop,paddingBottom=props.paddingBottom,paddingLeft=props.paddingLeft,paddingRight=props.paddingRight,display=props.display,backgroundColor=props.backgroundColor,grow=props.grow,shrink=props.shrink,basis=props.basis,flex=props.flex,borderColor=props.borderColor,borderStyle=props.borderStyle,borderRadius=props.borderRadius,direction=props.direction,justifyContent=props.justifyContent,alignItems=props.alignItems,boxShadow=props.boxShadow,element=props.element,gap=props.gap,width=props.width,minWidth=props.minWidth,maxWidth=props.maxWidth,height=props.height,minHeight=props.minHeight,maxHeight=props.maxHeight,rest=_object_without_properties(props,["children","margin","marginX","marginY","marginTop","marginBottom","marginLeft","marginRight","padding","paddingX","paddingY","paddingTop","paddingBottom","paddingLeft","paddingRight","display","backgroundColor","grow","shrink","basis","flex","borderColor","borderStyle","borderRadius","direction","justifyContent","alignItems","boxShadow","element","gap","width","minWidth","maxWidth","height","minHeight","maxHeight"]),styles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(getStyles,margin,marginX,marginY,marginTop,marginBottom,marginLeft,marginRight,padding,paddingX,paddingY,paddingTop,paddingBottom,paddingLeft,paddingRight,display,backgroundColor,grow,shrink,basis,flex,borderColor,borderStyle,borderRadius,direction,justifyContent,alignItems,boxShadow,gap),sizeStyles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(_utils_styles__WEBPACK_IMPORTED_MODULE_4__.E,width,minWidth,maxWidth,height,minHeight,maxHeight),Element=null!=element?element:"div";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Element,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({ref:ref,className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.root,sizeStyles)},rest),{children:children}))}));Box.displayName="Box";var customBorderColor=function(color,theme){switch(color){case"error":case"success":case"info":case"warning":return theme.colors[color].borderTransparent;default:return color?theme.colors.border[color]:void 0}},customBackgroundColor=function(color,theme){switch(color){case"error":case"success":case"info":case"warning":return theme.colors[color].transparent;default:return color?theme.colors.background[color]:void 0}},getStyles=function(theme,margin,marginX,marginY,marginTop,marginBottom,marginLeft,marginRight,padding,paddingX,paddingY,paddingTop,paddingBottom,paddingLeft,paddingRight,display,backgroundColor,grow,shrink,basis,flex,borderColor,borderStyle,borderRadius,direction,justifyContent,alignItems,boxShadow,gap){return{root:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)([(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,margin,(function(val){return{margin:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,marginX,(function(val){return{marginLeft:theme.spacing(val),marginRight:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,marginY,(function(val){return{marginTop:theme.spacing(val),marginBottom:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,marginTop,(function(val){return{marginTop:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,marginBottom,(function(val){return{marginBottom:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,marginLeft,(function(val){return{marginLeft:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,marginRight,(function(val){return{marginRight:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,padding,(function(val){return{padding:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,paddingX,(function(val){return{paddingLeft:theme.spacing(val),paddingRight:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,paddingY,(function(val){return{paddingTop:theme.spacing(val),paddingBottom:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,paddingTop,(function(val){return{paddingTop:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,paddingBottom,(function(val){return{paddingBottom:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,paddingLeft,(function(val){return{paddingLeft:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,paddingRight,(function(val){return{paddingRight:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,display,(function(val){return{display:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,backgroundColor,(function(val){return{backgroundColor:customBackgroundColor(val,theme)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,direction,(function(val){return{flexDirection:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,grow,(function(val){return{flexGrow:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,shrink,(function(val){return{flexShrink:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,basis,(function(val){return{flexBasis:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,flex,(function(val){return{flex:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,borderStyle,(function(val){return{borderStyle:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,borderColor,(function(val){return{borderColor:customBorderColor(val,theme)}})),(borderStyle||borderColor)&&{borderWidth:"1px"},(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,justifyContent,(function(val){return{justifyContent:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,alignItems,(function(val){return{alignItems:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,borderRadius,(function(val){return{borderRadius:theme.shape.radius[val]}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,boxShadow,(function(val){return{boxShadow:theme.shadows[val]}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,gap,(function(val){return{gap:theme.spacing(val)}}))])}};try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{margin:{defaultValue:null,description:"Sets the property `margin`",name:"margin",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginX:{defaultValue:null,description:"Sets the properties `margin-top` and `margin-bottom`. Higher priority than margin.",name:"marginX",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginY:{defaultValue:null,description:"Sets the properties `margin-left` and `margin-right`. Higher priority than margin.",name:"marginY",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginTop:{defaultValue:null,description:"Sets the property `margin-top`. Higher priority than margin and marginY.",name:"marginTop",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginBottom:{defaultValue:null,description:"Sets the property `margin-bottom`. Higher priority than margin and marginXY",name:"marginBottom",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginLeft:{defaultValue:null,description:"Sets the property `margin-left`. Higher priority than margin and marginX.",name:"marginLeft",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginRight:{defaultValue:null,description:"Sets the property `margin-right`. Higher priority than margin and marginX.",name:"marginRight",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},padding:{defaultValue:null,description:"Sets the property `padding`",name:"padding",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingX:{defaultValue:null,description:"Sets the properties `padding-top` and `padding-bottom`. Higher priority than padding.",name:"paddingX",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingY:{defaultValue:null,description:"Sets the properties `padding-left` and `padding-right`. Higher priority than padding.",name:"paddingY",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingTop:{defaultValue:null,description:"Sets the property `padding-top`. Higher priority than padding and paddingY.",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingBottom:{defaultValue:null,description:"Sets the property `padding-bottom`. Higher priority than padding and paddingY.",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingLeft:{defaultValue:null,description:"Sets the property `padding-left`. Higher priority than padding and paddingX.",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingRight:{defaultValue:null,description:"Sets the property `padding-right`. Higher priority than padding and paddingX.",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:"ResponsiveProp<BorderStyle>"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"ResponsiveProp<BorderColor>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveProp<keyof Radii>"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveProp<AlignItems>"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"ResponsiveProp<Direction>"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveProp<JustifyContent>"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"ResponsiveProp<BackgroundColor>"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"ResponsiveProp<Display>"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveProp<keyof ThemeShadows>"}},element:{defaultValue:null,description:"Sets the HTML element that will be rendered as a Box. Defaults to 'div'",name:"element",required:!1,type:{name:"ElementType"}},grow:{defaultValue:null,description:"Sets the property `flex-grow`",name:"grow",required:!1,type:{name:"ResponsiveProp<number>"}},shrink:{defaultValue:null,description:"Sets the property `flex-shrink`",name:"shrink",required:!1,type:{name:"ResponsiveProp<number>"}},basis:{defaultValue:null,description:"Sets the property `flex-basis`",name:"basis",required:!1,type:{name:"ResponsiveProp<FlexBasis>"}},flex:{defaultValue:null,description:"Sets the property `flex`",name:"flex",required:!1,type:{name:"ResponsiveProp<Flex>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveProp<MinWidth<number>>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveProp<MaxWidth<number>>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveProp<Width<number>>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveProp<MinHeight<number>>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveProp<MaxHeight<number>>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveProp<Height<number>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Box/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/Layout/Box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layout/utils/responsiveness.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function breakpointCSS(theme,prop,getCSS,key){var value=prop[key];if(null!=value)return function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({},theme.breakpoints.up(key),getCSS(value))}function getResponsiveStyle(theme,prop,getCSS){return null==prop?null:"object"==typeof prop&&"xs"in prop?[breakpointCSS(theme,prop,getCSS,"xs"),breakpointCSS(theme,prop,getCSS,"sm"),breakpointCSS(theme,prop,getCSS,"md"),breakpointCSS(theme,prop,getCSS,"lg"),breakpointCSS(theme,prop,getCSS,"xl"),breakpointCSS(theme,prop,getCSS,"xxl")]:getCSS(prop)}__webpack_require__.d(__webpack_exports__,{Y:function(){return getResponsiveStyle}});try{getResponsiveStyle.displayName="getResponsiveStyle",getResponsiveStyle.__docgenInfo={description:"Function that converts a ResponsiveProp object into CSS",displayName:"getResponsiveStyle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"]={docgenInfo:getResponsiveStyle.__docgenInfo,name:"getResponsiveStyle",path:"src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layout/utils/styles.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return getSizeStyles}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_responsiveness__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Layout/utils/responsiveness.tsx"),getSizeStyles=function(theme,width,minWidth,maxWidth,height,minHeight,maxHeight){return(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)([(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,width,(function(val){return{width:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,minWidth,(function(val){return{minWidth:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,maxWidth,(function(val){return{maxWidth:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,height,(function(val){return{height:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,minHeight,(function(val){return{minHeight:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,maxHeight,(function(val){return{maxHeight:theme.spacing(val)}}))])}}}]);