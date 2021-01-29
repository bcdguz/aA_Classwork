import React from 'react';

export const TodoListItem = (props) => { 
    // debugger
    return (
        <li key={props.todo.id}>
            Title: {props.todo.title}
        </li>)
}