import React from 'react';

export const TodoListItem = (props) => { 
    // debugger
    return (
        <li>
            Title: {props.todo.title}
        </li>)
}