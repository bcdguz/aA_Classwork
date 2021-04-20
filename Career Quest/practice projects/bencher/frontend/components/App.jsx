import React from 'react';
import {Route} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SearchContainer from './search/search_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';

const App = () => {
    return (
        <div>
            <header>
                <h1>Bench Bnb</h1>
                <GreetingContainer />
            </header>
            
            <AuthRoute exact path="/login" component={LoginContainer}></AuthRoute>
            <AuthRoute exact path="/signup" component={SignupContainer}></AuthRoute>
            <Route exact path="/" component={SearchContainer}></Route>
        </div>
    )
}

export default App;