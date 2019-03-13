import React, { Component } from "react";
import { Pagination, ItemsPerPage } from 'components';
import "./playlist.scss";

export class Playlist extends Component {
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
                        <tr>
                            <td className="playlist__cell">Led Zeppelin</td>
                            <td className="playlist__cell">Kashmir</td>
                            <td className="playlist__cell">Rock</td>
                            <td className="playlist__cell">1975</td>
                        </tr>

                        <tr>
                            <td className="playlist__cell">Miles Davis</td>
                            <td className="playlist__cell">Blue Green</td>
                            <td className="playlist__cell">Jazz</td>
                            <td className="playlist__cell">1959</td>
                        </tr>
                    </tbody>
                </table>

                <div className="playlist__pagination">
                    <Pagination />
                    <ItemsPerPage />
                </div>
            </div>
        )
    }
} 