import { FETCH_INCIDENTS } from './incidentList.actionTypes';
import { keyBy, map } from 'lodash';
const initialState = {
    list: {},
    order: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_INCIDENTS:
            const order = map(action.payload.list, 'id');
            const list = keyBy(action.payload.list, 'id');
            let newList = {};
            let newOrder = []
            if (action.payload.page === 1) {
                newList = list;
                newOrder = order;
            } else {
                newList = { ...state.list, ...list };
                newOrder = [...state.order, ...order];
            }
            return { list: newList, order: newOrder };
        default:
            return state;
    }
}