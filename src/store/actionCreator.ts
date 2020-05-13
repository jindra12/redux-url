import { Action } from 'redux';
import { UrlActionTypes } from './actionTypes';
import { UrlStoreState } from './urlStoreState';

export interface UrlAction extends Action<UrlActionTypes> {
    payload: Partial<UrlStoreState>;
}

/**
 * Set hash for url. Dont add '#' prefix.
 */
export const setUrlHash = (hash: string): UrlAction => ({
    type: 'SET_URL_HASH',
    payload: { hash },
});

export const setNewUrl = (location: UrlStoreState): UrlAction => ({
    type: 'SET_NEW_URL',
    payload: location,
});

/**
 * Sets location.search parameter. In this case, search is a map, not a string.
 * Will update location search with transformed string
 * @param search use a model which is/can be converted to string map. One level conversion only.
 */
export const setUrlQuery = (search: { [key: string]: string }): UrlAction => ({
    type: 'SET_URL_QUERY',
    payload: { search },
});
