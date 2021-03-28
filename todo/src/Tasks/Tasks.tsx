import React, {ChangeEvent, Dispatch} from 'react';
import {TaskType} from "../App";
import EditableTitle from "../EditableTitle";
import {Checkbox, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {ActionsTaskType} from "../reducer/reducer-tasks";

type PropsType = {
    tasks: Array<TaskType>
    todoListsID: string
    dispatchTasks: Dispatch<ActionsTaskType>
}

const Tasks: React.FC<PropsType> = (
    {
        tasks,
        todoListsID,
        dispatchTasks
    }
) => {

    const tasksItems = tasks.map(t => {
            const removeTaskHandler = () => {
                dispatchTasks({type: 'REMOVE-TASK', id:t.id, todoListsID})
            }
            const changeStatusTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
                dispatchTasks({type: 'CHANGE-TASK-STATUS', id:t.id, todoListsID, statusTask:e.currentTarget.checked})
            }
            const changeTitle = (title: string) => {
                dispatchTasks({type: 'CHANGE-TASK-TITLE', id:t.id, todoListsID, title})
            }

            return (<li key={t.id} className={t.isDone ? 'isDone' : ''}>
                <EditableTitle title={t.title} changeTitle={changeTitle}/>
                <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{'aria-label': 'secondary checkbox'}}
                    checked={t.isDone}
                    size='small'
                    onChange={changeStatusTaskHandler}/>
                <IconButton aria-label="delete">
                    <DeleteIcon
                        onClick={removeTaskHandler}/>
                </IconButton>
            </li>)
        }
    )

    return (
        <ul>
            {tasksItems}
        </ul>
    );
}

export default Tasks;
