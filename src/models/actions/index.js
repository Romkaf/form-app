import actionTypes from './actionTypes';

const { ADD_VALUES_TO_BLANC } = actionTypes;

const addDataToBlanc = (data) => {
	return {
		type: ADD_VALUES_TO_BLANC,
		payload: data,
	};
};

export { addDataToBlanc };
