import {combineReducers} from 'redux';
import itemsReducer from './items_reducer';
import pokemonReducer from './pokemon_reducer';
import movesReducer from './show_reducer';
import uiReducer from './ui_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemsReducer,
  moves: movesReducer,
  ui: uiReducer
})

export default entitiesReducer;