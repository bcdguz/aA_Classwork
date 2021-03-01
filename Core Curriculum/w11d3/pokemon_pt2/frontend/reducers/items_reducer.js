import { RECEIVE_POKEMON } from '../actions/pokemon_actions';


const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_POKEMON:
            return Object.assign(newState, action.payload.items);
        default:
            return state;
    }
}

export default itemsReducer;