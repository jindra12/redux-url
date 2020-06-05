import { Middleware, MiddlewareAPI, Dispatch, Store, AnyAction } from 'redux';
import { UrlAction } from './actionCreator';
import { UrlStoreState } from './urlStoreState';
import { transformQueryToSearch } from '../utils/transform';

/**
 * Middleware to operate history state changes.
 * @param callback if user time-travels, this gets called to update rest of store.
 */
export const urlMiddleware = (
    callback?: (url: UrlStoreState) => (AnyAction | void),
): Middleware => <TStore extends Store>(
    _: MiddlewareAPI<Dispatch, TStore>
) => (next: Dispatch<AnyAction>) => (action: UrlAction) => {
    if (action.type === 'SET_URL_QUERY' && action.payload.search) {
        history.pushState(null, '', transformQueryToSearch(action.payload.search));
    }
    if (action.type === 'SET_URL_HASH') {
        history.pushState(null, '', `#${action.payload.hash}`);
    }
    if (action.type === 'SET_NEW_URL' && callback) {
        const callbackResult = callback(action.payload);
        if (callbackResult) {
            next(callbackResult);
        }
    }
    next(action);
};
