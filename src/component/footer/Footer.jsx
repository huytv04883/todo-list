import React from "react";

const Footer = (props) => {
    const {
        items, 
        filterOption, 
        isCheck, 
        clearAll, 
        filterItem
    } = props;
    const listStatus = [
        {status: 'all', isActive: filterOption === 0},
        {status: 'active', isActive: filterOption === 1},
        {status: 'completed', isActive: filterOption === 2}
    ]

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{items.length}</strong>
                <span className="item-length">Item</span>
                <span>Left</span></span>
            <ul className="filters">
                {listStatus.map((item, index) => (
                    <li data-txt = {item.status}
                        onClick={(event) => filterItem(event)}
                        key={index}>
                        <span className={item.isActive === true ? 'selected' : ''}>{item.status}</span>
                    </li>
                ))}
            </ul>
            {isCheck === false && <button onClick={() => clearAll()} className="clear-completed">Clear completed</button>}
        </footer>
    )
}

export default Footer;