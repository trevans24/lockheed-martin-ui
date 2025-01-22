import React, {Component} from 'react';
import assign from '../../polyfills/assign';
import find from '../../polyfills/find';
import './Dropdown.scss';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            value: null
        }

        this.setMenu = this.setMenu.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    }

    setMenu(value) {
        this.setState(Object.assign({}, this.state, {active: value}))
    }

    setValue(value) {
        this.setState(
            Object.assign({}, this.state, {value: value, active: false})
        );
        this.props.handleChange(this.props.name, value);
    }

    getSelectedTitle() {
        return this.state.value === null
            ? this.props.title
            : this.props.options.find(option => option.value === this.state.value).label;
    }


    handleOutsideClick(e) {
        if (this.node === e.target || !this.node.contains(e.target)) {
            this.setMenu(false);
        }
    }

    renderLabel() {
        return this.props.label
            ? <label>{this.props.label}</label>
            : null;
    }

    render() {
        return (
            <div className={(this.props.className || 'dropdown') + (this.state.active ? ' active' : '')} ref={node => this.node = node}>
                {this.renderLabel()}
                <div className="dropdown-content">
                    <div onClick={() => this.setMenu(!this.state.active)} className="dropdown-header">
                        <span>{this.getSelectedTitle()}</span>
                        <svg width="11" height="6" viewBox="0 0 11 6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.664.253A1 1 0 1 0 .336 1.747l4.5 4a1 1 0 0 0 1.328 0l4.5-4A1 1 0 0 0 9.336.253L5.5 3.662 1.664.252z" />
                        </svg>
                    </div>
                    <ul className="dropdown-list">
                        {this.props.options.map((item, index) =>
                            <li onClick={() => this.setValue(item.value)}
                                className="dropdown-list-item"
                                key={index}>
                                {item.label}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}
