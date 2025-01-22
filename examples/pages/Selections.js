import React, {Component} from 'react';
// COMPONENTS
import Checkbox from '../../src/components/Selections/Checkbox';
import Radio from '../../src/components/Selections/Radio';
import Toggle from '../../src/components/Selections/Toggle';
import ToggleButton from '../../src/components/Selections/ToggleButton';

export default class Selections extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxField: true,
      radioField: null,
      toggleField: false
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
      <section>
        <h2 className="header-1 text-center">Selections</h2>

        <div className="example-content">
          <div className="example-content-column">
            <div className="checkbox-example">
              <h2 className="header-2">Checkboxes</h2>
              <form>
                <Checkbox value={this.state.checkboxField}
                  onChange={this.handleInputChange}
                  name="checkboxField" />
                <Checkbox value={this.state.checkboxField}
                  onChange={this.handleInputChange}
                  name="checkboxField"
                  disabled />
                </form>
            </div>
            <div className="highlight">
              <pre className="tag">&lt;Checkbox</pre>
              <pre className="line-2">
                <span className="attr">value=</span>
                <span className="quote">&#123;value handled (ex this.state.checkboxField)&#125;</span>
              </pre>
              <pre className="line-2">
                <span className="attr">onChange=</span>
                <span className="quote">&#123;onChange handler function (ex this.handleInputChange)&#125;</span>
              </pre>
              <pre className="line-2">
                <span className="attr">name=</span>
                <span className="quote">"checkboxField"</span>
              </pre>
              <pre className="line-2">
                <span className="attr">disabled=</span>
                <span className="quote">&#123;Can be true or false, or no attribute on component&#125;</span>
                <span className="tag">/&gt;</span>
              </pre>
            </div>

            <div className="radio-example">
              <h2 className="header-2">Radio Button</h2>
              <form>
                <Radio value="one"
                  onChange={this.handleInputChange}
                  name="radioField" />
                <Radio value="two"
                  onChange={this.handleInputChange}
                  name="radioField" />
                <Radio value="two"
                  onChange={this.handleInputChange}
                  name="radioField"
                  disabled />
              </form>
            </div>

            <div className="highlight">
              <pre>
                <span className="tag">&lt;Radio</span>
              </pre>
              <pre className="line-2">
                <span className="attr">value=</span>
                <span className="quote">"one"</span>
              </pre>
              <pre className="line-2">
                <span className="attr">onChange=</span>
                <span className="quote">&#123;function to handle input change event&#125;</span>
              </pre>
              <pre className="line-2">
                <span className="attr">name=</span>
                <span className="quote">"any name you choose"</span>
              </pre>
              <pre className="line-2">
                <span className="attr">disabled=</span>
                <span className="quote">&#123;Can be true or false, or no attribute on component&#125;</span>
                <span className="tag">/&gt;</span>
              </pre>
            </div>

            <div className="toggle-switch-example">
              <h2 className="header-2">Toggle Switch</h2>
              <Toggle value={this.state.toggleField}
                onChange={this.handleInputChange}
                name="toggleField" />
            </div>

            <div className="highlight">
              <pre>
                <span className="tag">&lt;Toggle</span>
              </pre>
              <pre className="line-2">
                <span className="attr">value=</span>
                <span className="quote">&#123;function to toggle switch (this.state.toggleField)&#125;</span>
              </pre>
              <pre className="line-2">
                <span className="attr">onChange=</span>
                <span className="quote">&#123;function to handle input change event&#125;</span>
              </pre>
              <pre className="line-2">
                <span className="attr">name=</span>
                <span className="quote">"any name you choose"</span>
                <span className="tag">/&gt;</span>
              </pre>
            </div>

            <div className="toggle-button-example">
              <h2 className="header-2">Schedule Toggle Switch</h2>
              <ToggleButton />
            </div>

            <div className="highlight">
              <pre>
                <span className="note">This is just to show you what it looks like</span>
              </pre>
            </div>
          </div>
          <div className="example-content-column inverse">
            <div className="checkbox-example">
              <h2 className="header-2">Checkboxes</h2>
              <form>
                <Checkbox value={this.state.checkboxField}
                  onChange={this.handleInputChange}
                  name="checkboxField"
                  className="checkbox-inverse" />
                <Checkbox value={this.state.checkboxField}
                  onChange={this.handleInputChange}
                  name="checkboxField"
                  className="checkbox-inverse"
                  disabled />
                </form>
            </div>
            <div className="highlight">
              <pre className="tag">&lt;Checkbox</pre>
              <pre className="line-2">
                <span className="attr">className=</span>
                <span className="quote">"checkbox-inverse"</span>
              </pre>
              <pre className="line-2">
                <span className="attr">value=</span>
                <span className="quote">&#123;value handled (ex this.state.checkboxField)&#125;</span>
              </pre>
              <pre className="line-2">
                <span className="attr">onChange=</span>
                <span className="quote">&#123;onChange handler function (ex this.handleInputChange)&#125;</span>
              </pre>
              <pre className="line-2">
                <span className="attr">name=</span>
                <span className="quote">"checkboxField"</span>
              </pre>
              <pre className="line-2">
                <span className="attr">disabled=</span>
                <span className="quote">&#123;Can be true or false, or no attribute on component&#125;</span>
                <span className="tag">/&gt;</span>
              </pre>
            </div>

            <div className="radio-example">
              <h2 className="header-2">Radio Button</h2>
              <form>
                <Radio value="one"
                  onChange={this.handleInputChange}
                  name="radioField"
                  className={'radio-inverse'} />
                <Radio value="two"
                  onChange={this.handleInputChange}
                  name="radioField"
                  className={'radio-inverse'} />
                <Radio value="two"
                  onChange={this.handleInputChange}
                  name="radioField"
                  className={'radio-inverse'}
                  disabled />
              </form>
            </div>

            <div className="highlight">
              <pre>
                <span className="tag">&lt;Radio</span>
              </pre>
              <pre className="line-2">
                <span className="attr">value=</span>
                <span className="quote">"one"</span>
              </pre>
              <pre className="line-2">
                <span className="attr">className=</span>
                <span className="quote">&#123;'radio-inverse'&#125;</span>
              </pre>
              <pre className="line-2">
                <span className="attr">onChange=</span>
                <span className="quote">&#123;function to handle input change event&#125;</span>
              </pre>
              <pre className="line-2">
                <span className="attr">name=</span>
                <span className="quote">"any name you choose"</span>
              </pre>
              <pre className="line-2">
                <span className="attr">disabled=</span>
                <span className="quote">&#123;Can be true or false, or no attribute on component&#125;</span>
                <span className="tag">/&gt;</span>
              </pre>
            </div>

            <div className="toggle-switch-example">
              <h2 className="header-2">Toggle Switch</h2>
              <Toggle value={this.state.toggleField}
                onChange={this.handleInputChange}
                name="toggleField"
                className="toggle-switch-inverse" />
            </div>

            <div className="highlight">
              <pre>
                <span className="tag">&lt;Toggle</span>
              </pre>
              <pre className="line-2">
                <span className="attr">value=</span>
                <span className="quote">&#123;function to toggle switch (this.state.toggleField)&#125;</span>
              </pre>
              <pre className="line-2">
                <span className="attr">onChange=</span>
                <span className="quote">&#123;function to handle input change event&#125;</span>
              </pre>
              <pre className="line-2">
                <span className="attr">name=</span>
                <span className="quote">"any name you choose"</span>
              </pre>
              <pre className="line-2">
                <span className="attr">className=</span>
                <span className="quote">"toggle-switch-inverse"</span>
                <span className="tag">/&gt;</span>
              </pre>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
