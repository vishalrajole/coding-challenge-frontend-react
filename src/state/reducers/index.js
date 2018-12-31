import { combineReducers } from 'redux';

import incidentListReducer from '../../views/routes/incident-list/incidentList.reducer';
import loaderReducer from '../../views/components/loader/loader.reducer';
import incidentDetailsReducer from '../../views/routes/incident-details/incidentDetails.reducer';

const rootReducer = combineReducers({
    incidentList: incidentListReducer,
    loader: loaderReducer,
    incidentDetails: incidentDetailsReducer
});

export default rootReducer;
