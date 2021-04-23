import { UPDATE_BOUNDS } from "../actions/filter_actions";

const filterReducer = (state = {bounds:{}}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type) {
        case UPDATE_BOUNDS:
            newState[action.filter] = action.value;
            return newState;
        default:
            return state;
    }
}

export default filterReducer;