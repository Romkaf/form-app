import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BlancField from './BlancField';
import styles from './Blanc.module.scss';

const Blanc = ({ name, surname, birthday, sex, phone }) => {
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
	name: PropTypes.string,
	surname: PropTypes.string,
	birthday: PropTypes.string,
	sex: PropTypes.string,
	phone: PropTypes.string,
};

const mapStateToProps = (data) => ({
	...data,
});

export default connect(mapStateToProps)(Blanc);
