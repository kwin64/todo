import React, {Dispatch, KeyboardEvent, useState} from 'react';
import s from "./App.module.css";
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";
import {ActionsTodolistType, addTodolistAC} from "./reducer/reducer-todolists";
import {v1} from "uuid";
import {ActionsTaskType} from "./reducer/reducer-tasks";

type PropsType = {
    //dispatchTodolist: Dispatch<ActionsTodolistType>
    // dispatchTasks: Dispatch<ActionsTaskType>
    addItem: (text: string) => void
}

const AddForm: React.FC<PropsType> = (
    {
        //dispatchTodolist,
        // dispatchTasks
        addItem
    }
) => {

    const [error, setError] = useState<boolean>(false)
    const [valueTask, setValueTask] = useState<string>('')


    const newValueTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueTask(e.currentTarget.value)
        setError(false)
    }
    const addTaskHandler = () => {
        const trimmedValueTask = valueTask.trim()
        if (trimmedValueTask) {
            addItem(trimmedValueTask)
        } else {
            setError(true)
        }
        setValueTask('')
    }
    const keyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }

    return (
        <div className={s.todo}>
            <TextField variant="outlined"
                       size='small'
                       error={error}
                       value={valueTask}
                       label="Title"
                       helperText={error}
                       onChange={newValueTask}
                       onKeyPress={keyPressAddTask}/>
            <Button onClick={addTaskHandler}
                    color='default'
                    size='medium'
            >+
            </Button>
        </div>
    )
}

export default AddForm;