import React, {Component} from 'react';

const Notification = (props) => (
  <div className={('notification ' + props.className) || props.className}>
    <button type="button" className="close" onClick={() => props.close(props.index)}></button>
    <h3 className="title">{props.title}</h3>
    <h5 className="label">{props.date}</h5>
    <p className="body-copy">
      {props.body}
     </p>
  </div>
);

export default Notification;
