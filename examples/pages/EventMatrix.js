import React, {Component} from 'react';
import EventMatrix from '../../src/components/EventMatrix/EventMatrix';

export default class EventMatrixExample extends Component {
    render() {
        return (
            <section>
                <h2 className="header-1 text-center">Event Matrix</h2>
                <EventMatrix />
            </section>
        )
    }
}