import React, { Component } from "react";
import { Dropdown } from 'components';
import { range } from "utils";
import { connect } from "react-redux";
import moment from "moment";
import { fetchTrackList, setPage, setGenre, setArtist, setYear } from 'store';
import "./filters.scss";

class FiltersComponent extends Component {
    async _onGenreChange(id) {
        await Promise.all([
            this.props.dispatch(setPage(1)),
            this.props.dispatch(setGenre(id))
        ]);

        this.props.dispatch(fetchTrackList());
    }

    async _onArtistChange(id) {
        await Promise.all([
            this.props.dispatch(setPage(1)),
            this.props.dispatch(setArtist(id))
        ]);

        this.props.dispatch(fetchTrackList());
    }

    async _onYearChange(id) {
        await Promise.all([
            this.props.dispatch(setPage(1)),
            this.props.dispatch(setYear(id))
        ]);

        this.props.dispatch(fetchTrackList());
    }

    render() {
        return (
            <div className="filters">
                <div className="title">Фильтр</div>

                <div className="filters__list">
                    <div className="filters__item">
                        <div className="filters__item__title">Исполнитель</div>
                        <Dropdown items={this.props.artists} onClick={value => this._onArtistChange(value)} />
                    </div>

                    <div className="filters__item">
                        <div className="filters__item__title">Жанр</div>
                        <Dropdown items={this.props.genres} onClick={value => this._onGenreChange(value)} />
                    </div>

                    <div className="filters__item">
                        <div className="filters__item__title">Год</div>
                        <Dropdown items={years} onClick={value => this._onYearChange(value)} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({entitiesStore}) => ({
    genres: entitiesStore.genres,
    artists: entitiesStore.artists,
});
const years = range(1945, +moment().year()).map(year => ({ id: year, title: year }));

export const Filters = connect(mapStateToProps)(FiltersComponent);