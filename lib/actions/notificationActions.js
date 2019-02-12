"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionTypes = require("../actionTypes/actionTypes");

var notificationActions = {
  setNotificationContent: function setNotificationContent(message) {
    return {
      type: _actionTypes.SET_NOTIFICATION_CONTENT,
      payload: message
    };
  }
};
var _default = notificationActions;
exports.default = _default;