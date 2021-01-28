import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
    console.log('In entry');
    const root = document.querySelector("#root");
    ReactDOM.render(<h1>Root</h1>, root)
})