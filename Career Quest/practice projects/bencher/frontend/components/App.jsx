import React from 'react';
import {Route} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

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
            
            <AuthRoute path="/login" component={LoginContainer}></AuthRoute>
            <AuthRoute path="/signup" component={SignupContainer}></AuthRoute>
        </div>
    )
}

export default App;