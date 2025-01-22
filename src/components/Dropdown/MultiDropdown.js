import React, {Component} from 'react';
import assign from '../../polyfills/assign';
import './Dropdown.scss';
import Checkbox from '../Selections/Checkbox';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            value: []
        }

        this.setMenu = this.setMenu.bind(this);
        this.toggleValue = this.toggleValue.bind(this);
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

    toggleValue(value) {
        const state = Object.assign({}, this.state);

        if (state.value.indexOf(value) === -1) {
            state.value.push(value);
        } else {
            state.value.splice(state.value.indexOf(value), 1);
        }

        this.setState(
            Object.assign({}, this.state, state)
        );

        this.props.handleChange(this.props.name, state.value);
    }

    getClassName() {
        let className = 'dropdown-multi ';
        className += (this.props.className || 'dropdown');
        className += (this.state.active ? ' active' : '');
        return className;
    }

    getSelectedTitle() {
        return !this.state.value.length
            ? this.props.title
            : this.state.value.length + ' Selected';
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

    renderIcon() {
        return (
            <svg width="11" height="6" viewBox="0 0 11 6" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.664.253A1 1 0 1 0 .336 1.747l4.5 4a1 1 0 0 0 1.328 0l4.5-4A1 1 0 0 0 9.336.253L5.5 3.662 1.664.252z" />
            </svg>
        );
    }

    render() {
        return (
            <div className={this.getClassName()} ref={node => this.node = node}>
                {this.renderLabel()}
                <div className="dropdown-content">
                    <div onClick={() => this.setMenu(!this.state.active)} className="dropdown-header">
                        <span>{this.getSelectedTitle()}</span>
                        {this.renderIcon()}
                    </div>
                    <ul className="dropdown-list">
                        {this.props.options.map((item, index) =>
                            <li onClick={() => this.toggleValue(item.value)}
                                className="dropdown-list-item"
                                key={index}>
                                <Checkbox value={(this.state.value.indexOf(item.value) >= 0)} />
                                {item.label}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}
