import React, { Component } from 'react';
import PropTypes from 'prop-types';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
class GoogleMaps extends Component {
    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this);
    };

    onScriptLoad() {
        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            this.props.options);
        this.props.onMapLoad(map);
    };

    componentDidMount() {
        if (!window.google) {
            var element = document.createElement('script');
            element.type = 'text/javascript';
            element.src = `https://maps.google.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(element, node);
            element.addEventListener('load', e => {
                this.onScriptLoad();
            });
        } else {
            this.onScriptLoad();
        }
    };

    render() {
        return <div style={{ width: (window.innerWidth - 40), height: 400 }} id={this.props.id} />
    }
}

GoogleMaps.propTypes = {
    id: PropTypes.string
};

export default GoogleMaps;
