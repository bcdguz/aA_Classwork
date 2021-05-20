/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const APIUtil = {
    followUser: id => APIUtil.changeFollowStatus(id, 'POST'),

    unfollowUser: id => APIUtil.changeFollowStatus(id, 'DELETE'),

    changeFollowStatus: (id, method) => (
        $.ajax({
            url: `/users/${id}/follow`,
            dataType: 'json',
            method
        })
    ),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIUtil);

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");


class FollowToggle {
    constructor(el) {
        this.button = el;
        this.userId = el.dataset.userId;
        this.followState = el.dataset.initialFollowState;
        this.render();
        this.button.addEventListener('click', (e) => this.handleClick(e));
    }

    handleClick(e) {
        e.preventDefault();
        const button = this;
        if (this.followState === "unfollowed") {
            this.followState = "following";
            this.render();
            _api_util__WEBPACK_IMPORTED_MODULE_0__.default.followUser(button.userId).then(res => {
                button.followState = "followed";
                console.log("followed");
                button.render();
            })
        } else {
            this.followState = "unfollowing";
            this.render();
            _api_util__WEBPACK_IMPORTED_MODULE_0__.default.unfollowUser(button.userId).then(res => {
                button.followState = "unfollowed";
                console.log("unfollowed")
                button.render();
            })
        }
    }

    render() {
        switch (this.followState) {
            case 'followed':
                this.button.disabled = false;
                this.button.innerText = 'Unfollow!';
                break;
            case 'unfollowed':
                this.button.disabled = false;
                this.button.innerText = 'Follow!';
                break;
            case 'following':
                this.button.disabled = true;;
                this.button.innerText = 'Following...';
                break;
            case 'unfollowing':
                this.button.disabled = true;;
                this.button.innerText = 'Unfollowing...';
                break;
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowToggle);

/***/ }),

/***/ "./frontend/twitter.js":
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _follow_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");
/* harmony import */ var _user_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user_search */ "./frontend/user_search.js");



document.addEventListener("DOMContentLoaded", () => {
    const followButtons = document.getElementsByClassName('follow-toggle');
    for (let i = 0; i < followButtons.length; i++) {
        const followToggle = new _follow_toggle__WEBPACK_IMPORTED_MODULE_0__.default(followButtons[i]);
    }

    const searchEl = document.getElementsByClassName('user-search')[0];
    const searchNav = new _user_search__WEBPACK_IMPORTED_MODULE_1__.default(searchEl);
})

/***/ }),

/***/ "./frontend/user_search.js":
/*!*********************************!*\
  !*** ./frontend/user_search.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class UserSearch {
    constructor(el) {
        this.input = el.children[0];
        this.ul = el.children[1];
        this.handleInput = this.handleInput.bind(this);
        this.input.addEventListener('change', (e) => this.handleInput(e));
    }

    searchUsers(queryVal) {
        const url = new URL('/users/search/');
        const params = {query: queryVal}; 
        url.search = new URLSearchParams(params).toString();
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(res => {
                debugger
            })
    }

    handleInput(e) {
        const value = e.target.value;
        this.searchUsers(value);
        
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserSearch);

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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./frontend/twitter.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map