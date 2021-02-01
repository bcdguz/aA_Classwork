import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import App from './frontend/components/app';
import Root from './frontend/components/root';
import { stepsByTodoId } from './frontend/reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
    // console.log('In entry');
    const root = document.querySelector("#root");
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, root)
    window.store = store;
    window.stepsByTodoId = stepsByTodoId;
})

import { allTodos } from './frontend/reducers/selectors'
window.allTodos = allTodos;