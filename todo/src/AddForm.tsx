import React, {KeyboardEvent, useState} from 'react';
import s from "./App.module.css";
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";

type PropsType = {
    addItemForm: (title: string) => void
}

const AddForm: React.FC<PropsType> = (
    {
        addItemForm
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
            addItemForm(trimmedValueTask)
        } else {
            setError(true)
        }
        setValueTask('')
    }

    const keyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            debugger
            addTaskHandler()
        }
    }

    return (
        <div className={s.todo}>
            <TextField id='outlined-basic' label='Add new task' variant='outlined'
                       onChange={newValueTask}
                       value={valueTask}
                       onKeyPress={keyPressAddTask}
                       className={error ? 'outlined-error-helper-text' : ''}/>
            <Button onClick={addTaskHandler}
                    color='default'
            >+
            </Button>
            {error && <div className={'errorMessage'}>Incorrect value!</div>}
        </div>
    )
}

export default AddForm;