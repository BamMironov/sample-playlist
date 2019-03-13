import React, { Component } from 'react';
import { Playlist, Filters } from 'components';
import "./main.scss";

export default class MainView extends Component {
    render() {
        return (
            <div className="main">
                <Playlist />
                <Filters />
            </div>
        )
    }
}