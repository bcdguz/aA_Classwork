import React from 'react';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        let renderThis = <div></div>
        if (this.props.currentUser) {
            renderThis = <div>
                <h2>Welcome! {this.props.currentUser.username}</h2>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        } else {
            renderThis = <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </div>
        }
        return (
            {renderThis}
        )
    }
}

export default Greeting