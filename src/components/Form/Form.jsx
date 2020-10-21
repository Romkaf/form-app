import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDataToBlanc } from '@models/actions';
import styles from './Form.module.scss';
import { validate } from './validate';
import InputField from './InputField';

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

	const handleValuesValidate = () => {
		const form = document.forms['myForm'];

		const newData = {
			name: form['name'].value,
			surname: form['surname'].value,
			birthday: form['birthday'].value,
			sex: form['sex'].value,
			phone: form['phone'].value,
		};

		const errors = validate(newData);
		setErrorTexts(errors);

		if (Object.keys(errors).length === 0) {
			addDataToBlanc(newData);
		}
	};

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
					onClick={handleValuesValidate}
				>
					Ввести
				</button>
				<button className={form__button} type="reset">
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
