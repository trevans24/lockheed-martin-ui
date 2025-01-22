import React, {Component} from 'react';
import assign from '../../polyfills/assign';
import './Table.scss';
import Pagination from '../Pagination/Pagination';
import Settings from '../Settings/Settings';
import Input from '../Inputs/Input';

export default class TableWithSearch extends Component {
	constructor(props) {
		super(props)

		this.state = {
			searchField: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		
	}

	handleInputChange(name, value) {
    const update = {};
    update[name] = value;
    this.setState(Object.assign({}, this.state, update));
  }

	render() {
		return (
			<div className="table-container">
				<div className="table-search">
					<header>
						<h3 className="header-2">Participants - </h3>
						<span className="body-copy"> 25 participating service points</span>
					</header>
					<form>
						<Input
	            type="search"
	            groupClass="search"
	            placeholder="Search"
	            name="searchField"
	            value={this.state.searchField}
	            onChange={this.handleInputChange} />
					</form>
				</div>
				<table>
					<thead>
						<tr>
							<th>
								<div>Name</div>
							</th>
							<th>
								<div>Service Points</div>
							</th>
							<th>
								<div>Druid</div>
							</th>
							<th>
								<div>Type</div>
							</th>
							<th>
								<div>Device</div>
							</th>
							<th>
								<div>Program</div>
							</th>
							<th>
								<div>Opt Out</div>
							</th>
							<th>
								<div>Predicted Reduction</div>
							</th>
							<th>
								<div>Actual Reduction</div>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div>Cecilia Barnett</div>
							</td>
							<td>
								<div>24601</div>
							</td>
							<td>
								<div>24601</div>
							</td>
							<td>
								<div>Customer</div>
							</td>
							<td>
								<div>On Off</div>
							</td>
							<td>
								<div>SmartAC</div>
							</td>
							<td>
								<div>No Opt</div>
							</td>
							<td>
								<div>2.0</div>
							</td>
							<td>
								<div>2.6</div>
							</td>
						</tr>
						<tr>
							<td>
								<div>Wesley Ellis</div>
							</td>
							<td>
								<div>12467</div>
							</td>
							<td>
								<div>12467</div>
							</td>
							<td>
								<div>Customer</div>
							</td>
							<td>
								<div>On Off</div>
							</td>
							<td>
								<div>SmartAC</div>
							</td>
							<td>
								<div>No Opt</div>
							</td>
							<td>
								<div>2.0</div>
							</td>
							<td>
								<div>2.6</div>
							</td>
						</tr>
						<tr>
							<td>
								<div>Caleb Mack</div>
							</td>
							<td>
								<div>32436</div>
							</td>
							<td>
								<div>32436</div>
							</td>
							<td>
								<div>Customer</div>
							</td>
							<td>
								<div>On Off</div>
							</td>
							<td>
								<div>SmartAC</div>
							</td>
							<td>
								<div>No Opt</div>
							</td>
							<td>
								<div>2.0</div>
							</td>
							<td>
								<div>2.6</div>
							</td>
						</tr>
						<tr>
							<td>
								<div>Dorothy Hicks</div>
							</td>
							<td>
								<div>56890</div>
							</td>
							<td>
								<div>56890</div>
							</td>
							<td>
								<div>Customer</div>
							</td>
							<td>
								<div>On Off</div>
							</td>
							<td>
								<div>SmartAC</div>
							</td>
							<td>
								<div>No Opt</div>
							</td>
							<td>
								<div>2.0</div>
							</td>
							<td>
								<div>2.6</div>
							</td>
						</tr>
						<tr>
							<td>
								<div>Danny Potter</div>
							</td>
							<td>
								<div>24681</div>
							</td>
							<td>
								<div>24681</div>
							</td>
							<td>
								<div>Customer</div>
							</td>
							<td>
								<div>On Off</div>
							</td>
							<td>
								<div>SmartAC</div>
							</td>
							<td>
								<div>No Opt</div>
							</td>
							<td>
								<div>2.0</div>
							</td>
							<td>
								<div>2.6</div>
							</td>
						</tr>
						<tr>
							<td>
								<div>Ricardo Luna</div>
							</td>
							<td>
								<div>12467</div>
							</td>
							<td>
								<div>12467</div>
							</td>
							<td>
								<div>Customer</div>
							</td>
							<td>
								<div>On Off</div>
							</td>
							<td>
								<div>SmartAC</div>
							</td>
							<td>
								<div>No Opt</div>
							</td>
							<td>
								<div>2.0</div>
							</td>
							<td>
								<div>2.6</div>
							</td>
						</tr>
						<tr>
							<td>
								<div>Aiden Fisher</div>
							</td>
							<td>
								<div>32436</div>
							</td>
							<td>
								<div>32436</div>
							</td>
							<td>
								<div>Customer</div>
							</td>
							<td>
								<div>On Off</div>
							</td>
							<td>
								<div>SmartAC</div>
							</td>
							<td>
								<div>No Opt</div>
							</td>
							<td>
								<div>2.0</div>
							</td>
							<td>
								<div>2.6</div>
							</td>
						</tr>
						<tr>
							<td>
								<div>Cynthia Wright</div>
							</td>
							<td>
								<div>56890</div>
							</td>
							<td>
								<div>56890</div>
							</td>
							<td>
								<div>Customer</div>
							</td>
							<td>
								<div>On Off</div>
							</td>
							<td>
								<div>SmartAC</div>
							</td>
							<td>
								<div>No Opt</div>
							</td>
							<td>
								<div>2.0</div>
							</td>
							<td>
								<div>2.6</div>
							</td>
						</tr>
						<tr>
							<td>
								<div>Nellie Lynch</div>
							</td>
							<td>
								<div>24681</div>
							</td>
							<td>
								<div>24681</div>
							</td>
							<td>
								<div>Customer</div>
							</td>
							<td>
								<div>On Off</div>
							</td>
							<td>
								<div>SmartAC</div>
							</td>
							<td>
								<div>No Opt</div>
							</td>
							<td>
								<div>2.0</div>
							</td>
							<td>
								<div>2.6</div>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colSpan="12">
								<div>
									<Pagination />
								</div>
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}
