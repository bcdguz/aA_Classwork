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
            $.ajax({
                method: "POST",
                url: `/users/${button.userId}/follow`,
                dataType: 'json'
            }).then(res => {
                button.followState = "followed";
                console.log("followed")
                button.render();
            })
        } else {
            $.ajax({
                method: "DELETE",
                url: `/users/${button.userId}/follow`,
                dataType: 'json'
            }).then(res => {
                button.followState = "followed";
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