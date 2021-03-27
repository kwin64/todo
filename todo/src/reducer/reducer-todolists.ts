import React from 'react';
import {v1} from 'uuid';
import {TodolistType} from "../App";

type AddTodolistACType = {
    type: 'ADD-TODOLIST'
    title: string
}
type RemoVetodolistACType = {
    type: 'REMOVE-TODOLIST'
    todoListsID: string
}

type ActionsType = AddTodolistACType | RemoVetodolistACType

export const useReducer = (state: Array<TodolistType>, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-TODOLIST':
            const idTodoList = v1()
            const todo: TodolistType = {id: idTodoList, title: action.title, filter: "all"}
            const copyState = [...state, todo]
            return copyState
        case 'REMOVE-TODOLIST':
            
        default:
            throw new Error("don't understand this type")
    }
}