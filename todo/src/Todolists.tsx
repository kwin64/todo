import React from 'react';
import './App.module.css';
import TodoList from "./Todolist";
import {TasksStateType, TodolistType} from "./App";
import s from "./App.module.css";

type PropsType = {
    todoListsComponents: Array<TodolistType>,
    tasks: TasksStateType
}

const TodoLists: React.FC<PropsType> = (
    {todoListsComponents,tasks}
) => {

    const todoListsItem = todoListsComponents.map(tl => {
            return (
                <TodoList todoListsID={tl.id}
                          titleTodoList={tl.title}
                          tasks={tasks}
                />
            )
        }
    )

    return (
        <div className={s.container}>
            {todoListsItem}
        </div>
    );
}

export default TodoLists;
