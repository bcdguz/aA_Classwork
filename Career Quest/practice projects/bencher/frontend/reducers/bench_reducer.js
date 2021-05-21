import { RECEIVE_BENCH, RECEIVE_BENCHES } from "../actions/bench_actions";

const benchReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_BENCHES:
            return action.benches;
        case RECEIVE_BENCH:
            newState[action.bench.id] = action.bench;
            return newState;
        default:
            return state;
    }
}

export default benchReducer;