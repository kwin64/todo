import React from 'react';
import {FilterValueType} from "../App";
import s from '../App.module.css';

type PropsType = {
    changeTodoListFilter: (filterValue: FilterValueType, id: string) => void
    filter: FilterValueType
    todoListsID: string
}

const ButtonsFiltering: React.FC<PropsType> = (
    {
        changeTodoListFilter,
        filter,
        todoListsID
    }
) => {
    const onClickButtonAllHandler = () => {
        changeTodoListFilter('all', todoListsID)
    }
    const onClickButtonActiveHandler = () => {
        changeTodoListFilter('active', todoListsID)
    }
    const onClickButtonCompletedHandler = () => {
        changeTodoListFilter('completed', todoListsID)
    }
    return (
        <div>
            <button className={filter === 'all' ? s.activeButton : ''} onClick={onClickButtonAllHandler}>All</button>
            <button className={filter === 'active'? s.activeButton : ''} onClick={onClickButtonActiveHandler}>Active</button>
            <button className={filter === 'completed'? s.activeButton : ''} onClick={onClickButtonCompletedHandler}>Completed
            </button>
        </div>
    );
}


export default ButtonsFiltering;
