import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

    const inputHandler = (e) => {
        setInputText(e.target.value);
    }

    // stop form to refresh
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random()
            }
        ]);

        setInputText("");
    }

    const handleFilter = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            <input onChange={inputHandler} value={inputText} type="text" className="todo-input" />
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={handleFilter}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;