import React from 'react';
import AddForm from "../AddForm";
import EditableTitle from "../EditableTitle";
import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

type PropsType = {
    titleTodoList: string
    removeTodolist: () => void
    changeTitleTodoList: (newTitle: string) => void
    addTask: (title: string) => void
}

const TasksManagement: React.FC<PropsType> = (props) => {

    const {
        titleTodoList,
        removeTodolist,
        changeTitleTodoList,
        addTask
    } = props

    return (
        <div>
            <h3>
                <EditableTitle title={titleTodoList}
                               changeTitle={changeTitleTodoList}
                />
                <IconButton aria-label="delete">
                    <DeleteIcon
                        onClick={removeTodolist}
                    />
                </IconButton>
            </h3>
            <AddForm addItemForm={addTask}/>
        </div>
    );
}

export default TasksManagement;
