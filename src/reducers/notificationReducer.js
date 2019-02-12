import { SET_NOTIFICATION_CONTENT } from '../actionTypes/actionTypes';

const notificationReducer = (state = null, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case SET_NOTIFICATION_CONTENT:
            state = action.payload;
            break;
    }
    return state;
};

export default notificationReducer;