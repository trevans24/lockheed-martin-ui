import React, {Component} from 'react';
import Actions from '../ActionsMenu/ActionsMenu';
import trash from '../../assets/img/Trash.png';
import edit from '../../assets/img/Edit.png';

export default class TableWithRowActions extends Component {
	render() {
		return (
			<div className="table-container">
				<table>
					<thead>
						<tr>
							<th>
								<div>Name</div>
							</th>
							<th>
								<div>Date</div>
							</th>
							<th>
								<div></div>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div>New Year's Day</div>
							</td>
							<td>
								<div>Jan 1</div>
							</td>
							<td>
								<div>
									<Actions>
										<div>
											{<img src={edit} />}
											<span>Edit</span>
										</div>
										<div>
											{<img src={trash} />}
											<span>Delete</span>
										</div>
									</Actions>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div>Martin Luther King Jr. Day</div>
							</td>
							<td>
								<div>Jan 15</div>
							</td>
							<td>
								<div>
									<Actions>
										<div>
											{<img src={edit} />}
											<span>Edit</span>
										</div>
										<div>
											{<img src={trash} />}
											<span>Delete</span>
										</div>
									</Actions>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}