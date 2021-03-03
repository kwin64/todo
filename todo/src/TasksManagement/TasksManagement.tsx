import React from 'react';

type PropsType = {
    titleTodoList: string,

}

const TasksManagement: React.FC<PropsType> = (
    {titleTodoList}
) => {

    return (
        <div key={1}>
            <h3>
                {titleTodoList}
                <button>Delete tasks</button>
            </h3>
            <input/><button>Add task</button>
        </div>
    );
}

export default TasksManagement;
