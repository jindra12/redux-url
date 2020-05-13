import { Action } from 'redux';
import { UrlActionTypes } from './actionTypes';
import { UrlStoreState } from './urlStoreState';

export interface UrlAction extends Action<UrlActionTypes> {
    payload: Partial<UrlStoreState>;
}

export const setUrlHash = (hash: string): UrlAction => ({
    type: 'SET_URL_HASH',
    payload: { hash },
});

export const setNewUrl = (location: UrlStoreState): UrlAction => ({
    type: 'SET_NEW_URL',
    payload: location,
});

export const setUrlQuery = (search: { [key: string]: string }): UrlAction => ({
    type: 'SET_URL_QUERY',
    payload: { search },
});
