import React, { PureComponent } from "react";
import { Pagination, ItemsPerPage } from 'components';
import { connect } from 'react-redux';
import { setLimit, setPage, fetchTrackList, setSorting, setDirection } from 'store';
import { SortingBy, Direction } from 'enums';
import { PlaylistHeader } from './components/PlaylistHeader'
import "./playlist.scss";

export class PlaylistComponent extends PureComponent {
    async _onItemPerPageClick(value) {
        await Promise.all([
            this.props.dispatch(setPage(1)),
            this.props.dispatch(setLimit(value))
        ]);

        this.props.dispatch(fetchTrackList());
    }

    async _onPaginationClick(value) {
        await this.props.dispatch(setPage(value));
        this.props.dispatch(fetchTrackList());
    }

    async _onHeaderClick(sortingType) {
        await Promise.all([
            this.props.dispatch(setPage(1)),
            this.props.dispatch(setSorting(sortingType)),
            this.props.dispatch(setDirection(this.props.direction === Direction.DESC ? Direction.ASC : Direction.DESC))
        ]);

        this.props.dispatch(fetchTrackList());
    }

    render() {
        const { sorting, direction } = this.props;

        return (
            <div className="playlist">
                <div className="title">Плэйлист</div>

                <table className="playlist__grid">
                    <thead>
                        <tr>
                            {headers.map((item, i) => {
                                return (
                                    <PlaylistHeader key={i} onClick={() => this._onHeaderClick(item.sorting)} isReversed={direction === Direction.ASC} isActive={sorting === item.sorting} title={item.title} />
                                )
                            })}
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.tracks.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td className="playlist__cell">{item.artist}</td>
                                    <td className="playlist__cell">{item.title}</td>
                                    <td className="playlist__cell">{item.genres[0].genre_title}</td>
                                    <td className="playlist__cell">{item.year}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <div className="playlist__pagination">
                    {this.props.total_pages > 1 && <Pagination value={this.props.page} max={this.props.total_pages} onClick={value => this._onPaginationClick(value)} />}
                    <ItemsPerPage items={itemsPerPage} value={this.props.limit} onClick={value => this._onItemPerPageClick(value)} />
                </div>
            </div>
        )
    }
}

const itemsPerPage = [10, 25, 50, 100];

const headers = [
    {
        title: 'Исполнитель',
        sorting: SortingBy.ArtistName
    },
    {
        title: 'Песня',
        sorting: SortingBy.Title
    },
    {
        title: 'Жанр',
        sorting: SortingBy.Genre
    },
    {
        title: 'Год',
        sorting: SortingBy.Created
    }
];

const mapStateToProps = ({ filtersStore, entitiesStore }) => ({
    limit: filtersStore.limit,
    page: filtersStore.page,
    total_pages: filtersStore.total_pages,
    tracks: entitiesStore.tracks,
    sorting: filtersStore.sort_by,
    direction: filtersStore.sort_dir
});

export const Playlist = connect(mapStateToProps)(PlaylistComponent)