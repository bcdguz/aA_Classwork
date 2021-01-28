import { RECIEVE_TODOS, RECIEVE_TODO } from "../actions/todo_actions";

const todosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type) {
        case "RECIEVE_TODOS":
            nextState[action.todos.id] = action.todos; //Check if correct??
            return nextState;
        default:
            return oldState;
    }
}