import { StoreEnhancer, StoreEnhancerStoreCreator, AnyAction, Reducer, Action, PreloadedState } from "redux";
import { setNewUrl } from "./actionCreator";
import { transformFromUrl } from "../utils/transform";

export const urlStoreEnhancer: StoreEnhancer = (
    next: StoreEnhancerStoreCreator
) => <S, A extends Action = AnyAction>(
    reducer: Reducer<S, A>, preloadedState?: PreloadedState<S>
) => {
    const store = next(reducer, preloadedState);
    window.addEventListener('popstate', () => {
        store.dispatch(setNewUrl(transformFromUrl()) as any);
    });
    return store;
};