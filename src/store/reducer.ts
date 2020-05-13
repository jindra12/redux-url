import { Reducer } from 'redux';
import { UrlStoreState } from './urlStoreState';
import { UrlAction } from './actionCreator';
import { transformFromUrl } from '../utils/transform';

/**
 * Url initial state will be drawn from Location object.
 */
export const urlInitialState: UrlStoreState = transformFromUrl();

/**
 * Use this only when necessary, and define this part of store as: url: urlReducer.
 * Use urlCombineReducers otherwise.
 */
export const urlReducer: Reducer<UrlStoreState, UrlAction> = (state, action) => {
    const urlState = state || urlInitialState;
    switch (action.type) {
        case 'SET_NEW_URL':
            return { ...urlState, ...action.payload };
        case 'SET_URL_HASH':
            return { ...urlState, hash: action.payload.hash };
        case 'SET_URL_QUERY':
            return { ...urlState, search: action.payload.search };
        default:
            return urlState;
    }
};
