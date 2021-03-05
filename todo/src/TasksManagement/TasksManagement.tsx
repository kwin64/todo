import React, {useState} from 'react';

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

    const newValueTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueTask(e.currentTarget.value)
    }

    const addTaskHandler = () => {
        if (valueTask) {
            addTask(valueTask, todoListsID)
        }
        setValueTask('')
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
                   value={valueTask}/>
            <button onClick={addTaskHandler}
            >+
            </button>
        </div>
    );
}

export default TasksManagement;
