import React from 'react';
import s from './App.module.css';
import ButtonsFiltering from './ButtonsFiltering/ButtonsFiltering';
import Tasks from './Tasks/Tasks';
import TasksManagement from './TasksManagement/TasksManagement';
import {TasksStateType} from "./App";

type PropsType = {
    todoListsID: string,
    titleTodoList: string,
    tasks: TasksStateType
}

const TodoList: React.FC<PropsType> = (
    {todoListsID, titleTodoList, tasks}
) => {

    return (
        <div className={s.todo}>
            <TasksManagement titleTodoList={titleTodoList}/>
            <Tasks tasks={tasks}
                   todoListsID={todoListsID}/>
            <ButtonsFiltering/>
        </div>
    );
}

export default TodoList;
