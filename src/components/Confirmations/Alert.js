import React, {Component} from 'react';
import './Confirmations.scss';

export default class Alert extends Component {
  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    return (
      <div className="confirmation" role="alert">
        <div className="checkbox"></div>
        <h5 className="body-copy">{this.props.message}</h5>
        <button type="button" className="close confirm-close" data-dismiss="alert" onClick={this.props.close}></button>
      </div>
    )
  }
}
