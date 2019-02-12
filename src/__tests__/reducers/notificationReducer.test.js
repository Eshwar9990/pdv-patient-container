import notificationReducer from '../../reducers/notificationReducer';
import { SET_NOTIFICATION_CONTENT } from '../../actionTypes/actionTypes';
import expect from 'expect';

describe('notificationReducer', () => {
    it('check for SET_NOTIFICATION_CONTENT', () => {
        const setNotificationAction = {
            type: SET_NOTIFICATION_CONTENT,
            payload: {
                1: "a"
            }
        };
        const expectedValue = {
            1: "a"
        }
        expect(notificationReducer(null, setNotificationAction)).toEqual(expectedValue)
    });
});