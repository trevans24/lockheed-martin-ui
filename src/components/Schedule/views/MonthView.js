import React, {Component} from 'react';
import './MonthView.scss';
import ScheduleEvent from '../event/Event';
import calendar from 'calendar-js';
import moment from 'moment';


export default class MonthView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeMonth: null
		};
	}

	componentDidMount() {
		this.setActiveMonth();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.activeDate.format() !== this.props.activeDate.format()) {
			this.setActiveMonth();
		}
	}

	setActiveMonth() {
		const month = this.getCalendarData();
		this.setState({activeMonth: month});
	}

	getCalendarData() {
		return calendar().detailed(
			this.props.activeDate.get('year'),
			this.props.activeDate.get('month')
		);
	}

	getDayClassNames(data) {
		let className = 'schedule-view-month-day-cell';

		// set class for days outside of active month
		if (!data.isInPrimaryMonth) {
			className += ' out-of-bounds';
		}

		// set class for today's date
		const today = new Date();
		const input = new Date(data.date);
		if (input.setHours(0,0,0,0) == today.setHours(0,0,0,0)) {
			className += ' today';
		}

		return className;
	}

	getDayEvents(day) {
		return this.props.events[day] || [];
	}

	renderEvent(event, index) {
		return (
			<ScheduleEvent key={index}
				color={event.color}
				status={event.status}
				title={event.title}>
				{this.renderEventDetails(event)}
			</ScheduleEvent>
		);
	}

	renderEventDetails(event) {
		const start = moment(event.start).format('k:mm');
		const end = moment(event.end).format('k:mm');
		return (
			<div className="schedule-event-details">
				<h4>Program</h4>
				<span>{event.group}</span>
				<h4>Time</h4>
				<span>{start} - {end}</span>
			</div>
		);
	}

	render() {
		if (!this.state.activeMonth) return null;

		return (
			<div className="schedule-view-month">
				<header className="schedule-view-month-header">
					{this.state.activeMonth.weekdays.map(weekday =>
						<div className="schedule-view-month-day-cell" key={weekday}>
							<span>{weekday}</span>
						</div>
					)}
				</header>
				<div className="schedule-view-month-body">
					{this.state.activeMonth.calendar.map((week, weekIndex) =>
						<div className="schedule-view-month-row" key={weekIndex}>
							{week.map((day, dayIndex) =>
								<div className={this.getDayClassNames(day)} key={dayIndex}>
									<span>{day.day}</span>
									<div>
										{this.getDayEvents(
											moment(day.date).format('YYYY-MM-DD')
										)
										.filter(event => this.props.groupFilters[event.groupId])
										.map((event, index) =>
											this.renderEvent(event, index)
										)}
									</div>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		);
	}
}
