import React, { Component } from "react";
import "./filters.scss";

export class Filters extends Component {
    render() {
        return (
            <div className="filters">
                <div className="title">Фильтр</div>

                <div className="filters__list">
                    <div className="filters__item">
                        <div className="filters__item__title">Исполнитель</div>
                        <div className="dropdown">
                            <div className="dropdown__wrapper">
                                <div className="dropdown__value">Все</div>
                                <div className="dropdown__icon"></div>
                            </div>
                            <ul className="dropdown__list">
                                <li className="dropdown__list__item"></li>
                                <li className="dropdown__list__item"></li>
                                <li className="dropdown__list__item"></li>
                            </ul>
                        </div>
                    </div>

                    <div className="filters__item">
                        <div className="filters__item__title">Жанр</div>
                        <div className="dropdown">
                            <div className="dropdown__wrapper">
                                <div className="dropdown__value">Все</div>
                                <div className="dropdown__icon"></div>
                            </div>
                            <ul className="dropdown__list">
                                <li className="dropdown__list__item"></li>
                                <li className="dropdown__list__item"></li>
                                <li className="dropdown__list__item"></li>
                            </ul>
                        </div>
                    </div>

                    <div className="filters__item">
                        <div className="filters__item__title">Год</div>
                        <div className="dropdown">
                            <div className="dropdown__wrapper">
                                <div className="dropdown__value">Все</div>
                                <div className="dropdown__icon"></div>
                            </div>
                            <ul className="dropdown__list">
                                <li className="dropdown__list__item"></li>
                                <li className="dropdown__list__item"></li>
                                <li className="dropdown__list__item"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}