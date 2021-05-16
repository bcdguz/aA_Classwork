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
            this.followState = "following";
            this.render();
            APIUtil.followUser(button.userId).then(res => {
                button.followState = "followed";
                console.log("followed");
                button.render();
            })
        } else {
            this.followState = "unfollowing";
            this.render();
            APIUtil.unfollowUser(button.userId).then(res => {
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

export default FollowToggle;