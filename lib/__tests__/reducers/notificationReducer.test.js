"use strict";

var _notificationReducer = _interopRequireDefault(require("../../reducers/notificationReducer"));

var _actionTypes = require("../../actionTypes/actionTypes");

var _expect = _interopRequireDefault(require("expect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('notificationReducer', function () {
  it('check for SET_NOTIFICATION_CONTENT', function () {
    var setNotificationAction = {
      type: _actionTypes.SET_NOTIFICATION_CONTENT,
      payload: {
        1: "a"
      }
    };
    var expectedValue = {
      1: "a"
    };
    (0, _expect.default)((0, _notificationReducer.default)(null, setNotificationAction)).toEqual(expectedValue);
  });
});