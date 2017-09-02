import React, { Component } from 'react';
import { connect } from 'react-redux';

import { beersSearch } from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
        if(this.state.term){ 
            this.props.beersSearch(this.state.term);
        }
    }

    render() {
        return (
            <input
                placeholder="Get your favorite beer!"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
            />
        );
    }
}

function mapStateToProps({ beers }) {
    return { beers };
}

export default connect(mapStateToProps, { beersSearch })(SearchBar);
