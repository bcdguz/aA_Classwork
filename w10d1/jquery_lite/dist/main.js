/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n    constructor(arr) {\n        // debugger\n        this.$arr = arr;\n    }\n\n    html(inner = null){\n        if (inner !== null) {\n            this.$arr.forEach((node) => {\n                node.innerHTML = inner;\n            })\n        } else {\n            return this.$arr[0].innerHTML;\n        }\n    }\n\n    empty(){\n        this.html(\"\");\n    }\n\n    append(arg){\n        this.$arr.forEach((node) => {\n            node.append(arg);\n        })\n    }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\")\n\nfunction $l(selector){\n    if(selector instanceof HTMLElement) {\n        const DOMElement = new DOMNodeCollection([selector]);\n        return DOMElement;\n    } else {\n        const nodeList = document.querySelectorAll(selector);\n        // let elementArr = Array.from(nodeList);\n        let elementArr = Array.prototype.slice.call(nodeList)\n        return new DOMNodeCollection(elementArr);\n    }\n}\n\nwindow.$l = $l;\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;