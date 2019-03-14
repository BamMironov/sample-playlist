import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import "./dropdown.scss";

class DropdownComponent extends Component {
    state = {
        show: false,
        value: 'Все'
    }

    get activeIconClass() {
        return this.state.show ? 'dropdown__icon_active' : '';
    }

    toggleList() {
        this.setState(state => ({ show: !state.show }));
    }

    onItemClick(item) {
        this.setState({ value: item, show: false });
    }

    renderList() {
        return (
            <ul className="dropdown__list">
                {this.props.items.map((item, i) => {
                    return (
                        <li key={i} className="dropdown__list__item" onClick={() => this.onItemClick(item)}>{item}</li>
                    )
                })}
            </ul>
        );
    }

    handleClickOutside = () => {
        this.setState({ show: false });
    }

    render() {
        const { show, value } = this.state;

        return (
            <div className="dropdown">
                <div className="dropdown__wrapper" onClick={() => this.toggleList()}>
                    <div className="dropdown__value">{value}</div>
                    <div className={"dropdown__icon " + this.activeIconClass }></div>
                </div>
                {show && this.renderList()}
            </div>
        );
    }
}

export const Dropdown = onClickOutside(DropdownComponent);