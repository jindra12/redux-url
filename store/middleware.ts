import { Middleware, MiddlewareAPI, Dispatch, Store } from 'redux';
import { UrlAction } from './actionCreator';
import { UrlStoreType } from './urlStoreType';
import { isEqual } from 'lodash';
import { transformFromUrl, transformToUrl } from '../utils/transform';

export const urlMiddleware: Middleware = <TStore extends Store & { url: UrlStoreType }>(
    api: MiddlewareAPI<Dispatch, TStore>
) => (next: Dispatch<UrlAction>) => (action: UrlAction) => {
    if (action.type === 'FORCE_SET_URL_ACTION') {
        const state = api.getState().url;
        const currentUrl = transformFromUrl();
        if (!isEqual(state, currentUrl)) {
            transformToUrl(state);
        }
    }
    next(action);
};
