import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(body) {
        return (e) => (
            this.setState({[body]: e.target.value})
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
            .then(()=> this.props.history.push('/'));
    }

    render() {
        let upOrIn = <div></div>;
        if (this.props.formType === 'Login') {
            upOrIn = <Link to="/signup">Go to: Sign Up</Link>
        } else {
            upOrIn = <Link to="/login">Go to: Login</Link>
        }
        // debugger
        const errors = this.props.errors.session.map((error, idx) => {
            return(
                <li key={idx}>{error}</li>
            )
        })
        return (
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input onChange={this.handleChange('username')} type="text" value={this.state.username}/>
                    </label>
                    <label>
                        <input onChange={this.handleChange('password')} type="password" value={this.state.password}/>
                    </label>
                    <button>Submit</button>
                </form>
                <ul>
                    {errors}
                </ul>
                {upOrIn}
            </div>
        )
    }
}

export default SessionForm;