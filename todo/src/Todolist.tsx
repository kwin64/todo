import React from 'react';
import s from './App.module.css';
import ButtonsFiltering from './ButtonsFiltering/ButtonsFiltering';
import Tasks from './Tasks/Tasks';
import TasksManagement from './TasksManagement/TasksManagement';
import {FilterValueType, TaskType} from "./App";

type PropsType = {
    todoListsID: string
    titleTodoList: string
    tasks: Array<TaskType>
    addTask: (title: string, todoListsID: string) => void
    removeTask: (id: string, todoListsID: string) => void
    changeTodoListFilter: (filterValue: FilterValueType, id: string) => void
    changeStatusTask: (taskID: string, statusTask: boolean, todoListsID: string) => void
    removeTodoList: (todoListsID: string) => void
    filter: FilterValueType
    changeTodoListTitle:  (newTitle: string, todoListsID: string) => void
    changeTasksTitle:  (idTask: string, newTitle: string, todoListsID: string) => void

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
        filter,
        changeTodoListTitle,
        changeTasksTitle
    }
) => {

    return (
        <div className={s.todo}>
            <TasksManagement todoListsID={todoListsID}
                             titleTodoList={titleTodoList}
                             addTask={addTask}
                             removeTodoList={removeTodoList}
                             changeTodoListTitle={changeTodoListTitle}
            />
            <Tasks todoListsID={todoListsID}
                   tasks={tasks}
                   removeTask={removeTask}
                   changeStatusTask={changeStatusTask}
                   changeTasksTitle={changeTasksTitle}
            />
            <ButtonsFiltering todoListsID={todoListsID}
                              changeTodoListFilter={changeTodoListFilter}
                              filter={filter}
            />
        </div>
    );
}

export default TodoList;
