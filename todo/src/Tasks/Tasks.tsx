import React from 'react';
import {TasksStateType} from "../App";

type PropsType = {
    tasks: TasksStateType,
    todoListsID: string
}

const Tasks: React.FC<PropsType> = (
    {tasks,todoListsID}
) => {
    const tasksItems = tasks[todoListsID].map(t =>
        <li>
            {t.title}
            <input type='checkbox'
                   checked={t.isDone}/>
        </li>)
    return (
        <ul>
            {tasksItems}
        </ul>
    );
}

export default Tasks;
