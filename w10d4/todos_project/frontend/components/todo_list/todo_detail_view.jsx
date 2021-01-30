import React from 'react'

export const TodoDetailView = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.removeTodo(props.todo.id)
    }

    return (
        <div>
            <ul>
                <li>{props.todo.body}</li>
                <li>{props.todo.done.toString()}</li>
                <button onClick={handleClick}>Delete</button>
            </ul>
        </div>
    )
}