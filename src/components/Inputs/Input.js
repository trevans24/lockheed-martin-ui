import React, {Component} from 'react';
import './Inputs.scss';

export default class Input extends Component {

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
      <div className={this.props.groupClass}>
      	{this.renderLabel()}
        <input type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
          autoComplete="on"
          value={this.props.value}
          onChange={(e) => typeof this.props.onChange === 'function'
            && this.props.onChange(e.target.name, e.target.value)
          }
          minLength={this.props.minLength}
          className={this.props.inputClass} />
        {this.renderErrorMessage()}
      </div>
    )
  }
}
