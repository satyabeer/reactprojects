import React from 'react'
import DatePicker from 'react-datepicker';
require('react-datepicker/dist/react-datepicker.css')

const DateTimePicker = (props) => {
    // let startDate = props.startDate;
    return (
        <DatePicker className="form-control col-md-3"
            selected={props.startDate}
            onChange={props.onchange}
            showTimeSelect
            minDate={new Date()}
            dateFormat="Y-MM-d h:mm aa"
        />
    )
}

export default DateTimePicker;