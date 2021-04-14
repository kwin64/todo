import React, {KeyboardEvent, useState} from 'react';
import s from "./App.module.css";
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";

type PropsType = {
    addItemForm: (text: string) => void
}

const AddForm: React.FC<PropsType> = React.memo((
    {
        addItemForm
    }
) => {
    console.log('addForm rendering')
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
})

export default AddForm;