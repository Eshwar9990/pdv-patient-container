import { SET_NOTIFICATION_CONTENT } from '../actionTypes/actionTypes';

const notificationActions = {
    setNotificationContent: function(message) {
        return {
            type: SET_NOTIFICATION_CONTENT,
            payload: message
        }
    }
};

export default notificationActions;