import { UrlStoreState } from 'redux-url';

export interface TestState {
    firstName?: string;
    lastName?: string;
    ordered?: string;
}

export interface IRealTestState {
    url: UrlStoreState;
    test: TestState;
}