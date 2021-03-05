import React from 'react';
import s from './App.module.css';
import ButtonsFiltering from './ButtonsFiltering/ButtonsFiltering';
import Tasks from './Tasks/Tasks';
import TasksManagement from './TasksManagement/TasksManagement';
import {FilterValueType, TasksStateType} from "./App";

type PropsType = {
    todoListsID: string,
    titleTodoList: string,
    tasks: TasksStateType,
    addTask: (title: string, todoListsID: string) => void,
    removeTask: (id: string, todoListsID: string) => void,
    filteredTasks: (filterValue: FilterValueType, todoListsID: string) => void,
    changeStatusTask: (taskID: string, statusTask: boolean, todoListsID: string) => void,
    removeTodoList: (todoListsID: string) => void
}

const TodoList: React.FC<PropsType> = (
    {
        todoListsID,
        titleTodoList,
        tasks,
        addTask,
        removeTask,
        filteredTasks,
        changeStatusTask,
        removeTodoList
    }
) => {

    return (
        <div className={s.todo}>
            <TasksManagement titleTodoList={titleTodoList}
                             addTask={addTask}
                             todoListsID={todoListsID}
                             removeTodoList={removeTodoList}/>
            <Tasks tasks={tasks}
                   todoListsID={todoListsID}
                   removeTask={removeTask}
                   changeStatusTask={changeStatusTask}/>
            <ButtonsFiltering filteredTasks={filteredTasks}
                              todoListsID={todoListsID}/>
        </div>
    );
}

export default TodoList;
