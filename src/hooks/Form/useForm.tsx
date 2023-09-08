import { useState } from 'react';

interface FormProps {
	RFC: string;
	CURP: string;
}

function useForm(initialValues: FormProps) {
	const [values, setValues] = useState(initialValues);

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

	const validateRFC = (rfc: string) => {};

	const validateCURP = (curp: string) => {};

	return {
		values,
		handleChange,
		handleSubmit,
		validateCURP,
		validateRFC
	};
}

export default useForm;
