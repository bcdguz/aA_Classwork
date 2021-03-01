const APIUtil = require("./api_util");

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