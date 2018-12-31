import { FETCH_INCIDENTS } from './incidentList.actionTypes';
import { keyBy, map } from 'lodash';
const initialState = {
    list: {},
    order: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_INCIDENTS:
            const order = map(action.payload, 'id');
            const list = keyBy(action.payload, 'id');
            const newList = { ...state.list, ...list };
            const newOrder = [...state.order, ...order]
            return { list: newList, order: newOrder };
        default:
            return state;
    }
}