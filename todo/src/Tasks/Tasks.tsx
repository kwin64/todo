import React from 'react';
import {TasksStateType} from "../Todolist";

type PropsType = {
    tasks: TasksStateType
}

const Tasks: React.FC<PropsType> = (
    {tasks,}
) => {
    return (
        <ul>
            <span>{tasks[firstTodo]}</span>
            <li>task_2</li>
            <li>task_3</li>
        </ul>
    );
}

export default Tasks;
