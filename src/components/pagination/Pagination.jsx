import React, { Component } from "react";
import "./pagination.scss";

export class Pagination extends Component {
    render() {
        return (
            <div className="pagination">
                <div className="pagination__arrow pagination__arrow_left"></div>

                <ul className="pagination__list">
                    <li className="pagination__item pagination__item_active">1</li>
                    <li className="pagination__item">2</li>
                    <li className="pagination__item">3</li>
                    <li className="pagination__item">4</li>
                </ul>

                <div className="pagination__arrow pagination__arrow_right"></div>
            </div>
        )
    }
} 