import React from 'react';
import './SearchSchedule.css';



const SearchSchedule = (props) => {
    const todayDate = () => {
        let today = new Date().toLocaleDateString();
        today = today.split('/');
        let year = today.splice(2, 1);
        today = year.concat(today);
        today = today.map(num => {
            return num.length === 1 ? 0+num : num;
        })

        return today = today.join('-');
        }


    return(
        <div className='search-schedule-form'>
            <span id='date-label'>Select date</span>
            <input type='date'  
                    defaultValue={todayDate()}
                    onChange={props.getDate} />
            <span id='country-label'>Select country</span>
            <select onChange={props.getCountry}>
                <option value='AU'>Australia</option>
                <option value='BR'>Brazil</option>
                <option value='CN'>China</option>
                <option value='FR'>France</option>
                <option value='JP'>Japan</option>
                <option value='RU'>Russian Federation</option>
                <option value='US'>USA</option>
                <option value='GB'>United Kingdom</option>
            </select>
            <input type='submit' 
                    className='search-btn get-schedule-btn'  
                    value='GET SCHEDULE' 
                    onClick={props.getResults} />
        </div>
    )
}


export {SearchSchedule}