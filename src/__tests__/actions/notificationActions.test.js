import store from "../../store";
import notificationActions from '../../actions/notificationActions';
import { SET_NOTIFICATION_CONTENT } from '../../actionTypes/actionTypes';

describe('notificationActions', () => {
    it('should create an action to set Notification Content', () => {
        const notificationContent = 'Sample success message';
        const expectedAction = {
            type: SET_NOTIFICATION_CONTENT,
            payload: notificationContent
        };
        expect(notificationActions.setNotificationContent(notificationContent)).toEqual(expectedAction)
    });
});