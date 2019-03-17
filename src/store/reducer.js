import { combineReducers } from 'redux';
import { entitiesReducer } from './entities';
import { filtersReducer } from './filters';

export default combineReducers({
    entitiesStore: entitiesReducer,
    filtersStore: filtersReducer
});