

export const allTodos = (state) => { //state === { todos: {}, steps: {} }
    const selectTodos = Object.values(state.todos);
    return selectTodos;
}
