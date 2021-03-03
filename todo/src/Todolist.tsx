import React from 'react';
import s from './App.module.css';
import ButtonsFiltering from './ButtonsFiltering/ButtonsFiltering';
import Tasks from './Tasks/Tasks';
import TasksManagement from './TasksManagement/TasksManagement';
import {TasksStateType} from "./App";

type PropsType = {
    todoListsID: string,
    titleTodoList: string,
    tasks: TasksStateType,
    addTask: (title: string, todoListsID: string) => void,
    removeTask: (id: string, todoListsID: string) => void
}

const TodoList: React.FC<PropsType> = (
    {todoListsID, titleTodoList, tasks,addTask, removeTask}
) => {

    return (
        <div className={s.todo}>
            <TasksManagement titleTodoList={titleTodoList}
                             addTask={addTask}
                             todoListsID={todoListsID}/>
            <Tasks tasks={tasks}
                   todoListsID={todoListsID}
                   removeTask={removeTask}/>
            <ButtonsFiltering/>
        </div>
    );
}

export default TodoList;
