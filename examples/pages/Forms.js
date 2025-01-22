import React, {Component} from 'react';
import LoginForm from '../../src/components/Login/LoginForm';
import logo from '../../src/assets/img/Seeload-Logo@2x.svg';

export default class Forms extends Component {
  render() {
    return (
      <section className="dark-theme-lg login-page text-center">
        <img src={logo} alt="" />
        <div className="form">
          <h2 className="header-1-inverse text-center">Welcome Back</h2>
          <LoginForm />
        </div>
      </section>
    )
  }
}
