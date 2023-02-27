import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Calender.css";
import Navbar1 from '../Navbar/Navbar1';
import Button from 'react-bootstrap/esm/Button';
import React from 'react';
function Calender() {
    const [date, setDate] = useState(new Date());
    const [da, setDa] = useState();

    const showDate = () => {
        setDa(date.toDateString());
        
    }

    return (
        <div>
            <div><Navbar1 /></div>
            <div className='head1'>
                <div className='calendar-container'>
                    <Calendar
                        onChange={setDate}
                        value={date}
                    //   selectRange={true}
                    />
                </div>
                {date.length > 0 ? (
                    <p className='text-center'>
                        <span className='bold'>Start:</span>{' '}
                        {date[0].toDateString()}
                        &nbsp;|&nbsp;
                        <span className='bold'>End:</span> {date[1].toDateString()}
                    </p>
                ) : (
                    <p className='text-center'>
                        {/* <span className='bold'>Default selected date:</span>{' '} */}
                        {/* {date.toDateString()} */}
                    </p>
                )}
                   {/* {date.toDateString()} */}
            <div className='register'>
                <h3>Select your date and click on submit</h3>
                <Button className='button' onClick={showDate}>Submit</Button>
                </div>
                {da}

            </div>
         
            
        </div>
    );
}

export default Calender;