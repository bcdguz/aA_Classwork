import { RECIEVE_CURRENT_USER, RECIEVE_USER_ERROR } from "../actions/session_actions";

export const sessionErrorsReducer = (action, state = []) => {
    switch(action.type) {
        case RECIEVE_USER_ERROR:
            return action.errors;
        case RECIEVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;