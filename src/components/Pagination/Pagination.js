import React, {Component} from 'react';
import './Pagination.scss';
import next from '../../assets/img/chevron-right-blue.svg';
import prev from '../../assets/img/chevron-left-blue.svg';

export default class Pagination extends Component {
	render() {
		return (
			<ul className="pagination">
				<li className="pagination-item pagination-item-control">
					<img src={prev} />
				</li>
				<li className="pagination-item pagination-item">1</li>
				<li className="pagination-item pagination-item-active">2</li>
				<li className="pagination-item">3</li>
				<li className="pagination-item">4</li>
				<li className="pagination-item pagination-item-ellipsis">...</li>
				<li className="pagination-item">10</li>
				<li className="pagination-item pagination-item-control">
					<img src={next} />
				</li>
			</ul>
		);
	}
}