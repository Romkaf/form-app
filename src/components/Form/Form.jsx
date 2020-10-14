import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addDataToBlanc } from '../../models/actions';
import './Form.scss';

const Form = ({ addDataToBlanc }) => {
	const [data, setData] = useState({
		name: '',
		surname: '',
		birthday: '',
		sex: '',
		phone: '',
	});

	const handlerInputChange = (property) => (evt) => {
		evt.persist();
		setData((data) => ({
			...data,
			[property]: evt.target.value,
		}));
	};

	return (
		<form className="form">
			<ul>
				<li className="form__elem">
					<label>
						Имя
						<input
							className="form__input"
							type="text"
							name="name"
							onChange={handlerInputChange('name')}
						/>
					</label>
				</li>
				<li className="form__elem">
					<label>
						Фамилия
						<input
							className="form__input"
							type="text"
							name="surname"
							onChange={handlerInputChange('surname')}
							required
						/>
					</label>
				</li>
				<li className="form__elem">
					<label>Дата рождения</label>
					<input
						className="form__input"
						type="date"
						name="bithday"
						onChange={handlerInputChange('birthday')}
					/>
				</li>
				<li className="form__elem">
					<div className="form__checkbox">
						<span>Пол</span>
						<label>
							Муж
							<input
								type="radio"
								name="sex"
								value="Муж"
								onChange={handlerInputChange('sex')}
							/>
						</label>
						<label>
							Жен
							<input
								type="radio"
								name="sex"
								value="Жен"
								onChange={handlerInputChange('sex')}
							/>
						</label>
					</div>
				</li>
				<li className="form__elem">
					<label>
						Телефон
						<input
							className="form__input"
							type="tel"
							name="phone"
							onChange={handlerInputChange('phone')}
						/>
					</label>
				</li>
			</ul>

			<button
				className="form__button"
				type="button"
				onClick={() => addDataToBlanc(data)}
			>
				Ввести
			</button>
		</form>
	);
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addDataToBlanc })(Form);
