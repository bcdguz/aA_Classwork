

export const allTodos = (state) => { //state === { todos: {}, steps: {} }
    const selectTodos = Object.values(state.todos);
    return selectTodos;
}

export const stepsByTodoId = (state, todoId) => {
    const selectSteps = [];
    for (let id in state.steps) {
        // debugger
        if (state.steps[id].todo_id === todoId) {
            selectSteps.push(state.steps[id]);
        }
    }
    return selectSteps; //returns arr 
}