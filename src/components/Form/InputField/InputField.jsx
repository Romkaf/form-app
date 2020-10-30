import React from 'react';
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
	const classField = classNames(styles.field);
	const classError = classNames(styles.field__error);
	const classLabel = classNames(styles.field__label);
	const classRadioWrapper = classNames(styles.field__radioWrapper);
	const classRadioError = classNames({ [styles.wrong]: error });
	const classInput = classNames(styles.field__input, {
		[styles.field__input_wrong]: error,
	});

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
					<label className={classLabel} htmlFor={name}>
						{label}
					</label>
					<input
						className={classInput}
						id={name}
						type={type}
						name={name}
						onChange={onInputChange}
						placeholder={type === 'tel' ? phonePlaceholder : null}
					/>
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
