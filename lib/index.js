"use strict";

require("@babel/polyfill");

require("core-js/es6/map");

require("core-js/es6/set");

require("raf/polyfill");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _App = _interopRequireDefault(require("./container/App/App"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react.default.createElement(_reactRedux.Provider, {
  store: _store.default
}, _react.default.createElement(_App.default, null)), window.document.getElementById('root') || document.createElement('div') // For testing purposes
);