import React, { Component } from 'react';
import {connect} from "react-redux";
import "react-notifications-component/dist/theme.css";

import notificationActions from '../../actions/notificationActions';
import { AppTemplate } from '../../components/AppTemplate/AppTemplate';

class App extends Component {
	constructor(props) {
		super(props);
		this.showNotification = this.showNotification.bind(this);
		this.notificationDOMRef = React.createRef();
	}

	componentWillReceiveProps(newProps) {
		console.log('Container props componentWillReceiveProps: ', newProps);
		if(newProps.notification != null) {
			this.showNotification(newProps.notification);
		}
		this.props.setNotificationContent(null);
	}

	// Notification popup on top-right corner
	showNotification(message) {
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
	
	render() {
		return <AppTemplate showNotification={this.showNotification.bind(this)} notificationDOMRef={this.notificationDOMRef} />;
	}
}

const mapStateToProps = (state) => {
    return {
		notification: state.notificationReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setNotificationContent: (newMessage) => {
            dispatch(notificationActions.setNotificationContent(newMessage));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);