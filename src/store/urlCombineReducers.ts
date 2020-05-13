import { combineReducers, ReducersMapObject } from 'redux';
import { urlReducer } from './reducer';

export const urlCombineReducers = <M extends ReducersMapObject<any, any>>(
    reducers: M
) => combineReducers({
    ...reducers,
    url: urlReducer,
});
