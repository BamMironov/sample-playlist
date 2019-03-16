import musicService from "../services/music-service";
import {
    FETCH_TRACKLIST_SUCCESS,
    SET_LIMIT,
    SET_PAGE,
    SET_TOTAL_PAGES
} from "./constants";

export function fetchTrackList() {
    return async (dispatch, getState) => {
        const { filter } = getState();
        const { data } = await musicService.getTracks(filter);

        dispatch(fetchTrackListSuccess(data.dataset));
        dispatch(setTotalPages(data.total_pages))

        return data;
        //return {};
    };
}

export const fetchTrackListSuccess = tracks => ({
    type: FETCH_TRACKLIST_SUCCESS,
    payload: { tracks }
});

export function setPage(page) {
    return async dispatch => {
        await dispatch({
            type: SET_PAGE,
            payload: { page }
        });

        dispatch(fetchTrackList());
    }
}

export function setTotalPages(total_pages) {
    return async dispatch => {
        await dispatch({
            type: SET_TOTAL_PAGES,
            payload: { total_pages }
        });
    }
}

export function setLimit(limit) {
    return async dispatch => {
        await dispatch({
            type: SET_LIMIT,
            payload: { limit }
        });
        
        dispatch(fetchTrackList());
    }
}