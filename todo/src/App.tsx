import React, {useState} from 'react';
import {v1} from 'uuid';
import Todolists from './Todolists';
import AddForm from "./AddForm";
import {Button} from "@material-ui/core";

export type TaskType = { id: string, title: string, isDone: boolean }
export type TasksStateType = {
    [key: string]: Array<TaskType>
}
export type FilterValueType = 'all' | 'active' | 'completed'

export type TodolistType = { id: string, title: string, filter: FilterValueType }

function App() {

    const firstTodo = v1()
    const secondTodo = v1()

    const [todoLists, setTodolists] = useState<Array<TodolistType>>([
        {id: firstTodo, title: 'First todo', filter: 'all'},
        {id: secondTodo, title: 'Second todo', filter: 'all'}
    ])
    const [tasks, setTasks] = useState<TasksStateType>({
        [firstTodo]: [
            {id: v1(), title: 'Buy car', isDone: false},
            {id: v1(), title: 'Buy pen', isDone: true},
            {id: v1(), title: 'Buy home', isDone: false},
        ],
        [secondTodo]: [
            {id: v1(), title: 'Sleep', isDone: true},
            {id: v1(), title: 'Eat', isDone: true},
            {id: v1(), title: 'Work', isDone: true},
        ]
    })

    const addTask = (title: string, todoListsID: string) => {
        const newTask: TaskType = {id: v1(), title: title, isDone: false}
        tasks[todoListsID] = [newTask, ...tasks[todoListsID]]
        setTasks({...tasks})
    }
    const addTodoList = (title: string) => {
        const idTodoList = v1()
        const todo: TodolistType = {id: idTodoList, title, filter: 'all'}
        setTodolists([...todoLists, todo])
        setTasks({...tasks, [idTodoList]: []})
    }
    const removeTask = (id: string, todoListsID: string) => {
        tasks[todoListsID] = tasks[todoListsID].filter(tl => tl.id !== id)
        setTasks({...tasks})
    }
    const removeTodoList = (todoListsID: string) => {
        setTodolists(todoLists.filter(tl => tl.id !== todoListsID))
        delete tasks[todoListsID]
    }
    const changeStatusTask = (taskID: string, statusTask: boolean, todoListsID: string) => {
        const task = tasks[todoListsID].find(t => t.id === taskID)
        if (task) {
            task.isDone = statusTask
            setTasks({...tasks})
        }
    }
    const changeTodoListFilter = (newFilterValue: FilterValueType, todoListsID: string) => {
        let todoList = todoLists.find(tl => tl.id === todoListsID)
        if (todoList) {
            todoList.filter = newFilterValue
            setTodolists([...todoLists])
        }
    }
    const changeTodoListTitle = (newTitle: string, todoListsID: string) => {
        let todoList = todoLists.find(tl => tl.id === todoListsID)
        if (todoList) {
            todoList.title = newTitle
            setTodolists([...todoLists])
        }
    }
    const changeTasksTitle = (taskID: string, newTitle: string, todoListsID: string) => {
        let task = tasks[todoListsID].find(tl => tl.id === taskID)
        if (task) {
            task.title = newTitle
            setTasks({...tasks})
        }
    }


    return (
        <div>
            <AddForm addItemForm={addTodoList}/>

            <Todolists todoListsComponents={todoLists}
                       tasks={tasks}
                       addTask={addTask}
                       removeTask={removeTask}
                       changeTodoListFilter={changeTodoListFilter}
                       changeStatusTask={changeStatusTask}
                       removeTodoList={removeTodoList}
                       changeTodoListTitle={changeTodoListTitle}
                       changeTasksTitle={changeTasksTitle}
            />
        </div>
    );
}

export default App;
