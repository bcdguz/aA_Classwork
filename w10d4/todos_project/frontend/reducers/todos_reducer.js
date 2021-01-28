import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";

const todosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_TODOS: //check to see if we receive it as a string instead as the variable.
            nextState[action.todos.id] = action.todos; //Check if correct??
            return nextState;
        default:
            return oldState;
    }
}

export default todosReducer;