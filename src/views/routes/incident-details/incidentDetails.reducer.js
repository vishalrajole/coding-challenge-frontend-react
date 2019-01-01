import { FETCH_LOCATIONS, UPDATE_DESCRIPTION, RESET_INCIDENT_DETAILS } from './incidentDetails.actionTypes';
import { filter } from 'lodash';
const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LOCATIONS:

            let temp = filter(action.payload, (incident) => {
                return incident.properties.id === state.id;
            })
            if (temp.length) {
                return { ...state, ...temp[0] };
            } else {
                return state;
            }

        case UPDATE_DESCRIPTION:
            return { ...state, ...action.payload };
        case RESET_INCIDENT_DETAILS:
            return initialState;
        default:
            return state;
    }
}