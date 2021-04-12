import React from 'react';
import {Link} from 'react-router-dom'

const Greeting = (props) => {
    let content = <div></div>;
    if (props.currentUser !== null) {
        content = 
            <div>
                <h1>Wellcome {props.currentUser.username}!</h1>
                <button onClick={props.logout}>Logout</button>
            </div>
    } else {
        content =
            <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
    }

    return(
        <div className="greeting-header">
            {content}
        </div>
    )
}

export default Greeting;