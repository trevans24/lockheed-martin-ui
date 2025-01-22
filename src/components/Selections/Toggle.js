import React from 'react';
import './Selections.scss';

const Toggle = (props) => (
  <div className={props.className || 'toggle-switch'}
    onClick={() => props.onChange(props.name, !props.value)}>
    <input className="checkbox" type="checkbox" checked={props.value}/>
    <label htmlFor="checkbox1" className="checkbox-label">
      <span className="show">Show</span>
      <span className="hide">Hide</span>
    </label>
  </div>
);

export default Toggle;