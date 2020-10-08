import React from 'react';
import './Form.scss';

const Form = () => {
	return (
		<form className="form">
			<label>
				Имя
				<input className="form__input" type="text" name="name" />
			</label>

			<label>
				Фамилия
				<input className="form__input" type="text" name="surname" />
			</label>

			<label>
				Дата рождения
				<input className="form__input" type="data" name="bithday" />
			</label>
			<label>
				Пол
				<select className="form__input">
					<option>Муж</option>
					<option>Жен</option>
				</select>
			</label>
			<label>
				Номер телефона
				<input className="form__input" type="tel" name="phone" />
			</label>
			<button className="form__button" type="button">
				Ввести
			</button>
		</form>
	);
};

export default Form;
