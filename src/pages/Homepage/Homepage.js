import React from 'react';
import './Homepage.css';

import Result from './Result';
import Loader from '../../components/Loader/Loader';

import {connect} from 'react-redux';


class Homepage extends React.Component {
    componentDidMount () {
        fetch(`https://api.tvmaze.com/schedule?country=US`)
        .then(response => response.json())
        .then(data => {

            this.props.getSchedule(data)
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.props.schedule.length ? 
                <section className='homepage-schedule'>
                    <h1>Schedule for today</h1>
                    {this.props.schedule.map((show,i) => {
                        return <Result key={i}
                                       data={show} />
                    })}
                </section>
                :
                <Loader />}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        schedule: state.schedule
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSchedule: (data) => dispatch({type: 'SET_SCHEDULE', schedule: data})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);