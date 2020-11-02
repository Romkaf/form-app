import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BlancField from './BlancField';
import styles from './Blanc.module.scss';

const Blanc = ({ name, surname, birthday, sex, phone }) => {
	const {
		blanc,
		blanc__list,
		blanc__item,
		blanc__head,
		blanc__heading,
	} = styles;

	const fields = [
		{ label: 'Имя', value: name },
		{ label: 'Фамилия', value: surname },
		{ label: 'Дата рождения', value: birthday },
		{ label: 'Пол', value: sex },
		{ label: 'Телефон', value: phone },
	];

	return (
		<div className={blanc}>
			<div className={blanc__head}>
				<b> Форма № Т-2</b>
				<span>Утверждена постановлением Госкомитета РФ</span>
				<span>от 5 января 2005 г.</span>
			</div>
			<h2 className={blanc__heading}>Карточка работника</h2>
			<ol className={blanc__list}>
				{fields.map(({ label, value }) => (
					<li className={blanc__item} key={label}>
						<BlancField label={label} value={value} />
					</li>
				))}
			</ol>
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
