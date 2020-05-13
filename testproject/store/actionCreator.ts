import { Action } from 'redux';
import { TestActionTypes } from './actionTypes';
import { TestState } from './state';
import { UrlStoreState } from 'redux-url';

export interface TestAction extends Action<TestActionTypes> {
    payload: Partial<TestState>;
}

export const setFirstName = (firstName: string): TestAction => ({
    type: 'SET_FIRST_NAME',
    payload: { firstName },
});

export const setLastName = (lastName: string): TestAction => ({
    type: 'SET_LAST_NAME',
    payload: { lastName },
});

export const setOrder = (ordered: string): TestAction => ({
    type: 'SET_ORDER',
    payload: { ordered },
});

export const updateFromUrl = (
    state: UrlStoreState
) => ({
    type: 'SET_ALL',
    payload: {
        firstName: state.search?.firstName,
        lastName: state.search?.lastName,
        ordered: state.hash
    }
});
