import React, {ChangeEvent} from 'react';
import {TaskType} from "../App";
import EditableTitle from "../EditableTitle";
import {Checkbox, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

type PropsType = {
    tasks: Array<TaskType>
    todoListsID: string
    removeTask: (id: string, todoListsID: string) => void
    changeStatusTask: (taskID: string, statusTask: boolean, todoListsID: string) => void
    changeTasksTitle: (idTask: string, newTitle: string, todoListsID: string) => void
}

const Tasks: React.FC<PropsType> = (
    {
        tasks,
        todoListsID,
        removeTask,
        changeStatusTask,
        changeTasksTitle
    }
) => {

    const tasksItems = tasks.map(t => {
            const removeTaskHandler = () => {
                removeTask(t.id, todoListsID)
            }
            const changeStatusTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
                changeStatusTask(t.id, e.currentTarget.checked, todoListsID)
            }
            const changeTitle = (title: string) => {
                changeTasksTitle(t.id, title, todoListsID)
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
