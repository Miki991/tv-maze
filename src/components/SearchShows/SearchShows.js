import React, {Component} from 'react';
import './SearchShows.css';


class SearchShows extends Component {
    render () {
        return (
            <div className='search-field'>
                <input type='text' 
                       placeholder='SEARCH TV SHOW' 
                       onKeyUp={this.props.showName} />
                <button className='search-btn'
                        onClick={this.props.getResults}>GET RESULTS</button>
            </div>
        )
    }
}


export {SearchShows}