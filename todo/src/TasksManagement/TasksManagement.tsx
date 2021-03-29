import React, {Dispatch} from 'react';
import AddForm from "../AddForm";
import EditableTitle from "../EditableTitle";
import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {ActionsTodolistType} from "../reducer/reducer-todolists";
import {ActionsTaskType} from "../reducer/reducer-tasks";

type PropsType = {
    titleTodoList: string
    todoListsID: string
    dispatchTasks: Dispatch<ActionsTaskType>
    dispatchTodolist: Dispatch<ActionsTodolistType>
    addTask: (newTitle: string) => void
    removeTodoListHandler: () => void
    changeTitleTodoList: (title: string)=> void

}

const TasksManagement: React.FC<PropsType> = (
    {
        titleTodoList,
        addTask,
        removeTodoListHandler,
        changeTitleTodoList
    }
) => {

    return (
        <div>
            <h3>
                <EditableTitle title={titleTodoList} changeTitle={changeTitleTodoList}/>
                <IconButton aria-label="delete">
                    <DeleteIcon
                        onClick={removeTodoListHandler}/>
                </IconButton>
            </h3>
            <AddForm addItemForm={addTask}/>
        </div>
    );
}

export default TasksManagement;
