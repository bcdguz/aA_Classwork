import { UPDATE_BOUNDS } from "../actions/filter_actions";

const filterReducer = (state = {bounds:{}}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type) {
        case UPDATE_BOUNDS:
            newState[bounds] = action.bounds;
            return newState;
        default:
            return newState;
    }
}

export default filterReducer;