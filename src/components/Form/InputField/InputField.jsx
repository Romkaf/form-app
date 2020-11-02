import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './InputField.module.scss';

const InputField = ({
	name,
	label,
	error,
	type,
	radioLabels,
	onInputChange,
}) => {
	const [value, setValue] = useState('');

	const classField = classNames(styles.field);
	const classError = classNames(styles.field__error);
	const classLabel = classNames(styles.field__label, {
		[styles.field__label_small]: value,
	});
	const classRadioWrapper = classNames(styles.field__radioWrapper);
	const classRadioError = classNames({ [styles.wrong]: error });
	const classInput = classNames(styles.field__input, {
		[styles.field__input_wrong]: error,
	});

	const handleInputChange = (evt) => {
		setValue(evt.target.value);
		const name = evt.target.name;
		const value = evt.target.value;
		if (name === 'name' || name === 'surname') {
			onInputChange(name, value);
		}
	};

	const phonePlaceholder = '+7xxxxxxxxxx';

	return (
		<div className={classField}>
			{type === 'radio' ? (
				<div className={classRadioWrapper}>
					<span>{label}</span>
					<div>
						{radioLabels.map((it) => (
							<React.Fragment key={it}>
								<label>
									{it}
									<input
										className={classRadioError}
										type={type}
										name={name}
										value={it}
									/>
								</label>
							</React.Fragment>
						))}
					</div>
				</div>
			) : (
				<>
					<input
						className={classInput}
						id={name}
						type={type}
						name={name}
						onChange={handleInputChange}
						placeholder={type === 'tel' ? phonePlaceholder : null}
						required
					/>
					<label className={classLabel} htmlFor={name}>
						{label}
					</label>
				</>
			)}
			{error && <span className={classError}>{error}</span>}
		</div>
	);
};

InputField.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	error: PropTypes.string,
	radioLabels: PropTypes.arrayOf(PropTypes.string),
};

export default InputField;
