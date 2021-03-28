import React, {Dispatch} from 'react';
import s from './App.module.css';
import ButtonsFiltering from './ButtonsFiltering/ButtonsFiltering';
import Tasks from './Tasks/Tasks';
import TasksManagement from './TasksManagement/TasksManagement';
import {FilterValueType, TaskType} from "./App";
import {ActionsType, RemoveTodolistActionType} from "./reducer/reducer-todolists";

type PropsType = {
    todoListsID: string
    titleTodoList: string
    tasks: Array<TaskType>
    addTask: (title: string, todoListsID: string) => void
    changeStatusTask: (taskID: string, statusTask: boolean, todoListsID: string) => void
    filter: FilterValueType
    dispatch: Dispatch<ActionsType>
    changeTasksTitle: (idTask: string, newTitle: string, todoListsID: string) => void
}

const TodoList: React.FC<PropsType> = (
    {
        todoListsID,
        titleTodoList,
        tasks,
        addTask,
        changeStatusTask,
        filter,
        dispatch,
        changeTasksTitle,
    }
) => {

    return (
        <div className={s.todo}>
            <TasksManagement todoListsID={todoListsID}
                             titleTodoList={titleTodoList}
                             addTask={addTask}
                             dispatch={dispatch}
            />
            <Tasks todoListsID={todoListsID}
                   tasks={tasks}
                   dispatch={dispatch}
                   changeStatusTask={changeStatusTask}
                   changeTasksTitle={changeTasksTitle}
                   removeTask={}
            />
            <ButtonsFiltering todoListsID={todoListsID}
                              dispatch={dispatch}
                              filter={filter}
            />
        </div>
    );
}

export default TodoList;
