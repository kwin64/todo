import React from 'react';
import './App.module.css';
import TodoList from "./Todolist";
import {FilterValueType, TasksStateType, TodolistType} from "./App";
import s from "./App.module.css";

type PropsType = {
    todoListsComponents: Array<TodolistType>,
    tasks: TasksStateType,
    addTask: (title: string, todoListsID: string) => void,
    removeTask: (id: string, todoListsID: string) => void,
    filteredTasks: (filterValue: FilterValueType, todoListsID: string) => void,
    changeStatusTask: (taskID: string, statusTask: boolean, todoListsID: string) => void,
}

const TodoLists: React.FC<PropsType> = (
    {
        todoListsComponents,
        tasks,
        addTask,
        removeTask,
        filteredTasks,
        changeStatusTask
    }
) => {

    const todoListsItem = todoListsComponents.map(tl => {
            return (
                <TodoList todoListsID={tl.id}
                          titleTodoList={tl.title}
                          tasks={tasks}
                          addTask={addTask}
                          removeTask={removeTask}
                          filteredTasks={filteredTasks}
                          changeStatusTask={changeStatusTask}/>
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
