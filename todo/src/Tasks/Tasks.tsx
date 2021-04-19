import React from 'react';
import {TaskType} from "../App";
import EditableTitle from "../EditableTitle";
import {Checkbox, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

type PropsType = {
    todoListID: string
    task: TaskType
    removeTask: (id: string, todolistID: string) => void
    changeTitleTask: (id: string, todolistID: string, title: string) => void
    changeStatusTask: (id: string, todolistID: string, statusTask: boolean) => void
}

const Tasks: React.FC<PropsType> = (props) => {
    const {
        task,
        removeTask,
        changeTitleTask,
        changeStatusTask,
        todoListID
    } = props

    //handlers
    const onClickHandlerRemoveTask = () => {
        removeTask(task.id, todoListID)
    }
    const onClickHandlerChangeTaskStatus = () => {
        changeStatusTask(task.id, todoListID, task.isDone);
    }
    const onClickHandlerChangeTitleTask = (title: string) => {
        changeTitleTask(task.id, todoListID, title)
    }

    return (
        <ul>
            <li key={task.id}
                className={task.isDone ? 'isDone' : ''}>
                <EditableTitle title={task.title}
                               changeTitle={onClickHandlerChangeTitleTask}/>
                <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{'aria-label': 'secondary checkbox'}}
                    checked={task.isDone}
                    size='small'
                    onChange={onClickHandlerChangeTaskStatus}/>
                <IconButton aria-label="delete">
                    <DeleteIcon
                        onClick={onClickHandlerRemoveTask}/>
                </IconButton>
            </li>
        </ul>
    );
}


export default Tasks;
