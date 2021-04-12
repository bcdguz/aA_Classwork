import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_container';
import {Route} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <header>
                <h1>Bench Bnb</h1>
                <GreetingContainer />
            </header>

            <Route path="/login" component={LoginContainer}></Route>
        </div>
    )
}

export default App;