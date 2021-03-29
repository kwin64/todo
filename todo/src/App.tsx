import React, {useReducer, useState} from 'react';
import {v1} from 'uuid';
import AddForm from "./AddForm";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todolistReducer
} from "./reducer/reducer-todolists";
import {addTaskAC, tasksReducer} from "./reducer/reducer-tasks";
import {Box} from "@material-ui/core";
import TodoList from "./Todolist";

export type TaskType = { id: string, title: string, isDone: boolean }
export type TasksStateType = {
    [key: string]: Array<TaskType>
}
export type FilterValueType = 'all' | 'active' | 'completed'

export type TodolistType = { id: string, title: string, filter: FilterValueType }

function App() {

    const firstTodo = v1()
    const secondTodo = v1()
    const [todoLists, setTodolists] = useState<Array<TodolistType>>([
        {id: firstTodo, title: 'First todo', filter: 'all'},
        {id: secondTodo, title: 'Second todo', filter: 'all'}
    ])
    const [tasks, setTasks] = useState<TasksStateType>({
        [firstTodo]: [
            {id: v1(), title: 'Buy car', isDone: false},
            {id: v1(), title: 'Buy pen', isDone: true},
            {id: v1(), title: 'Buy home', isDone: false},
        ],
        [secondTodo]: [
            {id: v1(), title: 'Sleep', isDone: true},
            {id: v1(), title: 'Eat', isDone: true},
            {id: v1(), title: 'Work', isDone: true},
        ]
    })

    const [todolistsState, dispatchTodolist] = useReducer(todolistReducer, todoLists)
    const [tasksState, dispatchTasks] = useReducer(tasksReducer, tasks)

    const addTodolist = (title: string) => {
        let action = addTodolistAC(title)
        dispatchTodolist(action)
        dispatchTasks(action)
    }

    // const addTodoList = (title: string) => {
    //     const idTodoList = v1()
    //     const todo: TodolistType = {id: idTodoList, title, filter: 'all'}
    //     setTodolists([...todoLists, todo])
    //     setTasks({...tasks, [idTodoList]: []})
    // }
    // const removeTodoList = (todoListsID: string) => {
    //     setTodolists(todoLists.filter(tl => tl.id !== todoListsID))
    //     delete tasks[todoListsID]
    // }
    // const changeTodoListFilter = (newFilterValue: FilterValueType, todoListsID: string) => {
    //     let todoList = todoLists.find(tl => tl.id === todoListsID)
    //     if (todoList) {
    //         todoList.filter = newFilterValue
    //         setTodolists([...todoLists])
    //     }
    // }
    // const changeTodoListTitle = (newTitle: string, todoListsID: string) => {
    //     let todoList = todoLists.find(tl => tl.id === todoListsID)
    //     if (todoList) {
    //         todoList.title = newTitle
    //         setTodolists([...todoLists])
    //     }
    // }
    // const addTask = (title: string, todoListsID: string) => {
    //     const newTask: TaskType = {id: v1(), title: title, isDone: false}
    //     tasks[todoListsID] = [newTask, ...tasks[todoListsID]]
    //     setTasks({...tasks})
    // }
    // const removeTask = (id: string, todoListsID: string) => {
    //     tasks[todoListsID] = tasks[todoListsID].filter(tl => tl.id !== id)
    //     setTasks({...tasks})
    // }
    // const changeStatusTask = (taskID: string, statusTask: boolean, todoListsID: string) => {
    //     const task = tasks[todoListsID].find(t => t.id === taskID)
    //     if (task) {
    //         task.isDone = statusTask
    //         setTasks({...tasks})
    //     }
    // }
    // const changeTasksTitle = (taskID: string, newTitle: string, todoListsID: string) => {
    //     let task = tasks[todoListsID].find(tl => tl.id === taskID)
    //     if (task) {
    //         task.title = newTitle
    //         setTasks({...tasks})
    //     }
    // }

    const todoListsItem = todoLists.map(tl => {
            let tasksForTodoLists = tasks[tl.id]
            if (tl.filter === 'active') {
                tasksForTodoLists = tasksForTodoLists.filter(t => !t.isDone)
            }
            if (tl.filter === 'completed') {
                tasksForTodoLists = tasksForTodoLists.filter(t => t.isDone)
            }

            //TasksManagement
            const addTask = (title: string) => {
                dispatchTasks(addTaskAC(title, tl.id))
            }
            const removeTodoListHandler = () => {
                let action = removeTodolistAC(tl.id)
                dispatchTodolist(action)
                dispatchTasks(action)
            }
            const changeTitleTodoList = (newTitle: string) => {
                dispatchTodolist(changeTodolistTitleAC(tl.id, newTitle))
            }

            //Tasks
            // const taskItemsHadlers = tasksForTodoLists.map(t => {
            //     const removeTaskHandler = () => {
            //         dispatchTasks(removeTasktAC(t.id, tl.id))
            //     }
            //     const changeStatusTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
            //         dispatchTasks(changeTaskStatusAC(t.id, tl.id, e.currentTarget.checked))
            //     }
            //     const changeTitle = (title: string) => {
            //         dispatchTasks(changeTaskTitleAC(t.id, tl.id, title))
            //     }
            // })

            //ButtonsFiltering
            const onClickButtonAllHandler = () => {
                dispatchTodolist(changeTodolistFilterAC(tl.id, "all"))
            }
            const onClickButtonActiveHandler = () => {
                dispatchTodolist(changeTodolistFilterAC(tl.id, "active"))
            }
            const onClickButtonCompletedHandler = () => {
                dispatchTodolist(changeTodolistFilterAC(tl.id, "completed"))
            }
            return (
                <Box boxShadow={2} fontStyle={'oblique'} fontFamily={'Monospace'}>
                    <TodoList todoListsID={tl.id}
                              titleTodoList={tl.title}
                              filter={tl.filter}
                              tasks={tasksForTodoLists}
                              dispatchTodolist={dispatchTodolist}
                              dispatchTasks={dispatchTasks}
                              addTask={addTask}
                              removeTodoListHandler={removeTodoListHandler}
                              changeTitleTodoList={changeTitleTodoList}
                              onClickButtonAllHandler={onClickButtonAllHandler}
                              onClickButtonActiveHandler={onClickButtonActiveHandler}
                              onClickButtonCompletedHandler={onClickButtonCompletedHandler}
                    />
                </Box>
            )
        }
    )
    return (
        <div>
            <AddForm addItemForm={addTodolist}/>
            {todoListsItem}
        </div>
    );
}

export default App;
