import React from 'react';
import './Header.css';

import {NavLink, Link} from 'react-router-dom';


const Header = (props) => {
    const visitSite = () => {
        window.open('https://www.tvmaze.com/', '_blank');
    }

    const renderNav = () => {
        let links = [];

        for (let link in props.links) {
            links.push({
                page: link,
                link: props.links[link],
            })
        }
        return links;
    }

    const scrollDown = () => {
        window.scroll({top: 500, behavior: 'smooth'});
    }

    return (
        <header>
            <div className='inner-header'>
                <Link to='/' exact='true'>
                    <img src='./images/tvm-logo.png' 
                        alt='heading' 
                        className='header-heading' />
                </Link>
                <nav>
                    <ul>
                        {renderNav().map(link => (
                            <li key={link.link} onClick={scrollDown}>
                                <NavLink to={link.link} exact={true}>{link.page}</NavLink>
                            </li>))}
                    </ul>
                </nav>
                <img src='/images/nice-day.png' 
                     alt='logo' 
                     className='header-logo' 
                     onClick={visitSite} />
            </div>
        </header>
    )
}


export {Header}