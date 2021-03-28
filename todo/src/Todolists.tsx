import React, {Dispatch} from 'react';
import './App.module.css';
import TodoList from "./Todolist";
import {FilterValueType, TasksStateType, TodolistType} from "./App";
import s from "./App.module.css";
import {Box} from "@material-ui/core";
import {ActionsType, ACTypes, AddTodolistActionType} from "./reducer/reducer-todolists";

type PropsType = {
    todoListsComponents: Array<TodolistType>
    tasks: TasksStateType
    addTask: (title: string, todoListsID: string) => void
    removeTask: (id: string, todoListsID: string) => void
    changeStatusTask: (taskID: string, statusTask: boolean, todoListsID: string) => void
    changeTasksTitle: (idTask: string, newTitle: string, todoListsID: string) => void
    dispatch: Dispatch<ActionsType>
}

const TodoLists: React.FC<PropsType> = (
    {
        todoListsComponents,
        tasks,
        addTask,
        changeStatusTask,
        changeTasksTitle,
        dispatch
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
                <Box boxShadow={2} fontStyle={'oblique'} fontFamily={'Monospace'}>
                    <TodoList todoListsID={tl.id}
                              titleTodoList={tl.title}
                              filter={tl.filter}
                              tasks={tasksForTodoLists}
                              addTask={addTask}
                              dispatch={dispatch}
                              changeStatusTask={changeStatusTask}
                              changeTasksTitle={changeTasksTitle}
                    />
                </Box>
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
