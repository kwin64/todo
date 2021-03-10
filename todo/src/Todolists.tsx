import React from 'react';
import './App.module.css';
import TodoList from "./Todolist";
import {FilterValueType, TasksStateType, TodolistType} from "./App";
import s from "./App.module.css";

type PropsType = {
    todoListsComponents: Array<TodolistType>
    tasks: TasksStateType
    addTask: (title: string, todoListsID: string) => void
    removeTask: (id: string, todoListsID: string) => void
    changeStatusTask: (taskID: string, statusTask: boolean, todoListsID: string) => void
    removeTodoList: (todoListsID: string) => void
    changeTodoListFilter: (filterValue: FilterValueType, id: string) => void
    changeTodoListTitle:  (newTitle: string, todoListsID: string) => void
    changeTasksTitle:  (idTask: string, newTitle: string, todoListsID: string) => void
}

const TodoLists: React.FC<PropsType> = (
    {
        todoListsComponents,
        tasks,
        addTask,
        removeTask,
        changeTodoListFilter,
        changeStatusTask,
        removeTodoList,
        changeTodoListTitle,
        changeTasksTitle
    }
) => {

    const todoListsItem = todoListsComponents.map(tl => {
            let tasksForTodoLists = tasks[tl.id]
            if (tl.filter === 'active') {
                tasksForTodoLists = tasksForTodoLists.filter(t => !t.isDone)
            }
            if (tl.filter === 'completed') {
                tasksForTodoLists = tasksForTodoLists.filter(t => t.isDone)
            }

            return (
                <TodoList todoListsID={tl.id}
                          titleTodoList={tl.title}
                          filter={tl.filter}
                          tasks={tasksForTodoLists}
                          addTask={addTask}
                          removeTask={removeTask}
                          changeTodoListFilter={changeTodoListFilter}
                          changeStatusTask={changeStatusTask}
                          removeTodoList={removeTodoList}
                          changeTodoListTitle={changeTodoListTitle}
                          changeTasksTitle={changeTasksTitle}
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
