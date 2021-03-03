import React, {MouseEventHandler} from 'react';
import {TasksStateType} from "../App";

type PropsType = {
    tasks: TasksStateType,
    todoListsID: string,
    removeTask: (id: string, todoListsID: string) => void

}

const Tasks: React.FC<PropsType> = (
    {tasks, todoListsID, removeTask}
) => {
    const tasksItems = tasks[todoListsID].map(t => {
            const removeTaskHandler = () => {
                removeTask(t.id, todoListsID)
            }
            return (<li>
                {t.title}
                <input type='checkbox'
                       checked={t.isDone}/>
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
