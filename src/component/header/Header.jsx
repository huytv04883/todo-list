import React from "react";

const Header = (props) => {
    const {
        newText,
        addNewItem, 
        handleOnChange
    } = props;
    
    return (
        <header className="header" data-reactid=".0.0">
            <h1>Todos</h1>
            <input 
                className="new-todo" 
                placeholder="What needs to be done?" 
                onKeyUp = {(event) => addNewItem(event)}
                onChange= {(event) => handleOnChange(event)}
                value={newText}
            />
        </header>
    )
}

export default Header;