import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';
import { connect } from 'react-redux';
import { addDataToBlanc } from '@models/actions';
import { validate } from './validate';
import styles from './Form.module.scss';

const Form = ({ addDataToBlanc }) => {
	const [errorTexts, setErrorTexts] = useState({});
	const { form, form__elem, form__button, form__buttonWrapper } = styles;

	const inputsData = [
		{ name: 'name', label: 'Имя', error: errorTexts?.name, type: 'text' },
		{
			name: 'surname',
			label: 'Фамилия',
			error: errorTexts?.surname,
			type: 'text',
		},
		{
			name: 'birthday',
			label: 'Дата рождения',
			error: errorTexts?.birthday,
			type: 'date',
		},
		{
			name: 'sex',
			label: 'Пол',
			error: errorTexts?.sex,
			type: 'radio',
			radioLabels: ['Муж', 'Жен'],
		},
		{ name: 'phone', label: 'Телефон', error: errorTexts?.phone, type: 'tel' },
	];

	const validateData = (data) => {
		const errors = validate(data);
		setErrorTexts(errors);

		if (Object.keys(errors).length === 0) {
			addDataToBlanc(data);
		}
	};

	const handleBtnEnterClick = () => {
		const form = document.forms['myForm'];
		const newData = {
			name: form['name'].value,
			surname: form['surname'].value,
			birthday: form['birthday'].value,
			sex: form['sex'].value,
			phone: form['phone'].value,
		};

		validateData(newData);
	};

	const handleInputChange = (evt) => {
		const newData = {
			[evt.target.name]: evt.target.value,
		};

		validateData(newData);
	};

	const handleFieldsReset = () => setErrorTexts({});

	return (
		<form className={form} name="myForm">
			<ul>
				{inputsData.map((it) => {
					const { name, label, error, type } = it;
					return (
						<li className={form__elem} key={name}>
							<InputField
								name={name}
								label={label}
								error={error}
								onInputChange={type === 'text' ? handleInputChange : null}
								type={type}
								radioLabels={it?.radioLabels}
							/>
						</li>
					);
				})}
			</ul>

			<div className={form__buttonWrapper}>
				<button
					className={form__button}
					type="button"
					onClick={handleBtnEnterClick}
				>
					Ввести
				</button>
				<button
					className={form__button}
					type="reset"
					onClick={handleFieldsReset}
				>
					Сбросить
				</button>
			</div>
		</form>
	);
};

Form.propTypes = {
	addDataToBlanc: PropTypes.func,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addDataToBlanc })(Form);
