import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class UINav extends Component {
  render() {
    return (
      <nav className="ui-nav">
        <Link className="logo" to="/"><img src={require("../../assets/img/lockheed-star-white.svg")} alt="lockheed-martin-logo" /></Link>
        <NavLink className="active" to="/typography"><span>Typography</span></NavLink>
        <NavLink className="active" to="/buttons"><span>Buttons</span></NavLink>
        <NavLink className="active" to="/inputs"><span>Inputs</span></NavLink>
        <NavLink className="active" to="/calendar"><span>Calendar Picker</span></NavLink>
        <NavLink className="active" to="/dropdowns"><span>Drop Downs</span></NavLink>
        <NavLink className="active" to="/selections"><span>Selections</span></NavLink>
        <NavLink className="active" to="/cards"><span>Cards</span></NavLink>
        <NavLink className="active" to="/confirmations"><span>Confirmations</span></NavLink>
        <NavLink className="active" to="/navigations"><span>Navigations</span></NavLink>
        <NavLink className="active" to="/search-tabs"><span>Search Tabs</span></NavLink>
        <NavLink className="active" to="/tables"><span>Tables</span></NavLink>
        <NavLink className="active" to="/schedule"><span>Schedule</span></NavLink>
        <NavLink className="active" to="/event-matrix"><span>Event Matrix</span></NavLink>
        <NavLink className="active" to="/constraints"><span>Constraints</span></NavLink>
        <NavLink className="active" to="/forms"><span>Forms</span></NavLink>
      </nav>
    )
  }
}
