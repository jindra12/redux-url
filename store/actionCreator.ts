import { Action } from 'redux';
import { UrlActionTypes } from './actionTypes';
import { UrlStoreType } from './urlStoreType';

export interface UrlAction extends Action<UrlActionTypes> {
    payload: Partial<UrlStoreType>;
}

export const setUrlHash = (hash: string): UrlAction => ({
    type: 'SET_URL_HASH',
    payload: { hash: `#${hash}` },
});

export const setNewUrl = (location: UrlStoreType): UrlAction => ({
    type: 'SET_NEW_URL',
    payload: location,
});

export const setUrlQuery = (query: object): UrlAction => ({
    type: 'SET_URL_QUERY',
    payload: { search: `?${Object.values(query).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&')}` },
});
