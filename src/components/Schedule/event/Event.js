import React, {Component} from 'react';
import './Event.scss';
import moreIcon from '../../../assets/img/more.svg';

export default class ScheduleEvent extends Component {

	getEventClass() {
		let className = (this.props.className || '');
		className += ' schedule-event';
		className += ' schedule-fill-' + (this.props.color || 'blue');

		// status based classes
		if (this.props.status === 'Reserved') {
			className += ' schedule-event-reserved';
		}

		return className;
	}

	render() {
		return (
			<div className={this.getEventClass()} style={{top: this.props.offset}}>
				<header className="schedule-event-header">
					<span className="schedule-event-status">{this.props.status}</span>
					<span className="schedule-event-title">{this.props.title}</span>
					<img src={moreIcon} />
				</header>
				{this.props.children}
			</div>
		);
	}
}