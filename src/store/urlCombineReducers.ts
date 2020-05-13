import { combineReducers, ReducersMapObject } from 'redux';
import { urlReducer } from './reducer';

/**
 * Automatically add library reducer. If you want to add url reducer on your own,
 * name that part of the store 'url'.
 */
export const urlCombineReducers = <M extends ReducersMapObject<any, any>>(
    reducers: M
) => combineReducers({
    ...reducers,
    url: urlReducer,
});
