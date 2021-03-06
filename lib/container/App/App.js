"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactNotificationsComponent = _interopRequireDefault(require("react-notifications-component"));

require("react-notifications-component/dist/theme.css");

require("./App.css");

var _App2 = _interopRequireDefault(require("pdv-patient-list/lib/containers/App/App"));

var _Routes = _interopRequireDefault(require("pdv-patient-data/lib/Routes"));

var _notificationActions = _interopRequireDefault(require("../../actions/notificationActions"));

var _cerner_logo = _interopRequireDefault(require("../../assets/cerner_logo.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.showNotification = _this.showNotification.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.notificationDOMRef = _react.default.createRef();
    return _this;
  }

  _createClass(App, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      console.log('Container props componentWillReceiveProps: ', newProps);

      if (newProps.notification != null) {
        this.showNotification(newProps.notification);
      }

      this.props.setNotificationContent(null);
    } // Notification popup on top-right corner.

  }, {
    key: "showNotification",
    value: function showNotification(message) {
      this.notificationDOMRef.current.addNotification({
        title: "Success!",
        message: message,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000
        },
        dismissable: {
          click: true
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "header"
      }, _react.default.createElement("center", null, _react.default.createElement("img", {
        src: _cerner_logo.default,
        height: "45",
        className: "logo",
        alt: "Cerner_Logo"
      }), _react.default.createElement("span", {
        className: "app-heading"
      }, "Patient Dashboard"))), _react.default.createElement("div", {
        className: "row contentBox"
      }, _react.default.createElement("div", {
        className: "col-lg-4 col-md-4 col-sm-12 col-xs-12",
        style: {
          padding: "4px"
        }
      }, _react.default.createElement(_App2.default, {
        notification: this.showNotification.bind(this)
      })), _react.default.createElement("div", {
        className: "col-lg-8 col-md-8 col-sm-12 col-xs-12 patientDataContainer"
      }, _react.default.createElement(_Routes.default, null))), _react.default.createElement("div", {
        className: "app-content"
      }, _react.default.createElement(_reactNotificationsComponent.default, {
        ref: this.notificationDOMRef
      })));
    }
  }]);

  return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    notification: state.notificationReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setNotificationContent: function setNotificationContent(newMessage) {
      dispatch(_notificationActions.default.setNotificationContent(newMessage));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

exports.default = _default;