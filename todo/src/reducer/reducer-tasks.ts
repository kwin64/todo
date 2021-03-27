import {v1} from 'uuid';
import {FilterValueType, TasksStateType} from "../App";

type AddTaskActionType = {
    type: 'ADD-TASK'
    idTodoList: string
    title: string
}
type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    id: string
    idTodoList: string
}
type ChangeTasktStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    idTodoList: string
    statusTask: boolean
    id: string
}
type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    idTodoList: string
    title: string
    id: string
}

type ActionsType = AddTaskActionType
    | RemoveTaskActionType
    | ChangeTasktStatusActionType
    | ChangeTaskTitleActionType

export const useReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'ADD-TASK': {
            state[action.idTodoList] = [
                {id: v1(), title: action.title, isDone: false},
                ...state[action.idTodoList]
            ]
            return {...state}
        }
        case 'REMOVE-TASK': {
            state[action.idTodoList] = state[action.idTodoList].find(t => t.id !== action.id)
            return {...state}
        }
        case 'CHANGE-TASK-STATUS': {
            const task = state[action.idTodoList].find(t => t.id === action.id)
            if (task) {
                task.isDone = action.statusTask
            }
            return {...state}
        }
        case 'CHANGE-TASK-TITLE': {
            const task = state[action.idTodoList].find(t => t.id === action.id)
            if (task) {
                task.title = action.title
            }
            return {...state}
        }
        default:
            throw new Error("don't understand this type")
    }
}

export const addTaskAC = (title: string, idTodoList: string): AddTaskActionType => {
    return {type: 'ADD-TASK', idTodoList, title}
}
export const removeTodolistAC = (id: string, idTodoList: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', id, idTodoList}
}
export const changeTodolistStatusAC = (id: string, idTodoList: string, statusTask: boolean): ChangeTasktStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', id, idTodoList, statusTask}
}
export const changeTodolistTitleAC = (id: string, idTodoList: string, title: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', id, idTodoList, title}
}
