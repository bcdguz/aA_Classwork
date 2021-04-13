import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const LoginComponent = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleChange = (field) => {
        return (e) => {
            if (field === 'username') {
                setUsername(e.target.value);
            } else {
                setPassword(e.target.value);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {username, password};
        props.login(user);
    }

    const errors = props.errors.map(error => {
        return <li key={Date.now()}>{error}</li>
    })

    const signupLink = <Link to="/signup">sign up</Link>;

    return (
        <div className="session-page">
            <h1>Welcome to Bench BnB!</h1>
            <h3>Please login or {signupLink}.</h3>
            <div className='session-form'>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input body="username" type="text"
                    onChange={handleChange('username')} value={username}/>
                    <label>Password</label>
                    <input body="password" type="password"
                    onChange={handleChange('password')} value={password} />
                    <button>Login</button>
                </form>
                <ul>{errors}</ul>
            </div>
        </div>
    )
}

export default LoginComponent;