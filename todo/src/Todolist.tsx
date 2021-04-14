import React, {Dispatch} from 'react';
import s from './App.module.css';
import ButtonsFiltering from './ButtonsFiltering/ButtonsFiltering';
import Tasks from './Tasks/Tasks';
import TasksManagement from './TasksManagement/TasksManagement';
import {FilterValueType, TaskType} from "./App";
import {ActionsTaskType} from "./Redux/reducers/reducer-tasks";

export type PropsType = {
    todoListsID: string
    titleTodoList: string
    tasks: Array<TaskType>
    filter: FilterValueType
    dispatchTasks: Dispatch<ActionsTaskType>
    addTask: (title: string) => void
    removeTodoListHandler: () => void
    changeTitleTodoList: (newTitle: string) => void
    onClickButtonAllHandler: () => void
    onClickButtonActiveHandler: () => void
    onClickButtonCompletedHandler: () => void
}

const TodoList: React.FC<PropsType> = React.memo((
    {
        todoListsID,
        titleTodoList,
        tasks,
        filter,
        dispatchTasks,
        addTask,
        removeTodoListHandler,
        changeTitleTodoList,
        onClickButtonAllHandler,
        onClickButtonActiveHandler,
        onClickButtonCompletedHandler
    }
    ) => {

        return (
            <div className={s.todo}>
                <TasksManagement titleTodoList={titleTodoList}
                                 addTask={addTask}
                                 removeTodoListHandler={removeTodoListHandler}
                                 changeTitleTodoList={changeTitleTodoList}
                />
                <Tasks todoListsID={todoListsID}
                       tasks={tasks}
                       dispatchTasks={dispatchTasks}
                />
                <ButtonsFiltering filter={filter}
                                  onClickButtonAllHandler={onClickButtonAllHandler}
                                  onClickButtonActiveHandler={onClickButtonActiveHandler}
                                  onClickButtonCompletedHandler={onClickButtonCompletedHandler}
                />
            </div>
        );
    }
)

export default TodoList;
