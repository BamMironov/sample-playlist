import React, { Component } from 'react';
import { Playlist, Filters } from 'components';
import { Direction, SortingBy } from "./enums";
import { connect } from 'react-redux';
import { fetchTrackList } from 'store';
import "./main.scss";

 class MainView extends Component {
    async componentDidMount() {
        this.props.dispatch(fetchTrackList());
    }

    render() {
        return (
            <div className="main">
                <Playlist tracks={this.props.tracks} />
                <Filters />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tracks: state.tracks
});

export default connect(mapStateToProps)(MainView);