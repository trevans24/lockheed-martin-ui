import React, {Component} from 'react';
import './PrimaryNav.scss';
import logo from '../../assets/img/Seeload-Logo@2x.svg';

export default class PrimaryNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUrl: null,
      navItems: [
        {title: 'Operations', url: '#/operations', icon: 'Active-Operations-Icon@2x.svg'},
        {title: 'Analysis', url: '#/analysis', icon: 'Active-Analysis-Icon@2x.svg'},
        {title: 'Participant Management', url: '#/participant', icon: 'Active-ParticipantManagement-Icon@2x.svg'},
        {title: 'Program Management', url: '#/program', icon: 'Active-ProgramManagement-Icon@2x.svg'},
        {title: 'DER Management', url: '#/der', icon: 'Active-DERManagement-Icon@2x.svg'},
        {title: 'Administration', url: '#/admin', icon: 'Active-Admin-Icon@2x.svg'},
      ]
    };

    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(url) {
    this.setState({activeUrl: url});
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav-brand">
          <img src={logo} alt="lockheed-martin-seeload" />
        </div>
        <div className="nav-buttons">
          {this.state.navItems.map((item, index) =>
            <a href={item.url}
              key={index}
              onClick={() => this.handleNavClick(item.url)}
              className={'nav-button ' + (this.state.activeUrl === item.url ? 'active' : '')}>
              <span>{item.title}</span>
            </a>  
          )}
        </div>
      </nav>
    )
  }
}
