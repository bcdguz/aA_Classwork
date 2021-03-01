import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form'

export const TodoList = (props) => {
    return (
        <div>
            <h1>All Todos</h1>
            <ul>
                {props.allTodos.map((todo) => {
                    return (
                        <TodoListItem key={todo.id} todo={todo}
                         receiveTodo={props.receiveTodo} removeTodo={props.removeTodo}/> //passing correctly?
                    )
                })
            }
            </ul>
            <TodoForm receiveTodo={props.receiveTodo}/>
        </div>
    )
}