import React from 'react';
import {useState} from 'react';

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

    return (
        <div className='session-form'>
            <form onSubmit={handleSubmit}>
                <input body="username" type="text"
                onChange={handleChange('username')} value={username}/>
                <input body="password" type="password"
                onChange={handleChange('password')} value={password} />
                <button>Login</button>
            </form>
            <ul>{errors}</ul>
        </div>
    )
}

export default LoginComponent;