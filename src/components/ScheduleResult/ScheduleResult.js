import React, {Component} from 'react';
import './ScheduleResult.css';


class ScheduleResult extends Component {
    render () {
        return (
            <div className='schedule-result'>
                <img src={this.props.data.show.image ? 
                this.props.data.show.image.medium : './images/no-img.png'} alt='show-img' />
                <div className='result-info'>
                    <h4>{this.props.data.show.name}</h4>
                    <div className='genres'>
                        {this.props.data.show.genres.map((genre,i)=>(
                            <span key={i} className='genre'>{genre}</span>
                        ))}
                    </div>
                    <p className='official-site' onClick={()=>{window.open(this.props.data.show.officialSite, '_blank')}}><b>Official site: </b>{this.props.data.show.officialSite}</p>
                    <p><b>Status: </b>{this.props.data.show.status}</p>
                    <p><b>Runtime: </b>{this.props.data.show.runtime} min.</p>
                    <p><b>Type: </b>{this.props.data.show.type}</p>
                    <p><b>Schedule: </b>{this.props.data.show.schedule.time} &nbsp; 
                    {this.props.data.show.schedule.days.map((day, i) => (
                        <span key={i} className='genre'>{day}</span>
                    ))}
                    </p>
                </div>
            </div>
        )
    }
}


export {ScheduleResult}