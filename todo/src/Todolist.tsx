import React, {useState} from 'react';
import './Todolist.css';
import ButtonsFiltering from './ButtonsFiltering/ButtonsFiltering';
import Tasks from './Tasks/Tasks';
import TasksManagement from './TasksManagement/TasksManagement';
import {v1} from 'uuid';

export type TaskType = { id: string, title: string, isDone: boolean }
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

    const todo = tasks[firstTodo]
    return (
        <div>
            <TasksManagement title={todolists}/>
            <Tasks todo={todo}/>
            <ButtonsFiltering/>
        </div>
    );
}

export default TodoList;
