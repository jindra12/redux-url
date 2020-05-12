import { combineReducers, ReducersMapObject, Action } from 'redux';
import { urlReducer } from '..';

export const urlCombineReducers = <S, R extends Action<any>>(
    reducers: ReducersMapObject<S, R>
) => combineReducers({
    ...reducers,
    url: urlReducer,
});
