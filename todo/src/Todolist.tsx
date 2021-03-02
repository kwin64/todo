import React, {useState} from 'react';
import './Todolist.css';
import ButtonsFiltering from './ButtonsFiltering/ButtonsFiltering';
import Tasks from './Tasks/Tasks';
import TasksManagement from './TasksManagement/TasksManagement';
import {v1} from 'uuid';

export type TaskType = { id: string, title: string, filter: boolean }
export type TasksStateType = {
    [key: string]: Array<TaskType>
}
export type TodolistType = { id: string, title: string, filter: 'all' | 'active' | 'completed' }
export type TodolistsType = Array<TodolistType>


function TodoList() {

    const firstTodo = v1()
    const secondTodo = v1()

    const [todolists, setTodolists] = useState<TodolistsType>([
        {id: firstTodo, title: 'First todo', filter: 'all'},
        {id: secondTodo, title: 'Second todo', filter: 'all'}
    ])

    const [tasks, setTasks] = useState<TasksStateType>({
        [firstTodo]: [
            {id: v1(), title: 'Buy car', filter: false},
            {id: v1(), title: 'Buy pen', filter: true},
            {id: v1(), title: 'Buy home', filter: false},
        ],
        [secondTodo]: [
            {id: v1(), title: 'Sleep', filter: true},
            {id: v1(), title: 'Eat', filter: true},
            {id: v1(), title: 'Work', filter: true},
        ]
    })

    return (
        <div>
            <TasksManagement/>
            <Tasks tasks={tasks}/>
            <ButtonsFiltering/>
        </div>
    );
}

export default TodoList;
