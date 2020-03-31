import React from 'react';
import './Result.css';

import {Link} from 'react-router-dom';


const Result = (props) => {
    return (
        <div className='episode'>
            <div className='episode-info'>
                <Link to={`/shows/${props.data.show.id}`}>
                    <p className='episode-name'>
                       {props.data.show.name}
                    </p>
                </Link>
                <p style={{color: '#3C948B'}}>
                    {props.data.name}&nbsp;
                    <img src='images/camera.png' 
                         alt='tv' />
                </p>
                <p>
                    <b>Season</b>: {props.data.season}, 
                    <b> Episode</b>: {props.data.number},
                    <b> Airtime</b>: {props.data.airtime}
                </p>
            </div>
        </div>
    )
}


export default Result;