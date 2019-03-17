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
import { Direction, SortingBy } from "enums";
import moment from 'moment';

const initialState = {
    limit: 10,
    page: 1,
    sort_by: null,
    sort_dir: Direction.DESC,
    genre_id: null,
    artist_id: null,
    track_date_created: null,
}

export function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PAGE:
            return {
                ...state,
                page: +action.payload.page
            }

        case SET_LIMIT:
            return {
                ...state,
                limit: +action.payload.limit
            }

        case SET_TOTAL_PAGES:
            return {
                ...state,
                total_pages: +action.payload.total_pages
            }

        case SET_GENRE:
            return {
                ...state,
                genre_id: action.payload.genre_id
            }

        case SET_ARTIST:
            return {
                ...state,
                artist_id: action.payload.artist_id
            }

        case SET_YEAR:
            // Unfortunalty freemusicarchive.org doesn't provide methods to filter by year.
            // So this action does nothing.
            let { year } = action.payload;
            year = year ? year : moment().format('YYYY');

            return {
                ...state,
                track_date_created: moment().set('year', year).toISOString()
            }

        case SET_SORTING:
            return {
                ...state,
                sort_by: action.payload.sortingType
            }

        case SET_DIRECTION:
            return {
                ...state,
                sort_dir: action.payload.direction
            }
        default:
            break;
    }

    return state;
}