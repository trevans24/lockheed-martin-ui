import React, {Component} from 'react';
import TimeInputField from 'react-time-input';

export default class TimeInput extends Component {

  renderLabel() {
    return (this.props.label
      ? <label htmlFor={this.props.name} className="label-sm">{this.props.label}</label>
      : null);
  }

  renderErrorMessage() {
    return (this.props.errorMessage
      ? <div className="form-error label-sm">{this.props.errorMessage}</div>
      : null);
  }

  render() {
    return (
      <div className={this.props.groupClass || 'input-group'}>
        {this.renderLabel()}
        <TimeInputField
          name={this.props.name}
          placeholder={this.props.placeholder || 'hh:mm'}
          autoComplete="on"
          onTimeChange={(value) => this.props.onChange(this.props.name, value)}
          className={'time-input ' + this.props.inputClass} />
        {this.renderErrorMessage()}
      </div>
    )
  }
}
