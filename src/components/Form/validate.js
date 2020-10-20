import validatorLib from 'validator';

export const validate = (fields) => {
	const errors = {};

	if (!validatorLib.isAlpha(fields.name, 'ru-RU')) {
		errors.name = 'Используйте только русские буквы в имени';
	}

	if (!fields.name) {
		errors.name = 'Введите имя';
	}

	if (!validatorLib.isAlpha(fields.surname, 'ru-RU')) {
		errors.surname = 'Используйте только русские буквы в фамилии';
	}

	if (!fields.surname) {
		errors.surname = 'Введите фамилию';
	}

	if (!fields.birthday) {
		errors.birthday = 'Укажите дату';
	}

	if (!fields.sex) {
		errors.sex = 'Укажите пол ';
	}

	if (!validatorLib.isMobilePhone(fields.phone, 'ru-RU')) {
		errors.phone = 'Номер введен неправильно ';
	}

	if (!fields.phone) {
		errors.phone = 'Введите телефон';
	}

	return errors;
};
