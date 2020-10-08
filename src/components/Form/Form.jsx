import React from 'react';

const Form = () => {
	return (
		<form className="form">
			<input className="form__input" type="text" name="name" id="name" />
			<label htmlFor="name">Имя</label>
			<input className="form__input" type="text" name="surname" id="surname" />
			<label htmlFor="surname">Фамилия</label>
			<input className="form__input" type="data" name="bithday" id="bithday" />
			<label htmlFor="bithday">Дата рождения</label>
			<select>
				<option>Муж</option>
				<option>Жен</option>
			</select>
			<input className="form__input" type="number" name="phone" id="phone" />
			<label htmlFor="phone">Номер телефона</label>
		</form>
	);
};

export default Form;
