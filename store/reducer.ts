import { Reducer } from 'redux';
import { UrlStoreType } from './urlStoreType';
import { UrlAction } from './actionCreator';
import { transformFromUrl } from '../utils/transform';

export const urlInitialState: UrlStoreType = transformFromUrl();

export const urlReducer: Reducer<UrlStoreType, UrlAction> = (state, action) => {
    const urlState = state || urlInitialState;
    switch (action.type) {
        case 'FORCE_SET_URL_ACTION':
        case 'SET_URL_ACTION':
            return { ...urlState, location: action.payload };
        default:
            return urlState;
    }
};
