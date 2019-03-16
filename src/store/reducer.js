import {
    FETCH_TRACKLIST_SUCCESS,
    SET_PAGE,
    SET_LIMIT,
    SET_TOTAL_PAGES
} from './constants';
import { Direction, SortingBy } from "views/enums";
import moment from "moment";

const initialState = {
    tracks: [],
    filter: {
        limit: 10,
        page: 1,
        sort_by: SortingBy.Created,
        sort_dir: Direction.DESC,
    }
};

export function reducer(state = initialState, action) {
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

        case SET_PAGE:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    page: +action.payload.page
                }
            }

        case SET_LIMIT:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    limit: +action.payload.limit
                }
            }
        
        case SET_TOTAL_PAGES:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    total_pages: +action.payload.total_pages
                }
            }
        default:
            break;
    }

    return state;
}