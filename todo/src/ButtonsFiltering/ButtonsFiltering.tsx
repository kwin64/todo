import React, {Dispatch} from 'react';
import {FilterValueType} from "../App";
import s from '../App.module.css';
import {Button} from "@material-ui/core";
import {ActionsType} from "../reducer/reducer-todolists";

type PropsType = {
    filter: FilterValueType
    todoListsID: string
    dispatch: Dispatch<ActionsType>
}

const ButtonsFiltering: React.FC<PropsType> = (
    {
        filter,
        todoListsID,
        dispatch
    }
) => {
    const onClickButtonAllHandler = () => {
        dispatch({type: 'CHANGE-TODOLIST-FILTER', id:todoListsID,filter:"all"})
    }
    const onClickButtonActiveHandler = () => {
        dispatch({type: 'CHANGE-TODOLIST-FILTER', id:todoListsID,filter:"active"})
    }
    const onClickButtonCompletedHandler = () => {
        dispatch({type: 'CHANGE-TODOLIST-FILTER', id:todoListsID,filter:"completed"})
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
