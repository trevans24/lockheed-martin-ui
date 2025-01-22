import React, {Component} from 'react';
import assign from '../../polyfills/assign';
import './Settings.scss';
import GearIcon from './GearIcon';
import close from '../../assets/img/close.svg';

export default class Settings extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false
		};

		this.setMenu = this.setMenu.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}

	setMenu(value) {
		this.setState({active: value});
	}

	handleSubmit() {
		this.setMenu(false);
		this.props.handleSubmit();
	}

	handleCancel() {
		this.setMenu(false);
		this.props.handleCancel()
	}

	renderIcon() {
		return this.state.active
			? <img src={close} />
			: <GearIcon />;
	}

	render() {
		return (
			<div className={'settings ' + (this.state.active ? 'active' : '')}>
				<div className="settings-icon" onClick={() => this.setMenu(!this.state.active)}>
					{this.renderIcon()}
				</div>
				<div className="settings-menu">
					<div className="settings-header">
						<span>{this.props.title}</span>
					</div>
					<div className="settings-body">
						{this.props.children}
					</div>
					<div className="settings-footer">
						<button onClick={this.handleCancel} className="settings-footer-close">Cancel</button>
						<button onClick={this.handleSubmit} className="settings-footer-apply">Apply</button>
					</div>
				</div>
			</div>
		);
	}
}