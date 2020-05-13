import { Middleware, MiddlewareAPI, Dispatch, Store } from 'redux';
import { UrlAction } from './actionCreator';
import { UrlStoreType } from './urlStoreType';

export const urlMiddleware: Middleware = <TStore extends Store & { url: UrlStoreType }>(
    _: MiddlewareAPI<Dispatch, TStore>
) => (next: Dispatch<UrlAction>) => (action: UrlAction) => {
    if (action.type === 'SET_URL_QUERY') {
        history.pushState(null, '', action.payload.search);
    }
    if (action.type === 'SET_URL_HASH') {
        history.pushState(null, '', action.payload.hash);
    }
    next(action);
};
