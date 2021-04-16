import { RECEIVE_BENCHES } from "../actions/bench_actions";

const benchReducer = (state = {}, action) => {
    Object.freeze(state);
    // const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_BENCHES:
            return action.benches;
        default:
            return state;
    }
}

export default benchReducer;