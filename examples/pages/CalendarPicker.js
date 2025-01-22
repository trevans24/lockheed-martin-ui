import React, {Component} from 'react';
import CalendarPicker from '../../src/components/CalendarPicker/CalendarPicker';

class CalendarPickerExample extends Component {
	constructor(props) {
		super(props);

		this.state = {
			chosenDate: null
		};

		this.setDate = this.setDate.bind(this);
	}

	setDate(date) {
		this.setState({chosenDate: date});
	}

	render() {
        return (
            <section className="calendar-picker-example">
                <h2 className="header-1 text-center">Calendar Picker</h2>
                <div className="example-content">
                	<div className="example-content-column">
                    	<CalendarPicker value={this.state.chosenDate} setValue={this.setDate} />
                		<div className="highlight">
                		  JSX
                		  <pre>
                		    <span className="tag">&lt;CalendarPicker</span>
                		  </pre>
                		  <pre className="line-2">
                		    <span className="attr">value=</span>
                		    <span className="quote">"field value"</span>
                		  </pre>
                		  <pre className="line-2">
                		    <span className="attr">setValue=</span>
                		    <span className="quote">"function to handle value change"&gt;</span>
                		  </pre>
                		</div>
                	</div>
                	<div className="example-content-column inverse">
                    	<CalendarPicker value={this.state.chosenDate} setValue={this.setDate} inverse />
                		<div className="highlight">
                		  JSX
                		  <pre>
                		    <span className="tag">&lt;CalendarPicker</span>
                		  </pre>
                		  <pre className="line-2">
                		    <span className="attr">value=</span>
                		    <span className="quote">"field value"</span>
                		  </pre>
                		  <pre className="line-2">
                		    <span className="attr">setValue=</span>
                		    <span className="quote">"function to handle value change"</span>
                		  </pre>
                		  <pre className="line-2">
                		    <span className="attr">inverse&gt;</span>
                		  </pre>
                		</div>
                	</div>
                </div>
            </section>
        );
	}
}

export default CalendarPickerExample;