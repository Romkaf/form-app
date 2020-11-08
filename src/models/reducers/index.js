import { ADD_VALUES_TO_BLANC } from '../actions/actionTypes';

export default (state, action) => {
	switch (action.type) {
		case ADD_VALUES_TO_BLANC:
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
};
