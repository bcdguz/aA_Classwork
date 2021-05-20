class UserSearch {
    constructor(el) {
        this.input = el.children[0];
        this.ul = el.children[1];
        this.handleInput = this.handleInput.bind(this);
        this.input.addEventListener('change', (e) => this.handleInput(e));
    }

    searchUsers(queryVal) {
        const url = new URL('/users/search/');
        const params = {query: queryVal}; 
        url.search = new URLSearchParams(params).toString();
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(res => {
                debugger
            })
    }

    handleInput(e) {
        const value = e.target.value;
        this.searchUsers(value);
        
    }
}

export default UserSearch;