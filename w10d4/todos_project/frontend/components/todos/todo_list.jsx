import React from 'react';
import { TodoListItem } from '../todo_list/todo_list_item';

export const TodoList = (props) => {
    return (
        <div>
            <h1>All Todos</h1>
            <ul>
                {props.allTodos.map((todo) => {
                    return (
                        <TodoListItem todo={todo}/>
                    )
                })
            }
            </ul>
        </div>
    )
}