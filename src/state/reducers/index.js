import { combineReducers } from 'redux';

import incidentListReducer from '../../views/routes/incident-list/incidentList.reducer';
import loaderReducer from '../../views/components/loader/loader.reducer';

const rootReducer = combineReducers({
    incidentList: incidentListReducer,
    loader: loaderReducer
});

export default rootReducer;
