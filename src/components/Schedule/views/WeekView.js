import React, {Component} from 'react';
import assign from '../../../polyfills/assign';
import './WeekView.scss';
import ScheduleEvent from '../event/Event';
import calendar from 'calendar-js';
import moment from 'moment';

const cellHeight = 36;
const referenceHour = 7;

export default class WeekView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeWeek: []
		};
	}

	componentDidMount() {
		this.setActiveWeek();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.activeDate.format() !== this.props.activeDate.format()) {
			this.setActiveWeek();
		}
	}

	getDayEvents(day) {
		return this.props.events[day] || [];
	}

	setActiveWeek() { // get array of current week days
		const calendarData = this.getCalendarData();
		const week = calendarData.calendar.filter(weekArray => {
			return weekArray.find(day => {
				return ((day.day === this.props.activeDate.get('date')) && day.isInPrimaryMonth);
			});
		});

		this.setState({activeWeek: week[0]});
	}

	getCalendarData() {
		return calendar().detailed(
			this.props.activeDate.get('year'),
			this.props.activeDate.get('month'),
			(data, calendar) => { // transformer callback
				return Object.assign(
					{
						formattedDate: moment(data.date).format('MM/DD'),
						weekday: calendar.weekdays[data.index.day]
					},
					data
				);
			}
		);
	}

	getDayClassNames(data) {
		let className = 'schedule-view-week-day-cell';

		// set class for currently selected date
		if (this.props.activeDate.format('YYYY-MM-DD') === moment(data.date).format('YYYY-MM-DD')) {
			className += ' active';
		}

		return className;
	}

	renderTimeCells() { // left column hour labels
		const slots = [];
		for (let i = 1; i <= 24; i++) {
			slots.push(
				<div className="schedule-view-week-time-cell" key={i}>
					<span>{moment().set('hour', referenceHour).set('minutes', 0).add(i, 'hours').format('k:mm')}</span>
				</div>
			);
		}

		return slots;
	}

	renderEventSlots() { // 24 slots for hours
		const slots = [];
		for (let i = 0; i < 24; i++) {
			slots.push(<div key={i} className="schedule-view-week-day-cell"></div>);
		}

		return slots;
	}

	renderEvent(event, index) {
		const reference = moment(event.start).set('hour', referenceHour);
		const start = moment(event.start);
		const duration = moment.duration(start.diff(reference)).asHours();

		return (
			<ScheduleEvent key={index}
				color={event.color}
				status={event.status}
				title={event.title}
				offset={(duration * cellHeight) + 'px'}>
				{this.renderEventBody(event)}
			</ScheduleEvent>
		);
	}

	renderEventBody(event) {
		const start = moment(event.start);
		const end = moment(event.end);
		const duration = moment.duration(end.diff(start)).asHours();
		const eventBodyHeight = (cellHeight * (duration - 1));
		const content = (
			<div>
				<h4>Program</h4>
				<span>{event.group}</span>
				<h4>Time</h4>
				<span>{start.format('k:mm')} - {end.format('k:mm')}</span>
			</div>
		);

		if (duration < 4) { // show data in mouseover popup
			return (
				<div>
					<div className="schedule-event-body" style={{height: eventBodyHeight + 'px'}}></div>
					<div className="schedule-event-details">{content}</div>
				</div>
			);
		}

		return ( // show data in event body
			<div className="schedule-event-body" style={{height: eventBodyHeight + 'px'}}>
				{content}
			</div>
		);
	}

	render() {
		return (
			<div className="schedule-view-week">
				<header className="schedule-view-week-header">
					<div className="schedule-view-week-time-container">
						<div className="schedule-view-week-time-cell">
							<span>Time (HR)</span>
						</div>
					</div>
					<div className="schedule-view-week-days-container">
						{this.state.activeWeek.map((day, index) =>
							<div key={index}
								className={this.getDayClassNames(day)}
								onClick={() => this.props.setActiveDate(moment(day.date))}>
								<span>{day.weekday}</span>
								<span>{day.formattedDate}</span>
							</div>
						)}
					</div>
				</header>
				<div className="schedule-view-week-body">
					<div className="schedule-view-week-time-container">
						{this.renderTimeCells()}
					</div>
					<div className="schedule-view-week-days-container">
						{this.state.activeWeek.map((weekDay, index) =>
							<div className="schedule-view-week-day-column" key={index}>
								<div>
									{this.renderEventSlots()}
								</div>
								{this.getDayEvents(
									moment(weekDay.date).format('YYYY-MM-DD')
								)
								.filter(event => this.props.groupFilters[event.groupId])
								.map((event, index) =>
									this.renderEvent(event, index)
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}