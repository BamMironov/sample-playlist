import React, { Component } from "react";
import "./items-per-page.scss";

export class ItemsPerPage extends Component {
    render() {
        return (
            <ul className="items-per-page">
                <li className="items-per-page__item items-per-page__item_active">10</li>
                <li className="items-per-page__item">25</li>
                <li className="items-per-page__item">50</li>
                <li className="items-per-page__item">100</li>
            </ul>
        );
    }
}