var e=require("zustand"),t=require("react"),r=require("@studio-freight/lenis"),n=require("react-intersection-observer"),o=require("@juggle/resize-observer"),i=require("debounce"),l=require("vecn"),u=require("three"),c=require("@react-three/fiber");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=/*#__PURE__*/a(e),d=/*#__PURE__*/a(r),f=/*#__PURE__*/a(i),v=/*#__PURE__*/a(l);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}var w={PRIORITY_PRELOAD:0,PRIORITY_SCISSORS:1,PRIORITY_VIEWPORTS:1,PRIORITY_GLOBAL:1e3,DEFAULT_SCALE_MULTIPLIER:1,preloadQueue:[]},g=s.default(function(e){return{debug:!1,scaleMultiplier:w.DEFAULT_SCALE_MULTIPLIER,globalRender:!0,globalPriority:w.PRIORITY_GLOBAL,globalClearDepth:!1,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(t,r,n){return void 0===n&&(n={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,t)?(i[t].instances+=1,i[t].props.inactive=!1,{canvasChildren:i}):{canvasChildren:h({},i,((o={})[t]={mesh:r,props:n,instances:1},o))}})},updateCanvas:function(t,r){return e(function(e){var n,o=e.canvasChildren;if(o[t]){var i=o[t],l=i.instances;return{canvasChildren:h({},o,((n={})[t]={mesh:i.mesh,props:h({},i.props,r),instances:l},n))}}})},removeFromCanvas:function(t,r){return void 0===r&&(r=!0),e(function(e){var n,o=e.canvasChildren;return(null==(n=o[t])?void 0:n.instances)>1?(o[t].instances-=1,{canvasChildren:o}):r?{canvasChildren:function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}(o,[t].map(p))}:(o[t].instances=0,o[t].props.inactive=!0,{canvasChildren:h({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},scrollTo:function(e){return window.scrollTo(0,e)},onScroll:function(){return function(){}}}}),b=function(){return{enabled:g(function(e){return e.hasSmoothScrollbar}),scroll:g(function(e){return e.scroll}),scrollTo:g(function(e){return e.scrollTo}),onScroll:g(function(e){return e.onScroll})}},m="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,S=t.forwardRef(function(e,r){var n=e.children,o=e.enabled,i=void 0===o||o,l=e.locked,u=void 0!==l&&l,c=e.scrollRestoration,a=void 0===c?"auto":c,s=e.disablePointerOnScroll,f=void 0===s||s,v=e.horizontal,p=void 0!==v&&v,w=e.scrollInContainer,b=void 0!==w&&w,S=e.updateGlobalState,y=void 0===S||S,R=e.onScroll,C=e.config,E=void 0===C?{}:C,T=e.invalidate,L=void 0===T?function(){}:T,I=e.addEffect,O=t.useRef(),V=t.useRef(),P=t.useRef(!1),q=g(function(e){return e.scroll});t.useImperativeHandle(r,function(){return{start:function(){var e;return null==(e=V.current)?void 0:e.start()},stop:function(){var e;return null==(e=V.current)?void 0:e.stop()},on:function(e,t){var r;return null==(r=V.current)?void 0:r.on(e,t)},once:function(e,t){var r;return null==(r=V.current)?void 0:r.once(e,t)},off:function(e,t){var r;return null==(r=V.current)?void 0:r.off(e,t)},notify:function(){var e;return null==(e=V.current)?void 0:e.notify()},scrollTo:function(e,t){var r;return null==(r=V.current)?void 0:r.scrollTo(e,t)},raf:function(e){var t;return null==(t=V.current)?void 0:t.raf(e)},__lenis:V.current}});var x=t.useCallback(function(e){f&&O.current&&P.current!==e&&(P.current=e,O.current.style.pointerEvents=e?"none":"auto")},[f,O,P]);return m(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=a)},[]),m(function(){var e,t,r=document.documentElement,n=document.body,o=document.body.firstElementChild;return r.classList.toggle("ScrollRig-scrollHtml",b),n.classList.toggle("ScrollRig-scrollWrapper",b),b&&Object.assign(E,{smoothTouch:!0,wrapper:n,content:o}),V.current=new d.default(h({direction:p?"horizontal":"vertical"},E)),I?e=I(function(e){var t;return null==(t=V.current)?void 0:t.raf(e)}):(t=requestAnimationFrame(function e(r){var n;null==(n=V.current)||n.raf(r),t=requestAnimationFrame(e)}),e=function(){return cancelAnimationFrame(t)}),function(){var t;e(),null==(t=V.current)||t.destroy()}},[]),m(function(){var e,t,r;return null==(e=V.current)||e.on("scroll",function(e){var t=e.scroll,r=e.limit,n=e.velocity,o=e.direction,i=e.progress,l=p?t:0;y&&(q.y=p?0:t,q.x=l,q.limit=r,q.velocity=n,q.direction=o,q.progress=i),Math.abs(n)>1.5&&x(!0),Math.abs(n)<1&&x(!1),R&&R({scroll:t,limit:r,velocity:n,direction:o,progress:i}),L()}),y&&(q.scrollDirection=p?"horizontal":"vertical",g.setState({scrollTo:null==(r=V.current)?void 0:r.scrollTo}),g.setState({onScroll:function(e){var t,r;return null==(t=V.current)||t.on("scroll",e),null==(r=V.current)||r.notify(),function(){var t;return null==(t=V.current)?void 0:t.off("scroll",e)}}}),g.getState().scroll.y=window.scrollY,g.getState().scroll.x=window.scrollX),null==(t=V.current)||t.notify(),function(){var e;null==(e=V.current)||e.off("scroll")}},[]),m(function(){var e=function(){return L()},t=function(){return x(!1)};return window.addEventListener("pointermove",t),window.addEventListener("pointerdown",t),window.addEventListener("wheel",e),function(){var r;null==(r=V.current)||r.off("scroll"),window.removeEventListener("pointermove",t),window.removeEventListener("pointerdown",t),window.removeEventListener("wheel",e)}},[]),t.useEffect(function(){y&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",i),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!i),g.setState({hasSmoothScrollbar:i}))},[i]),t.useEffect(function(){var e,t;u?null==(e=V.current)||e.stop():null==(t=V.current)||t.start()},[u]),n({ref:O})}),y="undefined"!=typeof window;function R(e,t,r,n,o){return n+(e-t)*(o-n)/(r-t)}function C(e,t){e&&(!1===t?(e.wasFrustumCulled=e.frustumCulled,e.wasVisible=e.visible,e.visible=!0,e.frustumCulled=!1):(e.visible=!!e.wasVisible,e.frustumCulled=!!e.wasFrustumCulled),e.children.forEach(function(e){return C(e,t)}))}var E=new u.Vector2,T=function(e){void 0===e&&(e=[0]),g.getState().globalRenderQueue=g.getState().globalRenderQueue||[0],g.getState().globalRenderQueue=[].concat(g.getState().globalRenderQueue||[],e)},L=function(e){var t=e.gl,r=e.scene,n=e.camera,o=e.left,i=e.top,l=e.width,u=e.height,c=e.layer,a=void 0===c?0:c,s=e.autoClear,d=e.clearDepth,f=void 0!==d&&d;r&&n&&(t.autoClear=void 0!==s&&s,t.setScissor(o,i,l,u),t.setScissorTest(!0),n.layers.set(a),f&&t.clearDepth(),t.render(r,n),t.setScissorTest(!1))},I=function(e){var t=e.gl,r=e.scene,n=e.camera,o=e.left,i=e.top,l=e.width,u=e.height,c=e.layer,a=void 0===c?0:c,s=e.scissor,d=void 0===s||s,f=e.autoClear,v=void 0!==f&&f,h=e.clearDepth,p=void 0!==h&&h;r&&n&&(t.getSize(E),t.autoClear=v,t.setViewport(o,i,l,u),t.setScissor(o,i,l,u),t.setScissorTest(d),n.layers.set(a),p&&t.clearDepth(),t.render(r,n),t.setScissorTest(!1),t.setViewport(0,0,E.x,E.y))},O=function(e,t,r,n){void 0===r&&(r=0),w.preloadQueue.push(function(o,i,l){o.setScissorTest(!1),C(e||i,!1),t.layers.set(r),o.render(e||i,t||l),C(e||i,!0),n&&n()}),c.invalidate()};exports.SmoothScrollbar=S,exports.useScrollbar=b,exports.useTracker=function(e,r){var i=function(e){var r={}.debounce,n=void 0===r?0:r,i=t.useState({width:y?window.innerWidth:Infinity,height:y?window.innerHeight:Infinity}),l=i[0],u=i[1];return t.useEffect(function(){var e=document.getElementById("ScrollRig-canvas");function t(){var t=e?e.clientWidth:window.innerWidth,r=e?e.clientHeight:window.innerHeight;t===l.width&&r===l.height||u({width:t,height:r})}var r,i=f.default.debounce(t,n),c=window.ResizeObserver||o.ResizeObserver;return e?(r=new c(i)).observe(e):window.addEventListener("resize",i),t(),function(){var e;window.removeEventListener("resize",i),null==(e=r)||e.disconnect()}},[l,u]),l}(),l=function(){var e=g(function(e){return e.isCanvasAvailable}),r=g(function(e){return e.hasSmoothScrollbar}),n=g(function(e){return e.requestReflow}),o=g(function(e){return e.pageReflow}),i=g(function(e){return e.debug}),l=g(function(e){return e.scaleMultiplier});return t.useEffect(function(){i&&(window._scrollRig=window._scrollRig||{},window._scrollRig.reflow=n)},[]),{debug:i,isCanvasAvailable:e,hasSmoothScrollbar:r,scaleMultiplier:l,preloadScene:O,requestRender:T,renderScissor:L,renderViewport:I,reflow:n,reflowCompleted:o}}(),u=l.debug,c=b(),a=c.scroll,s=c.onScroll,d=g(function(e){return e.scaleMultiplier}),p=g(function(e){return e.pageReflow}),w=t.useMemo(function(){var e={rootMargin:"0%",threshold:0,autoUpdate:!0},t=r||{};return Object.keys(t).map(function(r,n){void 0!==t[r]&&(e[r]=t[r])}),e},[r]),S=w.autoUpdate,C=w.wrapper,E=n.useInView({rootMargin:w.rootMargin,threshold:w.threshold}),V=E.ref,P=E.inView;m(function(){V(e.current)},[e]);var q=t.useState(v.default.vec3(0,0,0)),x=q[0],_=q[1],j=t.useRef({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,z=t.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0}).current,A=t.useState(z),D=A[0],M=A[1],U=t.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,Y=t.useRef(v.default.vec3(0,0,0)).current;m(function(){var t,r=null==(t=e.current)?void 0:t.getBoundingClientRect();if(r){var n=C?C.scrollTop:window.scrollY,o=C?C.scrollLeft:window.scrollX;z.top=r.top+n,z.bottom=r.bottom+n,z.left=r.left+o,z.right=r.right+o,z.width=r.width,z.height=r.height,M(h({},z)),_(v.default.vec3((null==z?void 0:z.width)*d,(null==z?void 0:z.height)*d,1)),u&&console.log("useTracker.getBoundingClientRect:",z,"intialScroll:",{initialY:n,initialX:o},"size:",i,"pageReflow:",p)}},[e,i,p,d,u]);var k=t.useCallback(function(t){var r=void 0===t?{}:t,n=r.onlyUpdateInViewport;if(e.current&&(void 0===n||!n||j.inViewport)){var o=r.scroll||a;!function(e,t,r,n){e.top=t.top-(r.y||0),e.bottom=t.bottom-(r.y||0),e.left=t.left-(r.x||0),e.right=t.right-(r.x||0),e.width=t.width,e.height=t.height,e.x=e.left+.5*t.width-.5*n.width,e.y=e.top+.5*t.height-.5*n.height,e.positiveYUpBottom=n.height-e.bottom}(U,z,o,i),function(e,t,r){e.x=t.x*r,e.y=-1*t.y*r}(Y,U,d);var l="horizontal"===o.scrollDirection,u=l?"width":"height",c=i[u]-U[l?"left":"top"];j.progress=R(c,0,i[u]+U[u],0,1),j.visibility=R(c,0,U[u],0,1),j.viewport=R(c,0,i[u],0,1)}},[e,i,d,a]);return m(function(){j.inViewport=P,k({onlyUpdateInViewport:!1}),u&&console.log("useTracker.inViewport:",P,"update()")},[P]),m(function(){k({onlyUpdateInViewport:!1}),u&&console.log("useTracker.update on resize/reflow")},[k,p]),t.useEffect(function(){if(S)return s(function(e){return k({onlyUpdateInViewport:!0})})},[S,k,s]),{rect:D,bounds:U,scale:x,position:Y,scrollState:j,inViewport:P,update:k}};
//# sourceMappingURL=scrollbar.cjs.map
