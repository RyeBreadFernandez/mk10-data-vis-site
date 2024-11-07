"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[1039],{"../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}__webpack_require__.d(__webpack_exports__,{A:function(){return _classCallCheck}})},"../../node_modules/@babel/runtime/helpers/esm/createClass.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return _createClass}});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(o.key),o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}},"../../node_modules/@babel/runtime/helpers/esm/createSuper.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return _createSuper}});var getPrototypeOf=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),isNativeReflectConstruct=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js"),esm_typeof=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/typeof.js"),assertThisInitialized=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");function _createSuper(t){var r=(0,isNativeReflectConstruct.A)();return function(){var e,o=(0,getPrototypeOf.A)(t);if(r){var s=(0,getPrototypeOf.A)(this).constructor;e=Reflect.construct(o,arguments,s)}else e=o.apply(this,arguments);return function _possibleConstructorReturn(t,e){if(e&&("object"==(0,esm_typeof.A)(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,assertThisInitialized.A)(t)}(this,e)}}},"../../node_modules/@babel/runtime/helpers/esm/inherits.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return _inherits}});var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&(0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t,e)}},"./src/components/Slider/styles.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return getStyles}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");__webpack_require__("../../node_modules/rc-slider/assets/index.css");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n      .rc-slider {\n        display: flex;\n        flex-grow: 1;\n        margin-left: 7px; // half the size of the handle to align handle to the left on 0 value\n      }\n      .rc-slider-mark {\n        top: ",";\n      }\n      .rc-slider-mark-text {\n        color: ",";\n        font-size: ",";\n      }\n      .rc-slider-mark-text-active {\n        color: ",";\n      }\n      .rc-slider-handle {\n        border: none;\n        background-color: ",";\n        box-shadow: ",";\n        cursor: pointer;\n        opacity: 1;\n      }\n\n      .rc-slider-handle:hover,\n      .rc-slider-handle:active,\n      .rc-slider-handle-click-focused:focus {\n        ",";\n      }\n\n      // The triple class names is needed because that's the specificity used in the source css :(\n      .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging,\n      .rc-slider-handle:focus-visible {\n        box-shadow: 0 0 0 5px ",";\n      }\n\n      .rc-slider-dot,\n      .rc-slider-dot-active {\n        background-color: ",";\n        border-color: ",";\n      }\n\n      .rc-slider-track {\n        background-color: ",";\n      }\n      .rc-slider-rail {\n        background-color: ",";\n        cursor: pointer;\n      }\n    "]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n      body {\n        .rc-slider-tooltip {\n          cursor: grab;\n          user-select: none;\n          z-index: ",";\n        }\n\n        .rc-slider-tooltip-inner {\n          color: ",";\n          background-color: transparent !important;\n          border-radius: 0;\n          box-shadow: none;\n        }\n\n        .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n          display: none;\n        }\n\n        .rc-slider-tooltip-placement-top {\n          padding: 0;\n        }\n      }\n    "]);return _templateObject1=function _templateObject(){return data},data}var getStyles=function(theme,isHorizontal){var hasMarks=arguments.length>2&&void 0!==arguments[2]&&arguments[2],spacing=theme.spacing,railColor=theme.colors.border.strong,trackColor=theme.colors.primary.main,handleColor=theme.colors.primary.main,blueOpacity=theme.colors.primary.transparent,hoverStyle="box-shadow: 0px 0px 0px 6px ".concat(blueOpacity);return{container:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({width:"100%",margin:isHorizontal?"inherit":spacing(1,3,1,1),paddingBottom:isHorizontal&&hasMarks?theme.spacing(1):"inherit",height:isHorizontal?"auto":"100%"}),slider:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject(),theme.spacing(1.75),theme.colors.text.disabled,theme.typography.bodySmall.fontSize,theme.colors.text.primary,handleColor,theme.shadows.z1,hoverStyle,theme.colors.text.primary,theme.colors.text.primary,theme.colors.text.primary,trackColor,railColor),tooltip:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject1(),theme.zIndex.tooltip,theme.colors.text.primary),sliderInput:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({display:"flex",flexDirection:"row",alignItems:"center",width:"100%"}),sliderInputVertical:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({flexDirection:"column",height:"100%",".rc-slider":{margin:0,order:2}}),sliderInputField:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({marginLeft:theme.spacing(3),width:"60px",input:{textAlign:"center"}}),sliderInputFieldVertical:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({margin:"0 0 ".concat(theme.spacing(3)," 0"),order:1})}}},"./src/components/Slider/RangeSlider.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},Vertical:function(){return Vertical},default:function(){return RangeSlider_story}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),emotion_css_esm=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),emotion_react_browser_esm=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),es=__webpack_require__("../../node_modules/rc-slider/es/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),ThemeContext=__webpack_require__("./src/themes/ThemeContext.tsx"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function Popup(props){var children=props.children,prefixCls=props.prefixCls,id=props.id,overlayInnerStyle=props.overlayInnerStyle,className=props.className,style=props.style;return react.createElement("div",{className:classnames_default()("".concat(prefixCls,"-content"),className),style:style},react.createElement("div",{className:"".concat(prefixCls,"-inner"),id:id,role:"tooltip",style:overlayInnerStyle},"function"==typeof children?children():children))}var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),trigger_es=__webpack_require__("../../node_modules/@rc-component/trigger/es/index.js"),autoAdjustOverflowTopBottom={shiftX:64,adjustY:1},autoAdjustOverflowLeftRight={adjustX:1,shiftY:!0},targetOffset=[0,0],placements={left:{points:["cr","cl"],overflow:autoAdjustOverflowLeftRight,offset:[-4,0],targetOffset:targetOffset},right:{points:["cl","cr"],overflow:autoAdjustOverflowLeftRight,offset:[4,0],targetOffset:targetOffset},top:{points:["bc","tc"],overflow:autoAdjustOverflowTopBottom,offset:[0,-4],targetOffset:targetOffset},bottom:{points:["tc","bc"],overflow:autoAdjustOverflowTopBottom,offset:[0,4],targetOffset:targetOffset},topLeft:{points:["bl","tl"],overflow:autoAdjustOverflowTopBottom,offset:[0,-4],targetOffset:targetOffset},leftTop:{points:["tr","tl"],overflow:autoAdjustOverflowLeftRight,offset:[-4,0],targetOffset:targetOffset},topRight:{points:["br","tr"],overflow:autoAdjustOverflowTopBottom,offset:[0,-4],targetOffset:targetOffset},rightTop:{points:["tl","tr"],overflow:autoAdjustOverflowLeftRight,offset:[4,0],targetOffset:targetOffset},bottomRight:{points:["tr","br"],overflow:autoAdjustOverflowTopBottom,offset:[0,4],targetOffset:targetOffset},rightBottom:{points:["bl","br"],overflow:autoAdjustOverflowLeftRight,offset:[4,0],targetOffset:targetOffset},bottomLeft:{points:["tl","bl"],overflow:autoAdjustOverflowTopBottom,offset:[0,4],targetOffset:targetOffset},leftBottom:{points:["br","bl"],overflow:autoAdjustOverflowLeftRight,offset:[-4,0],targetOffset:targetOffset}},_excluded=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],Tooltip=function Tooltip(props,ref){var overlayClassName=props.overlayClassName,_props$trigger=props.trigger,trigger=void 0===_props$trigger?["hover"]:_props$trigger,_props$mouseEnterDela=props.mouseEnterDelay,mouseEnterDelay=void 0===_props$mouseEnterDela?0:_props$mouseEnterDela,_props$mouseLeaveDela=props.mouseLeaveDelay,mouseLeaveDelay=void 0===_props$mouseLeaveDela?.1:_props$mouseLeaveDela,overlayStyle=props.overlayStyle,_props$prefixCls=props.prefixCls,prefixCls=void 0===_props$prefixCls?"rc-tooltip":_props$prefixCls,children=props.children,onVisibleChange=props.onVisibleChange,afterVisibleChange=props.afterVisibleChange,transitionName=props.transitionName,animation=props.animation,motion=props.motion,_props$placement=props.placement,placement=void 0===_props$placement?"right":_props$placement,_props$align=props.align,align=void 0===_props$align?{}:_props$align,_props$destroyTooltip=props.destroyTooltipOnHide,destroyTooltipOnHide=void 0!==_props$destroyTooltip&&_props$destroyTooltip,defaultVisible=props.defaultVisible,getTooltipContainer=props.getTooltipContainer,overlayInnerStyle=props.overlayInnerStyle,overlay=(props.arrowContent,props.overlay),id=props.id,_props$showArrow=props.showArrow,showArrow=void 0===_props$showArrow||_props$showArrow,restProps=(0,objectWithoutProperties.A)(props,_excluded),triggerRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(ref,(function(){return triggerRef.current}));var extraProps=(0,objectSpread2.A)({},restProps);"visible"in props&&(extraProps.popupVisible=props.visible);return react.createElement(trigger_es.A,(0,esm_extends.A)({popupClassName:overlayClassName,prefixCls:prefixCls,popup:function getPopupElement(){return react.createElement(Popup,{key:"content",prefixCls:prefixCls,id:id,overlayInnerStyle:overlayInnerStyle},overlay)},action:trigger,builtinPlacements:placements,popupPlacement:placement,ref:triggerRef,popupAlign:align,getPopupContainer:getTooltipContainer,onPopupVisibleChange:onVisibleChange,afterPopupVisibleChange:afterVisibleChange,popupTransitionName:transitionName,popupAnimation:animation,popupMotion:motion,defaultPopupVisible:defaultVisible,autoDestroy:destroyTooltipOnHide,mouseLeaveDelay:mouseLeaveDelay,popupStyle:overlayStyle,mouseEnterDelay:mouseEnterDelay,arrow:showArrow},extraProps),children)},rc_tooltip_es=(0,react.forwardRef)(Tooltip);function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var HandleTooltip=function(props){var cancelKeepAlign=function cancelKeepAlign(){null!==rafRef.current&&cancelAnimationFrame(rafRef.current)},value=props.value,children=props.children,visible=props.visible,placement=props.placement,tipFormatter=props.tipFormatter,restProps=_object_without_properties(props,["value","children","visible","placement","tipFormatter"]),tooltipRef=(0,react.useRef)(null),rafRef=(0,react.useRef)(null),styles=(0,ThemeContext.of)(tooltipStyles);return(0,react.useEffect)((function(){return visible?function keepAlign(){rafRef.current=requestAnimationFrame((function(){var _tooltipRef_current;null===(_tooltipRef_current=tooltipRef.current)||void 0===_tooltipRef_current||_tooltipRef_current.forceAlign()}))}():cancelKeepAlign(),cancelKeepAlign}),[value,visible]),(0,jsx_runtime.jsx)(rc_tooltip_es,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({overlayClassName:styles.tooltip,placement:placement,overlay:null!=tipFormatter?tipFormatter:value,overlayInnerStyle:{minHeight:"auto"},ref:tooltipRef,visible:visible},restProps),{children:children}))},tooltipStyles=function(theme){return{tooltip:(0,emotion_css_esm.AH)({position:"absolute",display:"block",visibility:"visible",fontSize:theme.typography.bodySmall.fontSize,opacity:.9,padding:3,zIndex:theme.zIndex.tooltip})}},Slider_HandleTooltip=HandleTooltip;try{HandleTooltip.displayName="HandleTooltip",HandleTooltip.__docgenInfo={description:"",displayName:"HandleTooltip",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'}]}},tipFormatter:{defaultValue:null,description:"",name:"tipFormatter",required:!1,type:{name:"(() => ReactNode)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Slider/HandleTooltip.tsx#HandleTooltip"]={docgenInfo:HandleTooltip.__docgenInfo,name:"HandleTooltip",path:"src/components/Slider/HandleTooltip.tsx#HandleTooltip"})}catch(__react_docgen_typescript_loader_error){}var Slider_styles=__webpack_require__("./src/components/Slider/styles.ts"),RangeSlider=function(param){var min=param.min,max=param.max,onChange=param.onChange,onAfterChange=param.onAfterChange,_param_orientation=param.orientation,orientation=void 0===_param_orientation?"horizontal":_param_orientation,reverse=param.reverse,step=param.step,formatTooltipResult=param.formatTooltipResult,value=param.value,_param_tooltipAlwaysVisible=param.tooltipAlwaysVisible,tooltipAlwaysVisible=void 0===_param_tooltipAlwaysVisible||_param_tooltipAlwaysVisible,handleChange=(0,react.useCallback)((function(v){null==onChange||onChange("number"==typeof v?[v,v]:v)}),[onChange]),handleChangeComplete=(0,react.useCallback)((function(v){null==onAfterChange||onAfterChange("number"==typeof v?[v,v]:v)}),[onAfterChange]),isHorizontal="horizontal"===orientation,styles=(0,ThemeContext.of)(Slider_styles.$,isHorizontal);return(0,jsx_runtime.jsxs)("div",{className:(0,emotion_css_esm.cx)(styles.container,styles.slider),children:[(0,jsx_runtime.jsx)(emotion_react_browser_esm.mL,{styles:styles.tooltip}),(0,jsx_runtime.jsx)(es.A,{min:min,max:max,step:step,defaultValue:value,range:!0,onChange:handleChange,onChangeComplete:handleChangeComplete,vertical:!isHorizontal,reverse:reverse,handleRender:function(node,handleProps){return(0,jsx_runtime.jsx)(Slider_HandleTooltip,{value:handleProps.value,visible:tooltipAlwaysVisible||handleProps.dragging,tipFormatter:formatTooltipResult?function(){return formatTooltipResult(handleProps.value)}:void 0,placement:isHorizontal?"top":"right",children:node})}})]})};RangeSlider.displayName="RangeSlider";try{RangeSlider.displayName="RangeSlider",RangeSlider.__docgenInfo={description:"",displayName:"RangeSlider",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number[]) => void)"}},onAfterChange:{defaultValue:null,description:"",name:"onAfterChange",required:!1,type:{name:"((value?: number[]) => void)"}},formatTooltipResult:{defaultValue:null,description:"",name:"formatTooltipResult",required:!1,type:{name:"((value: number) => string | number)"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},reverse:{defaultValue:null,description:"Set current positions of handle(s). If only 1 value supplied, only 1 handle displayed.",name:"reverse",required:!1,type:{name:"boolean"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},tooltipAlwaysVisible:{defaultValue:{value:"true"},description:"",name:"tooltipAlwaysVisible",required:!1,type:{name:"boolean"}},marks:{defaultValue:null,description:"Marks on the slider. The key determines the position, and the value determines what will show. If you want to set the style of a specific mark point, the value should be an object which contains style and label properties.",name:"marks",required:!1,type:{name:"SliderMarks"}},included:{defaultValue:null,description:"If the value is true, it means a continuous value interval, otherwise, it is a independent value.",name:"included",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Slider/RangeSlider.tsx#RangeSlider"]={docgenInfo:RangeSlider.__docgenInfo,name:"RangeSlider",path:"src/components/Slider/RangeSlider.tsx#RangeSlider"})}catch(__react_docgen_typescript_loader_error){}function RangeSlider_story_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function RangeSlider_story_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){RangeSlider_story_define_property(target,key,source[key])}))}return target}function RangeSlider_story_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function RangeSlider_story_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}var Basic=function(args){return(0,jsx_runtime.jsx)("div",{style:{width:"200px",height:"200px"},children:(0,jsx_runtime.jsx)(RangeSlider,RangeSlider_story_object_spread_props(RangeSlider_story_object_spread({},args),{value:[10,62]}))})},Vertical=function(args){return(0,jsx_runtime.jsx)("div",{style:{width:"200px",height:"200px"},children:(0,jsx_runtime.jsx)(RangeSlider,RangeSlider_story_object_spread_props(RangeSlider_story_object_spread({},args),{value:[10,62],orientation:"vertical"}))})},RangeSlider_story={title:"Forms/Slider/Range",component:RangeSlider,parameters:{controls:{exclude:["tooltipAlwaysVisible"]}},argTypes:{orientation:{control:{type:"select",options:["horizontal","vertical"]}},step:{control:{type:"number",min:1}}},args:{min:0,max:100,orientation:"horizontal",reverse:!1,step:void 0}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    width: '200px',\n    height: '200px'\n  }}>\n      <RangeSlider {...args} value={[10, 62]} />\n    </div>;\n}",...Basic.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    width: '200px',\n    height: '200px'\n  }}>\n      <RangeSlider {...args} value={[10, 62]} orientation=\"vertical\" />\n    </div>;\n}",...Vertical.parameters?.docs?.source}}}}}]);