import React, {Component} from 'react';
import './Constraint.scss';

// Components
import Input from '../Inputs/Input';
import Button from '../Button/Button';

// DATA
import constraintData from './constraintData';

export default class Constraint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: constraintData
    }

    this.next = this.next.bind(this);

  }

  next() {
    console.log('clicked');
  }

  render() {
    return (
      <div className="constraint">
        <div className="constraint-wrapper">
          <div className="constraint-header">
            <h2 className="title-inverse">Create new constraint</h2>
            <div className="meter-progress">
              <div className="meter">
                <span></span>
              </div>
              <h2 className="body-copy-inverse">1/2</h2>
            </div>
            <h2 className="header-1-inverse">Customer Type</h2>
          </div>
          <div className="constraint-body">
            <div className="constraint-input">
              <Input label="NAME" placeholder="Name" type="text" className="input" groupClass="input-group-inverse"/>
            </div>
            <div className="constraint-grid">
              <div className="grid-header">
                <div className="header-title">
                  <h2 className="title-inverse">Available Programs</h2>
                  <h2 className="body-copy-inverse">Select one or more programs:</h2>
                </div>
                <Input placeholder="Search" type="text" className="input" groupClass="search-inverse"/>
              </div>
            </div>
          </div>
          <div className="grid">
            {this.state.data.programs.map((program, i) => {
              return <Button className="static-btn" title={program.name + ' (' + program.type + ')'} key={i} />
            })}
          </div>
        </div>
        <div className="constraint-footer">
          <div>
            <Button className="link" title="cancel" />
            <Button className="btn-primary" title="next" click={() => this.next()} />
          </div>
        </div>
      </div>
    )
  }
}
