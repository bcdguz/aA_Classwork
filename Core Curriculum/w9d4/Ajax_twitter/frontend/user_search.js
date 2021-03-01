// const FollowToggle = require("./follow_toggle");
const APIUtil = require("./api_util");

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