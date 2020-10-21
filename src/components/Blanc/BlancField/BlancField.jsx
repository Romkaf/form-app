import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlancField.module.scss';

const Blancfield = ({ label, value }) => {
	return (
		<>
			<span className="field">{label}</span>
			<span className="value">{value}</span>
		</>
	);
};

Blancfield.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
};

export default Blancfield;
