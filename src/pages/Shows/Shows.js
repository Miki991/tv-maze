import React, {Component} from 'react';
import './Shows.css';

import {connect} from 'react-redux';

import {SearchShows} from '../../components/SearchShows/SearchShows';
import {ShowResult} from '../../components/ShowResult/ShowResult';
import {CastActor} from '../../components/CastActor/CastActor';



class Shows extends Component {
    state = {
        castClicked: false,
        tvShow: '',
        data: [],
        gotResults: false,
    }
    
    showName = (e) => {
            this.setState({
                tvShow: e.target.value,
            })
      
            e.key === 'Enter' && this.getResults();
    }
      
    getResults = () => {
        window.scrollTo({top: 500, behavior:'smooth'});

        fetch(`https://api.tvmaze.com/search/shows?q=${this.state.tvShow}`)
        .then(response => response.json())
        .then(data => {

            this.props.setShows(data);
 
            this.setState({
                castClicked: false,
                gotResults: true,
            })
        })
        .catch(error => {
            console.log(error);

            this.setState({
                castClicked: false,
                gotResults: true,
            })
        })
    }

    getCast = (e) => {
        fetch(`https://api.tvmaze.com/shows/${e.target.closest('.result').dataset.showid}/cast`)
        .then(response => response.json())
        .then(data => {
            window.scrollTo({top: 500, behavior: 'smooth'});
            
            this.setState ({
                castClicked: true,
                castResult: data.length ? data : false,
            })
        })
        .catch(error => {
            console.log(error);

            this.setState ({
                castClicked: true,
                castResult: false,
            })
        })
    }

    getBack = (e) => {
        window.scrollTo({top: 500, behavior: 'smooth'});

        this.setState({
            castClicked: false,
        })

        e.target.style.display = 'none';
    }

    displayShows = () => {
        if (this.props.shows.length) {
            return this.props.shows.map((show, i) => (
                <ShowResult data={show} 
                            key={i} 
                            getCast={this.getCast} />)) 
        } else if (this.state.gotResults) {
            return  <div className='no-matching-results'>No matching results.</div>
        } else {
            return <span></span>
        }
    }

    displayCast = () => {
        if (this.state.castResult) {
            return this.state.castResult.map((actor, i) => <CastActor actor={actor} key={i} />);
        } else {
            return  <div className='no-cast'>No cast available yet.</div>
        }
    }


    render () {
        return (
            <section className='results'>
                <SearchShows showName={this.showName} getResults={this.getResults} />
                {this.state.castClicked ? 
                this.displayCast() : this.displayShows()}
                <button className='back-to-results' 
                        onClick={this.getBack}
                        style={this.state.castClicked ? {display: `block`} : {display: `none`}}
                        >
                        &laquo; BACK
                </button>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        shows: state.shows
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setShows: (data) => dispatch({type: 'SET_SHOWS', shows: data})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Shows);