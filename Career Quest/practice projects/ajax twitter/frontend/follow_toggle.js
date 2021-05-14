class FollowToggle {
    constructor(el) {
        this.userId = el.dataset.userId;
        this.followState = el.dataset.initialFollowState;
    }
}

export default FollowToggle;