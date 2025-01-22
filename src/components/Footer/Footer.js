import React, {Component} from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <a href="/help" className="footer-links">help</a>
          <a href="/about" className="footer-links">about</a>
        </div>
        <div className="footer-logo">
          <h5 className="body-copy">Powered by </h5><img src={require("../../assets/img/Lockheed-Logo.svg")} alt="lockheed-martin-logo" />
        </div>
      </footer>
    )
  }
}
