import React, {Component} from 'react';
import './Table.scss';
import Pagination from '../Pagination/Pagination';
import Settings from '../Settings/Settings';

export default class TableWithFixedColumn extends Component {

	render() {
		return (
			<div className="table-container table-fixed-container">
				<div className="table-fixed-column-container">
					<table className="table-fixed">
						<thead>
							<tr>
								<th>
									<div>Name</div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div>Cecilia Barnett</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>Wesley Ellis</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>Caleb Mack</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>Dorothy Hicks</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>Danny Potter</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>Ricardo Luna</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>Aiden Fisher</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>Cynthia Wright</div>
								</td>
							</tr>
 							<tr><td></td></tr>
						</tbody>
					</table>
				</div>
				<div className="table-scroll-container">
	 				<table>
						<thead>
							<tr>
								<th>
									<div>Status</div>
								</th>
								<th>
									<div>Enrollment Date</div>
								</th>
								<th>
									<div>Program</div>
								</th>
								<th>
									<div>Rate Class</div>
								</th>
								<th>
									<div>Service Point ID</div>
								</th>
								<th>
									<div>Account ID</div>
								</th>
								<th>
									<div>DRUID</div>
								</th>
								<th>
									<div>Address</div>
								</th>
								<th>
									<div>City</div>
								</th>
								<th>
									<div>State</div>
								</th>
								<th>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div>Enrolled</div>
								</td>
								<td>
									<div>11/04/2017</div>
								</td>
								<td>
									<div>Program ABC</div>
								</td>
								<td>
									<div>NY 80 Commerical</div>
								</td>
								<td>
									<div>10000000010358</div>
								</td>
								<td>
									<div>123456789</div>
								</td>
								<td>
									<div>1145987621</div>
								</td>
								<td>
									<div>5010 Teresa Via</div>
								</td>
								<td>
									<div>Hunterville</div>
								</td>
								<td>
									<div>CA</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>Enrolled</div>
								</td>
								<td>
									<div>11/04/2017</div>
								</td>
								<td>
									<div>Program ABC</div>
								</td>
								<td>
									<div>NY 80 Commerical</div>
								</td>
								<td>
									<div>10000000010358</div>
								</td>
								<td>
									<div>123456789</div>
								</td>
								<td>
									<div>1145987621</div>
								</td>
								<td>
									<div>5010 Teresa Via</div>
								</td>
								<td>
									<div>Hunterville</div>
								</td>
								<td>
									<div>CA</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>Enrolled</div>
								</td>
								<td>
									<div>11/04/2017</div>
								</td>
								<td>
									<div>Program ABC</div>
								</td>
								<td>
									<div>NY 80 Commerical</div>
								</td>
								<td>
									<div>10000000010358</div>
								</td>
								<td>
									<div>123456789</div>
								</td>
								<td>
									<div>1145987621</div>
								</td>
								<td>
									<div>5010 Teresa Via</div>
								</td>
								<td>
									<div>Hunterville</div>
								</td>
								<td>
									<div>CA</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>Enrolled</div>
								</td>
								<td>
									<div>11/04/2017</div>
								</td>
								<td>
									<div>Program ABC</div>
								</td>
								<td>
									<div>NY 80 Commerical</div>
								</td>
								<td>
									<div>10000000010358</div>
								</td>
								<td>
									<div>123456789</div>
								</td>
								<td>
									<div>1145987621</div>
								</td>
								<td>
									<div>5010 Teresa Via</div>
								</td>
								<td>
									<div>Hunterville</div>
								</td>
								<td>
									<div>CA</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>Enrolled</div>
								</td>
								<td>
									<div>11/04/2017</div>
								</td>
								<td>
									<div>Program ABC</div>
								</td>
								<td>
									<div>NY 80 Commerical</div>
								</td>
								<td>
									<div>10000000010358</div>
								</td>
								<td>
									<div>123456789</div>
								</td>
								<td>
									<div>1145987621</div>
								</td>
								<td>
									<div>5010 Teresa Via</div>
								</td>
								<td>
									<div>Hunterville</div>
								</td>
								<td>
									<div>CA</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>Enrolled</div>
								</td>
								<td>
									<div>11/04/2017</div>
								</td>
								<td>
									<div>Program ABC</div>
								</td>
								<td>
									<div>NY 80 Commerical</div>
								</td>
								<td>
									<div>10000000010358</div>
								</td>
								<td>
									<div>123456789</div>
								</td>
								<td>
									<div>1145987621</div>
								</td>
								<td>
									<div>5010 Teresa Via</div>
								</td>
								<td>
									<div>Hunterville</div>
								</td>
								<td>
									<div>CA</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>Enrolled</div>
								</td>
								<td>
									<div>11/04/2017</div>
								</td>
								<td>
									<div>Program ABC</div>
								</td>
								<td>
									<div>NY 80 Commerical</div>
								</td>
								<td>
									<div>10000000010358</div>
								</td>
								<td>
									<div>123456789</div>
								</td>
								<td>
									<div>1145987621</div>
								</td>
								<td>
									<div>5010 Teresa Via</div>
								</td>
								<td>
									<div>Hunterville</div>
								</td>
								<td>
									<div>CA</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>Enrolled</div>
								</td>
								<td>
									<div>11/04/2017</div>
								</td>
								<td>
									<div>Program ABC</div>
								</td>
								<td>
									<div>NY 80 Commerical</div>
								</td>
								<td>
									<div>10000000010358</div>
								</td>
								<td>
									<div>123456789</div>
								</td>
								<td>
									<div>1145987621</div>
								</td>
								<td>
									<div>5010 Teresa Via</div>
								</td>
								<td>
									<div>Hunterville</div>
								</td>
								<td>
									<div>CA</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
