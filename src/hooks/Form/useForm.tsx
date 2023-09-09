import { useState } from 'react';
import {
	calculateYearsOld,
	validate4Curp,
	validate4Rfc,
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
		console.log(errors);
		setErrors({
			...errors,
			[name]: message
		});

		setTimeout(() => {
			//limpiar todos los errores
			setErrors({
				RFC: '',
				CURP: ''
			});
		}, 3000);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { RFC, CURP } = values;
		const isValidRfcSize = validateRfcSize(RFC);
		const isValidCurpSize = validateCurpSize(CURP);
		if (typeof isValidRfcSize === 'string')
			createError('RFC', isValidRfcSize);
		if (typeof isValidCurpSize === 'string')
			createError('CURP', isValidCurpSize);
	};

	const validateRFC = (rfc: string, curp: string) => {
		const isValid = validateFistValues(rfc, curp);
		if (!isValid) {
			createError('RFC', 'El RFC no es igual al CURP');
			return;
		}
		const isValid4Characters = validate4Rfc(rfc);
		if (!isValid4Characters) {
			createError('RFC', 'El RFC no es valido');
			return;
		}
		const age = calculateYearsOld(curp);
		console.log(Math.abs(age));

		if (Math.abs(age) < 18) {
			createError('RFC', 'El RFC no es valido');
			return;
		}
		notify({
			message: `tu edad es de ${Math.abs(age)} años`,
			type: 'success',
			title: 'Información'
		});
	};

	const validateCURP = (curp: string, rfc: string) => {
		const isValid = validateFistValues(rfc, curp);
		console.log(isValid);
		if (!isValid) {
			createError('CURP', 'El CURP no es igual al RFC');
			return;
		}
		const isSexValid = validateSex(curp);
		if (!isSexValid) {
			createError('CURP', 'El CURP no es valido por el sexo');
			return;
		}
		const isStateValid = validateState(curp);
		if (!isStateValid) {
			createError('CURP', 'El CURP no es valido por el estado');
			return;
		}
		const isValidDate = validateDateCharacters(curp);
		if (!isValidDate) {
			createError('CURP', 'El CURP no es valido por la fecha');
			return;
		}
		const isFirst4CharactersValid = validate4Curp(curp);
		if (!isFirst4CharactersValid) {
			createError(
				'CURP',
				'El CURP no es valido por los primeros 4 caracteres'
			);
			return;
		}
		const age = calculateYearsOld(curp);

		if (Math.abs(age) < 18) {
			createError('CURP', 'El CURP no es valido por la edad');
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
