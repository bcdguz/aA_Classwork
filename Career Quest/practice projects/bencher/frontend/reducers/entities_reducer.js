import { combineReducers } from "redux"
import benchReducer from "./bench_reducer";
import userReducer from "./user_reducer"

const entitiesReducer = combineReducers({
    users: userReducer,
    benches: benchReducer
})

export default entitiesReducer;