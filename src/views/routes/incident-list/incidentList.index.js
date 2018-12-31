import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import { fetchIncidents } from './incidentList.action';
import Incident from '../../components/incident/incident';
import { StyledIncidentList } from './incidentList.style';
import SearchBox from '../../components/search-box/searchBox.index';
import Loader from '../../components/loader/loader.index';
import EmptyMessage from '../../components/empty-message/emptyMessage.index';
import { Button } from '../../components/button/button.index';

class IncidentList extends Component {
    state = {
        page: 1,
        per_page: 10
    }
    componentDidMount() {
        this.props.fetchIncidents({ page: this.state.page, per_page: this.state.per_page });
    }

    renderIncidentList = () => {
        return this.props.incidentOrder.map(id => {
            const incident = this.props.incidentList[id];
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

    paginate = () => {
        this.setState({ page: this.state.page + 1 }, () => {
            console.log('inside paginate: ', this.state.page)
            this.props.fetchIncidents({ page: this.state.page, per_page: this.state.per_page });
        })
    }

    render() {
        return (
            <>
                <SearchBox placeholder="Search Incident" onChange={this.debounceEvent(this.searchIncidents, 2000)}> </SearchBox>
                <StyledIncidentList>
                    {this.props.incidentList && this.renderIncidentList()}
                </StyledIncidentList>
                {!this.props.isLoading && this.props.incidentList.length === 0 && <EmptyMessage></EmptyMessage>}
                <Button block disabled={this.props.isLoading} onClick={this.paginate}>{this.props.isLoading ? <Loader></Loader> : 'Show More'}</Button>
            </>
        )
    }
}

function mapStateToPros({ incidentList, loader }) {
    return { incidentList: incidentList.list, incidentOrder: incidentList.order, isLoading: loader.isLoading }
}

export default connect(mapStateToPros, { fetchIncidents })(IncidentList);