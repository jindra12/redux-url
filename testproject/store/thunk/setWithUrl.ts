import { ThunkAction } from "redux-thunk";
import { IRealTestState } from "../state";
import { AnyAction } from "redux";
import { setUrlQuery, setUrlHash } from "redux-url";
import { setFirstName, setLastName, setOrder } from "../actionCreator";

export const setUrlFirstName = (
    firstName: string
): ThunkAction<void, IRealTestState, undefined, AnyAction> => (dispatch, store) => {
    const lastName = store().test.lastName || '';
    dispatch(setUrlQuery({
        firstName,
        lastName,
    }));
    dispatch(setFirstName(firstName));
};

export const setUrlLastName = (
    lastName: string
): ThunkAction<void, IRealTestState, undefined, AnyAction> => (dispatch, store) => {
    const firstName = store().test.firstName || '';
    dispatch(setUrlQuery({
        firstName,
        lastName,
    }));
    dispatch(setLastName(lastName));
};

export const setHashOrdered = (
    ordered: string
): ThunkAction<void, IRealTestState, undefined, AnyAction> => dispatch => {
    dispatch(setUrlHash(ordered));
    dispatch(setOrder(ordered));
};
