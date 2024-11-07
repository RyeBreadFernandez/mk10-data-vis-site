"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[6192],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{XI:function(){return action}});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name:name,deprecated:deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id:id,count:0,data:{name:name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/Forms/InlineFieldRow.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{C:function(){return InlineFieldRow}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var InlineFieldRow=function(_param){var children=_param.children,className=_param.className,htmlProps=_object_without_properties(_param,["children","className"]),styles=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.of)(getStyles);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.container,className)},htmlProps),{children:children}))},getStyles=function(theme){return{container:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({label:"InlineFieldRow",display:"flex",flexDirection:"row",flexWrap:"wrap",alignContent:"flex-start",rowGap:theme.spacing(.5)})}};try{InlineFieldRow.displayName="InlineFieldRow",InlineFieldRow.__docgenInfo={description:"",displayName:"InlineFieldRow",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Forms/InlineFieldRow.tsx#InlineFieldRow"]={docgenInfo:InlineFieldRow.__docgenInfo,name:"InlineFieldRow",path:"src/components/Forms/InlineFieldRow.tsx#InlineFieldRow"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Forms/InlineLabel.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return InlineLabel}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeContext.tsx")),_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Icon/Icon.tsx"),_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Tooltip/Tooltip.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var InlineLabel=function(_param){var children=_param.children,className=_param.className,tooltip=_param.tooltip,width=_param.width,transparent=_param.transparent,interactive=_param.interactive,tmp=_param.as,Component=void 0===tmp?"label":tmp,rest=_object_without_properties(_param,["children","className","tooltip","width","transparent","interactive","as"]),styles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(getInlineLabelStyles,transparent,width);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Component,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.label,className)},rest),{children:[children,tooltip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_4__.m,{interactive:interactive,placement:"top",content:tooltip,theme:"info",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.I,{tabIndex:0,name:"info-circle",size:"sm",className:styles.icon})})]}))},getInlineLabelStyles=function(theme){var transparent=arguments.length>1&&void 0!==arguments[1]&&arguments[1],width=arguments.length>2?arguments[2]:void 0;return{label:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0,padding:theme.spacing(0,1),fontWeight:theme.typography.fontWeightMedium,fontSize:theme.typography.size.sm,backgroundColor:transparent?"transparent":theme.colors.background.secondary,height:theme.spacing(theme.components.height.md),lineHeight:theme.spacing(theme.components.height.md),marginRight:theme.spacing(.5),borderRadius:theme.shape.radius.default,border:"none",width:width?"auto"!==width?"".concat(8*width,"px"):width:"100%",color:theme.colors.text.primary}),icon:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({color:theme.colors.text.secondary,marginLeft:"10px",":hover":{color:theme.colors.text.primary}})}};try{InlineLabel.displayName="InlineLabel",InlineLabel.__docgenInfo={description:"",displayName:"InlineLabel",props:{tooltip:{defaultValue:null,description:"Content for the labels tooltip. If provided, an info icon with the tooltip content\nwill be displayed",name:"tooltip",required:!1,type:{name:"PopoverContent"}},width:{defaultValue:null,description:"Custom width for the label",name:"width",required:!1,type:{name:'number | "auto"'}},transparent:{defaultValue:null,description:"Make labels's background transparent",name:"transparent",required:!1,type:{name:"boolean"}},interactive:{defaultValue:null,description:"Make tooltip interactive",name:"interactive",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Controls which element the InlineLabel should be rendered into",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Forms/InlineLabel.tsx#InlineLabel"]={docgenInfo:InlineLabel.__docgenInfo,name:"InlineLabel",path:"src/components/Forms/InlineLabel.tsx#InlineLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Segment/SegmentSection.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:function(){return SegmentSection}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeContext.tsx")),_Forms_InlineFieldRow__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Forms/InlineFieldRow.tsx"),_Forms_InlineLabel__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Forms/InlineLabel.tsx"),SegmentSection=function(param){var label=param.label,htmlFor=param.htmlFor,children=param.children,fill=param.fill,styles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(getStyles);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Forms_InlineFieldRow__WEBPACK_IMPORTED_MODULE_4__.C,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_InlineLabel__WEBPACK_IMPORTED_MODULE_5__.c,{htmlFor:htmlFor,width:12,className:styles.label,children:label}),children,fill&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:styles.fill,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_InlineLabel__WEBPACK_IMPORTED_MODULE_5__.c,{children:""})})]})})},getStyles=function(theme){return{label:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({color:theme.colors.primary.text}),fill:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({flexGrow:1,marginBottom:theme.spacing(.5)})}};try{SegmentSection.displayName="SegmentSection",SegmentSection.__docgenInfo={description:"Horizontal section for editor components.",displayName:"SegmentSection",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Segment/SegmentSection.tsx#SegmentSection"]={docgenInfo:SegmentSection.__docgenInfo,name:"SegmentSection",path:"src/components/Segment/SegmentSection.tsx#SegmentSection"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Segment/SegmentSelect.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return SegmentSelect}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx"),_Select_Select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Select/Select.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SegmentSelect(_param){var Component,value=_param.value,_param_placeholder=_param.placeholder,placeholder=void 0===_param_placeholder?"":_param_placeholder,_param_options=_param.options,options=void 0===_param_options?[]:_param_options,onChange=_param.onChange,onClickOutside=_param.onClickOutside,_param_loadOptions=_param.loadOptions,loadOptions=void 0===_param_loadOptions?void 0:_param_loadOptions,widthPixels=_param.width,_param_noOptionsMessage=_param.noOptionsMessage,noOptionsMessage=void 0===_param_noOptionsMessage?"":_param_noOptionsMessage,_param_allowCustomValue=_param.allowCustomValue,allowCustomValue=void 0!==_param_allowCustomValue&&_param_allowCustomValue,_param_allowEmptyValue=_param.allowEmptyValue,allowEmptyValue=void 0!==_param_allowEmptyValue&&_param_allowEmptyValue,rest=_object_without_properties(_param,["value","placeholder","options","onChange","onClickOutside","loadOptions","width","noOptionsMessage","allowCustomValue","allowEmptyValue"]),ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),theme=(0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.$j)(),width=widthPixels>0?widthPixels/theme.spacing.gridSize:void 0,asyncOptions={};return loadOptions?(Component=_Select_Select__WEBPACK_IMPORTED_MODULE_3__.DW,asyncOptions={loadOptions:loadOptions,defaultOptions:!0}):Component=_Select_Select__WEBPACK_IMPORTED_MODULE_3__.l6,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",_object_spread_props(_object_spread({},rest),{ref:ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,_object_spread({width:width,noOptionsMessage:noOptionsMessage,placeholder:placeholder,autoFocus:!0,isOpen:!0,onChange:onChange,options:options,value:value,closeMenuOnSelect:!1,onCloseMenu:function(){if(ref&&ref.current){var input=ref.current.querySelector('input[id^="react-select-"]');input&&(input.value||allowEmptyValue)?onChange({value:input.value,label:input.value}):onClickOutside()}},allowCustomValue:allowCustomValue},asyncOptions))}))}try{SegmentSelect.displayName="SegmentSelect",SegmentSelect.__docgenInfo={description:"",displayName:"SegmentSelect",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T | SelectableValue<T>"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"SelectableValue<T>[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(item: SelectableValue<T>) => void"}},loadOptions:{defaultValue:{value:"undefined"},description:"If provided - AsyncSelect will be used allowing to reload options when the value in the input changes",name:"loadOptions",required:!1,type:{name:"((inputValue: string) => Promise<SelectableValue<T>[]>)"}},onClickOutside:{defaultValue:null,description:"",name:"onClickOutside",required:!0,type:{name:"() => void"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},noOptionsMessage:{defaultValue:{value:""},description:"",name:"noOptionsMessage",required:!1,type:{name:"string"}},allowCustomValue:{defaultValue:{value:"false"},description:"",name:"allowCustomValue",required:!1,type:{name:"boolean"}},allowEmptyValue:{defaultValue:{value:"false"},description:"If true, empty value will be passed to onChange callback otherwise using empty value\nwill work as canceling and using the previous value",name:"allowEmptyValue",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Segment/SegmentSelect.tsx#SegmentSelect"]={docgenInfo:SegmentSelect.__docgenInfo,name:"SegmentSelect",path:"src/components/Segment/SegmentSelect.tsx#SegmentSelect"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Segment/styles.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:function(){return getSegmentStyles}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),getSegmentStyles=function(theme){var palette="v1"in theme?theme.v1.palette:theme.palette;return{segment:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({cursor:"pointer",width:"auto"}),queryPlaceholder:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({color:palette.gray2}),disabled:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({cursor:"not-allowed",opacity:.65,boxShadow:"none"})}}},"./src/components/Segment/useExpandableLabel.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Q:function(){return useExpandableLabel}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/Button.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var useExpandableLabel=function(initialExpanded,onExpandedChange){var ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),buttonStyles=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.of)(_Button__WEBPACK_IMPORTED_MODULE_3__.my),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialExpanded),2),expanded=_useState[0],setExpanded=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),2),width=_useState1[0],setWidth=_useState1[1],setExpandedWrapper=function(expanded){setExpanded(expanded),onExpandedChange&&onExpandedChange(expanded)};return[function(param){var Component=param.Component,onClick=param.onClick,disabled=param.disabled;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button",className:buttonStyles,ref:ref,disabled:disabled,onClick:function(){setExpandedWrapper(!0),ref&&ref.current&&setWidth(1.25*ref.current.clientWidth),null==onClick||onClick()},children:Component})},width,expanded,setExpandedWrapper]}}}]);