import {Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import React from 'react';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps,null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps,null)(Protected));