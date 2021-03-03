import React, {useState} from 'react';
import {v1} from 'uuid';
import Todolists from './Todolists';

export type TaskType = { id: string, title: string, isDone: boolean }
export type TasksStateType = {
    [key: string]: Array<TaskType>
}
export type TodolistType = { id: string, title: string, filter: 'all' | 'active' | 'completed' }
export type TodolistsType = Array<TodolistType>

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

    return (
        <div>
            <Todolists todoListsComponents={todolists}
                       tasks={tasks}/>
        </div>
    );
}

export default App;
