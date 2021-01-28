export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODOS = "DELETE_TODOS";

export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos: todos,
    }
}

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo,
    }
}

window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;