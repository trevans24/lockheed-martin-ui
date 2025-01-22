import React, { Component } from 'react';
import './Button.scss';

export default class Button extends Component {
  constructor(props) {
    super(props)

    this.state = {
      class: props.className
    }

    // bind this for function calls
    this.clicked = this.clicked.bind(this);

  }

  clicked() {
    if (this.state.class === 'static-btn') {
      this.setState({
        class: 'static-checked'
      });
    }
    else if (this.state.class === 'static-checked') {
      this.setState({
        class: 'static-btn'
      });
    }

  }

  render() {
    return (
      <button type="button" name="button" className={this.state.class} disabled={this.props.disabled} onClick={this.clicked}>{this.props.title}</button>
    )
  }
}
