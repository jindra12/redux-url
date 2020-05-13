import { createStore, compose, applyMiddleware, AnyAction } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { urlCombineReducers, urlInitialState, urlStoreEnhancer, urlMiddleware } from 'redux-url';
import { testReducer, testInitialState } from './reducer';
import { updateFromUrl } from './actionCreator';
import { IRealTestState } from './state';

const reducers = urlCombineReducers({
    test: testReducer,
});

export const store = createStore(reducers, {
    test: testInitialState,
    url: urlInitialState,
}, compose(
    applyMiddleware(thunk as ThunkMiddleware<IRealTestState, AnyAction>, urlMiddleware(updateFromUrl)),
    urlStoreEnhancer,
));
