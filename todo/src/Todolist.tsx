import React from 'react';
import s from './App.module.css';
import ButtonsFiltering from './ButtonsFiltering/ButtonsFiltering';
import Tasks from './Tasks/Tasks';
import TasksManagement from './TasksManagement/TasksManagement';
import {FilterValueType, TaskType} from "./App";

type PropsType = {
    todoListsID: string,
    titleTodoList: string,
    tasks: Array<TaskType>,
    addTask: (title: string, todoListsID: string) => void,
    removeTask: (id: string, todoListsID: string) => void,
    changeTodoListFilter: (filterValue: FilterValueType, id: string) => void
    changeStatusTask: (taskID: string, statusTask: boolean, todoListsID: string) => void,
    removeTodoList: (todoListsID: string) => void,
    filter: FilterValueType
}

const TodoList: React.FC<PropsType> = (
    {
        todoListsID,
        titleTodoList,
        tasks,
        addTask,
        removeTask,
        changeTodoListFilter,
        changeStatusTask,
        removeTodoList,
        filter
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
                   changeStatusTask={changeStatusTask}
            />
            <ButtonsFiltering changeTodoListFilter={changeTodoListFilter} filter={filter} todoListsID={todoListsID}/>
        </div>
    );
}

export default TodoList;
