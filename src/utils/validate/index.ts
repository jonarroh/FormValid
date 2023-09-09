import { ESTADOS } from '../const/const';

export const validateState = (curp: string) => {
	return ESTADOS.indexOf(curp.substr(11, 2)) !== -1;
};

export const validate4Curp = (curp: string) => {
	const regex = /^[A-Za-z]{4}/;
	return regex.test(curp);
};

export const validate4Rfc = (rfc: string) => {
	const regex = /^[A-Za-z]{4}/;
	return regex.test(rfc);
};

export const validateFistValues = (curp: string, rfc: string) => {
	return curp.slice(0, 10) === rfc.slice(0, 10);
};

export const validateSex = (curp: string) => {
	return curp[10] === 'H' || curp[10] === 'M';
};

export const validateCurpSize = (curp: string) => {
	if (curp.length > 18) {
		return 'La CURP debe tener 18 caracteres no más';
	}
	if (curp.length < 18) {
		return 'La CURP debe tener 18 caracteres no menos';
	}
	return true;
};

export const validateRfcSize = (rfc: string) => {
	if (rfc.length > 13) {
		return 'El RFC debe tener 13 caracteres no más';
	}
	if (rfc.length < 13) {
		return 'El RFC debe tener 13 caracteres no menos';
	}
	return true;
};

export const validateYear = (curp: string) => {
	return (
		curp.slice(4, 6) <=
		new Date().getFullYear().toString().slice(2, 4)
	);
};

//validar que el mes de nacimiento sea entre 01 y 12
export const validateMonth = (curp: string) => {
	return (
		parseInt(curp.slice(6, 8)) <= 12 &&
		parseInt(curp.slice(6, 8)) >= 1
	);
};

//validar que el día de nacimiento sea entre 01 y 31
export const validateDay = (curp: string) => {
	return (
		parseInt(curp.slice(8, 10)) <= 31 &&
		parseInt(curp.slice(8, 10)) >= 1
	);
};

export const validateDateCharacters = (curp: string) => {
	const dateDigits = curp.slice(4, 10);
	const regexDigits = /^[0-9]+$/;

	if (!regexDigits.test(dateDigits)) {
		return false;
	}

	const yearDigits = parseInt(dateDigits.slice(0, 2), 10);
	const month = parseInt(dateDigits.slice(2, 4), 10);
	const day = parseInt(dateDigits.slice(4, 6), 10);

	// Obtener el año completo teniendo en cuenta el siglo.
	const currentYear = new Date().getFullYear();
	const century = curp.charAt(16) === 'A' ? 2000 : 1900;
	const year = century + yearDigits;

	if (year < currentYear - 100 || year > currentYear) {
		console.log('year');
		return false;
	}

	if (month < 1 || month > 12) {
		console.log('month');
		return false;
	}

	if (day < 1 || day > 31) {
		console.log('day');
		return false;
	}

	return true;
};

export const calculateYearsOld = (curp: string) => {
	let yearDigits = parseInt(curp.slice(4, 6), 10);
	const month = parseInt(curp.slice(6, 8), 10);
	const day = parseInt(curp.slice(8, 10), 10);

	const today = new Date();
	const yearToday = today.getFullYear() % 100;
	const monthToday = today.getMonth() + 1;
	const dayToday = today.getDate();

	const century = curp.charAt(16) === 'A' ? 2000 : 1900;
	let year = century + yearDigits;

	if (century == 1900) {
		// @ts-ignore-next-line
		yearDigits = '19' + yearDigits;
	} else {
		// @ts-ignore-next-line
		if (yearDigits < 10) yearDigits = '200' + yearDigits;
		// @ts-ignore-next-line
		else yearDigits = '20' + yearDigits;
	}

	console.log({
		yearDigits,
		yearToday,
		year
	});

	let age = parseInt('20' + yearToday) - yearDigits;

	if (monthToday < month) {
		age--;
	}

	if (monthToday === month && dayToday < day) {
		age--;
	}
	console.log(age);

	return age;
};
