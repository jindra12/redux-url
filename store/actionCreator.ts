import { Action } from 'redux';
import { UrlActionTypes } from './actionTypes';
import { UrlStoreType } from './urlStoreType';

export interface UrlAction extends Action<UrlActionTypes> {
    payload: UrlStoreType;
}

export const forceSetUrl = (location: UrlStoreType): UrlAction => ({
    type: 'FORCE_SET_URL_ACTION',
    payload: location,
});

export const setUrl = (location: UrlStoreType): UrlAction => ({
    type: 'SET_URL_ACTION',
    payload: location,
});
