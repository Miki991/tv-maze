import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer>
            Created with 
            <img src='images/heart.png' 
                 alt='heart' 
                 className='heart-img' /> 
            and <span className='react-js'>React.js</span> 
            <img src='images/react-logo.png' 
                alt='react logo' 
                className='react-img' />
        </footer>
    )
}


export {Footer};
