var e=require("react"),r=require("@react-three/fiber"),t=require("@juggle/resize-observer"),n=require("query-string"),o=require("zustand"),i=require("react-merge-refs"),a=require("three"),u=require("react-intersection-observer"),c=require("debounce"),l=require("vecn"),s=require("suspend-react"),f=require("supports-webp"),d=require("fast-deep-equal"),p=require("@studio-freight/lenis");function v(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=/*#__PURE__*/v(e),y=/*#__PURE__*/v(o),h=/*#__PURE__*/v(i),g=/*#__PURE__*/v(c),b=/*#__PURE__*/v(l),w=/*#__PURE__*/v(f),S=/*#__PURE__*/v(d),E=/*#__PURE__*/v(p);function R(){return R=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},R.apply(this,arguments)}function O(e,r){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},O(e,r)}function T(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r.indexOf(t=i[n])>=0||(o[t]=e[t]);return o}function C(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof r?r:String(r)}var x="undefined"!=typeof window?e.useLayoutEffect:e.useEffect,I={PRIORITY_PRELOAD:0,PRIORITY_SCISSORS:1,PRIORITY_VIEWPORTS:1,PRIORITY_GLOBAL:1e3,DEFAULT_SCALE_MULTIPLIER:1,preloadQueue:[]},P=y.default(function(e){return{debug:!1,scaleMultiplier:I.DEFAULT_SCALE_MULTIPLIER,globalRender:!0,globalPriority:I.PRIORITY_GLOBAL,globalClearDepth:!1,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(r,t,n){return void 0===n&&(n={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,r)?(i[r].instances+=1,i[r].props.inactive=!1,{canvasChildren:i}):{canvasChildren:R({},i,((o={})[r]={mesh:t,props:n,instances:1},o))}})},updateCanvas:function(r,t){return e(function(e){var n,o=e.canvasChildren;if(o[r]){var i=o[r],a=i.instances;return{canvasChildren:R({},o,((n={})[r]={mesh:i.mesh,props:R({},i.props,t),instances:a},n))}}})},removeFromCanvas:function(r,t){return void 0===t&&(t=!0),e(function(e){var n,o=e.canvasChildren;return(null==(n=o[r])?void 0:n.instances)>1?(o[r].instances-=1,{canvasChildren:o}):t?{canvasChildren:T(o,[r].map(C))}:(o[r].instances=0,o[r].props.inactive=!0,{canvasChildren:R({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},scrollTo:function(e){return window.scrollTo(0,e)},onScroll:function(){return function(){}}}}),j=function(){var r=P(function(e){return e.requestReflow}),n=P(function(e){return e.debug});return e.useEffect(function(){"fonts"in document&&document.fonts.ready.then(function(){r(),n&&console.log("ResizeManager","webfont loaded")});var e=new(window.ResizeObserver||t.ResizeObserver)(function(){r(),n&&console.log("ResizeManager","document.body height changed")});return e.observe(document.body),function(){null==e||e.disconnect()}},[]),null},M=["makeDefault"],k=e.forwardRef(function(t,n){var o=t.makeDefault,i=void 0!==o&&o,a=T(t,M),u=r.useThree(function(e){return e.set}),c=r.useThree(function(e){return e.camera}),l=r.useThree(function(e){return e.size}),s=r.useThree(function(e){return e.viewport}),f=e.useRef(null),d=P(function(e){return e.pageReflow}),p=P(function(e){return e.scaleMultiplier}),v=e.useMemo(function(){var e,r=l.height*p,t=l.width*p/r,n=a.fov||50,o=null==a||null==(e=a.position)?void 0:e[2];return o?n=180/Math.PI*2*Math.atan(r/(2*o)):o=r/(2*Math.tan(n/2*Math.PI/180)),{fov:n,distance:o,aspect:t}},[l,p,d]),y=v.fov,g=v.distance,b=v.aspect;return x(function(){f.current.lookAt(0,0,0),f.current.updateProjectionMatrix(),f.current.updateMatrixWorld(),u(function(e){return{viewport:R({},e.viewport,s.getCurrentViewport(c))}})},[l,p,d]),x(function(){if(i){var e=c;return u(function(){return{camera:f.current}}),function(){return u(function(){return{camera:e}})}}},[f,i,u]),m.default.createElement("perspectiveCamera",R({ref:h.default([f,n]),position:[0,0,g],onUpdate:function(e){return e.updateProjectionMatrix()},near:.1,aspect:b,fov:y,far:2*g},a))}),_=["makeDefault"],V=e.forwardRef(function(t,n){var o=t.makeDefault,i=void 0!==o&&o,a=T(t,_),u=r.useThree(function(e){return e.set}),c=r.useThree(function(e){return e.camera}),l=r.useThree(function(e){return e.size}),s=P(function(e){return e.pageReflow}),f=P(function(e){return e.scaleMultiplier}),d=e.useMemo(function(){return Math.max(l.width*f,l.height*f)},[l,s,f]),p=e.useRef(null);return x(function(){p.current.lookAt(0,0,0),p.current.updateProjectionMatrix(),p.current.updateMatrixWorld()},[d,l]),x(function(){if(i){var e=c;return u(function(){return{camera:p.current}}),function(){return u(function(){return{camera:e}})}}},[p,i,u]),m.default.createElement("orthographicCamera",R({left:l.width*f/-2,right:l.width*f/2,top:l.height*f/2,bottom:l.height*f/-2,far:2*d,position:[0,0,d],near:.001,ref:h.default([p,n]),onUpdate:function(e){return e.updateProjectionMatrix()}},a))});function L(e,r){e&&(!1===r?(e.wasFrustumCulled=e.frustumCulled,e.wasVisible=e.visible,e.visible=!0,e.frustumCulled=!1):(e.visible=!!e.wasVisible,e.frustumCulled=!!e.wasFrustumCulled),e.children.forEach(function(e){return L(e,r)}))}var $=new a.Vector2,A=function(e){void 0===e&&(e=[0]),P.getState().globalRenderQueue=P.getState().globalRenderQueue||[0],P.getState().globalRenderQueue=[].concat(P.getState().globalRenderQueue||[],e)},D=function(e){var r=e.gl,t=e.scene,n=e.camera,o=e.left,i=e.top,a=e.width,u=e.height,c=e.layer,l=void 0===c?0:c,s=e.autoClear,f=e.clearDepth,d=void 0!==f&&f;t&&n&&(r.autoClear=void 0!==s&&s,r.setScissor(o,i,a,u),r.setScissorTest(!0),n.layers.set(l),d&&r.clearDepth(),r.render(t,n),r.setScissorTest(!1))},q=function(e){var r=e.gl,t=e.scene,n=e.camera,o=e.left,i=e.top,a=e.width,u=e.height,c=e.layer,l=void 0===c?0:c,s=e.scissor,f=void 0===s||s,d=e.autoClear,p=void 0!==d&&d,v=e.clearDepth,m=void 0!==v&&v;t&&n&&(r.getSize($),r.autoClear=p,r.setViewport(o,i,a,u),r.setScissor(o,i,a,u),r.setScissorTest(f),n.layers.set(l),m&&r.clearDepth(),r.render(t,n),r.setScissorTest(!1),r.setViewport(0,0,$.x,$.y))},F=function(e,t,n,o){void 0===n&&(n=0),I.preloadQueue.push(function(r,i,a){r.setScissorTest(!1),L(e||i,!1),t.layers.set(n),r.render(e||i,t||a),L(e||i,!0),o&&o()}),r.invalidate()},z=function(){var r=P(function(e){return e.isCanvasAvailable}),t=P(function(e){return e.hasSmoothScrollbar}),n=P(function(e){return e.requestReflow}),o=P(function(e){return e.pageReflow}),i=P(function(e){return e.debug}),a=P(function(e){return e.scaleMultiplier});return e.useEffect(function(){i&&(window._scrollRig=window._scrollRig||{},window._scrollRig.reflow=n)},[]),{debug:i,isCanvasAvailable:r,hasSmoothScrollbar:t,scaleMultiplier:a,preloadScene:F,requestRender:A,renderScissor:D,renderViewport:q,reflow:n,reflowCompleted:o}},U=function(t){var n=t.children,o=P(function(e){return e.canvasChildren}),i=z();return e.useEffect(function(){Object.keys(o).length||(i.debug&&console.log("GlobalRenderer","auto render empty canvas"),i.requestRender(),r.invalidate())},[o]),i.debug&&console.log("GlobalChildren",Object.keys(o).length),m.default.createElement(m.default.Fragment,null,n,Object.keys(o).map(function(r){var t=o[r],n=t.mesh,a=t.props;return"function"==typeof n?m.default.createElement(e.Fragment,{key:r},n(R({key:r},i,a))):e.cloneElement(n,R({key:r},a))}))},N=function(){var e=r.useThree(function(e){return e.gl}),t=r.useThree(function(e){return e.frameloop}),n=P(function(e){return e.globalClearDepth}),o=P(function(e){return e.globalPriority}),i=z();return x(function(){e.debug.checkShaderErrors=i.debug},[i.debug]),r.useFrame(function(t){var n=t.camera,o=t.scene;I.preloadQueue.length&&(I.preloadQueue.forEach(function(r){return r(e,o,n)}),e.clear(),I.preloadQueue=[],i.debug&&console.log("GlobalRenderer","preload complete. trigger global render"),i.requestRender(),r.invalidate())},I.PRIORITY_PRELOAD),r.useFrame(function(r){var o=r.camera,i=r.scene,a=P.getState().globalRenderQueue;("always"===t||a)&&(o.layers.disableAll(),a?a.forEach(function(e){o.layers.enable(e)}):o.layers.enable(0),n&&e.clearDepth(),e.render(i,o)),P.getState().clearGlobalRenderQueue()},o),null};function Y(e){var r={exports:{}};return e(r,r.exports),r.exports}var W="function"==typeof Symbol&&Symbol.for,B=W?Symbol.for("react.element"):60103,Q=W?Symbol.for("react.portal"):60106,G=W?Symbol.for("react.fragment"):60107,H=W?Symbol.for("react.strict_mode"):60108,X=W?Symbol.for("react.profiler"):60114,J=W?Symbol.for("react.provider"):60109,K=W?Symbol.for("react.context"):60110,Z=W?Symbol.for("react.async_mode"):60111,ee=W?Symbol.for("react.concurrent_mode"):60111,re=W?Symbol.for("react.forward_ref"):60112,te=W?Symbol.for("react.suspense"):60113,ne=W?Symbol.for("react.suspense_list"):60120,oe=W?Symbol.for("react.memo"):60115,ie=W?Symbol.for("react.lazy"):60116,ae=W?Symbol.for("react.block"):60121,ue=W?Symbol.for("react.fundamental"):60117,ce=W?Symbol.for("react.responder"):60118,le=W?Symbol.for("react.scope"):60119;function se(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case B:switch(e=e.type){case Z:case ee:case G:case X:case H:case te:return e;default:switch(e=e&&e.$$typeof){case K:case re:case ie:case oe:case J:return e;default:return r}}case Q:return r}}}function fe(e){return se(e)===ee}var de={AsyncMode:Z,ConcurrentMode:ee,ContextConsumer:K,ContextProvider:J,Element:B,ForwardRef:re,Fragment:G,Lazy:ie,Memo:oe,Portal:Q,Profiler:X,StrictMode:H,Suspense:te,isAsyncMode:function(e){return fe(e)||se(e)===Z},isConcurrentMode:fe,isContextConsumer:function(e){return se(e)===K},isContextProvider:function(e){return se(e)===J},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===B},isForwardRef:function(e){return se(e)===re},isFragment:function(e){return se(e)===G},isLazy:function(e){return se(e)===ie},isMemo:function(e){return se(e)===oe},isPortal:function(e){return se(e)===Q},isProfiler:function(e){return se(e)===X},isStrictMode:function(e){return se(e)===H},isSuspense:function(e){return se(e)===te},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===G||e===ee||e===X||e===H||e===te||e===ne||"object"==typeof e&&null!==e&&(e.$$typeof===ie||e.$$typeof===oe||e.$$typeof===J||e.$$typeof===K||e.$$typeof===re||e.$$typeof===ue||e.$$typeof===ce||e.$$typeof===le||e.$$typeof===ae)},typeOf:se},pe=Y(function(e,r){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var p=e.type;switch(p){case l:case s:case o:case a:case i:case d:return p;default:var y=p&&p.$$typeof;switch(y){case c:case f:case m:case v:case u:return y;default:return r}}case n:return r}}}var S=s,E=c,R=u,O=t,T=f,C=o,x=m,I=v,P=n,j=a,M=i,k=d,_=!1;function V(e){return w(e)===s}r.AsyncMode=l,r.ConcurrentMode=S,r.ContextConsumer=E,r.ContextProvider=R,r.Element=O,r.ForwardRef=T,r.Fragment=C,r.Lazy=x,r.Memo=I,r.Portal=P,r.Profiler=j,r.StrictMode=M,r.Suspense=k,r.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),V(e)||w(e)===l},r.isConcurrentMode=V,r.isContextConsumer=function(e){return w(e)===c},r.isContextProvider=function(e){return w(e)===u},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return w(e)===f},r.isFragment=function(e){return w(e)===o},r.isLazy=function(e){return w(e)===m},r.isMemo=function(e){return w(e)===v},r.isPortal=function(e){return w(e)===n},r.isProfiler=function(e){return w(e)===a},r.isStrictMode=function(e){return w(e)===i},r.isSuspense=function(e){return w(e)===d},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===a||e===i||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===v||e.$$typeof===u||e.$$typeof===c||e.$$typeof===f||e.$$typeof===h||e.$$typeof===g||e.$$typeof===b||e.$$typeof===y)},r.typeOf=w}()}),ve=Y(function(e){e.exports="production"===process.env.NODE_ENV?de:pe}),me=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;function ge(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var be=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(e){return r[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var t,n,o=ge(e),i=1;i<arguments.length;i++){for(var a in t=Object(arguments[i]))ye.call(t,a)&&(o[a]=t[a]);if(me){n=me(t);for(var u=0;u<n.length;u++)he.call(t,n[u])&&(o[n[u]]=t[n[u]])}}return o},we=Function.call.bind(Object.prototype.hasOwnProperty),Se="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ee=we,Re=function(){};if("production"!==process.env.NODE_ENV){var Oe=Se,Te={},Ce=Ee;Re=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function xe(e,r,t,n,o){if("production"!==process.env.NODE_ENV)for(var i in e)if(Ce(e,i)){var a;try{if("function"!=typeof e[i]){var u=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}a=e[i](r,i,n,t,null,Oe)}catch(e){a=e}if(!a||a instanceof Error||Re((n||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in Te)){Te[a.message]=!0;var c=o?o():"";Re("Failed "+t+" type: "+a.message+(null!=c?c:""))}}}xe.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(Te={})};var Ie=xe,Pe=function(){};function je(){return null}function Me(){}function ke(){}"production"!==process.env.NODE_ENV&&(Pe=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}),ke.resetWarningCache=Me;var _e=Y(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,n="<<anonymous>>",o={array:c("array"),bigint:c("bigint"),bool:c("boolean"),func:c("function"),number:c("number"),object:c("object"),string:c("string"),symbol:c("symbol"),any:u(je),arrayOf:function(e){return u(function(r,t,n,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var u=r[t];if(!Array.isArray(u))return new a("Invalid "+o+" `"+i+"` of type `"+f(u)+"` supplied to `"+n+"`, expected an array.");for(var c=0;c<u.length;c++){var l=e(u,c,n,o,i+"["+c+"]",Se);if(l instanceof Error)return l}return null})},element:u(function(r,t,n,o,i){var u=r[t];return e(u)?null:new a("Invalid "+o+" `"+i+"` of type `"+f(u)+"` supplied to `"+n+"`, expected a single ReactElement.")}),elementType:u(function(e,r,t,n,o){var i=e[r];return ve.isValidElementType(i)?null:new a("Invalid "+n+" `"+o+"` of type `"+f(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(e){return u(function(r,t,o,i,u){return r[t]instanceof e?null:new a("Invalid "+i+" `"+u+"` of type `"+((c=r[t]).constructor&&c.constructor.name?c.constructor.name:n)+"` supplied to `"+o+"`, expected instance of `"+(e.name||n)+"`.");var c})},node:u(function(e,r,t,n,o){return s(e[r])?null:new a("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(e){return u(function(r,t,n,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var u=r[t],c=f(u);if("object"!==c)return new a("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var l in u)if(Ee(u,l)){var s=e(u,l,n,o,i+"."+l,Se);if(s instanceof Error)return s}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&Pe(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),je;function r(r,t,n,o,u){for(var c=r[t],l=0;l<e.length;l++)if(i(c,e[l]))return null;var s=JSON.stringify(e,function(e,r){return"symbol"===d(r)?String(r):r});return new a("Invalid "+o+" `"+u+"` of value `"+String(c)+"` supplied to `"+n+"`, expected one of "+s+".")}return u(r)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&Pe("Invalid argument supplied to oneOfType, expected an instance of array."),je;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return Pe("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+p(t)+" at index "+r+"."),je}return u(function(r,t,n,o,i){for(var u=[],c=0;c<e.length;c++){var l=(0,e[c])(r,t,n,o,i,Se);if(null==l)return null;l.data&&Ee(l.data,"expectedType")&&u.push(l.data.expectedType)}return new a("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(u.length>0?", expected one of type ["+u.join(", ")+"]":"")+".")})},shape:function(e){return u(function(r,t,n,o,i){var u=r[t],c=f(u);if("object"!==c)return new a("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");for(var s in e){var p=e[s];if("function"!=typeof p)return l(n,o,i,s,d(p));var v=p(u,s,n,o,i+"."+s,Se);if(v)return v}return null})},exact:function(e){return u(function(r,t,n,o,i){var u=r[t],c=f(u);if("object"!==c)return new a("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var s=be({},r[t],e);for(var p in s){var v=e[p];if(Ee(e,p)&&"function"!=typeof v)return l(n,o,i,p,d(v));if(!v)return new a("Invalid "+o+" `"+i+"` key `"+p+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=v(u,p,n,o,i+"."+p,Se);if(m)return m}return null})}};function i(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function a(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function u(e){function r(r,t,o,i,u,c,l){if(i=i||n,c=c||o,l!==Se){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}return null==t[o]?r?new a(null===t[o]?"The "+u+" `"+c+"` is marked as required in `"+i+"`, but its value is `null`.":"The "+u+" `"+c+"` is marked as required in `"+i+"`, but its value is `undefined`."):null:e(t,o,i,u,c)}process;var t=r.bind(null,!1);return t.isRequired=r.bind(null,!0),t}function c(e){return u(function(r,t,n,o,i,u){var c=r[t];return f(c)!==e?new a("Invalid "+o+" `"+i+"` of type `"+d(c)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null})}function l(e,r,t,n,o){return new a((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function s(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(s);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!n)return!1;var o,i=n.call(r);if(n!==r.entries){for(;!(o=i.next()).done;)if(!s(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!s(a[1]))return!1}return!0;default:return!1}}function f(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function d(e){if(null==e)return""+e;var r=f(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function p(e){var r=d(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return a.prototype=Error.prototype,o.checkPropTypes=Ie,o.resetWarningCache=Ie.resetWarningCache,o.PropTypes=o,o}(ve.isElement):function(){function e(e,r,t,n,o,i){if(i!==Se){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:ke,resetWarningCache:Me};return t.PropTypes=t,t}()}),Ve=/*#__PURE__*/function(e){var r,t;function n(r){var t;return(t=e.call(this,r)||this).state={error:!1},t.props=r,t}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,O(r,t),n.getDerivedStateFromError=function(e){return{error:e}},n.prototype.render=function(){return this.state.error?(this.props.onError&&this.props.onError(this.state.error),null):this.props.children},n}(m.default.Component);Ve.propTypes={onError:_e.func};var Le,$e=["as","children","gl","style","orthographic","camera","debug","scaleMultiplier","globalRender","globalPriority","globalClearDepth"],Ae=["children","onError"];"undefined"!=typeof window&&(Le=window.ResizeObserver||t.ResizeObserver);var De=function(e){var t=e.as,o=void 0===t?r.Canvas:t,i=e.children,a=e.gl,u=e.style,c=e.orthographic,l=e.camera,s=e.debug,f=e.scaleMultiplier,d=void 0===f?I.DEFAULT_SCALE_MULTIPLIER:f,p=e.globalRender,v=void 0===p||p,y=e.globalPriority,h=void 0===y?I.PRIORITY_GLOBAL:y,g=e.globalClearDepth,b=void 0!==g&&g,w=T(e,$e),S=P(function(e){return e.globalRender});return x(function(){var e=n.parse(window.location.search);(s||void 0!==e.debug)&&P.setState({debug:!0})},[s]),x(function(){P.setState({scaleMultiplier:d,globalRender:v,globalPriority:h,globalClearDepth:b})},[d,h,v,b]),m.default.createElement(o,R({id:"ScrollRig-canvas",camera:{manual:!0},gl:R({failIfMajorPerformanceCaveat:!0},a),resize:{scroll:!1,debounce:0,polyfill:Le},style:R({position:"fixed",top:0,left:0,right:0,height:"100vh"},u)},w),!c&&m.default.createElement(k,R({manual:!0,makeDefault:!0},l)),c&&m.default.createElement(V,R({manual:!0,makeDefault:!0},l)),S&&m.default.createElement(N,null),"function"==typeof i?i(m.default.createElement(U,null)):m.default.createElement(U,null,i),m.default.createElement(j,null))},qe=function(e){return m.default.createElement("mesh",{scale:e.scale},m.default.createElement("planeGeometry",null),m.default.createElement("shaderMaterial",{args:[{uniforms:{color:{value:new a.Color("hotpink")}},vertexShader:"\n            void main() {\n              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n          ",fragmentShader:"\n            uniform vec3 color;\n            uniform float opacity;\n            void main() {\n              gl_FragColor.rgba = vec4(color, .5);\n            }\n          "}],transparent:!0}))},Fe="undefined"!=typeof window;function ze(r){var n=(void 0===r?{}:r).debounce,o=void 0===n?0:n,i=e.useState({width:Fe?window.innerWidth:Infinity,height:Fe?window.innerHeight:Infinity}),a=i[0],u=i[1];return e.useEffect(function(){var e=document.getElementById("ScrollRig-canvas");function r(){var r=e?e.clientWidth:window.innerWidth,t=e?e.clientHeight:window.innerHeight;r===a.width&&t===a.height||u({width:r,height:t})}var n,i=g.default.debounce(r,o),c=window.ResizeObserver||t.ResizeObserver;return e?(n=new c(i)).observe(e):window.addEventListener("resize",i),r(),function(){var e;window.removeEventListener("resize",i),null==(e=n)||e.disconnect()}},[a,u]),a}function Ue(e,r,t,n,o){return n+(e-r)*(o-n)/(t-r)}var Ne=function(){return{enabled:P(function(e){return e.hasSmoothScrollbar}),scroll:P(function(e){return e.scroll}),scrollTo:P(function(e){return e.scrollTo}),onScroll:P(function(e){return e.onScroll})}};function Ye(r,t){var n=ze(),o=z().debug,i=Ne(),a=i.scroll,c=i.onScroll,l=P(function(e){return e.scaleMultiplier}),s=P(function(e){return e.pageReflow}),f=e.useMemo(function(){var e={rootMargin:"0%",threshold:0,autoUpdate:!0},r=t||{};return Object.keys(r).map(function(t,n){void 0!==r[t]&&(e[t]=r[t])}),e},[t]),d=f.autoUpdate,p=f.wrapper,v=u.useInView({rootMargin:f.rootMargin,threshold:f.threshold}),m=v.ref,y=v.inView;x(function(){m(r.current)},[r]);var h=e.useState(b.default.vec3(0,0,0)),g=h[0],w=h[1],S=e.useRef({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,E=e.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0}).current,O=e.useState(E),T=O[0],C=O[1],I=e.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,j=e.useRef(b.default.vec3(0,0,0)).current;x(function(){var e,t=null==(e=r.current)?void 0:e.getBoundingClientRect();if(t){var i=p?p.scrollTop:window.scrollY,a=p?p.scrollLeft:window.scrollX;E.top=t.top+i,E.bottom=t.bottom+i,E.left=t.left+a,E.right=t.right+a,E.width=t.width,E.height=t.height,C(R({},E)),w(b.default.vec3((null==E?void 0:E.width)*l,(null==E?void 0:E.height)*l,1)),o&&console.log("useTracker.getBoundingClientRect:",E,"intialScroll:",{initialY:i,initialX:a},"size:",n,"pageReflow:",s)}},[r,n,s,l,o]);var M=e.useCallback(function(e){var t=void 0===e?{}:e,o=t.onlyUpdateInViewport;if(r.current&&(void 0===o||!o||S.inViewport)){var i=t.scroll||a;!function(e,r,t,n){e.top=r.top-(t.y||0),e.bottom=r.bottom-(t.y||0),e.left=r.left-(t.x||0),e.right=r.right-(t.x||0),e.width=r.width,e.height=r.height,e.x=e.left+.5*r.width-.5*n.width,e.y=e.top+.5*r.height-.5*n.height,e.positiveYUpBottom=n.height-e.bottom}(I,E,i,n),function(e,r,t){e.x=r.x*t,e.y=-1*r.y*t}(j,I,l);var u="horizontal"===i.scrollDirection,c=u?"width":"height",s=n[c]-I[u?"left":"top"];S.progress=Ue(s,0,n[c]+I[c],0,1),S.visibility=Ue(s,0,I[c],0,1),S.viewport=Ue(s,0,n[c],0,1)}},[r,n,l,a]);return x(function(){S.inViewport=y,M({onlyUpdateInViewport:!1}),o&&console.log("useTracker.inViewport:",y,"update()")},[y]),x(function(){M({onlyUpdateInViewport:!1}),o&&console.log("useTracker.update on resize/reflow")},[M,s]),e.useEffect(function(){if(d)return c(function(e){return M({onlyUpdateInViewport:!0})})},[d,M,c]),{rect:T,bounds:I,scale:g,position:j,scrollState:S,inViewport:y,update:M}}var We=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","scissor","debug","as","priority"],Be=e.memo(function(t){var n=t.track,o=t.children,i=t.margin,u=void 0===i?0:i,c=t.inViewportMargin,l=t.inViewportThreshold,s=t.visible,f=void 0===s||s,d=t.hideOffscreen,p=void 0===d||d,v=t.scissor,y=void 0!==v&&v,h=t.debug,g=void 0!==h&&h,b=t.as,w=void 0===b?"scene":b,S=t.priority,E=void 0===S?I.PRIORITY_SCISSORS:S,O=T(t,We),C=e.useCallback(function(e){null!==e&&k(e)},[]),j=e.useState(y?new a.Scene:null),M=j[0],k=j[1],_=z(),V=_.requestRender,L=_.renderScissor,$=P(function(e){return e.globalRender}),A=Ye(n,{rootMargin:c,threshold:l}),D=A.bounds,q=A.scale,F=A.position,U=A.scrollState,N=A.inViewport;x(function(){M&&(M.visible=p?N&&f:f)},[M,N,p,f]),r.useFrame(function(e){var r=e.gl,t=e.camera;M&&M.visible&&(M.position.y=F.y,M.position.x=F.x,y?L({gl:r,scene:M,camera:t,left:D.left-u,top:D.positiveYUpBottom-u,width:D.width+2*u,height:D.height+2*u}):V())},$?E:void 0);var Y=m.default.createElement(m.default.Fragment,null,(!o||g)&&q&&m.default.createElement(qe,{scale:q}),o&&M&&q&&o(R({track:n,margin:u,scale:q,scrollState:U,inViewport:N,priority:E},O))),W=w;return y&&M?r.createPortal(Y,M):m.default.createElement(W,{ref:C},Y)}),Qe=["track","children","margin","visible","hideOffscreen","debug","orthographic","priority","inViewport","bounds","scale","scrollState","camera","hud"],Ge=["track","margin","inViewportMargin","inViewportThreshold","priority"],He=["bounds"],Xe=function(t){var n=t.track,o=t.children,i=t.margin,a=void 0===i?0:i,u=t.visible,c=void 0===u||u,l=t.hideOffscreen,s=void 0===l||l,f=t.debug,d=void 0!==f&&f,p=t.orthographic,v=void 0!==p&&p,y=t.priority,h=void 0===y?I.PRIORITY_VIEWPORTS:y,g=t.inViewport,b=t.bounds,w=t.scale,S=t.scrollState,E=t.camera,O=t.hud,C=T(t,Qe),P=r.useThree(function(e){return e.scene}),j=r.useThree(function(e){return e.get}),M=r.useThree(function(e){return e.setEvents}),_=z().renderViewport;return x(function(){P.visible=s?g&&c:c},[g,s,c]),e.useEffect(function(){var e=j().events.connected;return M({connected:n.current}),function(){return M({connected:e})}},[]),r.useFrame(function(e){var r=e.scene;r.visible&&_({gl:e.gl,scene:r,camera:e.camera,left:b.left-a,top:b.positiveYUpBottom-a,width:b.width+2*a,height:b.height+2*a,clearDepth:!!O})},h),m.default.createElement(m.default.Fragment,null,!v&&m.default.createElement(k,R({manual:!0,makeDefault:!0},E)),v&&m.default.createElement(V,R({manual:!0,makeDefault:!0},E)),(!o||d)&&w&&m.default.createElement(qe,{scale:w}),o&&w&&o(R({track:n,margin:a,scale:w,scrollState:S,inViewport:g,priority:h},C)))},Je=e.memo(function(t){var n=t.track,o=t.margin,i=void 0===o?0:o,u=t.inViewportMargin,c=t.inViewportThreshold,l=t.priority,s=T(t,Ge),f=e.useState(function(){return new a.Scene})[0],d=Ye(n,{rootMargin:u,threshold:c}),p=d.bounds,v=T(d,He),y=e.useCallback(function(e,r){n.current&&e.target===n.current&&(r.pointer.set((e.clientX-p.left+i)/(p.width+2*i)*2-1,-(e.clientY-p.top+i)/(p.height+2*i)*2+1),r.raycaster.setFromCamera(r.pointer,r.camera))},[p]);return p&&r.createPortal(m.default.createElement(Xe,R({track:n,bounds:p,priority:l,margin:i},s,v)),f,{events:{compute:y,priority:l},size:{width:p.width,height:p.height}})});function Ke(r,t,n){void 0===t&&(t={});var o=void 0===n?{}:n,i=o.key,u=o.dispose,c=void 0===u||u,l=P(function(e){return e.updateCanvas}),s=P(function(e){return e.renderToCanvas}),f=P(function(e){return e.removeFromCanvas}),d=e.useMemo(function(){return i||a.MathUtils.generateUUID()},[]);x(function(){s(d,r,{inactive:!1})},[d]),e.useEffect(function(){return function(){f(d,c)}},[d]);var p=e.useCallback(function(e){l(d,e)},[l,d]);return e.useEffect(function(){p(t)},[].concat(Object.values(t))),p}var Ze=["children","id"],er=e.forwardRef(function(e,r){var t=e.id;return Ke(e.children,R({},T(e,Ze),{ref:r}),{key:t}),null}),rr=!1;w.default.then(function(e){rr=e});var tr=e.forwardRef(function(r,t){var n=r.children,o=r.enabled,i=void 0===o||o,a=r.locked,u=void 0!==a&&a,c=r.scrollRestoration,l=void 0===c?"auto":c,s=r.disablePointerOnScroll,f=void 0===s||s,d=r.horizontal,p=void 0!==d&&d,v=r.scrollInContainer,m=void 0!==v&&v,y=r.updateGlobalState,h=void 0===y||y,g=r.onScroll,b=r.config,w=void 0===b?{}:b,S=r.invalidate,O=void 0===S?function(){}:S,T=r.addEffect,C=e.useRef(),I=e.useRef(),j=e.useRef(!1),M=P(function(e){return e.scroll});e.useImperativeHandle(t,function(){return{start:function(){var e;return null==(e=I.current)?void 0:e.start()},stop:function(){var e;return null==(e=I.current)?void 0:e.stop()},on:function(e,r){var t;return null==(t=I.current)?void 0:t.on(e,r)},once:function(e,r){var t;return null==(t=I.current)?void 0:t.once(e,r)},off:function(e,r){var t;return null==(t=I.current)?void 0:t.off(e,r)},notify:function(){var e;return null==(e=I.current)?void 0:e.notify()},scrollTo:function(e,r){var t;return null==(t=I.current)?void 0:t.scrollTo(e,r)},raf:function(e){var r;return null==(r=I.current)?void 0:r.raf(e)},__lenis:I.current}});var k=e.useCallback(function(e){f&&C.current&&j.current!==e&&(j.current=e,C.current.style.pointerEvents=e?"none":"auto")},[f,C,j]);return x(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=l)},[]),x(function(){var e,r,t=document.documentElement,n=document.body,o=document.body.firstElementChild;return t.classList.toggle("ScrollRig-scrollHtml",m),n.classList.toggle("ScrollRig-scrollWrapper",m),m&&Object.assign(w,{smoothTouch:!0,wrapper:n,content:o}),I.current=new E.default(R({direction:p?"horizontal":"vertical"},w)),T?e=T(function(e){var r;return null==(r=I.current)?void 0:r.raf(e)}):(r=requestAnimationFrame(function e(t){var n;null==(n=I.current)||n.raf(t),r=requestAnimationFrame(e)}),e=function(){return cancelAnimationFrame(r)}),function(){var r;e(),null==(r=I.current)||r.destroy()}},[]),x(function(){var e,r,t;return null==(e=I.current)||e.on("scroll",function(e){var r=e.scroll,t=e.limit,n=e.velocity,o=e.direction,i=e.progress,a=p?r:0;h&&(M.y=p?0:r,M.x=a,M.limit=t,M.velocity=n,M.direction=o,M.progress=i),Math.abs(n)>1.5&&k(!0),Math.abs(n)<1&&k(!1),g&&g({scroll:r,limit:t,velocity:n,direction:o,progress:i}),O()}),h&&(M.scrollDirection=p?"horizontal":"vertical",P.setState({scrollTo:null==(t=I.current)?void 0:t.scrollTo}),P.setState({onScroll:function(e){var r,t;return null==(r=I.current)||r.on("scroll",e),null==(t=I.current)||t.notify(),function(){var r;return null==(r=I.current)?void 0:r.off("scroll",e)}}}),P.getState().scroll.y=window.scrollY,P.getState().scroll.x=window.scrollX),null==(r=I.current)||r.notify(),function(){var e;null==(e=I.current)||e.off("scroll")}},[]),x(function(){var e=function(){return O()},r=function(){return k(!1)};return window.addEventListener("pointermove",r),window.addEventListener("pointerdown",r),window.addEventListener("wheel",e),function(){var t;null==(t=I.current)||t.off("scroll"),window.removeEventListener("pointermove",r),window.removeEventListener("pointerdown",r),window.removeEventListener("wheel",e)}},[]),e.useEffect(function(){h&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",i),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!i),P.setState({hasSmoothScrollbar:i}))},[i]),e.useEffect(function(){var e,r;u?null==(e=I.current)||e.stop():null==(r=I.current)||r.start()},[u]),n({ref:C})}),nr=e.forwardRef(function(e,t){return m.default.createElement(tr,R({ref:t,invalidate:r.invalidate,addEffect:r.addEffect},e))});exports.GlobalCanvas=function(e){var r=e.children,t=e.onError,n=T(e,Ae);return x(function(){document.documentElement.classList.add("js-has-global-canvas")},[]),m.default.createElement(Ve,{onError:function(e){t&&t(e),P.setState({isCanvasAvailable:!1}),document.documentElement.classList.remove("js-has-global-canvas"),document.documentElement.classList.add("js-global-canvas-error")}},m.default.createElement(De,R({},n),r),m.default.createElement("noscript",null,m.default.createElement("style",null,"\n          .ScrollRig-visibilityHidden,\n          .ScrollRig-transparentColor {\n            visibility: unset;\n            color: unset;\n          }\n          ")))},exports.ScrollScene=Be,exports.SmoothScrollbar=nr,exports.UseCanvas=er,exports.ViewportScrollScene=Je,exports.styles={hidden:"ScrollRig-visibilityHidden",hiddenWhenSmooth:"ScrollRig-visibilityHidden ScrollRig-hiddenIfSmooth",transparentColor:"ScrollRig-transparentColor",transparentColorWhenSmooth:"ScrollRig-transparentColor ScrollRig-hiddenIfSmooth"},exports.useCanvas=Ke,exports.useCanvasStore=P,exports.useImageAsTexture=function(t,n){var o,i,u,c=void 0===n?{}:n,l=c.initTexture,f=void 0===l||l,d=c.premultiplyAlpha,p=void 0===d?"default":d,v=r.useThree(function(e){return e.gl}),m=ze(),y=P(function(e){return e.debug}),h=s.suspend(function(){return a.DefaultLoadingManager.itemStart("waiting for DOM image"),new Promise(function(e){var r=t.current;function n(){e(null==r?void 0:r.currentSrc)}null==r||r.addEventListener("load",n,{once:!0}),null!=r&&r.complete&&(null==r||r.removeEventListener("load",n),n())})},[t,m],{equal:S.default}),g=(o=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),u=(i=navigator.userAgent.indexOf("Firefox")>-1)?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1,"undefined"==typeof createImageBitmap||o||i&&u<98?a.TextureLoader:a.ImageBitmapLoader),b=r.useLoader(g,h,function(e){e instanceof a.ImageBitmapLoader&&(e.setOptions({colorSpaceConversion:"none",premultiplyAlpha:p,imageOrientation:"flipY"}),e.setRequestHeader({Accept:(rr?"image/webp,":"")+"*/*"}))}),w=e.useMemo(function(){return b instanceof a.Texture?b:b instanceof ImageBitmap?new a.CanvasTexture(b):void 0},[b]);return e.useEffect(function(){f&&v.initTexture(w),a.DefaultLoadingManager.itemEnd("waiting for DOM image"),y&&console.log("useImageAsTexture","initTexture()")},[v,w,f]),w},exports.useScrollRig=z,exports.useScrollbar=Ne,exports.useTracker=Ye;
//# sourceMappingURL=scrollrig.cjs.map
