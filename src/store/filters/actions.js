import {
    SET_PAGE,
    SET_LIMIT,
    SET_TOTAL_PAGES,
    SET_GENRE,
    SET_ARTIST,
    SET_YEAR,
    SET_SORTING,
    SET_DIRECTION
} from './constants';

export function setPage(page) {
    return dispatch => {
        dispatch({
            type: SET_PAGE,
            payload: { page }
        });
    }
}

export function setTotalPages(total_pages) {
    return dispatch => {
        dispatch({
            type: SET_TOTAL_PAGES,
            payload: { total_pages }
        });
    }
}

export function setLimit(limit) {
    return dispatch => {
        dispatch({
            type: SET_LIMIT,
            payload: { limit }
        });        
    }
}

export function setGenre(genre_id) {
    return dispatch => {
        dispatch({
            type: SET_GENRE,
            payload: { genre_id }
        });        
    }
}

export function setArtist(artist_id) {
    return dispatch => {
        dispatch({
            type: SET_ARTIST,
            payload: { artist_id }
        });        
    }
}

export function setYear(year) {
    return dispatch => {
        dispatch({
            type: SET_YEAR,
            payload: { year }
        });        
    }
}

export function setSorting(sortingType) {
    return dispatch => {
        dispatch({
            type: SET_SORTING,
            payload: { sortingType }
        });        
    }
}

export function setDirection(direction) {
    return dispatch => {
        dispatch({
            type: SET_DIRECTION,
            payload: { direction }
        });        
    }
}
