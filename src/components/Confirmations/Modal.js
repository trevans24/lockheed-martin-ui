import React, {Component} from 'react';
import './Confirmations.scss';

export default class Modal extends Component {
  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    return (
      <div id="confirmation-modal" className="modal">
        <div className="modal-content">
          <div className="modal-title">
            {this.props.children ?
              <div>
                <h3 className="header-2">{this.props.title}</h3>
                <button type="button" className="close" onClick={this.props.close}></button>
              </div>
              :
              <h3 className="header-2">Confirmation</h3>
            }
          </div>
          <div className="modal-body">
            {this.props.children ? this.props.children : <h3 className="header-2">{this.props.message}</h3>}
          </div>
        {this.props.children ?
          <div className="modal-footer-children">
            <button className="link" onClick={this.props.close}>cancel</button>
            <button className="btn-secondary">reserve</button>
            <button className="btn-primary">Commit</button>
          </div>
        :
          <div className="modal-footer">
            <button className="link" onClick={this.props.close}>cancel</button>
            <button className="btn-primary">Complete</button>
          </div>
        }

        </div>
      </div>
    )
  }
}
