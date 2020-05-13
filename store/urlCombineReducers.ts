import { combineReducers, ReducersMapObject, Action } from 'redux';
import { urlReducer } from './reducer';

export const urlCombineReducers = <S, R extends Action<any>>(
    reducers: ReducersMapObject<S, R>
) => combineReducers({
    ...reducers,
    url: urlReducer,
});
