import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlancField.module.scss';

const Blancfield = ({ label, value }) => {
	const { field, field__label } = styles;

	return (
		<div className={field}>
			<span className={field__label}>{label}:</span>
			<span>{value}</span>
		</div>
	);
};

Blancfield.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
};

export default Blancfield;
