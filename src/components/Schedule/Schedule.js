import React, {Component} from 'react';
import './Schedule.css';

import {SearchSchedule} from '../SearchSchedule/SearchSchedule';
import {ScheduleResult} from '../ScheduleResult/ScheduleResult';


class Schedule extends Component {
    state = {
        data: [],
        country: '',
        date: '',
        requestSent: false,
    }

    getResults = () => {
        fetch(`https://api.tvmaze.com/schedule?country=${this.state.country}&date=${this.state.date}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data.length ? data : [],
                requestSent: true,
            })

            window.scrollTo({top: 500, behavior: 'smooth'});
        })
        .catch(error => {
            console.log(error);

            this.setState({
                data: []
            })
        })
    }

    getDate = (e) => {
        this.setState({
            date: e.target.value,
        })
    }

    getCountry = (e) => {
        this.setState({
            country: e.target.value,
        })
    }

    displayResults = (data) => {
        if (data.length && this.state.requestSent) {
            return data.map((result, i) => {
                return <ScheduleResult data={result} key={i} />
            })
        } else if (data.length === 0 && this.state.requestSent) {
            return <div><i>No results available.</i></div>
        } else {
            return <span></span>
        }
    }

    render () {
        return (
            <section className='schedule'>
                <SearchSchedule getResults={this.getResults}
                                getDate={this.getDate}
                                getCountry={this.getCountry} />
                <div className='schedule-results'>
                    {this.displayResults(this.state.data)}
                </div>
            </section>
        )
    }
}


export {Schedule}