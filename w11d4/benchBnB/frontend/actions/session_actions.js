import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// Regular action creatiors

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

//thunk action creators

export const login = (user) => (dispatch) => {
    return APIUtil.login(user)
        .then(res => {
            return dispatch(receiveCurrentUser(res))
        })
        .fail(errors => {
            return dispatch(receiveErrors(errors.responseJSON))
        })
}

export const signup = (user) => (dispatch) => {
    return APIUtil.signup(user)
        .then(res => {
            return dispatch(receiveCurrentUser(res))
        })
        .fail(errors => {
            return dispatch(receiveErrors(errors.responseJSON))
        })
}

export const logout = () => (dispatch) => {
    return APIUtil.logout()
        .then(() => {
            return dispatch(logoutCurrentUser())
        })
        .fail(errors => {
            return dispatch(receiveErrors(errors.responseJSON))
        })
}