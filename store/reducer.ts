import { Reducer } from 'redux';
import { UrlStoreType } from './urlStoreType';
import { UrlAction } from './actionCreator';
import { transformFromUrl } from '../utils/transform';

export const urlInitialState: UrlStoreType = transformFromUrl();

export const urlReducer: Reducer<UrlStoreType, UrlAction> = (state, action) => {
    const urlState = state || urlInitialState;
    switch (action.type) {
        case 'SET_NEW_URL':
            return { urlState, ...action.payload };
        case 'SET_URL_HASH':
            return { urlState, hash: action.payload.hash };
        case 'SET_URL_QUERY':
            return { urlState, search: action.payload.search };
        default:
            return urlState;
    }
};
