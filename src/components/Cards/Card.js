import React, {Component} from 'react';
import './Card.scss';

function getCardClassName(props) {
  let className = props.className ? props.className : '';
  return className += props.small
    ? ' card-sm'
    : ' card-lg';
}

const Card = props => (
	<div className={getCardClassName(props)}>
    {props.title &&
  	  <div className="card-title">
  	    <h2 className="header-2">{props.title}</h2>
  	  </div>
    }
	  <div className="card-body">
	    {props.children}
	  </div>
	</div>
)

export default Card;