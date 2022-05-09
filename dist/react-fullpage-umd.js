/*!
 * @fullpage/react-fullpage 0.1.24
 * https://github.com/alvarotrigo/react-fullpage
 * @license https://github.com/alvarotrigo/react-fullpage#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo & Michael Walker
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define("ReactFullpage", ["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactFullpage"] = factory(require("React"));
	else
		root["ReactFullpage"] = factory(root["React"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__24__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((debug,compName)=>{return debug?(...args)=>console.log(...[`<${compName}/> Debug Log: `,...args]):()=>{};});

/***/ }),

/***/ 88:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ReactFullpage)
});

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(24);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/fullpage.js/dist/fullpage.min.css
var fullpage_min = __webpack_require__(563);
;// CONCATENATED MODULE: ./node_modules/fullpage.js/dist/fullpage.min.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(fullpage_min/* default */.Z, options);




       /* harmony default export */ const dist_fullpage_min = (fullpage_min/* default */.Z && fullpage_min/* default.locals */.Z.locals ? fullpage_min/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./components/Logger/index.js
var Logger = __webpack_require__(271);
// EXTERNAL MODULE: ./components/selectors.js
var selectors = __webpack_require__(542);
;// CONCATENATED MODULE: ./components/ReactFullpage/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable react/prop-types */// eslint-disable-line no-unused-vars
let Fullpage;const isFunc=val=>typeof val==='function';const isEqualArray=(firstArr,secondArr)=>{if(firstArr.length!==secondArr.length)return false;return firstArr.find(el=>!secondArr.includes(el))==null;};const fullpageCallbacks=['afterLoad','afterRender','afterResize','afterResponsive','afterSlideLoad','onLeave','onSlideLeave'];class ReactFullpage extends (external_React_default()).Component{constructor(props){super(props);const{render,pluginWrapper}=this.props;if(!isFunc(render)){throw new Error('must provide render prop to <ReactFullpage />');}this.log=(0,Logger/* default */.Z)(this.props.debug,'ReactFullpage');this.log('Building component');this.log('Importing vendor files');this.importVendors();if(pluginWrapper){this.log('Calling plugin wrapper');pluginWrapper();}this.log('Requiring fullpage.js');Fullpage=__webpack_require__(933);this.state={initialized:false,sectionCount:0,slideCount:0};}componentDidMount(){const opts=this.buildOptions();this.log('React Lifecycle: componentDidMount()');if(Fullpage){this.init(opts);this.markInitialized();}}isReRenderNecessary(prevProps){const newSectionCount=this.getSectionCount();const newSlideCount=this.getSlideCount();const{sectionCount,slideCount}=this.state;let isReRenderNecessary=sectionCount!==newSectionCount||slideCount!==newSlideCount;const propertiesThatNeedReRender=['sectionsColor','navigationTooltips','navigationPosition','navigation','scrollBar'];propertiesThatNeedReRender.forEach(property=>{if(typeof prevProps[property]!=='undefined'){if(Array.isArray(prevProps[property])){isReRenderNecessary=isReRenderNecessary||!isEqualArray(prevProps[property],this.props[property]);}else{isReRenderNecessary=isReRenderNecessary||prevProps[property]!==this.props[property];}}});return isReRenderNecessary;}componentDidUpdate(prevProps){this.log('React Lifecycle: componentDidUpdate()');// NOTE: if fullpage props have changed we need to rebuild
if(this.isReRenderNecessary(prevProps)){this.log('rebuilding due to a change in fullpage.js props or num sections/slides');this.reRender();return;}}componentWillUnmount(){this.destroy();}getSectionCount(){const{sectionSelector=selectors/* DEFAULT_SECTION */.uS}=this.props;const{length}=document.querySelectorAll(sectionSelector);return length;}getSlideCount(){const{slideSelector=selectors/* DEFAULT_SLIDE */.xH}=this.props;const{length}=document.querySelectorAll(slideSelector);return length;}importVendors(){const{easing}=this.props;if(easing){__webpack_require__(239);}}init(opts){this.log('Reinitializing fullpage with options',opts);const originalAnimateAnchor=opts.animateAnchor;opts.animateAnchor=false;new Fullpage(selectors/* ID_SELECTOR */.Km,opts);// eslint-disable-line
this.fullpageApi=window.fullpage_api;this.fpUtils=window.fp_utils;this.fpEasings=window.fp_easings;window.fullpage_api.getFullpageData().options.animateAnchor=originalAnimateAnchor;}destroy(){this.log('Destroying fullpage instance');this.fullpageApi.destroy('all');}reRender(){const slideSelector=this.props.slideSelector||'.slide';const sectionSelector=this.props.sectionSelector||'.section';const activeSection=document.querySelector(sectionSelector+'.active');const activeSectionIndex=activeSection?this.fpUtils.index(activeSection):this.state.destination.index-1;const activeSlide=document.querySelector(sectionSelector+'.active '+slideSelector+'.active');const activeSlideIndex=activeSlide?this.fpUtils.index(activeSlide):-1;this.destroy();if(activeSectionIndex>-1){this.fpUtils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex],'active');}if(activeSlideIndex>-1){this.fpUtils.addClass(activeSlide,'active');}this.init(this.buildOptions());}markInitialized(){this.log('Marking initialized');this.setState({initialized:true,sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});}buildOptions(){let listeners=null;if(!this.state.initialized){const filterCb=key=>!!Object.keys(this.props).find(cb=>{return cb===key;});const registered=fullpageCallbacks.filter(filterCb);listeners=registered.reduce((result,key)=>{return _objectSpread(_objectSpread({},result),{},{[key]:(...args)=>{return this.update(...[key,...args]);}});},{});}// NOTE: override passed in callbacks w/  wrapped listeners
const options=_objectSpread(_objectSpread({},this.props),listeners);this.log('Building fullpage.js options: ',options);return options;}update(lastEvent,...args){this.log('Event trigger: ',lastEvent);let state=_objectSpread(_objectSpread({},this.state),{},{sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});const makeState=callbackParameters=>_objectSpread(_objectSpread(_objectSpread({},state),callbackParameters),{},{lastEvent});const fromArgs=argList=>argList.reduce((result,key,i)=>{const value=args[i];result[key]=value;// eslint-disable-line
return result;},{});// NOTE: remapping callback args to v3
// https://github.com/alvarotrigo/fullPage.js#callbacks
switch(lastEvent){// After-*
case'afterLoad':state=makeState(fromArgs(['origin','destination','direction']));break;case'afterResize':state=makeState(fromArgs(['']));break;case'afterResponsive':state=makeState(fromArgs(['isResponsive']));break;case'afterSlideLoad':state=makeState(fromArgs(['section','origin','destination','direction']));break;// On-*
case'onLeave':state=makeState(fromArgs(['origin','destination','direction']));break;case'onSlideLeave':state=makeState(fromArgs(['section','origin','slideIndex','destination','direction']));break;default:break;}const returned=this.props[lastEvent](...args);this.log('Called callback: Returning => ',returned);this.log('Updating State => ',state);this.setState(state);return returned;}render(){this.log('<== Rendering ==>');return/*#__PURE__*/external_React_default().createElement("div",{id:selectors/* MAIN_SELECTOR */.W1},this.props.render(this));}}ReactFullpage.defaultProps={sectionsColor:[]};/* harmony default export */ const components_ReactFullpage = (ReactFullpage);

/***/ }),

/***/ 882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(271);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(542);
/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable react/prop-types */// NOTE: SSR support
class ReactFullpageShell extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component){constructor(props){super(props);this.state={};this.log=(0,_Logger__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this.props.debug,'ReactFullpageShell');this.log('Building component');}render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{id:_selectors__WEBPACK_IMPORTED_MODULE_1__/* .MAIN_SELECTOR */ .W1},this.props.render(this));}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactFullpageShell);

/***/ }),

/***/ 542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W1": () => (/* binding */ MAIN_SELECTOR),
/* harmony export */   "Km": () => (/* binding */ ID_SELECTOR),
/* harmony export */   "uS": () => (/* binding */ DEFAULT_SECTION),
/* harmony export */   "xH": () => (/* binding */ DEFAULT_SLIDE)
/* harmony export */ });
const MAIN_SELECTOR='fullpage';const ID_SELECTOR=`#${MAIN_SELECTOR}`;const DEFAULT_SECTION='.section';const DEFAULT_SLIDE='.SLIDE';

/***/ }),

/***/ 563:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\r\n * fullPage 4.0.7\r\n * https://github.com/alvarotrigo/fullPage.js\r\n *\r\n * @license GPLv3 for open source use only\r\n * or Fullpage Commercial License for commercial use\r\n * http://alvarotrigo.com/fullPage/pricing/\r\n *\r\n * Copyright (C) 2021 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r\n */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:100%;display:block}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-table{display:flex;flex-direction:column;justify-content:center;width:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;margin-top:-38px;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.fp-prev{left:15px}.fp-next{right:15px}.fp-arrow{width:0;height:0;border-style:solid}.fp-arrow.fp-prev{border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-arrow.fp-next{border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;top:50%;opacity:1;transform:translateY(-50%);-ms-transform:translateY(-50%);-webkit-transform:translate3d(0,-50%,0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li a.active span,#fp-nav ul li:hover a.active span,.fp-slidesNav ul li a.active span,.fp-slidesNav ul li:hover a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav ul li:hover .fp-tooltip,#fp-nav.fp-show-active a.active+.fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height .fp-slide,.fp-auto-height.fp-section{height:auto!important}.fp-scrollable .fp-section,.fp-scrollable .fp-slide{height:100vh;height:calc(var(--vh,1vh) * 100)}.fp-overflow{justify-content:flex-start}.fp-overflow{overflow-y:scroll;height:100%;outline:0}.fp-overflow.fp-table{display:block}.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive.fp-section{height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.fp-snaps{overflow-y:auto!important;height:100%!important}.fp-snaps body{height:100%!important;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-y:scroll!important;scroll-behavior:smooth}.fp-snaps .fp-section{scroll-snap-align:start}.fp-snaps .fullpage-wrapper{height:auto!important}.fp-disable-snap body{scroll-behavior:unset!important;scroll-snap-type:none!important}.fp-scroll-mac .fp-overflow::-webkit-scrollbar{background-color:transparent;width:9px}.fp-scroll-mac .fp-overflow::-webkit-scrollbar-track{background-color:transparent}.fp-scroll-mac .fp-overflow::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.4);border-radius:16px;border:4px solid transparent}.fp-warning,.fp-watermark{z-index:9999999;position:absolute;bottom:0}.fp-warning,.fp-watermark a{text-decoration:none;color:#000;background:rgba(255,255,255,.6);padding:5px 8px;font-size:14px;font-family:arial;color:#000;display:inline-block;border-radius:3px;margin:12px}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 933:
/***/ (function(module) {

/*!
* fullPage 4.0.7
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/
!function(n,t){ true?module.exports=t():0}(this,(function(){"use strict";var n,t,e,o;Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(n){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),e=t.length>>>0;if("function"!=typeof n)throw new TypeError("predicate must be a function");for(var o=arguments[1],i=0;i<e;){var r=t[i];if(n.call(o,r,i,t))return r;i++}}}),Array.from||(Array.from=(n=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===n.call(t)},e=Math.pow(2,53)-1,o=function(n){var t=function(n){var t=Number(n);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(n);return Math.min(Math.max(t,0),e)},function(n){var e=this,i=Object(n);if(null==n)throw new TypeError("Array.from requires an array-like object - not null or undefined");var r,a=arguments.length>1?arguments[1]:void 0;if(void 0!==a){if(!t(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(r=arguments[2])}for(var l,u=o(i.length),c=t(e)?Object(new e(u)):new Array(u),s=0;s<u;)l=i[s],c[s]=a?void 0===r?a(l,s):a.call(r,l,s):l,s+=1;return c.length=u,c}));var i=window,r=document,a=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),l=/(Mac|iPhone|iPod|iPad)/i.test(i.navigator.userAgent),u="ontouchstart"in i||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,c={test:{},shared:{}};function s(n,t){i.console&&i.console[n]&&i.console[n]("fullPage: "+t)}function f(n){return"none"!==i.getComputedStyle(n).display}function d(n){return Array.from(n).filter((function(n){return f(n)}))}function v(n,t){return(t=arguments.length>1?t:document)?t.querySelectorAll(n):null}function p(n){n=n||{};for(var t=1,e=arguments.length;t<e;++t){var o=arguments[t];if(o)for(var i in o)o.hasOwnProperty(i)&&"__proto__"!=i&&"constructor"!=i&&("[object Object]"!==Object.prototype.toString.call(o[i])?n[i]=o[i]:n[i]=p(n[i],o[i]))}return n}function h(n,t){return null!=n&&n.classList.contains(t)}function g(){return"innerHeight"in i?i.innerHeight:r.documentElement.offsetHeight}function m(){return i.innerWidth}function w(n,t){var e;for(e in n=M(n),t)if(t.hasOwnProperty(e)&&null!==e)for(var o=0;o<n.length;o++)n[o].style[e]=t[e];return n}function b(n,t){if(null==t)return n.previousElementSibling;var e=b(n);return e&&X(e,t)?e:null}function S(n,t){if(null==t)return n.nextElementSibling;var e=S(n);return e&&X(e,t)?e:null}function y(n,t){n=x(n)?n[0]:n;for(var e=null!=t?v(t,n.parentNode):n.parentNode.childNodes,o=0,i=0;i<e.length;i++){if(e[i]==n)return o;1==e[i].nodeType&&o++}return-1}function M(n){return x(n)?n:[n]}function T(n){n=M(n);for(var t=0;t<n.length;t++)n[t].style.display="none";return n}function A(n){n=M(n);for(var t=0;t<n.length;t++)n[t].style.display="block";return n}function x(n){return"[object Array]"===Object.prototype.toString.call(n)||"[object NodeList]"===Object.prototype.toString.call(n)}function O(n,t){n=M(n);for(var e=0;e<n.length;e++)n[e].classList.add(t);return n}function E(n,t){n=M(n);for(var e=t.split(" "),o=0;o<e.length;o++){t=e[o];for(var i=0;i<n.length;i++)n[i].classList.remove(t)}return n}function k(n,t){t.appendChild(n)}function D(n,t,e){var o;t=t||r.createElement("div");for(var i=0;i<n.length;i++){var a=n[i];(e&&!i||!e)&&(o=t.cloneNode(!0),a.parentNode.insertBefore(o,a)),o.appendChild(a)}return n}function j(n,t){D(n,t,!0)}function R(n){for(var t=r.createDocumentFragment();n.firstChild;)t.appendChild(n.firstChild);n.parentNode.replaceChild(t,n)}function z(n,t){return n&&1===n.nodeType?X(n,t)?n:z(n.parentNode,t):null}function L(n,t){P(n,n.nextSibling,t)}function N(n,t){P(n,n,t)}function P(n,t,e){x(e)||("string"==typeof e&&(e=Q(e)),e=[e]);for(var o=0;o<e.length;o++)n.parentNode.insertBefore(e[o],t)}function C(n){if(void 0!==n&&n.fitToSection)return r.body.scrollTop;var t=r.documentElement;return(i.pageYOffset||t.scrollTop)-(t.clientTop||0)}function H(n){return Array.prototype.filter.call(n.parentNode.children,(function(t){return t!==n}))}function I(n){n.preventDefault()}function W(n,t){return n.getAttribute(t)}function B(n,t,e){r.addEventListener(n,t,"undefined"===e?null:e)}function Z(n,t,e){i.addEventListener(n,t,"undefined"===e?null:e)}function F(n,t,e){r.removeEventListener(n,t,"undefined"===e?null:e)}function V(n,t,e){i.removeEventListener(n,t,"undefined"===e?null:e)}function Y(n){if("function"==typeof n)return!0;var t=Object.prototype.toString.call(n);return"[object Function]"===t||"[object GeneratorFunction]"===t}function G(n,t,e){var o;e=void 0===e?{}:e,"function"==typeof i.CustomEvent?o=new CustomEvent(t,{detail:e}):(o=r.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,e),n.dispatchEvent(o)}function X(n,t){return(n.matches||n.t||n.msMatchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||n.oMatchesSelector).call(n,t)}function U(n,t){if("boolean"==typeof t)for(var e=0;e<n.length;e++)n[e].style.display=t?"block":"none";return n}function Q(n){var t=r.createElement("div");return t.innerHTML=n.trim(),t.firstChild}function _(n){n=M(n);for(var t=0;t<n.length;t++){var e=n[t];e&&e.parentElement&&e.parentNode.removeChild(e)}}function J(n,t,e){for(var o=n[e],i=[];o;)(X(o,t)||null==t)&&i.push(o),o=o[e];return i}function K(n,t){return J(n,t,"nextElementSibling")}function q(n,t){return J(n,t,"previousElementSibling")}function $(n){return n[n.length-1]}function nn(n,t){for(var e=0,o=n.slice(Math.max(n.length-t,1)),i=0;i<o.length;i++)e+=o[i];return Math.ceil(e/t)}function tn(n,t){n.setAttribute(t,W(n,"data-"+t)),n.removeAttribute("data-"+t)}function en(n){return en="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},en(n)}i.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(n,t){t=t||window;for(var e=0;e<this.length;e++)n.call(t,this[e],e,this)}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(n,t){if(null==n)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(n),o=1;o<arguments.length;o++){var i=arguments[o];if(null!=i)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},writable:!0,o:!0}),window.fp_utils={$:v,deepExtend:p,hasClass:h,getWindowHeight:g,css:w,prev:b,next:S,last:function(n){return n[n.length-1]},index:y,getList:M,hide:T,show:A,isArrayOrList:x,addClass:O,removeClass:E,appendTo:k,wrap:D,wrapAll:j,wrapInner:function(n,t){for("string"==typeof t&&(t=Q(t)),n.appendChild(t);n.firstChild!==t;)t.appendChild(n.firstChild)},unwrap:R,closest:z,after:L,before:N,insertBefore:P,getScrollTop:C,siblings:H,preventDefault:I,isFunction:Y,trigger:G,matches:X,toggle:U,createElementFromHTML:Q,remove:_,filter:function(n,t){Array.prototype.filter.call(n,t)},untilAll:J,nextAll:K,prevAll:q,showError:s};var on={i:{},l:function(n,t){var e=this;return"object"!==en(this.i[n])&&(this.i[n]=[]),this.i[n].push(t),function(){return e.removeListener(n,t)}},removeListener:function(n,t){if("object"===en(this.i[n])){var e=this.i[n].indexOf(t);e>-1&&this.i[n].splice(e,1)}},u:function(n){for(var t=this,e=arguments.length,o=new Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];"object"===en(this.i[n])&&this.i[n].forEach((function(n){return n.apply(t,o)}))},once:function(n,t){var e=this,o=this.l(n,(function(){o();for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];t.apply(e,i)}))}},rn={v:0,p:0,slides:[],h:[],g:null,S:null,M:!1,T:!1,A:!1,O:!1,D:!1,j:void 0,R:void 0,L:!1,canScroll:!0,N:"none",P:"none",C:!1,H:!1,I:!0,W:0,B:g(),Z:!1,F:{}};function an(n){Object.assign(rn,n)}function ln(){return rn}function un(n){on.u("onClickOrTouch",{e:n,target:n.target})}function cn(){["click","touchstart"].forEach((function(n){F(n,un)}))}function sn(){an({I:!0})}i.state=rn,on.l("bindEvents",(function(){["click","touchstart"].forEach((function(n){B(n,un)})),Z("focus",sn),on.l("onDestroy",cn)}));var fn="fullpage-wrapper",dn="."+fn,vn="fp-responsive",pn="fp-notransition",hn="fp-destroyed",gn="fp-enabled",mn="active",wn=".active",bn="fp-completely",Sn="fp-section",yn="."+Sn,Mn=".fp-tableCell",Tn="fp-auto-height",An="#fp-nav",xn="fp-slide",On="."+xn,En=".fp-slide.active",kn="fp-slides",Dn=".fp-slides",jn="fp-slidesContainer",Rn="."+jn,zn="fp-table",Ln="fp-overflow",Nn="."+Ln,Pn=".fp-slidesNav",Cn=".fp-slidesNav a",Hn="fp-controlArrow",In="."+Hn,Wn="fp-prev",Bn=".fp-controlArrow.fp-prev",Zn=".fp-controlArrow.fp-next",Fn={menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,licenseKey:"",credits:{enabled:!0,label:"Made with fullPage.js",position:"right"},css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!0,scrollOverflowReset:!1,touchSensitivity:5,touchWrapper:null,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,allowCorrectDirection:!1,scrollOverflowMacStyle:!0,controlArrows:!0,controlArrowsHTML:['<div class="fp-arrow"></div>','<div class="fp-arrow"></div>'],controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",afterLoad:null,beforeLeave:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,onScrollOverflow:null,lazyLoading:!0,observer:!0},Vn=null,Yn=!1,Gn=p({},Fn),Xn=null;function Un(n){return Vn}function Qn(){return Xn||Fn}function _n(){return Gn}function Jn(n,t,e){Xn[n]=t,"internal"!==e&&(Gn[n]=t)}function Kn(){if(!Qn().anchors.length){var n=v(Qn().sectionSelector.split(",").join("[data-anchor],")+"[data-anchor]",Vn);n.length&&n.length===v(Qn().sectionSelector,Vn).length&&(Yn=!0,n.forEach((function(n){Qn().anchors.push(W(n,"data-anchor").toString())})))}if(!Qn().navigationTooltips.length){var t=v(Qn().sectionSelector.split(",").join("[data-tooltip],")+"[data-tooltip]",Vn);t.length&&t.forEach((function(n){Qn().navigationTooltips.push(W(n,"data-tooltip").toString())}))}}var qn=function(n){this.anchor=n.anchor,this.item=n.item,this.index=n.index(),this.isLast=this.index===n.item.parentElement.querySelectorAll(n.selector).length-1,this.isFirst=!this.index,this.isActive=n.isActive},$n=function(n,t){this.parent=this.parent||null,this.selector=t,this.anchor=W(n,"data-anchor")||Qn().anchors[y(n,Qn().sectionSelector)],this.item=n,this.isVisible=f(n),this.isActive=h(n,mn),this.V=h(n,Ln),this.Y=t===Qn().sectionSelector,this.container=z(n,Rn)||z(n,dn),this.index=function(){return this.siblings().indexOf(this)}};function nt(n){return n.map((function(n){return n.item}))}function tt(n,t){return n.find((function(n){return n.item===t}))}$n.prototype.siblings=function(){return this.Y?this.isVisible?rn.h:rn.G:this.parent?this.parent.slides:0},$n.prototype.prev=function(){var n=this.siblings(),t=(this.Y?n.indexOf(this):this.parent.slides.indexOf(this))-1;return t>=0?n[t]:null},$n.prototype.next=function(){var n=this.siblings(),t=(this.Y?n.indexOf(this):this.parent.slides.indexOf(this))+1;return t<n.length?n[t]:null},$n.prototype.X=function(){return this.Y?rn.h:rn.U};var et,ot,it=function(n){qn.call(this,n)},rt=function(n){qn.call(this,n)};function at(n){return void 0!==window["fp_"+n+"Extension"]}function lt(n){var t=Qn();return null!==t[n]&&"[object Array]"===Object.prototype.toString.call(t[n])?t[n].length&&c[n]:t[n]&&c[n]}function ut(n,t,e){if(lt(n))return Y(c[n][t])?c[n][t](e):c[n][t]}function ct(){return ut("dragAndMove","isAnimating")}function st(){return ut("dragAndMove","isGrabbing")}function ft(n){return Qn().offsetSections&&c.offsetSections?Math.round(ut("offsetSections","getWindowHeight",n)):g()}function dt(n,t){n.insertBefore(t,n.firstChild)}function vt(n){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function e(n){var e,o,i,r,a,l,u="",c=0;for(n=n.replace(/[^A-Za-z0-9+/=]/g,"");c<n.length;)e=t.indexOf(n.charAt(c++))<<2|(r=t.indexOf(n.charAt(c++)))>>4,o=(15&r)<<4|(a=t.indexOf(n.charAt(c++)))>>2,i=(3&a)<<6|(l=t.indexOf(n.charAt(c++))),u+=String.fromCharCode(e),64!=a&&(u+=String.fromCharCode(o)),64!=l&&(u+=String.fromCharCode(i));return u=function(n){for(var t,e="",o=0,i=0,r=0;o<n.length;)(i=n.charCodeAt(o))<128?(e+=String.fromCharCode(i),o++):i>191&&i<224?(r=n.charCodeAt(o+1),e+=String.fromCharCode((31&i)<<6|63&r),o+=2):(r=n.charCodeAt(o+1),t=n.charCodeAt(o+2),e+=String.fromCharCode((15&i)<<12|(63&r)<<6|63&t),o+=3);return e}(u),u}function o(n){return n.slice(3).slice(0,-3)}return function(n){var t=n.split("_");if(t.length>1){var i=t[1];return e(n.replace(o(t[1]),"").split("_")[0].slice(2).slice(0,-2))+"_"+e(i.slice(3).slice(0,-3))}return o(n)}(e(n))}function pt(n){var t=v(En,n);return t.length&&(n=t[0]),n}function ht(n){var t,e,o=Qn();return o.autoScrolling&&!o.scrollBar?(t=-n,e=v(dn)[0]):o.fitToSection?(t=n,e=r.body):(t=n,e=window),{options:t,element:e}}function gt(n,t){!Qn().autoScrolling||Qn().scrollBar||n.self!=window&&h(n,kn)?n.self!=window&&h(n,kn)?n.scrollLeft=t:n.scrollTo(0,t):n.style.top=t+"px"}function mt(n){var t="transform "+Qn().scrollingSpeed+"ms "+Qn().easingcss3;return E(n,pn),w(n,{"-webkit-transition":t,transition:t})}function wt(n,t){var e=n.index(),o=y(t,yn);return e==o?"none":e>o?"up":"down"}function bt(n){return O(n,pn)}function St(n){return{"-webkit-transform":n,"-moz-transform":n,"-ms-transform":n,transform:n}}function yt(n,t){t?mt(Un()):bt(Un()),clearTimeout(et),w(Un(),St(n)),c.test._=n,et=setTimeout((function(){E(Un(),pn)}),10)}function Mt(n){var t=Math.round(n);if(Qn().css3&&Qn().autoScrolling&&!Qn().scrollBar)yt("translate3d(0px, -"+t+"px, 0px)",!1);else if(Qn().autoScrolling&&!Qn().scrollBar)w(Un(),{top:-t+"px"}),c.test.top=-t+"px";else{var e=ht(t);gt(e.element,e.options)}}function Tt(n,t){"internal"!==t&&ut("fadingEffect","update",n),ut("cards","update_",n),Jn("scrollingSpeed",n,t)}function At(){clearTimeout(ot)}function xt(n,t,e,o){var a=function(n){return n.self!=i&&h(n,kn)?n.scrollLeft:!Qn().autoScrolling||Qn().scrollBar?C(Qn()):n.offsetTop}(n),l=t-a,u=0,c=!1;an({L:!0}),n===r.body&&w(r.body,{"scroll-snap-type":"none"}),function r(){if(rn.L){var s=t;u+=20,e&&(s=i.fp_easings[Qn().easing](u,a,l,e)),gt(n,s),u<e?(clearTimeout(ot),ot=setTimeout(r,20)):void 0===o||c||(o(),c=!0)}else u<e&&!c&&(o(),c=!0)}()}function Ot(n){return n&&!n.item?new it(new le(n)):n?new it(n):null}function Et(n){return n?new rt(n):null}function kt(n,t){var e,o=function(n,t){var e={afterRender:function(){return{section:Ot(ln().g),J:Et(ln().g.activeSlide)}},onLeave:function(){return{origin:Ot(t.items.origin),destination:Ot(t.items.destination),direction:t.direction,trigger:ln().S}},afterLoad:function(){return e.onLeave()},afterSlideLoad:function(){return{section:Ot(t.items.section),origin:Ot(t.items.origin),destination:Ot(t.items.destination),direction:t.direction,trigger:ln().S}},onSlideLeave:function(){return e.afterSlideLoad()},beforeLeave:function(){return e.onLeave()},onScrollOverflow:function(){return{section:Ot(ln().g),J:Et(ln().g.activeSlide),position:t.position}}};return e[n]()}(n,t);return G(Un(),n,o),!1!==Qn()[n].apply(o[Object.keys(o)[0]],(e=o,Object.keys(e).map((function(n){return e[n]}))))}function Dt(n){var t=pt(n);v("video, audio",t).forEach((function(n){n.hasAttribute("data-autoplay")&&"function"==typeof n.play&&n.play()})),v('iframe[src*="youtube.com/embed/"]',t).forEach((function(n){n.hasAttribute("data-autoplay")&&jt(n),n.onload=function(){n.hasAttribute("data-autoplay")&&jt(n)}}))}function jt(n){n.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Rt(n){var t=pt(n);v("video, audio",t).forEach((function(n){n.hasAttribute("data-keepplaying")||"function"!=typeof n.pause||n.pause()})),v('iframe[src*="youtube.com/embed/"]',t).forEach((function(n){/youtube\.com\/embed\//.test(W(n,"src"))&&!n.hasAttribute("data-keepplaying")&&n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function zt(n){Qn().lazyLoading&&v("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",pt(n)).forEach((function(n){if(["src","srcset"].forEach((function(t){var e=W(n,"data-"+t);null!=e&&e&&(tn(n,t),n.addEventListener("load",(function(){})))})),X(n,"source")){var t=z(n,"video, audio");t&&(t.load(),t.onloadeddata=function(){})}}))}i.fp_utils=i.fp_utils||{},Object.assign(i.fp_utils,{prependTo:dt,toggleClass:function(n,t,e){if(n.classList&&null==e)n.classList.toggle(t);else{var o=h(n,t);o&&null==e||!e?E(n,t):(!o&&null==e||e)&&O(n,t)}}}),c.setScrollingSpeed=Tt,on.l("bindEvents",(function(){on.l("onDestroy",At)}));var Lt=null,Nt=null,Pt=null;function Ct(){var n=ln().g.item,t=ln().g.activeSlide,e=Ht(n),o=String(e);t&&(o=o+"-"+Ht(t.item)),o=o.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g");Lt.className=Lt.className.replace(i,""),O(Lt,"fp-viewing-"+o)}function Ht(n){if(!n)return null;var t=W(n,"data-anchor"),e=y(n);return null==t&&(t=e),t}function It(n,t,e){var o="";Qn().anchors.length&&!Qn().lockAnchors&&(n?(null!=e&&(o=e),null==t&&(t=n),an({R:t}),Wt(o+"/"+t)):null!=n?(an({R:t}),Wt(e)):Wt(e)),Ct()}function Wt(n){if(Qn().recordHistory)location.hash=n;else if(a||u)i.history.replaceState(void 0,void 0,"#"+n);else{var t=i.location.href.split("#")[0];i.location.replace(t+"#"+n)}}function Bt(n,t,e){var o="Section"===t?Qn().anchors[n]:W(e,"data-anchor");return encodeURI(Qn().navigationTooltips[n]||o||t+" "+(n+1))}function Zt(n){I(n),an({S:"horizontalNav"});var t=z(this,yn),e=v(Dn,z(this,yn))[0],o=tt(ln().h,t).slides[y(z(this,"li"))];on.u("landscapeScroll",{slides:e,destination:o.item})}var Ft,Vt={};function Yt(n,t,e){"all"!==t?Vt[e][t]=n:Object.keys(Vt[e]).forEach((function(t){Vt[e][t]=n}))}function Gt(){return Vt}function Xt(){var n=z(this,yn);h(this,Wn)?Gt().m.left&&(an({S:"slideArrow"}),on.u("moveSlideLeft",{section:n})):Gt().m.right&&(an({S:"slideArrow"}),on.u("moveSlideRight",{section:n}))}function Ut(n){!Qn().loopHorizontal&&Qn().controlArrows&&(U(v(Bn,n.section),0!==n.slideIndex),U(v(Zn,n.section),null!=S(n.destiny)))}function Qt(){clearTimeout(Ft)}function _t(n,t,e){var o=z(n,yn),i=ln().h.filter((function(n){return n.item==o}))[0],r=i.slides.filter((function(n){return n.item==t}))[0],a={slides:n,destiny:t,direction:e,destinyPos:{left:t.offsetLeft},slideIndex:r.index(),section:o,sectionIndex:i.index(),anchorLink:i.anchor,slidesNav:v(Pn,o)[0],slideAnchor:r.anchor,prevSlide:i.activeSlide.item,prevSlideIndex:i.activeSlide.index(),items:{section:i,origin:i.activeSlide,destination:r},localIsResizing:rn.O};a.xMovement=Kt(a.prevSlideIndex,a.slideIndex),a.direction=a.direction?a.direction:a.xMovement,a.localIsResizing||an({canScroll:!1}),ut("parallax","applyHorizontal",a),ut("cards","apply",a),ut("dropEffect","apply",a),ut("waterEffect","apply",a),Qn().onSlideLeave&&!a.localIsResizing&&"none"!==a.xMovement&&Y(Qn().onSlideLeave)&&!1===kt("onSlideLeave",a)?an({A:!1}):(lt("dropEffect")&&Qn().dropEffect||(O(t,mn),E(H(t),mn)),oe(),a.localIsResizing||(Rt(a.prevSlide),zt(t)),Ut(a),i.isActive&&!a.localIsResizing&&It(a.slideIndex,a.slideAnchor,a.anchorLink),ut("continuousHorizontal","apply",a),st()?$t(a):Jt(n,a,!0),Qn().interlockedSlides&&c.interlockedSlides&&(lt("continuousHorizontal")&&void 0!==e&&e!==a.xMovement||ut("interlockedSlides","apply",a)))}function Jt(n,t,e){var o,i,r=t.destinyPos;if(o=t.slidesNav,i=t.slideIndex,Qn().slidesNavigation&&null!=o&&(E(v(wn,o),mn),O(v("a",v("li",o)[i]),mn)),an({scrollX:Math.round(r.left)}),Qn().css3){var a="translate3d(-"+Math.round(r.left)+"px, 0px, 0px)";c.test.K[t.sectionIndex]=a,lt("dragAndMove")&&void 0!==t.q||mt(v(Rn,n)),w(v(Rn,n),St(a)),lt("interlockedSlides")||clearTimeout(Ft),Ft=setTimeout((function(){e&&$t(t)}),Qn().scrollingSpeed)}else c.test.left[t.sectionIndex]=Math.round(r.left),xt(n,Math.round(r.left),Qn().scrollingSpeed,(function(){e&&$t(t)}))}function Kt(n,t){return n==t?"none":n>t?"left":"right"}function qt(){clearTimeout(Ft)}function $t(n){ut("continuousHorizontal","afterSlideLoads",n),n.localIsResizing||(ut("parallax","afterSlideLoads"),ut("scrollOverflowReset","setPrevious",n.prevSlide),ut("scrollOverflowReset","reset"),Y(Qn().afterSlideLoad)&&kt("afterSlideLoad",n),an({canScroll:!0}),Dt(n.destiny)),an({A:!1}),ut("interlockedSlides","interlockedSlides",n)}function ne(n,t){Tt(0,"internal"),void 0!==t&&an({O:!0}),_t(z(n,Dn),n),void 0!==t&&an({O:!1}),Tt(_n().scrollingSpeed,"internal")}Vt.m={up:!0,down:!0,left:!0,right:!0},Vt.k=p({},Vt.m),on.l("onClickOrTouch",(function(n){var t=n.target;(X(t,In)||z(t,In))&&Xt.call(t,n)})),c.landscapeScroll=_t,on.l("bindEvents",(function(){on.l("onPerformMovement",Qt)}));var te=null,ee=null;function oe(){rn.g=null,rn.h.map((function(n){var t=h(n.item,mn);n.isActive=t,n.V=h(n.item,Ln),t&&(rn.g=n),n.slides.length&&(n.activeSlide=null,n.slides.map((function(t){var e=h(t.item,mn);t.V=h(t.item,Ln),t.isActive=e,e&&(n.activeSlide=t)})))})),function(){var n=rn.g,t=!!rn.g&&rn.g.slides.length,e=rn.g?rn.g.activeSlide:null;if(!n&&rn.h.length&&!ln().M)if(lt("responsiveSlides")&&ut("responsiveSlides","areSlidesSections"))an({g:rn.U.filter((function(n){return n.item===v(yn)}))[0]});else{if(te){var o=ae(te,rn.h);o&&(rn.g=o,rn.g.isActive=!0,O(rn.g.item,mn)),rn.g&&Mt(rn.g.item.offsetTop)}if(t&&!e&&ee){var i=ae(ee,rn.g.slides);i&&(rn.g.activeSlide=i,rn.g.activeSlide.isActive=!0,O(rn.g.activeSlide.item,mn)),rn.g.activeSlide&&ne(rn.g.activeSlide.item,"internal")}}}(),G(Un(),"onUpdateStateDone")}function ie(){var n=v(Qn().sectionSelector,Un()),t=d(n),e=Array.from(n).map((function(n){return new le(n)})),o=e.filter((function(n){return n.isVisible})),i=o.reduce((function(n,t){return n.concat(t.slides)}),[]);te=re(rn.g),ee=re(rn.g?rn.g.activeSlide:null),rn.v=t.length,rn.p=o.reduce((function(n,t){return n+t.slides.length}),0),rn.h=o,rn.G=e,rn.slides=i,rn.U=rn.h.concat(rn.slides)}function re(n){if(!n)return null;var t=n?n.item:null,e=n.Y?rn.G:rn.g.nn;if(t){var o=tt(e,t);return o?o.index():null}return null}function ae(n,t){var e,o=n-1,i=n;do{if(e=t[o]||t[i])break;o-=1,i+=1}while(o>=0||i<t.length);return e}var le=function(n){var t=this;[].push.call(arguments,Qn().sectionSelector),$n.apply(this,arguments),this.tn=v(Qn().slideSelector,n),this.nn=Array.from(this.tn).map((function(n){return new ue(n,t)})),this.slides=this.nn.filter((function(n){return n.isVisible})),this.activeSlide=this.slides.length?this.slides.filter((function(n){return n.isActive}))[0]||this.slides[0]:null};le.prototype=$n.prototype,le.prototype.constructor=le;var ue=function(n,t){this.parent=t,$n.call(this,n,Qn().slideSelector)};function ce(){O(v(Qn().sectionSelector,Un()),Sn),O(v(Qn().slideSelector,Un()),xn)}function se(){G(b(this),"click")}function fe(){_(v(An));var n=r.createElement("div");n.setAttribute("id","fp-nav");var t=r.createElement("ul");n.appendChild(t),k(n,Lt);var e=v(An)[0];O(e,"fp-"+Qn().navigationPosition),Qn().showActiveTooltip&&O(e,"fp-show-active");for(var o="",i=0;i<ln().h.length;i++){var a=ln().h[i],l="";Qn().anchors.length&&(l=a.anchor),o+='<li><a href="#'+encodeURI(l)+'"><span class="fp-sr-only">'+Bt(a.index(),"Section")+"</span><span></span></a>";var u=Qn().navigationTooltips[a.index()];void 0!==u&&""!==u&&(o+='<div class="fp-tooltip fp-'+Qn().navigationPosition+'">'+u+"</div>"),o+="</li>"}v("ul",e)[0].innerHTML=o;var c=v("li",v(An)[0])[ln().g.index()];O(v("a",c),mn)}function de(n){n.preventDefault&&I(n),an({S:"verticalNav"});var t=y(z(this,"#fp-nav li"));on.u("scrollPage",{destination:ln().h[t]})}function ve(n,t){Jn("recordHistory",n,t)}function pe(n,t){n||Mt(0),Jn("autoScrolling",n,t);var e=ln().g.item;if(Qn().autoScrolling&&!Qn().scrollBar)w(Pt,{overflow:"hidden",height:"100%"}),E(Lt,"fp-scrollable"),ve(_n().recordHistory,"internal"),w(Un(),{"-ms-touch-action":"none","touch-action":"none"}),null!=e&&Mt(e.offsetTop);else if(w(Pt,{overflow:"visible",height:"initial"}),O(Lt,"fp-scrollable"),ve(!!Qn().autoScrolling&&_n().recordHistory,"internal"),w(Un(),{"-ms-touch-action":"","touch-action":""}),bt(Un()),null!=e){w(Pt,{"scroll-behavior":"unset"});var o=ht(e.offsetTop);o.element.scrollTo(0,o.options)}G(Un(),"setAutoScrolling",n)}ue.prototype=$n.prototype,ue.prototype.constructor=le,c.setRecordHistory=ve,c.setAutoScrolling=pe,c.test.setAutoScrolling=pe,c.setFitToSection=me,c.fitToSection=function(){};var he,ge="scrollSnapAlign"in(he=r.documentElement.style)||"en"in he||"on"in he;function me(n,t){we(n),Jn("fitToSection",n,t)}function we(n){ge&&(Qn().fitToSection&&(!Qn().autoScrolling||Qn().scrollBar)&&n?O:E)(Nt,"fp-snaps")}function be(){var n=Qn().responsive||Qn().responsiveWidth,t=Qn().responsiveHeight,e=n&&i.innerWidth<n,o=t&&i.innerHeight<t;n&&t?Se(e||o):n?Se(e):t&&Se(o)}function Se(n){var t=ye();n?t||(pe(!1,"internal"),me(!1,"internal"),T(v(An)),O(Lt,vn),Y(Qn().afterResponsive)&&Qn().afterResponsive.call(Un(),n),ut("responsiveSlides","toSections"),G(Un(),"afterResponsive",n)):t&&(pe(_n().autoScrolling,"internal"),me(_n().autoScrolling,"internal"),A(v(An)),E(Lt,vn),Y(Qn().afterResponsive)&&Qn().afterResponsive.call(Un(),n),ut("responsiveSlides","toSlides"),G(Un(),"afterResponsive",n))}function ye(){return h(Lt,vn)}c.setResponsive=Se,on.l("bindEvents",(function(){i.addEventListener("load",(function(){Qn().scrollOverflow&&!Qn().scrollBar&&(Te.rn(),Te.an())})),Qn().scrollOverflow&&nt(ln().U).forEach((function(n){n.addEventListener("scroll",Te.ln),n.addEventListener("wheel",Te.un),n.addEventListener("keydown",Te.un),n.addEventListener("keydown",Te.cn)}))}));var Me,Te={sn:null,dn:null,vn:null,un:function(n){if(!rn.canScroll)return I(n),!1},an:function(){r.activeElement===this.sn&&this.sn.blur(),v(".fp-overflow.active",ln().g.item)[0]&&(this.sn=v(Nn,ln().g.item)[0],this.sn.focus())},rn:function(){Qn().scrollOverflowMacStyle&&!l&&O(Lt,"fp-scroll-mac"),ln().U.forEach((function(n){if(!(h(n.item,"fp-noscroll")||h(n.item,Tn)||h(n.item,"fp-auto-height-responsive")&&ye())){var t=Te.pn(n.item),e=Te.hn(n.item);e?(O(t,Ln),t.setAttribute("tabindex","-1")):(E(t,Ln),t.removeAttribute("tabindex")),n.V=e}}))},pn:function(n){return v(En,n)[0]||n},gn:function(n){return n.Y&&n.activeSlide?n.activeSlide.V:n.V},hn:function(n){return n.scrollHeight>i.innerHeight},mn:function(n,t){if(!rn.canScroll)return!1;if(!Qn().scrollOverflow)return!0;var e=Te.pn(t),o=e.scrollTop,i="up"===n&&o<=0,r="down"===n&&e.scrollHeight<=e.offsetHeight+o,a=i||r;return a||(this.dn=(new Date).getTime()),a},wn:function(){this.vn=(new Date).getTime();var n=this.vn-Te.dn,t=(a||u)&&rn.C,e=rn.H&&n>600;return t&&n>400||e},ln:(Me=0,function(n){var t=n.target.scrollTop,e="none"!==rn.N?rn.N:Me<t?"down":"up";Me=t,Y(Qn().onScrollOverflow)&&kt("onScrollOverflow",{position:t,direction:e}),h(n.target,Ln)&&rn.canScroll&&Te.mn(e,n.target)&&Te.wn()&&on.u("onScrollOverflowScrolled",{direction:e})})};function Ae(n){Qn().verticalCentered&&(Te.gn(n)||h(n.item,zn)||O(n.item,zn))}function xe(n){var t=n.slides.length,e=n.tn,o=n.slides,i=100*t,a=100/t;if(!v(Dn,n.item)[0]){var l=r.createElement("div");l.className=kn,j(e,l);var u=r.createElement("div");u.className=jn,j(e,u)}w(v(Rn,n.item),{width:i+"%"}),t>1&&(Qn().controlArrows&&function(n){var t=n.item,e=[Q(Qn().controlArrowsHTML[0]),Q(Qn().controlArrowsHTML[1])];L(v(Dn,t)[0],e),O(e,Hn),O(e[0],Wn),O(e[1],"fp-next"),"#fff"!==Qn().controlArrowColor&&(w(v(Zn,t),{"border-color":"transparent transparent transparent "+Qn().controlArrowColor}),w(v(Bn,t),{"border-color":"transparent "+Qn().controlArrowColor+" transparent transparent"})),Qn().loopHorizontal||T(v(Bn,t))}(n),Qn().slidesNavigation&&function(n){var t=n.item,e=n.slides.length;k(Q('<div class="fp-slidesNav"><ul></ul></div>'),t);var o=v(Pn,t)[0];O(o,"fp-"+Qn().slidesNavPosition);for(var i=0;i<e;i++)k(Q('<li><a href="#"><span class="fp-sr-only">'+Bt(i,"Slide",v(On,t)[i])+"</span><span></span></a></li>"),v("ul",o)[0]);w(o,{"margin-left":"-"+o.innerWidth/2+"px"});var r=n.activeSlide?n.activeSlide.index():0;O(v("a",v("li",o)[r]),mn)}(n)),o.forEach((function(n){w(n.item,{width:a+"%"}),Qn().verticalCentered&&Ae(n)}));var c=lt("responsiveSlides")?null:n.activeSlide||null;null!=c&&rn.g&&(0!==rn.g.index()||0===rn.g.index()&&0!==c.index())?(ne(c.item,"internal"),O(c.item,"fp-initial")):O(e[0],mn)}var Oe,Ee=null;function ke(n){var t=n.item,e=n.tn.length,o=n.index();!ln().g&&n.isVisible&&(O(t,mn),oe()),Ee=ln().g.item,lt("offsetSections")&&w(t,{height:ft(t)+"px"}),Qn().paddingTop&&w(t,{"padding-top":Qn().paddingTop}),Qn().paddingBottom&&w(t,{"padding-bottom":Qn().paddingBottom}),void 0!==Qn().sectionsColor[o]&&w(t,{"background-color":Qn().sectionsColor[o]}),void 0!==Qn().anchors[o]&&t.setAttribute("data-anchor",n.anchor),e||Ae(n)}c.getActiveSection=function(){return ln().g};var De={attributes:!1,subtree:!0,childList:!0,characterData:!0};function je(){return d(v(Qn().slideSelector,Un())).length!==ln().p}function Re(n){var t=je();(je()||d(v(Qn().sectionSelector,Un())).length!==ln().v)&&!rn.Z&&(Qn().observer&&Oe&&Oe.disconnect(),ie(),oe(),Qn().anchors=[],_(v(An)),ce(),Kn(),Qn().navigation&&fe(),t&&(_(v(Pn)),_(v(In))),ln().h.forEach((function(n){n.slides.length?t&&xe(n):ke(n)}))),Qn().observer&&Oe&&Oe.observe(v(dn)[0],De)}on.l("bindEvents",(function(){var n,t,e;Qn().observer&&"MutationObserver"in window&&(n=v(dn)[0],t=De,(e=new MutationObserver(Re)).observe(n,t),Oe=e),on.l("contentChanged",Re)})),c.bn=Re;var ze=function(){var n=!1;try{var t=Object.defineProperty({},"passive",{get:function(){n=!0}});Z("testPassive",null,t),V("testPassive",null,t)}catch(n){}return function(){return n}}();function Le(){return!!ze()&&{passive:!1}}(new Date).getTime();var Ne,Pe,Ce,He,Ie,We,Be=(Pe=(new Date).getTime(),function(n,t){var e=(new Date).getTime(),o="wheel"===n?Qn().scrollingSpeed:100;return e-Pe>=o&&(Ne=t(),Pe=e),void 0===Ne||Ne}),Ze=(Ie=(new Date).getTime(),We=[],{Sn:function(n){var t=(n=n||i.event).wheelDelta||-n.deltaY||-n.detail,e=Math.max(-1,Math.min(1,t)),o=void 0!==n.wheelDeltaX||void 0!==n.deltaX;Ce=Math.abs(n.wheelDeltaX)<Math.abs(n.wheelDelta)||Math.abs(n.deltaX)<Math.abs(n.deltaY)||!o;var r=(new Date).getTime();He=e<0?"down":"up",We.length>149&&We.shift(),We.push(Math.abs(t));var a=r-Ie;Ie=r,a>200&&(We=[])},yn:function(){var n=nn(We,10)>=nn(We,70);return!!We.length&&n&&Ce},Mn:function(){return He}});function Fe(){var n=Qn().css3?C(Qn())+g():$(ln().h).item.offsetTop+$(ln().h).item.offsetHeight,t=ht(n);c.test.top=-n+"px",w(r.body,{"scroll-snap-type":"none"}),w(Pt,{"scroll-behavior":"unset"}),an({canScroll:!1}),xt(t.element,t.options,Qn().scrollingSpeed,(function(){setTimeout((function(){an({M:!0}),an({canScroll:!0})}),30)}))}function Ve(){Un().getBoundingClientRect().bottom>=0&&Ye()}function Ye(){var n=ht($(ln().h).item.offsetTop);an({canScroll:!1}),xt(n.element,n.options,Qn().scrollingSpeed,(function(){an({canScroll:!0}),an({M:!1}),an({Tn:!1})}))}var Ge,Xe,Ue,Qe,_e,Je=(Ge=!1,Xe={},Ue={},function(n,t,e){switch(n){case"set":Xe[t]=(new Date).getTime(),Ue[t]=e;break;case"isNewKeyframe":var o=(new Date).getTime();Ge=o-Xe[t]>Ue[t]}return Ge});function Ke(){for(var n=v(En),t=0;t<n.length;t++)ne(n[t],"internal")}function qe(){var n=v(".fp-auto-height")[0]||ye()&&v(".fp-auto-height-responsive")[0];Qn().lazyLoading&&n&&v(".fp-section:not(.active)").forEach((function(n){var t,e,o,i,r;e=(t=n.getBoundingClientRect()).top,o=t.bottom,i=e+2<rn.B&&e>0,r=o>2&&o<rn.B,(i||r)&&zt(n)}))}function $e(n,t){var e;e=n,Qn().menu&&Qn().menu.length&&v(Qn().menu).forEach((function(n){null!=n&&(E(v(wn,n),mn),O(v('[data-menuanchor="'+e+'"]',n),mn))})),function(n,t){var e=v(An)[0];Qn().navigation&&null!=e&&"none"!==e.style.display&&(E(v(wn,e),mn),O(n?v('a[href="#'+n+'"]',e):v("a",v("li",e)[t]),mn))}(n,t)}function no(n,t){if(Y(Qn().beforeLeave))return Be(ln().S,(function(){return kt(n,t)}))}function to(n,t,e){var o=n.item;if(null!=o){var i,r,a={element:o,callback:t,isMovementUp:e,dtop:eo(o),yMovement:wt(ln().g,o),anchorLink:n.anchor,sectionIndex:n.index(),activeSlide:n.activeSlide?n.activeSlide.item:null,leavingSection:ln().g.index()+1,localIsResizing:rn.O,items:{origin:ln().g,destination:n},direction:null};if(!(ln().g.item==o&&!rn.O||Qn().scrollBar&&C(Qn())===a.dtop&&!h(o,Tn))){if(null!=a.activeSlide&&(i=W(a.activeSlide,"data-anchor"),r=y(a.activeSlide,null)),!a.localIsResizing){var l=a.yMovement;if(void 0!==e&&(l=e?"up":"down"),a.direction=l,at("dropEffect")&&c.dropEffect.onLeave_(a),at("waterEffect")&&c.waterEffect.onLeave_(a),Y(Qn().beforeLeave)&&!1===no("beforeLeave",a))return;if(Y(Qn().onLeave)&&!kt("onLeave",a))return}ut("parallax","apply",a),ut("cards","apply",a),ut("dropEffect","apply",a),ut("waterEffect","apply",a),Qn().autoScrolling&&Qn().continuousVertical&&void 0!==a.isMovementUp&&(!a.isMovementUp&&"up"==a.yMovement||a.isMovementUp&&"down"==a.yMovement)&&(a=function(n){an({Z:!0});var t=ln().g.item;return n.isMovementUp?N(t,K(t,yn)):L(t,q(t,yn).reverse()),Mt(ln().g.item.offsetTop),Ke(),n.An=t,n.dtop=n.element.offsetTop,n.yMovement=wt(ln().g,n.element),n.leavingSection=n.items.origin.index()+1,n.sectionIndex=n.items.destination.index(),G(Un(),"onContinuousVertical",n),n}(a)),ut("scrollOverflowReset","setPrevious",ln().g.item),a.localIsResizing||Rt(ln().g.item),lt("dropEffect")&&Qn().dropEffect||(O(o,mn),E(H(o),mn)),oe(),zt(o),an({canScroll:c.test.xn}),It(r,i,a.anchorLink),function(n){var t=Qn().scrollingSpeed<700,e=t?700:Qn().scrollingSpeed;if(an({N:"none",scrollY:Math.round(n.dtop)}),on.u("onPerformMovement"),Qn().css3&&Qn().autoScrolling&&!Qn().scrollBar)yt("translate3d(0px, -"+Math.round(n.dtop)+"px, 0px)",!0),lt("waterEffect")&&Ke(),Qn().scrollingSpeed?(clearTimeout(Qe),Qe=setTimeout((function(){oo(n),an({canScroll:!t||c.test.xn})}),Qn().scrollingSpeed)):oo(n);else{var o=ht(n.dtop);c.test.top=-n.dtop+"px",w(Pt,{"scroll-behavior":"unset"}),clearTimeout(Qe),xt(o.element,o.options,Qn().scrollingSpeed,(function(){Qn().scrollBar?Qe=setTimeout((function(){oo(n)}),30):(oo(n),an({canScroll:!t||c.test.xn}))}))}t&&(clearTimeout(_e),_e=setTimeout((function(){an({canScroll:!0})}),e))}(a),an({j:a.anchorLink}),$e(a.anchorLink,function(n){return null!=n.An?n.isMovementUp?rn.v-1:0:n.sectionIndex}(a))}}}function eo(n){var t=n.offsetHeight,e=n.offsetTop,o=e,i=lt("dragAndMove")&&ut("dragAndMove","isGrabbing")?ut("dragAndMove","isScrollingDown"):e>rn.W,r=o-g()+t,a=Qn().bigSectionsDestination;return t>g()?(i||a)&&"bottom"!==a||(o=r):(i||rn.O&&null==S(n))&&(o=r),lt("offsetSections")&&(o=c.offsetSections.getSectionPosition_(i,o,n)),an({W:o}),o}function oo(n){Qn().fitToSection&&h(v(".fp-section.active")[0],Tn)&&w(r.body,{"scroll-snap-type":"none"}),an({M:!1}),function(n){null!=n.An&&(n.isMovementUp?N(v(yn)[0],n.An):L(v(yn)[ln().h.length-1],n.An),Mt(ln().g.item.offsetTop),function(){for(var n=v(En),t=0;t<n.length;t++)ne(n[t],"internal")}(),n.sectionIndex=n.items.destination.index(),n.leavingSection=n.items.origin.index()+1,an({Z:!1}))}(n),Y(Qn().afterLoad)&&!n.localIsResizing&&kt("afterLoad",n),ut("parallax","afterLoad"),ut("waterEffect","afterLoad"),ut("dropEffect","afterLoad"),ut("scrollOverflowReset","reset"),ut("resetSliders","apply",n),oe(),n.localIsResizing||Dt(n.element),O(n.element,bn),E(H(n.element),bn),qe(),Te.an(),an({canScroll:!0}),Y(n.callback)&&n.callback()}function io(){var n=ln().g.next();n||!Qn().loopBottom&&!Qn().continuousVertical||(n=ln().h[0]),null!=n?to(n,null,!1):Un().scrollHeight<Lt.scrollHeight&&on.u("scrollBeyondFullpage")}function ro(){var n=ln().g.prev();n||!Qn().loopTop&&!Qn().continuousVertical||(n=$(ln().h)),null!=n&&to(n,null,!0)}c.moveTo=moveTo,c.getScrollY=function(){return rn.scrollY},on.l("onDestroy",(function(){clearTimeout(Qe),clearTimeout(_e)})),c.moveSectionDown=io,c.moveSectionUp=ro;var ao=0;function lo(n){Qn().autoScrolling&&(rn.canScroll&&(n.pageY<ao&&Gt().m.up?ro():n.pageY>ao&&Gt().m.down&&io()),ao=n.pageY)}function uo(n){if(Gt().m[n]){var t="down"===n?io:ro;lt("scrollHorizontally")&&(t=ut("scrollHorizontally","getScrollSection",{type:n,scrollSection:t})),Qn().scrollOverflow&&Te.gn(ln().g)?Te.mn(n,ln().g.item)&&Te.wn()&&t():t()}}var co,so,fo=0,vo=0,po=0,ho=0,go=To(),mo={On:"ontouchmove"in window?"touchmove":go.move,En:"ontouchstart"in window?"touchstart":go.down};function wo(n){var t=z(n.target,yn)||ln().g.item,e=Te.gn(ln().g);if(bo(n)){an({C:!0,H:!1}),Qn().autoScrolling&&(!e||e&&!rn.canScroll)&&I(n);var o=Mo(n);po=o.y,ho=o.x;var r=Math.abs(fo-po)>i.innerHeight/100*Qn().touchSensitivity,a=Math.abs(vo-ho)>m()/100*Qn().touchSensitivity,l=v(Dn,t).length&&Math.abs(vo-ho)>Math.abs(fo-po),u=fo>po?"down":"up";an({N:l?vo>ho?"right":"left":u}),l?!rn.A&&a&&(vo>ho?Gt().m.right&&on.u("moveSlideRight",{section:t}):Gt().m.left&&on.u("moveSlideLeft",{section:t})):Qn().autoScrolling&&rn.canScroll&&r&&uo(u)}}function bo(n){return void 0===n.pointerType||"mouse"!=n.pointerType}function So(n){if(Qn().fitToSection&&an({L:!1}),bo(n)){var t=Mo(n);fo=t.y,vo=t.x}Z("touchend",yo)}function yo(){V("touchend",yo),an({C:!1})}function Mo(n){var t={};return t.y=void 0!==n.pageY&&(n.pageY||n.pageX)?n.pageY:n.touches[0].pageY,t.x=void 0!==n.pageX&&(n.pageY||n.pageX)?n.pageX:n.touches[0].pageX,u&&bo(n)&&Qn().scrollBar&&void 0!==n.touches&&(t.y=n.touches[0].pageY,t.x=n.touches[0].pageX),t}function To(){var n;return i.PointerEvent&&(n={down:"pointerdown",move:"pointermove"}),n}function Ao(n){Qn().autoScrolling&&bo(n)&&Gt().m.up&&(rn.canScroll||I(n))}function xo(n,t){var e=null==t?ln().g.item:t,o=tt(rn.h,e),i=v(Dn,e)[0];if(!(null==i||ct()||rn.A||o.slides.length<2)){var r=o.activeSlide,a="left"===n?r.prev():r.next();if(!a){if(!Qn().loopHorizontal)return;a="left"===n?$(o.slides):o.slides[0]}an({A:!c.test.xn}),_t(i,a.item,n)}}function Oo(n){xo("left",n)}function Eo(n){xo("right",n)}function ko(n){if(lt("responsiveSlides")&&ut("responsiveSlides","areSlidesSections"))return tt(rn.h,ut("responsiveSlides","getSectionByAnchor",n));var t=ln().h.filter((function(t){return t.anchor===n}))[0];if(!t){var e=void 0!==n?n-1:0;t=ln().h[e]}return t}function Do(n){null!=n&&_t(z(n,Dn),n)}function jo(n,t){var e=ko(n);if(null!=e){var o=function(n,t){var e=t.slides.filter((function(t){return t.anchor===n}))[0];return null==e&&(n=void 0!==n?n:0,e=t.slides[n]),e?e.item:null}(t,e);e.anchor===rn.j||h(e.item,mn)?Do(o):to(e,(function(){Do(o)}))}}function Ro(n,t){var e=ko(n);void 0!==t?jo(n,t):null!=e&&to(e)}function zo(){clearTimeout(so),F("keydown",No),F("keyup",Po)}function Lo(){var n=r.activeElement;return X(n,"textarea")||X(n,"input")||X(n,"select")||"true"==W(n,"contentEditable")||""==W(n,"contentEditable")}function No(n){clearTimeout(so);var t=n.keyCode,e=[37,39].indexOf(t)>-1,o=Qn().autoScrolling||e;9===t?function(n){var t=n.shiftKey,e=r.activeElement,o=Ho(pt(ln().g.item));function i(n){return I(n),o[0]?o[0].focus():null}(function(n){var t=Ho(r),e=t.indexOf(r.activeElement),o=t[n.shiftKey?e-1:e+1],i=z(o,On),a=z(o,yn);return!i&&!a})(n)||(e?null==z(e,".fp-section.active,.fp-section.active .fp-slide.active")&&(e=i(n)):i(n),(!t&&e==o[o.length-1]||t&&e==o[0])&&I(n))}(n):!Lo()&&Qn().keyboardScrolling&&o&&(co=n.ctrlKey,so=setTimeout((function(){!function(n){var t=n.shiftKey,e=r.activeElement,o=X(e,"video")||X(e,"audio"),i=Te.mn("up",ln().g.item),a=Te.mn("down",ln().g.item),l=[37,39].indexOf(n.keyCode)>-1;if(Wo(n),rn.canScroll||l)switch(an({S:"keydown"}),n.keyCode){case 38:case 33:Gt().k.up&&i&&(rn.M?on.u("onKeyDown",{e:n}):ro());break;case 32:if(t&&Gt().k.up&&!o&&i){ro();break}case 40:case 34:if(Gt().k.down&&a){if(rn.M)return;32===n.keyCode&&o||io()}break;case 36:Gt().k.up&&Ro(1);break;case 35:Gt().k.down&&Ro(ln().h.length);break;case 37:Gt().k.left&&Oo();break;case 39:Gt().k.right&&Eo()}}(n)}),0))}function Po(n){rn.I&&(co=n.ctrlKey)}function Co(){an({I:!1}),co=!1}function Ho(n){return[].slice.call(v('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',n)).filter((function(n){return"-1"!==W(n,"tabindex")&&null!==n.offsetParent}))}function Io(n){Lo()||Wo(n)}function Wo(n){(function(n){return[40,38,32,33,34].indexOf(n.keyCode)>-1&&!rn.M})(n)&&!z(n.target,Nn)&&n.preventDefault()}c.moveSlideLeft=Oo,c.moveSlideRight=Eo,c.moveTo=Ro,on.l("bindEvents",(function(){Z("blur",Co),B("keydown",No),Lt.addEventListener("keydown",Io),B("keyup",Po),on.l("onDestroy",zo)}));var Bo=(new Date).getTime(),Zo=[];function Fo(n){n?(function(){var n,t="";i.addEventListener?n="addEventListener":(n="attachEvent",t="on");var e="onwheel"in r.createElement("div")?"wheel":void 0!==r.onmousewheel?"mousewheel":"DOMMouseScroll",o=Le();"DOMMouseScroll"==e?r[n](t+"MozMousePixelScroll",Vo,o):r[n](t+e,Vo,o)}(),Un().addEventListener("mousedown",Yo),Un().addEventListener("mouseup",Go)):(r.addEventListener?(F("mousewheel",Vo,!1),F("wheel",Vo,!1),F("MozMousePixelScroll",Vo,!1)):r.detachEvent("onmousewheel",Vo),Un().removeEventListener("mousedown",Yo),Un().removeEventListener("mouseup",Go))}function Vo(n){var t=(new Date).getTime(),e=h(v(".fp-completely")[0],"fp-normal-scroll"),o=function(n,t){(new Date).getTime();var e=ln().M&&n.getBoundingClientRect().bottom>=0&&"up"===Ze.Mn(),o=ln().Tn;if(o)return I(t),!1;if(ln().M){if(e){var i;if(!(o||Je("isNewKeyframe","beyondFullpage")&&Ze.yn()))return(i=ht($(ln().h).item.offsetTop+$(ln().h).item.offsetHeight)).element.scrollTo(0,i.options),an({Tn:!1}),I(t),!1;if(Ze.yn())return e=!1,an({Tn:!0}),an({S:"wheel"}),Ye(),I(t),!1}else Je("set","beyondFullpage",1e3);if(!o&&!e)return!0}}(Un(),n);if(rn.H||an({C:!1,H:!0,N:"none"}),!Gt().m.down&&!Gt().m.up)return I(n),!1;if(o)return!0;if(!1===o)return I(n),!1;if(Qn().autoScrolling&&!co&&!e){var r=(n=n||i.event).wheelDelta||-n.deltaY||-n.detail,a=Math.max(-1,Math.min(1,r)),l=void 0!==n.wheelDeltaX||void 0!==n.deltaX,u=Math.abs(n.wheelDeltaX)<Math.abs(n.wheelDelta)||Math.abs(n.deltaX)<Math.abs(n.deltaY)||!l,c=a<0?"down":a>0?"up":"none";Zo.length>149&&Zo.shift(),Zo.push(Math.abs(r)),Qn().scrollBar&&I(n);var s=t-Bo;return Bo=t,s>200&&(Zo=[]),an({P:c}),rn.canScroll&&!ct()&&nn(Zo,10)>=nn(Zo,70)&&u&&(an({S:"wheel"}),uo(a<0?"down":"up")),!1}Qn().fitToSection&&an({L:!1})}function Yo(n){var t;2==n.which&&(t=n.pageY,ao=t,Un().addEventListener("mousemove",lo))}function Go(n){2==n.which&&Un().removeEventListener("mousemove",lo)}function Xo(n){n?(Fo(!0),function(){if((a||u)&&(!lt("dragAndMove")||"mouseonly"===Qn().dragAndMove)){Qn().autoScrolling&&(Lt.removeEventListener(mo.On,Ao,{passive:!1}),Lt.addEventListener(mo.On,Ao,{passive:!1}));var n=Qn().touchWrapper;n.removeEventListener(mo.En,So),n.removeEventListener(mo.On,wo,{passive:!1}),n.addEventListener(mo.En,So),n.addEventListener(mo.On,wo,{passive:!1})}}()):(Fo(!1),function(){if(a||u){Qn().autoScrolling&&(Lt.removeEventListener(mo.On,wo,{passive:!1}),Lt.removeEventListener(mo.On,Ao,{passive:!1}));var n=Qn().touchWrapper;n.removeEventListener(mo.En,So),n.removeEventListener(mo.On,wo,{passive:!1})}}())}c.setMouseWheelScrolling=Fo;var Uo=!0;function Qo(){["mouseenter","touchstart","mouseleave","touchend"].forEach((function(n){F(n,Jo,!0)}))}function _o(n,t){document["fp_"+n]=t,B(n,Jo,!0)}function Jo(n){var t=n.type,e=!1,o="mouseleave"===t?n.toElement||n.relatedTarget:n.target;o!=document&&o?("touchend"===t&&(Uo=!1,setTimeout((function(){Uo=!0}),800)),("mouseenter"!==t||Uo)&&(Qn().normalScrollElements.split(",").forEach((function(n){if(!e){var t=X(o,n),i=z(o,n);(t||i)&&(c.shared.kn||Xo(!1),c.shared.kn=!0,e=!0)}})),!e&&c.shared.kn&&(Xo(!0),c.shared.kn=!1))):Xo(!0)}function Ko(n,t){Tt(0,"internal"),Ro(n,t),Tt(_n().scrollingSpeed,"internal")}on.l("bindEvents",(function(){Qn().normalScrollElements&&(["mouseenter","touchstart"].forEach((function(n){_o(n,!1)})),["mouseleave","touchend"].forEach((function(n){_o(n,!0)}))),on.l("onDestroy",Qo)})),c.silentMoveTo=Ko;var qo,$o=g(),ni=m(),ti=!1;function ei(){clearTimeout(qo),V("resize",oi)}function oi(){ti||(Qn().autoScrolling&&!Qn().scrollBar||!Qn().fitToSection)&&ri(g()),ti=!0,clearTimeout(qo),qo=setTimeout((function(){!function(){if(an({O:!0}),ri(""),G(Un(),"onResize"),!Qn().fitToSection||Qn().autoScrolling||rn.M||function(){if(!Qn().autoScrolling||Qn().scrollBar){var n=.01*i.innerHeight;r.documentElement.style.setProperty("--vh","".concat(n,"px"))}}(),on.u("contentChanged"),oe(),be(),a){var n=r.activeElement;if(!X(n,"textarea")&&!X(n,"input")&&!X(n,"select")){var t=g();Math.abs(t-$o)>20*Math.max($o,t)/100&&(ii(!0),$o=t)}}else e=g(),o=m(),rn.B===e&&ni===o||(an({B:e}),ni=o,ii(!0));var e,o;G(Un(),"onResizeEnds"),an({O:!1})}(),ti=!1}),400)}function ii(n){if(!h(Un(),hn)){an({O:!0,B:g(),Dn:m()});for(var t=ln().h,e=0;e<t.length;++e){var o=t[e],r=v(Dn,o.item)[0],a=o.slides;lt("offsetSections")&&w(o,{height:ft(o.item)+"px"}),a.length>1&&_t(r,o.activeSlide.item)}Qn().scrollOverflow&&Te.rn();var l=ut("responsiveSlides","getActiveIndex")||ln().g.index();rn.M||!l||lt("fadingEffect")||lt("dropEffect")||lt("waterEffect")||Ko(l+1),an({O:!1}),Y(Qn().afterResize)&&n&&Qn().afterResize.call(Un(),i.innerWidth,i.innerHeight),Y(Qn().afterReBuild)&&!n&&Qn().afterReBuild.call(Un()),G(Un(),"afterRebuild")}}function ri(n){var t=""===n?"":n+"px";ln().h.forEach((function(n){w(n.item,{height:t})}))}function ai(){var n,t,e=i.location.hash;if(e.length){var o=e.replace("#","").split("/"),r=e.indexOf("#/")>-1;n=r?"/"+o[1]:decodeURIComponent(o[0]);var a=r?o[2]:o[1];a&&a.length&&(t=decodeURIComponent(a))}return{section:n,J:t}}function li(){V("hashchange",ui)}function ui(){if(!rn.D&&!Qn().lockAnchors){var n=ai(),t=n.section,e=n.J,o=void 0===rn.j,i=void 0===rn.j&&void 0===e&&!rn.A;t&&t.length&&(t&&t!==rn.j&&!o||i&&!ct()||!rn.A&&rn.R!=e&&!ct())&&on.u("onScrollPageAndSlide",{jn:t,slideAnchor:e})}}function ci(n){var t=n.target;z(t,Qn().menu+" [data-menuanchor]")&&si.call(t,n)}function si(n){an({S:"menu"}),!v(Qn().menu)[0]||!Qn().lockAnchors&&Qn().anchors.length||(I(n),on.u("onMenuClick",{anchor:W(this,"data-menuanchor")}))}function fi(n){var t=n.target;t&&z(t,"#fp-nav a")?de.call(t,n.e):X(t,".fp-tooltip")?se.call(t):(X(t,Cn)||null!=z(t,Cn))&&Zt.call(t,n.e)}c.reBuild=ii,on.l("bindEvents",(function(){Z("resize",oi),on.l("onDestroy",ei)})),c.setLockAnchors=function(n){Qn().lockAnchors=n},on.l("bindEvents",(function(){Z("hashchange",ui),on.l("onDestroy",li)})),on.l("bindEvents",(function(){B("wheel",Ze.Sn,Le()),on.l("scrollBeyondFullpage",Fe),on.l("onKeyDown",Ve)})),on.l("bindEvents",(function(){on.l("onClickOrTouch",ci)})),on.l("bindEvents",(function(){on.l("onClickOrTouch",fi)}));var di,vi=0;function pi(n){var t,e,o,i,a;if(G(Un(),"onScroll"),!rn.O&&ln().g&&($(ln().h),!ln().M&&!ln().Tn&&(!Qn().autoScrolling||Qn().scrollBar||lt("dragAndMove"))&&!st())){var l=lt("dragAndMove")?Math.abs(ut("dragAndMove","getCurrentScroll")):C(Qn()),u=function(n){var t=n>vi?"down":"up";return vi=n,an({W:n}),t}(l),c=0,s=l+g()/2,f=(lt("dragAndMove")?ut("dragAndMove","getDocumentHeight"):Lt.scrollHeight-g())===l,d=(ut("responsiveSlides","areSlidesSections")?ut("responsiveSlides","panels"):null)||ln().h;if(an({scrollY:l}),f)c=d.length-1;else if(l)for(var v=0;v<d.length;++v)(z(d[v].item,yn)||d[v].item).offsetTop<=s&&(c=v);else c=0;if(o=u,i=ln().g.item.offsetTop,a=i+g(),("up"==o?a>=C(Qn())+g():i<=C(Qn()))&&(h(ln().g.item,bn)||(O(ln().g.item,bn),E(H(ln().g.item),bn))),e=(t=d[c]).item,!ut("responsiveSlides","isCurrentSectionActive",c)&&!t.isActive){an({D:!0});var p,m,b=ln().g.item,S=ln().g.index()+1,y=wt(ln().g,e),M=ut("responsiveSlides","getSectionAnchor",t)||t.anchor,T=t.index()+1,A=t.activeSlide,x={g:b,sectionIndex:T-1,anchorLink:M,element:e,leavingSection:S,direction:y,items:{origin:ln().g,destination:t}};if(A&&(m=A.anchor,p=A.index()),rn.canScroll)E(d.filter((function(n){return n.index()!==t.index()})).map((function(n){return n.item})),mn),O(e,mn),ut("parallax","afterLoad"),Y(Qn().beforeLeave)&&no("beforeLeave",x),Y(Qn().onLeave)&&kt("onLeave",x),Y(Qn().afterLoad)&&kt("afterLoad",x),ut("resetSliders","apply",{localIsResizing:rn.O,leavingSection:S}),Rt(b),zt(e),Dt(e),$e(M,T-1),Qn().anchors.length&&an({j:M}),It(p,m,M),oe();clearTimeout(di),di=setTimeout((function(){an({D:!1})}),100)}Qn().fitToSection&&(clearTimeout(di),di=setTimeout((function(){an({D:!1}),rn.h.filter((function(n){var t=n.item.getBoundingClientRect();return Math.round(t.bottom)===Math.round(g())||0===Math.round(t.top)})).length||w(r.body,{"scroll-snap-type":"y mandatory"})}),300))}}function hi(n,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach((function(t){Yt(n,t,"k")})):(Yt(n,"all","k"),Qn().keyboardScrolling=n)}function gi(n){var t=n.index();void 0!==Qn().anchors[t]&&n.isActive&&$e(Qn().anchors[t],t),Qn().menu&&Qn().css3&&null!=z(v(Qn().menu)[0],dn)&&v(Qn().menu).forEach((function(n){Lt.appendChild(n)}))}function mi(){w(function(n,t){var e=[n];do{n=n.parentNode,e.push(n)}while(!X(n,"body"));return e}(Un()),{height:"100%",position:"relative"}),O(Un(),fn),O(Nt,gn),an({B:g()}),E(Un(),hn),ce(),ut("parallax","init");for(var n=ln().G,t=0;t<n.length;t++){var e=n[t],o=e.tn;e.item.setAttribute("data-fp-styles",W(e.item,"style")),ke(e),gi(e),o.length>0&&xe(e)}Qn().fixedElements&&Qn().css3&&v(Qn().fixedElements).forEach((function(n){Lt.appendChild(n)})),Qn().navigation&&fe(),v('iframe[src*="youtube.com/embed/"]',Un()).forEach((function(n){var t,e;e=W(t=n,"src"),t.setAttribute("src",e+(/\?/.test(e)?"&":"?")+"enablejsapi=1")})),ut("fadingEffect","apply"),ut("waterEffect","init"),ut("dropEffect","init"),ut("cards","init"),Qn().scrollOverflow&&Te.rn()}function wi(){var n,t,e=ln().g,o=ln().g.item;O(o,bn),zt(o),qe(),Dt(o),t=ko((n=ai()).section),n.section&&t&&(void 0===t||t.index()!==y(Ee))||!Y(Qn().afterLoad)||kt("afterLoad",{g:o,element:o,direction:null,anchorLink:e.anchor,sectionIndex:e.index(),items:{origin:ln().g,destination:ln().g}}),Y(Qn().afterRender)&&kt("afterRender"),G(Un(),"afterRender")}function bi(n,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach((function(t){Yt(n,t,"m")})):Yt(n,"all","m"),G(Un(),"setAllowScrolling",{value:n,Rn:t})}function Si(){var n=ai(),t=n.section,e=n.J;t&&(Qn().animateAnchor?jo(t,e):Ko(t,e))}on.l("onDestroy",(function(){clearTimeout(di),clearTimeout(void 0)})),on.l("bindEvents",(function(){Z("scroll",pi),r.body.addEventListener("scroll",pi),on.l("onScrollPageAndSlide",(function(n){jo(n.jn,n.slideAnchor)})),on.l("onMenuClick",(function(n){Ro(n.anchor,void 0)})),on.l("onScrollOverflowScrolled",(function(n){("down"===n.direction?io:ro)()})),on.l("scrollPage",(function(n){to(n.destination)}))})),on.l("onDestroy",(function(){V("scroll",pi)})),c.getActiveSlide=function(){return Et(ln().g.activeSlide)},c.getScrollX=function(){return rn.scrollX},on.l("bindEvents",(function(){on.l("onDestroy",qt),on.l("landscapeScroll",(function(n){_t(n.slides,n.destination)})),on.l("moveSlideRight",(function(n){Eo(n.section)})),on.l("moveSlideLeft",(function(n){Oo(n.section)}))})),on.l("bindEvents",(function(){var n=Qn().credits.position,t=["left","right"].indexOf(n)>-1?"".concat(n,": 0;"):"",e='\n        <div class="fp-watermark" style="'.concat(t,'">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(Qn().credits.label,"\n            </a>\n        </div>\n    "),o=$(rn.h),i=Qn().credits.enabled&&!rn.zn;o&&o.item&&i&&o.item.insertAdjacentHTML("beforeend",e)})),function(){on.l("onInitialise",(function(){var t,l;an({zn:(Qn().licenseKey,t=Qn().licenseKey,l=function(t){var e=parseInt("514").toString(16);if(!t||t.length<29||4===t.split(n[0]).length)return null;var o=["Each","for"][i()]().join(""),l=t[["split"]]("-"),u=[];l[o]((function(n,t){if(t<4){var o=function(n){var t=n[n.length-1],e=["NaN","is"][i()]().join("");return window[e](t)?r(t):function(n){return n-mn.length}(t)}(n);u.push(o);var a=r(n[o]);if(1===t){var l=["pa","dS","t","art"].join("");a=a.toString()[l](2,"0")}e+=a,0!==t&&1!==t||(e+="-")}}));var c=0,s="";return t.split("-").forEach((function(n,t){if(t<4){for(var e=0,o=0;o<4;o++)o!==u[t]&&(e+=Math.abs(r(n[o])),isNaN(n[o])||c++);var i=a(e);s+=i}})),s+=a(c),{Ln:new Date(e+"T00:00"),Nn:e.split("-")[2]===8*(mn.length-2)+"",Pn:s}}(t),l&&(Qn().credits&&l&&e<=l.Ln&&l.Pn===t.split(n[0])[4]||function(n){var t=o[i()]().join("");return n&&0===t.indexOf(n)&&n.length===t.length}(t)||l.Nn)||!1)})}));var n=["-"],t="2022-4-9".split("-"),e=new Date(t[0],t[1],t[2]),o=["se","licen","-","v3","l","gp"];function i(){return[["re","verse"].join("")]["".length]}function r(n){return n?isNaN(n)?n.charCodeAt(0)-72:n:""}function a(n){var t=72+n;return t>90&&t<97&&(t+=15),String.fromCharCode(t).toUpperCase()}}(),c.setKeyboardScrolling=hi,c.shared.Cn=wi,c.setAllowScrolling=bi;var yi={};function Mi(){return yi}var Ti,Ai,xi,Oi,Ei=!h(Lt,vt("OHNsd3AtZnVsbHBhZ2UtanM5T20="));function ki(n){if(Ai=r.createElement("div"),Ti=vt("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),Ei||(Ti=Ti.replace("extensions/","").replace("Extension","")),Ai.innerHTML=Ti,Ai=Ai.firstChild,"MutationObserver"in window&&new MutationObserver(ji).observe(r.body,{childList:!0,subtree:!1}),(!Ei||lt(n)&&c[n])&&(!function(n){var t=void 0!==Mi()[n]&&Mi()[n].length,e=[],o=!1;return x(Mi()[n])?e=Mi()[n]:e.push(Mi()[n]),e.forEach((function(e){var i=function(){if(r.domain.length){for(var n=r.domain.replace(/^(www\.)/,"").split(".");n.length>2;)n.shift();return n.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),a=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN","NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3"],l=vt(a[0]),u=vt(a[1]),c=vt(a[2]),s=vt(a[3]),f=vt(a[4]),d=vt(a[5]),v=void 0!==Qn()[f+d];t=t||v;var p=[l,u,c].indexOf(i)<0&&0!==i.length;if(!t&&!v&&p)return!1;var h=t?vt(e):"",g=(h=h.split("_")).length>1&&h[1].indexOf(n,h[1].length-n.length)>-1,m=h.length>1&&h[1].toLowerCase().indexOf(f)>-1,w=h[0].indexOf(i,h[0].length-i.length)<0,b=g||m;o=o||!(w&&p&&s!=h[0])&&b||!p})),o}(n)||!Ei)){Di();var t=vt("MzQ1c2V0SW50ZXJ2YWwxMjM=");window[t](Di,2e3)}}function Di(){Ai&&(Oi||(Math.random()<.5?dt(Lt,Ai):k(Ai,Lt),Oi=!0),Ai.setAttribute("style",vt("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,vt("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function ji(n){n.forEach((function(n){if(n.removedNodes[0]&&n.removedNodes[0].isEqualNode(Ai)){clearTimeout(xi);var t=vt("bDIwc2V0VGltZW91dDAzbA==");xi=window[t](Ri,900)}}))}function Ri(){Oi=!1}function zi(){var n=Qn().licenseKey;Qn()&&rn.zn||r.domain.indexOf("alvarotrigo.com")>-1?n&&n.length:(s("error","Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"),s("error","https://github.com/alvarotrigo/fullPage.js#options")),h(Nt,gn)?s("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(Qn().continuousVertical&&(Qn().loopTop||Qn().loopBottom)&&(Qn().continuousVertical=!1,s("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!Qn().scrollOverflow||!Qn().scrollBar&&Qn().autoScrolling||s("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!Qn().continuousVertical||!Qn().scrollBar&&Qn().autoScrolling||(Qn().continuousVertical=!1,s("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),Qn().anchors.forEach((function(n){var t=[].slice.call(v("[name]")).filter((function(t){return W(t,"name")&&W(t,"name").toLowerCase()==n.toLowerCase()})),e=[].slice.call(v("[id]")).filter((function(t){return W(t,"id")&&W(t,"id").toLowerCase()==n.toLowerCase()}));if(e.length||t.length){s("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=e.length?"id":"name";(e.length||t.length)&&s("error",'"'+n+'" is is being used by another element `'+o+"` property")}})))}function Li(){return{options:Qn(),internals:{container:Un(),canScroll:rn.canScroll,isScrollAllowed:Gt(),getDestinationPosition:eo,isTouch:u,c:ki,getXmovement:Kt,removeAnimation:bt,getTransforms:St,lazyLoad:zt,addAnimation:mt,performHorizontalMove:Jt,landscapeScroll:_t,silentLandscapeScroll:ne,keepSlidesPosition:Ke,silentScroll:Mt,styleSlides:xe,styleSection:ke,scrollHandler:pi,getEventsPage:Mo,getMSPointer:To,isReallyTouch:bo,usingExtension:lt,toggleControlArrows:Ut,touchStartHandler:So,touchMoveHandler:wo,nullOrSection:Ot,items:{SectionPanel:le,SlidePanel:ue,Item:$n},getVisible:d,getState:ln,updateState:oe,getPanels:function(){return rn.U},getSections:function(){return rn.h},setActiveSection:function(n){rn.g=n}}}}function Ni(n){var t=["NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3"],e=vt(t[0]),o=vt(t[1]),i=void 0!==Qn()[e+o],r="fp_"+n+"Extension";Mi()[n]=i?Qn()[e+o]:Qn()[n+o],c[n]=void 0!==window[r]?new window[r]:null,c[n]&&c[n].c(n)}function Pi(n,t){var e;if(Lt=v("body")[0],Nt=v("html")[0],Pt=v("html, body"),!h(Nt,gn))return"touchWrapper",e="string"==typeof n?v(n)[0]:n,Fn.touchWrapper=e,function(n){Xn=p({},Fn,n),Gn=Object.assign({},Xn)}(t),function(n){Vn=n}("string"==typeof n?v(n)[0]:n),on.u("onInitialise"),zi(),c.getFullpageData=Li,c.version="4.0.7",c.test=Object.assign(c.test,{top:"0px",_:"translate3d(0px, 0px, 0px)",K:function(){for(var n=[],t=0;t<v(Qn().sectionSelector,Un()).length;t++)n.push("translate3d(0px, 0px, 0px)");return n}(),left:function(){for(var n=[],t=0;t<v(Qn().sectionSelector,Un()).length;t++)n.push(0);return n}(),options:Qn(),setAutoScrolling:null}),c.shared=Object.assign(c.shared,{Cn:null,kn:!1}),i.fullpage_api=c,i.fullpage_extensions=!0,Un()&&(on.u("beforeInit"),Ni("continuousHorizontal"),Ni("scrollHorizontally"),Ni("resetSliders"),Ni("interlockedSlides"),Ni("responsiveSlides"),Ni("fadingEffect"),Ni("dragAndMove"),Ni("offsetSections"),Ni("scrollOverflowReset"),Ni("parallax"),Ni("cards"),Ni("dropEffect"),Ni("waterEffect"),ut("dragAndMove","init"),ut("responsiveSlides","init"),ie(),oe(),Qn().scrollBar=Qn().scrollBar||Qn().hybrid,Kn(),mi(),we(!0),bi(!0),Xo(!0),pe(Qn().autoScrolling,"internal"),be(),Ct(),"complete"===r.readyState&&Si(),Z("load",Si),wi(),Ei||ki("l"),ie(),oe(),on.u("bindEvents"),ut("dragAndMove","turnOffTouch")),i.fullpage_api;zi()}return c.destroy=function(n){G(Un(),"destroy",n),pe(!1,"internal"),bi(!0),Xo(!1),hi(!1),O(Un(),hn),on.u("onDestroy"),ut("dragAndMove","destroy"),n&&(Mt(0),v("img[data-src], source[data-src], audio[data-src], iframe[data-src]",Un()).forEach((function(n){tn(n,"src")})),v("img[data-srcset]").forEach((function(n){tn(n,"srcset")})),_(v("#fp-nav, .fp-slidesNav, .fp-controlArrow")),w(nt(ln().h),{height:"","background-color":"",padding:""}),w(nt(ln().slides),{width:""}),w(Un(),{height:"",position:"","-ms-touch-action":"","touch-action":""}),w(Pt,{overflow:"",height:""}),E(Nt,gn),E(Lt,vn),Lt.className.split(/\s+/).forEach((function(n){0===n.indexOf("fp-viewing")&&E(Lt,n)})),nt(ln().U).forEach((function(n){Qn().scrollOverflow&&E(n,Ln),E(n,"fp-table active "+bn),W(n,"data-fp-styles")&&n.setAttribute("style",W(n,"data-fp-styles")),h(n,Sn)&&!Yn&&n.removeAttribute("data-anchor")})),bt(Un()),[Mn,Rn,Dn].forEach((function(n){v(n,Un()).forEach((function(n){R(n)}))})),w(Un(),{"-webkit-transition":"none",transition:"none"}),i.scrollTo(0,0),[Sn,xn,jn].forEach((function(n){E(v("."+n),n)})))},i.fp_easings=p(i.fp_easings,{easeInOutCubic:function(n,t,e,o){return(n/=o/2)<1?e/2*n*n*n+t:e/2*((n-=2)*n*n+2)+t}}),i.jQuery&&function(n,t){n&&t?n.fn.fullpage=function(e){e=n.extend({},e,{$:n}),new t(this[0],e),Object.keys(c).forEach((function(n){Qn().$.fn.fullpage[n]=c[n]}))}:s("error","jQuery is required to use the jQuery fullpage adapter!")}(i.jQuery,Pi),Pi}));


/***/ }),

/***/ 239:
/***/ (() => {

window.fp_easings={def:"easeOutQuad",linear:function(n,t,e,u){return e*n/u+t},swing:function(n,t,e,u){return window.fp_easings[window.fp_easings.def](n,t,e,u)},easeInQuad:function(n,t,e,u){return e*(n/=u)*n+t},easeOutQuad:function(n,t,e,u){return-e*(n/=u)*(n-2)+t},easeInOutQuad:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n+t:-e/2*(--n*(n-2)-1)+t},easeInCubic:function(n,t,e,u){return e*(n/=u)*n*n+t},easeOutCubic:function(n,t,e,u){return e*((n=n/u-1)*n*n+1)+t},easeInOutCubic:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n*n+t:e/2*((n-=2)*n*n+2)+t},easeInQuart:function(n,t,e,u){return e*(n/=u)*n*n*n+t},easeOutQuart:function(n,t,e,u){return-e*((n=n/u-1)*n*n*n-1)+t},easeInOutQuart:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n*n*n+t:-e/2*((n-=2)*n*n*n-2)+t},easeInQuint:function(n,t,e,u){return e*(n/=u)*n*n*n*n+t},easeOutQuint:function(n,t,e,u){return e*((n=n/u-1)*n*n*n*n+1)+t},easeInOutQuint:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n*n*n*n+t:e/2*((n-=2)*n*n*n*n+2)+t},easeInSine:function(n,t,e,u){return-e*Math.cos(n/u*(Math.PI/2))+e+t},easeOutSine:function(n,t,e,u){return e*Math.sin(n/u*(Math.PI/2))+t},easeInOutSine:function(n,t,e,u){return-e/2*(Math.cos(Math.PI*n/u)-1)+t},easeInExpo:function(n,t,e,u){return 0==n?t:e*Math.pow(2,10*(n/u-1))+t},easeOutExpo:function(n,t,e,u){return n==u?t+e:e*(1-Math.pow(2,-10*n/u))+t},easeInOutExpo:function(n,t,e,u){return 0==n?t:n==u?t+e:(n/=u/2)<1?e/2*Math.pow(2,10*(n-1))+t:e/2*(2-Math.pow(2,-10*--n))+t},easeInCirc:function(n,t,e,u){return-e*(Math.sqrt(1-(n/=u)*n)-1)+t},easeOutCirc:function(n,t,e,u){return e*Math.sqrt(1-(n=n/u-1)*n)+t},easeInOutCirc:function(n,t,e,u){return(n/=u/2)<1?-e/2*(Math.sqrt(1-n*n)-1)+t:e/2*(Math.sqrt(1-(n-=2)*n)+1)+t},easeInElastic:function(n,t,e,u){var a=1.70158,r=0,i=e;if(0==n)return t;if(1==(n/=u))return t+e;if(r||(r=.3*u),i<Math.abs(e)){i=e;a=r/4}else a=r/(2*Math.PI)*Math.asin(e/i);return-i*Math.pow(2,10*(n-=1))*Math.sin((n*u-a)*(2*Math.PI)/r)+t},easeOutElastic:function(n,t,e,u){var a=1.70158,r=0,i=e;if(0==n)return t;if(1==(n/=u))return t+e;if(r||(r=.3*u),i<Math.abs(e)){i=e;a=r/4}else a=r/(2*Math.PI)*Math.asin(e/i);return i*Math.pow(2,-10*n)*Math.sin((n*u-a)*(2*Math.PI)/r)+e+t},easeInOutElastic:function(n,t,e,u){var a=1.70158,r=0,i=e;if(0==n)return t;if(2==(n/=u/2))return t+e;if(r||(r=u*(.3*1.5)),i<Math.abs(e)){i=e;a=r/4}else a=r/(2*Math.PI)*Math.asin(e/i);return n<1?i*Math.pow(2,10*(n-=1))*Math.sin((n*u-a)*(2*Math.PI)/r)*-.5+t:i*Math.pow(2,-10*(n-=1))*Math.sin((n*u-a)*(2*Math.PI)/r)*.5+e+t},easeInBack:function(n,t,e,u,a){return null==a&&(a=1.70158),e*(n/=u)*n*((a+1)*n-a)+t},easeOutBack:function(n,t,e,u,a){return null==a&&(a=1.70158),e*((n=n/u-1)*n*((a+1)*n+a)+1)+t},easeInOutBack:function(n,t,e,u,a){return null==a&&(a=1.70158),(n/=u/2)<1?e/2*(n*n*((1+(a*=1.525))*n-a))+t:e/2*((n-=2)*n*((1+(a*=1.525))*n+a)+2)+t},easeInBounce:function(n,t,e,u){return e-window.fp_easings.easeOutBounce(u-n,0,e,u)+t},easeOutBounce:function(n,t,e,u){return(n/=u)<1/2.75?e*(7.5625*n*n)+t:n<2/2.75?e*(7.5625*(n-=1.5/2.75)*n+.75)+t:n<2.5/2.75?e*(7.5625*(n-=2.25/2.75)*n+.9375)+t:e*(7.5625*(n-=2.625/2.75)*n+.984375)+t},easeInOutBounce:function(n,t,e,u){return n<u/2?.5*window.fp_easings.easeInBounce(2*n,0,e,u)+t:.5*window.fp_easings.easeOutBounce(2*n-u,0,e,u)+.5*e+t}};
//# sourceMappingURL=easings.min.js.map


/***/ }),

/***/ 379:
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 24:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__24__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components)
});

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(24);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
;// CONCATENATED MODULE: ./components/Wrapper/index.js
/* eslint-disable import/no-extraneous-dependencies */const Wrapper=({children})=>/*#__PURE__*/external_React_default().createElement(external_React_.Fragment,null,children);/* harmony default export */ const components_Wrapper = (Wrapper);
;// CONCATENATED MODULE: ./components/index.js
/* eslint-disable */const windowExists=()=>{if(typeof window==='undefined'){return false;}try{const env="production".toLowerCase();return!env.match(/test/);}catch(e){return true;}};/* harmony default export */ const components = ((()=>{let exported;if(windowExists()){exported=__webpack_require__(88)/* ["default"] */ .Z;}else{// NOTE: SSR support
exported=__webpack_require__(882)/* ["default"] */ .Z;}exported.Wrapper=components_Wrapper;return exported;})());
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});