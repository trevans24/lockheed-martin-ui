import React, {Component} from 'react';
import Schedule from '../../src/components/Schedule/Schedule';

// COMPONENT DATA
import eventData from '../../src/components/Schedule/eventsSampleData.json';

export default class Schedules extends Component {
  render() {
    return (
      <section className="schedule-example">
        <h2 className="header-1 text-center">Schedule</h2>
        <Schedule eventData={eventData} />
      </section>
    )
  }
}
