import { useState } from 'react';
import {
	calculateYearsOld,
	validate4Curp,
	validateCurpSize,
	validateDateCharacters,
	validateFistValues,
	validateRfcSize,
	validateSex,
	validateState
} from '../../utils/validate';
import { notify } from '../../components/Form';

interface FormProps {
	RFC: string;
	CURP: string;
}

function useForm(initialValues: FormProps) {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({
		RFC: '',
		CURP: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const createError = (name: string, message: string) => {
		setErrors({
			...errors,
			[name]: message
		});

		setTimeout(() => {
			setErrors({
				...errors,
				[name]: ''
			});
		}, 3000);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { RFC, CURP } = values;
		const isValid = validateFistValues(RFC, CURP);
		if (!isValid) {
			createError('RFC', 'los valores no son correctos');
			createError('CURP', 'los valores no son correctos');
		}
	};

	const validateRFC = (rfc: string) => {
		const isSizeValid = validateRfcSize(rfc);
		if (typeof isSizeValid === 'string')
			createError('RFC', isSizeValid);
	};

	const validateCURP = (curp: string) => {
		const isValidSize = validateCurpSize(curp);
		if (typeof isValidSize === 'string')
			createError('CURP', isValidSize);
		const isSexValid = validateSex(curp);
		if (!isSexValid) {
			createError('CURP', 'El CURP no es valido');
			return;
		}
		const isStateValid = validateState(curp);
		if (!isStateValid) {
			createError('CURP', 'El CURP no es valido');
			return;
		}
		const isValidDate = validateDateCharacters(curp);
		if (!isValidDate) {
			createError('CURP', 'El CURP no es valido por la fecha');
			return;
		}
		const isFirst4CharactersValid = validate4Curp(curp);
		if (!isFirst4CharactersValid) {
			createError('CURP', 'El CURP no es valido');
			return;
		}
		const age = calculateYearsOld(curp);

		if (Math.abs(age) < 18) {
			createError(
				'CURP',
				'El CURP no es valido para menores de edad'
			);
			return;
		}
		notify({
			message: `tu edad es de ${Math.abs(age)} años`,
			type: 'success',
			title: 'Información'
		});
	};

	return {
		values,
		handleChange,
		handleSubmit,
		validateCURP,
		validateRFC,
		errors
	};
}

export default useForm;
