import APIUtil from "./api_util";

class FollowToggle {
    constructor(el) {
        this.button = el;
        this.userId = el.dataset.userId;
        this.followState = el.dataset.initialFollowState;
        this.render = this.render.bind(this);
        this.render();
        this.button.addEventListener('click', (e) => this.handleClick(e));
    }

    handleClick(e) {
        e.preventDefault();
        const button = this;
        if (this.followState === "unfollowed") {
            APIUtil.followUser(button.userId).then(res => {
                button.followState = "followed";
                console.log("followed")
                button.render();
            })
        } else {
            APIUtil.unfollowUser(button.userId).then(res => {
                button.followState = "unfollowed";
                console.log("unfollowed")
                button.render();
            })
        }
    }

    render() {
        
        if (this.followState === "unfollowed") {
            this.button.innerText = "Follow!";
        } else {
            this.button.innerText = "Unfollow!"
        }
    }
}

export default FollowToggle;