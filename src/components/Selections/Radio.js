import React from 'react';
import './Selections.scss';

const Radio = (props) => (
    <div className={'radio ' + (props.className || '')}>
        <input type="radio"
          name={props.name}
          disabled={props.disabled}
          onChange={() => props.onChange(props.name, props.value)} />
        <div className={props.disabled ? 'disabled' : ''}></div>
    </div>
);

export default Radio;