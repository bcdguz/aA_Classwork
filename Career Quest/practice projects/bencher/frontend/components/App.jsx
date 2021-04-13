import React from 'react';
import {Route} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';

const App = () => {
    return (
        <div>
            <header>
                <h1>Bench Bnb</h1>
                <GreetingContainer />
            </header>

            <Route path="/login" component={LoginContainer}></Route>
            <Route path="/signup" component={SignupContainer}></Route>
        </div>
    )
}

export default App;