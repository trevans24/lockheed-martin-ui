import React, {Component} from 'react';
import './Sidebar.scss';
import Checkbox from '../../Selections/Checkbox';

const ScheduleSidebar = (props) => (
	<div className="schedule-sidebar">
		<h3>{props.title}</h3>
		<ul className="schedule-filters">
			{props.groups.map(group => 
				<li className={'schedule-fill-'+group.color}
					key={group.id}
					onClick={() => props.toggleGroup(group.id)}>
					<span>{group.title}</span>
					<Checkbox value={props.groupFilters[group.id]} />
				</li>
			)}
		</ul>
	</div>					
)

export default ScheduleSidebar;