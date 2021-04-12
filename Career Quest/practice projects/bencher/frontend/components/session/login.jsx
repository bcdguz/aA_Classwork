import React from 'react';

const LoginComponent = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleChange = (e) => {
        debugger
    }

    return (
        <div className='session-form'>
            <form>
                <input body="username" type="text"
                onChange={handleChange} value={username}/>
                <input body="password" type="password"
                onChange={handleChange} value={password} />
            </form>
        </div>
    )
}

export default LoginComponent;