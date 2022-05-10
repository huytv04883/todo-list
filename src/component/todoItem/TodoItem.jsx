import React, { useRef } from "react";
import './TodoItem.css';

const TodoItem = (props) => {
    const {
        itemTodo,
        textEdit,
        removeItem,
        editItem,
        handleBLur,
        handleClick,
        handleKeyUpEdit
    } = props;
    const textInput = useRef(null);

    return (
        <li className={ itemTodo.isComplete === true ? "completed" : ''}>
            <div className="view">
                <input 
                    className="toggle" 
                    type="checkbox" 
                    defaultChecked = {itemTodo.isComplete === true} 
                    onClick={() => handleClick(itemTodo)}>
                </input>
                <label onDoubleClick={() => editItem(itemTodo, textInput)}>{itemTodo.title}</label>
                <button className="destroy" onClick={() => removeItem(itemTodo)}></button>
            </div>
            {itemTodo.isEdit === true && <input
                className="edit"
                onKeyUp = {(event) => handleKeyUpEdit(event, itemTodo)}
                type="text" defaultValue={textEdit}
                ref={textInput}
                onBlur = {() => handleBLur()}
            />}
        </li>
    )
}

export default TodoItem;