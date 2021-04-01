import React, {useCallback, useMemo, useReducer} from 'react';
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

    const [todolistsState, dispatchTodolist] = useReducer(todolistReducer, [
        {id: firstTodo, title: 'First todo', filter: 'all'},
        {id: secondTodo, title: 'Second todo', filter: 'all'}
    ])
    const [tasksState, dispatchTasks] = useReducer(tasksReducer, {
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
    // const todolists = useMemo(()=>
    //
    // const addTodolistCallback = useCallback(
    //     () => {
    //         addTodolist(title)
    //     }, [title]
    // )

    const addTodolist = (title: string) => {
        let action = addTodolistAC(title)
        dispatchTodolist(action)
        dispatchTasks(action)
    }

    const todoListsItem = todolistsState.map(tl => {
            let tasksForTodoLists = tasksState[tl.id]
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

            //ButtonsFiltering
            const memoizedOnClickButtonAllHandler = useCallback(
                () => {
                    onClickButtonAllHandler()
                },
                [tl.id, todolistsState.find(tl => tl.filter)]
            )
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
