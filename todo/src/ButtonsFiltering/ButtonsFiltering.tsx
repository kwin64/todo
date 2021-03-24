import React from 'react';
import {FilterValueType} from "../App";
import s from '../App.module.css';
import {Button} from "@material-ui/core";

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
            <Button className={filter === 'all' ? s.activeButton : ''}
                    variant={filter === 'all' ? 'contained' : "outlined"}
                    size='small' color='primary'
                    onClick={onClickButtonAllHandler}>All
            </Button>
            <Button className={filter === 'active' ? s.activeButton : ''}
                    variant={filter === 'active' ? 'contained' : "outlined"}
                    size='small' color='primary'
                    onClick={onClickButtonActiveHandler}>Active
            </Button>
            <Button className={filter === 'completed' ? s.activeButton : ''}
                    variant={filter === 'completed' ? 'contained' : "outlined"}
                    size='small' color='primary'
                    onClick={onClickButtonCompletedHandler}>Completed
            </Button>
        </div>
    );
}


export default ButtonsFiltering;
