import React, {Component} from 'react';
import Dropdown from '../../src/components/Dropdown/Dropdown';
import MultiDropdown from '../../src/components/Dropdown/MultiDropdown';
import NestedDropdown from '../../src/components/Dropdown/NestedDropdown';
import nestedDropdownOptions from '../../src/components/Dropdown/nestedDropdownExampleData.json';

const simpleDropdownOptions = [
    {label: 'Program ABC', value: 1},
    {label: 'Program XYZ', value: 2},
    {label: 'System Program', value: 3}
];

const multiDropdownOptions = [
    {label: 'Program ABC', value: 1},
    {label: 'Program XYZ', value: 2},
    {label: 'System Program', value: 3}
];

export default class Dropdowns extends Component {
    constructor(props) {
        super(props);

        this.state = {
            simpleDropDownValue: 1,
            multiDropdownValue: [],
            nestedDropdownValue: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name, value) {
        const update = {};
        update[name] = value;
        this.setState(Object.assign({}, this.state, update));
    }

    render() {
        return (
          <section>
            <h2 className="header-1 text-center">Drop Downs</h2>

            <div className="example-content">
              <div className="example-content-column">
                <div className="dropdown-example">
                    <Dropdown title="Select Program"
                        handleChange={this.handleChange}
                        name="simpleDropDownValue"
                        label="Simple Dropdown"
                        options={simpleDropdownOptions}
                        value={this.state.simpleDropdownValue} />
                </div>

                <div className="highlight">
                  JSON
                  <pre>
                    <span className="json">simpleDropdownOptions = [</span>
                  </pre>
                  <pre>
                    <span className="json">&#123;label: 'Program ABC', value: 1&#125;,</span>
                  </pre>
                  <pre>
                    <span className="json">&#123;label: 'Program XYZ', value: 2&#125;,</span>
                  </pre>
                  <pre>
                    <span className="json">&#123;label: 'System Program', value: 3&#125;</span>
                  </pre>
                  <pre>
                    <span className="json">]</span>
                  </pre>
                </div>

                <div className="highlight">
                  JSX
                  <pre>
                    <span className="tag">&lt;Dropdown</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">title=</span>
                    <span className="quote">"the inner value of the drop down"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">name=</span>
                    <span className="quote">"What ever you want to name the drop down"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">label=</span>
                    <span className="quote">"What ever you want to have as the label text"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">handleChange=</span>
                    <span className="quote">&#123;function to handle user input for change&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">options=</span>
                    <span className="quote">&#123;data array for the drop down items (simpleDropdownOptions)&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">value=</span>
                    <span className="quote">&#123;setting value to array for data handling with selected&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="tag">/&gt;</span>
                  </pre>
                </div>

                <div className="dropdown-example">
                    <MultiDropdown title="Select Programs"
                        handleChange={this.handleChange}
                        name="multiDropDownValue"
                        label="Multi Dropdown"
                        options={multiDropdownOptions}
                        value={this.state.multiDropdownValue} />
                </div>

                <div className="highlight">
                  JSON
                  <pre>
                    <span className="json">multiDropdownOptions = [</span>
                  </pre>
                  <pre>
                    <span className="json">&#123;label: 'Program ABC', value: 1&#125;,</span>
                  </pre>
                  <pre>
                    <span className="json">&#123;label: 'Program XYZ', value: 2&#125;,</span>
                  </pre>
                  <pre>
                    <span className="json">&#123;label: 'System Program', value: 3&#125;</span>
                  </pre>
                  <pre>
                    <span className="json">]</span>
                  </pre>
                </div>

                <div className="highlight">
                  JSX
                  <pre>
                    <span className="tag">&lt;MultiDropdown</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">title=</span>
                    <span className="quote">"the inner value of the drop down"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">name=</span>
                    <span className="quote">"What ever you want to name the drop down"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">label=</span>
                    <span className="quote">"What ever you want to have as the label text"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">handleChange=</span>
                    <span className="quote">&#123;function to handle user input for change&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">options=</span>
                    <span className="quote">&#123;data array for the drop down items&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">value=</span>
                    <span className="quote">&#123;setting value to array for data handling with selected&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="tag">/&gt;</span>
                  </pre>
                </div>

                <div className="dropdown-example">
                    <NestedDropdown title="Select Locations"
                        handleChange={this.handleChange}
                        name="nextedDropDownValue"
                        label="Nested Dropdown"
                        options={nestedDropdownOptions}
                        value={this.state.nestedDropdownValue} />
                </div>

                <div className="highlight">
                  JSX
                  <pre>
                    <span className="tag">&lt;NestedDropdown</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">title=</span>
                    <span className="quote">"the inner value of the drop down"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">className=</span>
                    <span className="quote">"dropdown"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">name=</span>
                    <span className="quote">"What ever you want to name the drop down"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">label=</span>
                    <span className="quote">"What ever you want to have as the label text"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">handleChange=</span>
                    <span className="quote">&#123;function to handle user input for change&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">options=</span>
                    <span className="quote">&#123;data array for the drop down items&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">value=</span>
                    <span className="quote">&#123;setting value to array for data handling with selected&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="tag">/&gt;</span>
                  </pre>
                </div>

              </div>
              <div className="example-content-column inverse">
                <div className="dropdown-example">
                    <Dropdown title="Select Program"
                        className="dropdown-inverse"
                        handleChange={this.handleChange}
                        name="simpleDropDownValue"
                        label="Simple Dropdown"
                        options={simpleDropdownOptions}
                        value={this.state.simpleDropdownValue} />
                </div>

                <div className="highlight">
                  JSON
                  <pre>
                    <span className="json">simpleDropdownOptions = [</span>
                  </pre>
                  <pre>
                    <span className="json">&#123;label: 'Program ABC', value: 1&#125;,</span>
                  </pre>
                  <pre>
                    <span className="json">&#123;label: 'Program XYZ', value: 2&#125;,</span>
                  </pre>
                  <pre>
                    <span className="json">&#123;label: 'System Program', value: 3&#125;</span>
                  </pre>
                  <pre>
                    <span className="json">]</span>
                  </pre>
                </div>

                <div className="highlight">
                  JSX
                  <pre>
                    <span className="tag">&lt;Dropdown</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">title=</span>
                    <span className="quote">"the inner value of the drop down"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">className=</span>
                    <span className="quote">"dropdown-inverse"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">name=</span>
                    <span className="quote">"What ever you want to name the drop down"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">label=</span>
                    <span className="quote">"What ever you want to have as the label text"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">handleChange=</span>
                    <span className="quote">&#123;function to handle user input for change&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">options=</span>
                    <span className="quote">&#123;data array for the drop down items&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">value=</span>
                    <span className="quote">&#123;setting value to array for data handling with selected&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="tag">/&gt;</span>
                  </pre>
                </div>

                <div className="dropdown-example">
                    <MultiDropdown title="Select Programs"
                        className="dropdown-inverse"
                        handleChange={this.handleChange}
                        name="multiDropDownValue"
                        label="Multi Dropdown"
                        options={multiDropdownOptions}
                        value={this.state.multiDropdownValue} />
                </div>

                <div className="highlight">
                  JSON
                  <pre>
                    <span className="json">multiDropdownOptions = [</span>
                  </pre>
                  <pre>
                    <span className="json">&#123;label: 'Program ABC', value: 1&#125;,</span>
                  </pre>
                  <pre>
                    <span className="json">&#123;label: 'Program XYZ', value: 2&#125;,</span>
                  </pre>
                  <pre>
                    <span className="json">&#123;label: 'System Program', value: 3&#125;</span>
                  </pre>
                  <pre>
                    <span className="json">]</span>
                  </pre>
                </div>

                <div className="highlight">
                  JSX
                  <pre>
                    <span className="tag">&lt;MultiDropdown</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">title=</span>
                    <span className="quote">"the inner value of the drop down"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">className=</span>
                    <span className="quote">"dropdown-inverse"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">name=</span>
                    <span className="quote">"What ever you want to name the drop down"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">label=</span>
                    <span className="quote">"What ever you want to have as the label text"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">handleChange=</span>
                    <span className="quote">&#123;function to handle user input for change&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">options=</span>
                    <span className="quote">&#123;data array for the drop down items&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">value=</span>
                    <span className="quote">&#123;setting value to array for data handling with selected&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="tag">/&gt;</span>
                  </pre>
                </div>

                <div className="dropdown-example">
                    <NestedDropdown title="Select Locations"
                        className="dropdown-inverse"
                        handleChange={this.handleChange}
                        name="nextedDropDownValue"
                        label="Nested Dropdown"
                        options={nestedDropdownOptions}
                        value={this.state.nestedDropdownValue} />
                </div>

                <div className="highlight">
                  JSX
                  <pre>
                    <span className="tag">&lt;NestedDropdown</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">title=</span>
                    <span className="quote">"the inner value of the drop down"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">className=</span>
                    <span className="quote">"dropdown-inverse"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">name=</span>
                    <span className="quote">"What ever you want to name the drop down"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">label=</span>
                    <span className="quote">"What ever you want to have as the label text"</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">handleChange=</span>
                    <span className="quote">&#123;function to handle user input for change&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">options=</span>
                    <span className="quote">&#123;data array for the drop down items&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="attr">value=</span>
                    <span className="quote">&#123;setting value to array for data handling with selected&#125;</span>
                  </pre>
                  <pre className="line-2">
                    <span className="tag">/&gt;</span>
                  </pre>
                </div>

              </div>
            </div>
          </section>
        )
    }
}
