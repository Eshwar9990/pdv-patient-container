"use strict";

var _store = _interopRequireDefault(require("../../store"));

var _notificationActions = _interopRequireDefault(require("../../actions/notificationActions"));

var _actionTypes = require("../../actionTypes/actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('notificationActions', function () {
  it('should create an action to set Notification Content', function () {
    var notificationContent = 'Sample success message';
    var expectedAction = {
      type: _actionTypes.SET_NOTIFICATION_CONTENT,
      payload: notificationContent
    };
    expect(_notificationActions.default.setNotificationContent(notificationContent)).toEqual(expectedAction);
  });
});