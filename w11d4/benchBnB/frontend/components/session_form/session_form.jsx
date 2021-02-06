import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange(body) {
        return (e) => (
            this.setState({[body]: e.target.value})
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user);
    }

    render() {
        let upOrIn = <div></div>;
        if (this.props.formType === 'Login') {
            upOrIn = <Link to="/signup">Sign Up</Link>
        } else {
            upOrIn = <Link to="/login">Login</Link>
        }
        return (
            <div>
                <h3>{this.props.formType}</h3>
                {upOrIn}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input onChange={this.handleChange('username')} type="text" value={this.state.username}/>
                    </label>
                    <label>
                        <input onChange={this.handleChange('password')} type="password" value={this.state.password}/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;