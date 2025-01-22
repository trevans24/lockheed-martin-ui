import React, {Component} from 'react';

// COMPONENTS
import Input from '../../src/components/Inputs/Input';
import TimeInput from '../../src/components/Inputs/TimeInput';

export default class Inputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exampleField: '',
      exampleEmailField: '',
      examplePasswordField: '',
      timeField: '',
      searchField: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(name, value) {
    const update = {};
    update[name] = value;
    this.setState(Object.assign({}, this.state, update));
  }

  render() {
    return (
      <div className="inputs">
        <section>
          <h2 className="header-1 text-center">Inputs</h2>

          <div className="highlight">
            <pre>
              <span className="note">All Inputs (except for TimeInput) are the width of their parent container</span>
            </pre>
          </div>

          <div className="example-content">
            <div className="example-content-column">
              <Input type="text"
                label="Example Field"
                name="exampleField"
                value={this.state.exampleField}
                onChange={this.handleInputChange}
                placeholder="Enter Text Here"
                errorMessage="Field is invalid!"
                inputClass="input"
                groupClass="input-group" />
              <Input type="email"
                label="Email Field"
                name="exampleEmailField"
                value={this.state.exampleEmailField}
                onChange={this.handleInputChange}
                placeholder="Email"
                errorMessage="Please enter a valid email address"
                inputClass="input"
                groupClass="input-group" />
              <Input
                label="Password Field"
                name="examplePasswordField"
                value={this.state.examplePasswordField}
                onChange={this.handleInputChange}
                placeholder="Password"
                type="password"
                minLength="8"
                errorMessage="Password must be at lease 8 characters"
                inputClass="input"
                groupClass="input-group" />

              <div className="highlight">
                <pre>
                    <span className="tag">&lt;Input </span>
                </pre>
                <pre className="line-2">
                  <span className="attr">placeholder=</span>
                  <span className="quote">"placeholder" </span>
                </pre>
                <pre className="line-2">
                  <span className="attr">label=</span>
                  <span className="quote">"Example Field" </span>
                </pre>
                <pre className="line-2">
                  <span className="attr">name=</span>
                  <span className="quote">"fieldName" </span>
                </pre>
                <pre className="line-2">
                  <span className="attr">errorMessage=</span>
                  <span className="quote">"what message you want to show if error with user input" </span>
                </pre>
                <pre className="line-2">
                  <span className="attr">value=</span>
                  <span className="quote">  &#123;handling value of input(ex: this.state.value)&#125; </span>
                </pre>
                <pre className="line-2">
                  <span className="attr">type=</span>
                  <span className="quote">"text / email / password" </span>
                </pre>
                <pre className="line-2">
                  <span className="attr">className=</span>
                  <span className="quote">"input" </span>
                </pre>
                <pre className="line-2">
                  <span className="attr">groupClass=</span>
                  <span className="quote">"input-group" </span>
                </pre>
                <pre className="line-2">
                  <span className="attr">onChange=</span>
                  <span className="quote">&#123;this.(function you choose to make for handling user inputs)&#125;/></span>
                </pre>
              </div>
            </div>

            <div className="example-content-column inverse">
              <Input type="text"
                label="Example Field"
                name="exampleField"
                value={this.state.exampleField}
                onChange={this.handleInputChange}
                placeholder="Enter Text Here"
                errorMessage="Field is invalid!"
                inputClass="input"
                groupClass="input-group-inverse" />
              <Input type="email"
                label="Email Field"
                name="exampleEmailField"
                value={this.state.exampleEmailField}
                onChange={this.handleInputChange}
                placeholder="Email"
                errorMessage="Please enter a valid email address"
                inputClass="input"
                groupClass="input-group-inverse" />
              <Input
                label="Password Field"
                name="examplePasswordField"
                value={this.state.examplePasswordField}
                onChange={this.handleInputChange}
                placeholder="Password"
                type="password"
                minLength="8"
                errorMessage="Password must be at lease 8 characters"
                inputClass="input"
                groupClass="input-group-inverse" />

                <div className="highlight">
                  <pre>
                      <span className="tag">&lt;Input </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">placeholder=</span>
                    <span className="quote">"placeholder" </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">label=</span>
                    <span className="quote">"Example Field" </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">name=</span>
                    <span className="quote">"fieldName" </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">errorMessage=</span>
                    <span className="quote">"what message you want to show if error with user input" </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">value=</span>
                    <span className="quote">  &#123;handling value of input(ex: this.state.value)&#125; </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">type=</span>
                    <span className="quote">"text / email / password" </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">className=</span>
                    <span className="quote">"input" </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">groupClass=</span>
                    <span className="quote">"input-group-inverse" </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">onChange=</span>
                    <span className="quote">&#123;this.(function you choose to make for handling user inputs)&#125;/></span>
                  </pre>
                </div>
            </div>
          </div>
        </section>

        <section className="time-input-example">
          <h2 className="header-1 text-center">Time Inputs</h2>
          <div className="example-content">
            <div className="example-content-column">
              <TimeInput
                label="Time Field"
                name="timeField"
                value={this.state.timeField}
                onChange={this.handleInputChange} />

                <div className="highlight">
                  <pre>
                    <span className="tag">&lt;TimeInput </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">label=</span>
                    <span className="quote">"Time Field" </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">name=</span>
                    <span className="quote">"timeField" </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">value=</span>
                    <span className="quote">&#123;handling value of input(ex: this.state.timeField)&#125; </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">onChange=</span>
                    <span className="quote">&#123;this.(function you choose to make for handling user inputs)&#125; </span>
                    <span className="tag">/></span>
                  </pre>
                </div>
            </div>

            <div className="example-content-column inverse">
              <TimeInput
                groupClass="input-group-inverse"
                label="Time Field"
                name="timeField"
                value={this.state.timeField}
                onChange={this.handleInputChange} />

                <div className="highlight">
                  <pre>
                    <span className="tag">&lt;TimeInput </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">label=</span>
                    <span className="quote">"Time Field" </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">groupClass=</span>
                    <span className="quote">"input-group-inverse" </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">name=</span>
                    <span className="quote">"timeField" </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">value=</span>
                    <span className="quote">&#123;handling value of input(ex: this.state.timeField)&#125; </span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">onChange=</span>
                    <span className="quote">&#123;this.(function you choose to make for handling user inputs)&#125; </span>
                    <span className="tag">/></span>
                  </pre>
                </div>
            </div>
          </div>
        </section>

        <section className="search-input">
          <h2 className="header-1 text-center ">Search</h2>
          <div className="example-content">
            <div className="example-content-column">
              <Input
                type="search"
                groupClass="search"
                placeholder="Search"
                name="searchField"
                value={this.state.searchField}
                onChange={this.handleInputChange} />

                <div className="highlight">
                  <pre>
                    <span className="tag">&lt;Input </span>
                    <pre className="line-2">
                      <span className="attr">type=</span>
                      <span className="quote">"search" </span>
                    </pre>
                    <pre className="line-2">
                      <span className="attr">placeholder=</span>
                      <span className="quote">"Search" </span>
                    </pre>
                    <pre className="line-2">
                      <span className="attr">groupClass=</span>
                      <span className="quote">"search" </span>
                    </pre>
                    <pre className="line-2">
                      <span className="attr">name=</span>
                      <span className="quote">"searchField"</span>
                    </pre>
                    <pre className="line-2">
                      <span className="attr">value=</span>
                      <span className="quote">&#123;handling value of input(ex: this.state.timeField)&#125; </span>
                    </pre>
                    <pre className="line-2">
                      <span className="attr">onChange=</span>
                      <span className="quote">&#123;this.(function you choose to make for handling user inputs)&#125; </span>
                      <span className="tag">/></span>
                    </pre>
                  </pre>
                </div>
            </div>
            <div className="example-content-column inverse">
              <Input
                type="search"
                groupClass="search-inverse"
                placeholder="Search"
                name="searchField"
                value={this.state.searchField}
                onChange={this.handleInputChange} />

                <div className="highlight">
                  <pre>
                    <span className="tag">&lt;Input </span>
                    <pre className="line-2">
                      <span className="attr">type=</span>
                      <span className="quote">"search" </span>
                    </pre>
                    <pre className="line-2">
                      <span className="attr">placeholder=</span>
                      <span className="quote">"Search" </span>
                    </pre>
                    <pre className="line-2">
                      <span className="attr">groupClass=</span>
                      <span className="quote">"search-inverse" </span>
                    </pre>
                    <pre className="line-2">
                      <span className="attr">name=</span>
                      <span className="quote">"searchField"</span>
                    </pre>
                    <pre className="line-2">
                      <span className="attr">value=</span>
                      <span className="quote">&#123;handling value of input(ex: this.state.timeField)&#125; </span>
                    </pre>
                    <pre className="line-2">
                      <span className="attr">onChange=</span>
                      <span className="quote">&#123;this.(function you choose to make for handling user inputs)&#125; </span>
                      <span className="tag">/></span>
                    </pre>
                  </pre>
                </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
