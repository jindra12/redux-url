import { store } from './store/store';
import { setUrlFirstName, setUrlLastName, setHashOrdered } from './store/thunk/setWithUrl';
import $ from 'jquery';

store.subscribe(() => {
    const { firstName, lastName, ordered } = store.getState().test;
    // tslint:disable-next-line: no-console
    console.log({ firstName, lastName, ordered });
});

store.dispatch(setUrlFirstName('Paul'));
store.dispatch(setUrlFirstName('John'));
store.dispatch(setUrlFirstName('Peter'));

store.dispatch(setUrlLastName('Hansel'));
store.dispatch(setUrlLastName('Jackson'));
store.dispatch(setUrlLastName('Holmes'));

store.dispatch(setHashOrdered('Plane'));
store.dispatch(setHashOrdered('Spoon'));
store.dispatch(setHashOrdered('Doll'));