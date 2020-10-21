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
