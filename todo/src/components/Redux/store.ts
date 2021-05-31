import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./reducers/reducer-tasks";
import {todolistReducer} from "./reducers/reducer-todolists";

export const rootReducer = combineReducers({
    tasksReducer,
    todolistReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>


