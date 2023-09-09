import { useState } from 'react';

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

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { RFC, CURP } = values;
		console.log(RFC, CURP);
	};

	const validateRFC = (rfc: string) => {
		return rfc.length === 13;
	};

	const validateCURP = (curp: string) => {
		return curp.length === 18;
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
