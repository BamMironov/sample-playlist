import React, { Component } from 'react';
import { Playlist, Filters } from 'components';
import { connect } from 'react-redux';
import { fetchTrackList, fetchGenresList, fetchArtistsList } from 'store';
import "./main.scss";

 class MainView extends Component {
    async componentDidMount() {
        this.props.dispatch(fetchTrackList());
        this.props.dispatch(fetchGenresList());
        this.props.dispatch(fetchArtistsList());
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