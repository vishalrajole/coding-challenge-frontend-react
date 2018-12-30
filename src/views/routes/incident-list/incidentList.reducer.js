import { FETCH_INCIDENTS } from './incidentList.actionTypes';

const initialState = [];

export default function (state = initialState, action) {
    console.log("into reducers", action);
    switch (action.type) {
        case FETCH_INCIDENTS:
            return action.payload;
        default:
            return state;
    }
}