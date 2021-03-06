import React, {ChangeEvent} from 'react';
import {TaskType} from "../App";
import EditableTitle from "../EditableTitle";

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
