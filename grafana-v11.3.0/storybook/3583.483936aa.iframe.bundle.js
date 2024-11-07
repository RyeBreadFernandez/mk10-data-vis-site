"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[3583],{"../../node_modules/@react-aria/focus/dist/FocusScope.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n1:function(){return $9bf71ea28793e738$export$20e40289641fbbb6},Pu:function(){return $9bf71ea28793e738$export$1258395f99bf9cbf}});var focusSafely=__webpack_require__("../../node_modules/@react-aria/focus/dist/focusSafely.mjs"),domHelpers=__webpack_require__("../../node_modules/@react-aria/utils/dist/domHelpers.mjs");function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element,childElement){return"#comment"!==element.nodeName&&function $645f2e67b85a24c9$var$isStyleVisible(element){const windowObject=(0,domHelpers.m)(element);if(!(element instanceof windowObject.HTMLElement||element instanceof windowObject.SVGElement))return!1;let{display:display,visibility:visibility}=element.style,isVisible="none"!==display&&"hidden"!==visibility&&"collapse"!==visibility;if(isVisible){const{getComputedStyle:getComputedStyle}=element.ownerDocument.defaultView;let{display:computedDisplay,visibility:computedVisibility}=getComputedStyle(element);isVisible="none"!==computedDisplay&&"hidden"!==computedVisibility&&"collapse"!==computedVisibility}return isVisible}(element)&&function $645f2e67b85a24c9$var$isAttributeVisible(element,childElement){return!element.hasAttribute("hidden")&&!element.hasAttribute("data-react-aria-prevent-focus")&&("DETAILS"!==element.nodeName||!childElement||"SUMMARY"===childElement.nodeName||element.hasAttribute("open"))}(element,childElement)&&(!element.parentElement||$645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement,element))}var useLayoutEffect=__webpack_require__("../../node_modules/@react-aria/utils/dist/useLayoutEffect.mjs"),react=__webpack_require__("../../node_modules/react/index.js");const $9bf71ea28793e738$var$FocusContext=react.createContext(null),$9bf71ea28793e738$var$RESTORE_FOCUS_EVENT="react-aria-focus-scope-restore";let $9bf71ea28793e738$var$activeScope=null;function $9bf71ea28793e738$export$20e40289641fbbb6(props){let{children:children,contain:contain,restoreFocus:restoreFocus,autoFocus:autoFocus}=props,startRef=(0,react.useRef)(null),endRef=(0,react.useRef)(null),scopeRef=(0,react.useRef)([]),{parentNode:parentNode}=(0,react.useContext)($9bf71ea28793e738$var$FocusContext)||{},node=(0,react.useMemo)((()=>new $9bf71ea28793e738$var$TreeNode({scopeRef:scopeRef})),[scopeRef]);(0,useLayoutEffect.N)((()=>{let parent=parentNode||$9bf71ea28793e738$export$d06fae2ee68b101e.root;if($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parent.scopeRef)&&$9bf71ea28793e738$var$activeScope&&!$9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope,parent.scopeRef)){let activeNode=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);activeNode&&(parent=activeNode)}parent.addChild(node),$9bf71ea28793e738$export$d06fae2ee68b101e.addNode(node)}),[node,parentNode]),(0,useLayoutEffect.N)((()=>{let node=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);node&&(node.contain=!!contain)}),[contain]),(0,useLayoutEffect.N)((()=>{var _startRef_current;let node=null===(_startRef_current=startRef.current)||void 0===_startRef_current?void 0:_startRef_current.nextSibling,nodes=[],stopPropagation=e=>e.stopPropagation();for(;node&&node!==endRef.current;)nodes.push(node),node.addEventListener($9bf71ea28793e738$var$RESTORE_FOCUS_EVENT,stopPropagation),node=node.nextSibling;return scopeRef.current=nodes,()=>{for(let node of nodes)node.removeEventListener($9bf71ea28793e738$var$RESTORE_FOCUS_EVENT,stopPropagation)}}),[children]),function $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef,restore,contain){(0,useLayoutEffect.N)((()=>{if(restore||contain)return;let scope=scopeRef.current;const ownerDocument=(0,domHelpers.T)(scope?scope[0]:void 0);let onFocus=e=>{let target=e.target;$9bf71ea28793e738$var$isElementInScope(target,scopeRef.current)?$9bf71ea28793e738$var$activeScope=scopeRef:$9bf71ea28793e738$var$isElementInAnyScope(target)||($9bf71ea28793e738$var$activeScope=null)};return ownerDocument.addEventListener("focusin",onFocus,!1),null==scope||scope.forEach((element=>element.addEventListener("focusin",onFocus,!1))),()=>{ownerDocument.removeEventListener("focusin",onFocus,!1),null==scope||scope.forEach((element=>element.removeEventListener("focusin",onFocus,!1)))}}),[scopeRef,restore,contain])}(scopeRef,restoreFocus,contain),function $9bf71ea28793e738$var$useFocusContainment(scopeRef,contain){let focusedNode=(0,react.useRef)(void 0),raf=(0,react.useRef)(void 0);(0,useLayoutEffect.N)((()=>{let scope=scopeRef.current;if(!contain)return void(raf.current&&(cancelAnimationFrame(raf.current),raf.current=void 0));const ownerDocument=(0,domHelpers.T)(scope?scope[0]:void 0);let onKeyDown=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||!$9bf71ea28793e738$var$shouldContainFocus(scopeRef)||e.isComposing)return;let focusedElement=ownerDocument.activeElement,scope=scopeRef.current;if(!scope||!$9bf71ea28793e738$var$isElementInScope(focusedElement,scope))return;let walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope),{tabbable:!0},scope);if(!focusedElement)return;walker.currentNode=focusedElement;let nextElement=e.shiftKey?walker.previousNode():walker.nextNode();nextElement||(walker.currentNode=e.shiftKey?scope[scope.length-1].nextElementSibling:scope[0].previousElementSibling,nextElement=e.shiftKey?walker.previousNode():walker.nextNode()),e.preventDefault(),nextElement&&$9bf71ea28793e738$var$focusElement(nextElement,!0)},onFocus=e=>{$9bf71ea28793e738$var$activeScope&&!$9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope,scopeRef)||!$9bf71ea28793e738$var$isElementInScope(e.target,scopeRef.current)?$9bf71ea28793e738$var$shouldContainFocus(scopeRef)&&!$9bf71ea28793e738$var$isElementInChildScope(e.target,scopeRef)?focusedNode.current?focusedNode.current.focus():$9bf71ea28793e738$var$activeScope&&$9bf71ea28793e738$var$activeScope.current&&$9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current):$9bf71ea28793e738$var$shouldContainFocus(scopeRef)&&(focusedNode.current=e.target):($9bf71ea28793e738$var$activeScope=scopeRef,focusedNode.current=e.target)},onBlur=e=>{raf.current&&cancelAnimationFrame(raf.current),raf.current=requestAnimationFrame((()=>{var _focusedNode_current;ownerDocument.activeElement&&$9bf71ea28793e738$var$shouldContainFocus(scopeRef)&&!$9bf71ea28793e738$var$isElementInChildScope(ownerDocument.activeElement,scopeRef)&&($9bf71ea28793e738$var$activeScope=scopeRef,ownerDocument.body.contains(e.target)?(focusedNode.current=e.target,null===(_focusedNode_current=focusedNode.current)||void 0===_focusedNode_current||_focusedNode_current.focus()):$9bf71ea28793e738$var$activeScope.current&&$9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current))}))};return ownerDocument.addEventListener("keydown",onKeyDown,!1),ownerDocument.addEventListener("focusin",onFocus,!1),null==scope||scope.forEach((element=>element.addEventListener("focusin",onFocus,!1))),null==scope||scope.forEach((element=>element.addEventListener("focusout",onBlur,!1))),()=>{ownerDocument.removeEventListener("keydown",onKeyDown,!1),ownerDocument.removeEventListener("focusin",onFocus,!1),null==scope||scope.forEach((element=>element.removeEventListener("focusin",onFocus,!1))),null==scope||scope.forEach((element=>element.removeEventListener("focusout",onBlur,!1)))}}),[scopeRef,contain]),(0,useLayoutEffect.N)((()=>()=>{raf.current&&cancelAnimationFrame(raf.current)}),[raf])}(scopeRef,contain),function $9bf71ea28793e738$var$useRestoreFocus(scopeRef,restoreFocus,contain){const nodeToRestoreRef=(0,react.useRef)("undefined"!=typeof document?(0,domHelpers.T)(scopeRef.current?scopeRef.current[0]:void 0).activeElement:null);(0,useLayoutEffect.N)((()=>{let scope=scopeRef.current;const ownerDocument=(0,domHelpers.T)(scope?scope[0]:void 0);if(!restoreFocus||contain)return;let onFocus=()=>{$9bf71ea28793e738$var$activeScope&&!$9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope,scopeRef)||!$9bf71ea28793e738$var$isElementInScope(ownerDocument.activeElement,scopeRef.current)||($9bf71ea28793e738$var$activeScope=scopeRef)};return ownerDocument.addEventListener("focusin",onFocus,!1),null==scope||scope.forEach((element=>element.addEventListener("focusin",onFocus,!1))),()=>{ownerDocument.removeEventListener("focusin",onFocus,!1),null==scope||scope.forEach((element=>element.removeEventListener("focusin",onFocus,!1)))}}),[scopeRef,contain]),(0,useLayoutEffect.N)((()=>{const ownerDocument=(0,domHelpers.T)(scopeRef.current?scopeRef.current[0]:void 0);if(!restoreFocus)return;let onKeyDown=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||!$9bf71ea28793e738$var$shouldContainFocus(scopeRef)||e.isComposing)return;let focusedElement=ownerDocument.activeElement;if(!$9bf71ea28793e738$var$isElementInScope(focusedElement,scopeRef.current))return;let treeNode=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);if(!treeNode)return;let nodeToRestore=treeNode.nodeToRestore,walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa(ownerDocument.body,{tabbable:!0});walker.currentNode=focusedElement;let nextElement=e.shiftKey?walker.previousNode():walker.nextNode();if(nodeToRestore&&ownerDocument.body.contains(nodeToRestore)&&nodeToRestore!==ownerDocument.body||(nodeToRestore=void 0,treeNode.nodeToRestore=void 0),(!nextElement||!$9bf71ea28793e738$var$isElementInScope(nextElement,scopeRef.current))&&nodeToRestore){walker.currentNode=nodeToRestore;do{nextElement=e.shiftKey?walker.previousNode():walker.nextNode()}while($9bf71ea28793e738$var$isElementInScope(nextElement,scopeRef.current));e.preventDefault(),e.stopPropagation(),nextElement?$9bf71ea28793e738$var$focusElement(nextElement,!0):$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore)?$9bf71ea28793e738$var$focusElement(nodeToRestore,!0):focusedElement.blur()}};return contain||ownerDocument.addEventListener("keydown",onKeyDown,!0),()=>{contain||ownerDocument.removeEventListener("keydown",onKeyDown,!0)}}),[scopeRef,restoreFocus,contain]),(0,useLayoutEffect.N)((()=>{const ownerDocument=(0,domHelpers.T)(scopeRef.current?scopeRef.current[0]:void 0);if(!restoreFocus)return;let treeNode=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);var _nodeToRestoreRef_current;return treeNode?(treeNode.nodeToRestore=null!==(_nodeToRestoreRef_current=nodeToRestoreRef.current)&&void 0!==_nodeToRestoreRef_current?_nodeToRestoreRef_current:void 0,()=>{let treeNode=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);if(!treeNode)return;let nodeToRestore=treeNode.nodeToRestore;if(restoreFocus&&nodeToRestore&&($9bf71ea28793e738$var$isElementInScope(ownerDocument.activeElement,scopeRef.current)||ownerDocument.activeElement===ownerDocument.body&&function $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef){let scope=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);for(;scope&&scope.scopeRef!==scopeRef;){if(scope.nodeToRestore)return!1;scope=scope.parent}return(null==scope?void 0:scope.scopeRef)===scopeRef}(scopeRef))){let clonedTree=$9bf71ea28793e738$export$d06fae2ee68b101e.clone();requestAnimationFrame((()=>{if(ownerDocument.activeElement===ownerDocument.body){let treeNode=clonedTree.getTreeNode(scopeRef);for(;treeNode;){if(treeNode.nodeToRestore&&treeNode.nodeToRestore.isConnected)return void $9bf71ea28793e738$var$restoreFocusToElement(treeNode.nodeToRestore);treeNode=treeNode.parent}for(treeNode=clonedTree.getTreeNode(scopeRef);treeNode;){if(treeNode.scopeRef&&treeNode.scopeRef.current&&$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(treeNode.scopeRef)){return void $9bf71ea28793e738$var$restoreFocusToElement($9bf71ea28793e738$var$getFirstInScope(treeNode.scopeRef.current,!0))}treeNode=treeNode.parent}}}))}}):void 0}),[scopeRef,restoreFocus])}(scopeRef,restoreFocus,contain),function $9bf71ea28793e738$var$useAutoFocus(scopeRef,autoFocus){const autoFocusRef=react.useRef(autoFocus);(0,react.useEffect)((()=>{if(autoFocusRef.current){$9bf71ea28793e738$var$activeScope=scopeRef;!$9bf71ea28793e738$var$isElementInScope((0,domHelpers.T)(scopeRef.current?scopeRef.current[0]:void 0).activeElement,$9bf71ea28793e738$var$activeScope.current)&&scopeRef.current&&$9bf71ea28793e738$var$focusFirstInScope(scopeRef.current)}autoFocusRef.current=!1}),[scopeRef])}(scopeRef,autoFocus),(0,react.useEffect)((()=>{const activeElement=(0,domHelpers.T)(scopeRef.current?scopeRef.current[0]:void 0).activeElement;let scope=null;if($9bf71ea28793e738$var$isElementInScope(activeElement,scopeRef.current)){for(let node of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse())node.scopeRef&&$9bf71ea28793e738$var$isElementInScope(activeElement,node.scopeRef.current)&&(scope=node);scope===$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)&&($9bf71ea28793e738$var$activeScope=scope.scopeRef)}}),[scopeRef]),(0,useLayoutEffect.N)((()=>()=>{var _focusScopeTree_getTreeNode_parent,_focusScopeTree_getTreeNode,_focusScopeTree_getTreeNode_parent_scopeRef;let parentScope=null!==(_focusScopeTree_getTreeNode_parent_scopeRef=null===(_focusScopeTree_getTreeNode=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef))||void 0===_focusScopeTree_getTreeNode||null===(_focusScopeTree_getTreeNode_parent=_focusScopeTree_getTreeNode.parent)||void 0===_focusScopeTree_getTreeNode_parent?void 0:_focusScopeTree_getTreeNode_parent.scopeRef)&&void 0!==_focusScopeTree_getTreeNode_parent_scopeRef?_focusScopeTree_getTreeNode_parent_scopeRef:null;scopeRef!==$9bf71ea28793e738$var$activeScope&&!$9bf71ea28793e738$var$isAncestorScope(scopeRef,$9bf71ea28793e738$var$activeScope)||parentScope&&!$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parentScope)||($9bf71ea28793e738$var$activeScope=parentScope),$9bf71ea28793e738$export$d06fae2ee68b101e.removeTreeNode(scopeRef)}),[scopeRef]);let focusManager=(0,react.useMemo)((()=>function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef){return{focusNext(opts={}){let scope=scopeRef.current,{from:from,tabbable:tabbable,wrap:wrap,accept:accept}=opts,node=from||(0,domHelpers.T)(scope[0]).activeElement,sentinel=scope[0].previousElementSibling,walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope),{tabbable:tabbable,accept:accept},scope);walker.currentNode=$9bf71ea28793e738$var$isElementInScope(node,scope)?node:sentinel;let nextNode=walker.nextNode();return!nextNode&&wrap&&(walker.currentNode=sentinel,nextNode=walker.nextNode()),nextNode&&$9bf71ea28793e738$var$focusElement(nextNode,!0),nextNode},focusPrevious(opts={}){let scope=scopeRef.current,{from:from,tabbable:tabbable,wrap:wrap,accept:accept}=opts,node=from||(0,domHelpers.T)(scope[0]).activeElement,sentinel=scope[scope.length-1].nextElementSibling,walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope),{tabbable:tabbable,accept:accept},scope);walker.currentNode=$9bf71ea28793e738$var$isElementInScope(node,scope)?node:sentinel;let previousNode=walker.previousNode();return!previousNode&&wrap&&(walker.currentNode=sentinel,previousNode=walker.previousNode()),previousNode&&$9bf71ea28793e738$var$focusElement(previousNode,!0),previousNode},focusFirst(opts={}){let scope=scopeRef.current,{tabbable:tabbable,accept:accept}=opts,walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope),{tabbable:tabbable,accept:accept},scope);walker.currentNode=scope[0].previousElementSibling;let nextNode=walker.nextNode();return nextNode&&$9bf71ea28793e738$var$focusElement(nextNode,!0),nextNode},focusLast(opts={}){let scope=scopeRef.current,{tabbable:tabbable,accept:accept}=opts,walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope),{tabbable:tabbable,accept:accept},scope);walker.currentNode=scope[scope.length-1].nextElementSibling;let previousNode=walker.previousNode();return previousNode&&$9bf71ea28793e738$var$focusElement(previousNode,!0),previousNode}}}(scopeRef)),[]),value=(0,react.useMemo)((()=>({focusManager:focusManager,parentNode:node})),[node,focusManager]);return react.createElement($9bf71ea28793e738$var$FocusContext.Provider,{value:value},react.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:startRef}),children,react.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:endRef}))}const $9bf71ea28793e738$var$focusableElements=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],$9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR=$9bf71ea28793e738$var$focusableElements.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR=$9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');function $9bf71ea28793e738$var$getScopeRoot(scope){return scope[0].parentElement}function $9bf71ea28793e738$var$shouldContainFocus(scopeRef){let scope=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);for(;scope&&scope.scopeRef!==scopeRef;){if(scope.contain)return!1;scope=scope.parent}return!0}function $9bf71ea28793e738$var$isElementInAnyScope(element){return $9bf71ea28793e738$var$isElementInChildScope(element)}function $9bf71ea28793e738$var$isElementInScope(element,scope){return!!element&&(!!scope&&scope.some((node=>node.contains(element))))}function $9bf71ea28793e738$var$isElementInChildScope(element,scope=null){if(element instanceof Element&&element.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:s}of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope)))if(s&&$9bf71ea28793e738$var$isElementInScope(element,s.current))return!0;return!1}function $9bf71ea28793e738$export$1258395f99bf9cbf(element){return $9bf71ea28793e738$var$isElementInChildScope(element,$9bf71ea28793e738$var$activeScope)}function $9bf71ea28793e738$var$isAncestorScope(ancestor,scope){var _focusScopeTree_getTreeNode;let parent=null===(_focusScopeTree_getTreeNode=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope))||void 0===_focusScopeTree_getTreeNode?void 0:_focusScopeTree_getTreeNode.parent;for(;parent;){if(parent.scopeRef===ancestor)return!0;parent=parent.parent}return!1}function $9bf71ea28793e738$var$focusElement(element,scroll=!1){if(null==element||scroll){if(null!=element)try{element.focus()}catch(err){}}else try{(0,focusSafely.l)(element)}catch(err){}}function $9bf71ea28793e738$var$getFirstInScope(scope,tabbable=!0){let sentinel=scope[0].previousElementSibling,scopeRoot=$9bf71ea28793e738$var$getScopeRoot(scope),walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot,{tabbable:tabbable},scope);walker.currentNode=sentinel;let nextNode=walker.nextNode();return tabbable&&!nextNode&&(scopeRoot=$9bf71ea28793e738$var$getScopeRoot(scope),walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot,{tabbable:!1},scope),walker.currentNode=sentinel,nextNode=walker.nextNode()),nextNode}function $9bf71ea28793e738$var$focusFirstInScope(scope,tabbable=!0){$9bf71ea28793e738$var$focusElement($9bf71ea28793e738$var$getFirstInScope(scope,tabbable))}function $9bf71ea28793e738$var$restoreFocusToElement(node){node.dispatchEvent(new CustomEvent($9bf71ea28793e738$var$RESTORE_FOCUS_EVENT,{bubbles:!0,cancelable:!0}))&&$9bf71ea28793e738$var$focusElement(node)}function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root,opts,scope){let selector=(null==opts?void 0:opts.tabbable)?$9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR:$9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR,walker=(0,domHelpers.T)(root).createTreeWalker(root,NodeFilter.SHOW_ELEMENT,{acceptNode(node){var _opts_from;return(null==opts||null===(_opts_from=opts.from)||void 0===_opts_from?void 0:_opts_from.contains(node))?NodeFilter.FILTER_REJECT:!node.matches(selector)||!$645f2e67b85a24c9$export$e989c0fffaa6b27a(node)||scope&&!$9bf71ea28793e738$var$isElementInScope(node,scope)||(null==opts?void 0:opts.accept)&&!opts.accept(node)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}});return(null==opts?void 0:opts.from)&&(walker.currentNode=opts.from),walker}class $9bf71ea28793e738$var$Tree{get size(){return this.fastMap.size}getTreeNode(data){return this.fastMap.get(data)}addTreeNode(scopeRef,parent,nodeToRestore){let parentNode=this.fastMap.get(null!=parent?parent:null);if(!parentNode)return;let node=new $9bf71ea28793e738$var$TreeNode({scopeRef:scopeRef});parentNode.addChild(node),node.parent=parentNode,this.fastMap.set(scopeRef,node),nodeToRestore&&(node.nodeToRestore=nodeToRestore)}addNode(node){this.fastMap.set(node.scopeRef,node)}removeTreeNode(scopeRef){if(null===scopeRef)return;let node=this.fastMap.get(scopeRef);if(!node)return;let parentNode=node.parent;for(let current of this.traverse())current!==node&&node.nodeToRestore&&current.nodeToRestore&&node.scopeRef&&node.scopeRef.current&&$9bf71ea28793e738$var$isElementInScope(current.nodeToRestore,node.scopeRef.current)&&(current.nodeToRestore=node.nodeToRestore);let children=node.children;parentNode&&(parentNode.removeChild(node),children.size>0&&children.forEach((child=>parentNode&&parentNode.addChild(child)))),this.fastMap.delete(node.scopeRef)}*traverse(node=this.root){if(null!=node.scopeRef&&(yield node),node.children.size>0)for(let child of node.children)yield*this.traverse(child)}clone(){var _node_parent;let newTree=new $9bf71ea28793e738$var$Tree;var _node_parent_scopeRef;for(let node of this.traverse())newTree.addTreeNode(node.scopeRef,null!==(_node_parent_scopeRef=null===(_node_parent=node.parent)||void 0===_node_parent?void 0:_node_parent.scopeRef)&&void 0!==_node_parent_scopeRef?_node_parent_scopeRef:null,node.nodeToRestore);return newTree}constructor(){this.fastMap=new Map,this.root=new $9bf71ea28793e738$var$TreeNode({scopeRef:null}),this.fastMap.set(null,this.root)}}class $9bf71ea28793e738$var$TreeNode{addChild(node){this.children.add(node),node.parent=this}removeChild(node){this.children.delete(node),node.parent=void 0}constructor(props){this.children=new Set,this.contain=!1,this.scopeRef=props.scopeRef}}let $9bf71ea28793e738$export$d06fae2ee68b101e=new $9bf71ea28793e738$var$Tree},"../../node_modules/@react-aria/focus/dist/focusSafely.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return $6a99195332edec8b$export$80f3e147d781571c}});var domHelpers=__webpack_require__("../../node_modules/@react-aria/utils/dist/domHelpers.mjs");let $bbed8b41f857bcc0$var$transitionsByElement=new Map,$bbed8b41f857bcc0$var$transitionCallbacks=new Set;function $bbed8b41f857bcc0$var$setupGlobalEvents(){if("undefined"==typeof window)return;function isTransitionEvent(event){return"propertyName"in event}let onTransitionEnd=e=>{if(!isTransitionEvent(e)||!e.target)return;let properties=$bbed8b41f857bcc0$var$transitionsByElement.get(e.target);if(properties&&(properties.delete(e.propertyName),0===properties.size&&(e.target.removeEventListener("transitioncancel",onTransitionEnd),$bbed8b41f857bcc0$var$transitionsByElement.delete(e.target)),0===$bbed8b41f857bcc0$var$transitionsByElement.size)){for(let cb of $bbed8b41f857bcc0$var$transitionCallbacks)cb();$bbed8b41f857bcc0$var$transitionCallbacks.clear()}};document.body.addEventListener("transitionrun",(e=>{if(!isTransitionEvent(e)||!e.target)return;let transitions=$bbed8b41f857bcc0$var$transitionsByElement.get(e.target);transitions||(transitions=new Set,$bbed8b41f857bcc0$var$transitionsByElement.set(e.target,transitions),e.target.addEventListener("transitioncancel",onTransitionEnd,{once:!0})),transitions.add(e.propertyName)})),document.body.addEventListener("transitionend",onTransitionEnd)}function $7215afc6de606d6b$export$de79e2c695e052f3(element){if(function $7215afc6de606d6b$var$supportsPreventScroll(){if(null==$7215afc6de606d6b$var$supportsPreventScrollCached){$7215afc6de606d6b$var$supportsPreventScrollCached=!1;try{document.createElement("div").focus({get preventScroll(){return $7215afc6de606d6b$var$supportsPreventScrollCached=!0,!0}})}catch(e){}}return $7215afc6de606d6b$var$supportsPreventScrollCached}())element.focus({preventScroll:!0});else{let scrollableElements=function $7215afc6de606d6b$var$getScrollableElements(element){let parent=element.parentNode,scrollableElements=[],rootScrollingElement=document.scrollingElement||document.documentElement;for(;parent instanceof HTMLElement&&parent!==rootScrollingElement;)(parent.offsetHeight<parent.scrollHeight||parent.offsetWidth<parent.scrollWidth)&&scrollableElements.push({element:parent,scrollTop:parent.scrollTop,scrollLeft:parent.scrollLeft}),parent=parent.parentNode;rootScrollingElement instanceof HTMLElement&&scrollableElements.push({element:rootScrollingElement,scrollTop:rootScrollingElement.scrollTop,scrollLeft:rootScrollingElement.scrollLeft});return scrollableElements}(element);element.focus(),function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements){for(let{element:element,scrollTop:scrollTop,scrollLeft:scrollLeft}of scrollableElements)element.scrollTop=scrollTop,element.scrollLeft=scrollLeft}(scrollableElements)}}"undefined"!=typeof document&&("loading"!==document.readyState?$bbed8b41f857bcc0$var$setupGlobalEvents():document.addEventListener("DOMContentLoaded",$bbed8b41f857bcc0$var$setupGlobalEvents));let $7215afc6de606d6b$var$supportsPreventScrollCached=null;var useFocusVisible=__webpack_require__("../../node_modules/@react-aria/interactions/dist/useFocusVisible.mjs");function $6a99195332edec8b$export$80f3e147d781571c(element){const ownerDocument=(0,domHelpers.T)(element);if("virtual"===(0,useFocusVisible.ME)()){let lastFocusedElement=ownerDocument.activeElement;fn=()=>{ownerDocument.activeElement===lastFocusedElement&&element.isConnected&&$7215afc6de606d6b$export$de79e2c695e052f3(element)},requestAnimationFrame((()=>{0===$bbed8b41f857bcc0$var$transitionsByElement.size?fn():$bbed8b41f857bcc0$var$transitionCallbacks.add(fn)}))}else $7215afc6de606d6b$export$de79e2c695e052f3(element);var fn}},"../../node_modules/@react-aria/interactions/dist/useFocusVisible.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function $c87311424ea30a05$var$testUserAgent(re){var _window_navigator_userAgentData;return"undefined"!=typeof window&&null!=window.navigator&&((null===(_window_navigator_userAgentData=window.navigator.userAgentData)||void 0===_window_navigator_userAgentData?void 0:_window_navigator_userAgentData.brands.some((brand=>re.test(brand.brand))))||re.test(window.navigator.userAgent))}function $c87311424ea30a05$var$testPlatform(re){var _window_navigator_userAgentData;return"undefined"!=typeof window&&null!=window.navigator&&re.test((null===(_window_navigator_userAgentData=window.navigator.userAgentData)||void 0===_window_navigator_userAgentData?void 0:_window_navigator_userAgentData.platform)||window.navigator.platform)}function $c87311424ea30a05$var$cached(fn){let res=null;return()=>(null==res&&(res=fn()),res)}__webpack_require__.d(__webpack_exports__,{ME:function(){return $507fabe10e71c6fb$export$630ff653c5ada6a9},pP:function(){return $507fabe10e71c6fb$export$b9b3dfddab17db27},K7:function(){return $507fabe10e71c6fb$export$ec71b4b83ac08ec3}});const $c87311424ea30a05$export$9ac100e40613ea10=$c87311424ea30a05$var$cached((function(){return $c87311424ea30a05$var$testPlatform(/^Mac/i)})),$c87311424ea30a05$export$186c6964ca17d99=$c87311424ea30a05$var$cached((function(){return $c87311424ea30a05$var$testPlatform(/^iPhone/i)})),$c87311424ea30a05$export$7bef049ce92e4224=$c87311424ea30a05$var$cached((function(){return $c87311424ea30a05$var$testPlatform(/^iPad/i)||$c87311424ea30a05$export$9ac100e40613ea10()&&navigator.maxTouchPoints>1})),$c87311424ea30a05$export$fedb369cb70207f1=$c87311424ea30a05$var$cached((function(){return $c87311424ea30a05$export$186c6964ca17d99()||$c87311424ea30a05$export$7bef049ce92e4224()})),$c87311424ea30a05$export$6446a186d09e379e=($c87311424ea30a05$var$cached((function(){return $c87311424ea30a05$export$9ac100e40613ea10()||$c87311424ea30a05$export$fedb369cb70207f1()})),$c87311424ea30a05$var$cached((function(){return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i)&&!$c87311424ea30a05$export$6446a186d09e379e()})),$c87311424ea30a05$var$cached((function(){return $c87311424ea30a05$var$testUserAgent(/Chrome/i)}))),platform_$c87311424ea30a05$export$a11b0059900ceec8=$c87311424ea30a05$var$cached((function(){return $c87311424ea30a05$var$testUserAgent(/Android/i)}));$c87311424ea30a05$var$cached((function(){return $c87311424ea30a05$var$testUserAgent(/Firefox/i)}));var domHelpers=__webpack_require__("../../node_modules/@react-aria/utils/dist/domHelpers.mjs"),react=__webpack_require__("../../node_modules/react/index.js");let $507fabe10e71c6fb$var$currentModality=null,$507fabe10e71c6fb$var$changeHandlers=new Set,$507fabe10e71c6fb$export$d90243b58daecda7=new Map,$507fabe10e71c6fb$var$hasEventBeforeFocus=!1,$507fabe10e71c6fb$var$hasBlurredWindowRecently=!1;const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS={Tab:!0,Escape:!0};function $507fabe10e71c6fb$var$triggerChangeHandlers(modality,e){for(let handler of $507fabe10e71c6fb$var$changeHandlers)handler(modality,e)}function $507fabe10e71c6fb$var$handleKeyboardEvent(e){$507fabe10e71c6fb$var$hasEventBeforeFocus=!0,function $507fabe10e71c6fb$var$isValidKey(e){return!(e.metaKey||!$c87311424ea30a05$export$9ac100e40613ea10()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&($507fabe10e71c6fb$var$currentModality="keyboard",$507fabe10e71c6fb$var$triggerChangeHandlers("keyboard",e))}function $507fabe10e71c6fb$var$handlePointerEvent(e){$507fabe10e71c6fb$var$currentModality="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||($507fabe10e71c6fb$var$hasEventBeforeFocus=!0,$507fabe10e71c6fb$var$triggerChangeHandlers("pointer",e))}function $507fabe10e71c6fb$var$handleClickEvent(e){var event;(0===(event=e).mozInputSource&&event.isTrusted||(platform_$c87311424ea30a05$export$a11b0059900ceec8()&&event.pointerType?"click"===event.type&&1===event.buttons:0===event.detail&&!event.pointerType))&&($507fabe10e71c6fb$var$hasEventBeforeFocus=!0,$507fabe10e71c6fb$var$currentModality="virtual")}function $507fabe10e71c6fb$var$handleFocusEvent(e){e.target!==window&&e.target!==document&&($507fabe10e71c6fb$var$hasEventBeforeFocus||$507fabe10e71c6fb$var$hasBlurredWindowRecently||($507fabe10e71c6fb$var$currentModality="virtual",$507fabe10e71c6fb$var$triggerChangeHandlers("virtual",e)),$507fabe10e71c6fb$var$hasEventBeforeFocus=!1,$507fabe10e71c6fb$var$hasBlurredWindowRecently=!1)}function $507fabe10e71c6fb$var$handleWindowBlur(){$507fabe10e71c6fb$var$hasEventBeforeFocus=!1,$507fabe10e71c6fb$var$hasBlurredWindowRecently=!0}function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element){if("undefined"==typeof window||$507fabe10e71c6fb$export$d90243b58daecda7.get((0,domHelpers.m)(element)))return;const windowObject=(0,domHelpers.m)(element),documentObject=(0,domHelpers.T)(element);let focus=windowObject.HTMLElement.prototype.focus;windowObject.HTMLElement.prototype.focus=function(){$507fabe10e71c6fb$var$hasEventBeforeFocus=!0,focus.apply(this,arguments)},documentObject.addEventListener("keydown",$507fabe10e71c6fb$var$handleKeyboardEvent,!0),documentObject.addEventListener("keyup",$507fabe10e71c6fb$var$handleKeyboardEvent,!0),documentObject.addEventListener("click",$507fabe10e71c6fb$var$handleClickEvent,!0),windowObject.addEventListener("focus",$507fabe10e71c6fb$var$handleFocusEvent,!0),windowObject.addEventListener("blur",$507fabe10e71c6fb$var$handleWindowBlur,!1),"undefined"!=typeof PointerEvent?(documentObject.addEventListener("pointerdown",$507fabe10e71c6fb$var$handlePointerEvent,!0),documentObject.addEventListener("pointermove",$507fabe10e71c6fb$var$handlePointerEvent,!0),documentObject.addEventListener("pointerup",$507fabe10e71c6fb$var$handlePointerEvent,!0)):(documentObject.addEventListener("mousedown",$507fabe10e71c6fb$var$handlePointerEvent,!0),documentObject.addEventListener("mousemove",$507fabe10e71c6fb$var$handlePointerEvent,!0),documentObject.addEventListener("mouseup",$507fabe10e71c6fb$var$handlePointerEvent,!0)),windowObject.addEventListener("beforeunload",(()=>{$507fabe10e71c6fb$var$tearDownWindowFocusTracking(element)}),{once:!0}),$507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject,{focus:focus})}const $507fabe10e71c6fb$var$tearDownWindowFocusTracking=(element,loadListener)=>{const windowObject=(0,domHelpers.m)(element),documentObject=(0,domHelpers.T)(element);loadListener&&documentObject.removeEventListener("DOMContentLoaded",loadListener),$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)&&(windowObject.HTMLElement.prototype.focus=$507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus,documentObject.removeEventListener("keydown",$507fabe10e71c6fb$var$handleKeyboardEvent,!0),documentObject.removeEventListener("keyup",$507fabe10e71c6fb$var$handleKeyboardEvent,!0),documentObject.removeEventListener("click",$507fabe10e71c6fb$var$handleClickEvent,!0),windowObject.removeEventListener("focus",$507fabe10e71c6fb$var$handleFocusEvent,!0),windowObject.removeEventListener("blur",$507fabe10e71c6fb$var$handleWindowBlur,!1),"undefined"!=typeof PointerEvent?(documentObject.removeEventListener("pointerdown",$507fabe10e71c6fb$var$handlePointerEvent,!0),documentObject.removeEventListener("pointermove",$507fabe10e71c6fb$var$handlePointerEvent,!0),documentObject.removeEventListener("pointerup",$507fabe10e71c6fb$var$handlePointerEvent,!0)):(documentObject.removeEventListener("mousedown",$507fabe10e71c6fb$var$handlePointerEvent,!0),documentObject.removeEventListener("mousemove",$507fabe10e71c6fb$var$handlePointerEvent,!0),documentObject.removeEventListener("mouseup",$507fabe10e71c6fb$var$handlePointerEvent,!0)),$507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject))};function $507fabe10e71c6fb$export$b9b3dfddab17db27(){return"pointer"!==$507fabe10e71c6fb$var$currentModality}function $507fabe10e71c6fb$export$630ff653c5ada6a9(){return $507fabe10e71c6fb$var$currentModality}"undefined"!=typeof document&&function $507fabe10e71c6fb$export$2f1888112f558a7d(element){const documentObject=(0,domHelpers.T)(element);let loadListener;return"loading"!==documentObject.readyState?$507fabe10e71c6fb$var$setupGlobalFocusEvents(element):(loadListener=()=>{$507fabe10e71c6fb$var$setupGlobalFocusEvents(element)},documentObject.addEventListener("DOMContentLoaded",loadListener)),()=>$507fabe10e71c6fb$var$tearDownWindowFocusTracking(element,loadListener)}();const $507fabe10e71c6fb$var$nonTextInputTypes=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn,deps,opts){$507fabe10e71c6fb$var$setupGlobalFocusEvents(),(0,react.useEffect)((()=>{let handler=(modality,e)=>{(function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput,modality,e){var _e_target;const IHTMLInputElement="undefined"!=typeof window?(0,domHelpers.m)(null==e?void 0:e.target).HTMLInputElement:HTMLInputElement,IHTMLTextAreaElement="undefined"!=typeof window?(0,domHelpers.m)(null==e?void 0:e.target).HTMLTextAreaElement:HTMLTextAreaElement,IHTMLElement="undefined"!=typeof window?(0,domHelpers.m)(null==e?void 0:e.target).HTMLElement:HTMLElement,IKeyboardEvent="undefined"!=typeof window?(0,domHelpers.m)(null==e?void 0:e.target).KeyboardEvent:KeyboardEvent;return!((isTextInput=isTextInput||(null==e?void 0:e.target)instanceof IHTMLInputElement&&!$507fabe10e71c6fb$var$nonTextInputTypes.has(null==e||null===(_e_target=e.target)||void 0===_e_target?void 0:_e_target.type)||(null==e?void 0:e.target)instanceof IHTMLTextAreaElement||(null==e?void 0:e.target)instanceof IHTMLElement&&(null==e?void 0:e.target.isContentEditable))&&"keyboard"===modality&&e instanceof IKeyboardEvent&&!$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key])})(!!(null==opts?void 0:opts.isTextInput),modality,e)&&fn($507fabe10e71c6fb$export$b9b3dfddab17db27())};return $507fabe10e71c6fb$var$changeHandlers.add(handler),()=>{$507fabe10e71c6fb$var$changeHandlers.delete(handler)}}),deps)}},"../../node_modules/@react-aria/utils/dist/domHelpers.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{T:function(){return $431fbd86ca7dc216$export$b204af158042fbac},m:function(){return $431fbd86ca7dc216$export$f21a1ffae260145a}});const $431fbd86ca7dc216$export$b204af158042fbac=el=>{var _el_ownerDocument;return null!==(_el_ownerDocument=null==el?void 0:el.ownerDocument)&&void 0!==_el_ownerDocument?_el_ownerDocument:document},$431fbd86ca7dc216$export$f21a1ffae260145a=el=>{if(el&&"window"in el&&el.window===el)return el;return $431fbd86ca7dc216$export$b204af158042fbac(el).defaultView||window}},"../../node_modules/@react-aria/utils/dist/useLayoutEffect.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{N:function(){return $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:()=>{}}}]);