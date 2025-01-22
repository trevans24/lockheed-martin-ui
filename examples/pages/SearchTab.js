import React, {Component} from 'react';
import Input from '../../src/components/Inputs/Input';
import Button from '../../src/components/Button/Button';
import SearchTabs from '../../src/components/SearchTabs/SearchTabs';

export default class SearchTab extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tabs: [
				'Customer',
				'Enrollment Status',
				'Service Points'
			]
		};
	}

	render() {
    return (
      <section>
        <h2 className="header-1 text-center">Search Tabs</h2>
        <SearchTabs tabs={this.state.tabs}>
        	<form>
        	  <div className="search-tab-panel-content">
        	    <Input placeholder="Participant Name" type="text" inputClass="input" groupClass="input-group" />
        	    <Input placeholder="Service Agreement ID" type="text" inputClass="input" groupClass="input-group" />
        	    <Input placeholder="Address" type="text" inputClass="input" groupClass="input-group" />
        	    <button type="button"
        	    	advanced-search="true"
        	      className="advanced-search-btn btn-secondary">
        	      Advanced
        	      <svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
        	      	<path d="M1.513.23A.91.91 0 0 0 .305 1.589l4.091 3.636a.91.91 0 0 0 1.208 0l4.09-3.636A.91.91 0 0 0 8.488.229L5 3.33 1.513.23z" />
        	      </svg>
        	    </button>
        	    <Button className="btn-primary" title="Search" />
        	  </div>
        	  <div className="search-tab-panel-drawer">
        	    <Input placeholder="" type="text" name="field1" inputClass="input" groupClass="input-group" label="Field1 Label" />
        	    <Input placeholder="" type="text" name="field2" inputClass="input" groupClass="input-group" label="Field2 Label" />
        	    <Input placeholder="" type="text" name="field3" inputClass="input" groupClass="input-group" label="Field3 Label" />
        	    <Input placeholder="" type="text" name="field4" inputClass="input" groupClass="input-group" label="Field4 Label" />
        	    <Input placeholder="" type="text" name="field5" inputClass="input" groupClass="input-group" label="Field5 Label" />
        	  </div>
        	</form>
        	<form>
        	  <div className="search-tab-panel-content">
        	    <Input placeholder="Participant Name" type="text" inputClass="input" groupClass="input-group" />
        	    <Input placeholder="Service Agreement ID" type="text" inputClass="input" groupClass="input-group" />
        	    <Input placeholder="Address" type="text" inputClass="input" groupClass="input-group" />
        	    <Button className="btn-primary" title="Search" />
        	  </div>
        	</form>
        	<form>
        	  <div className="search-tab-panel-content">
        	    <Input placeholder="Participant Name" type="text" inputClass="input" groupClass="input-group" />
        	    <button type="button"
        	    	advanced-search="true"
        	    	className="advanced-search-btn btn-secondary">
        	      Advanced
        	      <svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
        	      	<path d="M1.513.23A.91.91 0 0 0 .305 1.589l4.091 3.636a.91.91 0 0 0 1.208 0l4.09-3.636A.91.91 0 0 0 8.488.229L5 3.33 1.513.23z" />
        	      </svg>
        	    </button>
        	    <Button className="btn-primary" title="Search" />
        	  </div>
        	 	<div className="search-tab-panel-drawer">
        	    <Input placeholder="" type="text" name="field1" inputClass="input" groupClass="input-group" label="Field1 Label" />
        	    <Input placeholder="" type="text" name="field2" inputClass="input" groupClass="input-group" label="Field2 Label" />
        	  </div>
        	</form>
        </SearchTabs>

        <div className="highlight">
          Tabs Array
          <pre>
            <span className="json">[</span>
          </pre>
          <pre className="line-2">
            <span className="json">'Customer',</span>
          </pre>
          <pre className="line-2">
            <span className="json">'Enrollment Status',</span>
          </pre>
          <pre className="line-2">
            <span className="json">'Service Points'</span>
          </pre>
          <pre>
            <span className="json">]</span>
          </pre>
        </div>

        <div className="highlight">
        	<pre>
        	  <span className="tag">&lt;SearchTabs</span>
      	    <span className="attr"> tabs=</span>
      	    <span className="quote">&#123;this.state.tabs&#125;</span>
        	  <span className="tag">&gt;</span>
        	</pre>
        	<pre className="line-2">
        	  <span className="tag">&lt;form&gt;</span>
        	</pre>
        	<pre className="line-3">
        	  <span className="tag">&lt;div</span>
        	  <span className="attr"> className=</span>
              <span className="quote">"search-tab-panel-content"</span>
        	  <span className="tag">&gt;</span>
        	</pre>
        	<pre className="line-4">
        		<span className="content">...form inputs...</span>
        	</pre>
        	<pre className="line-3">
        	  <span className="tag">&lt;/div&gt;</span>
        	</pre>
        	<pre className="line-3">
        	  <span className="tag">&lt;div</span>
        	  <span className="attr"> className=</span>
              <span className="quote">"search-tab-panel-drawer"</span>
        	  <span className="tag">&gt;</span>
        	</pre>
        	<pre className="line-4">
        		<span className="content">...advanced form inputs in drawer...</span>
        	</pre>
        	<pre className="line-3">
        	  <span className="tag">&lt;/div&gt;</span>
        	</pre>
        	<pre className="line-2">
        		<span className="tag">&lt;/form&gt;</span>
        	</pre>
        	<pre className="line-2">
        		<span className="content">...more form elements (one for each tab)</span>
        	</pre>
        	<pre>
        		<span className="tag">&lt;/SearchTabs&gt;</span>
        	</pre>
        </div>
      </section>
    )
  }
}
