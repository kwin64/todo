import React, {useCallback} from 'react';
import AddForm from "./AddForm";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC
} from "./Redux/reducers/reducer-todolists";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTasktAC} from "./Redux/reducers/reducer-tasks";
import {Box} from "@material-ui/core";
import TodoList from "./Todolist";
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from "./Redux/store";

export type TaskType = { id: string, title: string, isDone: boolean }
export type TasksStateType = {
    [key: string]: Array<TaskType>
}
export type FilterValueType = 'all' | 'active' | 'completed'

export type TodolistType = { id: string, title: string, filter: FilterValueType }

function App() {

    const dispatch = useDispatch()
    const stateTodolist = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolistReducer)
    const stateTask = useSelector<AppRootStateType, TasksStateType>(state => state.tasksReducer)

    //todolist
    const addTodolist = useCallback((title: string) => {
        const action = addTodolistAC(title)
        dispatch(action)
    }, [])
    const removeTodoList = (id: string) => {
        let action = removeTodolistAC(id)
        dispatch(action)
    }
    const changeTitleTodoList = (id: string, newTitle: string) => {
        dispatch(changeTodolistTitleAC(id, newTitle))
    }
    const changeTodolistFilter = (todolistID: string, filter: FilterValueType) => {
        const action = changeTodolistFilterAC(todolistID, filter)
        dispatch(action)
    }

    //task
    const addTask = (title: string, todoListsID: string) => {
        const action = addTaskAC(title, todoListsID)
        dispatch(action)
    }
    const removeTask = (id: string, todolistID: string) => {
        const action = removeTasktAC(id, todolistID)
        dispatch(action)

    }
    const changeTitleTask = (id: string, todolistID: string, title: string) => {
        const action = changeTaskTitleAC(id, todolistID, title)
        dispatch(action)
    }
    const changeStatusTask = (id: string, todolistID: string, statusTask: boolean) => {
        const action = changeTaskStatusAC(id, todolistID, statusTask)
        dispatch(action)
    }

    const todolists = stateTodolist.map(tl => {
        return <Box boxShadow={2} fontStyle={'oblique'} fontFamily={'Monospace'}>
            <AddForm addItemForm={addTodolist}/>
            <TodoList key={tl.id}
                      todoListID={tl.id}
                      titleTodoList={tl.title}
                      filter={tl.filter}
                      stateTask={stateTask[tl.id]}

                      removeTodolist={removeTodoList}
                      changeTitleTodoList={changeTitleTodoList}
                      changeTodolistFilter={changeTodolistFilter}

                      addTask={addTask}
                      removeTask={removeTask}
                      changeStatusTask={changeStatusTask}
                      changeTitleTask={changeTitleTask}
            />
        </Box>

    })
    return (
        <div>
            <AddForm addItemForm={addTodolist}/>
            {todolists}
        </div>
    );
}

export default App;
