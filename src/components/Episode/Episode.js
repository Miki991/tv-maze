import React from 'react';
import './Episode.css';

const Episode = (props) => {
    let summary = props.data.summary;

    return (
        <div className='episode'>
            <img src={props.data.image ? props.data.image.medium : '../../images/no-img.png'} alt='poster' />
            <div className='episode-info'>
                <p className='episode-name'>{props.data.name}</p>
                <p>
                    <b>Season</b>: {props.data.season},
                    <b> Episode</b>: {props.data.number},
                    <b> Airdate</b>: {props.data.airdate}
                </p>
                {props.data.summary ?
                <p>
                    <b>Summary</b>: <span dangerouslySetInnerHTML={{ __html: summary }} /> 
                </p> : null}
            </div>
        </div>
    )
}


export {Episode};