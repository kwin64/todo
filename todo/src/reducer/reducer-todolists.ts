import {v1} from 'uuid';
import {FilterValueType, TodolistType} from "../App";

export type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
    idTodolist: string
}
export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}
type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    filter: FilterValueType
    id: string
}
type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    title: string
    id: string
}

export type ActionsType = AddTodolistActionType
    | RemoveTodolistActionType
    | ChangeTodolistFilterActionType
    | ChangeTodolistTitleActionType

export const todolistReducer = (state: Array<TodolistType>, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case 'ADD-TODOLIST':
            return [...state, {id: action.idTodolist, title: action.title, filter: "all"}]
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        case 'CHANGE-TODOLIST-FILTER':
            const todoList = state.find(tl => tl.id === action.id)
            if (todoList) {
                todoList.filter = action.filter
            }
            return [...state]
        case 'CHANGE-TODOLIST-TITLE': {
            const todoList = state.find(tl => tl.id === action.id)
            if (todoList) {
                todoList.title = action.title
            }
            return [...state]
        }
        default:
            throw new Error("don't understand this type")
    }
}

export const addTodolistAC = (title: string): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', title, idTodolist: v1()}
}
export const removeTodolistAC = (id: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id}
}
export const changeTodolistFilterAC = (id: string, filter: FilterValueType): ChangeTodolistFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', id, filter}
}
export const changeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', id, title}
}