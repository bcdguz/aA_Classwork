import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';
import Root from './components/root';
import { stepsByTodoId } from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
    // console.log('In entry');
    const root = document.querySelector("#root");
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, root)
    window.store = store;
    window.stepsByTodoId = stepsByTodoId;
})

import { allTodos } from './reducers/selectors'
window.allTodos = allTodos;