import React, { Component } from 'react';
import TimeInputField from 'react-time-input';

const TimeInput = ({ name, label, errorMessage, groupClass, placeholder, inputClass, onChange }) => {
  const renderLabel = () => {
    return (label
      ? <label htmlFor={name} className="label-sm">{label}</label>
      : null);
  }

  const renderErrorMessage = () => {
    return (errorMessage
      ? <div className="form-error label-sm">{errorMessage}</div>
      : null);
  }

  return (
    <div className={groupClass || 'input-group'}>
      {renderLabel()}
      <TimeInputField
        name={name}
        placeholder={placeholder || 'hh:mm'}
        autoComplete="on"
        onTimeChange={(value) => onChange(name, value)}
        className={'time-input ' + inputClass} />
      {renderErrorMessage()}
    </div>
  )

}

export default TimeInput
