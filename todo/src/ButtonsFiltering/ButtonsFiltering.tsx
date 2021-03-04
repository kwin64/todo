import React from 'react';
import {FilterValueType} from "../App";

type PropsType = {
    filteredTasks: (filterValue: FilterValueType, todoListsID: string) => void,
    todoListsID: string,
}

const ButtonsFiltering: React.FC<PropsType> = (
    {
        filteredTasks,
        todoListsID
    }
) => {
    const onClickButtonAllHandler = () => {
        filteredTasks('all', todoListsID)
    }
    const onClickButtonActiveHandler = () => {
        filteredTasks('active', todoListsID)
    }
    const onClickButtonCompletedHandler = () => {
        filteredTasks('completed', todoListsID)
    }
    return (
        <div>
            <button onClick={onClickButtonAllHandler}>All</button>
            <button onClick={onClickButtonActiveHandler}>Active</button>
            <button onClick={onClickButtonCompletedHandler}>Completed</button>
        </div>
    );
}


export default ButtonsFiltering;
