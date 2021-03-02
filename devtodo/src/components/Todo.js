import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {

    // status handler
    const statusHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }

            return item;
        }))
    }

    // delete todos
    const deleteTodos = () => {
        // console.log(todo.id)
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={statusHandler} className="complete-btn"><i className={`${todo.completed ? "fas fa-thumbs-up" : "fas fa-check"}`} ></i></button>
            <button onClick={deleteTodos} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo;