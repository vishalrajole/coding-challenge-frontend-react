import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { isEmpty } from 'lodash';

import GoogleMaps from '../../components/google-map/googlemap.index';

import { updateDescription, fetchLocations, resetIncidentDetails } from '../incident-details/incidentDetails.action';
import { MapWrapper } from './incidentDetails.style';
import Loader from '../../components/loader/loader.index';
class IncidentDetails extends Component {

    componentDidMount() {
        if (isEmpty(this.props.incidentDetails)) {
            return this.props.history.push('/');
        }
        this.props.fetchLocations({
            query: this.props.incidentDetails.description,
            incident_type: this.props.incidentDetails.type.toLowerCase()
        }).then(response => {
        }, (error) => {
            console.log('inside fetchLocation error: ', error);
        });
    }

    componentWillUnmount() {
        this.props.resetIncidentDetails();
    }

    render() {
        return (
            <>
                <h4>{this.props.incidentDetails.title}</h4>
                <p><b>Stolen </b>{moment.unix(this.props.incidentDetails.occurred_at).format("dddd, MMMM Do YYYY, h:mm:ss a")} <b>at </b>{this.props.incidentDetails.address}</p>

                <MapWrapper>
                    {this.props.incidentDetails.geometry &&
                        <GoogleMaps
                            id="myMap"
                            options={{
                                center: { lat: this.props.incidentDetails.geometry.coordinates[0], lng: this.props.incidentDetails.geometry.coordinates[1] },
                                zoom: 16
                            }}
                            onMapLoad={map => {
                                new window.google.maps.Marker({
                                    position: { lat: this.props.incidentDetails.geometry.coordinates[0], lng: this.props.incidentDetails.geometry.coordinates[1] },
                                    map: map
                                });
                            }}
                        >
                        </GoogleMaps>}
                    {!this.props.incidentDetails.geometry && !this.props.isLoading && <div>Location not found</div>}
                    {this.props.isLoading && <Loader />}
                </MapWrapper>
                <h4>Description Of Incident:</h4>
                <p>{this.props.incidentDetails.description}</p>

            </>
        )
    }
}


function mapStateToPros({ incidentDetails, loader }) {
    return { incidentDetails, isLoading: loader.isLoading }
}

export default connect(mapStateToPros, { updateDescription, fetchLocations, resetIncidentDetails })(IncidentDetails);