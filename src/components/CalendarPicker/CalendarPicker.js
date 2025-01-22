import React, {Component} from 'react';
import assign from '../../polyfills/assign';
import './CalendarPicker.scss';
import moment from 'moment';
import calendar from 'calendar-js';
import calendarIcon from '../../assets/img/calendar.svg';

class CalendarPicker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			calendarVisible: false,
			activeMonth: new moment(), // start in current month
			calendarData: null
		};

		this.handleOutsideClick = this.handleOutsideClick.bind(this);
	}

	componentDidMount() {
		const calendar = this.getCalendarData();
		this.setState({calendarData: calendar});
	 	// for click outside to close
	    document.addEventListener('click', this.handleOutsideClick);
	}

	componentWillUnmount() {
	    document.removeEventListener('click', this.handleOutsideClick);
	}

	componentDidUpdate(prevProps) {
		if (!moment.isMoment(prevProps.value)) return;
		if ((prevProps.value.format() !== this.props.value.format())) {
			const calendar = this.getCalendarData(
				this.props.value.get('year'),
				this.props.value.get('month')
			);

			this.setState(
				Object.assign(
					{},
					this.state,
					{
						calendarData: calendar,
						activeMonth: this.props.value
					}
				)
			);
		}
	}

	getCalendarData(year = this.state.activeMonth.get('year'), month = this.state.activeMonth.get('month')) {
		return calendar().detailed(year, month);
	}

	getFormattedValue(value) {
		return value
			? moment(this.props.value).format('MMMM Do, YYYY')
			: '';
	}

	setValue(date) {
		this.setCalendarVisibility(false);
		this.props.setValue(date.format('YYYY-MM-DD'));
	}

	setCalendarVisibility(value) {
		this.setState(
			Object.assign({}, this.state, {calendarVisible: value})
		);
	}

	getPickerClassName() {
		let className = this.props.inverse
			? 'calendar-picker-inverse'
			: 'calendar-picker';

		return className += this.state.calendarVisible
			? ' calendar-picker-active'
			: '';
	}

	getInputClassName() {
		let className = 'calendar-picker-input-container';
		if (this.props.inverse) className += ' calendar-picker-input-container-inverse';
		return className;
	}

	getDayCellClassName(day) {
		let className = 'calendar-picker-body-cell';
		const date = moment(day.date).format('YYYY-MM-DD');

		// highlight selected date grey
		if (date === this.props.value) {
			className += ' calendar-picker-body-cell-selected';
		}

		// highlight current date blue
		if (date === moment().format('YYYY-MM-DD')) {
			className += ' calendar-picker-body-cell-today';
		}

		return className;
	}


	handleOutsideClick(e) {
		if (this.node === e.target || !this.node.contains(e.target)) {
			this.setCalendarVisibility(false);
		}
	}

	handleIntervalChange(amount) {
		const date = this.state.activeMonth.clone().add(amount, 'month');		
		const calendar = this.getCalendarData(
			date.get('year'),
			date.get('month')
		);

		this.setState(
			Object.assign({}, this.state, {activeMonth: date, calendarData: calendar})
		);
	}

	renderInput() {
		return (
			<div className={this.getInputClassName()}>
				<input
					type="text"
					placeholder="Select Date"
					value={this.getFormattedValue(this.props.value)}
					readOnly
					onFocus={() => this.setCalendarVisibility(true)} />
				<img src={calendarIcon} />
				{this.renderCloseIcon()}
			</div>
		);
	}

	renderCloseIcon() {
		if (!this.state.calendarVisible) return null;

		return (
			<svg width="12" height="9" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg" onClick={() => this.setCalendarVisibility(false)}>
				<path fill={this.props.inverse ? '#FFF' : '#000'} transform="rotate(-180 102.5 10.469)" d="M204.063 16l.937.938-4 4-4-4 .938-.938L201 19.063z"/>
			</svg>
		);
	}

	renderWeekDays() {
		return (
			<div className="calendar-picker-body-row">
				{this.state.calendarData.weekdaysAbbr.map((weekDay, weekDayIndex) =>
					<div className="calendar-picker-body-cell" key={'weekday-'+weekDayIndex}>
						<span>{weekDay.substring(0, 2)}</span>
					</div>
				)}
			</div>
		);
	}

	renderCalendar() {
		if (!this.state.calendarData) return null;

		return (
			<div className="calendar-picker-body">
				{this.renderWeekDays()}
				{this.state.calendarData.calendar.map((week, weekIndex) =>
					<div className="calendar-picker-body-row" key={weekIndex}>
						{week.map((day, dayIndex) =>
							<div onClick={() => this.setValue(moment(day.date))} className={this.getDayCellClassName(day)} key={dayIndex}>
								<span>{day.day}</span>
							</div>
						)}
					</div>
				)}
			</div>
		);
	}

	renderChangeIcon() {
		if (this.props.inverse) {
			return (
				<svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1">
				    <g stroke="none" strokeWidth="1" fill="none">
				        <polygon fill="#FFFFFF" transform="translate(5.000000, 8.000000) scale(-1, 1) translate(-5.000000, -8.000000) " points="0 1.62 1.68229167 0 10 8 10 8 10 8 1.68229167 16 0 14.38 6.63020833 8"></polygon>
				    </g>
				</svg>
			);
		}

		return (
			<svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1">
			    <g stroke="none" strokeWidth="1" fill="none">
			        <polygon fill="#666666" transform="translate(5.000000, 8.000000) scale(-1, 1) translate(-5.000000, -8.000000) " points="0 1.62 1.68229167 0 10 8 10 8 10 8 1.68229167 16 0 14.38 6.63020833 8"></polygon>
			    </g>
			</svg>			
		);
	}

	render() {
		return (
			<div className="calendar-picker-container" ref={node => this.node = node}>
				{this.renderInput()}
				<div className={this.getPickerClassName()}>
					<header className="calendar-picker-header">
						<div onClick={(e) => this.handleIntervalChange(-1)}>
							{this.renderChangeIcon()}
						</div>
						<span>{moment(this.state.activeMonth).format('MMM YYYY')}</span>
						<div onClick={(e) => this.handleIntervalChange(1)}>
							{this.renderChangeIcon()}
						</div>
					</header>
					{this.renderCalendar()}
				</div>
			</div>
		);
	}
}

export default CalendarPicker;