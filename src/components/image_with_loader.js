import React, { Component } from 'react'
import Loader from './loader';

export default class ImageWithLoader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };

        this.handleImageFinishLoading = this.handleImageFinishLoading.bind(this);
    }

    handleImageFinishLoading() {
        this.setState({ loaded: true });
    }

    render() {
        let loader;
        if(!this.state.loaded) {
            loader = <Loader />
        }
        return (
            <div className="img-container">
                {loader}
                <img
                    src={this.props.url}
                    onLoad={this.handleImageFinishLoading}
                    className="img-responsive"
                />
            </div>
        )
    }
}