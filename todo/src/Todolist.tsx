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

        let {
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

        //без понятия зачем дважды
        let allTodolistTasks = stateTask;//??????
        let tasksForTodolist = allTodolistTasks;//??????

        //фильтр тасок
        if (props.filter === "active") {
            tasksForTodolist = allTodolistTasks.filter(t => !t.isDone);
        }
        if (props.filter === "completed") {
            tasksForTodolist = allTodolistTasks.filter(t => t.isDone);
        }

        //let const destruct????
        //
        addTask = (title: string) => {
            addTask(todoListID, title)
        }
        removeTodolist = () => {
            props.removeTodolist(todoListID);
        }
        changeTitleTodoList = (title: string) => {
            changeTitleTodoList(todoListID, title);
        }

        //handlers
        const onClickHandlerRemoveTask = (taskID: string) => {
            removeTask(taskID, todoListID)
        }
        const onClickHandlerChangeTaskStatus = (taskID: string, statusTask: boolean) => {
            changeStatusTask(taskID, todoListID, statusTask);
        }
        const onClickHandlerChangeTitleTask = (taskID: string, title: string) => {
            changeTitleTask(taskID, todoListID, title)
        }

        //filter
        const onClickButtonAllHandler = () => changeTodolistFilter(todoListID, "all")
        const onClickButtonActiveHandler = () => changeTodolistFilter(todoListID, "active")
        const onClickButtonCompletedHandler = () => changeTodolistFilter(todoListID, "completed")


        const tasks = tasksForTodolist.map(t => {
            //почему здесь а не в Таскс??// уже не помню что имел ввиду
            return <Tasks key={todoListID}//какой тут айди будет task.id || todolistID??
                          task={t}
                          removeTask={onClickHandlerRemoveTask}
                          changeStatusTask={onClickHandlerChangeTaskStatus}
                          changeTitleTask={onClickHandlerChangeTitleTask}
            />
        })

        return (
            <div className={s.todo}>
                <TasksManagement titleTodoList={titleTodoList}
                                 removeTodolist={removeTodolist} //(id: string) => void' is not assignable to type '() => void'. где там айди?!
                                 changeTitleTodoList={changeTitleTodoList}
                                 addTask={addTask}
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
