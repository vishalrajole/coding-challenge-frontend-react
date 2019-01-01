import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import { connect } from 'react-redux';

import { fetchIncidents } from './incidentList.action';
import Incident from '../../components/incident/incident';
import { StyledIncidentList, Filter } from './incidentList.style';
import SearchBox from '../../components/search-box/searchBox.index';
import Loader from '../../components/loader/loader.index';
import EmptyMessage from '../../components/empty-message/emptyMessage.index';
import { Button } from '../../components/button/button.index';

class IncidentList extends Component {
    initialState = {
        page: 1,
        per_page: 10,
        startDate: null,
        endDate: null,
        searchQuery: '',

    };
    state = this.initialState;
    componentDidMount() {
        this.fetchIncidents();
    }

    renderIncidentList = () => {
        return this.props.incidentOrder.map(id => {
            const incident = this.props.incidentList[id];
            return <Incident key={incident.id} incident={incident}></Incident>
        })
    }

    handleInputChange = e => {
        this.setState({ searchQuery: e.target.value, page: 1 });
    };

    fetchIncidents = () => {
        const query = this.state.searchQuery || null;
        const occurred_after = moment(this.state.startDate).unix() || null;
        const occurred_before = moment(this.state.endDate).unix() || null;
        const filter = Object.assign(
            {},
            query ? { query } : null,
            occurred_after ? { occurred_after } : null,
            occurred_before ? { occurred_before } : null,
            { page: this.state.page, per_page: this.state.per_page }
        )
        this.props.fetchIncidents(filter);
    };

    paginate = () => {
        this.setState({ page: this.state.page + 1 }, () => {
            this.fetchIncidents();
        })
    }

    handleStartDateChange = (startDate) => {
        this.setState({ startDate, page: 1 });
    }
    handleEndDateChange = (endDate) => {
        this.setState({ endDate, page: 1 })
    }
    clearFilter = () => {
        this.setState(this.initialState, () => {
            this.fetchIncidents();
        });
    }
    render() {
        return (
            <>
                <Filter>
                    <SearchBox value={this.state.searchQuery} placeholder="Search Cases" onChange={this.handleInputChange}> </SearchBox>
                    <DatePicker
                        dateFormat="MMMM d, yyyy"
                        className="custom-date-picker"
                        placeholderText="Start Date"
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleStartDateChange} />
                    <DatePicker
                        dateFormat="MMMM d, yyyy"
                        className="custom-date-picker"
                        placeholderText="End Date"
                        minDate={this.state.startDate}
                        selected={this.state.endDate}
                        selectsEnd
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleEndDateChange} />
                    <Button disabled={this.props.isLoading} onClick={this.fetchIncidents}>Find Cases</Button>
                    <Button disabled={this.props.isLoading} onClick={this.clearFilter}> Clear </Button>
                </Filter>
                {this.props.isLoading && <Loader />}
                <StyledIncidentList>
                    {this.props.incidentList && this.renderIncidentList()}
                </StyledIncidentList>
                {!this.props.isLoading && !this.props.incidentOrder.length && <EmptyMessage></EmptyMessage>}
                {(this.props.incidentOrder.length > 0 && this.props.incidentOrder.length % this.state.per_page === 0) && <Button block disabled={this.props.isLoading} onClick={this.paginate}>{this.props.isLoading ? <Loader></Loader> : 'Show More'}</Button>}
            </>
        )
    }
}

function mapStateToPros({ incidentList, loader }) {
    return { incidentList: incidentList.list, incidentOrder: incidentList.order, isLoading: loader.isLoading }
}

export default connect(mapStateToPros, { fetchIncidents })(IncidentList);