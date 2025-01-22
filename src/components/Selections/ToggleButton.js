import React, {Component} from 'react';
import './Selections.scss';

export default class ToggleButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <div className="toggle-switch-block" onClick={this.toggle}>
        <input type="checkbox" checked={this.state.checked}/>
        <label htmlFor="switch">
          <span>Week</span>
          <span className="right">Month</span>
        </label>
      </div>
    )
  }
}
