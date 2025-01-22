import React, {Component} from 'react';
import assign from '../../polyfills/assign';
import './Notifications.scss';
import Notification from './Notification';
import data from './notifications.json';

export default class Notifications extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			alert: "notification-alert",
			newNotification: 'background',
			notificationAlert: "notification-alert",
			notifications: data.notifications
		};

		this.remove = this.remove.bind(this);
		this.toggleDropdown = this.toggleDropdown.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
	}

	componentDidMount() {
	  document.addEventListener('click', this.handleOutsideClick);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleOutsideClick);
	}

	// Toggle dropdown
	toggleDropdown() {
	  this.setState({
	    open: !this.state.open
	  });
	  if(this.state.open === false) {
	    this.setState({
	      alert: 'hide'
	    });
	  }
	  else if(this.state.open === true) {
	    this.setState({
	      newNotification: '',
	      notificationAlert: 'hide'
	    });
	  }
	}

	remove(i) {
	  const state = Object.assign({}, this.state);
	  state.notifications.splice(i, 1);
	  this.setState(state);
	}

	handleOutsideClick(e) {
		if (this.node === e.target || !this.node.contains(e.target)) {
			this.setState({
				open: false
			});
		}
	}
	
	render() {
		return (
			<div ref={node => this.node = node}>
				<button className={'navbar-icon' + (this.state.open ? ' background' : '')} onClick={this.toggleDropdown}></button>
				<div className={this.state.alert}>{this.state.notifications.length}</div>
				{this.state.open ? <div className="icon-dropdown">
				  <div className="notifications">
				    <div className="title-bar">
				      <h3 className="body-copy">Notifications</h3>
				      <div className={this.state.notificationAlert}>{this.state.notifications.length}</div>
				    </div>
				    {this.state.notifications.map((notification, i) => {
				      return <Notification
				        className={this.state.newNotification}
				        title={notification.title}
				        date={notification.date}
				        body={notification.body}
				        close={this.remove}
				        index={i}
				        key={i}
				      />
				    })}
				  </div>
				</div>
				: null
				}
			</div>
		);
	}	
}