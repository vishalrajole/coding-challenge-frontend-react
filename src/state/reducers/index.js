import { combineReducers } from 'redux';

import incidentListReducer from '../../views/routes/incident-list/incidentList.reducer';

const rootReducer = combineReducers({
    incidentList: incidentListReducer
});

export default rootReducer;
