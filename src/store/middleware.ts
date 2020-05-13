import { Middleware, MiddlewareAPI, Dispatch, Store, AnyAction } from 'redux';
import { UrlAction } from './actionCreator';
import { UrlStoreState } from './urlStoreState';
import { transformQueryToSearch } from '../utils/transform';

export const urlMiddleware = (
    callback?: (url: UrlStoreState) => AnyAction,
): Middleware => <TStore extends Store & { url: UrlStoreState }>(
    _: MiddlewareAPI<Dispatch, TStore>
) => (next: Dispatch<AnyAction>) => (action: UrlAction) => {
    if (action.type === 'SET_URL_QUERY' && action.payload.search) {
        history.pushState(null, '', transformQueryToSearch(action.payload.search));
    }
    if (action.type === 'SET_URL_HASH') {
        history.pushState(null, '', `#${action.payload.hash}`);
    }
    if (action.type === 'SET_NEW_URL' && callback) {
        next(callback(action.payload));
    }
    next(action);
};
