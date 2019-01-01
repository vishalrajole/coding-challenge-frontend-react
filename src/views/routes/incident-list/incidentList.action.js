import { ApiInstance } from '../../../state/utilities/api';
import { FETCH_INCIDENTS } from './incidentList.actionTypes';
import { isEmpty } from 'lodash';
import qs from 'querystring';

export const fetchIncidents = (params) => async dispatch => {
    const res = await ApiInstance.get(`https://bikewise.org/api/v2/incidents${isEmpty(params) ? '' : `?${qs.stringify(params)}`}`);
    dispatch({ type: FETCH_INCIDENTS, payload: { list: res.data.incidents, page: params.page } });
};