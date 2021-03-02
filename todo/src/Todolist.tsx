import React from 'react';
import './Todolist.css';
import ButtonsFiltering from './ButtonsFiltering/ButtonsFiltering';
import Tasks from './Tasks/Tasks';
import TasksManagement from './TasksManagement/TasksManagement';

function TodoList() {
    return (
        <div>
            <TasksManagement/>
            <Tasks/>
            <ButtonsFiltering/>
        </div>
    );
}

export default TodoList;
