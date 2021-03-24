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
            {error ? <TextField
                    error
                    id="outlined-error"
                    label="Incorrect value!"
                    variant="outlined"
                    onChange={newValueTask}
                    value={valueTask}
                    onKeyPress={keyPressAddTask}/>
                : <TextField required id="standard-required"
                             onChange={newValueTask}
                             value={valueTask}
                             onKeyPress={keyPressAddTask}/>}
            <Button onClick={addTaskHandler}
                    color='default'
            >+
            </Button>
        </div>
    )
}

export default AddForm;