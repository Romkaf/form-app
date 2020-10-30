import validatorLib from 'validator';

const validator = {
	isMinLength: (text) => text.length > 1,
	isDateBoundaries: (date) => {
		const bottomDate = '1920 - 01 - 01';
		const topDate = new Date().toJSON().slice(0, 10);
		return date > bottomDate && date < topDate;
	},
};

export const validate = (fields) => {
	const errors = {};
	if (fields?.name !== undefined) {
		if (!validatorLib.isAlpha(fields.name, 'ru-RU')) {
			errors.name = 'Используйте только русские буквы в имени';
		}

		if (!validator.isMinLength(fields.name)) {
			errors.name = 'Имя должно содержать не менее двух бкув';
		}

		if (!fields.name) {
			errors.name = 'Введите имя';
		}
	}

	if (fields?.surname !== undefined) {
		if (!validatorLib.isAlpha(fields.surname, 'ru-RU')) {
			errors.surname = 'Используйте только русские буквы в фамилии';
		}

		if (!validator.isMinLength(fields.surname)) {
			errors.surname = 'Фамилия должно содержать не менее двух бкув';
		}

		if (!fields.surname) {
			errors.surname = 'Введите фамилию';
		}
	}

	if (fields?.birthday !== undefined) {
		if (!validator.isDateBoundaries(fields.birthday)) {
			errors.birthday = 'Введите корректное значения даты';
		}

		if (!fields.birthday) {
			errors.birthday = 'Укажите дату';
		}
	}

	if (fields?.sex !== undefined) {
		if (!fields.sex) {
			errors.sex = 'Укажите пол ';
		}
	}

	if (fields?.phone !== undefined) {
		if (!validatorLib.isMobilePhone(fields.phone, 'ru-RU')) {
			errors.phone = 'Номер введен неправильно';
		}

		if (!fields.phone) {
			errors.phone = 'Введите номер телефона';
		}
	}

	return errors;
};
