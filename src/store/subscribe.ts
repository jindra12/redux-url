import { Store } from 'redux';
import { setNewUrl } from './actionCreator';
import { transformFromUrl } from '../utils/transform';

/**
 * Pass store through here to synchronize it with url in case of time-travel.
 * Will NOT trigger on history.pushState or history.replaceState.
 */
export const subscribeToUrl = (store: Store) =>
    window.addEventListener('popstate', () => {
        store.dispatch(setNewUrl(transformFromUrl()));
    });