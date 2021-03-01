import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'

const TodoList = () => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([{}]);

    const fetchItems = async () => {
        try {
            const response = await fetch('http://localhost:80/gitphp/php/todoapp/tasks.php');

            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            setItems(data.result);
        } catch (error) {
            console.log(error)
        }
    }

    // filter task
    const filterTask = async (event) => {
        let response = await fetch(`http://localhost:80/gitphp/php/todoapp/tasks.php?status=${event.target.value}`);

        if (!response.ok) {
            throw Error(response.statusText);
        }

        response = await response.json();
        setItems(response.result);
    }


    return (
        <div className="todo-container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Todo's List</h1>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-2">
                            <h4 className="status-text">Task Status</h4>
                        </div>
                        <div className="col-md-4">
                            <select className="form-control" onChange={filterTask}>
                                <option value="all">All</option>
                                <option value="Active">Active</option>
                                <option value="Complete">Completed</option>
                                <option value="Incomplete">Uncompleted</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.task}</td>
                            <td>{item.status}</td>
                            <td>
                                <Button variant="outline-primary"><FontAwesomeIcon icon={faEdit} /></Button>
                                <Button variant="outline-danger"><FontAwesomeIcon icon={faTrash} /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;