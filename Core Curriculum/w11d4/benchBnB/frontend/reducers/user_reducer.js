import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, newState, { [action.user.id]: action.user })
        default:
            return newState;    
    }
}

export default userReducer;