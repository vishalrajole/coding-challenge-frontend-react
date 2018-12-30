import { FETCH_INCIDENTS } from './incidentList.actionTypes';

export default function (state = null, action) {
    console.log("into reducers", action);
    switch (action.type) {
        case FETCH_INCIDENTS:
            return action.payload;
        default:
            return state;
    }
}