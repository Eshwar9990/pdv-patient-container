"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _apiSaga = _interopRequireDefault(require("pdv-patient-list/lib/sagas/apiSaga"));

var _apiSaga2 = _interopRequireDefault(require("pdv-patient-data/lib/sagas/apiSaga"));

var _effects = require("redux-saga/effects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return [(0, _effects.fork)(_apiSaga.default), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
          (0, _effects.fork)(_apiSaga2.default)];

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}