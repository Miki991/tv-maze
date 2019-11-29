import React from 'react';
import './Summary.css';

import Loader from '../../components/Loader/Loader';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';


class Summary extends React.Component {
    state = {
        data: '',
    }

    componentDidMount() {
        fetch(`https://api.tvmaze.com/shows/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(data => {

            this.setState({
                data: data,
            })
        })
    }

    render() {
        let summary = this.state.data.summary;
            
        return (
            this.state.data ? 
            <div className='summary'>
                <img src={this.state.data.image ? this.state.data.image.medium: '/images/no-img.png'} 
                     alt='show img'/>
                <div className='summary-info'>
                    {this.state.data.summary ? 
                    <div dangerouslySetInnerHTML={{ __html: summary }} />  : 'No summary available yet.'}
                    <div className='summary-btns'>
                        <Link to={`/shows/${this.props.match.params.id}/episodes`}>
                                <button className='search-btn'>
                                    GET EPISODES
                                </button>
                        </Link>
                        <Link to='/shows'>
                            <button className='search-btn'>&laquo; SEARCH SHOWS</button>
                        </Link>
                    </div>
                </div>
            </div>
            :
            <Loader />
        )
    }
}


export default withRouter(Summary)