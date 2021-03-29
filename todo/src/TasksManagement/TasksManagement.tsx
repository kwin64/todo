import React, {Dispatch} from 'react';
import AddForm from "../AddForm";
import EditableTitle from "../EditableTitle";
import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {ActionsTodolistType} from "../reducer/reducer-todolists";
import {ActionsTaskType, addTaskAC} from "../reducer/reducer-tasks";

type PropsType = {
    titleTodoList: string
    todoListsID: string
    dispatchTasks: Dispatch<ActionsTaskType>
    dispatchTodolist: Dispatch<ActionsTodolistType>
}

const TasksManagement: React.FC<PropsType> = (
    {
        titleTodoList,
        dispatchTasks,
        todoListsID,
        dispatchTodolist,
    }
) => {

    const addTask = (title: string) => {
        dispatchTasks(addTaskAC(title, todoListsID))
    }
    const removeTodoListHandler = () => {
        dispatchTodolist()
        dispatchTasks()
    }
    const changeTitle = (title: string) => {
        dispatchTodolist({type: 'CHANGE-TODOLIST-TITLE', id: todoListsID, title})
    }

    return (
        <div>
            <h3>
                <EditableTitle title={titleTodoList} changeTitle={changeTitle}/>
                <IconButton aria-label="delete">
                    <DeleteIcon
                        onClick={removeTodoListHandler}/>
                </IconButton>
            </h3>
            <AddForm addItem={addTask}/>
        </div>
    );
}

export default TasksManagement;
