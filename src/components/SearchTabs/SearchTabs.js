import React, { Component } from 'react';
import './SearchTabs.scss';

const SearchTabItem = (props) => {
  return (
    <div onClick={props.onClick}
      className={'search-tab' + (props.active ? ' search-tab-active' : '')}>
      <span>{props.label}</span>
    </div>
  );
}

export default class SearchTabs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showDrawer: false,
      activeTab: 0
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleAdvancedClick = this.handleAdvancedClick.bind(this);
  }

  toggleDrawer() {
    this.setState({
      activeTab: this.state.activeTab,
      showDrawer: !this.state.showDrawer
    });
  }

  getPanelClassName(index) {
    let className = 'search-tab-panel';

    return className + (this.state.activeTab === index ? ' search-tab-panel-active' : '');
  }

  setActiveTab(index) {
    this.setState({
      showDrawer: false,
      activeTab: index
    });
  }

  handleAdvancedClick(e) {
    if (e.target.getAttribute('advanced-search')) {
      this.toggleDrawer();
    }
  }

  render() {
    return (
      <div className="search-tabs">
        <div className="search-tabs-container">
          {this.props.tabs.map((tab, index) => (
            <SearchTabItem key={index}
              label={tab}
              active={this.state.activeTab === index}
              onClick={() => this.setActiveTab(index)} />
          ))}
        </div>
        <div className={'search-tabs-panels ' + (this.state.showDrawer ? 'drawer-active' : '')}>
          {this.props.children.map((form, index) =>
            <div className={this.getPanelClassName(index)} key={index} onClick={this.handleAdvancedClick}>
              {form}
            </div>
          )}
        </div>
      </div>
    );
  }
}
