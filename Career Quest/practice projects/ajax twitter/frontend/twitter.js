import FollowToggle from './follow_toggle';
import UserSearch from './user_search';

document.addEventListener("DOMContentLoaded", () => {
    const followButtons = document.getElementsByClassName('follow-toggle');
    for (let i = 0; i < followButtons.length; i++) {
        const followToggle = new FollowToggle(followButtons[i]);
    }

    const searchEl = document.getElementsByClassName('user-search')[0];
    const searchNav = new UserSearch(searchEl);
})