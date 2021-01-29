import React from 'react';

export const TodoListItem = (props) => { 
    // debugger
    const handleClick = (e) => {
        e.preventDefault();
        props.removeTodo(props.todo.id)
    }

    const handleDone = (e) => {
        e.preventDefault(); //{ title: props.todo.title, }
        let bool = true;
        if(props.todo.done) {
            bool = false;
        }
        const flipTodo = {      //recieveTodo needs a whole todo obj;
            title: props.todo.title,
            body: props.todo.body,
            id: props.todo.id,
            done: bool
        }
        props.recieveTodo(flipTodo);
    }

    return (
        <>
            <li>
                Title: {props.todo.title}
            </li>
            <button onClick={handleClick}>Delete</button>
            <button onClick={handleDone}>Done</button>
        </>
        )
}