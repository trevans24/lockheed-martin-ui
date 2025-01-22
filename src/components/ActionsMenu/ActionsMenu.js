import React, {Component} from 'react';
import './ActionsMenu.scss';

export default class Actions extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			active: false
		};

		this.setMenu = this.setMenu.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
	}

	handleOutsideClick(e) {
		if (this.node === e.target || !this.node.contains(e.target)) {
			this.setState({
				active: false
			});
		}
	}

	componentDidMount() {
	    document.addEventListener('click', this.handleOutsideClick);
	}

	componentWillUnmount() {
	    document.removeEventListener('click', this.handleOutsideClick);
	}

	setMenu(value) {
		this.setState({active: value});
	}

	render() {
		return (
			<div className="actions-container" ref={node => this.node = node}>
				<div className="actions-target" onClick={() => this.setMenu(true)}></div>
				<div onClick={() => this.setMenu(false)}
					className={'actions-menu ' + (this.state.active ? 'active' : '')}>
					{this.props.children}
				</div>
			</div>
		);
	}
}