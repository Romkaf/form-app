import React from 'react';
import './Form.scss';

const Form = () => {
	return (
		<form className="form">
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
					<input className="form__input" type="date" name="bithday" />
				</li>
				<li className="form__elem">
					<div className="form__checkbox">
						<span>Пол</span>
						<label>
							Муж
							<input type="checkbox" name="phone" />
						</label>
						<label>
							Жен
							<input type="checkbox" name="phone" />
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

			<button className="form__button" type="button">
				Ввести
			</button>
		</form>
	);
};

export default Form;
