import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addDataToBlanc } from '../../models/actions';
import './Form.scss';

const Form = ({ addDataToBlanc }) => {
	const handleValuesValidate = () => {
		const form = document.forms['myForm'];

		const newData = {
			name: form['name'].value,
			surname: form['surname'].value,
			birthday: form['birthday'].value,
			sex: form['sex'].value,
			phone: form['phone'].value,
		};

		const { name, surname, birthday, sex, phone } = newData;

		if (name.match(/\d/g) || surname.match(/\d/g)) {
			console.log('Используйте только буквы в имени и фамилии');
		} else if (!name || !surname) {
			console.log('Введите имя и фамилию');
		}

		if (!birthday) {
			console.log('выберете дату');
		}

		if (!sex) {
			console.log('выберете пол');
		}

		if (phone.match(/[^\d-]+/g)) {
			console.log('Некорректный номер телефона');
		} else if (!phone) {
			console.log('Введите номер телефона');
		}

		console.log('newData', newData);
	};

	return (
		<form className="form" name="myForm">
			<ul>
				<li className="form__elem">
					<label>
						Имя
						<input className="form__input" type="text" name="name" />
					</label>
				</li>
				<li className="form__elem">
					<label>
						Фамилия
						<input className="form__input" type="text" name="surname" />
					</label>
				</li>
				<li className="form__elem">
					<label>Дата рождения</label>
					<input className="form__input" type="date" name="birthday" />
				</li>
				<li className="form__elem">
					<div className="form__checkbox">
						<span>Пол</span>
						<label>
							Муж
							<input type="radio" name="sex" value="Муж" />
						</label>
						<label>
							Жен
							<input type="radio" name="sex" value="Жен" />
						</label>
					</div>
				</li>
				<li className="form__elem">
					<label>
						Телефон
						<input className="form__input" type="tel" name="phone" />
					</label>
				</li>
			</ul>

			<button
				className="form__button"
				type="button"
				onClick={handleValuesValidate}
			>
				Ввести
			</button>
		</form>
	);
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addDataToBlanc })(Form);
