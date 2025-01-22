import React, {Component} from 'react';
import './Profile.scss';

const profileData = {
  "user": {
    "name" : "Grace"
  }
}

export default class Profile extends Component {
	constructor(props) {
	  super(props)

	  this.state = {
	    profile: false
	  }

	  this.toggleProfile = this.toggleProfile.bind(this);
	  this.handleOutsideClick = this.handleOutsideClick.bind(this);
	}

	componentDidMount() {
	    document.addEventListener('click', this.handleOutsideClick);
	}

	componentWillUnmount() {
	    document.removeEventListener('click', this.handleOutsideClick);
	}

	toggleProfile() {
	  this.setState({
	    profile: !this.state.profile
	  });
	}

	handleOutsideClick(e) {
		if (this.node === e.target || !this.node.contains(e.target)) {
			this.setState({
				profile: false
			});
		}
	}

	render() {
		return (
			<div ref={node => this.node = node}>
				<button className={'navbar-profile' + (this.state.profile ? ' active' : '')} onClick={this.toggleProfile}>{profileData.user.name}</button>
				<div className={this.state.profile ? 'profile-dropdown' : 'hide'}>
				  <button className="profile-button"><a href="#">My Account</a></button>
				  <button className="profile-button">Sign Out</button>
				</div>
			</div>
		);
	}
}