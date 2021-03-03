import React from 'react';
import {TodolistType} from "../Todolist";

type PropsType = {
    title: Array<TodolistType>
}

const TasksManagement: React.FC<PropsType> = (
    {title}
) => {

    return (
        <div key={title[0].id}>
            <h3>
                {title[0].title}
                <button>Delete tasks</button>
            </h3>
            <input/>
            <button>Add task</button>
        </div>
    );
}

export default TasksManagement;
