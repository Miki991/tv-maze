import React, {Component, Fragment} from 'react';
import './CastActor.css';


class CastActor extends Component {
    state = {
        showActor: true,
        roles: []
    }

    getInfo = (e) => {
        fetch(`https://api.tvmaze.com/people/${e.target.closest('.actor').id}/castcredits?embed=show`)
        .then(response => response.json())
        .then(data => {

            this.setState({
                roles: data,
                showActor: false
            })
        })
    }

    getYear = (role) => {
        let year = '';

        if (role._embedded.show.premiered) {
            year = role._embedded.show.premiered.split('-');
            year = `(${year[0]})`;
        }

        return year;
    }

    backToActor = () => {
        this.setState({ showActor: true })
    }

    render () {
        return(
            <Fragment>
                {this.state.showActor ?
                <div className='actor' id={this.props.actor.person.id}>
                    <img src={this.props.actor.person.image ? 
                    this.props.actor.person.image.medium : './images/no-img.png'} alt='show-img' />
                    <div className='actor-info'>
                        <h4>{this.props.actor.person.name}</h4>
                        <p><b>Birth date: </b>{this.props.actor.person.birthday}</p>
                        <p><b>Character: </b>{this.props.actor.character.name}</p>
                        <button className='search-btn'
                                onClick={this.getInfo}>
                            MORE ROLES
                        </button>
                    </div>
                </div>
                :
                <div className='actor'>
                    <div className='actor-info-roles'>
                        <ul>
                        {this.state.roles.map((role, i) => {
                            return (
                                <li key={i}>
                                    {role._embedded.show.name} {this.getYear(role)}
                                </li>
                            )
                        })}
                        </ul>
                        <button className='search-btn actor-roles-btn'
                                onClick={this.backToActor}>
                            BACK
                        </button>
                    </div>
                </div>}
            </Fragment>
        )
    }
}


export {CastActor}