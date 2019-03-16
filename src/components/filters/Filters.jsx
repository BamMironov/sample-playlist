import React, { Component } from "react";
import { Dropdown } from 'components';
import "./filters.scss";

export class Filters extends Component {
    render() {
        return (
            <div className="filters">
                <div className="title">Фильтр</div>

                <div className="filters__list">
                    <div className="filters__item">
                        <div className="filters__item__title">Исполнитель</div>
                        <Dropdown items={fakeBands} />
                    </div>

                    <div className="filters__item">
                        <div className="filters__item__title">Жанр</div>
                        <Dropdown items={fakeGenres} />
                    </div>

                    <div className="filters__item">
                        <div className="filters__item__title">Год</div>
                        <Dropdown items={fakeYears} />
                    </div>
                </div>
            </div>
        )
    }
}

const fakeBands = ['Все', 'Led Zeppelin', 'Miles Davis', 'Muddy Waters'];
const fakeGenres = ["Rock", "Jazz", "Blues"];
const fakeYears = ["1975", "1959", "1955"];