import { Route } from "react-router-dom";
import React from 'react';
import PokemonIndexContainer from "./pokemon/pokemon_index_container"

export const App = () => (
    <Route path="/" component={PokemonIndexContainer} />
) 