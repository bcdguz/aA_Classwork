import FollowToggle from './follow_toggle';

document.addEventListener("DOMContentLoaded", () => {
    const followButtons = document.getElementsByClassName('follow-toggle');
    for (let i = 0; i < followButtons.length; i++) {
        const followToggle = new FollowToggle(followButtons[i]);
    }
})