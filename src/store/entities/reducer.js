import {
    FETCH_TRACKLIST_SUCCESS,
    FETCH_GENRELIST_SUCCESS,
    FETCH_ARTISTLIST_SUCCESS
} from './constants';
import moment from "moment";

const initialState = {
    tracks: [],
    genres: [],
    artists: []
};

export function entitiesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TRACKLIST_SUCCESS:
            return {
                ...state,
                tracks: action.payload.tracks.map(item => {
                    return {
                        id: item.track_id,
                        artist: item.artist_name,
                        title: item.track_title,
                        genres: item.track_genres || [{ genre_title: 'Не определен' }],
                        year: moment(item.track_date_created).format('YYYY')
                    }
                })
            };

        case FETCH_GENRELIST_SUCCESS:
            return {
                ...state,
                genres: action.payload.genres.map(genre => {
                    return {
                        id: genre.genre_id,
                        title: genre.genre_title,
                    }
                })
            };

        case FETCH_ARTISTLIST_SUCCESS:
            return {
                ...state,
                artists: action.payload.artists.map(artist => {
                    return {
                        id: artist.artist_id,
                        title: artist.artist_name,
                    }
                })
            };
        default:
            break;
    }

    return state;
}