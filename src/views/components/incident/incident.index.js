import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

import { updateDescription } from '../../routes/incident-details/incidentDetails.action';
import { StyledIncident, IncidentImage, IncidentTitle, SmallInfo } from './incident.style';

class Incident extends Component {

    gotoIncidentDetails = () => {
        this.props.updateDescription(this.props.incident);
        this.props.history.push(`incident/${this.props.incident.id}`);
    };

    formatDate(date) {
        return moment.unix(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
    };

    render() {
        return (
            this.props.incident.title &&
            <StyledIncident onClick={this.gotoIncidentDetails.bind(this)}>
                <IncidentImage>
                    <img src={this.props.incident.media.image_url} alt={this.props.incident.title} />
                </IncidentImage>
                <div>
                    <IncidentTitle>{this.props.incident.title}</IncidentTitle>
                    <p>{this.props.incident.description}</p>
                    <SmallInfo>Incident Location: {this.props.incident.address}</SmallInfo>
                    <SmallInfo>Occurred at : {this.formatDate(this.props.incident.occurred_at)}</SmallInfo>
                    <SmallInfo>Updated at : {this.formatDate(this.props.incident.updated_at)}</SmallInfo>
                </div>
            </StyledIncident>
        );
    }
}

Incident.propTypes = {
    updateDescription: PropTypes.func,
    incident: PropTypes.object
};

export default withRouter(connect(null, { updateDescription })(Incident));