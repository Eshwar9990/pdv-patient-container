"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("index Component", function () {
  it("should render index component", function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement("index", null));
  });
});