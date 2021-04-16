import React from 'react';
import {FilterValueType} from "../App";
import s from '../App.module.css';
import {Button} from "@material-ui/core";

type PropsType = {
    filter: FilterValueType
    todoListID: string
    changeTodolistFilter: (todolistID: string, filter: FilterValueType) => void
}

const ButtonsFiltering: React.FC<PropsType> = (props) => {

    const {
        filter,
        todoListID,
        changeTodolistFilter
    } = props

    const onClickButtonAllHandler = () => changeTodolistFilter(todoListID, "all")
    const onClickButtonActiveHandler = () => changeTodolistFilter(todoListID, "active")
    const onClickButtonCompletedHandler = () => changeTodolistFilter(todoListID, "completed")

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
