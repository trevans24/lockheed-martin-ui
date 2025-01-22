import React from 'react';
import './Selections.scss';

function shouldToggle(props) {
    return typeof props.onChange === 'function'
        && !props.disabled;
}

const Checkbox = (props) => (
    <div className={'checkbox ' + (props.className || '')}>
        <input type="checkbox"
            checked={props.value}
            disabled={props.disabled}
            readOnly />
        <div onClick={() => shouldToggle(props) && props.onChange(props.name, !props.value)}
            className={props.disabled ? 'disabled' : ''}></div>
    </div>
);

export default Checkbox;