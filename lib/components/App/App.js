'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./App.css');

var _App = require('pdv-patient-list/lib/containers/App/App');

var _App2 = _interopRequireDefault(_App);

var _Routes = require('pdv-patient-data/lib/Routes');

var _Routes2 = _interopRequireDefault(_Routes);

var _reactNotificationsComponent = require('react-notifications-component');

var _reactNotificationsComponent2 = _interopRequireDefault(_reactNotificationsComponent);

require('react-notifications-component/dist/theme.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.showNotification = _this.showNotification.bind(_this);
		_this.notificationDOMRef = _react2.default.createRef();
		return _this;
	}

	_createClass(App, [{
		key: 'showNotification',
		value: function showNotification(message) {
			this.notificationDOMRef.current.addNotification({
				title: "Success!",
				message: message,
				type: "success",
				insert: "top",
				container: "top-right",
				animationIn: ["animated", "fadeIn"],
				animationOut: ["animated", "fadeOut"],
				dismiss: { duration: 2000 },
				dismissable: { click: true }
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'header' },
					_react2.default.createElement(
						'center',
						null,
						_react2.default.createElement('img', { src: 'https://www.cerner.com/-/media/cerner-media-united-states/home-page/cerner_rgb_standard_-horizontal.png', height: '45', className: 'logo', alt: 'Cerner_Logo' }),
						_react2.default.createElement(
							'span',
							{ className: 'app-heading' },
							'Patient Dashboard'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row contentBox' },
					_react2.default.createElement(
						'div',
						{ className: 'col-lg-5', style: { padding: "13px 5px" } },
						_react2.default.createElement(_App2.default, { notification: this.showNotification.bind(this) })
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-lg-7', style: { padding: 0 } },
						_react2.default.createElement(_Routes2.default, null)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'app-content' },
					_react2.default.createElement(_reactNotificationsComponent2.default, { ref: this.notificationDOMRef })
				)
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;