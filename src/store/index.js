import { createStore } from 'redux';
import { reducer } from '../models/reducers';

const persistedState = localStorage.getItem('state')
	? JSON.parse(localStorage.getItem('state'))
	: {};

const store = createStore(reducer, persistedState);

export default store;
