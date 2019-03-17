import React, { PureComponent } from "react";
import onClickOutside from "react-onclickoutside";
import "./dropdown.scss";

const defaultItem = {
    id: null,
    title: 'Все'
}

class DropdownComponent extends PureComponent {
    state = {
        show: false,
        value: defaultItem,
    }

    get activeIconClass() {
        return this.state.show ? 'dropdown__icon_active' : '';
    }

    toggleList() {
        this.setState(state => ({ show: !state.show }));
    }

    onItemClick(item) {
        this.setState({ value: item, show: false, query: item.title });
        this.props.onClick(item.id);
    }

    renderList() {
        const items = this.props.items.slice();
        items.unshift(defaultItem);

        return (
            <ul className="dropdown__list">
                {items.map(item => {
                    return (
                        <li key={item.id} className="dropdown__list__item" onClick={() => this.onItemClick(item)}>{item.title}</li>
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
                    <div className="dropdown__value">{value.title}</div>
                    <div className={"dropdown__icon " + this.activeIconClass }></div>
                </div>
                {show && this.renderList()}
            </div>
        );
    }
}

export const Dropdown = onClickOutside(DropdownComponent);