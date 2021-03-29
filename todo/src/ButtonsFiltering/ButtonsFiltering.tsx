import React from 'react';
import {FilterValueType} from "../App";
import s from '../App.module.css';
import {Button} from "@material-ui/core";

type PropsType = {
    filter: FilterValueType
    onClickButtonAllHandler: () => void
    onClickButtonActiveHandler: () => void
    onClickButtonCompletedHandler: () => void
}

const ButtonsFiltering: React.FC<PropsType> = (
    {
        filter,
        onClickButtonAllHandler,
        onClickButtonActiveHandler,
        onClickButtonCompletedHandler
    }
) => {

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
