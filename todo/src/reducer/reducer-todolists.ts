import React from 'react';
import {v1} from 'uuid';
import {FilterValueType, TodolistType} from "../App";

type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
}
type RemoVetodolistActionType = {
    type: 'REMOVE-TODOLIST'
    todoListsID: string
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

type ActionsType = AddTodolistActionType
    | RemoVetodolistActionType
    | ChangeTodolistFilterActionType
    | ChangeTodolistTitleActionType

export const useReducer = (state: Array<TodolistType>, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case 'ADD-TODOLIST':
            return [...state, {id: v1(), title: action.title, filter: "all"}]
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.todoListsID)
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