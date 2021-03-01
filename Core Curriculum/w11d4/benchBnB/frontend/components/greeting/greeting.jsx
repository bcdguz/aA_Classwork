import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        // debugger
        let renderConditional = <div></div>
        if (this.props.currentUser) {
            renderConditional = <>
                <h2>Welcome! {this.props.currentUser.username}</h2>
                <button onClick={this.props.logout}>Logout</button>
            </>
        } else {
            renderConditional = <>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </>
        }
        return (
            <div>
                {renderConditional}
            </div>
        )
    }
}

export default Greeting