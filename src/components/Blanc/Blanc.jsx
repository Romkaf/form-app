import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BlancField from './BlancField';

import './Blanc.module.scss';

const Blanc = (data) => {
	const { name, surname, birthday, sex, phone } = data;

	const fields = [
		{ label: 'Имя', value: name },
		{ label: 'Фамилия', value: surname },
		{ label: 'Год рождения', value: birthday },
		{ label: 'Пол', value: sex },
		{ label: 'Телефон', value: phone },
	];

	return (
		<div className="wrapper">
			<ul className="blanc">
				{fields.map(({ label, value }) => (
					<li key={label}>
						<BlancField label={label} value={value} />
					</li>
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => ({
	...state,
});

export default connect(mapStateToProps)(Blanc);

Blanc.propTypes = {
	data: PropTypes.object,
};
