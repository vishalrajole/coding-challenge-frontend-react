import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { updateDescription } from '../../routes/incident-details/incidentDetails.action';
import { StyledIncident, IncidentImage, IncidentTitle, SmallInfo } from './incident.style';

class Incident extends Component {
    gotoIncidentDetails = () => {
        this.props.updateDescription(this.props.incident);
        this.props.history.push(`incident/${this.props.incident.id}`);
    }

    render() {
        return (
            this.props.incident.title &&
            <StyledIncident onClick={this.gotoIncidentDetails.bind(this)}>
                <IncidentImage>
                    <img src={this.props.incident.media.image_url} alt={this.props.incident.media.image_url} />
                </IncidentImage>
                <div>
                    <IncidentTitle>{this.props.incident.title}</IncidentTitle>
                    <p>{this.props.incident.description}</p>
                    <SmallInfo>{moment.unix(this.props.incident.occurred_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}</SmallInfo>
                </div>
            </StyledIncident>
        );
    }
}

export default withRouter(connect(null, { updateDescription })(Incident));