import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
require('react-datepicker/dist/react-datepicker.css')

const DateTimePicker = (props) => {
    // let startDate = props.startDate;
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 0), 9)
    );

    return (
        <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            showTimeSelect
            minDate={new Date()}
            dateFormat="Y-MM-d h:mm aa"
        />
    )
}

export default DateTimePicker;