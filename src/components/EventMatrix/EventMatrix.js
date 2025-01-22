import React, {Component} from 'react';
import moment from 'moment';
import normalizeWheel from 'normalize-wheel';
import './EventMatrix.scss';
import chevronLeft from '../../assets/img/chevron-left-grey.svg';
import chevronRight from '../../assets/img/chevron-right-grey.svg';
import CalendarPicker from '../CalendarPicker/CalendarPicker';
import eventMatrixData from './eventMatrixData';

const referenceHour = 8;

export default class EventMatrix extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            activeDate: new moment(),
            data: eventMatrixData
        };

        this.prevScroll = 0;

        this.setDate = this.setDate.bind(this);
        this.handleMouseWheel = this.handleMouseWheel.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    setDate(date) {
        this.setState({activeDate: moment(date)});
    }

    handleIntervalChange(amount) {
        const date = this.state.activeDate.clone().add(amount, 'day');
        this.setState({activeDate: date});
    }

    renderTimeCells() {
        const slots = [];
        for (let i = 0; i < 48; i++) {
            slots.push(
                <div key={i}>
                    {moment().set('hour', referenceHour).set('minutes', 0).add(i, 'hours').format('H:mm')}
                </div>
            );
        }

        return slots;
    }

    renderHourCells(data) {
        const slots = [];
        const dateKey = this.state.activeDate.format('YYYY-MM-DD');
        const currentDayData = data.hasOwnProperty(dateKey)
            ? data[dateKey]
            : {};

        for (let i = 0; i < 48; i++) {
            const hour = moment().set('hour', referenceHour).set('minutes', 0).add(i, 'hours').format('H:mm');

            const hourData = currentDayData.hasOwnProperty(hour)
                ? currentDayData[hour]
                : {value: "0.0", status: ''};

            slots.push(
                <div className={'event-matrix-cell ' + hourData.status} key={i}>
                    <span>{hourData.value}</span>
                    <div></div>
                    <div></div>
                </div>
            );
        }

        return slots;
    }

    handleMouseWheel(e) {
        e.preventDefault();
        const normalized = normalizeWheel(e);
        this.scrollContainer.scrollLeft += normalized.pixelY;
    }

    handleScroll(e) {
        const scroll = this.scrollContainer.scrollLeft;
        
        if (scroll >= 1640 && this.prevScroll < 1640) {
            this.handleIntervalChange(1);
        } else if (scroll < 1640 && this.prevScroll >= 1640) {
            this.handleIntervalChange(-1);
        }

        this.prevScroll = this.scrollContainer.scrollLeft;
    }

    render() {
        if (!this.state.activeDate) return null;

        return (
            <div className="event-matrix">
                <div className="event-matrix-legend">
                    <div className="event-matrix-legend-unavailable">
                        <i></i>
                        <span>Unavailable</span>
                    </div>
                    <div className="event-matrix-legend-reserved">
                        <i></i>
                        <span>Reserved</span>
                    </div>
                </div>
                <div className="event-matrix-header">
                    <div className="event-matrix-date-controls">
                        <img onClick={() => this.handleIntervalChange(-1)} src={chevronLeft} />
                        <span>{moment(this.state.activeDate).format('dddd, MMMM Do')}</span>
                        <img onClick={() => this.handleIntervalChange(1)} src={chevronRight} />
                        <CalendarPicker value={this.state.activeDate} setValue={this.setDate} />
                    </div>
                </div>
                <div className="event-matrix-body">
                    <div className="event-matrix-body-labels">
                        <div className="event-matrix-time-label">Time (HR)</div>
                        <div className="event-matrix-row-labels">
                            {this.state.data.map((program, index) =>
                                <div className="event-matrix-row-label" key={index}>
                                    <span>{program.title}</span>
                                </div>                                
                            )}
                        </div>
                    </div>
                    <div className="event-matrix-scroll-container"
                        ref={(scrollContainer) => { this.scrollContainer = scrollContainer; }}
                        onWheel={this.handleMouseWheel}
                        onScroll={this.handleScroll}>
                        <div className="event-matrix-timeline">
                            {this.renderTimeCells()}
                        </div>
                        <div className="event-matrix-content">
                            {this.state.data.map((program, index) =>
                                <div className="event-matrix-row" key={index}>
                                    {this.renderHourCells(program.data)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}