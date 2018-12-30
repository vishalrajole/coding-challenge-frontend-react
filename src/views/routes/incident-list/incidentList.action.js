import axios from 'axios';
import { FETCH_INCIDENTS } from './incidentList.actionTypes';

export const fetchIncidents = () => async dispatch => {
    const res = await axios.get('https://bikewise.org/api/v2/incidents');
    dispatch({ type: FETCH_INCIDENTS, payload: res.data.incidents });
};