import { bindActionCreators } from "redux";
import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

const todosReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_TODOS: //check to see if we receive it as a string instead as the variable.
            let newTodos = {};
            for (let i = 0; i < action.todos.length; i++) {
                newTodos[action.todos[i].id] = action.todos[i];
            }
            return newTodos; //Check if correct??
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState;
        case REMOVE_TODO:
            delete nextState[action.id];
            return nextState
        default:
            return oldState;
    }
}

export default todosReducer;