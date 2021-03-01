import { $CombinedState } from "redux";

export const uniqueId = () => {
    return new Date().getTime();
}

export const fetchTodos = () => {
    return $.ajax({
        method: "GET",
        url: "/api/todos"
    })
}