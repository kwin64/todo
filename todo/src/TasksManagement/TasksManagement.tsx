import React from 'react';
import AddForm from "../AddForm";
import EditableTitle from "../EditableTitle";

type PropsType = {
    titleTodoList: string
    addTask: (title: string, todoListsID: string) => void
    todoListsID: string
    removeTodoList: (todoListsID: string) => void
    changeTodoListTitle:  (newTitle: string, todoListsID: string) => void
}

const TasksManagement: React.FC<PropsType> = (
    {
        titleTodoList,
        addTask,
        todoListsID,
        removeTodoList,
        changeTodoListTitle
    }
) => {

    const addTaskForm = (title: string) => {
        addTask(title, todoListsID)
    }
    const removeTodoListHandler = () => {
        removeTodoList(todoListsID)
    }
    const changeTitle = (title:string) => {
        changeTodoListTitle(title,todoListsID)
    }

    return (
        <div>
            <h3>
                <EditableTitle title={titleTodoList} changeTitle={changeTitle} />
                <button onClick={removeTodoListHandler}>X</button>
            </h3>
            <AddForm addItemForm={addTaskForm}/>
        </div>
    );
}

export default TasksManagement;
