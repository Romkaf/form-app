import { createStore } from 'redux';
import reducer from '../models/reducers';

const initialState = localStorage.getItem('state')
	? JSON.parse(localStorage.getItem('state'))
	: {
			name: '',
			surname: '',
			birthday: '',
			sex: '',
			phone: '',
	  };

const store = createStore(reducer, initialState);

export default store;
