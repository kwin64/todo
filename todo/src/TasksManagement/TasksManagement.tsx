import React, {Dispatch} from 'react';
import AddForm from "../AddForm";
import EditableTitle from "../EditableTitle";
import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {ActionsType} from "../reducer/reducer-todolists";

type PropsType = {
    titleTodoList: string
    addTask: (title: string, todoListsID: string) => void
    todoListsID: string
    dispatch: Dispatch<ActionsType>
}

const TasksManagement: React.FC<PropsType> = (
    {
        titleTodoList,
        addTask,
        todoListsID,
        dispatch,
    }
) => {

    const addTaskForm = (title: string) => {
        addTask(title, todoListsID)
    }
    const removeTodoListHandler = () => {
        dispatch({type: 'REMOVE-TODOLIST', id:todoListsID})
    }
    const changeTitle = (title: string) => {
        dispatch({type: 'CHANGE-TODOLIST-TITLE', id: todoListsID, title})
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
