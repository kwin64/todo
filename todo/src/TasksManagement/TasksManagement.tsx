import React, {useState} from 'react';

type PropsType = {
    titleTodoList: string,
    addTask: (title: string, todoListsID: string) => void,
    todoListsID: string,
}

const TasksManagement: React.FC<PropsType> = (
    {titleTodoList, addTask, todoListsID}
) => {

    const [valueTask, setValueTask] = useState<string>('')

    const newValueTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueTask(e.currentTarget.value)
    }

    const AddTaskHandler = () => {
        if (valueTask) {
            addTask(valueTask, todoListsID)
        }
        setValueTask('')
    }

    return (
        <div>
            <h3>
                {titleTodoList}
                <button>X</button>
            </h3>
            <input onChange={newValueTask}
                   value={valueTask}/>
            <button onClick={AddTaskHandler}
            >+
            </button>
        </div>
    );
}

export default TasksManagement;
