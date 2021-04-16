import React, {ChangeEvent, Dispatch, useCallback} from 'react';
import {TasksStateType, TaskType} from "../App";
import EditableTitle from "../EditableTitle";
import {Checkbox, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {ActionsTaskType, changeTaskStatusAC, changeTaskTitleAC, removeTasktAC} from "../Redux/reducers/reducer-tasks";

type PropsType = {
    task: TaskType
    removeTask: (taskID: string) => void
    changeStatusTask: (taskID: string, statusTask: boolean) => void
    changeTitleTask: (taskID: string, title: string) => void
}

const Tasks: React.FC<PropsType> = (props) => {
    const {
        task,
        removeTask,
        changeTitleTask,
        changeStatusTask
    } = props

    // const tasksItem = stateTask[todoListsID].map(t => {
    //         const removeTaskHandler = () => {
    //             removeTask(t.id, todoListsID)
    //         }
    //         const changeStatusTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //             changeStatusTask(t.id, todoListsID, e.currentTarget.checked)
    //         }
    //         const changeTitleTaskHandler = () => {
    //             changeTitleTask(t.id, todoListsID, t.title)
    //         }
    //
    //         return (<li key={t.id}
    //                     className={t.isDone ? 'isDone' : ''}>
    //             <EditableTitle title={t.title}
    //                            changeTitle={changeTitleTaskHandler}/>
    //             <Checkbox
    //                 defaultChecked
    //                 color="primary"
    //                 inputProps={{'aria-label': 'secondary checkbox'}}
    //                 checked={t.isDone}
    //                 size='small'
    //                 onChange={changeStatusTaskHandler}/>
    //             <IconButton aria-label="delete">
    //                 <DeleteIcon
    //                     onClick={removeTaskHandler}/>
    //             </IconButton>
    //         </li>)
    //     }
    // )

    return (
        <ul>
            <li key={task.id}
                className={task.isDone ? 'isDone' : ''}>
                <EditableTitle title={task.title}
                               changeTitle={changeTitleTask}/>
                <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{'aria-label': 'secondary checkbox'}}
                    checked={task.isDone}
                    size='small'
                    onChange={changeStatusTask}/>
                <IconButton aria-label="delete">
                    <DeleteIcon
                        onClick={removeTask}/>
                </IconButton>
            </li>
        </ul>
    );
}


export default Tasks;
