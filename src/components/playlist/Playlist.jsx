import React, { Component } from "react";
import { Pagination, ItemsPerPage } from 'components';
import { connect } from 'react-redux';
import { setLimit, setPage } from 'store';
import "./playlist.scss";

export class PlaylistComponent extends Component {
    _onItemPerPageClick(value) {
        this.props.dispatch(setLimit(value))
    }

    _onPaginationClick(value) {
        this.props.dispatch(setPage(value));
    }

    render() {
        return (
            <div className="playlist">
                <div className="title">Плэйлист</div>

                <table className="playlist__grid">
                    <thead>
                        <tr>
                            <td className="playlist__cell playlist__cell_header">Исполнитель</td>
                            <td className="playlist__cell playlist__cell_header">Песня</td>
                            <td className="playlist__cell playlist__cell_header">Жанр</td>
                            <td className="playlist__cell playlist__cell_header">Год</td>
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
                    <Pagination value={this.props.page} max={this.props.total_pages} onClick={value => this._onPaginationClick(value)}/>
                    <ItemsPerPage items={itemsPerPage} value={this.props.limit} onClick={value => this._onItemPerPageClick(value)}/>
                </div>
            </div>
        )
    }
}

const itemsPerPage = [10, 25, 50, 100];

const mapStateToProps = state => ({
    limit: state.filter.limit,
    page: state.filter.page,
    total_pages: state.filter.total_pages
});

export const Playlist = connect(mapStateToProps)(PlaylistComponent)