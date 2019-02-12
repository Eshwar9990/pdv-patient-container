"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reduxLogger = require("redux-logger");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _patientDataReducer = _interopRequireDefault(require("pdv-patient-list/lib/reducers/patientDataReducer"));

var _apiReducer = _interopRequireDefault(require("pdv-patient-list/lib/reducers/apiReducer"));

var _pageReducer = _interopRequireDefault(require("pdv-patient-list/lib/reducers/pageReducer"));

var _apiPdvDataReducer = _interopRequireDefault(require("pdv-patient-data/lib/reducers/apiPdvDataReducer"));

var _notificationReducer = _interopRequireDefault(require("./reducers/notificationReducer"));

var _sagas = _interopRequireDefault(require("./sagas/sagas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sagaMiddleware = (0, _reduxSaga.default)();

var _default = (0, _redux.createStore)((0, _redux.combineReducers)({
  patientDataReducer: _patientDataReducer.default,
  apiReducer: _apiReducer.default,
  pageReducer: _pageReducer.default,
  apiPdvDataReducer: _apiPdvDataReducer.default,
  notificationReducer: _notificationReducer.default
}), {}, (0, _redux.applyMiddleware)((0, _reduxLogger.createLogger)(), sagaMiddleware));

exports.default = _default;
sagaMiddleware.run(_sagas.default);