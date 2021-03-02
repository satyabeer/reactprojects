import React, { useState } from 'react'
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import DateTimePicker from './DateTimePicker';
require('react-datepicker/dist/react-datepicker.css')

const Form = (props) => {
    const [task, setTask] = useState('');
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
            task: task
        };

        let response = await fetch('http://localhost:80/gitphp/php/todoapp/addtask.php', {
            method: 'post',
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw Error(response.statusText);
        }

        response = await response.json();

        // reset the form
        document.querySelector('form').reset();

        // append the recently added field in table
        let table = document.querySelector('table');
        let lastrow = table.rows[ table.rows.length - 1 ];

        // create a new row and append it into table
        let row = table.insertRow(table.rows.length);

        // add sr no to row
        let srno = row.insertCell(0);

        // add task name
        let taskName = row.insertCell(1);

        // add task status
        let taskStatus = row.insertCell(2);

        // add task actions
        let taskAction = row.insertCell(3);
        let serialNo = parseInt(lastrow.querySelector('th').innerText) + 1;
        srno.outerHTML = "<th class='scope'>" + serialNo + " </th>";
        taskName.innerHTML = task;
        taskStatus.innerHTML = "Active";
        taskAction.innerHTML = lastrow.lastElementChild.innerHTML;

    }

    return (
        <div className="task-form-container hidden">
            <h1>Add Task</h1>
            <form className="form" onSubmit={saveTask}>
                <div className="form-group">
                    <label htmlFor="datetime">Date Time</label>
                    <DateTimePicker startDate={startDate} onchange={date => setStartDate(date)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="task">Task</label>
                    <input type="text" className="form-control col-md-3" onChange={e => setTask(e.target.value)} required/>
                </div>
                <button className="btn btn-primary" type="submit">Add</button>
            </form>
            <hr />
        </div>
    );
}

export default Form;