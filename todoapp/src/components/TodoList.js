import React, { useState, useEffect } from 'react';

const TodoList = () => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([{}]);

    const fetchItems = async () => {
        try {
            const response = await fetch('http://localhost:80/gitphp/todoapp/tasks.php');

            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            setItems(data.result);
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="todo-container">
            <ul className="todo-list">
            {items.map((item, index) => (
                <li key={index}>
                    {item.task}
                </li>
            ))}
            </ul>
        </div>
    );
}

export default TodoList;