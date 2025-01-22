import React, {Component} from 'react';
import './Header.scss';
import moment from 'moment';
import chevronLeft from '../../../assets/img/chevron-left-grey.svg';
import chevronRight from '../../../assets/img/chevron-right-grey.svg';
import CalendarPicker from '../../CalendarPicker/CalendarPicker';

export default class ScheduleHeader extends Component {
	constructor(props) {
		super(props);

		this.pickDate = this.pickDate.bind(this);

	}

	renderDate() {
		return this.props.view === 'week'
			? this.props.activeDate.format('MMMM Do, YYYY')
			: this.props.activeDate.format('MMMM, YYYY');
	}

	handleIntervalChange(amount) {
		const date = this.props.activeDate.clone();
		const interval = this.props.view === 'month' ? 'month' : 'week';
		date.add(amount, interval);
		this.props.setActiveDate(date);
	}

	pickDate(date) {
		this.props.setActiveDate(moment(date));
	}

	render() {
		return (
			<header className="schedule-header">
				<div className="schedule-header-view-controls">
					<button onClick={() => this.props.setView('week')}
						className={'schedule-header-button' + (this.props.view === 'week' ? ' active' : '')}>
						Week
					</button>
					<button onClick={() => this.props.setView('month')}
						className={'schedule-header-button' + (this.props.view === 'month' ? ' active' : '')}>
						Month
					</button>
				</div>
				<div className="schedule-header-date-controls">
					<img src={chevronLeft} onClick={() => this.handleIntervalChange(-1)} />
					<span>{this.renderDate()}</span>
					<img src={chevronRight} onClick={() => this.handleIntervalChange(1)} />
				</div>
				<div className="schedule-header-calendar-picker">
					<CalendarPicker value={this.props.activeDate} setValue={this.pickDate} />
				</div>
				<button className="schedule-header-button create-event">Create Event</button>
			</header>
		);
	}
}
