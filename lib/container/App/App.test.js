"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _enzymeRedux = require("enzyme-redux");

var _reduxTestUtils = require("redux-test-utils");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("App Component", function () {
  it("should render App component", function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_App.default, null));
  });
});