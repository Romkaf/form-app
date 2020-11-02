import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './BlancField.module.scss';

const Blancfield = ({ label, value }) => {
	const { field, field__label, field__value } = styles;

	return (
		<div className={field}>
			<span className={field__label}>{label}:</span>
			<p className={field__value}>{value}</p>
		</div>
	);
};

Blancfield.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
};

export default memo(Blancfield);
