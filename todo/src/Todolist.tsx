import React, {Dispatch} from 'react';
import s from './App.module.css';
import ButtonsFiltering from './ButtonsFiltering/ButtonsFiltering';
import Tasks from './Tasks/Tasks';
import TasksManagement from './TasksManagement/TasksManagement';
import {FilterValueType, TaskType} from "./App";
import {ActionsTodolistType} from "./reducer/reducer-todolists";
import {ActionsTaskType} from "./reducer/reducer-tasks";

type PropsType = {
    todoListsID: string
    titleTodoList: string
    tasks: Array<TaskType>
    filter: FilterValueType
    dispatchTodolist: Dispatch<ActionsTodolistType>
    dispatchTasks: Dispatch<ActionsTaskType>
}

const TodoList: React.FC<PropsType> = (
    {
        todoListsID,
        titleTodoList,
        tasks,
        filter,
        dispatchTodolist,
        dispatchTasks
    }
) => {

    return (
        <div className={s.todo}>
            <TasksManagement todoListsID={todoListsID}
                             titleTodoList={titleTodoList}
                             dispatchTasks={dispatchTasks}
                             dispatchTodolist={dispatchTodolist}
            />
            <Tasks todoListsID={todoListsID}
                   tasks={tasks}
                   dispatchTasks={dispatchTasks}
            />
            <ButtonsFiltering todoListsID={todoListsID}
                              dispatchTodolist={dispatchTodolist}
                              filter={filter}
            />
        </div>
    );
}

export default TodoList;
