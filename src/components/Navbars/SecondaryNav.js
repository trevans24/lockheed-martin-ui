import React, {Component} from 'react';
import './SecondaryNav.scss';
import Notifications from '../Notifications/Notifications';
import Profile from '../Profile/Profile';

export default class SecondaryNav extends Component {
  render() {
    return (
      <nav className="navbar">
      <div className="navbar-links">
        <a href="#/dashboard" className="navbar-link"><span>dashboard</span></a>
        <a href="#/planning" className="navbar-link"><span>planning</span></a>
        <a href="#/schedule" className="navbar-link"><span>schedule</span></a>
      </div>
      <div className="navbar-control">
        <Notifications />
        <Profile />
      </div>
    </nav>
    )
  }
}
