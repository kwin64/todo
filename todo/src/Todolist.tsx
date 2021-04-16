import React, {useCallback} from 'react';
import s from './App.module.css';
import ButtonsFiltering from './ButtonsFiltering/ButtonsFiltering';
import Tasks from './Tasks/Tasks';
import TasksManagement from './TasksManagement/TasksManagement';
import {FilterValueType, TaskType} from "./App";

export type PropsType = {
    todoListID: string
    titleTodoList: string
    filter: FilterValueType
    stateTask: Array<TaskType>
    removeTodolist: (id: string) => void
    changeTitleTodoList: (id: string, newTitle: string) => void
    changeTodolistFilter: (todoListsID: string, filter: FilterValueType) => void
    addTask: (id: string, title: string) => void
    removeTask: (id: string, todolistID: string) => void
    changeTitleTask: (id: string, todolistID: string, title: string) => void
    changeStatusTask: (id: string, todolistID: string, statusTask: boolean) => void
}

const TodoList: React.FC<PropsType> = React.memo(props => {

        let {
            todoListID,
            titleTodoList,
            stateTask,
            filter,
            removeTodolist,
            changeTitleTodoList,
            changeTodolistFilter,
            addTask,
            removeTask,
            changeTitleTask,
            changeStatusTask,
        } = props;

        //без понятия зачем дважды
        let allTodolistTasks = stateTask;//??????
        let tasksForTodolist = allTodolistTasks;//??????

        //фильтр тасок
        if (props.filter === "active") {
            tasksForTodolist = allTodolistTasks.filter(t => !t.isDone);
        }
        if (props.filter === "completed") {
            tasksForTodolist = allTodolistTasks.filter(t => t.isDone);
        }


        const onClickHandlerRemoveTask = (taskID: string) => {
            removeTask(taskID, todoListID)
        }
        const onClickHandlerChangeTaskStatus = (taskID: string, statusTask: boolean) => {
            changeStatusTask(taskID, todoListID, statusTask);
        }
        const onClickHandlerChangeTitleTask = (taskID: string, title: string) => {
            changeTitleTask(taskID, todoListID, title)
        }


        const tasks = tasksForTodolist.map(t => {
            //почему здесь а не в Таскс??
            return <Tasks key={todoListID}
                          task={t}
                          removeTask={onClickHandlerRemoveTask}
                          changeStatusTask={onClickHandlerChangeTaskStatus}
                          changeTitleTask={onClickHandlerChangeTitleTask}
            />
        })

        //let const destruct????
        addTask = useCallback((title: string) => {
            addTask(todoListsID, title)
        }, [todoListsID, addTask])

        removeTodolist = () => {
            props.removeTodolist(todoListsID);
        }

        changeTitleTodoList = useCallback((title: string) => {
            changeTitleTodoList(todoListsID, title);
        }, [changeTitleTodoList, todoListsID])


        return (
            <div className={s.todo}>
                <TasksManagement titleTodoList={titleTodoList}
                                 removeTodolist={removeTodolist}
                                 changeTitleTodoList={changeTitleTodoList}
                                 addTask={addTask}
                />
                {/*<Tasks todoListsID={todoListsID}*/}
                {/*       stateTask={stateTask}*/}
                {/*       removeTask={removeTask}*/}
                {/*       changeTitleTask={changeTitleTask}*/}
                {/*       changeStatusTask={changeStatusTask}*/}
                {/*/>*/}
                <ButtonsFiltering filter={filter}
                                  changeTodolistFilter={changeTodolistFilter}
                                  todoListsID={todoListsID}
                />
            </div>
        );
    }
)

export default TodoList;


export const Todolist = React.memo((props: PropsType) => {

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id);
    }, [props.id, props.addTask])
    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = useCallback((title: string) => {
        props.changeTodolistTitle(props.id, title);
    }, [props.changeTodolistTitle, props.id])

    const onAllClickHandler = useCallback(() => props.changeFilter("all", props.id), [props.id]);
    const onActiveClickHandler = useCallback(() => props.changeFilter("active", props.id), [props.id]);
    const onCompletedClickHandler = useCallback(() => props.changeFilter("completed", props.id), [props.id]);

    let allTodolistTasks = props.tasks;
    let tasksForTodolist = allTodolistTasks;

    if (props.filter === "active") {
        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
    }
    if (props.filter === "completed") {
        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
    }

    const onClickHandler = useCallback((taskId: string) => {
        props.removeTask(taskId, props.id)
    }, [props.removeTask, props.id])
    const onChangeHandler = useCallback((taskId: string, isDone: boolean) => {
        props.changeTaskStatus(taskId, isDone, props.id);
    }, [props.id, props.changeTaskStatus])
    const onTitleChangeHandler = useCallback((taskId: string, newValue: string) => {
        props.changeTaskTitle(taskId, newValue, props.id);
    }, [props.id, props.changeTaskTitle])

    return <div>
        <h3><EditableSpan value={props.title} onChange={changeTodolistTitle}/>
            <IconButton onClick={removeTodolist}>
                <Delete/>
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
        <div>
            {
                tasksForTodolist.map(t => {
                    return <Task
                        key={t.id}
                        task={t}
                        removeTask={onClickHandler}
                        changeTaskStatus={onChangeHandler}
                        changeTaskTitle={onTitleChangeHandler}

                    />
                })
            }
        </div>
        <div style={{paddingTop: "10px"}}>
            <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'default'}
            >All
            </Button>
            <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>
    </div>
})


