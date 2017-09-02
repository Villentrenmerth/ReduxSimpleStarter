import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBeers } from '../actions';
import Image from './image_with_loader';
import SearchBar from './search_bar';

class BeersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1
        };

        this.handleScroll = _.throttle(this.handleScroll.bind(this), 2000);

    }

    componentDidMount() {
        this.props.fetchBeers();
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    renderList() {
        console.log(Object.keys(this.props.beers).length);
        return _.map(this.props.beers, (beerData) => {
            return (
                <li key={beerData.id}>
                    <Link to={`/beers/${beerData.id}`}>
                        <Image url={beerData.image_url}/>
                        <div className="beer-info">
                            <h4>{beerData.name}</h4>
                            <hr />
                            <p>{beerData.tagline}</p>
                        </div>
                    </Link>
                </li>
            )
        });
    }

    handleFetch() {
        this.setState({
            page: this.state.page + 1
        });
        this.props.fetchBeers(this.state.page);
    }

    handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            this.handleFetch();
        }
    }

    onSearch() {
        this.setState({
            page: 1
        })
    }

    render() {
        return (
            <div>
                <SearchBar handleSearch={this.onSearch}/>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ beers }) {
    return { beers };
}

export default connect(mapStateToProps, { fetchBeers })(BeersList);