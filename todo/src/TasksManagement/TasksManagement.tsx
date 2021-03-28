import React from 'react';
import AddForm from "../AddForm";
import EditableTitle from "../EditableTitle";
import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

type PropsType = {
    titleTodoList: string
    addTask: (title: string, todoListsID: string) => void
    todoListsID: string
    removeTodoList: (todoListsID: string) => void
    changeTodoListTitle: (newTitle: string, todoListsID: string) => void
}

const TasksManagement: React.FC<PropsType> = (
    {
        titleTodoList,
        addTask,
        todoListsID,
        removeTodoList,
        changeTodoListTitle
    }
) => {

    const addTaskForm = (title: string) => {
        addTask(title, todoListsID)
    }
    const removeTodoListHandler = () => {
        dispatch({type:'REMOVE-TODOLIST'})
    }
    const changeTitle = (title: string) => {
        changeTodoListTitle(title, todoListsID)
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
            <AddForm addItemForm={addTaskForm}/>
        </div>
    );
}

export default TasksManagement;
