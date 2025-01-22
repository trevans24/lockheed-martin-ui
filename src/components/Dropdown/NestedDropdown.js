import React, {Component} from 'react';
import assign from '../../polyfills/assign';
import './Dropdown.scss';
import Checkbox from '../Selections/Checkbox';

export default class NestedDropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            value: []
        }

        this.setMenu = this.setMenu.bind(this);
        this.setSelectedValues = this.setSelectedValues.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    }

    setMenu(value) {
        this.setState(
            Object.assign({}, this.state, {active: value})
        );
    }

    setSelectedValues(values) {
        this.setState(
            Object.assign({}, this.state, {value: values})
        );
        this.props.handleChange(this.props.name, values);
    }

    toggleValue(value) {
        const selectedValues = this.state.value.slice(0);

        if (selectedValues.indexOf(value) === -1) {
            selectedValues.push(value);
        } else {
            selectedValues.splice(selectedValues.indexOf(value), 1);
        }

        this.setSelectedValues(selectedValues);
    }

    toggleAll() {
        this.setSelectedValues(
            this.setAllChildrenRecursive(
                this.props,
                !this.itemHasAllChildrenSelected(this.props)
            )
        );
    }

    setAllChildrenRecursive(parent, status, values = false) {
        let selectedValues = (values || this.state.value.slice(0));

        parent.options.forEach(item => {
            if (item.options && item.options.length) {
                selectedValues = this.setAllChildrenRecursive(item, status, selectedValues);
            } else {
                const selected = selectedValues.indexOf(item.value) >= 0;

                if (selected && !status) {
                    selectedValues.splice(selectedValues.indexOf(item.value), 1);
                } else if (!selected && status) {
                    selectedValues.push(item.value);
                }
            }
        });

        return selectedValues;
    }

    getClassName() {
        let className = 'dropdown-nested ';
        className += (this.props.className || 'dropdown');
        className += (this.state.active ? ' active' : '');
        return className;
    }

    getItemClassName(item) {
        let className = 'dropdown-list-item';
        className += (item.options && item.options.length ? ' has-options' : '');
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

    handleItemClick(event, item) {
        event.stopPropagation();

        if (item.value) {
            this.toggleValue(item.value);
            return;
        }

        if (item.options && item.options.length) {
            this.setSelectedValues(
                this.setAllChildrenRecursive(
                    item,
                    !this.itemHasAllChildrenSelected(item)
                )
            );
        }
    }

    itemHasAllChildrenSelected(item) {
        let childrenSelected = true;
            
        for (let i = 0; i < item.options.length; i++) {
            let option = item.options[i];

            // recursively check children
            if (option.options && option.options.length) {
                childrenSelected = this.itemHasAllChildrenSelected(option);
            }

            if (option.value && this.state.value.indexOf(option.value) === -1) {
                childrenSelected = false;
            }

            if (!childrenSelected) break;
        }

        return childrenSelected;
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

    renderItemCheckbox(item) {
        // parent item
        if (item.options && item.options.length) {
            return (
                <Checkbox value={this.itemHasAllChildrenSelected(item)} />
            );
        }

        // child item
        if (item.value) {
            return (
                <Checkbox value={(this.state.value.indexOf(item.value) >= 0)} />
            );
        }

        return null;
    }

    renderOptions(options = []) {
        if (!options.length) return null;

        return (
            options.map((item, index) =>
                <li onClick={(e) => this.handleItemClick(e, item)}
                className={this.getItemClassName(item)}
                key={index}>
                    {this.renderItemCheckbox(item)}
                    {item.label}
                    <ul className="dropdown-list">
                        {this.renderOptions(item.options)}
                    </ul>
                </li>
            )
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
                        <li onClick={(e) => this.toggleAll()}
                            className="dropdown-list-item select-all">
                            <Checkbox value={this.itemHasAllChildrenSelected(this.props)} />
                            Select All
                        </li>
                        {this.renderOptions(this.props.options)}
                    </ul>
                </div>
            </div>
        );
    }
}