import musicService from "../../services/music-service";
import {
    FETCH_TRACKLIST_SUCCESS,
    FETCH_GENRELIST_SUCCESS,
    FETCH_ARTISTLIST_SUCCESS
} from "./constants";
import { setTotalPages } from '../filters';

export function fetchTrackList(query) {
    return async (dispatch, getState) => {
        const { filtersStore } = getState();
        const { data } = await musicService.getTracks(filtersStore);

        dispatch(fetchTrackListSuccess(data.dataset));
        dispatch(setTotalPages(data.total_pages));

        return data;
    };
}

export function fetchGenresList() {
    return async dispatch => {
        const { data } = await musicService.getGenres();

        dispatch(fetchGenresListSuccess(data.dataset));

        return data;
    };
}

export function fetchArtistsList() {
    return async dispatch => {
        const { data } = await musicService.getArtists();

        dispatch(fetchArtistsListSuccess(data.dataset));

        return data;
    };
}

export const fetchTrackListSuccess = tracks => ({
    type: FETCH_TRACKLIST_SUCCESS,
    payload: { tracks }
});

export const fetchGenresListSuccess = genres => ({
    type: FETCH_GENRELIST_SUCCESS,
    payload: { genres }
});

export const fetchArtistsListSuccess = artists => ({
    type: FETCH_ARTISTLIST_SUCCESS,
    payload: { artists }
});
