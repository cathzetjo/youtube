/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ \"./src/search/index.js\");\n/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer */ \"./src/drawer/index.js\");\n\n\n\nconst init = () => {\n  Object(_drawer__WEBPACK_IMPORTED_MODULE_1__[\"drawSearchComponent\"])();\n  Object(_search__WEBPACK_IMPORTED_MODULE_0__[\"bindSearchComponentEvents\"])();\n};\n\ninit();\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/drawer/index.js":
/*!*****************************!*\
  !*** ./src/drawer/index.js ***!
  \*****************************/
/*! exports provided: drawSearchComponent, drawSnippets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawSearchComponent\", function() { return drawSearchComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawSnippets\", function() { return drawSnippets; });\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search */ \"./src/search/index.js\");\n\n\nconst drawSearchComponent = () => {\n  const root = document.querySelector('body');\n  const container = root.appendChild(Object(_search__WEBPACK_IMPORTED_MODULE_0__[\"getSearchContainer\"])());\n  container.appendChild(Object(_search__WEBPACK_IMPORTED_MODULE_0__[\"getSearchLine\"])());\n  container.appendChild(Object(_search__WEBPACK_IMPORTED_MODULE_0__[\"getSearchButton\"])());\n};\n\nconst getSnippet = (item) => {\n  const {\n    snippet: {\n      channelTitle,\n      description,\n      title,\n      thumbnails,\n      publishedAt,\n    },\n    id: { videoId },\n  } = item;\n\n  const card = document.createElement('div');\n  card.classList.add('card');\n\n  const imgContainer = document.createElement('div');\n  imgContainer.classList.add('img-container');\n\n  const infoContainer = document.createElement('div');\n  infoContainer.classList.add('card-container');\n\n  const img = document.createElement('img');\n  img.src = thumbnails.medium.url;\n\n  const infoContainerTitle = document.createElement('p');\n  infoContainerTitle.classList.add('card-title');\n  infoContainerTitle.innerText = title;\n\n  const infoContainerDate = document.createElement('p');\n  infoContainerDate.classList.add('card-date');\n  infoContainerDate.innerText = publishedAt;\n\n  const infoContainerDescription = document.createElement('p');\n  infoContainerDescription.classList.add('card-text');\n  infoContainerDescription.innerText = description;\n\n  const linkParagraph = document.createElement('p');\n  linkParagraph.classList.add('video-link');\n\n  const linkToVideo = document.createElement('a');\n  linkToVideo.innerText = `Канал: ${channelTitle}`;\n  linkToVideo.setAttribute('href', `https://www.youtube.com/watch?v=${videoId}`);\n  linkToVideo.setAttribute('target', '_blank');\n\n  imgContainer.appendChild(img);\n  infoContainer.appendChild(infoContainerTitle);\n  infoContainer.appendChild(infoContainerDate);\n  infoContainer.appendChild(infoContainerDescription);\n  infoContainer.appendChild(linkParagraph);\n  linkParagraph.appendChild(linkToVideo);\n  card.appendChild(imgContainer);\n  card.appendChild(infoContainer);\n\n  return card;\n};\n\nconst drawSnippets = (items) => {\n  const root = document.querySelector('body');\n  const container = root.appendChild(Object(_search__WEBPACK_IMPORTED_MODULE_0__[\"getCardsContainer\"])());\n  items.forEach((item) => {\n    container.appendChild(getSnippet(item));\n  });\n};\n\n\n//# sourceURL=webpack:///./src/drawer/index.js?");

/***/ }),

/***/ "./src/search/component.js":
/*!*********************************!*\
  !*** ./src/search/component.js ***!
  \*********************************/
/*! exports provided: getSearchContainer, getSearchLine, getSearchButton, getCardsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSearchContainer\", function() { return getSearchContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSearchLine\", function() { return getSearchLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSearchButton\", function() { return getSearchButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCardsContainer\", function() { return getCardsContainer; });\nconst getSearchContainer = () => {\n  const SearchContainer = document.createElement('div');\n  SearchContainer.classList.add('search-block');\n  return SearchContainer;\n};\n\nconst getSearchLine = () => {\n  const input = document.createElement('input');\n  input.dataset.component = 'search-line';\n  input.classList.add('form-control');\n  input.placeholder = 'Enter you request here';\n  return input;\n};\n\nconst getSearchButton = () => {\n  const buttonSearch = document.createElement('button');\n\n  buttonSearch.dataset.component = 'search-btn';\n  buttonSearch.classList.add('button-search');\n  buttonSearch.textContent = 'Search';\n\n  return buttonSearch;\n};\n\nconst getCardsContainer = () => {\n  const cardsContainer = document.createElement('div');\n  cardsContainer.classList.add('card-block');\n  return cardsContainer;\n};\n\n\n//# sourceURL=webpack:///./src/search/component.js?");

/***/ }),

/***/ "./src/search/engine.js":
/*!******************************!*\
  !*** ./src/search/engine.js ***!
  \******************************/
/*! exports provided: search, bindSearchComponentEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return search; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindSearchComponentEvents\", function() { return bindSearchComponentEvents; });\n/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../drawer */ \"./src/drawer/index.js\");\n\n\nconst searchLineSelector = '[data-component=\"search-line\"]';\nconst searchBtnSelector = '[data-component=\"search-btn\"]';\nconst youtubeApiKey = 'AIzaSyADTsXs_DYEeYOkFOOV5lGXjZiSec7caI8';\n\nconst search = (query) => {\n  const fetchResults = fetch(`https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&type=video&part=snippet&maxResults=15&q=${query}`);\n\n  return fetchResults.then(res => res.json());\n};\n\nconst searchAndDraw = async query => Object(_drawer__WEBPACK_IMPORTED_MODULE_0__[\"drawSnippets\"])((await search(query)).items);\n\nconst searchLineKeypressHandler = async (event) => {\n  if (event.code === 'Enter') {\n    event.preventDefault();\n    await searchAndDraw(event.target.value);\n  }\n};\n\nconst searchBtnClickHandler = async (event) => {\n  const searchLine = document.querySelector(searchLineSelector);\n\n  event.preventDefault();\n  await searchAndDraw(searchLine.value);\n};\n\nconst bindSearchComponentEvents = () => {\n  const searchLine = document.querySelector(searchLineSelector);\n  const searchBtn = document.querySelector(searchBtnSelector);\n\n  searchBtn.addEventListener('click', searchBtnClickHandler);\n  searchLine.addEventListener('keypress', searchLineKeypressHandler);\n};\n\n\n//# sourceURL=webpack:///./src/search/engine.js?");

/***/ }),

/***/ "./src/search/index.js":
/*!*****************************!*\
  !*** ./src/search/index.js ***!
  \*****************************/
/*! exports provided: search, bindSearchComponentEvents, getSearchContainer, getSearchLine, getSearchButton, getCardsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ \"./src/search/engine.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return _engine__WEBPACK_IMPORTED_MODULE_0__[\"search\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bindSearchComponentEvents\", function() { return _engine__WEBPACK_IMPORTED_MODULE_0__[\"bindSearchComponentEvents\"]; });\n\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ \"./src/search/component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSearchContainer\", function() { return _component__WEBPACK_IMPORTED_MODULE_1__[\"getSearchContainer\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSearchLine\", function() { return _component__WEBPACK_IMPORTED_MODULE_1__[\"getSearchLine\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSearchButton\", function() { return _component__WEBPACK_IMPORTED_MODULE_1__[\"getSearchButton\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getCardsContainer\", function() { return _component__WEBPACK_IMPORTED_MODULE_1__[\"getCardsContainer\"]; });\n\n\n\n\n// export const search = query => query;\n//\n// export const sum = (a, b) => (a + b);\n\n\n//# sourceURL=webpack:///./src/search/index.js?");

/***/ })

/******/ });