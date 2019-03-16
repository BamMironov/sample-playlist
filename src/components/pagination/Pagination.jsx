import React, { Component } from "react";
import "./pagination.scss";

export class Pagination extends Component {
    state = {
        start: 1,
        end: 4
    }

    get isLeftArrowActive() {
        return this.state.start > 1;
    }

    get isRightArriwActive() {
        return this.state.end < this.props.max;
    }

    _onLeftArrowClick() {
        this.setState(prevState => ({ start: --prevState.start, end: --prevState.end }));
    }

    _onRightArrowClick() {
        this.setState(prevState => ({ start: ++prevState.start, end: ++prevState.end }));
    }

    render() {
        const itemClassName = `pagination__item`;
        const arrowClassName = `pagination__arrow`;
        const activeClassName = (isActive) => isActive ? itemClassName + '_active' : '';
        const { start, end } = this.state;

        return (
            <div className="pagination">
                <div className={`${arrowClassName} ${arrowClassName}_left ${!this.isLeftArrowActive ? arrowClassName + '_inactive' : ''}`}
                    onClick={() => this._onLeftArrowClick()}></div>

                <ul className="pagination__list">
                    {range(start, end).map(item => {
                        return (
                            <li key={item} 
                                className={`${itemClassName} ${activeClassName(item === this.props.value)}`}
                                onClick={() => this.props.onClick(item)}>{item}</li>
                        );
                    })}
                </ul>

                <div className={`${arrowClassName} ${arrowClassName}_right`} onClick={() => this._onRightArrowClick()}></div>
            </div>
        )
    }
}

const range = (start = 1, end = 4) => {
    let result = [];

    for (let i = start; i <= end; i++) {
       result.push(i);
    }

    return result;
};