import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BlancField from './BlancField';
import styles from './Blanc.module.scss';

import './Blanc.module.scss';

const Blanc = (data) => {
	const { name, surname, birthday, sex, phone } = data;
	const { blanc, blanc__list, blanc__item } = styles;

	const fields = [
		{ label: 'Имя', value: name },
		{ label: 'Фамилия', value: surname },
		{ label: 'Год рождения', value: birthday },
		{ label: 'Пол', value: sex },
		{ label: 'Телефон', value: phone },
	];

	return (
		<div className={blanc}>
			<ul className={blanc__list}>
				{fields.map(({ label, value }) => (
					<li className={blanc__item} key={label}>
						<BlancField label={label} value={value} />
					</li>
				))}
			</ul>
		</div>
	);
};

Blanc.propTypes = {
	data: PropTypes.object,
};

const mapStateToProps = (state) => ({
	...state,
});

export default connect(mapStateToProps)(Blanc);
