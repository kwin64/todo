import React, {ChangeEvent} from 'react';
import {TaskType} from "../App";

type PropsType = {
    tasks: Array<TaskType>,
    todoListsID: string,
    removeTask: (id: string, todoListsID: string) => void,
    changeStatusTask: (taskID: string, statusTask: boolean, todoListsID: string) => void,
}

const Tasks: React.FC<PropsType> = (
    {
        tasks,
        todoListsID,
        removeTask,
        changeStatusTask
    }
) => {
    const tasksItems = tasks.map(t => {
            const removeTaskHandler = () => {
                removeTask(t.id, todoListsID)
            }
            const changeStatusTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
                changeStatusTask(t.id, e.currentTarget.checked, todoListsID)
            }

            return (<li className={t.isDone ? 'isDone' : ''}>
                {t.title}
                <input type='checkbox'
                       checked={t.isDone}
                       onChange={changeStatusTaskHandler}/>
                <button onClick={removeTaskHandler}>X
                </button>
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
