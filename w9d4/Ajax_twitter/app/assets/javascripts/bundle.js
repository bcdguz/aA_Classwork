/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const APIUtil = {

    followUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            dataType: 'JSON',
            method: 'POST',
        })
    },

    unfollowUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            dataType: 'JSON',
            method: 'DELETE',
        })
    },

    searchUsers: query => {
        return $.ajax({
            url: '/users/search',
            dataType: 'JSON',
            data: {query},
            method: 'GET'
        })
    }
    
}
module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

class FollowToggle {
    constructor(el, options){
        this.el = $(el);
        this.userId = this.el.data("user-id") || options.userId;

        this.followState = this.el.data("initial-follow-state") || options.followState;
        this.render();
        //this.handleClick();
        this.el.on("click", this.handleClick.bind(this))
    }

    render(){
        if (this.followState === "followed") {
            this.el.prop('disabled', false);
            this.el.html("Unfollow!");
        } else if (this.followState === "unfollowed") {
            this.el.prop('disabled', false);
            this.el.html("Follow!");
        } else if (this.followState === 'following') {
            this.el.prop('disabled', true);
            this.el.html("DON'T TOUCH");
        } else if (this.followState === 'unfollowing') {
            this.el.prop('disabled', true);
            this.el.html("DON'T TOUCH");
        }
    }

    handleClick(event) {
        const toggled = this;
        //this.el.on("click", (event)=> {
            event.preventDefault();
            if (this.followState === "followed") {
                this.followState = 'unfollowing';
                this.render();
                APIUtil.unfollowUser(this.userId).then(() => {
                        toggled.followState = 'unfollowed';
                        toggled.render();
                    })
            } else if (this.followState === "unfollowed") {
                // debugger
                this.followState = 'following';
                this.render();
                APIUtil.followUser(this.userId).then(() => {
                        toggled.followState = 'followed'
                        toggled.render();
                    })
            }  
        //})
        // event.preventDefault();
        // if (this.followState === "Follow!") {
        //     $.ajax({
        //         url: '/users/:user_id/follow',
        //         dataType: 'JSON',
        //         method: 'DELETE',
        //     })
        //     .then(this.render())
        // } else if (this.followState === "Unfollow!") {
        //     $.ajax({
        //         url: '/users/:user_id/follow',
        //         dataType: 'JSON',
        //         method: 'POST',
        //     })
        //     .then(this.render())
        // }  
        
    }
}

module.exports = FollowToggle

/***/ }),

/***/ "./frontend/user_search.js":
/*!*********************************!*\
  !*** ./frontend/user_search.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// const FollowToggle = require("./follow_toggle");
const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

class UserSearch {
    constructor(el){
        this.el = $(el)
        this.ul = $(".users")
        this.input = $(".user-input")
        console.log(this.input)
        this.input.on('input', this.handleInput.bind(this))
    }

    handleInput(){
        console.log('in handleInput');
        const typed = this;
        APIUtil.searchUsers(this.input.val()).then((users) => this.renderResults(users));
    }

    renderResults(users) {
        this.ul.empty();


        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            console.log(user);
            let tag = $(`<a href='user_url(${user})'></a>`);
            let list = $("<li></li>")
            // // let button = $(".follow-toggle")
            // // new FollowToggle(button)
            let tagged = list.append(tag);
            this.ul.append(tagged);

        }
    }
}

module.exports = UserSearch;

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
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js")
const UserSearch = __webpack_require__(/*! ./user_search */ "./frontend/user_search.js")


$(() => {
    $(".follow-toggle").each((index, button) => {
        new FollowToggle(button);
    })

    $(".users-search").each((index, nav) => {
        new UserSearch(nav);
    })
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map