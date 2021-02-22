import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
require('react-datepicker/dist/react-datepicker.css')

const Form = (props) => {

    const [task, setTask] = useState('');
    const [filter, setFilter] = useState('all');
    // const [data, setData] = useState({task: '', filter: 'all'});
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), (new Date().getMinutes() > 30 ? 0 : 30 )), new Date().getHours())
    );

    const getDate = (dateTimeString) => {
        let date = new Date(dateTimeString);
        let mnth = ("0" + (date.getMonth() + 1)).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        return [ date.getFullYear(), mnth, day].join("-");
    }

    const getTime = (dateTimeString) => {
        let date = new Date(dateTimeString);
        let hours  = ("0" + date.getHours()).slice(-2);
        let minutes = ("0" + date.getMinutes()).slice(-2);
        return [ hours, minutes ].join(":");
    }

    const saveTask = async (event) => {
        event.preventDefault();
        let taskDate = getDate(startDate);
        let taskTime = getTime(startDate);
        let formData = {
            date: taskDate,
            time: taskTime,
            task: task,
            filter: filter
        };

        let response = await fetch('http://localhost:80/gitphp/todoapp/addtask.php', {
            method: 'post',
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw Error(response.statusText);
        }

        response = await response.json();

        // reset the form
        document.querySelector('.todo-input').value = '';
    }

    return (
        <form onSubmit={saveTask}>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                showTimeSelect
                minDate={new Date()}
                dateFormat="Y-MM-dd h:mm aa"
            />
            <input type="text" className="todo-input" onChange={e => setTask(e.target.value)} required/>
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select className="filter-todo" onChange={e => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;