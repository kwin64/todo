import React, {KeyboardEvent, useState} from 'react';

type PropsType = {
    titleTodoList: string,
    addTask: (title: string, todoListsID: string) => void,
    todoListsID: string,
    removeTodoList: (todoListsID: string) => void
}

const TasksManagement: React.FC<PropsType> = (
    {
        titleTodoList,
        addTask,
        todoListsID,
        removeTodoList
    }
) => {

    const [valueTask, setValueTask] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const newValueTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueTask(e.currentTarget.value)
        setError(false)
    }

    const addTaskHandler = () => {
        const trimmedValueTask = valueTask.trim()
        if (trimmedValueTask) {
            addTask(trimmedValueTask, todoListsID)
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

    const removeTodoListHandler = () => {
        removeTodoList(todoListsID)
    }


    return (
        <div>
            <h3>
                {titleTodoList}
                <button onClick={removeTodoListHandler}>X</button>
            </h3>
            <input onChange={newValueTask}
                   value={valueTask}
                   onKeyPress={keyPressAddTask}
                   className={error ? 'error' : ''}/>
            <button onClick={addTaskHandler}
            >+
            </button>
            {error && <div className={'errorMessage'}>Incorrect value!</div>}
        </div>
    );
}

export default TasksManagement;
