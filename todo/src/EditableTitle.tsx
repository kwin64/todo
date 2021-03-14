import React, {KeyboardEvent, useState} from 'react';

type PropsType = {
    title: string
    changeTitle: (newTitle: string) => void
}

const EditableTitle: React.FC<PropsType> = (
    {
        title,
        changeTitle
    }
) => {

    const [enableEdit, setEnableEdit] = useState<boolean>(false)
    const [newTitle, setNewTitle] = useState<string>(title)

    const changeEditorOn = () => setEnableEdit(true)
    const changeEditorOff = () => {
        setEnableEdit(false)
        changeTitle(newTitle)
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setEnableEdit(false)
            changeTitle(newTitle)
        }
    }

    return (
        enableEdit
            ? <input value={newTitle}
                     autoFocus
                     onChange={onChangeHandler}
                     onBlur={changeEditorOff}
                     onKeyPress={onEnter}/>
            : <span onDoubleClick={changeEditorOn}>{title}</span>
    )
}

export default EditableTitle;