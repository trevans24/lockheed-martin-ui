import React, {Component} from 'react';
import assign from '../../polyfills/assign';
import fill from '../../polyfills/fill';
import find from '../../polyfills/find';
import moment from 'moment';

import './Schedule.scss';
import ScheduleHeader from './header/Header';
import ScheduleSidebar from './sidebar/Sidebar';
import WeekView from './views/WeekView';
import MonthView from './views/MonthView';

// set up filter toggles
function initFilters(eventData) {
	const filters = {};
	eventData.groups.forEach((group, i) => {
		filters[group.id] = true;
	});

	return filters;
}

// set up event data, index by YYYY-MM-DD
function initEvents(eventData) {
	const events = {};
	eventData.events.forEach(eventItem => {
		// clone event object to avoid mutating original
		const event = Object.assign({}, eventItem);
		const eventDay = moment(event.start).format('YYYY-MM-DD');
		
		// add group data to event (color/group title)
		const eventGroup = eventData.groups.find(group => eventItem.groupId == group.id);
		event.color = eventGroup.color;
		event.group = eventGroup.title;
		
		if (!events.hasOwnProperty(eventDay)) {
			events[eventDay] = [];
		}

		events[eventDay].push(event);
	});

	return events;
}

export default class Schedule extends Component {
	constructor(props) {
		super(props);

		this.state = {
			view: 'week',
			activeDate: (new moment()), // start with current date
			events: initEvents(this.props.eventData),
			groupFilters: initFilters(this.props.eventData)
		};

		this.setView = this.setView.bind(this);
		this.setActiveDate = this.setActiveDate.bind(this);
		this.toggleGroup = this.toggleGroup.bind(this);
	}

	renderScheduleView() {
		return this.state.view === 'week'
			? <WeekView
				activeDate={this.state.activeDate}
				setActiveDate={this.setActiveDate}
				events={this.state.events}
				groupFilters={this.state.groupFilters} />
			: <MonthView
				activeDate={this.state.activeDate}
				setActiveDate={this.setActiveDate}
				events={this.state.events}
				groupFilters={this.state.groupFilters} />;
	}

	setView(name = 'month') {
		this.setState(
			Object.assign({}, this.state, {view: name})
		);
	}

	setActiveDate(date) {
		this.setState(
			Object.assign({}, this.state, {activeDate: date})
		);
	}

	toggleGroup(id) {
		const state = Object.assign({}, this.state);
		state.groupFilters[id] = !(state.groupFilters[id]);
		this.setState(state);
	}
	
	render() {
		return (
			<div className="schedule-container">
				
				<ScheduleHeader
					setView={this.setView}
					view={this.state.view}
					setActiveDate={this.setActiveDate}
					activeDate={this.state.activeDate} />
				
				<div className="schedule-body">
					
					<ScheduleSidebar
						title="Programs"
						groups={this.props.eventData.groups}
						groupFilters={this.state.groupFilters}
						toggleGroup={this.toggleGroup} />

					<div className="schedule-view">
						{this.renderScheduleView()}
					</div>
					
				</div>
			</div>
		);
	}
}
