import {v1} from 'uuid';
import {FilterValueType, TodolistType} from "../../App";

export type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
    todoListsID: string
}
export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}
type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    filter: FilterValueType
    todolistID: string
}
type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    title: string
    id: string
}

export type ActionsTodolistType = AddTodolistActionType
    | RemoveTodolistActionType
    | ChangeTodolistFilterActionType
    | ChangeTodolistTitleActionType

const initialState: Array<TodolistType> = []

export const todolistReducer = (state: Array<TodolistType> = initialState, action: ActionsTodolistType): Array<TodolistType> => {
    switch (action.type) {
        case 'ADD-TODOLIST':
            return [...state, {id: action.todoListsID, title: action.title, filter: "all"}]
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        case 'CHANGE-TODOLIST-FILTER':
            const todoList = state.find(tl => tl.id === action.todolistID)
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
            return state
    }
}

export const addTodolistAC = (title: string): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', title, todoListsID: v1()}
}
export const removeTodolistAC = (id: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id}
}
export const changeTodolistFilterAC = (todolistID: string, filter: FilterValueType): ChangeTodolistFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', todolistID, filter}
}
export const changeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', id, title}
}