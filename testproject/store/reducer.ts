import { Reducer } from 'redux';
import { TestAction } from './actionCreator';
import { TestState } from './state';

export const testInitialState: TestState = {
    firstName: '',
    lastName: '',
    ordered: '',
};

export const testReducer = (state: TestState | undefined, action: TestAction) => {
    const testState = state || testInitialState;
    switch (action.type) {
        case 'SET_FIRST_NAME':
            return { ...testState, firstName: action.payload.firstName };
        case 'SET_LAST_NAME':
            return { ...testState, lastName: action.payload.lastName };
       case 'SET_ORDER':
            return { ...testState, ordered: action.payload.ordered };
        default:
            return testState;
    }
};
