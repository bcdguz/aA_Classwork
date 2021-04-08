import * as APIUtil from '../util/session_api_util';

export const RECIEVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECIEVE_USER_ERROR = "RECIEVE_USER_ERROR";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = (user) => {
    return {
        type: RECIEVE_CURRENT_USER,
        user
    }
}

const recieveErrors = (errors) => {
    return {
        type: RECIEVE_USER_ERROR,
        errors
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}

export const signup = (user) => (dispatch) => {
    APIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(error => dispatch(recieveErrors(error.responseJSON)))
}

export const login = (user) => (dispatch) => {
    APIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(error => dispatch(recieveErrors(error.responseJSON)))
}

export const logout = () => (dispatch) => {
    APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
}