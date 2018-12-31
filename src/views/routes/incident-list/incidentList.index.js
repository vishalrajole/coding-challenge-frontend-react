import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import { fetchIncidents } from './incidentList.action';
import Incident from '../../components/incident/incident';
import { StyledIncidentList } from './incidentList.style';
import SearchBox from '../../components/search-box/searchBox.index';
import Loader from '../../components/loader/loader.index';
import EmptyMessage from '../../components/empty-message/emptyMessage.index';

class IncidentList extends Component {

    componentDidMount() {
        this.props.fetchIncidents();
    }

    renderIncidentList = () => {
        return this.props.incidentList.map(incident => {
            return <Incident key={incident.id} incident={incident}></Incident>
        })
    }

    debounceEvent(...args) {
        this.debouncedEvent = debounce(...args);
        return e => {
            e.persist();
            return this.debouncedEvent(e);
        }
    }

    searchIncidents = e => {
        const query = e.target.value ? { query: e.target.value } : {};
        this.props.fetchIncidents(query)
    };

    render() {
        return (
            <>
                <SearchBox placeholder="Search Incident" onChange={this.debounceEvent(this.searchIncidents, 2000)}> </SearchBox>
                <StyledIncidentList>
                    {this.props.isLoading && <Loader></Loader>}
                    {!this.props.isLoading && this.props.incidentList && this.renderIncidentList()}
                    {!this.props.isLoading && this.props.incidentList.length === 0 && <EmptyMessage></EmptyMessage>}
                </StyledIncidentList>
            </>
        )
    }
}

function mapStateToPros({ incidentList, loader }) {
    return { incidentList, isLoading: loader.isLoading }
}

export default connect(mapStateToPros, { fetchIncidents })(IncidentList);