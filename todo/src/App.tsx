import React, {useState} from 'react';
import {v1} from 'uuid';
import Todolists from './Todolists';

export type TaskType = { id: string, title: string, isDone: boolean }
export type TasksStateType = {
    [key: string]: Array<TaskType>
}
export type FilterValueType = 'all' | 'active' | 'completed'

export type TodolistType = { id: string, title: string, filter: FilterValueType }

function App() {

    const firstTodo = v1()
    const secondTodo = v1()

    const [todolists, setTodolists] = useState<Array<TodolistType>>([
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
    const removeTask = (id: string, todoListsID: string) => {
        tasks[todoListsID] = tasks[todoListsID].filter(tl => tl.id !== id)
        setTasks({...tasks})
    }
    const filteredTasks = (filterValue: FilterValueType, todoListsID: string) => {
        if (filterValue === 'active') {
            tasks[todoListsID] = tasks[todoListsID].filter(t => !t.isDone)
        }
        if (filterValue === 'completed') {
            tasks[todoListsID] = tasks[todoListsID].filter(t => t.isDone)
        }
        return setTasks({...tasks})
    }
    const changeStatusTask = (taskID: string, statusTask: boolean, todoListsID: string) => {
        const task = tasks[todoListsID].find(t => t.id === taskID)
        if (task) {
            task.isDone = statusTask
            setTasks({...tasks})
        }
    }
    const removeTodoList = (todoListsID: string) => {
        tasks[todoListsID] = tasks[todoListsID]
    }

    const todolistsItems = todolists.map(tl => {
        if (tl.filter === "active") {
            tasks[tl.id] = tasks[tl.id].filter(t => !t.isDone)
        }
        if (tl.filter === "completed") {
            tasks[tl.id] = tasks[tl.id].filter(t => t.isDone)
        }
    })

    return (
        <div>
            <Todolists todoListsComponents={todolists}
                       tasks={tasks}
                       addTask={addTask}
                       removeTask={removeTask}
                       filteredTasks={filteredTasks}
                       changeStatusTask={changeStatusTask}/>
        </div>
    );
}

export default App;
