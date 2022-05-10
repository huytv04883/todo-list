import React, { useState } from "react";
import { totoList } from "./listTodo";
import TodoItem from "./todoItem/TodoItem";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const AppTodo = () => {
    const [listItem , setItem ] = useState(totoList);
    const [newText, setText] = useState('');
    const [textEdit, setTextEdit] = useState('');
    const [isCheckAll, setIsCheckAll] = useState(true);
    const [listFiler, setListFilter] = useState(totoList);
    const [filterOption, setFilterOption] = useState(0);
    
    // Add New Item
    const addNewItem = (event) => {
        if (event.keyCode === 13) {
            let text = event.target.value;
            text = text.trim();
            if (!text) return;
            listFiler.push({title: text, isComplete: false});
            setText('');
        }
        setItem(listFiler);
    }
    // Edit Item
    const editItem = (items, textInput) => {
        let data = [...listItem];
        let index = data.indexOf(items);
        data.forEach((e,index) => {
            e.isEdit = false;
        });
        data[index].isEdit = !data[index].isEdit;
        setTextEdit(items.title);
        setItem(data);
        setTimeout(() => {
            textInput.current.focus();
        }, 100);
    }
    // Remove Item
    const removeItem = (items) => {
        const data = [...listFiler];
        let index = data.indexOf(items);
        data.splice(index, 1);
        setListFilter(data);
        setItem(data);
    }
    // Filter Item
    const filterItem = (event) => {
        let textFilter = event.currentTarget.dataset.txt;
        let listFiler = [];
        switch(textFilter) {
            case 'completed':
                const arr1 =  listItem.filter(item => item.isComplete === true);
                setFilterOption(2);
                listFiler = arr1
                break;
            case 'active':
                const arr2 =  listItem.filter(item => item.isComplete === false);
                setFilterOption(1);
                listFiler = arr2
                break;
            default:
                setFilterOption(0);
                listFiler = listItem;
        }
        setListFilter(listFiler);
    }
    // Choose All Item
    const checkAllItem = () => {
        let data = [...listFiler];
        setIsCheckAll(isCheck => !isCheck);
        data.forEach((e) => {
            e.isComplete = isCheckAll;
        });
    }
    // Remove All Item
    const clearAllItem = () => {
        setListFilter([]);
        setItem([]);
        setIsCheckAll(isCheck => true);
    }
    
    // Handle Function
    const handleOnChange = (event) => {
        setText(text => event.target.value);
    }

    const handleBLur = () => {
        let data = [...listItem];
        data.forEach((e) => {
            e.isEdit = false;
        });
        setItem(data);
    }

    const handleKeyUpEdit = (event, items) => {

        if (event.keyCode === 13) {
            let text = event.target.value;
            text = text.trim();
            if (!text) return;
            let data = [...listItem];
            let index = data.indexOf(items);
            data[index].title = text;
            data[index].isEdit = false;
            setItem(data);
        }
    }

    const handleClick = (items) => {
        let data = [...listItem];
        let index = data.indexOf(items);
        data[index].isComplete = !data[index].isComplete;
        setItem(data);
    }

    return (
        <div className="todoapp">
            <Header  
                newText = {newText} 
                addNewItem = {addNewItem} 
                handleOnChange = {handleOnChange}
            />
            <section className='main'>
                {listFiler.length > 0 && <label onClick={() => checkAllItem()} className="toggle-all"></label>}
                <ul className='todo-list'>
                    {listFiler.map((item, index) => (
                        <TodoItem 
                            key={index} 
                            itemTodo = {item}
                            textEdit = {textEdit}
                            removeItem = {removeItem}
                            editItem = {editItem}
                            handleBLur = {handleBLur}
                            handleClick={handleClick}
                            handleKeyUpEdit = {handleKeyUpEdit}
                        />
                    ))}
                </ul>  
            </section>
            <Footer
                items = {listFiler} 
                filterOption = {filterOption} 
                isCheck = {isCheckAll} 
                clearAll = {clearAllItem}
                filterItem = {filterItem}
            />
        </div>
    )
}

export default AppTodo;