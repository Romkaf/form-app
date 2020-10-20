import actionTypes from '../actions/actionTypes';

const { ADD_VALUES_TO_BLANC } = actionTypes;

const initialState = {
	name: '',
	surname: '',
	birthday: '',
	sex: '',
	phone: '',
};

const reducer = (state = initialState, action) => {
	console.log('action.type in reduser:', action.type);
	// console.log('state in reducer', state);
	switch (action.type) {
		case ADD_VALUES_TO_BLANC:
			const { name, surname, birthday, sex, phone } = action.payload;
			return {
				name,
				surname,
				birthday,
				sex,
				phone,
			};

		default:
			return state;
	}
};

export { reducer };
