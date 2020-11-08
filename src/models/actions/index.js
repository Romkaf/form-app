import { ADD_VALUES_TO_BLANC } from './actionTypes';

const addDataToBlanc = (data) => {
	return {
		type: ADD_VALUES_TO_BLANC,
		payload: data,
	};
};

export { addDataToBlanc };
