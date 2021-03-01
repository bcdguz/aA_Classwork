import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon } from './actions/pokemon_actions';
import * as API_UTILS from './util/api_util'


document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);
    window.fetchAllPokemon = API_UTILS.fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
});