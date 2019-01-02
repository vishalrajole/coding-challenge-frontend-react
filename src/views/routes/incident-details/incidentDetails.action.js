import { ApiInstance } from '../../../state/utilities/api';
import { FETCH_LOCATIONS, UPDATE_DESCRIPTION, RESET_INCIDENT_DETAILS } from './incidentDetails.actionTypes';
import { isEmpty } from 'lodash';
import qs from 'querystring';

export const fetchLocations = (params) => async dispatch => {
    const res = await ApiInstance.get(`${process.env.REACT_APP_API_SERVER}locations${isEmpty(params) ? '' : `?${qs.stringify(params)}`}`);
    dispatch({ type: FETCH_LOCATIONS, payload: res.data.features });
};

export const updateDescription = (data) => async dispatch => {
    dispatch({ type: UPDATE_DESCRIPTION, payload: data });
}

export const resetIncidentDetails = () => async dispatch => {
    dispatch({ type: RESET_INCIDENT_DETAILS });
}