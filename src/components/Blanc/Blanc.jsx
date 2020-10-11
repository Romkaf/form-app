import React from 'react';
import PropTypes from 'prop-types';

import './Blanc.scss';

const Blanc = (data) => {
	return (
		<div className="wrapper">
			<ul className="blanc">
				<li className="blanc__item">
					<span className="blanc__field">Имя:</span>
					<span className="blanc__value">Роман</span>
				</li>
				<li className="blanc__item">
					<span className="blanc__field">Фамилия:</span>
					<span className="blanc__value">Кафтуров</span>
				</li>
				<li className="blanc__item">
					<span className="blanc__field">Дата рождения:</span>
					<span className="blanc__value">01.01.1989</span>
				</li>
				<li className="blanc__item">
					<span className="blanc__field">Пол:</span>
					<span className="blanc__value">Муж</span>
				</li>
				<li className="blanc__item">
					<span className="blanc__field">Телефон:</span>
					<span className="blanc__value">89043509145</span>
				</li>
			</ul>
		</div>
	);
};

export default Blanc;

Blanc.propTypes = {
	data: PropTypes.object,
};
