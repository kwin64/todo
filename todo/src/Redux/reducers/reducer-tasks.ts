import {v1} from 'uuid';
import {TasksStateType, TaskType} from "../../App";
import {AddTodolistActionType, RemoveTodolistActionType} from './reducer-todolists';

type AddTaskActionType = {
    type: 'ADD-TASK'
    todoListsID: string
    title: string
}
type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    id: string
    todoListsID: string
}
type ChangeTasktStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    todoListsID: string
    statusTask: boolean
    id: string
}
type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    todoListsID: string
    title: string
    id: string
}

export type ActionsTaskType = AddTaskActionType
    | RemoveTaskActionType
    | ChangeTasktStatusActionType
    | ChangeTaskTitleActionType
    | AddTodolistActionType
    | RemoveTodolistActionType

const initialState: TasksStateType = {}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsTaskType): TasksStateType => {
    switch (action.type) {
        case 'ADD-TASK': {
            const stateCopy = {...state}
            const newTask: TaskType = {
                id: v1(),
                title: action.title,
                isDone: false
            }
            const tasks = stateCopy[action.todoListsID]
            const newTasks = [newTask, ...tasks]
            stateCopy[action.todoListsID] = newTasks
            return stateCopy
        }
        case 'REMOVE-TASK': {
            // const stateCopy = {...state}
            // const tasks = stateCopy[action.todoListsID]
            // const newTasks = tasks.filter(t => t.id !== action.id)
            // stateCopy[action.todoListsID] = newTasks
            state[action.todoListsID] = state[action.todoListsID].filter(t => t.id !== action.id)
            return {...state}
        }
        case 'CHANGE-TASK-STATUS': {
            const task = state[action.todoListsID].find(t => t.id === action.id)
            if (task) {
                task.isDone = action.statusTask
            }
            return {...state}
        }
        case 'CHANGE-TASK-TITLE': {
            const task = state[action.todoListsID].find(t => t.id === action.id)
            if (task) {
                task.title = action.title
            }
            return {...state}
        }
        case 'ADD-TODOLIST': {
            const stateCope = {...state}
            stateCope[action.todoListsID] = []
            return stateCope
        }
        case 'REMOVE-TODOLIST': {
            const stateCopy = {...state}
            delete stateCopy[action.id]
            return stateCopy
        }
        default:
            return state
    }
}

export const addTaskAC = (title: string, todoListsID: string): AddTaskActionType => {
    return {type: 'ADD-TASK', todoListsID, title}
}
export const removeTasktAC = (id: string, todoListsID: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', id, todoListsID}
}
export const changeTaskStatusAC = (id: string, todoListsID: string, statusTask: boolean): ChangeTasktStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', id, todoListsID, statusTask}
}
export const changeTaskTitleAC = (id: string, todoListsID: string, title: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', id, todoListsID, title}
}
