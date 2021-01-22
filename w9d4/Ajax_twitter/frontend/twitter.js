const FollowToggle = require("./follow_toggle")
const UserSearch = require("./user_search")


$(() => {
    $(".follow-toggle").each((index, button) => {
        new FollowToggle(button);
    })

    $(".users-search").each((index, nav) => {
        new UserSearch(nav);
    })
})