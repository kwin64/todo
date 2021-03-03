import React from 'react';
import {TaskType} from "../Todolist";

type PropsType = {
    todo: Array<TaskType>
}

const Tasks: React.FC<PropsType> = (
    {todo}
) => {
    const tasks = todo.map(t =>
        <li key={t.id}>
            {t.title}
            <input type='checkbox'
                   checked={t.isDone}/>
        </li>)
    return (
        <ul>
            {tasks}
        </ul>
    );
}

export default Tasks;
