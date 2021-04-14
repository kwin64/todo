import React, {useCallback} from 'react';
import {FilterValueType} from "../App";
import s from '../App.module.css';
import {Button} from "@material-ui/core";

type PropsType = {
    filter: FilterValueType
    todoListsID: string
    changeTodolistFilter: (todolistID: string, filter: FilterValueType) => void
}

const ButtonsFiltering: React.FC<PropsType> = (props) => {

    const {
        filter,
        todoListsID,
        changeTodolistFilter
    } = props

    const onClickButtonAllHandler = useCallback(() => changeTodolistFilter(todoListsID, "all"), [todoListsID]);
    const onClickButtonActiveHandler = useCallback(() => changeTodolistFilter(todoListsID, "active"), [todoListsID]);
    const onClickButtonCompletedHandler = useCallback(() => changeTodolistFilter(todoListsID, "completed"), [todoListsID]);

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
