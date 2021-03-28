import React, {Dispatch} from 'react';
import './App.module.css';
import TodoList from "./Todolist";
import {TasksStateType, TodolistType} from "./App";
import s from "./App.module.css";
import {Box} from "@material-ui/core";
import {ActionsTodolistType} from "./reducer/reducer-todolists";
import {ActionsTaskType} from './reducer/reducer-tasks';

type PropsType = {
    todoListsComponents: Array<TodolistType>
    tasks: TasksStateType
    dispatchTodolist: Dispatch<ActionsTodolistType>
    dispatchTasks: Dispatch<ActionsTaskType>
}

const TodoLists: React.FC<PropsType> = (
    {
        todoListsComponents,
        tasks,
        dispatchTasks,
        dispatchTodolist
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
                              dispatchTodolist={dispatchTodolist}
                              dispatchTasks={dispatchTasks}
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
