"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionTypes = require("../actionTypes/actionTypes");

var notificationReducer = function notificationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  // eslint-disable-next-line default-case
  switch (action.type) {
    case _actionTypes.SET_NOTIFICATION_CONTENT:
      state = action.payload;
      break;
  }

  return state;
};

var _default = notificationReducer;
exports.default = _default;