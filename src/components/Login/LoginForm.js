import React, {Component} from 'react';
import assign from '../../polyfills/assign';
import './LoginForm.scss';
import Input from '../Inputs/Input';
import Button from '../Button/Button';

export default class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      exampleField: '',
      examplePasswordField: ''
    }

    this.change = this.change.bind(this);
  }

  // User input
  change(name, value) {
    const update = {};
    update[name] = value;
    this.setState(Object.assign({}, this.state, update));
  }

  render() {
    return (
      <form className="login-form">
        <Input type="text"
          label="Example Field"
          name="exampleField"
          value={this.state.exampleField}
          onChange={this.change}
          placeholder="Username"
          errorMessage="Field is invalid!"
          autocomplete="username"
          inputClass="input"
          groupClass="input-group-inverse" />
          <Input
            label="Password Field"
            name="examplePasswordField"
            value={this.state.examplePasswordField}
            onChange={this.change}
            placeholder="Password"
            type="password"
            minLength="8"
            errorMessage="Password must be at lease 8 characters"
            autocomplete="current-passord"
            inputClass="input"
            groupClass="input-group-inverse" />
        <Button className="btn-primary" title="login" click={() => console.log('clicked')} />
      </form>
    )
  }
}
