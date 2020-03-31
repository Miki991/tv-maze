import React from 'react';
import './Episodes.css';

import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

import {Episode} from '../../components/Episode/Episode';
import Pagination from '../../components/Pagination/Pagination';


class Episodes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            pageOfItems: []
        }

        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        fetch(`https://api.tvmaze.com/shows/${this.props.match.params.id}/episodes`)
        .then(response => response.json())
        .then(data => {
            
            this.setState({
                data: data
            })
        })
        .catch(error => console.log(error))
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <section className='episodes'>
                {this.state.pageOfItems.map((item, i) => {
                    return <Episode data={item} 
                                    results={this.state.data}
                                    key={i} />
                })}
                <Pagination items={this.state.data} onChangePage={this.onChangePage} />
                <Link to='/shows'>
                    <button className='search-btn episodes-back-btn'
                            onClick={() => {window.scroll({top: 600, behavior: 'smooth'})}}>
                        SEARCH SHOWS
                    </button>
                </Link>
            </section>
        )
    }
}


export default withRouter(Episodes);