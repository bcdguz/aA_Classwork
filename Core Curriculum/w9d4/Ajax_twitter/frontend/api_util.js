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