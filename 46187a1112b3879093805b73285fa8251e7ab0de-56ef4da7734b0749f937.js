"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[308],{1046:function(e,t,a){a.d(t,{w_:function(){return c}});var r=a(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(i),n=function(){return n=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a};function o(e){return e&&e.map((function(e,t){return r.createElement(e.tag,n({key:t},e.attr),o(e.child))}))}function c(e){return function(t){return r.createElement(d,n({attr:n({},e.attr)},t),o(e.child))}}function d(e){var t=function(t){var a,i=e.attr,s=e.size,o=e.title,c=l(e,["attr","size","title"]),d=s||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:a,style:n(n({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==s?r.createElement(s.Consumer,null,(function(e){return t(e)})):t(i)}},6162:function(e,t,a){var r=a(5318);t.Z=void 0;var i,s=r(a(1506)),n=r(a(5354)),l=r(a(7316)),o=r(a(7154)),c=r(a(7294)),d=r(a(5697)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(p&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return L(t||a).src},L=function(e){if(p&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),w=function(e){var t=u(e),a=g(t);return m[a]||!1},M="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,h=p&&window.IntersectionObserver,y=new WeakMap;function N(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:s}),c.default.createElement("source",{media:i,srcSet:a,sizes:s}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function D(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function b(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var E=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+c+n+l+a+r+t+s+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,s=e.spreadProps,n=e.ariaHidden,l=c.default.createElement(I,(0,o.default)({ref:t,src:a},s,{ariaHidden:n}));return r.length>1?c.default.createElement("picture",null,i(r),l):l})),I=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,L=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},L,{onLoad:n,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));I.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=p&&w(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!M&&h&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||p&&(M||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:w(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=w(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,l=void 0===n?{}:n,d=e.placeholderStyle,f=void 0===d?{}:d,g=e.placeholderClassName,m=e.fluid,w=e.fixed,M=e.backgroundColor,p=e.durationFadeIn,h=e.Tag,y=e.itemProp,S=e.loading,j=e.draggable,E=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,o.default)({opacity:E?1:0,transition:z?"opacity "+p+"ms":"none"},l),x="boolean"==typeof M?"lightgray":M,T={transitionDelay:p+"ms"},k=(0,o.default)({opacity:this.state.imgLoaded?0:1},z&&T,{},l,{},f),A={title:t,alt:this.state.isVisible?"":a,style:k,className:g,itemProp:y};if(m){var Y=m,R=L(m);return c.default.createElement(h,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},c.default.createElement(h,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),x&&c.default.createElement(h,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&T)}),R.base64&&c.default.createElement(v,{ariaHidden:!0,ref:this.placeholderRef,src:R.base64,spreadProps:A,imageVariants:Y,generateSources:b}),R.tracedSVG&&c.default.createElement(v,{ariaHidden:!0,ref:this.placeholderRef,src:R.tracedSVG,spreadProps:A,imageVariants:Y,generateSources:D}),this.state.isVisible&&c.default.createElement("picture",null,N(Y),c.default.createElement(I,{alt:a,title:t,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:S},R,{imageVariants:Y}))}}))}if(w){var V=w,G=L(w),P=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},s);return"inherit"===s.display&&delete P.display,c.default.createElement(h,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},x&&c.default.createElement(h,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:x,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},z&&T)}),G.base64&&c.default.createElement(v,{ariaHidden:!0,ref:this.placeholderRef,src:G.base64,spreadProps:A,imageVariants:V,generateSources:b}),G.tracedSVG&&c.default.createElement(v,{ariaHidden:!0,ref:this.placeholderRef,src:G.tracedSVG,spreadProps:A,imageVariants:V,generateSources:D}),this.state.isVisible&&c.default.createElement("picture",null,N(V),c.default.createElement(I,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:S},G,{imageVariants:V}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),x=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});z.propTypes={resolutions:O,sizes:x,fixed:d.default.oneOfType([O,d.default.arrayOf(O)]),fluid:d.default.oneOfType([x,d.default.arrayOf(x)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var T=z;t.Z=T},9653:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(7294),i=a(3201),s=a(1597),n=[{id:1,text:"home",url:"/"},{id:2,text:"about",url:"/about/"},{id:3,text:"projects",url:"/projects/"},{id:4,text:"contact",url:"/contact/"}].map((function(e){return r.createElement("li",{key:e.id},r.createElement(s.Link,{to:e.url},e.text))})),l=function(e){var t=e.styleClass;return r.createElement("ul",{className:"page-links "+(t||"")},n)},o=function(e){var t=e.toggleSidebar;return r.createElement("nav",{className:"navbar"},r.createElement("div",{className:"nav-center"},r.createElement("div",{className:"nav-header"},r.createElement("a",{href:"/"},r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5OCIgaGVpZ2h0PSI1Ni45MyIgdmlld0JveD0iMCAwIDk4IDU2LjkzIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzMzMzt9LmNscy0ye2ZpbGw6IzJhYWViYTt9LmNscy0ze2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0wLDIwVjM4LjA4YTksOSwwLDAsMCw0Ljg0LDhMMjMuNyw1NS45YTksOSwwLDAsMCw4LjMyLDBsMTguODYtOS44MmE5LDksMCwwLDAsNC44NC04VjIwYTksOSwwLDAsMC00Ljg0LThMMzIsMi4xNGE5LDksMCwwLDAtOC4zMiwwTDQuODQsMTJBOSw5LDAsMCwwLDAsMjBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDEpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDIuMjcsMTguODNWMzdhOSw5LDAsMCwwLDQuODQsOEw2Niw1NC44YTksOSwwLDAsMCw4LjMyLDBMOTMuMTUsNDVBOSw5LDAsMCwwLDk4LDM3VjE4LjgzYTksOSwwLDAsMC00Ljg1LThMNzQuMjksMUE5LjA1LDkuMDUsMCwwLDAsNjYsMUw0Ny4xMSwxMC44M0E5LDksMCwwLDAsNDIuMjcsMTguODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDEpIi8+PGcgY2xhc3M9ImNscy0zIj48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xNi40NSw0MC40NXYtMjRIMjYuODNBMTYuMywxNi4zLDAsMCwxLDMxLjIsMTdhNS44OCw1Ljg4LDAsMCwxLDMsMi4wNSw1LjY2LDUuNjYsMCwwLDEsMS4yNywzLjY4LDUuMDYsNS4wNiwwLDAsMS0xLjI5LDMuNDVBNS44Nyw1Ljg3LDAsMCwxLDMwLjYzLDI4YTcsNywwLDAsMSw0LjI2LDIuMDYsNS41OCw1LjU4LDAsMCwxLDEuNDQsMy44Myw2LjEyLDYuMTIsMCwwLDEtMiw0LjY3cS0yLDEuODktNi4yMSwxLjg5Wk0yMSwyNi41M2g1Ljg2YTQsNCwwLDAsMCwyLjg0LTEsMy4yMSwzLjIxLDAsMCwwLDEtMi40NiwyLjcxLDIuNzEsMCwwLDAtMS4xOS0yLjQzLDQuODksNC44OSwwLDAsMC0yLjc5LS43OUgyMVptMCwxMC4zMkgyNy4yYTQuNzksNC43OSwwLDAsMCwzLjExLS45MywzLjI5LDMuMjksMCwwLDAsMC01LDQuNjYsNC42NiwwLDAsMC0zLjA3LTFIMjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDEpIi8+PC9nPjxnIGNsYXNzPSJjbHMtMyI+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNTIsMzQuNjdsNC42Ni0uOXEuODQsMy41Nyw2LjQ0LDMuNTdBNy4wOSw3LjA5LDAsMCwwLDY3LDM2LjQyYTIuNjUsMi42NSwwLDAsMCwxLjM4LTIuMjYsMi45NCwyLjk0LDAsMCwwLS42My0xLjgyQTQuNTksNC41OSwwLDAsMCw2NS4wOCwzMUw2MCwyOS44M2ExMy40OCwxMy40OCwwLDAsMS0zLjg3LTEuMzksNS43Miw1LjcyLDAsMCwxLTItMi4yMSw2LjQyLDYuNDIsMCwwLDEtLjc1LTNBNi4wOCw2LjA4LDAsMCwxLDU2LDE4YTExLjEzLDExLjEzLDAsMCwxLDYuNzgtMS45NEExMy41NSwxMy41NSwwLDAsMSw2OSwxNy40NGE2LjMsNi4zLDAsMCwxLDMuNDUsMy44M2wtNC41NywxcS0xLTIuNzEtNC45Mi0yLjcyYTUuODcsNS44NywwLDAsMC0zLjQyLjg0LDIuNTQsMi41NCwwLDAsMC0xLjE4LDIuMTVjMCwxLjM3LDEuMjMsMi4zMywzLjcxLDIuODhsNC41MiwxcTQuMTMuOTMsNS41MiwyLjc1YTYuNiw2LjYsMCwwLDEtMS41NSw5LjU4LDEzLjI4LDEzLjI4LDAsMCwxLTcuNjYsMiwxNS4zMSwxNS4zMSwwLDAsMS02LjkzLTEuNDlBNy40OCw3LjQ4LDAsMCwxLDUyLDM0LjY3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTg2LjgzLDE2LjQ2VjMzcTAsNC4xNC0yLDZ0LTYuMzEsMS44NGExNS42MywxNS42MywwLDAsMS0zLjg4LS4zN1YzN2MxLjQ2LjA5LDIuNDguMTQsMy4wOC4xNEE0Ljk0LDQuOTQsMCwwLDAsODEsMzYuM2MuNTktLjU0Ljg4LTEuNjMuODgtMy4yOVYxNi40NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC4wMSkiLz48L2c+PC9zdmc+Cg==",alt:"logo"})),r.createElement("button",{type:"button",className:"toggle-btn",onClick:t},r.createElement(i.lPs,null))),r.createElement(l,{styleClass:"nav-links"})))},c=a(7212),d=function(e){var t=e.isOpen,a=e.toggleSidebar;return r.createElement("aside",{className:"sidebar "+(t?"show-sidebar":"")},r.createElement("button",{className:"close-btn",onClick:a},r.createElement(i.aHS,null)),r.createElement("div",{className:"side-container"},t&&r.createElement(l,{styleClass:"sidebar-links"}),t&&r.createElement(c.Z,{styleClass:"sidebar-icons"})))},u=function(){return r.createElement("footer",{className:"footer"},r.createElement(c.Z,{styleClass:"footer-links"}))},f=function(e){var t=e.children,a=r.useState(!1),i=a[0],s=a[1],n=function(){s(!i)};return r.createElement(r.Fragment,null,r.createElement(o,{toggleSidebar:n}),r.createElement(d,{isOpen:i,toggleSidebar:n}),t,r.createElement(u,null))}},3260:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.title;return r.createElement("div",{className:"section-title"},r.createElement("h2",null,t||"default title"),r.createElement("div",{className:"underline"}))}},7212:function(e,t,a){var r=a(7294),i=a(3201),s=[{id:1,icon:r.createElement(i.NML,{className:"social-icon"}),url:"https://github.com/pezzonovante7"},{id:2,icon:r.createElement(i.ltd,{className:"social-icon"}),url:"https://linkedin.com/in/jagadeeshbangaru-115b78179"},{id:3,icon:r.createElement(i.N1v,{className:"social-icon"}),url:"https://twitter.com/vector_teal"},{id:4,icon:r.createElement(i.KVL,{className:"social-icon"}),url:"https://www.reddit.com/user/pezzonovante7"},{id:5,icon:r.createElement(i.R9i,{className:"social-icon"}),url:"https://www.facebook.com/jagadeesh.bangaru.58/"}].map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:e.url,className:"social-link",target:"_blank"},e.icon))}));t.Z=function(e){var t=e.styleClass;return r.createElement("ul",{className:"social-links "+(t||"")},s)}}}]);
//# sourceMappingURL=46187a1112b3879093805b73285fa8251e7ab0de-56ef4da7734b0749f937.js.map