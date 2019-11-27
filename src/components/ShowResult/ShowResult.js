import React from 'react';
import './ShowResult.css';

import {Link} from 'react-router-dom';



const ShowResult = (props) =>{
    return(
        <div className='result' 
             id={props.data.show.url} 
             data-showid={props.data.show.id}>
                <img src={props.data.show.image ? 
                props.data.show.image.medium : './images/no-img.png'} alt='show-img' />
                <div className='result-info'>
                    <h4>{props.data.show.name}</h4>
                    <div className='genres'>
                        {props.data.show.genres.map((genre,i)=>(
                            <span key={i} className='genre'>{genre}</span>
                        ))}
                    </div>
                    <p><b>Language: </b>{props.data.show.language}</p>
                    <p><b>Runtime: </b>{props.data.show.runtime} min.</p>
                    <p><b>Status: </b>{props.data.show.status}</p>
                    <p><b>Premiered: </b>{props.data.show.premiered}</p>
                    <div className='btns'>
                        <button className='search-btn' 
                                onClick={props.getCast}>SEE CAST</button>
                        <Link to={`/shows/${props.data.show.id}`}><button                   
                              className='search-btn'> MORE </button></Link>
                    </div>
                </div>
        </div>
    )
}


export {ShowResult}