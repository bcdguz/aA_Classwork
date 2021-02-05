import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

const sessionErrorReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ERRORS:
            return state.concat(action.errors);
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default sessionErrorReducer;