import React from 'react';
import s from './App.module.css';
import ButtonsFiltering from './ButtonsFiltering/ButtonsFiltering';
import Tasks from './Tasks/Tasks';
import TasksManagement from './TasksManagement/TasksManagement';
import {FilterValueType, TaskType} from "./App";

export type PropsType = {
    todoListID: string
    titleTodoList: string
    filter: FilterValueType
    stateTask: Array<TaskType>
    removeTodolist: (id: string) => void
    changeTitleTodoList: (id: string, newTitle: string) => void
    changeTodolistFilter: (todoListsID: string, filter: FilterValueType) => void
    addTask: (id: string, title: string) => void
    removeTask: (id: string, todolistID: string) => void
    changeTitleTask: (id: string, todolistID: string, title: string) => void
    changeStatusTask: (id: string, todolistID: string, statusTask: boolean) => void
}

const TodoList: React.FC<PropsType> = React.memo(props => {

        const {
            todoListID,
            titleTodoList,
            stateTask,
            filter,
            removeTodolist,
            changeTitleTodoList,
            changeTodolistFilter,
            addTask,
            removeTask,
            changeTitleTask,
            changeStatusTask,
        } = props;

        //new obj tasks
        let tasksForTodolist = stateTask;

        //фильтр тасок
        if (props.filter === "active") {
            tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
        }
        if (props.filter === "completed") {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone);
        }

        //fn container?!
        const addTaskForTasks = (title: string) => {
            addTask(todoListID, title)
        }
        const removeTodoListForTasks = () => {
            removeTodolist(todoListID);
        }
        const changeTitleForTasks = (title: string) => {
            changeTitleTodoList(todoListID, title);
        }

        const tasks = tasksForTodolist.map(t => {
            return <Tasks key={t.id}
                          task={t}
                          removeTask={removeTask}
                          changeStatusTask={changeStatusTask}
                          changeTitleTask={changeTitleTask}
                          todoListID={todoListID}
            />
        })

        return (
            <div className={s.todo}>
                <TasksManagement titleTodoList={titleTodoList}
                                 removeTodolist={removeTodoListForTasks}
                                 changeTitleTodoList={changeTitleForTasks}
                                 addTask={addTaskForTasks}
                />
                {tasks}
                <ButtonsFiltering filter={filter}
                                  changeTodolistFilter={changeTodolistFilter}
                                  todoListID={todoListID}
                />
            </div>
        );
    }
)

export default TodoList;
